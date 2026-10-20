import { buildSync } from 'esbuild';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { PGlite } from '@electric-sql/pglite';
import assert from 'node:assert/strict';
import test from 'node:test';
const require = createRequire(import.meta.url);
function load(entry) {
  const code = buildSync({ entryPoints: [entry], bundle: true, platform: 'node', format: 'cjs', write: false }).outputFiles[0].text;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', code)(require, module, module.exports);
  return module.exports;
}
const { mergeProgressSql, progressXpSql } = load('supabase/functions/server/progressSql.ts');
const { mergeLessonProgress } = load('src/app/utils/progressMerge.ts');
const { registerProgressFlush, flushProgressBeforeSignOut } = load('src/app/utils/progressLifecycle.ts');
const question = (xpValue = 25) => ({ correct: true, xpAwarded: true, xpValue });
const lesson = (questions, correctAnswers = 0) => ({ lessonId: 'quiz', questions, correctAnswers, totalTasks: 6, isCompleted: correctAnswers >= 3 });

test('two devices and stale retries preserve all earned XP and best quiz scores in PostgreSQL', async () => {
  const db = new PGlite();
  try {
    await db.exec('CREATE TABLE user_progress (user_id text PRIMARY KEY, lesson_progress jsonb NOT NULL, xp integer NOT NULL);');
    const upsert = async (owner, lp) => {
      const merged = mergeProgressSql('user_progress.lesson_progress', 'EXCLUDED.lesson_progress');
      await db.query(`INSERT INTO user_progress VALUES ($1, $2, ${progressXpSql('$2::jsonb')})
        ON CONFLICT (user_id) DO UPDATE SET (lesson_progress, xp) =
          (SELECT merged, ${progressXpSql('merged')} FROM (SELECT ${merged} AS merged) progress)`, [owner, JSON.stringify(lp)]);
    };
    const laptop = { quiz: lesson({ q1: question(15), q2: question() }, 3) };
    const phone = { quiz: lesson({ q2: { correct: false, xpAwarded: false, xpValue: 25 }, q3: question(15) }, 1), homework: lesson({ hw: question(800) }) };
    await upsert('a', laptop);
    await upsert('a', phone);
    await upsert('a', laptop); // stale device sends its old snapshot again
    let row = (await db.query("SELECT * FROM user_progress WHERE user_id = 'a'")).rows[0];
    assert.equal(row.xp, 855);
    assert.equal(row.lesson_progress.quiz.correctAnswers, 3);
    assert.equal(row.lesson_progress.quiz.isCompleted, true);
    assert.equal(row.lesson_progress.quiz.questions.q2.xpAwarded, true);
    assert.ok(row.lesson_progress.quiz.questions.q3);
    const mergedClient = mergeLessonProgress(laptop, phone);
    assert.deepEqual(row.lesson_progress, JSON.parse(JSON.stringify(mergedClient)));
    await upsert('b', {});
    assert.deepEqual((await db.query("SELECT lesson_progress FROM user_progress WHERE user_id = 'b'")).rows[0].lesson_progress, {});
    await upsert('legacy', { quiz: { lessonId: 'quiz', totalTasks: 6 } });
    await upsert('legacy', laptop);
    assert.equal((await db.query("SELECT xp FROM user_progress WHERE user_id = 'legacy'")).rows[0].xp, 40);
    const originalDate = '2026-10-19T12:00:00.000Z';
    await upsert('dated', { quiz: lesson({ q1: { ...question(15), awardedAt: originalDate } }) });
    await upsert('dated', { quiz: lesson({ q1: { ...question(15), awardedAt: '2026-10-20T12:00:00.000Z' } }) });
    const dated = (await db.query("SELECT lesson_progress FROM user_progress WHERE user_id = 'dated'")).rows[0];
    assert.equal(dated.lesson_progress.quiz.questions.q1.awardedAt, originalDate);
  } finally { await db.close(); }
});

test('sign-out waits for progress and reports failure instead of dropping the session', async () => {
  let finish;
  const unregister = registerProgressFlush(() => new Promise(resolve => { finish = resolve; }));
  let done = false;
  const pending = flushProgressBeforeSignOut().then(result => { done = true; return result; });
  await Promise.resolve();
  assert.equal(done, false);
  finish(true);
  assert.equal(await pending, true);
  unregister();
  const unregisterFailure = registerProgressFlush(async () => false);
  assert.equal(await flushProgressBeforeSignOut(), false);
  unregisterFailure();
  assert.equal(await flushProgressBeforeSignOut(), true);
});

