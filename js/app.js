/* TOEIC 総合問題集 — アプリ本体 */
(function () {
  "use strict";

  var app = document.getElementById("app");

  var LETTERS = ["A", "B", "C", "D"];
  var STORAGE_KEY = "toeic_test_stats_v1";
  var SET_PREF_KEY = "toeic_active_set_v1";
  var audioMode = null; // 録音済み音声の有無(null=未確認 / true=あり / false=なし→合成音声)

  /* ---------------- 問題セット ---------------- */
  // 同レベルの問題を複数セット用意し、ホームで切り替えられる。
  var SETS = [
    { id: "s1", name: "セット1", data: window.TOEIC_DATA || {} }
  ];
  // セット2以降は全パート(part7まで)がそろってから選択肢に出す
  [
    { id: "s2", name: "セット2", data: window.TOEIC_DATA_2 },
    { id: "s3", name: "セット3", data: window.TOEIC_DATA_3 },
    { id: "s4", name: "セット4", data: window.TOEIC_DATA_4 },
    { id: "s5", name: "セット5", data: window.TOEIC_DATA_5 },
    { id: "s6", name: "セット6", data: window.TOEIC_DATA_6 }
  ].forEach(function (s) {
    if (s.data && s.data.part7) SETS.push({ id: s.id, name: s.name, data: s.data });
  });
  /* ---------------- 合言葉によるセットの解放 ----------------
     セット1は無料。セット2以降は購入者に渡した合言葉で解放する。
     合言葉そのものはここに書かず、照合用の値だけを置く(ソースを見ても分からない)。
     合言葉を変えるときは  node tools/make_code.js <新しい合言葉>  で値を作り直す。 */
  var UNLOCK_KEY = "toeic_unlocked_v1";
  var FREE_SETS = { s1: true };
  var CODE_HASHES = {
    "1x2yoe6": ["s2"],
    "46ijg9": ["s3"],
    "1bo82nr": ["s4"],
    "hhek08": ["s5"],
    "d0deqg": ["s6"],
    "1o2kktt": ["s2", "s3", "s4", "s5", "s6"]   // まとめ買い用
  };

  function codeHash(str) {
    var h = 2166136261;
    str = String(str).trim().toLowerCase();
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(36);
  }
  function loadUnlocked() {
    try { return JSON.parse(localStorage.getItem(UNLOCK_KEY)) || {}; }
    catch (e) { return {}; }
  }
  var unlocked = loadUnlocked();
  function isUnlocked(id) { return !!(FREE_SETS[id] || unlocked[id]); }
  // 合言葉を適用する。解放できたセットのidの配列を返す(不正なら空配列)
  function applyCode(input) {
    var ids = CODE_HASHES[codeHash(input)];
    if (!ids) return [];
    var added = [];
    ids.forEach(function (id) { if (!unlocked[id]) { unlocked[id] = 1; added.push(id); } });
    try { localStorage.setItem(UNLOCK_KEY, JSON.stringify(unlocked)); } catch (e) { /* ignore */ }
    return ids;
  }

  var activeSetIdx = 0;
  (function () {
    try {
      var saved = localStorage.getItem(SET_PREF_KEY);
      for (var i = 0; i < SETS.length; i++) {
        if (SETS[i].id === saved && isUnlocked(saved)) { activeSetIdx = i; break; }
      }
    } catch (e) { /* ignore */ }
  })();
  function activeData() { return SETS[activeSetIdx].data; }
  function statKey(mode) { return SETS[activeSetIdx].id + ":" + mode; }

  /* ---------------- モード定義 ---------------- */

  var MODES = {
    part1: { label: "Part 1 写真描写", desc: "イラストを見て正しい描写文を選ぶ(リスニング)", listening: true },
    part2: { label: "Part 2 応答問題", desc: "質問を聞いて応答を選ぶ(リスニング)", listening: true },
    part3: { label: "Part 3 会話問題", desc: "会話を聞いて設問に答える(リスニング)", listening: true },
    part4: { label: "Part 4 説明文問題", desc: "トークを聞いて設問に答える(リスニング)", listening: true },
    part5: { label: "Part 5 短文穴埋め", desc: "文法・語彙(リーディング)", listening: false },
    part6: { label: "Part 6 長文穴埋め", desc: "文書の空所を埋める(リーディング)", listening: false },
    part7: { label: "Part 7 読解問題", desc: "文書を読んで設問に答える(リーディング)", listening: false },
    reading: { label: "リーディング模試(Part 5-7)", desc: "本番と同じ100問・制限時間75分", listening: false, limit: 75 * 60 },
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
    var key = statKey(mode);
    var s = stats[key] || { best: 0, attempts: 0 };
    s.attempts += 1;
    s.last = rate;
    if (rate > s.best) s.best = rate;
    stats[key] = s;
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

    // 配役に使う声のプール。推奨の声があればそれだけを使う
    castPool: function () {
      var self = this;
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
        // 行末の間(ま): 指定があればそれを使う(設問読み上げ後の8秒ポーズ等)
        // gapAfter が 0 のときも 0 として扱う(|| だと既定値に化けるため)
        if (units.length) units[units.length - 1].gap = line.gapAfter == null ? 650 : line.gapAfter;
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

    // 録音済み音声ファイル(mp3)を順番に再生する。
    // clips は URL文字列 または {f: URL, g: 再生後ポーズms} の配列。
    // ファイルが読み込めない場合(未生成など)は onError を呼ぶ(合成音声へフォールバック)。
    playFiles: function (clips, onEnd, onError) {
      this.stop();
      var self = this;
      var token = ++this.token;
      var items = clips.map(function (c) {
        var url = typeof c === "string" ? c : c.f;
        var gap = typeof c === "string" ? 400 : (c.g == null ? 400 : c.g);
        var a = new Audio(url);
        a.preload = "auto";
        return { a: a, gap: gap };
      });
      this._audios = items.map(function (it) { return it.a; });
      var failed = false;
      function fail() {
        if (failed || token !== self.token) return;
        failed = true;
        self.stop();
        if (onError) onError();
      }
      items.forEach(function (it) { it.a.addEventListener("error", fail); });
      var i = 0;
      function next() {
        if (token !== self.token || failed) return;
        if (i >= items.length) { if (onEnd) onEnd(); return; }
        var it = items[i++];
        it.a.onended = function () { if (token === self.token) setTimeout(next, it.gap); };
        var p = it.a.play();
        if (p && p.catch) p.catch(fail);
      }
      next();
    },

    stop: function () {
      this.token += 1;
      if (this.keepAlive) { clearInterval(this.keepAlive); this.keepAlive = null; }
      if (this._audios) {
        this._audios.forEach(function (a) { try { a.pause(); a.src = ""; } catch (e) { /* ignore */ } });
        this._audios = null;
      }
      if (this.supported) window.speechSynthesis.cancel();
    }
  };
  speech.init();

  /* ---------------- タスク構築 ----------------
     タスク = 1画面分(音声 or 文書 + 設問1〜n問) */

  // 本番TOEICの通し番号(各パートの開始番号)。音声の読み上げも画面表示もこれに合わせる。
  //   Part 1: 1-6 / Part 2: 7-31 / Part 3: 32-70 / Part 4: 71-100
  //   Part 5: 101-130 / Part 6: 131-146 / Part 7: 147-200
  var PART_START = {
    part1: 1, part2: 7, part3: 32, part4: 71,
    part5: 101, part6: 131, part7: 147
  };

  // 記号(A.〜D.)は説明文と別の発話にして、そこで一度切る。
  // 続けて読ませると記号の A が冠詞の a に潰れて「ア」に聞こえるため。
  // 無音除去済みの mp3 を前提にした値(未処理なら 0 でよい)。
  var LETTER_GAP = 200;
  function letterText(i) { return LETTERS[i] + "."; }

  function tasksPart1(items) {
    return items.map(function (it, idx) {
      var lines = [];
      it.choices.forEach(function (c, i) {
        lines.push({ speaker: it.speaker || "M", text: letterText(i), gapAfter: LETTER_GAP });
        lines.push({ speaker: it.speaker || "M", text: c, gapAfter: 1000 });
      });
      return {
        part: "Part 1",
        listening: true,
        hideChoices: true,
        id: it.id,
        image: it.image,
        startNo: PART_START.part1 + idx,
        audio: lines,
        script: it.choices.map(function (c, i) { return "(" + LETTERS[i] + ") " + c; }).join("\n"),
        translation: it.translation,
        questions: [{
          id: it.id,
          prompt: "",
          choices: it.choices,
          answer: it.answer,
          explanation: it.explanation
        }]
      };
    });
  }

  function tasksPart2(items) {
    return items.map(function (it, idx) {
      var other = it.question.speaker === "W" ? "M" : "W";
      var lines = [{ speaker: it.question.speaker, text: it.question.text, gapAfter: 1000 }];
      it.choices.forEach(function (c, i) {
        lines.push({ speaker: other, text: letterText(i), gapAfter: LETTER_GAP });
        lines.push({ speaker: other, text: c, gapAfter: 1000 });
      });
      return {
        part: "Part 2",
        listening: true,
        hideChoices: true,
        id: it.id,
        startNo: PART_START.part2 + idx,
        audio: lines,
        script: it.question.text + "\n" + it.choices.map(function (c, i) { return "(" + LETTERS[i] + ") " + c; }).join("\n"),
        translation: it.translation,
        questions: [{
          id: it.id,
          prompt: "",
          choices: it.choices,
          answer: it.answer,
          explanation: it.explanation
        }]
      };
    });
  }

  // 本番の「Questions 147-149 refer to the following text-message chain.」形式の見出しを作る
  function pluralize(w) {
    if (/s$/.test(w)) return w;
    if (/(ch|sh|x|z)$/.test(w)) return w + "es";
    if (/[^aeiou]y$/.test(w)) return w.replace(/y$/, "ies");
    return w + "s";
  }
  function refLine(startNo, count, docTypes) {
    var groups = [];
    docTypes.forEach(function (t) {
      var name = String(t).replace(/\s*\d+$/, "").toLowerCase();
      var last = groups[groups.length - 1];
      if (last && last.name === name) last.n += 1;
      else groups.push({ name: name, n: 1 });
    });
    var NUM = ["", "", "two", "three", "four", "five"];
    var parts = groups.map(function (g) {
      return g.n > 1 ? NUM[g.n] + " " + pluralize(g.name) : g.name;
    });
    var phrase = parts.length <= 1 ? parts[0]
      : parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1];
    var range = count > 1 ? startNo + "-" + (startNo + count - 1) : String(startNo);
    return "Questions " + range + " refer to the following " + phrase + ".";
  }

  function tasksSet(items, partLabel, startBase) {
    var no = startBase;
    return items.map(function (set) {
      var startNo = no;
      no += set.questions.length;
      return {
        part: partLabel,
        startNo: startNo,
        listening: true,
        id: set.id,
        kind: set.kind,               // Part 4 のトーク種別(telephone message 等)
        graphicKind: set.graphicKind, // 図表問題の図表種別(list / invoice / schedule / agenda)
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
    return items.map(function (it, idx) {
      return {
        part: "Part 5",
        listening: false,
        startNo: PART_START.part5 + idx,
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
    var no = PART_START.part6;
    return items.map(function (doc) {
      var startNo = no;
      no += doc.questions.length;
      // 本文の空所番号を本番の通し番号にそろえる([1] → [131] など)
      var passage = doc.passage.replace(/\[(\d+)\]/g, function (m, n) {
        return "[" + (startNo + parseInt(n, 10) - 1) + "]";
      });
      return {
        part: "Part 6",
        listening: false,
        startNo: startNo,
        title: doc.title,                                   // 一覧用(日本語)
        heading: refLine(startNo, doc.questions.length, [doc.docType]),
        docType: doc.docType,
        passage: passage,
        translation: doc.translation,
        questions: doc.questions.map(function (q) {
          return {
            id: doc.id + "-q" + q.num,
            prompt: "",                                     // 本番は設問文が印刷されない
            choices: q.choices,
            answer: q.answer,
            explanation: q.explanation
          };
        })
      };
    });
  }

  function tasksPart7(items) {
    var no = PART_START.part7;
    return items.map(function (doc) {
      var startNo = no;
      no += doc.questions.length;
      return {
        part: "Part 7",
        listening: false,
        startNo: startNo,
        title: doc.title,                                   // 一覧用(日本語)
        heading: refLine(startNo, doc.questions.length,
          (doc.passages || []).map(function (x) { return x.docType; })),
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
    var DATA = activeData();
    switch (mode) {
      case "part1": return tasksPart1(DATA.part1);
      case "part2": return tasksPart2(DATA.part2);
      case "part3": return tasksSet(DATA.part3, "Part 3", PART_START.part3);
      case "part4": return tasksSet(DATA.part4, "Part 4", PART_START.part4);
      case "reading": return tasksPart5(DATA.part5)
        .concat(tasksPart6(DATA.part6))
        .concat(tasksPart7(DATA.part7));
      case "part5": return tasksPart5(DATA.part5);
      case "part6": return tasksPart6(DATA.part6);
      case "part7": return tasksPart7(DATA.part7);
      case "mock":
        return [].concat(
          tasksPart1(shuffle(DATA.part1).slice(0, 2)),
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
    stopTimer();
    var stats = loadStats();

    function card(mode, extraClass) {
      var m = MODES[mode];
      var n = mode === "mock" ? "約30問" : countQuestions(buildTasks(mode)) + "問";
      var s = stats[statKey(mode)];
      var stat = s ? "自己ベスト " + s.best + "%(挑戦 " + s.attempts + "回)" : "未挑戦";
      return '<button class="menu-card ' + (extraClass || "") + '" data-mode="' + mode + '">' +
        '<span class="card-title">' + esc(m.label) + "</span>" +
        '<span class="card-desc">' + esc(m.desc) + " / " + n + "</span>" +
        '<span class="card-stat">' + esc(stat) + "</span>" +
        "</button>";
    }

    var setSwitchHtml = "";
    if (SETS.length > 1) {
      var setTabs = SETS.map(function (s, i) {
        var lock = isUnlocked(s.id) ? "" : " locked";
        return '<button class="set-tab' + (i === activeSetIdx ? " active" : "") + lock +
          '" data-set="' + i + '">' + esc(s.name) + (lock ? " 🔒" : "") + "</button>";
      }).join("");
      setSwitchHtml = '<div class="set-switch"><span class="set-switch-label">問題セット</span>' +
        '<div class="set-tabs">' + setTabs + "</div></div>";
    }

    app.innerHTML =
      '<section class="menu-section">' +
      setSwitchHtml +
      "<h2>模試に挑戦</h2>" +
      '<div class="menu-grid">' + card("mock", "mock") + card("reading", "mock") + "</div>" +
      "<h2>リスニング(音声読み上げ)</h2>" +
      '<div class="menu-grid">' + card("part1") + card("part2") + card("part3") + card("part4") + "</div>" +
      "<h2>リーディング</h2>" +
      '<div class="menu-grid">' + card("part5") + card("part6") + card("part7") + "</div>" +
      "<h2>問題を選んで解く</h2>" +
      '<div class="menu-grid"><button class="menu-card" id="pick-quiz">' +
      '<span class="card-title">🎯 問題を選んで解く</span>' +
      '<span class="card-desc">パートごとの問題一覧から、解きたい問題だけを選んで挑戦できます</span>' +
      "</button></div>" +
      (SETS.some(function (s) { return !isUnlocked(s.id); })
        ? '<div class="unlock-box"><button class="secondary-btn" id="enterCode">🔑 合言葉を入力してセットを解放</button>' +
          '<span class="unlock-note">購入いただいた方に合言葉をお渡ししています。</span></div>'
        : "") +
      '<p class="history-note">成績はこの端末のブラウザにのみ保存されます。</p>' +
      "</section>";

    app.querySelectorAll(".menu-card[data-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () { startQuiz(btn.getAttribute("data-mode")); });
    });
    document.getElementById("pick-quiz").addEventListener("click", showPicker);
    var codeBtn = document.getElementById("enterCode");
    if (codeBtn) codeBtn.addEventListener("click", function () { askCode(null); });
    app.querySelectorAll(".set-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = parseInt(btn.getAttribute("data-set"), 10);
        if (!isUnlocked(SETS[i].id)) { askCode(SETS[i].name); return; }
        activeSetIdx = i;
        try { localStorage.setItem(SET_PREF_KEY, SETS[activeSetIdx].id); } catch (e) { /* ignore */ }
        showHome();
      });
    });
  }

  /* ---------------- 画面:問題を選んで解く ---------------- */

  var PICKABLE = ["part1", "part2", "part3", "part4", "part5", "part6", "part7"];

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
    // 本番の通し番号で表示する(音声の読み上げ番号と一致させる)
    var no = t.startNo || (idx + 1);
    var range = t.questions.length > 1 ? "No." + no + "-" + (no + t.questions.length - 1) : "No." + no;
    if (t.title) return range + " " + t.title + "(" + t.questions.length + "問)";
    var text;
    if (mode === "part1") {
      // 説明文を見せると答えが分かるため、番号のみ表示
      return range + "(写真描写)";
    }
    if (mode === "part2") {
      text = t.script.split("\n")[0]; // 質問文の冒頭
      var tag = idx >= 15 ? "【変化球】" : "";
      return range + " " + tag + text.slice(0, 38) + (text.length > 38 ? "…" : "");
    }
    text = t.questions[0].prompt;
    return range + " " + text.slice(0, 38) + (text.length > 38 ? "…" : "");
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

  // 合言葉の入力(鍵つきセットを押したとき / ホームのボタンから)
  function askCode(setName) {
    var msg = setName
      ? setName + "は購入者向けです。合言葉を入力してください。"
      : "購入時にお渡しした合言葉を入力してください。";
    var input = window.prompt(msg);
    if (input === null) return;                    // キャンセル
    var ids = applyCode(input);
    if (!ids.length) {
      alert("合言葉が違うようです。空白や全角に注意して、もう一度お試しください。");
      return;
    }
    var names = ids.map(function (id) {
      for (var i = 0; i < SETS.length; i++) if (SETS[i].id === id) return SETS[i].name;
      return id;
    });
    alert(names.join("・") + " を解放しました。");
    showHome();
  }

  /* ---------------- 画面:出題 ---------------- */

  var session = null;

  function startQuiz(mode, indices) {
    var tasks = buildTasks(mode);
    var custom = indices && indices.length ? indices.slice() : null;
    if (custom) {
      tasks = custom.map(function (i) { return tasks[i]; }).filter(Boolean);
    }
    // 解答は保持するだけ。正誤・解説は最後の結果画面でまとめて見せる(本番と同じ進め方)
    session = {
      mode: mode,
      custom: custom, // 「選んで解く」で選ばれた問題番号(通常出題は null)
      label: MODES[mode].label + (custom ? "(選択)" : ""),
      tasks: tasks,
      taskIndex: 0,
      answers: tasks.map(function (t) {
        return t.questions.map(function () { return null; });
      })
    };
    session.total = countQuestions(session.tasks);
    // 各タスクが何問目から始まるか
    var acc = 0;
    session.offsets = tasks.map(function (t) { var o = acc; acc += t.questions.length; return o; });
    var limit = MODES[mode].limit;
    session.endAt = (limit && !custom) ? Date.now() + limit * 1000 : null;
    renderTask();
  }

  function renderTask() {
    speech.stop();
    var t = session.tasks[session.taskIndex];
    var answeredBefore = session.offsets[session.taskIndex];
    var myAnswers = session.answers[session.taskIndex];

    var html = '<div class="quiz-header">' +
      "<span>" + esc(session.label) + " — 問題 " + (answeredBefore + 1) +
      (t.questions.length > 1 ? "〜" + (answeredBefore + t.questions.length) : "") +
      " / " + session.total + "</span>" +
      (session.endAt ? '<span class="timer" id="timer"></span>' : "") +
      '<button class="quit-btn" id="quit">中断してホームへ</button>' +
      "</div>" +
      '<div class="progress-bar"><div class="progress-fill" style="width:' +
      Math.round((answeredBefore / session.total) * 100) + '%"></div></div>' +
      '<div class="question-card">' +
      '<span class="part-label">' + esc(t.part) + "</span>" +
      (t.docType ? '<span class="doc-type">' + esc(t.docType) + "</span>" : "");

    if (t.heading) html += "<h3>" + esc(t.heading) + "</h3>";

    // リスニング:再生ボタン
    if (t.listening) {
      html += '<div class="audio-controls">' +
        '<button class="play-btn" id="play">▶ 音声を再生</button>' +
        '<button class="stop-btn" id="stopAudio">■ 停止</button>' +
        '<span class="audio-note">何度でも再生できます。</span>' +
        "</div>";
    }

    // 写真(Part 1)
    if (t.image) {
      html += '<div class="p1-image"><img src="' + esc(t.image) + '" alt="写真描写問題の写真"></div>';
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
      var qNo = (t.startNo || (answeredBefore + 1)) + qi;
      html += '<div class="q-block" data-qi="' + qi + '">' +
        // Part 1/2 は本番でも設問文が印刷されないので番号も出さない
        (t.hideChoices ? "" :
          '<p class="q-text"><span class="q-number">' + qNo + ".</span>" +
          (q.prompt ? esc(q.prompt) : "") + "</p>") +
        '<div class="choices">';
      q.choices.forEach(function (c, ci) {
        var label = t.hideChoices ? "(音声)" : c;
        html += '<button class="choice-btn' + (myAnswers[qi] === ci ? " selected" : "") +
          '" data-qi="' + qi + '" data-ci="' + ci + '">' +
          '<span class="choice-letter">' + LETTERS[ci] + ".</span><span>" + esc(label) + "</span></button>";
      });
      html += "</div></div>";
    });

    html += '<div class="nav-row">' +
      (session.taskIndex > 0 ? '<button class="secondary-btn" id="prev">← 前へ</button>' : "") +
      '<button class="next-btn" id="next">' +
      (session.taskIndex === session.tasks.length - 1 ? "解答を終えて結果を見る" : "次へ →") +
      "</button></div>" +
      "</div>";

    app.innerHTML = html;
    window.scrollTo(0, 0);

    // 写真がまだアップロードされていない場合、壊れた画像アイコンの代わりに案内を出す
    var p1img = app.querySelector(".p1-image img");
    if (p1img) {
      p1img.addEventListener("error", function () {
        p1img.style.display = "none";
        p1img.insertAdjacentHTML("afterend",
          '<p class="audio-note">写真ファイル(' + esc(t.image) +
          ')が見つかりません。リポジトリの assets/part1/ に画像を追加してください。</p>');
      });
    }

    document.getElementById("quit").addEventListener("click", function () {
      if (confirm("中断してホームに戻りますか?(このセッションの結果は保存されません)")) { stopTimer(); showHome(); }
    });

    if (t.listening) {
      // 本番同様、ナレーターの導入文を付けて再生する
      var intro;
      var questionLines = [];
      // 本番と同じ通し番号(Part 1:1-6 / Part 2:7-31 / Part 3:32-70 / Part 4:71-100)
      var no = t.startNo || (answeredBefore + 1);
      if (t.part === "Part 1") {
        intro = "Look at the picture marked number " + no + " in your test book.";
      } else if (t.part === "Part 2") {
        intro = "Number " + no + ".";
      } else {
        // 本番形式: Questions 32 through 34 refer to the following
        //   conversation [with three speakers] [and list].  /  telephone message. など
        var three = t.audio.some(function (l) { return l.speaker === "W2" || l.speaker === "M2"; });
        var kindText = t.part === "Part 3"
          ? "conversation" + (three ? " with three speakers" : "")
          : (t.kind || "talk");
        intro = "Questions " + no +
          (t.questions.length > 1 ? " through " + (no + t.questions.length - 1) : "") +
          " refer to the following " + kindText +
          (t.graphicKind ? " and " + t.graphicKind : "") + ".";
        // 本番同様、音声の後にナレーターが設問文を読み上げる(各設問の後にポーズ)
        questionLines = t.questions.map(function (q, qi) {
          return { speaker: "N", text: "Number " + (no + qi) + ". " + q.prompt, gapAfter: 8000 };
        });
      }
      var audioLines = (intro ? [{ speaker: "N", text: intro }] : []).concat(t.audio).concat(questionLines);

      // 録音済み音声ファイルがあれば優先(無ければ端末の合成音声)
      var audioKey = SETS[activeSetIdx].id + ":" + t.id;
      var audioFiles = (window.TOEIC_AUDIO_MANIFEST && t.id) ? window.TOEIC_AUDIO_MANIFEST[audioKey] : null;

      var playBtn = document.getElementById("play");
      playBtn.addEventListener("click", function () {
        playBtn.disabled = true;
        playBtn.textContent = "再生中…";
        function done() {
          playBtn.disabled = false;
          playBtn.textContent = "▶ もう一度再生";
        }
        function synth() {
          // 問題番号を seed にして、問題ごとに違う声の組を割り当てる
          speech.speakLines(audioLines, done, answeredBefore);
        }
        // audioMode: null=未確認 / true=録音あり / false=録音なし
        if (audioFiles && audioFiles.length && audioMode !== false) {
          speech.playFiles(audioFiles, function () { audioMode = true; done(); }, function () {
            audioMode = false; // 以後は合成音声のみ試す
            synth();
          });
        } else {
          synth();
        }
      });
      document.getElementById("stopAudio").addEventListener("click", function () {
        speech.stop();
        playBtn.disabled = false;
        playBtn.textContent = "▶ 音声を再生";
      });
    }

    // 選択肢は「印を付けるだけ」。正誤も解説もここでは出さない(本番と同じ)。
    app.querySelectorAll(".choice-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qi = parseInt(btn.getAttribute("data-qi"), 10);
        var ci = parseInt(btn.getAttribute("data-ci"), 10);
        myAnswers[qi] = (myAnswers[qi] === ci) ? null : ci;   // もう一度押すと取り消し
        var block = app.querySelector('.q-block[data-qi="' + qi + '"]');
        block.querySelectorAll(".choice-btn").forEach(function (b) {
          b.classList.toggle("selected",
            parseInt(b.getAttribute("data-ci"), 10) === myAnswers[qi]);
        });
      });
    });

    var prevBtn = document.getElementById("prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        session.taskIndex -= 1;
        renderTask();
      });
    }
    document.getElementById("next").addEventListener("click", function () {
      if (session.taskIndex === session.tasks.length - 1) {
        var left = unansweredCount();
        if (left && !confirm("未解答が " + left + " 問あります。採点しますか?")) return;
        showResult();
      } else {
        session.taskIndex += 1;
        renderTask();
      }
    });

    startTimer();
  }

  function unansweredCount() {
    var n = 0;
    session.answers.forEach(function (a) {
      a.forEach(function (v) { if (v === null) n += 1; });
    });
    return n;
  }

  /* ---------------- 制限時間(リーディング75分) ---------------- */

  var timerId = null;

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function startTimer() {
    stopTimer();
    if (!session || !session.endAt) return;
    var el = document.getElementById("timer");
    if (!el) return;
    function tick() {
      var left = Math.max(0, Math.round((session.endAt - Date.now()) / 1000));
      var m = Math.floor(left / 60), sec = left % 60;
      el.textContent = "残り " + m + ":" + (sec < 10 ? "0" : "") + sec;
      el.classList.toggle("urgent", left <= 300);
      if (left <= 0) {
        stopTimer();
        alert("制限時間の75分が経過しました。ここまでの解答で採点します。");
        showResult();
      }
    }
    tick();
    timerId = setInterval(tick, 1000);
  }

  /* ---------------- 画面:結果 ---------------- */

  function showResult() {
    speech.stop();
    stopTimer();

    var correct = 0, total = 0, blank = 0;
    session.tasks.forEach(function (t, ti) {
      t.questions.forEach(function (q, qi) {
        total += 1;
        var sel = session.answers[ti][qi];
        if (sel === null) blank += 1;
        else if (sel === q.answer) correct += 1;
      });
    });
    var rate = total ? Math.round((correct / total) * 100) : 0;
    // 「選んで解く」の成績は自己ベストに含めない(1問だけ解いて100%等を防ぐ)
    if (!session.custom) saveResult(session.mode, rate);

    var msg;
    if (rate === 100) msg = "全問正解! この調子で他のパートにも挑戦しましょう。";
    else if (rate >= 80) msg = "よくできています。間違えた問題の解説を確認して仕上げましょう。";
    else if (rate >= 60) msg = "合格圏まであと少し。解説を読んで、もう一度挑戦しましょう。";
    else msg = "まずは解説をじっくり読み、同じ問題をもう一度解いてみましょう。";

    var html = '<div class="result-card">' +
      "<h2>" + esc(session.label) + " の結果</h2>" +
      '<div class="result-score">' + correct + " / " + total + "</div>" +
      '<div class="result-rate">正答率 ' + rate + "%" +
      (blank ? "(未解答 " + blank + "問)" : "") + "</div>" +
      '<div class="result-msg">' + esc(msg) + "</div>" +
      '<div class="result-actions">' +
      '<button class="next-btn" id="retry">もう一度挑戦</button>' +
      '<button class="secondary-btn" id="goHome">ホームへ戻る</button>' +
      "</div></div>" +
      '<div class="review-list">' +
      '<h2>解答と解説</h2>' +
      '<label class="only-wrong"><input type="checkbox" id="onlyWrong"> 間違えた問題だけ表示</label>' +
      '<div id="reviewBody"></div></div>';

    app.innerHTML = html;
    window.scrollTo(0, 0);
    renderReview(false);
    document.getElementById("onlyWrong").addEventListener("change", function () {
      renderReview(this.checked);
    });
    document.getElementById("retry").addEventListener("click", function () {
      startQuiz(session.mode, session.custom);
    });
    document.getElementById("goHome").addEventListener("click", showHome);
  }

  // 結果画面の解答・解説(全問 / 間違えた問題のみ)
  function renderReview(onlyWrong) {
    var out = "";
    session.tasks.forEach(function (t, ti) {
      var ans = session.answers[ti];
      var show = t.questions.some(function (q, qi) { return !onlyWrong || ans[qi] !== q.answer; });
      if (!show) return;

      var no = t.startNo || (session.offsets[ti] + 1);
      out += '<div class="review-item">' +
        '<div class="ri-head">' + esc(t.part) + " — No." + no +
        (t.questions.length > 1 ? "-" + (no + t.questions.length - 1) : "") + "</div>";
      if (t.heading) out += '<div class="ri-heading">' + esc(t.heading) + "</div>";
      if (t.image) out += '<div class="p1-image"><img src="' + esc(t.image) + '" alt=""></div>';
      if (t.passage) {
        out += '<details class="script-box"><summary>本文を見る</summary><div class="passage">' +
          esc(t.passage) + "</div></details>";
      }
      if (t.passages) {
        out += '<details class="script-box"><summary>本文を見る</summary>';
        t.passages.forEach(function (p) {
          out += '<div class="doc-type">' + esc(p.docType) + "</div>" +
            '<div class="passage">' + esc(p.text) + "</div>";
        });
        out += "</details>";
      }
      if (t.script) {
        out += '<details class="script-box"><summary>スクリプトを見る</summary><div class="script-body">' +
          esc(t.script) + "</div></details>";
      }
      if (t.translation) {
        out += '<details class="script-box"><summary>全訳を見る</summary><div class="script-body">' +
          esc(t.translation) + "</div></details>";
      }

      t.questions.forEach(function (q, qi) {
        var sel = ans[qi];
        var ok = sel === q.answer;
        if (onlyWrong && ok) return;
        out += '<div class="ri-q-block">' +
          '<div class="ri-q"><span class="q-number">' + (no + qi) + ".</span>" +
          (q.prompt ? esc(q.prompt) : "") +
          '<span class="ri-mark ' + (ok ? "ok" : "ng") + '">' +
          (ok ? "正解" : (sel === null ? "未解答" : "不正解")) + "</span></div>";
        q.choices.forEach(function (c, ci) {
          var cls = "ri-choice";
          if (ci === q.answer) cls += " correct";
          if (ci === sel && !ok) cls += " wrong";
          out += '<div class="' + cls + '">(' + LETTERS[ci] + ") " + esc(c) +
            (ci === sel ? '<span class="ri-you">あなたの解答</span>' : "") +
            (ci === q.answer ? '<span class="ri-ans">正解</span>' : "") + "</div>";
        });
        out += '<div class="ri-exp">' + esc(q.explanation) + "</div>";
        if (q.translation) {
          out += '<details class="script-box"><summary>訳を見る</summary><div class="script-body">' +
            esc(q.translation) + "</div></details>";
        }
        out += "</div>";
      });
      out += "</div>";
    });
    document.getElementById("reviewBody").innerHTML = out ||
      "<p>表示する問題はありません。</p>";
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
