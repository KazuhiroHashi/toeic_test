/* リスニング音声のクリップ一覧(manifest)を生成する。
 *
 *   node tools/build_audio_manifest.js
 *
 * 出力:
 *   assets/audio/manifest.js   … アプリが読む(task → [{f: ファイル, g: 再生後ポーズms}])
 *   tools/audio_manifest.json  … 生成スクリプト(generate_audio.py)が読む(各ファイルの英文と声)
 *
 * 本番TOEICの音声形式に準拠:
 *   Part 1: 「Look at the picture marked number N in your test book.」→ A.〜D. 付きで4つの説明文
 *   Part 2: 「Number N.」→ 質問 → A.〜C. 付きで3つの応答
 *   Part 3: 「Questions X through Y refer to the following conversation
 *            [with three speakers][ and 図表種別].」→ 会話 → 設問読み上げ(各8秒ポーズ)
 *   Part 4: 同上(conversation の代わりにトーク種別: telephone message / announcement 等)
 */
"use strict";
var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

global.window = {};
function tryEval(rel) {
  try { eval(fs.readFileSync(path.join(ROOT, rel), "utf8")); return true; }
  catch (e) { return false; }
}
// セット1(data/partN.js)+ セット2〜6(data/setK/partN.js)を読み込む
["part1", "part2", "part3", "part4"].forEach(function (p) { tryEval("data/" + p + ".js"); });
for (var k = 2; k <= 6; k++) {
  ["part1", "part2", "part3", "part4"].forEach(function (p) { tryEval("data/set" + k + "/" + p + ".js"); });
}
// リスニング音声を作る対象セット(part1〜4が揃っているものだけ)
var SET_SOURCES = [
  { id: "s1", data: global.window.TOEIC_DATA },
  { id: "s2", data: global.window.TOEIC_DATA_2 },
  { id: "s3", data: global.window.TOEIC_DATA_3 },
  { id: "s4", data: global.window.TOEIC_DATA_4 },
  { id: "s5", data: global.window.TOEIC_DATA_5 },
  { id: "s6", data: global.window.TOEIC_DATA_6 }
].filter(function (s) {
  return s.data && s.data.part1 && s.data.part2 && s.data.part3 && s.data.part4;
});

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

var LETTERS = ["A", "B", "C", "D"];
var clips = [];       // {file, text, voice}
var manifest = {};    // "s1:taskid" -> [{f, g}, ...]

SET_SOURCES.forEach(function (SRC) {
  var SETID = SRC.id;
  var DATA = SRC.data;
  var gi = 0;

  function addTask(taskid, lines) {
    var c0 = COUNTRIES[gi % 4];
    var c1 = COUNTRIES[(gi + 1) % 4];
    gi += 1;
    var files = [];
    lines.forEach(function (ln, idx) {
      var file = "assets/audio/" + SETID + "/" + taskid + "/" + idx + ".mp3";
      clips.push({ file: file, text: ln.text, voice: voiceFor(ln.speaker, c0, c1) });
      files.push({ f: file, g: ln.gapAfter || 600 });
    });
    manifest[SETID + ":" + taskid] = files;
  }

  // Part 1: 導入 + A.〜D. 付きの4つの説明文
  DATA.part1.forEach(function (it, idx) {
    var lines = [{ speaker: "N", text: "Look at the picture marked number " + (idx + 1) + " in your test book.", gapAfter: 1000 }];
    it.choices.forEach(function (c, i) {
      lines.push({ speaker: it.speaker || "M", text: LETTERS[i] + ". " + c, gapAfter: 1000 });
    });
    addTask(it.id, lines);
  });

  // Part 2: 「Number N.」 + 質問 + A.〜C. 付きの3つの応答
  DATA.part2.forEach(function (it, idx) {
    var qsp = it.question.speaker;
    var osp = qsp === "W" ? "M" : "W";
    var lines = [
      { speaker: "N", text: "Number " + (idx + 1) + ".", gapAfter: 700 },
      { speaker: qsp, text: it.question.text, gapAfter: 1000 }
    ];
    it.choices.forEach(function (c, i) {
      lines.push({ speaker: osp, text: LETTERS[i] + ". " + c, gapAfter: 1000 });
    });
    addTask(it.id, lines);
  });

  // Part 3/4 共通: 導入 + 本文 + 設問読み上げ(各8秒ポーズ)
  function addSet(set, i, kindText) {
    var qStart = i * 3 + 1;
    var qEnd = i * 3 + set.questions.length;
    var lines = [{
      speaker: "N",
      text: "Questions " + qStart + " through " + qEnd + " refer to the following " + kindText +
        (set.graphicKind ? " and " + set.graphicKind : "") + ".",
      gapAfter: 1000
    }];
    set.audio.forEach(function (l) { lines.push({ speaker: l.speaker || "M", text: l.text, gapAfter: 600 }); });
    set.questions.forEach(function (q, qi) {
      lines.push({ speaker: "N", text: "Number " + (qStart + qi) + ". " + q.q, gapAfter: 8000 });
    });
    addTask(set.id, lines);
  }

  DATA.part3.forEach(function (set, i) {
    var three = set.audio.some(function (l) { return l.speaker === "W2" || l.speaker === "M2"; });
    addSet(set, i, "conversation" + (three ? " with three speakers" : ""));
  });

  DATA.part4.forEach(function (set, i) {
    addSet(set, i, set.kind || "talk");
  });
});

fs.writeFileSync(path.join(__dirname, "audio_manifest.json"), JSON.stringify(clips, null, 2));
fs.writeFileSync(
  path.join(ROOT, "assets", "audio", "manifest.js"),
  "window.TOEIC_AUDIO_MANIFEST = " + JSON.stringify(manifest) + ";\n"
);
console.log("sets:", SET_SOURCES.map(function (s) { return s.id; }).join(","),
  "/ tasks:", Object.keys(manifest).length, "/ clips:", clips.length);
