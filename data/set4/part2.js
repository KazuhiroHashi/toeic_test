// セット4 Part 2: 応答問題(前半15問=標準、16問目以降=間接応答・変化球)
window.TOEIC_DATA_4 = window.TOEIC_DATA_4 || {};
window.TOEIC_DATA_4.part2 = [
  {
    id: "s4p2-01",
    question: { speaker: "W", text: "Where do I submit my vacation request?" },
    choices: [
      "Through the HR portal online.",
      "Yes, I could use a break.",
      "She submitted hers already."
    ],
    answer: 0,
    translation: "休暇申請はどこで提出すればいいですか?\n(A) 人事のオンラインポータルからです。\n(B) はい、休みが欲しいです。\n(C) 彼女はもう提出しました。",
    explanation: "Where(どこ)に対して提出先を答えた(A)が正解。(B)はWH疑問文にYesで答えており不可、(C)はsubmit/submittedの繰り返しによるひっかけ。"
  },
  {
    id: "s4p2-02",
    question: { speaker: "M", text: "When is the caterer delivering the food for the luncheon?" },
    choices: [
      "In the fourth-floor kitchen.",
      "At eleven thirty sharp.",
      "It was quite delicious."
    ],
    answer: 1,
    translation: "昼食会用の料理はいつ配達されますか?\n(A) 4階のキッチンにです。\n(B) 11時半ちょうどです。\n(C) とても美味しかったです。",
    explanation: "When(いつ)に対して時刻を答えた(B)が正解。(A)は場所、(C)はfood(料理)からの連想+過去形で時制も合わない。"
  },
  {
    id: "s4p2-03",
    question: { speaker: "W", text: "Who's guiding the factory tour on Thursday?" },
    choices: [
      "It takes about an hour.",
      "Near the loading bay.",
      "Mr. Alvarez from operations."
    ],
    answer: 2,
    translation: "木曜日の工場見学は誰が案内するのですか?\n(A) 1時間ほどかかります。\n(B) 荷積み場の近くです。\n(C) 業務部のアルバレスさんです。",
    explanation: "Who(誰)に対して人名を答えた(C)が正解。(A)は所要時間、(B)は場所で疑問詞に対応していない。"
  },
  {
    id: "s4p2-04",
    question: { speaker: "M", text: "Have the new name badges arrived yet?" },
    choices: [
      "No, they're still at the printer's.",
      "Her name is on the list.",
      "Yes, I arrived early today."
    ],
    answer: 0,
    translation: "新しい名札はもう届きましたか?\n(A) いいえ、まだ印刷業者のところにあります。\n(B) 彼女の名前はリストにあります。\n(C) はい、今日は早く着きました。",
    explanation: "Yes/No疑問文に『No+現状(まだ業者にある)』で答えた(A)が正解。(B)はnameの繰り返し、(C)はbadges arrived/arrivedの音の繰り返しによるひっかけ。"
  },
  {
    id: "s4p2-05",
    question: { speaker: "W", text: "Would you like your receipt printed or emailed?" },
    choices: [
      "Yes, I bought two of them.",
      "Emailed would be great, thanks.",
      "The printer is out of ink."
    ],
    answer: 1,
    translation: "レシートは印刷とメール、どちらがよろしいですか?\n(A) はい、2つ買いました。\n(B) メールでお願いします、ありがとう。\n(C) プリンターのインクが切れています。",
    explanation: "A or B の選択疑問文にはYes/Noでは答えられない。一方を選んだ(B)が正解。(C)はprinted/printerの音のひっかけ。"
  },
  {
    id: "s4p2-06",
    question: { speaker: "M", text: "Why did the gallery close the east wing?" },
    choices: [
      "On the second floor.",
      "For about three weeks, I heard.",
      "Because it's being renovated."
    ],
    answer: 2,
    translation: "なぜギャラリーは東棟を閉鎖したのですか?\n(A) 2階です。\n(B) 3週間ほどらしいですよ。\n(C) 改装中だからです。",
    explanation: "Why(なぜ)に理由(Because 〜)で答えた(C)が正解。(A)は場所、(B)は期間で理由になっていない。"
  },
  {
    id: "s4p2-07",
    question: { speaker: "W", text: "How many volunteers do we need for the charity run?" },
    choices: [
      "It runs every spring.",
      "In the central park.",
      "About twenty should be enough."
    ],
    answer: 2,
    translation: "チャリティーランには何人のボランティアが必要ですか?\n(A) 毎年春に開催されます。\n(B) 中央公園でです。\n(C) 20人ほどいれば足りるでしょう。",
    explanation: "How many(何人)に人数を答えた(C)が正解。(A)はrun(走る/開催される)の多義語+頻度、(B)は場所のひっかけ。"
  },
  {
    id: "s4p2-08",
    question: { speaker: "M", text: "The air conditioning on the fifth floor stopped working." },
    choices: [
      "I'll put in a maintenance request.",
      "Yes, it works very well.",
      "On the fifth floor, that's right."
    ],
    answer: 0,
    translation: "5階の空調が止まってしまいました。\n(A) 保守の依頼を出しておきます。\n(B) はい、とてもよく効いています。\n(C) 5階ですね、その通りです。",
    explanation: "平叙文(問題の報告)への応答。対応策を述べた(A)が自然。(B)はstopped working/works wellの矛盾したひっかけ、(C)はfifth floorの繰り返し。"
  },
  {
    id: "s4p2-09",
    question: { speaker: "W", text: "Could you proofread this press release before I send it out?" },
    choices: [
      "The press conference went well.",
      "No, I mailed it yesterday.",
      "Of course, give me ten minutes."
    ],
    answer: 2,
    translation: "送信する前に、このプレスリリースを校正してもらえますか?\n(A) 記者会見はうまくいきました。\n(B) いいえ、昨日郵送しました。\n(C) もちろん、10分ください。",
    explanation: "依頼(Could you 〜?)に快諾+所要時間を示した(C)が正解。(A)はpressの繰り返し、(B)はsend/mailedの連想によるひっかけ。"
  },
  {
    id: "s4p2-10",
    question: { speaker: "M", text: "You're attending the trade fair next week, aren't you?" },
    choices: [
      "It seems like a fair price.",
      "Yes, I fly out on Monday.",
      "The fairgrounds are enormous."
    ],
    answer: 1,
    translation: "来週の見本市に参加しますよね?\n(A) 妥当な価格のようですね。\n(B) はい、月曜に発ちます。\n(C) 会場はとても広いですよ。",
    explanation: "付加疑問文は普通のYes/No疑問文と同様に答える。Yes+具体的な予定を述べた(B)が正解。(A)(C)はfair(見本市/公正な/会場)の多義・繰り返しによるひっかけ。"
  },
  {
    id: "s4p2-11",
    question: { speaker: "W", text: "Which font did the design team pick for the brochure?" },
    choices: [
      "Yes, print a hundred copies.",
      "The brochure is quite glossy.",
      "A bold, modern one."
    ],
    answer: 2,
    translation: "デザインチームはパンフレットにどのフォントを選びましたか?\n(A) はい、100部印刷してください。\n(B) パンフレットはかなり光沢がありますね。\n(C) 太めでモダンなものです。",
    explanation: "Which(どの)に The 〜 one と特定した(C)が正解。(A)はWH疑問文にYesで不可、(B)はbrochureの繰り返しによるひっかけ。"
  },
  {
    id: "s4p2-12",
    question: { speaker: "M", text: "Do you know how to operate the new espresso machine?" },
    choices: [
      "Yes, I'll show you how.",
      "It's a brand-new machine.",
      "In the break room."
    ],
    answer: 0,
    translation: "新しいエスプレッソマシンの使い方を知っていますか?\n(A) はい、やり方をお見せしますよ。\n(B) 新品のマシンです。\n(C) 休憩室にあります。",
    explanation: "間接疑問文(Do you know how to 〜?)に対し『知っている+実演を申し出る』とした(A)が正解。(B)はmachineの繰り返し、(C)は場所のひっかけ。"
  },
  {
    id: "s4p2-13",
    question: { speaker: "W", text: "Why don't we upgrade the office chairs this year?" },
    choices: [
      "Because it was too expensive.",
      "That's a great idea — mine is broken.",
      "He sat in the front row."
    ],
    answer: 1,
    translation: "今年、オフィスの椅子を新しくしませんか?\n(A) 高すぎたからです。\n(B) いいですね——私のは壊れているので。\n(C) 彼は前列に座っていました。",
    explanation: "Why don't we 〜? は理由を聞いているのではなく『提案』。同意した(B)が正解。(A)は理由を答えており提案と噛み合わない、(C)はchair(椅子)→sat(座る)の連想ひっかけ。"
  },
  {
    id: "s4p2-14",
    question: { speaker: "M", text: "How long is the warranty on this refrigerator?" },
    choices: [
      "It's a fairly large model.",
      "At the appliance store downtown.",
      "Two years, parts and labor."
    ],
    answer: 2,
    translation: "この冷蔵庫の保証はどのくらいの期間ですか?\n(A) かなり大型のモデルです。\n(B) 中心街の家電量販店でです。\n(C) 部品と作業込みで2年です。",
    explanation: "How long(期間)に対して『2年』と答えた(C)が正解。(A)は大きさ(How large向け)、(B)は場所のひっかけ。"
  },
  {
    id: "s4p2-15",
    question: { speaker: "W", text: "Who authorized the extra printing budget?" },
    choices: [
      "About five hundred copies.",
      "I just started this week, so I'm not sure.",
      "In the supply room."
    ],
    answer: 1,
    translation: "追加の印刷予算を承認したのは誰ですか?\n(A) 500部ほどです。\n(B) 今週入ったばかりなので、分からないんです。\n(C) 備品室にあります。",
    explanation: "Whoに人名で答えず『今週来たばかりで分からない』と間接的に返した(B)が正解。この『わからない系』はPart 2の頻出正解パターン。(A)は部数、(C)は場所のひっかけ。"
  },
  // ここから間接応答(変化球)問題。16問目あたりから難しいタイプが増える
  {
    id: "s4p2-16",
    question: { speaker: "M", text: "Where should we store the extra banquet chairs?" },
    choices: [
      "Isn't the basement storage nearly empty?",
      "About forty of them, I think.",
      "Yes, they're all stackable."
    ],
    answer: 0,
    translation: "余った宴会用の椅子はどこにしまえばいいでしょう?\n(A) 地下の倉庫がほぼ空いていませんでしたっけ?\n(B) 40脚ほどだと思います。\n(C) はい、全部積み重ねられます。",
    explanation: "変化球:場所を断定せず『質問に質問で返す』パターン。『地下が空いているのでは?』という切り返しが正解。(B)はHow many向けの数、(C)はWH疑問文にYesで不可+chairからの連想ひっかけ。"
  },
  {
    id: "s4p2-17",
    question: { speaker: "W", text: "What's the password for the guest Wi-Fi network?" },
    choices: [
      "It's a very fast connection.",
      "Yes, all the guests have arrived.",
      "The receptionist can set that up for you."
    ],
    answer: 2,
    translation: "ゲスト用Wi-Fiのパスワードは何ですか?\n(A) とても速い回線ですよ。\n(B) はい、お客様は全員到着しました。\n(C) 受付の者が設定してくれますよ。",
    explanation: "変化球:自分では答えず『知っている人(受付)に任せる』パターン。『◯◯に頼めば分かる』は頻出の正解。(A)はWi-Fiからの連想、(B)はguestの繰り返し+WH疑問文にYesで不可。"
  },
  {
    id: "s4p2-18",
    question: { speaker: "M", text: "Has the board signed off on the merger?" },
    choices: [
      "They're meeting again on Thursday.",
      "I signed the form myself.",
      "Up on the top floor."
    ],
    answer: 0,
    translation: "取締役会は合併を承認しましたか?\n(A) 木曜日にまた会議をするんです。\n(B) 書類には私が署名しました。\n(C) 最上階です。",
    explanation: "変化球:Yes/Noを言わず『木曜にまた会議』と述べて『まだ承認されていない』を含意するパターン。推論が必要。(B)はsigned off/signedの繰り返し、(C)は場所のひっかけ。"
  },
  {
    id: "s4p2-19",
    question: { speaker: "W", text: "Why did the utility company raise our monthly rate?" },
    choices: [
      "The rate seems quite high.",
      "It's all explained in the letter they sent.",
      "Yes, prices are going up everywhere."
    ],
    answer: 1,
    translation: "なぜ公共料金の会社は月額料金を上げたのですか?\n(A) その料金はかなり高いようですね。\n(B) 全部、送られてきた手紙に書いてありますよ。\n(C) はい、どこも値上がりしていますね。",
    explanation: "変化球:理由を直接言わず『情報のありか(手紙)』を教えるパターン。『そこを読めば分かる』型。(A)はrateの繰り返し、(C)はWH疑問文にYesで不可。"
  },
  {
    id: "s4p2-20",
    question: { speaker: "M", text: "Do you want to eat at the noodle house or the steakhouse tonight?" },
    choices: [
      "The steakhouse is closed on Mondays.",
      "Yes, I'm getting quite hungry.",
      "It was a delicious meal."
    ],
    answer: 0,
    translation: "今夜は麺料理店とステーキ店、どちらで食べたいですか?\n(A) ステーキ店は月曜が定休日ですよ。\n(B) はい、お腹が空いてきました。\n(C) 美味しい食事でした。",
    explanation: "変化球:どちらとは言わず『ステーキ店は休み』という事実を伝えて『麺料理店にしよう』を含意するパターン。(B)は選択疑問文にYesで不可、(C)はeatからの連想+過去形。"
  },
  {
    id: "s4p2-21",
    question: { speaker: "W", text: "Who's giving the keynote at the developers' conference?" },
    choices: [
      "About three hundred developers.",
      "In the main auditorium.",
      "Actually, the keynote slot was dropped from the program."
    ],
    answer: 2,
    translation: "開発者会議で基調講演をするのは誰ですか?\n(A) 開発者は300人ほどです。\n(B) メインの講堂でです。\n(C) 実は、基調講演の枠はプログラムから外されたんです。",
    explanation: "変化球:講演者を答えず『質問の前提(基調講演がある)自体が崩れた』と返すパターン。前提を崩す応答は最難関。(A)はdeveloperの繰り返し+人数、(B)は場所のひっかけ。"
  },
  {
    id: "s4p2-22",
    question: { speaker: "M", text: "How many people signed up for the cooking class?" },
    choices: [
      "It's held every Saturday.",
      "Registration doesn't close until Friday.",
      "In the demonstration kitchen."
    ],
    answer: 1,
    translation: "料理教室には何人が申し込みましたか?\n(A) 毎週土曜に開かれます。\n(B) 受付は金曜まで締め切られないんです。\n(C) 実演用のキッチンでです。",
    explanation: "変化球:人数を答えず『まだ締め切っていないので分からない』と含意するパターン。『今は答えられない』型の正解。(A)は頻度、(C)は場所のひっかけ。"
  },
  {
    id: "s4p2-23",
    question: { speaker: "W", text: "Would you mind covering the front desk during my lunch break?" },
    choices: [
      "I'm heading to a dentist appointment myself.",
      "The desk is right by the entrance.",
      "Yes, I've already had lunch."
    ],
    answer: 0,
    translation: "私の昼休みの間、受付を代わってもらえませんか?\n(A) 私自身、これから歯医者の予約があるんです。\n(B) 受付は入口のすぐそばです。\n(C) はい、もう昼食は済ませました。",
    explanation: "変化球:依頼にYes/Noを言わず『自分も予定がある』と述べて婉曲に断るパターン。都合を述べて断る応答は頻出の正解。(B)はdeskからの連想+場所、(C)はlunchの繰り返しによるひっかけ。"
  },
  {
    id: "s4p2-24",
    question: { speaker: "M", text: "Does the shuttle stop at the airport terminal?" },
    choices: [
      "Yes, I stopped by there earlier.",
      "It's a very busy terminal.",
      "The route map is posted right by the door."
    ],
    answer: 2,
    translation: "そのシャトルは空港ターミナルに停まりますか?\n(A) はい、さっき立ち寄りました。\n(B) とても混雑したターミナルです。\n(C) 路線図がドアのすぐそばに貼ってありますよ。",
    explanation: "変化球:停まるかどうかを答えず『調べる手段(路線図)』を教えるパターン。『そこを見れば分かる』型。(A)はstop/stopped byの繰り返し、(B)はterminalの繰り返しによるひっかけ。"
  },
  {
    id: "s4p2-25",
    question: { speaker: "W", text: "The renovation wrapped up ahead of schedule, didn't it?" },
    choices: [
      "The electrical work still isn't finished, though.",
      "Yes, I renovated my kitchen last year.",
      "Up on the third floor."
    ],
    answer: 0,
    translation: "改装は予定より早く終わりましたよね?\n(A) ただ、電気工事はまだ終わっていないんですよ。\n(B) はい、去年キッチンを改装しました。\n(C) 3階です。",
    explanation: "変化球:同意を求める付加疑問文に、同意せず『まだ終わっていない部分がある』と留保を付けるパターン。(B)はrenovation/renovatedの繰り返し、(C)は場所のひっかけ。"
  }
];
