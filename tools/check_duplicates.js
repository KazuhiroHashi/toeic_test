const fs=require("fs");global.window={};
process.chdir("/workspace/toeic_test");
const parts=["part1","part2","part3","part4","part5","part6","part7"];
parts.forEach(p=>eval(fs.readFileSync("data/"+p+".js","utf8")));
for(let k=2;k<=10;k++)parts.forEach(p=>{const f="data/set"+k+"/"+p+".js";if(fs.existsSync(f))eval(fs.readFileSync(f,"utf8"));});
const SETS=[["S1",window.TOEIC_DATA],["S2",window.TOEIC_DATA_2],["S3",window.TOEIC_DATA_3],["S4",window.TOEIC_DATA_4],["S5",window.TOEIC_DATA_5],["S6",window.TOEIC_DATA_6],["S7",window.TOEIC_DATA_7],["S8",window.TOEIC_DATA_8],["S9",window.TOEIC_DATA_9],["S10",window.TOEIC_DATA_10]];
const stop=new Set("a an the is are was were be been being has have had of to in on at for with and or that this it its his her their they he she you we not no as by from will would can could should may might do does did there here about into over under more most some any all each other new next last".split(" "));
const toks=s=>String(s).toLowerCase().replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter(w=>w.length>2&&!stop.has(w));
const jac=(a,b)=>{const A=new Set(a),B=new Set(b);let c=0;A.forEach(w=>{if(B.has(w))c++;});return c/(A.size+B.size-c||1);};
function units(D,n){const o=[];
 D.part1.forEach(it=>o.push({p:"P1",id:it.id,set:n,t:it.choices[it.answer]}));
 D.part2.forEach(it=>o.push({p:"P2",id:it.id,set:n,t:it.question.text+" "+it.choices[it.answer]}));
 ["part3","part4"].forEach(p=>D[p].forEach(s=>o.push({p:p==="part3"?"P3":"P4",id:s.id,set:n,t:s.audio.map(a=>a.text).join(" ")})));
 D.part5.forEach(it=>o.push({p:"P5",id:it.id,set:n,t:it.q}));
 D.part6.forEach(d=>o.push({p:"P6",id:d.id,set:n,t:d.passage||""}));
 D.part7.forEach(d=>o.push({p:"P7",id:d.id,set:n,t:(d.passages||[]).map(x=>x.text).join(" ")}));
 return o;}
let all=[];SETS.forEach(([n,D])=>all=all.concat(units(D,n)));
all.forEach(u=>u.k=toks(u.t));
let hits=0;
for(let i=0;i<all.length;i++)for(let j=i+1;j<all.length;j++){
 if(all[i].set===all[j].set||all[i].p!==all[j].p)continue;
 const s=jac(all[i].k,all[j].k);
 const th=all[i].p==="P1"?0.30:(all[i].p==="P2"||all[i].p==="P5")?0.34:0.26;
 if(s>=th){hits++;console.log("["+s.toFixed(2)+"] "+all[i].p+" "+all[i].set+":"+all[i].id+" / "+all[j].set+":"+all[j].id);}}
console.log(hits?"残存重複:"+hits+"件":"OK: セット間の題材重複ゼロ");
