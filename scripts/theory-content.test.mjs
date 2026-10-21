import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import test from 'node:test';
const require = createRequire(import.meta.url);
const { renderToStaticMarkup } = require('react-dom/server');
const code = (await build({
  entryPoints: ['src/app/data/lesson-content.tsx'], bundle: true, jsx: 'automatic',
  platform: 'node', format: 'cjs', write: false,
  loader: { '.png': 'empty', '.svg': 'empty', '.jpg': 'empty', '.webp': 'empty' },
  plugins: [{name: 'fixture-assets',setup(build) {
    build.onResolve({filter: /^figma:asset\//}, args => ({path: args.path, namespace: 'asset'}));
    build.onLoad({filter: /.*/, namespace: 'asset'}, () => ({contents: 'export default "";', loader: 'js'}));
  }}],
})).outputFiles[0].text;
const module = { exports: {} };
new Function('require', 'module', 'exports', code)(require, module, module.exports);
const { LESSON_CONTENT } = module.exports;
const section = (id, index) => LESSON_CONTENT[id].sections[index];
const variants = s => [s.quizLeftNode, s.quizRightNode].map(renderToStaticMarkup);
const words = html => html.replace(/<[^>]*>/g, ' ').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

test('all 59 theory exercises render distinct variants, ask a question and have one correct answer', () => {
  let count = 0;
  for (const lesson of Object.values(LESSON_CONTENT)) for (const s of lesson.sections) {
    assert.equal(Number(s.quizLeftCorrect) + Number(s.quizRightCorrect), 1, lesson.lessonId + ': ' + s.title);
    assert.ok(s.quizQuestion.endsWith('?'), s.quizQuestion);
    const [left, right] = variants(s);
    assert.notEqual(left, right, lesson.lessonId + ': ' + s.title);
    assert.ok(left.length > 30 && right.length > 30);
    assert.ok(s.correctFeedback && s.incorrectFeedback);
    count++;
  }
  assert.equal(count, 59);
});
test('text scanning and block exercises compare identical information', () => {
  for (const [id,index] of [['hierarchy-lesson',1],['interface-structure-lesson',0],['interface-structure-lesson',3],['interface-elements-lesson',3]]) {
    const [left,right]=variants(section(id,index));
    assert.equal(words(left), words(right), id + ' question ' + (index+1));
  }
});
test('purchase paths have the same starting point and completion, with saved address in both', () => {
  const paths=variants(section('user-flow-lesson',2));
  const steps=html=>[...html.matchAll(/class="portable-step"[^>]*><span>[^<]+<\/span>([^<]+)/g)].map(x=>x[1]);
  for (const html of paths) {
    const labels=steps(html);
    assert.equal(labels[0],'Товар');
    assert.equal(labels.at(-1),'Готово');
    assert.ok(html.includes('Адрес уже сохранён'));
  }
  assert.ok(steps(paths[0]).length>steps(paths[1]).length);
});
test('button states are separated from primary/secondary roles and notifications match the theory', () => {
  for (const [id,index] of [['figma-components-lesson',1],['creating-ui-kit-lesson',0]]) for (const html of variants(section(id,index))) {
    for (const label of ['Обычная','Наведение','Отключена']) assert.ok(html.includes(label));
    assert.ok(!html.includes('Второстепенная'));
  }
  for (const html of variants(section('creating-ui-kit-lesson',4))) {
    for (const label of ['Успех','Ошибка','Информация']) assert.ok(html.includes(label));
    assert.ok(!html.includes('Warning'));
  }
  assert.equal(LESSON_CONTENT['element-states-lesson'].title,'Сетка и отступы');
});
test('application text sources contain no Unicode replacement characters', () => {
  function check(dir) {
    for (const entry of readdirSync(dir,{withFileTypes:true})) {
      const path=join(dir,entry.name);
      if (entry.isDirectory()) check(path);
      else if (/\.(tsx?|json|html|css)$/.test(path)) assert.ok(!readFileSync(path,'utf8').includes('\uFFFD'),path);
    }
  }
  check('src');check('public');
});
