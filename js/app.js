/* TOEIC 総合問題集 — アプリ本体 */
(function () {
  "use strict";

  var DATA = window.TOEIC_DATA;
  var app = document.getElementById("app");

  var LETTERS = ["A", "B", "C", "D"];
  var STORAGE_KEY = "toeic_test_stats_v1";

  /* ---------------- モード定義 ---------------- */

  var MODES = {
    part2: { label: "Part 2 応答問題", desc: "質問を聞いて応答を選ぶ(リスニング)", listening: true },
    part3: { label: "Part 3 会話問題", desc: "会話を聞いて設問に答える(リスニング)", listening: true },
    part4: { label: "Part 4 説明文問題", desc: "トークを聞いて設問に答える(リスニング)", listening: true },
    part5: { label: "Part 5 短文穴埋め", desc: "文法・語彙(リーディング)", listening: false },
    part6: { label: "Part 6 長文穴埋め", desc: "文書の空所を埋める(リーディング)", listening: false },
    part7: { label: "Part 7 読解問題", desc: "文書を読んで設問に答える(リーディング)", listening: false },
    mock: { label: "ミニ模試", desc: "Part 2〜7 からランダム出題", listening: true }
  };

  /* ---------------- ユーティリティ ---------------- */

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveResult(mode, rate) {
    var stats = loadStats();
    var s = stats[mode] || { best: 0, attempts: 0 };
    s.attempts += 1;
    s.last = rate;
    if (rate > s.best) s.best = rate;
    stats[mode] = s;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); } catch (e) { /* ignore */ }
  }

  /* ---------------- 音声(Web Speech API) ---------------- */

  var speech = {
    voices: [],
    supported: ("speechSynthesis" in window),

    init: function () {
      if (!this.supported) return;
      var self = this;
      function pick() {
        var all = window.speechSynthesis.getVoices();
        self.voices = all.filter(function (v) { return /^en(-|_)/i.test(v.lang); });
      }
      pick();
      window.speechSynthesis.onvoiceschanged = pick;
    },

    voiceFor: function (speaker) {
      if (!this.voices.length) return null;
      // 話者(M/W)ごとに別の声を割り当てる。声が1つしかなければピッチで差を付ける。
      if (this.voices.length === 1) return this.voices[0];
      var idx = speaker === "M" ? 0 : 1;
      // en-US を優先
      var us = this.voices.filter(function (v) { return /en(-|_)US/i.test(v.lang); });
      var pool = us.length >= 2 ? us : this.voices;
      return pool[Math.min(idx, pool.length - 1)];
    },

    speakLines: function (lines, onEnd) {
      if (!this.supported) { if (onEnd) onEnd(); return; }
      window.speechSynthesis.cancel();
      var self = this;
      var remaining = lines.length;
      if (!remaining) { if (onEnd) onEnd(); return; }
      lines.forEach(function (line) {
        var u = new SpeechSynthesisUtterance(line.text);
        u.lang = "en-US";
        var v = self.voiceFor(line.speaker || "M");
        if (v) u.voice = v;
        u.rate = 0.95;
        u.pitch = line.speaker === "W" ? 1.15 : 0.9;
        u.onend = u.onerror = function () {
          remaining -= 1;
          if (remaining === 0 && onEnd) onEnd();
        };
        window.speechSynthesis.speak(u);
      });
    },

    stop: function () {
      if (this.supported) window.speechSynthesis.cancel();
    }
  };
  speech.init();

  /* ---------------- タスク構築 ----------------
     タスク = 1画面分(音声 or 文書 + 設問1〜n問) */

  function tasksPart2(items) {
    return items.map(function (it) {
      return {
        part: "Part 2",
        listening: true,
        hideChoices: true,
        audio: [{ speaker: it.question.speaker, text: it.question.text }].concat(
          it.choices.map(function (c, i) {
            return { speaker: it.question.speaker === "W" ? "M" : "W", text: LETTERS[i] + ". " + c };
          })
        ),
        script: it.question.text + "\n" + it.choices.map(function (c, i) { return "(" + LETTERS[i] + ") " + c; }).join("\n"),
        translation: it.translation,
        questions: [{
          id: it.id,
          prompt: "音声を聞いて、最も適切な応答を選んでください。",
          choices: it.choices,
          answer: it.answer,
          explanation: it.explanation
        }]
      };
    });
  }

  function tasksSet(items, partLabel) {
    return items.map(function (set) {
      return {
        part: partLabel,
        listening: true,
        title: set.title,
        audio: set.audio,
        script: set.audio.map(function (l) { return (l.speaker ? l.speaker + ": " : "") + l.text; }).join("\n"),
        translation: set.translation,
        questions: set.questions.map(function (q, i) {
          return {
            id: set.id + "-q" + (i + 1),
            prompt: q.q,
            choices: q.choices,
            answer: q.answer,
            explanation: q.explanation
          };
        })
      };
    });
  }

  function tasksPart5(items) {
    return items.map(function (it) {
      return {
        part: "Part 5",
        listening: false,
        questions: [{
          id: it.id,
          prompt: it.q,
          choices: it.choices,
          answer: it.answer,
          explanation: it.explanation,
          translation: it.translation
        }]
      };
    });
  }

  function tasksPart6(items) {
    return items.map(function (doc) {
      return {
        part: "Part 6",
        listening: false,
        title: doc.title,
        docType: doc.docType,
        passage: doc.passage,
        translation: doc.translation,
        questions: doc.questions.map(function (q) {
          return {
            id: doc.id + "-q" + q.num,
            prompt: "空所 [" + q.num + "] に入るものを選んでください。",
            choices: q.choices,
            answer: q.answer,
            explanation: q.explanation
          };
        })
      };
    });
  }

  function tasksPart7(items) {
    return items.map(function (doc) {
      return {
        part: "Part 7",
        listening: false,
        title: doc.title,
        passages: doc.passages,
        translation: doc.translation,
        questions: doc.questions.map(function (q, i) {
          return {
            id: doc.id + "-q" + (i + 1),
            prompt: q.q,
            choices: q.choices,
            answer: q.answer,
            explanation: q.explanation
          };
        })
      };
    });
  }

  function buildTasks(mode) {
    switch (mode) {
      case "part2": return tasksPart2(DATA.part2);
      case "part3": return tasksSet(DATA.part3, "Part 3");
      case "part4": return tasksSet(DATA.part4, "Part 4");
      case "part5": return tasksPart5(DATA.part5);
      case "part6": return tasksPart6(DATA.part6);
      case "part7": return tasksPart7(DATA.part7);
      case "mock":
        return [].concat(
          tasksPart2(shuffle(DATA.part2).slice(0, 5)),
          tasksSet(shuffle(DATA.part3).slice(0, 1), "Part 3"),
          tasksSet(shuffle(DATA.part4).slice(0, 1), "Part 4"),
          tasksPart5(shuffle(DATA.part5).slice(0, 10)),
          tasksPart6(shuffle(DATA.part6).slice(0, 1)),
          tasksPart7(shuffle(DATA.part7).slice(0, 1))
        );
    }
    return [];
  }

  function countQuestions(tasks) {
    return tasks.reduce(function (n, t) { return n + t.questions.length; }, 0);
  }

  /* ---------------- 画面:ホーム ---------------- */

  function showHome() {
    speech.stop();
    var stats = loadStats();

    function card(mode, extraClass) {
      var m = MODES[mode];
      var n = mode === "mock" ? "約25問" : countQuestions(buildTasks(mode)) + "問";
      var s = stats[mode];
      var stat = s ? "自己ベスト " + s.best + "%(挑戦 " + s.attempts + "回)" : "未挑戦";
      return '<button class="menu-card ' + (extraClass || "") + '" data-mode="' + mode + '">' +
        '<span class="card-title">' + esc(m.label) + "</span>" +
        '<span class="card-desc">' + esc(m.desc) + " / " + n + "</span>" +
        '<span class="card-stat">' + esc(stat) + "</span>" +
        "</button>";
    }

    app.innerHTML =
      '<section class="menu-section">' +
      "<h2>模試に挑戦</h2>" +
      '<div class="menu-grid">' + card("mock", "mock") + "</div>" +
      "<h2>リスニング(音声読み上げ)</h2>" +
      '<div class="menu-grid">' + card("part2") + card("part3") + card("part4") + "</div>" +
      "<h2>リーディング</h2>" +
      '<div class="menu-grid">' + card("part5") + card("part6") + card("part7") + "</div>" +
      '<p class="history-note">成績はこの端末のブラウザにのみ保存されます。</p>' +
      "</section>";

    app.querySelectorAll(".menu-card").forEach(function (btn) {
      btn.addEventListener("click", function () { startQuiz(btn.getAttribute("data-mode")); });
    });
  }

  /* ---------------- 画面:出題 ---------------- */

  var session = null;

  function startQuiz(mode) {
    session = {
      mode: mode,
      tasks: buildTasks(mode),
      taskIndex: 0,
      results: [] // {taskPart, prompt, choices, answer, selected, explanation}
    };
    session.total = countQuestions(session.tasks);
    renderTask();
  }

  function renderTask() {
    speech.stop();
    var t = session.tasks[session.taskIndex];
    var answeredBefore = session.results.length;

    var html = '<div class="quiz-header">' +
      "<span>" + esc(MODES[session.mode].label) + " — 問題 " + (answeredBefore + 1) +
      (t.questions.length > 1 ? "〜" + (answeredBefore + t.questions.length) : "") +
      " / " + session.total + "</span>" +
      '<button class="quit-btn" id="quit">中断してホームへ</button>' +
      "</div>" +
      '<div class="progress-bar"><div class="progress-fill" style="width:' +
      Math.round((answeredBefore / session.total) * 100) + '%"></div></div>' +
      '<div class="question-card">' +
      '<span class="part-label">' + esc(t.part) + "</span>" +
      (t.docType ? '<span class="doc-type">' + esc(t.docType) + "</span>" : "");

    if (t.title) html += "<h3>" + esc(t.title) + "</h3>";

    // リスニング:再生ボタン
    if (t.listening) {
      html += '<div class="audio-controls">' +
        '<button class="play-btn" id="play">▶ 音声を再生</button>' +
        '<button class="stop-btn" id="stopAudio">■ 停止</button>' +
        (speech.supported
          ? '<span class="audio-note">音声は合成音声です。何度でも再生できます。</span>'
          : '<span class="audio-note">このブラウザは音声合成に未対応です。解答後にスクリプトを確認して学習してください。</span>') +
        "</div>";
    }

    // 文書(Part 6/7)
    if (t.passage) {
      html += '<div class="passage">' +
        esc(t.passage).replace(/\[(\d)\]/g, '<span class="blank-mark">___[$1]___</span>') +
        "</div>";
    }
    if (t.passages) {
      t.passages.forEach(function (p) {
        html += '<div class="doc-type">' + esc(p.docType) + "</div>" +
          '<div class="passage">' + esc(p.text) + "</div>";
      });
    }

    // 設問
    t.questions.forEach(function (q, qi) {
      html += '<div class="q-block" data-qi="' + qi + '">' +
        '<p class="q-text"><span class="q-number">Q' + (answeredBefore + qi + 1) + ".</span>" +
        esc(q.prompt) + "</p>" +
        '<div class="choices">';
      q.choices.forEach(function (c, ci) {
        var label = t.hideChoices ? "(音声)" : c;
        html += '<button class="choice-btn" data-qi="' + qi + '" data-ci="' + ci + '">' +
          '<span class="choice-letter">' + LETTERS[ci] + ".</span><span>" + esc(label) + "</span></button>";
      });
      html += "</div>" +
        '<div class="feedback-slot"></div>' +
        "</div>";
    });

    html += '<div class="nav-row"><button class="next-btn" id="next" style="display:none">' +
      (session.taskIndex === session.tasks.length - 1 ? "結果を見る" : "次へ") +
      "</button></div>" +
      "</div>";

    app.innerHTML = html;
    window.scrollTo(0, 0);

    document.getElementById("quit").addEventListener("click", function () {
      if (confirm("中断してホームに戻りますか?(このセッションの結果は保存されません)")) showHome();
    });

    if (t.listening) {
      var playBtn = document.getElementById("play");
      playBtn.addEventListener("click", function () {
        playBtn.disabled = true;
        playBtn.textContent = "再生中…";
        speech.speakLines(t.audio, function () {
          playBtn.disabled = false;
          playBtn.textContent = "▶ もう一度再生";
        });
      });
      document.getElementById("stopAudio").addEventListener("click", function () {
        speech.stop();
        playBtn.disabled = false;
        playBtn.textContent = "▶ 音声を再生";
      });
    }

    var answered = 0;
    app.querySelectorAll(".choice-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qi = parseInt(btn.getAttribute("data-qi"), 10);
        var ci = parseInt(btn.getAttribute("data-ci"), 10);
        var q = t.questions[qi];
        var block = app.querySelector('.q-block[data-qi="' + qi + '"]');
        if (block.getAttribute("data-done")) return;
        block.setAttribute("data-done", "1");

        var ok = ci === q.answer;
        block.querySelectorAll(".choice-btn").forEach(function (b) {
          b.disabled = true;
          var bci = parseInt(b.getAttribute("data-ci"), 10);
          if (t.hideChoices) b.querySelector("span:last-child").textContent = q.choices[bci];
          if (bci === q.answer) b.classList.add("correct");
          else if (bci === ci && !ok) b.classList.add("wrong");
        });

        var fb = '<div class="feedback ' + (ok ? "ok" : "ng") + '">' +
          '<div class="verdict">' + (ok ? "正解!" : "不正解… 正解は (" + LETTERS[q.answer] + ")") + "</div>" +
          '<div>' + esc(q.explanation) + "</div>" +
          (q.translation ? '<details class="script-box"><summary>訳を見る</summary><div class="script-body">' + esc(q.translation) + "</div></details>" : "") +
          "</div>";
        block.querySelector(".feedback-slot").innerHTML = fb;

        session.results.push({
          part: t.part,
          prompt: (t.title ? t.title + " / " : "") + q.prompt,
          choices: q.choices,
          answer: q.answer,
          selected: ci,
          explanation: q.explanation
        });

        answered += 1;
        if (answered === t.questions.length) {
          // 全問解答:スクリプト・全訳を表示して次へ
          var extras = "";
          if (t.script) {
            extras += '<details class="script-box" open><summary>スクリプトを見る</summary><div class="script-body">' + esc(t.script) + "</div></details>";
          }
          if (t.translation) {
            extras += '<details class="script-box"><summary>全訳を見る</summary><div class="script-body">' + esc(t.translation) + "</div></details>";
          }
          if (extras) {
            var wrap = document.createElement("div");
            wrap.innerHTML = extras;
            app.querySelector(".nav-row").before(wrap);
          }
          document.getElementById("next").style.display = "";
        }
      });
    });

    document.getElementById("next").addEventListener("click", function () {
      if (session.taskIndex === session.tasks.length - 1) showResult();
      else { session.taskIndex += 1; renderTask(); }
    });
  }

  /* ---------------- 画面:結果 ---------------- */

  function showResult() {
    speech.stop();
    var correct = session.results.filter(function (r) { return r.selected === r.answer; }).length;
    var total = session.results.length;
    var rate = Math.round((correct / total) * 100);
    saveResult(session.mode, rate);

    var msg;
    if (rate === 100) msg = "全問正解! この調子で他のパートにも挑戦しましょう。";
    else if (rate >= 80) msg = "よくできています。間違えた問題の解説を確認して仕上げましょう。";
    else if (rate >= 60) msg = "合格圏まであと少し。解説を読んで、もう一度挑戦しましょう。";
    else msg = "まずは解説をじっくり読み、同じ問題をもう一度解いてみましょう。";

    var wrongs = session.results.filter(function (r) { return r.selected !== r.answer; });

    var html = '<div class="result-card">' +
      "<h2>" + esc(MODES[session.mode].label) + " の結果</h2>" +
      '<div class="result-score">' + correct + " / " + total + "</div>" +
      '<div class="result-rate">正答率 ' + rate + "%</div>" +
      '<div class="result-msg">' + esc(msg) + "</div>" +
      '<div class="result-actions">' +
      '<button class="next-btn" id="retry">もう一度挑戦</button>' +
      '<button class="secondary-btn" id="goHome">ホームへ戻る</button>' +
      "</div></div>";

    if (wrongs.length) {
      html += '<div class="review-list"><h2>間違えた問題の復習(' + wrongs.length + "問)</h2>";
      wrongs.forEach(function (r) {
        html += '<div class="review-item">' +
          '<div class="ri-q">[' + esc(r.part) + "] " + esc(r.prompt) + "</div>" +
          '<div class="ri-a">あなたの解答: <span class="ng">(' + LETTERS[r.selected] + ") " + esc(r.choices[r.selected]) + "</span><br>" +
          '正解: <span class="ok">(' + LETTERS[r.answer] + ") " + esc(r.choices[r.answer]) + "</span></div>" +
          '<div class="ri-exp">' + esc(r.explanation) + "</div>" +
          "</div>";
      });
      html += "</div>";
    }

    app.innerHTML = html;
    window.scrollTo(0, 0);
    document.getElementById("retry").addEventListener("click", function () { startQuiz(session.mode); });
    document.getElementById("goHome").addEventListener("click", showHome);
  }

  /* ---------------- 起動 ---------------- */

  document.getElementById("home-link").addEventListener("click", function (e) {
    e.preventDefault();
    showHome();
  });

  showHome();
})();
