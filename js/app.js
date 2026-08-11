/* TOEIC 総合問題集 — アプリ本体 */
(function () {
  "use strict";

  var app = document.getElementById("app");

  var LETTERS = ["A", "B", "C", "D"];
  var STORAGE_KEY = "toeic_test_stats_v1";
  var SET_PREF_KEY = "toeic_active_set_v1";

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
    { id: "s6", name: "セット6", data: window.TOEIC_DATA_6 },
    { id: "s7", name: "セット7(上級)", data: window.TOEIC_DATA_7 },
    { id: "s8", name: "セット8(上級)", data: window.TOEIC_DATA_8 },
    { id: "s9", name: "セット9(上級)", data: window.TOEIC_DATA_9 },
    { id: "s10", name: "セット10(上級)", data: window.TOEIC_DATA_10 }
  ].forEach(function (s) {
    if (s.data && s.data.part7) SETS.push({ id: s.id, name: s.name, data: s.data });
  });
  /* ---------------- 合言葉によるセットの解放 ----------------
     セット1は無料。セット2以降は購入者に渡した合言葉で解放する。
     合言葉そのものはここに書かず、照合用の値だけを置く(ソースを見ても分からない)。
     合言葉を変えるときは  node tools/make_code.js <新しい合言葉>  で値を作り直す。 */
  var UNLOCK_KEY = "toeic_unlocked_v1";
  var FREE_SETS = { s1: true };
  /* 合言葉は、商品名も屋号も連想させない無関係な英単語2つにしてある。
     購入者に製品の出自を意識させないため。命名規則を持たせない方針なので、
     追加するときも「セット名を含む文字列」にはしないこと。 */
  var CODE_HASHES = {
    "2dpiz6": ["s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"],   // 全部入り(2〜10)
    "3wxhhf": ["s2", "s3", "s4", "s5", "s6"],   // 標準まとめ(2〜6)
    "acwlg3": ["s7", "s8", "s9", "s10"],   // 上級まとめ(7〜10)
    "12g3c43": ["s2"],
    "jfunxb": ["s3"],
    "1h3vnpn": ["s4"],
    "uamg9z": ["s5"],
    "awg4c5": ["s6"],
    "c5g2mf": ["s7"],
    "13c1bmw": ["s8"],
    "1086mm2": ["s9"],
    "p8ymuj": ["s10"]
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
  /* アプリ版(App Store)は Apple の課金で買われたものなので、合言葉は使わない。
     www/app-build.js が unlockAll:true を立てる。Web版にはこのファイルが無いので
     APP_BUILD は undefined になり、従来どおり合言葉で解放する。
     アプリ内課金にする場合は、課金の判定結果を APP_BUILD.unlockAll に入れる。 */
  var APP_BUILD = window.TOEIC_APP_BUILD || null;
  /* セットの購入ページ(note)。ここに URL を入れると、ホームに購入への導線が出る。
     空のままなら導線は出ない(リンク切れを出さないため)。
     【重要】アプリ版では絶対に表示しない。App Store のガイドライン 3.1.1 で、
     アプリ内の機能解放を外部の購入手段へ誘導することは禁止されているため。 */
  var SHOP_URL = "";
  var IAP = window.TOEIC_IAP || null;
  function iapMode() { return !!(APP_BUILD && IAP && IAP.enabled()); }
  /* ストアから取れた価格。取れるまでは金額を出さない。
     金額を自前で書くと、為替や地域で実際の請求額とずれるため。 */
  var iapPrice = null;
  function buyLabel() {
    return iapPrice ? ("すべて解放する " + iapPrice) : "すべて解放する";
  }
  function isUnlocked(id) {
    if (APP_BUILD && APP_BUILD.unlockAll) return true;            // 買い切り版
    if (iapMode() && IAP.owned()) return true;                     // 課金版・購入済み
    if (FREE_SETS[id]) return true;
    // 合言葉はWeb版だけの仕組み。アプリ版で使うとガイドライン 3.1.1 に触れる
    return iapMode() ? false : !!unlocked[id];
  }
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
    part1: { label: "Part 1 写真描写", desc: "写真を見て正しい描写文を選ぶ(リスニング)", listening: true },
    part2: { label: "Part 2 応答問題", desc: "質問を聞いて応答を選ぶ(リスニング)", listening: true },
    part3: { label: "Part 3 会話問題", desc: "会話を聞いて設問に答える(リスニング)", listening: true },
    part4: { label: "Part 4 説明文問題", desc: "トークを聞いて設問に答える(リスニング)", listening: true },
    part5: { label: "Part 5 短文穴埋め", desc: "文法・語彙(リーディング)", listening: false },
    part6: { label: "Part 6 長文穴埋め", desc: "文書の空所を埋める(リーディング)", listening: false },
    part7: { label: "Part 7 読解問題", desc: "文書を読んで設問に答える(リーディング)", listening: false },
    listening: { label: "リスニング模試(Part 1-4)", desc: "本番と同じ100問・通しで解答(音声は自動再生)", listening: true, autoPlay: true },
    reading: { label: "リーディング模試(Part 5-7)", desc: "本番と同じ100問・制限時間75分", listening: false, limit: 75 * 60 },
    mock: { label: "4分の1模試(50問)", desc: "本番に近い比率で全パートを50問。20〜25分", listening: true, autoPlay: true }
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

  /* ---------------- 音声(録音済みmp3の再生のみ) ----------------
     リスニングは必ず同梱の録音音声で再生する。
     端末の音声合成は「声が人によって変わる」「発音が不安定」という理由で使わない。
     音声が読み込めない場合は、代替再生をせずエラーを表示する。 */

  var speech = {
    token: 0,        // 停止・画面遷移で再生を打ち切るためのセッション番号
    _audios: null,

    // clips: [{f: URL, g: 再生後のポーズms}, ...]
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
      if (this._audios) {
        this._audios.forEach(function (a) { try { a.pause(); a.src = ""; } catch (e) { /* ignore */ } });
        this._audios = null;
      }
    }
  };

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
      case "listening": return tasksPart1(DATA.part1)
        .concat(tasksPart2(DATA.part2))
        .concat(tasksSet(DATA.part3, "Part 3", PART_START.part3))
        .concat(tasksSet(DATA.part4, "Part 4", PART_START.part4));
      case "reading": return tasksPart5(DATA.part5)
        .concat(tasksPart6(DATA.part6))
        .concat(tasksPart7(DATA.part7));
      case "part5": return tasksPart5(DATA.part5);
      case "part6": return tasksPart6(DATA.part6);
      case "part7": return tasksPart7(DATA.part7);
      case "mock": {
        // 本番200問の比率に合わせて50問(=4分の1)を抜き出す。
        //   Part 1:1 / Part 2:6 / Part 3:9 / Part 4:9 / Part 5:7 / Part 6:4 / Part 7:14
        //   リスニング25問・リーディング25問で、本番の 50:50 と一致する。
        // 通し番号(startNo)を正しく保つため、まず全問分のタスクを作ってから抜き出す。
        var byNo = function (a, b) { return (a.startNo || 0) - (b.startNo || 0); };
        var pick = function (tasks, n) { return shuffle(tasks).slice(0, n).sort(byNo); };

        /* 設問数の合計がちょうど target になる文書の組を選ぶ(Part 7 用)。
           Part 7 のシングルは 2/3/4問が混在するので、単純に「3文書選ぶ」では
           合計がぶれて50問固定にならない。組み合わせを探して合計を合わせる。
           見つからないと合計がずれるが、そうならないことは
           tools/check_mock.js が data 側で保証している(sync.sh で毎回実行)。 */
        function pickByCount(tasks, target) {
          var pool = shuffle(tasks), found = null;
          (function walk(i, chosen, sum) {
            if (found || sum > target) return;
            if (sum === target) { found = chosen.slice(); return; }
            if (i >= pool.length) return;
            walk(i + 1, chosen.concat([pool[i]]), sum + pool[i].questions.length);
            walk(i + 1, chosen, sum);
          })(0, [], 0);
          return (found || pool.slice(0, 3)).sort(byNo);
        }

        var p7 = tasksPart7(DATA.part7);
        var doubles = p7.filter(function (t) { return (t.passages || []).length === 2; });
        var singles = p7.filter(function (t) { return (t.passages || []).length === 1; });
        // ダブルパッセージを1つ(5問)＋シングルで9問 = 14問
        var p7pick = pick(doubles, 1).concat(pickByCount(singles, 14 - 5)).sort(byNo);

        return [].concat(
          pick(tasksPart1(DATA.part1), 1),
          pick(tasksPart2(DATA.part2), 6),
          pick(tasksSet(DATA.part3, "Part 3", PART_START.part3), 3),   // 会話3つ=9問
          pick(tasksSet(DATA.part4, "Part 4", PART_START.part4), 3),   // トーク3つ=9問
          pick(tasksPart5(DATA.part5), 7),
          pick(tasksPart6(DATA.part6), 1),                              // 文書1つ=4問
          p7pick
        );
      }
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
    document.body.classList.remove("in-quiz");   // 見出しを通常の高さに戻す
    document.body.classList.remove("has-audio"); // 音量の注意書きを消す
    document.body.classList.remove("split-view");
    var stats = loadStats();

    function card(mode, extraClass) {
      var m = MODES[mode];
      var n = countQuestions(buildTasks(mode)) + "問";
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
      var anyLocked = SETS.some(function (s) { return !isUnlocked(s.id); });
      var setTabs = SETS.map(function (s, i) {
        var free = !!FREE_SETS[s.id];
        var lock = isUnlocked(s.id) ? "" : " locked";
        // 無料であることは、鍵つきのセットが並んでいるときだけ言えば足りる
        var badge = (free && anyLocked) ? '<span class="tab-badge">無料</span>' : "";
        return '<button class="set-tab' + (i === activeSetIdx ? " active" : "") + lock +
          '" data-set="' + i + '">' + esc(s.name) + badge + (lock ? " 🔒" : "") + "</button>";
      }).join("");
      /* 何が無料で、鍵つきは何なのかを、最初に見える位置で説明する。
         「有料」とはっきり書かないと、鍵の意味が伝わらない。 */
      var setNote = "";
      if (anyLocked && iapMode()) {
        // アプリ版(課金)。買える場所はアプリの中だけなので、外部リンクは出さない。
        setNote = '<div class="set-note">' +
          '<p><b>セット1は無料</b>です。全200問すべて、音声も解説も制限なく使えます。<br>' +
          '🔒 の付いた<b>セット2〜10は、1回のお支払いですべて解放</b>されます。</p>' +
          '<button class="shop-link" id="iapBuy">' + esc(buyLabel()) + "</button>" +
          '<button class="restore-link" id="iapRestore">購入を復元する</button>' +
          "</div>";
      } else if (anyLocked) {
        setNote = '<div class="set-note">' +
          '<p><b>セット1は無料</b>です。全200問すべて、音声も解説も制限なく使えます。<br>' +
          '🔒 の付いた<b>セット2以降は有料</b>で、合言葉を入れると解放されます。</p>' +
          (SHOP_URL
            ? '<a class="shop-link" href="' + esc(SHOP_URL) + '" target="_blank" rel="noopener">セットを購入する →</a>'
            : "") +
          "</div>";
      }
      setSwitchHtml = '<div class="set-switch"><span class="set-switch-label">問題セット</span>' +
        '<div class="set-tabs">' + setTabs + "</div></div>" + setNote;
    }

    var saved = loadProgress();
    var resumeHtml = "";
    if (saved) {
      var doneN = 0, totalN = 0;
      saved.answers.forEach(function (a) {
        a.forEach(function (v) { totalN += 1; if (v !== null) doneN += 1; });
      });
      var setName = "";
      SETS.forEach(function (x) { if (x.id === saved.setId) setName = x.name; });
      resumeHtml = '<div class="resume-box">' +
        '<div class="resume-title">解答の途中です</div>' +
        '<div class="resume-desc">' + esc(setName) + " / " + esc(MODES[saved.mode].label) +
        " — " + doneN + " / " + totalN + "問まで解答済み</div>" +
        '<div class="resume-actions">' +
        '<button class="next-btn" id="resumeGo">続きから再開する</button>' +
        '<button class="secondary-btn" id="resumeDrop">やめる</button>' +
        "</div></div>";
    }

    app.innerHTML =
      '<section class="menu-section">' +
      setSwitchHtml +
      resumeHtml +
      "<h2>模試に挑戦</h2>" +
      '<div class="menu-grid">' + card("listening", "mock") + card("reading", "mock") +
      card("mock", "mock") + "</div>" +
      "<h2>リスニング(録音音声)</h2>" +
      '<div class="menu-grid">' + card("part1") + card("part2") + card("part3") + card("part4") + "</div>" +
      "<h2>リーディング</h2>" +
      '<div class="menu-grid">' + card("part5") + card("part6") + card("part7") + "</div>" +
      "<h2>問題を選んで解く</h2>" +
      '<div class="menu-grid"><button class="menu-card" id="pick-quiz">' +
      '<span class="card-title">🎯 問題を選んで解く</span>' +
      '<span class="card-desc">パートごとの問題一覧から、解きたい問題だけを選んで挑戦できます</span>' +
      "</button></div>" +
      // 合言葉はWeb版だけ。アプリ版(課金)では枠ごと出さない(ガイドライン 3.1.1)
      ((!iapMode() && SETS.some(function (s) { return !isUnlocked(s.id); }))
        ? '<div class="unlock-box"><button class="secondary-btn" id="enterCode">🔑 合言葉を入力してセットを解放</button>' +
          '<span class="unlock-note">合言葉は、セットをご購入いただいた方にお渡ししています。</span>' +
          (SHOP_URL
            ? '<a class="shop-link" href="' + esc(SHOP_URL) + '" target="_blank" rel="noopener">セットを購入する →</a>'
            : "") +
          "</div>"
        : "") +
      '<p class="history-note">成績はこの端末のブラウザにのみ保存されます。</p>' +
      "</section>";

    app.querySelectorAll(".menu-card[data-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () { startQuiz(btn.getAttribute("data-mode")); });
    });
    document.getElementById("pick-quiz").addEventListener("click", showPicker);
    var goBtn = document.getElementById("resumeGo");
    if (goBtn) goBtn.addEventListener("click", function () { resumeProgress(saved); });
    var dropBtn = document.getElementById("resumeDrop");
    if (dropBtn) {
      dropBtn.addEventListener("click", function () {
        if (confirm("途中の解答を破棄しますか?")) { clearProgress(); showHome(); }
      });
    }
    var codeBtn = document.getElementById("enterCode");
    if (codeBtn) codeBtn.addEventListener("click", function () { askCode(null); });

    var buyBtn = document.getElementById("iapBuy");
    if (buyBtn) {
      buyBtn.addEventListener("click", function () {
        buyBtn.disabled = true;
        buyBtn.textContent = "処理中…";
        IAP.buy(function (status) {
          if (status === "ok") { alert("ありがとうございます。セット2〜10を解放しました。"); showHome(); return; }
          buyBtn.disabled = false;
          buyBtn.textContent = buyLabel();
          if (status === "cancel") return;   // 自分で閉じた場合は何も出さない
          alert(status === "unavailable"
            ? "この端末では購入手続きを開始できませんでした。App Store にサインインしているかご確認ください。"
            : "購入を完了できませんでした。時間をおいて、もう一度お試しください。");
        });
      });
    }

    var restoreBtn = document.getElementById("iapRestore");
    if (restoreBtn) {
      restoreBtn.addEventListener("click", function () {
        restoreBtn.disabled = true;
        restoreBtn.textContent = "確認中…";
        IAP.restore(function (status) {
          if (status === "ok") { alert("購入を復元しました。"); showHome(); return; }
          restoreBtn.disabled = false;
          restoreBtn.textContent = "購入を復元する";
          alert(status === "none"
            ? "この Apple ID での購入履歴が見つかりませんでした。購入時と同じ Apple ID でサインインしているかご確認ください。"
            : "復元を確認できませんでした。通信状況をご確認のうえ、もう一度お試しください。");
        });
      });
    }

    // 価格がまだ取れていなければ問い合わせ、取れたらボタンの文言だけ差し替える
    if (buyBtn && !iapPrice) {
      IAP.price(function (pstr) {
        if (!pstr) return;
        iapPrice = pstr;
        var b = document.getElementById("iapBuy");
        if (b && !b.disabled) b.textContent = buyLabel();
      });
    }
    // セットが10個あり狭い画面では横スクロールになるので、いま選んでいるものを見える位置に寄せる
    var strip = app.querySelector(".set-tabs");
    var activeTab = app.querySelector(".set-tab.active");
    if (strip && activeTab) {
      strip.scrollLeft = activeTab.offsetLeft - (strip.clientWidth - activeTab.offsetWidth) / 2;
    }
    app.querySelectorAll(".set-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = parseInt(btn.getAttribute("data-set"), 10);
        if (!isUnlocked(SETS[i].id)) {
          /* アプリ版(課金)では合言葉を絶対に出さない(ガイドライン 3.1.1)。
             鍵つきセットを押したら、そのまま購入の導線につなぐ。 */
          if (iapMode()) {
            var b = document.getElementById("iapBuy");
            if (b && !b.disabled &&
                window.confirm("このセットは有料です。「すべて解放する」をご購入いただくと、セット2〜10がすべて解放されます。購入画面を開きますか?")) {
              b.click();
            }
            return;
          }
          askCode(SETS[i].name);
          return;
        }
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

  /* ---------------- 解答の途中保存 ----------------
     スマホは裏に回すとタブごと破棄されることがある。100問の途中で消えると
     やり直しになるため、解答するたびに端末へ保存し、次に開いたとき再開できるようにする。 */

  var SAVE_KEY = "toeic_progress_v1";

  // タスクを一意に識別する鍵(最初の設問のid)
  function taskKey(t) { return t.questions && t.questions[0] ? t.questions[0].id : ""; }

  function saveProgress() {
    if (!session) return;
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        setId: SETS[activeSetIdx].id,
        mode: session.mode,
        custom: session.custom,
        taskKeys: session.tasks.map(taskKey),
        answers: session.answers,
        taskIndex: session.taskIndex,
        endAt: session.endAt,
        savedAt: Date.now()
      }));
    } catch (e) { /* 保存できない環境では黙って続行 */ }
  }

  function clearProgress() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
  }

  function loadProgress() {
    try {
      var d = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (!d || !d.mode || !MODES[d.mode] || !d.taskKeys || !d.taskKeys.length) return null;
      // 解放されていないセットの続きは出さない
      if (!isUnlocked(d.setId)) return null;
      return d;
    } catch (e) { return null; }
  }

  // そのセットの全タスクを鍵で引けるようにする(再開時の復元用)
  function allTasksByKey() {
    var DATA = activeData();
    var all = [].concat(
      DATA.part1 ? tasksPart1(DATA.part1) : [],
      DATA.part2 ? tasksPart2(DATA.part2) : [],
      DATA.part3 ? tasksSet(DATA.part3, "Part 3", PART_START.part3) : [],
      DATA.part4 ? tasksSet(DATA.part4, "Part 4", PART_START.part4) : [],
      DATA.part5 ? tasksPart5(DATA.part5) : [],
      DATA.part6 ? tasksPart6(DATA.part6) : [],
      DATA.part7 ? tasksPart7(DATA.part7) : []
    );
    var map = {};
    all.forEach(function (t) { map[taskKey(t)] = t; });
    return map;
  }

  function resumeProgress(d) {
    // 保存時のセットに切り替える
    for (var i = 0; i < SETS.length; i++) {
      if (SETS[i].id === d.setId) { activeSetIdx = i; break; }
    }
    var map = allTasksByKey();
    var tasks = d.taskKeys.map(function (k) { return map[k]; });
    if (tasks.some(function (t) { return !t; })) {   // 問題が入れ替わっていた場合
      clearProgress();
      alert("問題が更新されていたため、続きから再開できませんでした。最初からやり直してください。");
      showHome();
      return;
    }
    session = {
      mode: d.mode,
      custom: d.custom,
      label: MODES[d.mode].label + (d.custom ? "(選択)" : ""),
      tasks: tasks,
      taskIndex: Math.min(d.taskIndex || 0, tasks.length - 1),
      answers: d.answers
    };
    session.total = countQuestions(tasks);
    var acc = 0;
    session.offsets = tasks.map(function (t) { var o = acc; acc += t.questions.length; return o; });
    session.endAt = d.endAt || null;
    renderTask();
  }

  /* ---------------- 画面:出題 ---------------- */

  var session = null;

  function startQuiz(mode, indices) {
    document.body.classList.add("in-quiz");      // 見出しを細くして本文の表示領域を増やす
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
    saveProgress();
    renderTask();
  }

  function renderTask() {
    speech.stop();
    var t = session.tasks[session.taskIndex];
    var answeredBefore = session.offsets[session.taskIndex];
    var myAnswers = session.answers[session.taskIndex];

    // 音量の注意書きは音声のある画面でだけ出す(リーディングで出ていると変)
    document.body.classList.toggle("has-audio", !!t.listening);

    // 本文のある問題(Part 6/7)は、広い画面(iPad横持ち・Mac)で
    // 左=本文・右=設問の二分割にする。実際の分割は CSS が画面幅を見て行う。
    var split = !!(t.passage || t.passages);
    document.body.classList.toggle("split-view", split);

    var html = '<div class="quiz-header">' +
      "<span>" + esc(session.label) + " — 問題 " + (answeredBefore + 1) +
      (t.questions.length > 1 ? "〜" + (answeredBefore + t.questions.length) : "") +
      " / " + session.total + "</span>" +
      (session.endAt ? '<span class="timer" id="timer"></span>' : "") +
      '<button class="quit-btn" id="quit">中断してホームへ</button>' +
      "</div>" +
      '<div class="progress-bar"><div class="progress-fill" style="width:' +
      Math.round((answeredBefore / session.total) * 100) + '%"></div></div>' +
      '<div class="question-card' + (split ? " split" : "") + '">' +
      (split ? '<div class="qc-left">' : "") +
      '<span class="part-label">' + esc(t.part) + "</span>" +
      (t.docType ? '<span class="doc-type">' + esc(t.docType) + "</span>" : "");

    if (t.heading) html += '<p class="ref-line">' + esc(t.heading) + "</p>";

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

    // 二分割のときは、ここで左(本文)を閉じて右(設問)を開く
    if (split) html += '</div><div class="qc-right">';

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
      (split ? "</div>" : "") +
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
      if (confirm("中断してホームに戻りますか?(解答の途中経過は保存され、次に開いたとき続きから再開できます)")) {
        saveProgress(); stopTimer(); showHome();
      }
    });

    if (t.listening) {
      // 録音済み音声ファイルだけを再生する(端末の合成音声は使わない)
      var audioKey = SETS[activeSetIdx].id + ":" + t.id;
      var audioFiles = (window.TOEIC_AUDIO_MANIFEST && t.id) ? window.TOEIC_AUDIO_MANIFEST[audioKey] : null;

      var playBtn = document.getElementById("play");
      var noteEl = app.querySelector(".audio-note");
      playBtn.addEventListener("click", function () {
        if (!audioFiles || !audioFiles.length) {
          if (noteEl) noteEl.textContent = "この問題の音声が見つかりません。時間をおいて開き直してください。";
          return;
        }
        playBtn.disabled = true;
        playBtn.textContent = "再生中…";
        if (noteEl) noteEl.textContent = "何度でも再生できます。";
        speech.playFiles(audioFiles, function () {
          playBtn.disabled = false;
          playBtn.textContent = "▶ もう一度再生";
        }, function () {
          playBtn.disabled = false;
          playBtn.textContent = "▶ もう一度再生";
          if (noteEl) {
            noteEl.textContent = "音声を読み込めませんでした。通信状況を確認して、もう一度お試しください。";
          }
        });
      });
      document.getElementById("stopAudio").addEventListener("click", function () {
        speech.stop();
        playBtn.disabled = false;
        playBtn.textContent = "▶ 音声を再生";
      });

      // リスニング模試では、画面が出たら自動で再生を始める(本番と同じ流れ)。
      // 「次へ」を押した操作が再生の許可になるので、スマホでも再生できる。
      if (MODES[session.mode] && MODES[session.mode].autoPlay && audioFiles && audioFiles.length) {
        setTimeout(function () {
          if (!playBtn.disabled) playBtn.click();
        }, 500);
      }
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
        saveProgress();
      });
    });

    var prevBtn = document.getElementById("prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        session.taskIndex -= 1;
        saveProgress();
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
        saveProgress();
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

  /* 予想スコア(点数換算)は載せない。
     公式の換算式は非公開で、本番は回ごとに難易度調整も入る。さらにこの問題集の
     難易度が本番と同じである保証もないため、根拠を持って点数を言えない。
     事実だけ(正答数・正答率・セクション別内訳)を表示する。 */

  // セクションごとの正答数を数える(Part 1-4=リスニング / Part 5-7=リーディング)
  function sectionScores() {
    var L = { correct: 0, total: 0 }, R = { correct: 0, total: 0 };
    session.tasks.forEach(function (t, ti) {
      var box = /Part [1-4]/.test(t.part) ? L : R;
      t.questions.forEach(function (q, qi) {
        box.total += 1;
        if (session.answers[ti][qi] === q.answer) box.correct += 1;
      });
    });
    return { L: L, R: R };
  }

  function showResult() {
    speech.stop();
    stopTimer();
    clearProgress();
    document.body.classList.remove("split-view");
    // 結果画面はリスニング問題の聞き直しができるので、
    // リスニングを含む出題だったときは音量の注意書きを残す
    document.body.classList.toggle("has-audio",
      session.tasks.some(function (t) { return t.listening; }));

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

    // セクション別の内訳(リスニングとリーディングが混ざる出題のときだけ意味がある)
    var sc = sectionScores();
    var scoreHtml = "";
    if (sc.L.total && sc.R.total) {
      var lRate = Math.round(sc.L.correct / sc.L.total * 100);
      var rRate = Math.round(sc.R.correct / sc.R.total * 100);
      scoreHtml = '<div class="score-box"><div class="score-title">セクション別の内訳</div>' +
        '<div class="sc-row"><span>リスニング</span><b>' + lRate + "%</b><small>" +
        sc.L.correct + "/" + sc.L.total + "問正解</small></div>" +
        '<div class="sc-row"><span>リーディング</span><b>' + rRate + "%</b><small>" +
        sc.R.correct + "/" + sc.R.total + "問正解</small></div></div>";
    }

    var html = '<div class="result-card">' +
      "<h2>" + esc(session.label) + " の結果</h2>" +
      '<div class="result-score">' + correct + " / " + total + "</div>" +
      '<div class="result-rate">正答率 ' + rate + "%" +
      (blank ? "(未解答 " + blank + "問)" : "") + "</div>" +
      scoreHtml +
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
    document.getElementById("goHome").addEventListener("click", function () {
      speech.stop();   // 聞き直しの再生中に戻っても音が残らないように
      showHome();
    });
  }

  // 結果画面の解答・解説(全問 / 間違えた問題のみ)
  function renderReview(onlyWrong) {
    speech.stop();   // 表示の切り替えで古いボタンが消えても音が残らないように
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
      // リスニング問題は、その場で音声を聞き直せるようにする
      // (スクリプトを見ながらでも、見ずにでも復習できるよう、開閉の外に置く)
      if (t.listening) {
        out += '<div class="audio-controls ri-audio">' +
          '<button class="play-btn ri-play" data-ti="' + ti + '">▶ 音声を聞く</button>' +
          '<button class="stop-btn ri-stop">■ 停止</button></div>';
      }
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
    var body = document.getElementById("reviewBody");
    body.innerHTML = out || "<p>表示する問題はありません。</p>";

    // 音声の聞き直し。再生の仕組みは出題画面と同じ(同梱の録音mp3)。
    function resetPlayButtons() {
      var btns = body.querySelectorAll(".ri-play");
      for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
        if (btns[i].textContent !== "▶ もう一度聞く") btns[i].textContent = "▶ 音声を聞く";
      }
    }
    body.querySelectorAll(".ri-play").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var t = session.tasks[parseInt(btn.getAttribute("data-ti"), 10)];
        var key = SETS[activeSetIdx].id + ":" + t.id;
        var files = (window.TOEIC_AUDIO_MANIFEST && t.id) ? window.TOEIC_AUDIO_MANIFEST[key] : null;
        if (!files || !files.length) {
          btn.disabled = true;
          btn.textContent = "音声が見つかりません";
          return;
        }
        resetPlayButtons();   // 別の問題を再生中だったら、そちらのボタン表示を戻す
        btn.disabled = true;
        btn.textContent = "再生中…";
        speech.playFiles(files, function () {
          btn.disabled = false;
          btn.textContent = "▶ もう一度聞く";
        }, function () {
          btn.disabled = false;
          btn.textContent = "▶ 音声を聞く(読み込めませんでした)";
        });
      });
    });
    body.querySelectorAll(".ri-stop").forEach(function (btn) {
      btn.addEventListener("click", function () {
        speech.stop();
        resetPlayButtons();
      });
    });
  }

  /* ---------------- 起動 ---------------- */

  document.getElementById("home-link").addEventListener("click", function (e) {
    e.preventDefault();
    showHome();
  });

  // 動作検証用(コンソールから音声の配役を確認できる)
  window.TOEIC_DEBUG = { speech: speech, buildTasks: buildTasks };

  showHome();

  /* 課金版は、まず端末の記録で表示してから、後からストアに問い合わせる。
     こうすると機内モードでも購入済みの人がすぐ使え、
     機種変更などで記録が無い人は問い合わせの結果で解放される。 */
  if (iapMode()) {
    var wasOwned = IAP.owned();
    IAP.refresh(function (owned) {
      if (owned !== wasOwned) showHome();   // 状態が変わったときだけ描き直す
    });
  }
})();
