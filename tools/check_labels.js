#!/usr/bin/env node
// 解説の中の (A)(B)(C)(D) が、実際の選択肢の位置と合っているかを検査する。
//
//   node tools/check_labels.js
//
// check_integrity.js は「(A) が正解」「(A) は誤り」という決まった言い回ししか見ていない。
// 実際に多いのは「(B) shortage は『不足』」のように、記号のあとに選択肢の語句を書く形で、
// ここがずれていても従来の検査は素通りしていた。
//
// ここでは、記号の直後に出てくる英語の語句が、その記号の選択肢に実在するかを見る。
// 別の選択肢にしか無ければ、記号の付け間違いとして報告する。

var fs = require("fs");
var path = require("path");
process.chdir(path.join(__dirname, ".."));

var PARTS = ["part1", "part2", "part3", "part4", "part5", "part6", "part7"];
var L = ["A", "B", "C", "D"];

global.window = {};
PARTS.forEach(function (p) { evalIn("data/" + p + ".js"); });
for (var k = 2; k <= 10; k++) PARTS.forEach(function (p) { evalIn("data/set" + k + "/" + p + ".js"); });
function evalIn(rel) { if (fs.existsSync(rel)) eval(fs.readFileSync(rel, "utf8")); }

var SETS = [["S1", global.window.TOEIC_DATA]];
for (var k2 = 2; k2 <= 10; k2++) SETS.push(["S" + k2, global.window["TOEIC_DATA_" + k2]]);

function norm(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

var hits = 0, checked = 0;

SETS.forEach(function (pair) {
  var sn = pair[0], D = pair[1];
  if (!D) return;
  PARTS.forEach(function (p) {
    (D[p] || []).forEach(function (item) {
      (item.questions || [item]).forEach(function (q, qi) {
        if (!Array.isArray(q.choices) || !q.explanation) return;
        var choices = q.choices.map(norm);

        // 「(B) shortage は…」の (B) と、そのあとの英語の語句を取り出す
        var re = /[(（]([A-D])[)）]\s*([A-Za-z][A-Za-z'’\- ]{2,60})/g;
        var m;
        while ((m = re.exec(q.explanation))) {
          var idx = L.indexOf(m[1]);
          var frag = norm(m[2]);
          if (!frag) continue;
          var words = frag.split(" ").filter(Boolean);

          // 短すぎる断片は誤検出のもとなので、2語以上か6文字以上の1語に限る
          var probe = null;
          if (words.length >= 2) probe = words.slice(0, Math.min(4, words.length)).join(" ");
          else if (words.length === 1 && words[0].length >= 6) probe = words[0];
          if (!probe) continue;

          // その断片を含む選択肢を数える
          var owners = [];
          for (var i = 0; i < choices.length; i++) {
            if (choices[i].indexOf(probe) >= 0) owners.push(i);
          }
          // 2語で見つからなければ先頭2語に落として再挑戦(言い回しの揺れを吸収)
          if (!owners.length && words.length >= 3) {
            probe = words.slice(0, 2).join(" ");
            for (var j = 0; j < choices.length; j++) {
              if (choices[j].indexOf(probe) >= 0) owners.push(j);
            }
          }

          checked++;
          // どこにも無い(解説独自の言い回し)なら判定しない。1つだけに在るのに記号が違うときだけ報告。
          if (owners.length === 1 && owners[0] !== idx) {
            hits++;
            console.log(sn + " " + p + " " + item.id + " Q" + (qi + 1) +
              "  解説は (" + m[1] + ") と書いているが「" + probe + "」は (" + L[owners[0]] + ") の選択肢");
          }
        }
      });
    });
  });
});

console.log("");
console.log("照合できた記号: " + checked + " 箇所 / 食い違い: " + hits + " 件");
if (hits) process.exit(1);
console.log("OK: 解説の選択肢記号はすべて実際の位置と一致しています。");
