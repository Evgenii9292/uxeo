import { buildSync } from 'esbuild';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import test from 'node:test';
const require = createRequire(import.meta.url);
function load(entry) {
  const code = buildSync({ entryPoints: [entry], bundle: true, platform: 'node', format: 'cjs', write: false }).outputFiles[0].text;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', code)(require, module, module.exports);
  return module.exports;
}
const { presentQuestion, shuffled, readQuizRun } = load('src/app/utils/quizSession.ts');
const { QUIZ_BANK } = load('src/app/data/quiz-bank.ts');
const { courseProgress, pendingHomeworkRewards } = load('src/app/utils/learningProgress.ts');
test('shuffling preserves correct answer contents and alphabetic display labels in the whole bank', () => {
  for (const questions of Object.values(QUIZ_BANK)) for (const question of questions) {
    if (!question.options) continue;
    for (let seed = 1; seed <= 30; seed++) {
      const shown = presentQuestion(question, seed);
      const correctTexts = q => q.options.filter(option => (q.correctAnswers ?? [q.correctAnswer]).includes(option.label)).map(option => option.text).sort();
      assert.deepEqual(correctTexts(shown), correctTexts(question));
      assert.deepEqual(shown.options.map(option => option.label), question.options.map(option => option.label));
    }
  }
  assert.deepEqual(shuffled([1, 2, 3], 42), shuffled([1, 2, 3], 42));
});
test('theory completion and cumulative correct flags do not pass a main quiz', () => {
  assert.equal(courseProgress({ 'contrast-lesson': { isCompleted: true, questions: { 'mini-quiz-0': { correct: true } } } }), 0);
  assert.equal(courseProgress({ quiz_contrast: { correctAnswers: 5, isCompleted: true, questions: {} } }), 0);
  assert.ok(courseProgress({ quiz_contrast: { correctAnswers: 6, questions: {} } }) > 0);
});
test('homework reward eligibility is independent of read status and excludes already awarded rewards', () => {
  const reviewed = [{ lesson_id: 'homework-1', status: 'reviewed', read: true }, { lesson_id: 'homework-1', status: 'reviewed' }, { lesson_id: 'homework-2', status: 'rejected' }];
  assert.deepEqual(pendingHomeworkRewards(reviewed, {}), ['homework-1']);
  assert.deepEqual(pendingHomeworkRewards(reviewed, { 'homework-1': { questions: { hw_xp_reward: { xpAwarded: true } } } }), []);
});
test('resume rejects stale, mismatched and malformed attempts', () => {
  const store = new Map();
  globalThis.localStorage = { getItem: key => store.get(key) ?? null };
  store.set('run', JSON.stringify({ version: 1, total: 12, seed: 42, startedAt: 100, answers: [{ questionId: 'quiz_contrast-q0', isCorrect: true, xpValue: 15 }] }));
  assert.equal(readQuizRun('run', 'quiz_contrast', 12).answers.length, 1);
  assert.equal(readQuizRun('run', 'quiz_color', 12), null);
  assert.equal(readQuizRun('run', 'quiz_contrast', 10), null);
  store.set('run', 'broken');
  assert.equal(readQuizRun('run', 'quiz_contrast', 12), null);
});
