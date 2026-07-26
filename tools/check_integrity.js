// 全セットの整合性検査。使い方: node tools/check_integrity.js
// 問題数・ID重複・正解キー・解説/訳の有無・解説の選択肢記号ずれ・必須要件を検査する。
const fs=require("fs"),path=require("path");
process.chdir(path.join(__dirname,".."));
const parts=["part1","part2","part3","part4","part5","part6","part7"];
global.window={};
parts.forEach(p=>eval(fs.readFileSync("data/"+p+".js","utf8")));
for(let k=2;k<=10;k++)parts.forEach(p=>{const f="data/set"+k+"/"+p+".js";if(fs.existsSync(f))eval(fs.readFileSync(f,"utf8"));});
const SETS=[["S1",window.TOEIC_DATA],["S2",window.TOEIC_DATA_2],["S3",window.TOEIC_DATA_3],["S4",window.TOEIC_DATA_4],["S5",window.TOEIC_DATA_5],["S6",window.TOEIC_DATA_6],["S7",window.TOEIC_DATA_7],["S8",window.TOEIC_DATA_8],["S9",window.TOEIC_DATA_9],["S10",window.TOEIC_DATA_10]];
const want={part1:6,part2:25,part3:39,part4:30,part5:30,part6:16,part7:54};
const L=["A","B","C","D"];
let total=0,dup=0,ansBad=0,star=0,cnt=0,label=0,noExp=0,noTr=0;const ids=new Set();
SETS.forEach(([sn,D])=>{if(!D)return;parts.forEach(p=>{
 const arr=D[p];if(!arr){console.log("MISSING",sn,p);return;}
 const n=arr.reduce((s,x)=>s+(x.questions?x.questions.length:1),0);
 if(n!==want[p]){cnt++;console.log("COUNT",sn,p,n,"expected",want[p]);}
 arr.forEach(item=>{
  if(item.id){if(ids.has(item.id)){dup++;console.log("DUP-ID",item.id);}ids.add(item.id);}
  if(["part3","part4","part6","part7"].includes(p)&&!item.translation){noTr++;console.log("NO-TRANSLATION",sn,p,item.id);}
  (item.questions||[item]).forEach((q,qi)=>{if(!Array.isArray(q.choices))return;total++;
   if(!(q.answer>=0&&q.answer<q.choices.length)){ansBad++;console.log("ANSWER-RANGE",sn,p,item.id,qi+1);}
   if(!q.explanation){noExp++;console.log("NO-EXPLANATION",sn,p,item.id,qi+1);}
   if(q.explanation&&q.explanation.includes("**")){star++;console.log("MARKDOWN-BOLD",sn,p,item.id,qi+1);}
   if(q.explanation){const c=L[q.answer];
    const m=q.explanation.match(/[(（]([A-D])[)）]\s*が正解/);
    if(m&&m[1]!==c){label++;console.log("LABEL-MISMATCH",sn,p,item.id,qi+1,"解説("+m[1]+") 実際("+c+")");}
    const re=/[(（]([A-D])[)）][^。]{0,20}?(誤り|ひっかけ|不可|矛盾)/g;let mm;
    while((mm=re.exec(q.explanation)))if(mm[1]===c){label++;console.log("WRONG-AS-CORRECT",sn,p,item.id,qi+1);}}
  });});});});
SETS.forEach(([sn,D])=>{if(!D)return;
 const g3=D.part3.filter(x=>x.graphic).length,g4=D.part4.filter(x=>x.graphic).length;
 const three=D.part3.filter(s=>s.audio.some(a=>a.speaker==="W2"||a.speaker==="M2")).length;
 const intent=D.part3.filter(s=>s.questions.some(q=>/imply|mean when/i.test(q.q))).length;
 const ng=[];if(g3<2)ng.push("P3図表"+g3);if(g4<2)ng.push("P4図表"+g4);if(three<2)ng.push("3人会話"+three);if(intent<1)ng.push("意図問題"+intent);
 if(ng.length)console.log("REQUIREMENT",sn,ng.join(" "));});
const bad=dup+ansBad+star+cnt+label+noExp+noTr;
console.log(`\n総問題:${total} ID重複:${dup} 正解範囲外:${ansBad} 解説なし:${noExp} 訳なし:${noTr} **:${star} 記号ずれ:${label} 問題数不一致:${cnt}`);
console.log(bad?"NG: "+bad+"件の問題あり":"OK: 全項目クリーン");
