#!/usr/bin/env node
// Part 7 シングルの文書種別の並びを、セットごとにずらす。
//
//   node tools/diversify_part7_order.js --dry-run   … 変更内容を見るだけ
//   node tools/diversify_part7_order.js             … 実際に書き換える
//
// 10セットを機械的に組み直した結果、どのセットも
//   1番目=お知らせ … 10番目=オンラインチャット
// と同じ並びになってしまった。1人で複数セットを解く商品なので、
// 並びが毎回同じだと「作りが機械的」と気づかれる。本番も毎回違う。
//
// 設問数の並び(2,2,2,2,3,3,3,4,4,4)は絶対に崩せないので、
// 同じ設問数の帯の中だけで順番を入れ替える。本文・設問・解説には一切触らない。
//
//   帯1 … 1〜4番目(各2問)
//   帯2 … 5〜7番目(各3問)
//   帯3 … 8〜10番目(各4問)
//
// 守る条件:
//   - テキストメッセージのやり取りを1番目にしない(本番では先頭に来ない)
//   - オンラインチャットは帯3(8〜10番目)に置く ← 帯の中で動かす限り自動的に満たされる

var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");
var DRY = process.argv.indexOf("--dry-run") >= 0;

var FILES = [{ k: "1", rel: "data/part7.js", g: "TOEIC_DATA" }];
for (var k = 2; k <= 10; k++) {
  FILES.push({ k: String(k), rel: "data/set" + k + "/part7.js", g: "TOEIC_DATA_" + k });
}

var BANDS = [[0, 4], [4, 7], [7, 10]];

function rotate(arr, n) {
  if (!arr.length) return arr;
  n = ((n % arr.length) + arr.length) % arr.length;
  return arr.slice(n).concat(arr.slice(0, n));
}

function isChat(doc) { return /text[- ]?message|chat/i.test(doc.passages[0].docType); }

var changed = 0;

FILES.forEach(function (f, si) {
  var full = path.join(ROOT, f.rel);
  if (!fs.existsSync(full)) { console.log("(なし) " + f.rel); return; }

  var src = fs.readFileSync(full, "utf8");
  global.window = {};
  eval(src);
  var all = global.window[f.g].part7;

  var singles = all.slice(0, 10);
  var rest = all.slice(10);
  if (singles.some(function (x) { return x.passages.length !== 1; })) {
    console.log("SKIP " + f.rel + " … 先頭10件がシングルではありません");
    return;
  }

  /* 帯ごとに並べ替える。
     単純に回すだけだと、どのセットも似た並びのまま(先頭がどれも広告になる等)なので、
     帯1は「何を先頭に出すか」、帯3は「何を最後に出すか」をセットごとに指名する。 */
  var out = [];
  BANDS.forEach(function (b, bi) {
    var seg = singles.slice(b[0], b[1]);
    var arranged;

    if (bi === 0) {
      // 先頭に出せるのは会話形式でないもの。セットごとに違うものを選ぶ。
      var cand = [];
      seg.forEach(function (x, i) { if (!isChat(x)) cand.push(i); });
      var head = cand.length ? cand[si % cand.length] : 0;
      arranged = [seg[head]].concat(seg.filter(function (_, i) { return i !== head; }));
    } else if (bi === 2) {
      // 最後に出すものをセットごとに変える
      var tail = si % seg.length;
      arranged = seg.filter(function (_, i) { return i !== tail; }).concat([seg[tail]]);
    } else {
      arranged = rotate(seg, (si % seg.length) || 1);
    }

    out = out.concat(arranged);
  });

  var before = singles.map(function (x) { return x.passages[0].docType; }).join(" / ");
  var after = out.map(function (x) { return x.passages[0].docType; }).join(" / ");

  // 設問数の並びが崩れていないことを必ず確かめる
  var wantCounts = singles.map(function (x) { return x.questions.length; }).join(",");
  var gotCounts = out.map(function (x) { return x.questions.length; }).join(",");
  if (wantCounts !== gotCounts) {
    console.error("NG " + f.rel + " 設問数の並びが変わってしまいました: " + wantCounts + " → " + gotCounts);
    process.exit(1);
  }

  // id と title の番号を、新しい位置に合わせて振り直す
  var prefix = singles[0].id.replace(/-\d+$/, "");
  out.forEach(function (x, i) {
    var n2 = String(i + 1);
    if (n2.length < 2) n2 = "0" + n2;
    x.id = prefix + "-" + n2;
    // 「シングル 3(広告)」の括弧の中はそのまま使い、番号だけ振り直す
    var m = String(x.title || "").match(/[(（]([^)）]*)[)）]\s*$/);
    x.title = "シングル " + (i + 1) + "(" + (m ? m[1] : x.passages[0].docType) + ")";
  });

  console.log("S" + f.k);
  console.log("  前: " + before);
  console.log("  後: " + after);

  if (!DRY) {
    var header = src.split("window." + f.g)[0];
    var body = out.concat(rest);
    fs.writeFileSync(full,
      header + "window." + f.g + " = window." + f.g + " || {};\n" +
      "window." + f.g + ".part7 = " + JSON.stringify(body, null, 2) + ";\n", "utf8");
    changed++;
  }
});

console.log("");
console.log(DRY ? "(--dry-run のため書き換えていません)" : changed + " ファイルを書き換えました");