test('push navigation stays in the installed app origin and awaits navigation', async () => {
  const listeners = {};
  const calls = [];
  const client = { url: 'https://skillum.test/lessons', navigate: async url => calls.push(['navigate', url]), focus: async () => calls.push(['focus']) };
  const self = { addEventListener: (name, handler) => { listeners[name] = handler; }, location: { origin: 'https://skillum.test' }, clients: { matchAll: async () => [client], openWindow: async url => calls.push(['open', url]) } };
  runInNewContext(readFileSync('public/sw.js', 'utf8'), { self, URL });
  let pending;
  listeners.notificationclick({ notification: { close() {}, data: { url: '/lessons' } }, waitUntil: promise => { pending = promise; } });
  await pending;
  assert.deepEqual(calls, [['navigate', 'https://skillum.test/lessons'], ['focus']]);
  calls.length = 0;
  listeners.notificationclick({ notification: { close() {}, data: { url: 'https://other.test/path' } }, waitUntil: promise => { pending = promise; } });
  await pending;
  assert.deepEqual(calls[0], ['navigate', 'https://skillum.test/']);
});

const { earnedXpOnDay, localDayKey } = load('src/app/utils/dailyProgress.ts');
test('daily XP counts only first awards on the selected local day', () => {
  const today = new Date(2026, 9, 20, 12);
  const yesterday = new Date(2026, 9, 19, 12);
  const progress = { quiz: lesson({ today: { ...question(15), awardedAt: today.toISOString() }, yesterday: { ...question(25), awardedAt: yesterday.toISOString() }, legacy: question(800), wrong: { correct: false, xpAwarded: false, xpValue: 25, awardedAt: today.toISOString() } }) };
  assert.equal(earnedXpOnDay(progress, localDayKey(today)), 15);
  assert.equal(earnedXpOnDay(progress, localDayKey(yesterday)), 25);
  const merged = mergeLessonProgress(progress, { quiz: lesson({ today: { ...question(15), awardedAt: new Date(2026, 9, 21, 12).toISOString() } }) });
  assert.equal(earnedXpOnDay(merged, localDayKey(today)), 15);
  assert.equal(earnedXpOnDay(merged, localDayKey(new Date(2026, 9, 21))), 0);
});

const { normalizeFigmaLink } = load('supabase/functions/server/figmaLink.ts');
test('Figma links accept file formats and reject garbage, lookalikes and unsafe schemes', () => {
  for (const kind of ['design', 'file', 'proto', 'board', 'slides', 'make']) assert.ok(normalizeFigmaLink(`https://www.figma.com/${kind}/abc123/My-file?node-id=1-2`));
  assert.equal(normalizeFigmaLink(' figma.com/design/abc123/Test '), 'https://figma.com/design/abc123/Test');
  for (const value of ['', 'hello', 'https://example.com/design/a', 'https://figma.com.evil.test/design/a', 'https://figma.com/', 'http://figma.com/file/a', 'javascript:alert(1)', 'https://user@figma.com/design/a', null, {}]) assert.equal(normalizeFigmaLink(value), null);
});

const { presentTheorySections } = load('src/app/utils/theoryPresentation.ts');
test('microquiz positions are mixed, stable, and keep correctness attached to content', () => {
  const sections = Array.from({length: 6}, (_, index) => ({ quizLeftNode: `wrong-${index}`, quizRightNode: `correct-${index}`, quizLeftCorrect: false, quizRightCorrect: true }));
  const shown = presentTheorySections(sections, 'contrast-lesson');
  assert.deepEqual(shown, presentTheorySections(sections, 'contrast-lesson'));
  assert.equal(shown.filter(section => section.quizLeftCorrect).length, 3);
  shown.forEach((section, index) => assert.equal(section.quizLeftCorrect ? section.quizLeftNode : section.quizRightNode, `correct-${index}`));
  assert.equal(sections[0].quizLeftNode, 'wrong-0');
});
