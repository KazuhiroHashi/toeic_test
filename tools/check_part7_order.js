#!/usr/bin/env node
// Part 7 の構成が本番どおりかを検査する。
//
//   node tools/check_part7_order.js
//
// 本番のシングルパッセージは 147-175 の29問で、設問数は必ず
//   2,2,2,2,3,3,3,4,4,4
// の順に並ぶ。テキストメッセージのやり取りが147番の一発目に来ることはない。

var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

var WANT = [2, 2, 2, 2, 3, 3, 3, 4, 4, 4];

global.window = {};
evalIn("data/part7.js");
for (var k = 2; k <= 10; k++) evalIn("data/set" + k + "/part7.js");
function evalIn(rel) {
  var f = path.join(ROOT, rel);
  if (fs.existsSync(f)) eval(fs.readFileSync(f, "utf8"));
}

var sets = [["S1", global.window.TOEIC_DATA]];
for (var k2 = 2; k2 <= 10; k2++) sets.push(["S" + k2, global.window["TOEIC_DATA_" + k2]]);

var bad = 0;

sets.forEach(function (pair) {
  var name = pair[0], D = pair[1];
  if (!D || !D.part7) return;
  var errs = [];

  var singles = D.part7.filter(function (x) { return x.passages.length === 1; });
  var dbl = D.part7.filter(function (x) { return x.passages.length === 2; });
  var trp = D.part7.filter(function (x) { return x.passages.length === 3; });

  if (singles.length !== 10) errs.push("シングルが " + singles.length + "文書(10であるべき)");
  if (dbl.length !== 2) errs.push("ダブルが " + dbl.length + "セット(2であるべき)");
  if (trp.length !== 3) errs.push("トリプルが " + trp.length + "セット(3であるべき)");

  // 並び順そのものを見るので、配列の前から10件がシングルであること
  D.part7.slice(0, 10).forEach(function (x, i) {
    if (x.passages.length !== 1) errs.push("[" + i + "] がシングルでない");
  });

  var counts = singles.map(function (x) { return x.questions.length; });
  if (counts.join(",") !== WANT.join(",")) {
    errs.push("設問数の並びが " + counts.join(",") + "(" + WANT.join(",") + " であるべき)");
  }

  var total = counts.reduce(function (s, n) { return s + n; }, 0);
  if (total !== 29) errs.push("シングルの合計が " + total + "問(29であるべき)");

  // 147番の一発目にテキストメッセージ／オンラインチャットは来ない
  var first = singles[0] && singles[0].passages[0].docType || "";
  if (/text[- ]?message|chat/i.test(first)) {
    errs.push("文書1が " + first + "。会話形式は147番の先頭に置かない");
  }
  // オンラインチャットは設問数の多い後半に置く
  singles.forEach(function (x, i) {
    if (/chat/i.test(x.passages[0].docType) && i < 7) {
      errs.push("オンラインチャットが文書" + (i + 1) + "。4問セット(文書8〜10)に置く");
    }
  });

  // id が並び順と一致しているか
  singles.forEach(function (x, i) {
    var n = String(i + 1);
    if (n.length < 2) n = "0" + n;
    if (!new RegExp("-" + n + "$").test(x.id)) {
      errs.push("id が並び順と違う: " + x.id + "(" + i + "番目)");
    }
  });

  // 本文の長さが設問数に見合っているか(語数)
  singles.forEach(function (x, i) {
    var w = x.passages[0].text.split(/\s+/).length;
    var q = x.questions.length;
    var lo = q === 2 ? 70 : q === 3 ? 130 : 190;
    var hi = q === 2 ? 170 : q === 3 ? 230 : 320;
    if (w < lo || w > hi) {
      errs.push("文書" + (i + 1) + "(" + q + "問)が " + w + "語。目安 " + lo + "〜" + hi + "語");
    }
  });

  if (errs.length) {
    bad++;
    console.log(name + " NG");
    errs.forEach(function (e) { console.log("   " + e); });
  } else {
    console.log(name + " OK  設問数 " + counts.join(",") +
      "  文書1 = " + singles[0].passages[0].docType);
  }
});

console.log("");
if (bad) {
  console.log("要修正: " + bad + " セット");
  process.exit(1);
}
console.log("OK: 全セットが本番どおりの構成です。");
