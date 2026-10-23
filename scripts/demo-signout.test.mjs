import {build} from 'esbuild';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import test from 'node:test';
const require=createRequire(import.meta.url);
const React=require('react');const {renderToStaticMarkup}=require('react-dom/server');
const output=await build({entryPoints:['src/app/context/AuthContext.tsx'],bundle:true,jsx:'automatic',platform:'node',format:'cjs',packages:'external',write:false,plugins:[{name:'no-server-session',setup(b){b.onResolve({filter:/utils\/supabase\/client$/},()=>({path:'client',namespace:'fixture'}));b.onLoad({filter:/.*/,namespace:'fixture'},()=>({contents:'throw new Error("Demo sign-out must not load the auth client"); export const supabase = {};'}));}}]});
const module={exports:{}};new Function('module','exports','require',output.outputFiles[0].text)(module,module.exports,require);
test('exiting demo clears its flag, preserves local progress and never calls server auth',async()=>{
 const oldStorage=globalThis.localStorage,oldWindow=globalThis.window;
 const store=new Map([['skillum-demo-mode','1'],['skillum-demo-user-data',JSON.stringify({userName:'Анна',lessonProgress:{quiz:{correctAnswers:2}}})]]);
 globalThis.localStorage={getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)};
 globalThis.window={location:{search:''}};
 try{
  let auth;function Probe(){auth=module.exports.useAuth();return null;}
  renderToStaticMarkup(React.createElement(module.exports.AuthProvider,null,React.createElement(Probe)));
  assert.equal(auth.isDemo,true);
  await auth.signOut();
  assert.equal(store.has('skillum-demo-mode'),false);
  assert.equal(JSON.parse(store.get('skillum-demo-user-data')).lessonProgress.quiz.correctAnswers,2);
  renderToStaticMarkup(React.createElement(module.exports.AuthProvider,null,React.createElement(Probe)));
  assert.equal(auth.isAuthenticated,false);
 }finally{globalThis.localStorage=oldStorage;globalThis.window=oldWindow;}
});
