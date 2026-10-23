import {build} from 'esbuild';import {createRequire} from 'node:module';import assert from 'node:assert/strict';import test from 'node:test';
const require=createRequire(import.meta.url);const React=require('react');
const output=await build({entryPoints:['src/app/pages/AuthCallbackPage.tsx'],bundle:true,platform:'node',format:'cjs',packages:'external',loader:{'.css':'empty'},jsx:'automatic',write:false,plugins:[{name:'auth-fixture',setup(b){b.onResolve({filter:/utils\/supabase\/client$/},()=>({path:'auth-test-client',external:true}));}}]});
async function scenario(session, eventFirst=false){
 const effects=[],routes=[];let listener;let unsubscribed=false;let read;
 const client={auth:{onAuthStateChange(fn){listener=fn;return {data:{subscription:{unsubscribe(){unsubscribed=true;}}}}},getSession(){return new Promise(resolve=>{read=resolve})},exchangeCodeForSession(){throw Error('Duplicate exchange')}}};
 const customRequire=id=>id==='react'?{...React,useEffect:fn=>effects.push(fn)}:id==='react-router'?{useNavigate:()=>path=>routes.push(path)}:id==='auth-test-client'?{supabase:client}:require(id);
 const m={exports:{}};new Function('module','exports','require',output.outputFiles[0].text)(m,m.exports,customRequire);
 const oldWindow=globalThis.window,oldStorage=globalThis.localStorage;globalThis.window={setTimeout,clearTimeout};globalThis.localStorage={setItem(){}};
 try{m.exports.default();const cleanup=effects[0]();if(eventFirst)listener('SIGNED_IN',session);read({data:{session}});await new Promise(resolve=>setImmediate(resolve));cleanup();assert.equal(unsubscribed,true);return routes;}finally{globalThis.window=oldWindow;globalThis.localStorage=oldStorage;}
}
test('callback enters once after automatic OAuth exchange',async()=>assert.deepEqual(await scenario({user:{email:'test@example.com'}}),['/']));
test('auth event and session read cannot navigate twice',async()=>assert.deepEqual(await scenario({user:{email:'test@example.com'}},true),['/']));
test('missing session returns to sign-in instead of leaving an indefinite spinner',async()=>assert.deepEqual(await scenario(null),['/welcome?authError=1']));
