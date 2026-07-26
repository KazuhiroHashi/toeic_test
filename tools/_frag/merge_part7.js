#!/usr/bin/env node
// Part 7 の断片ファイルを結合して data/setK/part7.js を作る。
//
//   node tools/_frag/merge_part7.js 8   … s8-single.js + s8-multi.js → data/set8/part7.js
//   node tools/_frag/merge_part7.js 10  … s10-single.js + s10-multi.js → data/set10/part7.js
//   node tools/_frag/merge_part7.js 7   … 既存 data/set7/part7.js + s7-triple.js → 上書き
//
// 結合後に文書数(15)・設問数(54)・id の一意性・answer の範囲を検査する。

var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..", "..");
var FRAG = __dirname;

function loadFrag(name) {
  var p = path.join(FRAG, name);
  if (!fs.existsSync(p)) throw new Error("断片がありません: " + p);
  global.window = {};
  delete require.cache[require.resolve(p)];
  require(p);
  var a = global.window.__FRAG;
  if (!Array.isArray(a)) throw new Error(name + " が window.__FRAG に配列を代入していません");
  return a;
}

function loadSet(k) {
  var p = path.join(ROOT, "data", "set" + k, "part7.js");
  global.window = {};
  delete require.cache[require.resolve(p)];
  require(p);
  return global.window["TOEIC_DATA_" + k].part7;
}

var k = process.argv[2];
if (!k) { console.error("使い方: node tools/_frag/merge_part7.js <セット番号>"); process.exit(1); }

var items;
if (k === "7") {
  items = loadSet(7).concat(loadFrag("s7-triple.js"));
} else {
  items = loadFrag("s" + k + "-single.js").concat(loadFrag("s" + k + "-multi.js"));
}

// ---- 検査 ----
var errs = [];
if (items.length !== 15) errs.push("文書数が " + items.length + "(15 であるべき)");

var qTotal = 0;
var ids = {};
var single = 0, dbl = 0, trp = 0;

items.forEach(function (it, i) {
  var tag = "[" + i + "] " + (it.id || "id無し");
  if (!it.id) errs.push(tag + " id が無い");
  if (ids[it.id]) errs.push("id 重複: " + it.id);
  ids[it.id] = true;
  if (!it.title) errs.push(tag + " title が無い");
  if (!it.translation) errs.push(tag + " translation が無い");
  if (!Array.isArray(it.passages) || !it.passages.length) { errs.push(tag + " passages が無い"); return; }
  if (it.passages.length === 1) single++;
  else if (it.passages.length === 2) dbl++;
  else if (it.passages.length === 3) trp++;
  else errs.push(tag + " passages が " + it.passages.length + "つ");
  it.passages.forEach(function (p, j) {
    if (!p.docType) errs.push(tag + " passages[" + j + "] docType が無い");
    if (!p.text || p.text.length < 200) errs.push(tag + " passages[" + j + "] text が短すぎる");
  });
  if (!Array.isArray(it.questions) || !it.questions.length) { errs.push(tag + " questions が無い"); return; }
  qTotal += it.questions.length;
  it.questions.forEach(function (q, j) {
    var qt = tag + " Q" + (j + 1);
    if (!q.q) errs.push(qt + " 設問文が無い");
    if (!Array.isArray(q.choices) || q.choices.length !== 4) errs.push(qt + " 選択肢が4つでない");
    if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) errs.push(qt + " answer が 0-3 でない");
    if (!q.explanation) errs.push(qt + " explanation が無い");
    if (q.explanation && q.explanation.indexOf("**") >= 0) errs.push(qt + " explanation に ** が入っている");
  });
});

if (single !== 10) errs.push("シングルが " + single + "文書(10 であるべき)");
if (dbl !== 2) errs.push("ダブルが " + dbl + "セット(2 であるべき)");
if (trp !== 3) errs.push("トリプルが " + trp + "セット(3 であるべき)");
if (qTotal !== 54) errs.push("設問数が " + qTotal + "問(54 であるべき)");

// 正解位置の偏り
var dist = [0, 0, 0, 0];
items.forEach(function (it) {
  (it.questions || []).forEach(function (q) { if (typeof q.answer === "number") dist[q.answer]++; });
});

if (errs.length) {
  console.error("NG:");
  errs.forEach(function (e) { console.error("  " + e); });
  process.exit(1);
}

// ---- 書き出し ----
var out = "// Part 7: 読解問題(シングル10文書29問+ダブル2セット10問+トリプル3セット15問=54問)\n" +
  "// セット" + k + "(上級・800〜900点向け)\n" +
  "window.TOEIC_DATA_" + k + " = window.TOEIC_DATA_" + k + " || {};\n" +
  "window.TOEIC_DATA_" + k + ".part7 = " + JSON.stringify(items, null, 2) + ";\n";

var dest = path.join(ROOT, "data", "set" + k, "part7.js");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out, "utf8");

console.log("OK: " + dest);
console.log("  文書 " + items.length + "(シングル" + single + " / ダブル" + dbl + " / トリプル" + trp + ")  設問 " + qTotal + "問");
console.log("  正解の分布 A:" + dist[0] + " B:" + dist[1] + " C:" + dist[2] + " D:" + dist[3]);
