#!/usr/bin/env node
// 4分の1模試が必ず50問になるかを、data の構造から検査する。
//
//   node tools/check_mock.js
//
// アプリは毎回ランダムに問題を抜き出すので、実際に動かして数える方法だと
// 「たまたま50問だった」なのか「必ず50問」なのかが区別できない。
// ここでは、抜き出しに使う条件を data 側が満たしているかを直接確かめる。
//
// 内訳(本番200問の4分の1):
//   Part 1:1 / Part 2:6 / Part 3:9(会話3つ)/ Part 4:9(トーク3つ)
//   Part 5:7 / Part 6:4(文書1つ)/ Part 7:14(ダブル1つ=5問 + シングルで9問)

var fs = require("fs");
var path = require("path");
process.chdir(path.join(__dirname, ".."));

var PARTS = ["part1", "part2", "part3", "part4", "part5", "part6", "part7"];
global.window = {};
PARTS.forEach(function (p) { evalIn("data/" + p + ".js"); });
for (var k = 2; k <= 10; k++) PARTS.forEach(function (p) { evalIn("data/set" + k + "/" + p + ".js"); });
function evalIn(rel) { if (fs.existsSync(rel)) eval(fs.readFileSync(rel, "utf8")); }

var SETS = [["S1", global.window.TOEIC_DATA]];
for (var k2 = 2; k2 <= 10; k2++) SETS.push(["S" + k2, global.window["TOEIC_DATA_" + k2]]);

// counts の中から、合計がちょうど target になる組み合わせが存在するか
function reachable(counts, target) {
  var ok = { 0: true };
  counts.forEach(function (c) {
    Object.keys(ok).map(Number).sort(function (a, b) { return b - a; }).forEach(function (s) {
      if (s + c <= target) ok[s + c] = true;
    });
  });
  return !!ok[target];
}

var bad = 0;

SETS.forEach(function (pair) {
  var sn = pair[0], D = pair[1];
  if (!D) return;
  var e = [];

  // 1問ずつ抜くパート: 必要数だけ在庫があるか
  if ((D.part1 || []).length < 1) e.push("Part 1 の在庫が足りない");
  if ((D.part2 || []).length < 6) e.push("Part 2 の在庫が足りない(6問必要)");
  if ((D.part5 || []).length < 7) e.push("Part 5 の在庫が足りない(7問必要)");

  // 文書単位で抜くパート: 想定の設問数の文書が必要数あるか
  function need(part, qPerDoc, docs, label) {
    var arr = (D[part] || []).filter(function (x) { return x.questions.length === qPerDoc; });
    if (arr.length < docs) {
      e.push(label + ": " + qPerDoc + "問の文書が " + arr.length + "件(" + docs + "件必要)");
    }
  }
  need("part3", 3, 3, "Part 3");
  need("part4", 3, 3, "Part 4");
  need("part6", 4, 1, "Part 6");

  // Part 7: ダブル1つ(5問)＋シングルの組み合わせで9問
  var p7 = D.part7 || [];
  var dbl = p7.filter(function (x) { return x.passages.length === 2; });
  if (!dbl.length) e.push("Part 7 のダブルが無い");
  dbl.forEach(function (x) {
    if (x.questions.length !== 5) e.push("Part 7 ダブル " + x.id + " が " + x.questions.length + "問(5問であるべき)");
  });

  var singleCounts = p7.filter(function (x) { return x.passages.length === 1; })
    .map(function (x) { return x.questions.length; });
  if (!reachable(singleCounts, 9)) {
    e.push("Part 7 シングルで合計9問になる組み合わせが無い(設問数: " + singleCounts.join(",") + ")");
  }

  if (e.length) {
    bad++;
    console.log(sn + " NG");
    e.forEach(function (x) { console.log("   " + x); });
  } else {
    console.log(sn + " OK  1+6+9+9+7+4+14 = 50問");
  }
});

console.log("");
if (bad) { console.log("要修正: " + bad + " セット"); process.exit(1); }
console.log("OK: 全セットで4分の1模試が必ず50問になります。");
