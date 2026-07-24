/* リスニング音声のクリップ一覧(manifest)を生成する。
 *
 *   node tools/build_audio_manifest.js
 *
 * 出力:
 *   assets/audio/manifest.js   … アプリが読む(task → 音声ファイルの並び)
 *   tools/audio_manifest.json  … 生成スクリプト(generate_audio.py)が読む(各ファイルの英文と声)
 *
 * 音声ファイル本体(mp3)は generate_audio.py が edge-tts で作る。
 */
"use strict";
var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

global.window = {};
["part1", "part2", "part3", "part4"].forEach(function (p) {
  // eslint-disable-next-line no-eval
  eval(fs.readFileSync(path.join(ROOT, "data", p + ".js"), "utf8"));
});
var DATA = global.window.TOEIC_DATA;

var LETTERS = ["A", "B", "C", "D"];
var SETID = "s1"; // 当面はセット1のみ(セット2は完成後に対応)

// 本番と同じ4カ国の声(edge-tts のニューラル音声)
var COUNTRIES = ["US", "GB", "AU", "CA"];
var V = {
  US: { M: "en-US-GuyNeural", W: "en-US-JennyNeural" },
  GB: { M: "en-GB-RyanNeural", W: "en-GB-SoniaNeural" },
  AU: { M: "en-AU-WilliamNeural", W: "en-AU-NatashaNeural" },
  CA: { M: "en-CA-LiamNeural", W: "en-CA-ClaraNeural" }
};
var NARRATOR = "en-US-AriaNeural";

function voiceFor(speaker, c0, c1) {
  if (speaker === "N") return NARRATOR;
  if (speaker === "W") return V[c0].W;
  if (speaker === "M2") return V[c1].M;
  if (speaker === "W2") return V[c1].W;
  return V[c0].M; // M / 既定
}

var gi = 0;
var clips = [];       // {file, text, voice}
var manifest = {};    // "s1:taskid" -> [file, ...]

function addTask(taskid, lines) {
  var c0 = COUNTRIES[gi % 4];
  var c1 = COUNTRIES[(gi + 1) % 4];
  gi += 1;
  var files = [];
  lines.forEach(function (ln, idx) {
    var file = "assets/audio/" + SETID + "/" + taskid + "/" + idx + ".mp3";
    clips.push({ file: file, text: ln.text, voice: voiceFor(ln.speaker, c0, c1) });
    files.push(file);
  });
  manifest[SETID + ":" + taskid] = files;
}

// Part 1:「Look at the picture marked number X in your test book.」+ 4つの描写文
DATA.part1.forEach(function (it, idx) {
  var lines = [{ speaker: "N", text: "Look at the picture marked number " + (idx + 1) + " in your test book." }];
  it.choices.forEach(function (c, i) {
    lines.push({ speaker: it.speaker || "M", text: LETTERS[i] + ". " + c });
  });
  addTask(it.id, lines);
});

// Part 2: 質問 + 3つの応答(導入なし)
DATA.part2.forEach(function (it) {
  var qsp = it.question.speaker;
  var osp = qsp === "W" ? "M" : "W";
  var lines = [{ speaker: qsp, text: it.question.text }];
  it.choices.forEach(function (c, i) {
    lines.push({ speaker: osp, text: LETTERS[i] + ". " + c });
  });
  addTask(it.id, lines);
});

// Part 3: 導入 + 会話
DATA.part3.forEach(function (set) {
  var three = set.audio.some(function (l) { return l.speaker === "W2" || l.speaker === "M2"; });
  var lines = [{ speaker: "N", text: "Questions refer to the following conversation" + (three ? " with three speakers" : "") + "." }];
  set.audio.forEach(function (l) { lines.push({ speaker: l.speaker || "M", text: l.text }); });
  addTask(set.id, lines);
});

// Part 4: 導入 + トーク
DATA.part4.forEach(function (set) {
  var lines = [{ speaker: "N", text: "Questions refer to the following talk." }];
  set.audio.forEach(function (l) { lines.push({ speaker: l.speaker || "M", text: l.text }); });
  addTask(set.id, lines);
});

fs.writeFileSync(path.join(__dirname, "audio_manifest.json"), JSON.stringify(clips, null, 2));
fs.writeFileSync(
  path.join(ROOT, "assets", "audio", "manifest.js"),
  "window.TOEIC_AUDIO_MANIFEST = " + JSON.stringify(manifest) + ";\n"
);
console.log("tasks:", Object.keys(manifest).length, "/ clips:", clips.length);
