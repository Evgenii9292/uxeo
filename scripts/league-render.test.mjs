import { build } from 'esbuild';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import test from 'node:test';
const require = createRequire(import.meta.url);
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const output = await build({entryPoints:['src/app/pages/LeaguePage.tsx'],bundle:true,jsx:'automatic',platform:'node',format:'cjs',packages:'external',write:false,plugins:[{name:'league-environment',setup(b){
  b.onResolve({filter:/\/context\/UserContext$/},()=>({path:'user',namespace:'fixture'}));
  b.onResolve({filter:/\/context\/AuthContext$/},()=>({path:'auth',namespace:'fixture'}));
  b.onResolve({filter:/\/components\/(Layout|RightWidgets)$/},a=>({path:a.path,namespace:'fixture'}));
  b.onLoad({filter:/.*/,namespace:'fixture'},a=>({contents:a.path==='user'?'export const useUserSafe=()=>({xp:15,userName:"Анна",userAvatar:null});':a.path==='auth'?'export const useAuth=()=>({userId:"test-user",email:"test@example.com",isDemo:false});':'export default function Layout({children}){return children ?? null}',loader:'jsx'}));
}}]});
const module={exports:{}};new Function('module','exports','require',output.outputFiles[0].text)(module,module.exports,require);
test('league renders the current profile alongside 24 rivals without throwing',()=>{
 const html=renderToStaticMarkup(React.createElement(module.exports.default));
 assert.ok(html.includes('Анна')); assert.ok(html.includes('Джун'));
 assert.ok((html.match(/XP/g)||[]).length>=25);
 assert.ok(!html.includes('Evgeniy'));
});
