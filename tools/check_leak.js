#!/usr/bin/env node
// 【答えの漏れ】検査
//
// 1つの音声・文書に複数の設問が付く Part 3 / 4 / 6 / 7 で、
// 「ある設問の正解に出てくる特徴語が、別の設問の設問文・選択肢に現れていないか」を機械的に洗い出す。
//
//   node tools/check_leak.js          … 全セット
//   node tools/check_leak.js 8 10     … セット8と10だけ
//
// 例: Q1 が「どこにいる?」(正解: at a hotel)なのに Q2 の選択肢に reservation が出ていると、
// Q2 を見ただけで Q1 の答えが割れてしまう。これを検出する。
//
// あくまで機械的な当たりを付けるための道具で、出たものが全て不正解というわけではない。
// 出た箇所は人間(または担当エージェント)が読んで判断する。

var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

var PARTS = ["part1", "part2", "part3", "part4", "part5", "part6", "part7"];
global.window = {};
PARTS.forEach(function (p) { evalFile("data/" + p + ".js"); });
for (var k = 2; k <= 10; k++) {
  PARTS.forEach(function (p) { evalFile("data/set" + k + "/" + p + ".js"); });
}
function evalFile(rel) {
  var f = path.join(ROOT, rel);
  if (!fs.existsSync(f)) return;
  eval(fs.readFileSync(f, "utf8"));
}

var SETS = [["S1", global.window.TOEIC_DATA]];
for (var k = 2; k <= 10; k++) SETS.push(["S" + k, global.window["TOEIC_DATA_" + k]]);

var only = process.argv.slice(2);
if (only.length) SETS = SETS.filter(function (s) { return only.indexOf(s[0].slice(1)) >= 0; });

// 検査するのは『場所・人物・業種を特定する設問』だけ。
// 著者の指摘どおり、Q1「どこにいる?(=ホテル)」の答えが Q2 の選択肢の reservation で割れる、
// という型が本当に問題になる漏れなので、そこに絞る。
// これ以外(work / change / system のような話題語の再出現)は本番でも普通に起きるので拾わない。
var IDENT = /^(where|who)\b|what (kind|type|sort) of (business|company|organization|industry|store|facility)|where (do|does|are|is) .* (work|employed)|who (most likely )?(is|are) /i;

var STOP = new Set(("a an the is are was were be been being has have had of to in on at for with and or that this it its " +
  "his her their they he she you we not no as by from will would can could should may might do does did there here " +
  "about into over under more most some any all each other new next last what when where who why how which " +
  "will please thank thanks best regards dear sincerely mr ms mrs dr " +
  // 話題語として自然に再出現するもの(漏れではない)
  "work works working time times date dates change changes changed system order orders item items " +
  "make made take taken give given send sent ask asked tell told need needs needed want wants " +
  "staff team member members customer customers client clients visitor visitors people person " +
  "week weeks month months year years today tomorrow morning afternoon evening " +
  "information detail details number numbers list lists form forms report reports " +
  "product products service services event events project projects meeting meetings").split(" "));

function words(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/)
    .filter(function (w) { return w.length > 3 && !STOP.has(w); });
}

var flagged = 0;

SETS.forEach(function (pair) {
  var name = pair[0], D = pair[1];
  if (!D) return;
  ["part3", "part4", "part6", "part7"].forEach(function (p) {
    (D[p] || []).forEach(function (doc) {
      var qs = doc.questions || [];
      if (qs.length < 2) return;
      // 各設問の「正解だけに出てくる語」を求める
      var keys = qs.map(function (q) {
        var right = new Set(words(q.choices[q.answer]));
        // 同じ設問の誤答にも出る語は特徴語ではない
        q.choices.forEach(function (c, i) {
          if (i === q.answer) return;
          words(c).forEach(function (w) { right.delete(w); });
        });
        return right;
      });
      qs.forEach(function (q, i) {
        // 場所・人物・業種を特定する設問だけを見る
        if (!IDENT.test(String(q.q || ""))) return;
        // 他の設問の設問文+全選択肢に、自分の正解の特徴語が出ていないか
        var mine = keys[i];
        if (!mine.size) return;
        qs.forEach(function (other, j) {
          if (i === j) return;
          var pool = new Set(words(other.q).concat(
            other.choices.reduce(function (a, c) { return a.concat(words(c)); }, [])));
          var hit = [];
          mine.forEach(function (w) { if (pool.has(w)) hit.push(w); });
          if (hit.length) {
            flagged++;
            console.log("[" + name + " " + doc.id + "] Q" + (i + 1) + " の正解語が Q" + (j + 1) + " に出ている: " + hit.join(", "));
            console.log("    Q" + (i + 1) + " 正解: " + q.choices[q.answer]);
            console.log("    Q" + (j + 1) + ": " + other.q);
          }
        });
      });
    });
  });
});

console.log("");
console.log(flagged ? "要確認: " + flagged + "件(機械判定。読んで問題ないものも含まれます)" : "OK: 答えの漏れの疑いはありません");
