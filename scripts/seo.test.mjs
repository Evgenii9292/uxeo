import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getSeo, PRIVATE_ROUTES, HOME_TITLE, HOME_DESCRIPTION } from "../src/app/seo/metadata.mjs";
const read = (path) => readFile(path, "utf8");

test("public HTML contains crawlable visible content and correct metadata without JavaScript", async () => {
  for (const file of ["index", "welcome"]) {
    const html = await read(`dist/${file}.html`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.match(html, /<h1[^>]*>Освой UX\/UI-дизайн на практике<\/h1>/);
    assert.match(html, /<main\b/);
    assert.match(html, /<link rel="canonical" href="https:\/\/skillum.tech\/"/);
    assert.match(html, /name="robots" content="index, follow"/);
    assert.equal((html.match(/<title>/g) || []).length, 1);
    for (const field of ['og:title', 'og:description', 'og:url', 'og:image', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) assert.ok(html.includes(`="${field}"`));
    assert.match(html, /<link rel="stylesheet"/);
    assert.doesNotMatch(html, /user-scalable=no|maximum-scale=1/);
    const schema = JSON.parse(html.match(/<script id="skillum-schema" type="application\/ld\+json">(.*?)<\/script>/)[1]);
    assert.equal(schema['@type'], 'WebSite');
    assert.equal(schema.url, 'https://skillum.tech/');
  }
  const html = await read('dist/index.html');
  assert.ok(html.includes(`<title>${HOME_TITLE}</title>`));
  assert.ok(html.includes(`name="description" content="${HOME_DESCRIPTION}"`));
  assert.notEqual(getSeo('/').title, getSeo('/welcome').title);
});

test("all existing app routes are served, but never listed for indexing", async () => {
  const config = JSON.parse(await read('vercel.json'));
  const rule = config.routes.find(route => route.dest === '/app.html');
  const routes = await read('src/app/routes.tsx');
  const declared = [...routes.matchAll(/path:\s*"([^"]+)"/g)].map(match => match[1]).filter(path => path !== '/' && path !== '*' && path !== 'welcome');
  assert.deepEqual(declared.map(path => '/' + path).sort(), Object.keys(PRIVATE_ROUTES).sort());
  for (const path of Object.keys(PRIVATE_ROUTES)) {
    assert.match(path, new RegExp(`^${rule.src}$`));
    assert.equal(getSeo(path).robots, 'noindex, follow');
    assert.equal(getSeo(path).canonical, undefined);
  }
  assert.equal(new RegExp(`^${rule.src}$`).test('/profile/not-a-real-page'), false);
  assert.equal(rule.headers['X-Robots-Tag'], 'noindex, follow');
  const app = await read('dist/app.html');
  assert.match(app, /name="robots" content="noindex, follow"/);
  assert.doesNotMatch(app, /rel="canonical"|application\/ld\+json/);
});

test("sitemap and robots describe only the canonical public route", async () => {
  const sitemap = await read('dist/sitemap.xml');
  assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]), ['https://skillum.tech/']);
  assert.match(await read('dist/robots.txt'), /Sitemap: https:\/\/skillum.tech\/sitemap.xml/);
  assert.doesNotMatch(await read('dist/robots.txt'), /Disallow:\s*\//);
});

test("unknown paths return 404 with noindex and a real recovery link", async () => {
  const config = JSON.parse(await read('vercel.json'));
  assert.deepEqual(config.routes.at(-2), { handle: 'filesystem' });
  assert.equal(config.routes.at(-1).status, 404);
  assert.equal(config.routes.at(-1).dest, '/404.html');
  const html = await read('dist/404.html');
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.match(html, /href="\/"/);
  assert.match(html, /Страница не найдена/);
  assert.equal(getSeo('/unknown').canonical, undefined);
});
