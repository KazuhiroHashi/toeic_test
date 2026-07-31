#!/usr/bin/env node
// アプリに詰める www/ が完全かどうかを検査する。
//
//   node tools/check_app_bundle.js
//
// アプリ版は『完全オフライン』が売りなので、1つでも欠けると
// 電波の無い場所でその問題が再生できなくなる。ここで必ず止める。

var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");
var WWW = path.join(ROOT, "www");

if (!fs.existsSync(WWW)) {
  console.error("www/ がありません。先に bash tools/build_app.sh を実行してください。");
  process.exit(1);
}

var errs = [];
function need(rel) {
  if (!fs.existsSync(path.join(WWW, rel))) errs.push("欠落: " + rel);
}

// 骨格
["index.html", "app-build.js", "css/style.css", "js/app.js",
 "assets/audio/manifest.js"].forEach(need);

// 問題データ
var PARTS = ["part1", "part2", "part3", "part4", "part5", "part6", "part7"];
PARTS.forEach(function (p) { need("data/" + p + ".js"); });
for (var k = 2; k <= 10; k++) {
  PARTS.forEach(function (p) { need("data/set" + k + "/" + p + ".js"); });
}

// index.html が読む script が全部あるか
var html = fs.existsSync(path.join(WWW, "index.html"))
  ? fs.readFileSync(path.join(WWW, "index.html"), "utf8") : "";
var re = /<script[^>]+src="([^"]+)"/g, m;
while ((m = re.exec(html))) {
  if (m[1].indexOf("://") < 0) need(m[1]);
}
if (html.indexOf("app-build.js") < 0) errs.push("index.html に app-build.js の読み込みがありません");

// 写真と音声(実データ)
global.window = {};
PARTS.forEach(function (p) { evalIn("data/" + p + ".js"); });
for (var k2 = 2; k2 <= 10; k2++) {
  PARTS.forEach(function (p) { evalIn("data/set" + k2 + "/" + p + ".js"); });
}
function evalIn(rel) {
  var f = path.join(WWW, rel);
  if (fs.existsSync(f)) eval(fs.readFileSync(f, "utf8"));
}

var photos = 0, photoMiss = 0;
var sets = [global.window.TOEIC_DATA];
for (var k3 = 2; k3 <= 10; k3++) sets.push(global.window["TOEIC_DATA_" + k3]);
sets.forEach(function (D) {
  if (!D || !D.part1) return;
  D.part1.forEach(function (it) {
    photos++;
    if (!fs.existsSync(path.join(WWW, it.image))) { photoMiss++; errs.push("写真が無い: " + it.image); }
  });
});

// 音声はマニフェストを正として1本ずつ確認
evalIn("assets/audio/manifest.js");
var M = global.window.TOEIC_AUDIO_MANIFEST || {};
var clips = 0, clipMiss = 0, empty = 0;
Object.keys(M).forEach(function (key) {
  M[key].forEach(function (c) {
    clips++;
    var f = path.join(WWW, c.f);
    if (!fs.existsSync(f)) { clipMiss++; if (clipMiss <= 5) errs.push("音声が無い: " + c.f); }
    else if (fs.statSync(f).size < 500) { empty++; errs.push("音声が空: " + c.f); }
  });
});
if (clipMiss > 5) errs.push("…ほか " + (clipMiss - 5) + " 件の音声が欠落");

console.log("写真 " + (photos - photoMiss) + "/" + photos +
  "  音声 " + (clips - clipMiss) + "/" + clips +
  "  タスク " + Object.keys(M).length);

if (errs.length) {
  console.error("");
  errs.slice(0, 20).forEach(function (e) { console.error("  " + e); });
  console.error("");
  console.error("NG: アプリに詰める中身が足りません。オフラインで動かないので中止します。");
  process.exit(1);
}

console.log("OK: オフラインで動くのに必要なものはすべて入っています。");
