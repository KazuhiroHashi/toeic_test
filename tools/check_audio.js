/* 出題に必要な音声がすべて存在するか確かめる。
 *
 *   node tools/check_audio.js
 *
 * 販売前・push前に必ず実行する。1つでも欠けると、その問題は再生できない。
 */
"use strict";
var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

global.window = {};
eval(fs.readFileSync(path.join(ROOT, "assets", "audio", "manifest.js"), "utf8"));
var man = global.window.TOEIC_AUDIO_MANIFEST || {};

var total = 0, missing = [], empty = [];
Object.keys(man).forEach(function (task) {
  man[task].forEach(function (c) {
    total += 1;
    var p = path.join(ROOT, c.f);
    if (!fs.existsSync(p)) missing.push(c.f);
    else if (fs.statSync(p).size === 0) empty.push(c.f);
  });
});

console.log("必要な音声:", total, "個");
console.log("欠落:", missing.length, "個 / 空ファイル:", empty.length, "個");
if (missing.length) {
  console.log("\n欠けている音声(先頭20件):");
  missing.slice(0, 20).forEach(function (f) { console.log("  " + f); });
  console.log("\n作り直してください:");
  console.log("  node tools/build_audio_manifest.js");
  console.log("  /usr/bin/python3 tools/generate_audio.py");
  process.exit(1);
}
if (empty.length) { console.log("空のファイルがあります。作り直してください。"); process.exit(1); }
console.log("OK: 出題に必要な音声はすべてそろっています。");
