/* お試し用: 指定したタスクのスクリプト・設問・正解を表示する。
 *
 *   node tools/sample_script.js p1-01 p2-01 p3-01 p4-01
 *
 * play_sample.sh から呼ばれる。音声を聞いたあとの答え合わせ用。
 */
"use strict";
var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");
global.window = {};
function tryEval(rel) {
  try { eval(fs.readFileSync(path.join(ROOT, rel), "utf8")); } catch (e) { /* 無い場合は無視 */ }
}
["part1", "part2", "part3", "part4"].forEach(function (p) { tryEval("data/" + p + ".js"); });
for (var k = 2; k <= 6; k++) {
  ["part1", "part2", "part3", "part4"].forEach(function (p) { tryEval("data/set" + k + "/" + p + ".js"); });
}
var DATASETS = [
  global.window.TOEIC_DATA, global.window.TOEIC_DATA_2, global.window.TOEIC_DATA_3,
  global.window.TOEIC_DATA_4, global.window.TOEIC_DATA_5, global.window.TOEIC_DATA_6
].filter(Boolean);
var L = ["A", "B", "C", "D"];

// id 例: "p3-01"(セット1) / "s4p3-01"(セット4)。どのセットでも id で探せる。
function find(id) {
  var m = id.match(/p([1-4])-/);
  var key = m ? "part" + m[1] : null;
  for (var i = 0; i < DATASETS.length; i++) {
    var list = key && DATASETS[i][key];
    if (!list) continue;
    var item = list.find(function (x) { return x.id === id; });
    if (item) return { key: key, item: item };
  }
  return { key: key, item: null };
}

function line(s) { console.log(s); }
function rule() { line("────────────────────────────────────────"); }

(process.argv.slice(2)).forEach(function (id) {
  var f = find(id);
  if (!f.item) { line("見つかりません: " + id); return; }
  var it = f.item;
  rule();

  if (f.key === "part1") {
    line("【Part 1 写真描写】 " + id);
    line("写真: " + it.image);
    line("");
    it.choices.forEach(function (c, i) { line("  (" + L[i] + ") " + c); });
    line("");
    line("正解: (" + L[it.answer] + ")");
    line("");
    line(it.translation);
    line("");
    line("解説: " + it.explanation);
    return;
  }

  if (f.key === "part2") {
    line("【Part 2 応答問題】 " + id);
    line("");
    line("  Q. " + it.question.text);
    it.choices.forEach(function (c, i) { line("  (" + L[i] + ") " + c); });
    line("");
    line("正解: (" + L[it.answer] + ")");
    line("");
    line(it.translation);
    line("");
    line("解説: " + it.explanation);
    return;
  }

  // part3 / part4
  line("【" + (f.key === "part3" ? "Part 3 会話問題" : "Part 4 説明文問題") + "】 " + id +
    (it.kind ? "(" + it.kind + ")" : "") + " — " + it.title);
  line("");
  line("[スクリプト]");
  it.audio.forEach(function (l) { line("  " + (l.speaker || "M") + ": " + l.text); });
  line("");
  it.questions.forEach(function (q, qi) {
    line("  Q" + (qi + 1) + ". " + q.q);
    q.choices.forEach(function (c, i) { line("     (" + L[i] + ") " + c); });
    line("     正解: (" + L[q.answer] + ")  " + q.explanation);
    line("");
  });
  line("[全訳]");
  line(it.translation);
});
rule();
