import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSync } from 'esbuild';
import { runInNewContext } from 'node:vm';
import { PGlite } from '@electric-sql/pglite';

function server(db) {
  const routes = new Map();
  class Hono {
    use() {}
    fetch() {}
  }
  for (const method of ['get','post','put','patch','delete']) Hono.prototype[method] = function(path, handler) { routes.set(`${method.toUpperCase()} ${path}`, handler); };
  const records = new Map();
  const kv = { get: async key => records.get(key), set: async (key,value) => records.set(key,value), del: async key => records.delete(key) };
  const createClient = (_url, _key, options) => ({ auth: { getUser: async token => {
    const valid = (token ?? options?.global?.headers?.Authorization ?? '').includes('valid-token');
    return valid ? { data: { user: { id: 'account-a' } }, error: null } : { data: { user: null }, error: 'Unauthorized' };
  } } });
  const require = name => {
    if (name === 'npm:hono') return { Hono };
    if (name === 'npm:hono/cors') return { cors: () => () => {} };
    if (name === 'npm:hono/logger') return { logger: () => () => {} };
    if (name.startsWith('jsr:')) return { createClient };
    if (name.endsWith('kv_store.tsx')) return kv;
    throw new Error(`Unexpected dependency: ${name}`);
  };
  const code = buildSync({entryPoints:['supabase/functions/server/index.tsx'],bundle:true,format:'cjs',platform:'node',write:false,external:['npm:*','jsr:*','./kv_store.tsx']}).outputFiles[0].text;
  runInNewContext(code, { require, console: { log() {}, error() {} }, Response, URL, TextEncoder, TextDecoder, Uint8Array, crypto: globalThis.crypto,
    Deno: { serve() {}, env: { get: name => ({ SUPABASE_URL: 'https://example.supabase.co', ADMIN_USER_ID: 'account-a' })[name] } },
    fetch: async (url, options) => {
      assert.ok(String(url).startsWith('https://api.supabase.com/'));
      const result = await db.query(JSON.parse(options.body).query);
      return Response.json(result.rows);
    }
  });
  const call = (method,path,body,auth='Bearer valid-token') => routes.get(`${method} ${path}`)({req:{json:async()=>body,header:name=>name==='Authorization'?auth:undefined},json:(body,status=200)=>Response.json(body,{status})});
  return { routes, call, records };
}

test('release server preserves live endpoints and submits homework into the existing KV store', async () => {
  const api = server();
  for (const route of ['POST /make-server-d627d1b0/push/subscribe','POST /make-server-d627d1b0/push/unsubscribe','POST /make-server-d627d1b0/cron/daily-push','POST /make-server-d627d1b0/user/registered','POST /make-server-d627d1b0/message/send','GET /make-server-d627d1b0/notifications']) assert.ok(api.routes.has(route), route);
  const path = '/make-server-d627d1b0/homework/submit';
  assert.equal((await api.call('POST',path,{lessonName:'Test',figmaLink:'https://example.com'})).status,400);
  assert.equal((await api.call('POST',path,{},'')).status,401);
  const response = await api.call('POST',path,{lessonName:'Test',lessonId:'homework-1',figmaLink:'https://www.figma.com/design/TEST/Test',userId:'wrong-account'});
  assert.equal(response.status,200);
  const result = await response.json();
  assert.equal(result.success,true);
  const saved = api.records.get(`homework:${result.homeworkId}`);
  assert.equal(saved.user_id,'account-a');
  assert.equal(saved.status,'pending');
  assert.equal(saved.lesson_id,'homework-1');
});

test('actual progress route atomically merges two device snapshots and retains profile fields', async () => {
  const db = new PGlite();
  try {
    await db.exec('CREATE TABLE user_progress (user_id text PRIMARY KEY, xp int, streak int, last_streak_date text, level text, goal text, daily_time text, lesson_progress jsonb, weekly_challenges int, user_name text, user_title text, user_avatar text, updated_at timestamptz);');
    const api = server(db);
    const path='/make-server-d627d1b0/user/progress';
    const progress = id => ({quiz:{lessonId:'quiz',totalTasks:6,correctAnswers:1,isCompleted:false,questions:{[id]:{correct:true,xpAwarded:true,xpValue:15,awardedAt:'2026-10-20T12:00:00.000Z'}}}});
    assert.equal((await api.call('POST',path,{userId:'account-a',lessonProgress:progress('q1'),userName:'Test'})).status,200);
    assert.equal((await api.call('POST',path,{userId:'account-a',lessonProgress:progress('q2')})).status,200);
    const row=(await db.query('SELECT * FROM user_progress')).rows[0];
    assert.equal(row.xp,30);
    assert.equal(row.user_name,'Test');
    assert.deepEqual(Object.keys(row.lesson_progress.quiz.questions).sort(),['q1','q2']);
    assert.equal((await api.call('POST',path,{userId:'other'})).status,403);
  } finally { await db.close(); }
});
