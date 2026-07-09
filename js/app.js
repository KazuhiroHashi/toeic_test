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
    token: 0,       // 停止・画面遷移で再生を打ち切るためのセッション番号
    keepAlive: null,

    // 機械的な旧式ボイスやジョーク用ボイス(iOS/macOSに多数入っている)は
    // 聞き取りにくいため配役から除外する。端末の表示言語が日本語だと
    // ジョーク用ボイス名は翻訳されて返ってくるため、日本語名も併記する。
    EXCLUDED_NAMES: ["fred", "kathy", "albert", "bad news", "good news", "bahh",
      "bells", "boing", "bubbles", "cellos", "deranged", "eddy", "flo", "grandma",
      "grandpa", "hysterical", "jester", "junior", "organ", "princess", "ralph",
      "reed", "rocko", "sandy", "shelley", "superstar", "trinoids", "whisper",
      "wobble", "zarvox",
      "ベル", "震え", "道化", "オルガン", "スーパースター", "トリノイド",
      "ささやき声", "おばあちゃん", "おじいちゃん", "悪い知らせ", "良い知らせ",
      "泡", "チェロ", "ジュニア", "プリンセス"],

    init: function () {
      if (!this.supported) return;
      var self = this;
      function pick() {
        var all = window.speechSynthesis.getVoices();
        self.voices = all.filter(function (v) {
          if (!/^en([-_]|$)/i.test(v.lang)) return false;
          // 実在の人名ボイス(Karen/Daniel等)は表示言語が変わっても翻訳されない。
          // ラテン文字を1文字も含まない名前は翻訳されたジョーク用ボイスとみなして除外。
          if (!/[A-Za-z]/.test(v.name)) return false;
          var n = v.name.toLowerCase();
          for (var i = 0; i < self.EXCLUDED_NAMES.length; i++) {
            if (n.indexOf(self.EXCLUDED_NAMES[i]) !== -1) return false;
          }
          return true;
        });
      }
      pick();
      if ("onvoiceschanged" in window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = pick;
      }
    },

    // 代表的な英語音声の名前から性別を推定する(iOS/macOS/Windows/Android/Chrome)
    MALE_NAMES: ["aaron", "alex", "daniel", "arthur", "gordon", "rishi",
      "oliver", "thomas", "james", "david", "mark", "guy", "ryan", "eric",
      "christopher", "andrew", "brian", "george", "matthew", "russell", "liam",
      "evan", "nathan", "tom", "william", "richard"],
    FEMALE_NAMES: ["samantha", "karen", "moira", "tessa", "martha", "nicky",
      "serena", "victoria", "allison", "ava", "susan", "fiona", "zira",
      "aria", "jenny", "michelle", "sonia", "libby", "natasha", "emma", "joanna",
      "kendra", "amy", "salli", "kimberly", "catherine", "hazel", "kate",
      "zoe", "joelle", "matilda", "clara", "linda", "stephanie", "noelle"],

    // 発音の評判が良い声(前にあるほど優先)。端末に存在するものだけが使われる。
    // iOSの高品質版(Ava/Zoe/Evan/Nathan等)、英Daniel/Kate/Serena、
    // 豪Karen/Matilda/Lee、加Clara/Liam(Edge/Windowsの自然音声)など。
    PREFERRED_NAMES: ["ava", "zoe", "evan", "nathan", "samantha", "allison",
      "joelle", "susan", "tom", "daniel", "kate", "serena", "oliver",
      "stephanie", "karen", "matilda", "clara", "liam", "aria", "jenny",
      "guy", "christopher", "sonia", "ryan", "natasha", "william", "michelle",
      "libby", "emma", "andrew", "aaron", "nicky", "martha", "moira", "tessa"],

    isPreferred: function (v) {
      var n = v.name.toLowerCase();
      for (var i = 0; i < this.PREFERRED_NAMES.length; i++) {
        if (n.indexOf(this.PREFERRED_NAMES[i]) !== -1) return true;
      }
      return false;
    },

    // 品質スコア(小さいほど優先)。高品質版(Enhanced/Premium/Natural)を最優先し、
    // 次に評判リストの順位で並べる。
    qualityRank: function (v) {
      var n = v.name.toLowerCase();
      var rank = this.PREFERRED_NAMES.length + 10;
      for (var i = 0; i < this.PREFERRED_NAMES.length; i++) {
        if (n.indexOf(this.PREFERRED_NAMES[i]) !== -1) { rank = i; break; }
      }
      if (/enhanced|premium|natural|neural/i.test(n)) rank -= 100;
      return rank;
    },

    // ユーザーが「声の設定」画面で選んだ声(この端末のみ)。null = 自動
    VOICE_PREF_KEY: "toeic_voice_enabled_v1",
    enabledNames: null,
    loadPrefs: function () {
      try {
        var raw = localStorage.getItem(this.VOICE_PREF_KEY);
        this.enabledNames = raw ? JSON.parse(raw) : null;
      } catch (e) { this.enabledNames = null; }
    },
    savePrefs: function (names) {
      this.enabledNames = names && names.length ? names : null;
      try {
        if (this.enabledNames) localStorage.setItem(this.VOICE_PREF_KEY, JSON.stringify(this.enabledNames));
        else localStorage.removeItem(this.VOICE_PREF_KEY);
      } catch (e) { /* ignore */ }
    },

    // 配役に使う声のプール。ユーザー選択 > 推奨の声のみ > 全声 の順で決まる
    castPool: function () {
      var self = this;
      if (this.enabledNames) {
        var set = {};
        this.enabledNames.forEach(function (n) { set[n] = 1; });
        var chosen = this.voices.filter(function (v) { return set[v.name]; });
        if (chosen.length) return chosen;
      }
      var pref = this.voices.filter(function (v) { return self.isPreferred(v); });
      var hasM = pref.some(function (v) { return self.genderOf(v) === "M"; });
      var hasF = pref.some(function (v) { return self.genderOf(v) === "F"; });
      return (hasM && hasF) ? pref : this.voices;
    },

    genderOf: function (v) {
      var n = v.name.toLowerCase();
      if (n.indexOf("female") !== -1) return "F";
      if (n.indexOf("male") !== -1) return "M";
      var i;
      for (i = 0; i < this.FEMALE_NAMES.length; i++) {
        if (n.indexOf(this.FEMALE_NAMES[i]) !== -1) return "F";
      }
      for (i = 0; i < this.MALE_NAMES.length; i++) {
        if (n.indexOf(this.MALE_NAMES[i]) !== -1) return "M";
      }
      return "?";
    },

    // 話者(M/W/W2/M2/N)ごとに声を配役する。
    // 本番と同じ4カ国(米・英・豪・加)を seed(問題の通し番号)でローテーション。
    // その国の声が端末に無ければ、品質順の上位で代用する。
    pickCast: function (seed) {
      seed = seed || 0;
      var self = this;
      var pool = this.castPool().slice().sort(function (a, b) {
        return self.qualityRank(a) - self.qualityRank(b);
      });
      var males = pool.filter(function (v) { return self.genderOf(v) === "M"; });
      var females = pool.filter(function (v) { return self.genderOf(v) === "F"; });
      var fallback = pool[0] || null;

      var order = ["US", "GB", "AU", "CA"];
      function country(v) {
        var m = /en[-_]([A-Za-z]{2})/.exec(v.lang);
        return m ? m[1].toUpperCase() : "US";
      }
      function pickFrom(arr, k) {
        if (!arr.length) return null;
        var natives = arr.filter(function (v) { return country(v) === order[k % order.length]; });
        return natives.length ? natives[0] : arr[k % arr.length];
      }
      var m = pickFrom(males, seed) || fallback;
      var m2 = pickFrom(males, seed + 1) || m;
      var w = pickFrom(females, seed) || fallback;
      var w2 = pickFrom(females, seed + 1) || w;
      if (m2 === m && males.length > 1) m2 = males[(males.indexOf(m) + 1) % males.length];
      if (w2 === w && females.length > 1) w2 = females[(females.indexOf(w) + 1) % females.length];
      var noRealPair = !males.length || !females.length; // 男女どちらかの声が無い
      return {
        // 男性の声はこもって聞こえやすいため、やや高め(pitch 1.1)に設定
        M: { voice: m, pitch: noRealPair ? 0.75 : 1.1, rate: 0.95 },
        M2: { voice: m2, pitch: m2 === m ? 0.9 : 1.1, rate: 0.95 },
        W: { voice: w, pitch: noRealPair ? 1.4 : 1.05, rate: 0.95 },
        W2: { voice: w2, pitch: w2 === w ? 1.35 : 1.05, rate: 0.95 },
        N: { voice: pickFrom(males, seed + 2) || m, pitch: noRealPair ? 0.85 : 1.05, rate: 0.9 }
      };
    },

    // 「声の設定」画面の試聴用
    preview: function (v) {
      if (!this.supported) return;
      this.stop();
      var u = new SpeechSynthesisUtterance(
        "Hello, my name is " + v.name.replace(/\(.*\)/, "") +
        ". Questions one through three refer to the following conversation."
      );
      u.voice = v;
      u.lang = v.lang;
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    },

    // 読み上げ用に略語を展開する。
    // 一部の音声は Dr. を字読みし(ディーアール)、さらに文分割処理が
    // 略語のピリオドを文末と誤認して不自然に区切るため、先に展開しておく。
    normalizeForSpeech: function (text) {
      return text
        .replace(/\bDr\./g, "Doctor")
        .replace(/\bMr\./g, "Mister")
        .replace(/\bMrs\./g, "Missus")
        .replace(/\bMs\./g, "Miz")
        // A.M./P.M. は後ろに大文字が続けば文末のピリオドを残す
        .replace(/\b([AP])\.M\.(?=\s+[A-Z])/g, "$1M.")
        .replace(/\b([AP])\.M\./g, "$1M");
    },

    // 長い文の途中停止(ブラウザの制限)を避けるため文単位に分割する
    splitText: function (text) {
      var parts = text.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g);
      if (!parts) return [text];
      return parts.map(function (s) { return s.trim(); }).filter(Boolean);
    },

    // 1文ずつ順番に再生する(まとめてキューに積むと iOS Safari で途中停止するため)
    speakLines: function (lines, onEnd, seed) {
      if (!this.supported) { if (onEnd) onEnd(); return; }
      var self = this;
      this.stop();
      var token = ++this.token;
      var cast = this.pickCast(seed);

      var units = [];
      lines.forEach(function (line) {
        self.splitText(self.normalizeForSpeech(line.text)).forEach(function (s) {
          units.push({ speaker: line.speaker || "M", text: s, gap: 150 });
        });
        if (units.length) units[units.length - 1].gap = 650; // 話者交代の間(ま)
      });

      // デスクトップChromeが長い再生を自動一時停止する問題への対策
      this.keepAlive = setInterval(function () {
        if (window.speechSynthesis.speaking) window.speechSynthesis.resume();
      }, 8000);

      var i = 0;
      function finish() {
        if (self.keepAlive) { clearInterval(self.keepAlive); self.keepAlive = null; }
        if (onEnd) onEnd();
      }
      function next() {
        if (token !== self.token) return;
        if (i >= units.length) { finish(); return; }
        var cur = units[i++];
        var u = new SpeechSynthesisUtterance(cur.text);
        var conf = cast[cur.speaker] || cast.M;
        if (conf.voice) { u.voice = conf.voice; u.lang = conf.voice.lang; }
        else { u.lang = "en-US"; }
        u.pitch = conf.pitch;
        u.rate = conf.rate;
        var done = false;
        function step() {
          if (done) return;
          done = true;
          clearTimeout(guard);
          if (token !== self.token) return;
          setTimeout(next, cur.gap);
        }
        // onend が発火しない環境への保険(発話長に応じたタイムアウト)
        var guard = setTimeout(step, 4000 + cur.text.length * 150);
        u.onend = step;
        u.onerror = step;
        window.speechSynthesis.speak(u);
      }
      next();
    },

    stop: function () {
      this.token += 1;
      if (this.keepAlive) { clearInterval(this.keepAlive); this.keepAlive = null; }
      if (this.supported) window.speechSynthesis.cancel();
    }
  };
  speech.init();
  speech.loadPrefs();

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
        // 図表問題:graphic があれば画面に表示する(本番の Look at the graphic. 形式)
        docType: set.graphic ? "Graphic(図表)" : undefined,
        passage: set.graphic || null,
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
      "<h2>問題を選んで解く</h2>" +
      '<div class="menu-grid"><button class="menu-card" id="pick-quiz">' +
      '<span class="card-title">🎯 問題を選んで解く</span>' +
      '<span class="card-desc">パートごとの問題一覧から、解きたい問題だけを選んで挑戦できます</span>' +
      "</button></div>" +
      "<h2>設定</h2>" +
      '<div class="menu-grid"><button class="menu-card" id="voice-settings">' +
      '<span class="card-title">🔊 声の試聴と選択</span>' +
      '<span class="card-desc">端末の英語音声を名前付きで試聴し、出題に使う声を選べます</span>' +
      '<span class="card-stat">' +
      (speech.enabledNames ? "手動選択中(" + speech.enabledNames.length + "件)" : "自動(発音の評判が良い声のみ)") +
      "</span></button></div>" +
      '<p class="history-note">成績と声の選択はこの端末のブラウザにのみ保存されます。</p>' +
      "</section>";

    app.querySelectorAll(".menu-card[data-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () { startQuiz(btn.getAttribute("data-mode")); });
    });
    document.getElementById("voice-settings").addEventListener("click", showVoiceSettings);
    document.getElementById("pick-quiz").addEventListener("click", showPicker);
  }

  /* ---------------- 画面:問題を選んで解く ---------------- */

  var PICKABLE = ["part2", "part3", "part4", "part5", "part6", "part7"];

  function showPicker() {
    speech.stop();
    var html = '<div class="quiz-header">' +
      "<span>問題を選んで解く — パートを選択</span>" +
      '<button class="quit-btn" id="backHome">ホームへ戻る</button>' +
      "</div>" +
      '<section class="menu-section"><div class="menu-grid">';
    PICKABLE.forEach(function (mode) {
      var m = MODES[mode];
      html += '<button class="menu-card" data-pick="' + mode + '">' +
        '<span class="card-title">' + esc(m.label) + "</span>" +
        '<span class="card-desc">' + countQuestions(buildTasks(mode)) + "問から選べます</span>" +
        "</button>";
    });
    html += "</div></section>";

    app.innerHTML = html;
    window.scrollTo(0, 0);
    document.getElementById("backHome").addEventListener("click", showHome);
    app.querySelectorAll(".menu-card[data-pick]").forEach(function (btn) {
      btn.addEventListener("click", function () { showTaskList(btn.getAttribute("data-pick")); });
    });
  }

  // 一覧に表示する問題の見出し(リスニングの内容を明かしすぎない程度に)
  function taskLabel(t, mode, idx) {
    if (t.title) return t.title + "(" + t.questions.length + "問)";
    var text;
    if (mode === "part2") {
      text = t.script.split("\n")[0]; // 質問文の冒頭
      var tag = idx >= 15 ? "【変化球】" : "";
      return "No." + (idx + 1) + " " + tag + text.slice(0, 38) + (text.length > 38 ? "…" : "");
    }
    text = t.questions[0].prompt;
    return "No." + (idx + 1) + " " + text.slice(0, 38) + (text.length > 38 ? "…" : "");
  }

  function showTaskList(mode) {
    speech.stop();
    var tasks = buildTasks(mode);
    var html = '<div class="quiz-header">' +
      "<span>" + esc(MODES[mode].label) + " — 問題を選択</span>" +
      '<button class="quit-btn" id="backPicker">パート選択へ戻る</button>' +
      "</div>" +
      '<div class="question-card">' +
      "<p>解きたい問題にチェックを入れて「選んだ問題を解く」を押してください。</p>" +
      '<div class="nav-row" style="justify-content:flex-start;margin-bottom:10px">' +
      '<button class="secondary-btn" id="selAll">すべて選択</button>' +
      '<button class="secondary-btn" id="selNone">すべて解除</button>' +
      "</div>" +
      '<div class="voice-list">';
    tasks.forEach(function (t, i) {
      html += '<label class="voice-row pick-row">' +
        '<input type="checkbox" data-i="' + i + '">' +
        '<span class="pick-label">' + esc(taskLabel(t, mode, i)) + "</span>" +
        "</label>";
    });
    html += "</div>" +
      '<div class="nav-row"><button class="next-btn" id="startPicked" disabled>選んだ問題を解く</button></div>' +
      "</div>";

    app.innerHTML = html;
    window.scrollTo(0, 0);
    document.getElementById("backPicker").addEventListener("click", showPicker);

    var startBtn = document.getElementById("startPicked");
    function refresh() {
      var n = app.querySelectorAll(".pick-row input:checked").length;
      startBtn.disabled = n === 0;
      startBtn.textContent = n ? "選んだ問題を解く(" + n + "件)" : "選んだ問題を解く";
    }
    app.querySelectorAll(".pick-row input").forEach(function (cb) {
      cb.addEventListener("change", refresh);
    });
    document.getElementById("selAll").addEventListener("click", function () {
      app.querySelectorAll(".pick-row input").forEach(function (cb) { cb.checked = true; });
      refresh();
    });
    document.getElementById("selNone").addEventListener("click", function () {
      app.querySelectorAll(".pick-row input").forEach(function (cb) { cb.checked = false; });
      refresh();
    });
    startBtn.addEventListener("click", function () {
      var indices = [];
      app.querySelectorAll(".pick-row input:checked").forEach(function (cb) {
        indices.push(parseInt(cb.getAttribute("data-i"), 10));
      });
      if (indices.length) startQuiz(mode, indices);
    });
  }

  /* ---------------- 画面:声の試聴と選択 ---------------- */

  function showVoiceSettings() {
    speech.stop();
    var pool = speech.castPool();
    var inPool = {};
    pool.forEach(function (v) { inPool[v.name] = true; });
    var vs = speech.voices.slice().sort(function (a, b) {
      return speech.qualityRank(a) - speech.qualityRank(b);
    });
    var genderLabel = { M: "男性", F: "女性", "?": "不明" };
    var countryLabel = { US: "🇺🇸米", GB: "🇬🇧英", AU: "🇦🇺豪", CA: "🇨🇦加", IE: "🇮🇪愛", IN: "🇮🇳印", ZA: "🇿🇦南ア" };

    var html = '<div class="quiz-header">' +
      "<span>声の試聴と選択</span>" +
      '<button class="quit-btn" id="backHome">ホームへ戻る</button>' +
      "</div>" +
      '<div class="question-card">' +
      "<p>▶ で試聴し、出題に使いたい声にチェックを入れてください(選択はこの端末に保存されます)。" +
      "チェックを1つも入れない場合は、発音の評判が良い声が自動で使われます。</p>";

    if (!speech.supported || !vs.length) {
      html += '<p class="audio-note">このブラウザでは英語の音声合成が利用できません。</p>';
    } else {
      html += '<div class="voice-list">';
      vs.forEach(function (v, i) {
        var cm = /en[-_]([A-Za-z]{2})/.exec(v.lang);
        var c = cm ? cm[1].toUpperCase() : "";
        html += '<div class="voice-row">' +
          '<input type="checkbox" data-name="' + esc(v.name) + '"' + (inPool[v.name] ? " checked" : "") + ">" +
          '<button class="stop-btn voice-play" data-i="' + i + '">▶</button>' +
          '<span class="voice-name">' + esc(v.name) + "</span>" +
          '<span class="voice-meta">' + (countryLabel[c] || esc(v.lang)) + " / " +
          genderLabel[speech.genderOf(v)] +
          (speech.isPreferred(v) ? ' / <span class="voice-star">★推奨</span>' : "") +
          "</span></div>";
      });
      html += "</div>" +
        '<div class="nav-row" style="justify-content:flex-start">' +
        '<button class="secondary-btn" id="resetVoices">自動(推奨)に戻す</button>' +
        "</div>";
    }
    html += "</div>";

    app.innerHTML = html;
    window.scrollTo(0, 0);
    document.getElementById("backHome").addEventListener("click", showHome);

    var reset = document.getElementById("resetVoices");
    if (reset) {
      reset.addEventListener("click", function () {
        speech.savePrefs(null);
        showVoiceSettings();
      });
    }
    app.querySelectorAll(".voice-play").forEach(function (btn) {
      btn.addEventListener("click", function () {
        speech.preview(vs[parseInt(btn.getAttribute("data-i"), 10)]);
      });
    });
    app.querySelectorAll('.voice-row input[type="checkbox"]').forEach(function (cb) {
      cb.addEventListener("change", function () {
        var names = [];
        app.querySelectorAll('.voice-row input[type="checkbox"]').forEach(function (c) {
          if (c.checked) names.push(c.getAttribute("data-name"));
        });
        speech.savePrefs(names);
      });
    });
  }

  /* ---------------- 画面:出題 ---------------- */

  var session = null;

  function startQuiz(mode, indices) {
    var tasks = buildTasks(mode);
    var custom = indices && indices.length ? indices.slice() : null;
    if (custom) {
      tasks = custom.map(function (i) { return tasks[i]; }).filter(Boolean);
    }
    session = {
      mode: mode,
      custom: custom, // 「選んで解く」で選ばれた問題番号(通常出題は null)
      label: MODES[mode].label + (custom ? "(選択)" : ""),
      tasks: tasks,
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
      "<span>" + esc(session.label) + " — 問題 " + (answeredBefore + 1) +
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
      // 本番同様、ナレーターの導入文を付けて再生する
      var intro;
      if (t.part === "Part 2") {
        intro = "Number " + (answeredBefore + 1) + ".";
      } else {
        var three = t.audio.some(function (l) { return l.speaker === "W2" || l.speaker === "M2"; });
        intro = "Questions " + (answeredBefore + 1) +
          (t.questions.length > 1 ? " through " + (answeredBefore + t.questions.length) : "") +
          " refer to the following " +
          (t.part === "Part 3" ? "conversation" + (three ? " with three speakers" : "") : "talk") + ".";
      }
      var audioLines = [{ speaker: "N", text: intro }].concat(t.audio);

      var playBtn = document.getElementById("play");
      playBtn.addEventListener("click", function () {
        playBtn.disabled = true;
        playBtn.textContent = "再生中…";
        // 問題番号を seed にして、問題ごとに違う声の組を割り当てる
        speech.speakLines(audioLines, function () {
          playBtn.disabled = false;
          playBtn.textContent = "▶ もう一度再生";
        }, answeredBefore);
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
    // 「選んで解く」の成績は自己ベストに含めない(1問だけ解いて100%等を防ぐ)
    if (!session.custom) saveResult(session.mode, rate);

    var msg;
    if (rate === 100) msg = "全問正解! この調子で他のパートにも挑戦しましょう。";
    else if (rate >= 80) msg = "よくできています。間違えた問題の解説を確認して仕上げましょう。";
    else if (rate >= 60) msg = "合格圏まであと少し。解説を読んで、もう一度挑戦しましょう。";
    else msg = "まずは解説をじっくり読み、同じ問題をもう一度解いてみましょう。";

    var wrongs = session.results.filter(function (r) { return r.selected !== r.answer; });

    var html = '<div class="result-card">' +
      "<h2>" + esc(session.label) + " の結果</h2>" +
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
    document.getElementById("retry").addEventListener("click", function () {
      startQuiz(session.mode, session.custom);
    });
    document.getElementById("goHome").addEventListener("click", showHome);
  }

  /* ---------------- 起動 ---------------- */

  document.getElementById("home-link").addEventListener("click", function (e) {
    e.preventDefault();
    showHome();
  });

  // 動作検証用(コンソールから音声の配役を確認できる)
  window.TOEIC_DEBUG = { speech: speech };

  showHome();
})();
