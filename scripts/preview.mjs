import fs from 'node:fs';import path from 'node:path';
const base='/tampa-bay-metro-fix-flip-loan';
function visit(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,e.name);if(e.isDirectory())visit(file);else if(e.name.endsWith('.html')){let s=fs.readFileSync(file,'utf8');s=s.replace(/(href|src|action)=(["'])\/(?!\/|tampa-bay-metro-fix-flip-loan\/)/g,(_,a,q)=>a+'='+q+base+'/');fs.writeFileSync(file,s);}}}
visit('dist');fs.writeFileSync('dist/.nojekyll','');fs.writeFileSync('dist/robots.txt','User-agent: *\nDisallow: /\n');
