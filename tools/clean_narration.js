/* ナレーター音声だけを削除する。
 *
 *   node tools/build_audio_manifest.js   … 先に一覧を作り直す(新しいナレーターを反映)
 *   node tools/clean_narration.js        … 古いナレーター音声のmp3だけ削除
 *   python3 tools/generate_audio.py      … 削除した分だけ作り直す
 *
 * ナレーターの声を変えたときに使う。会話・応答の音声はそのまま残るので、
 * 全部を作り直すより大幅に速い。
 */
"use strict";
var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

var clips = JSON.parse(fs.readFileSync(path.join(__dirname, "audio_manifest.json"), "utf8"));
var src = fs.readFileSync(path.join(__dirname, "build_audio_manifest.js"), "utf8");
var m = src.match(/^var NARRATOR = "([^"]+)";/m);
if (!m) { console.error("build_audio_manifest.js から NARRATOR を読み取れませんでした。"); process.exit(1); }
var NARRATOR = m[1];

var targets = clips.filter(function (c) { return c.voice === NARRATOR; });
var removed = 0, missing = 0;
targets.forEach(function (c) {
  var p = path.join(ROOT, c.file);
  if (fs.existsSync(p)) { fs.unlinkSync(p); removed += 1; } else { missing += 1; }
});

console.log("ナレーター:", NARRATOR);
console.log("対象クリップ:", targets.length, "/ 削除:", removed, "/ もともと無し:", missing);
console.log("次に `python3 tools/generate_audio.py` を実行すると、この分だけ作り直されます。");
