// Part 2: 応答問題(質問を聞いて最も適切な応答を選ぶ)
window.TOEIC_DATA_6 = window.TOEIC_DATA_6 || {};
window.TOEIC_DATA_6.part2 = [
  {
    id: "s6p2-01",
    question: { speaker: "W", text: "Where's the nearest post office to mail this package?" },
    choices: [
      "There's one just around the corner on Fifth Street.",
      "I'll post the announcement tomorrow.",
      "About two kilograms, I'd guess."
    ],
    answer: 0,
    translation: "この荷物を送るのに一番近い郵便局はどこですか?\n(A) 5番通りの角を曲がってすぐのところにありますよ。\n(B) お知らせは明日掲示します。\n(C) 2キロくらいだと思います。",
    explanation: "Where(どこ)に対して場所を答えている(A)が正解。(B)はpost office/postの音のひっかけ、(C)はpackage(荷物)から連想させる重さのひっかけ。"
  },
  {
    id: "s6p2-02",
    question: { speaker: "M", text: "When will the software license expire?" },
    choices: [
      "In the licensing office upstairs.",
      "At the end of this month.",
      "It's ninety dollars a year."
    ],
    answer: 1,
    translation: "ソフトウェアのライセンスはいつ期限が切れますか?\n(A) 上の階のライセンス管理室でです。\n(B) 今月末です。\n(C) 年間90ドルです。",
    explanation: "When(いつ)に対して時期を答えている(B)が正解。(A)はlicense/licensingの派生語+場所のひっかけ、(C)は料金を答える連想のひっかけ。"
  },
  {
    id: "s6p2-03",
    question: { speaker: "W", text: "Who's organizing the retirement party for Mr. Reyes?" },
    choices: [
      "In the fourth-floor lounge.",
      "Sometime next Friday.",
      "His teammates are handling it."
    ],
    answer: 2,
    translation: "レイエスさんの退職パーティーは誰が準備しているのですか?\n(A) 4階のラウンジでです。\n(B) 来週の金曜日あたりです。\n(C) 彼のチームメンバーが担当しています。",
    explanation: "Who(誰)に対して人を答えている(C)が正解。(A)は場所、(B)は時で、どちらも問いに合わない。"
  },
  {
    id: "s6p2-04",
    question: { speaker: "M", text: "Have you updated the emergency contact list?" },
    choices: [
      "Yes, I added everyone's new numbers this morning.",
      "That door is for emergencies only.",
      "She contacted me last week."
    ],
    answer: 0,
    translation: "緊急連絡先リストは更新しましたか?\n(A) はい、今朝みんなの新しい番号を追加しました。\n(B) あのドアは非常時専用です。\n(C) 彼女から先週連絡がありました。",
    explanation: "Yes/No疑問文に対してYes+具体的な作業を答えた(A)が正解。(B)はemergencyの繰り返しによるひっかけ、(C)はcontactの派生語(動詞)のひっかけ。"
  },
  {
    id: "s6p2-05",
    question: { speaker: "W", text: "Do you want the handouts in color or in black and white?" },
    choices: [
      "Yes, please print them now.",
      "Color would be better for the charts.",
      "About fifty copies should do."
    ],
    answer: 1,
    translation: "配布資料はカラーにしますか、それとも白黒にしますか?\n(A) はい、今すぐ印刷してください。\n(B) 図表があるのでカラーの方がいいです。\n(C) 50部くらいで足りるでしょう。",
    explanation: "A or B の選択疑問文にはYes/Noで答えられない。カラーを選んだ(B)が正解。(A)は選択疑問文にYesで不可、(C)は部数の連想ひっかけ。"
  },
  {
    id: "s6p2-06",
    question: { speaker: "M", text: "Why was the product recall announced?" },
    choices: [
      "A faulty sensor was found in some units.",
      "At this morning's press briefing.",
      "I'll call the supplier back soon."
    ],
    answer: 0,
    translation: "なぜ製品のリコールが発表されたのですか?\n(A) 一部の製品に欠陥のあるセンサーが見つかったからです。\n(B) 今朝の記者会見でです。\n(C) すぐに仕入先に折り返し電話します。",
    explanation: "Why(なぜ)に対して理由を答えている(A)が正解。(B)はWhen/Whereの応答で理由になっていない、(C)はrecall/callの音のひっかけ。"
  },
  {
    id: "s6p2-07",
    question: { speaker: "W", text: "How do new employees clock in with the updated system?" },
    choices: [
      "The clock in the lobby runs a bit fast.",
      "Usually around eight in the morning.",
      "They just scan their ID badges at the door."
    ],
    answer: 2,
    translation: "新入社員は新しいシステムでどうやって出勤打刻をするのですか?\n(A) ロビーの時計は少し進んでいます。\n(B) たいてい朝8時ごろです。\n(C) 入口でIDバッジをかざすだけです。",
    explanation: "How(方法)に対して手段を答えた(C)が正解。(A)はclock in/clockの繰り返しひっかけ、(B)はWhen(いつ)の応答で方法になっていない。"
  },
  {
    id: "s6p2-08",
    question: { speaker: "M", text: "The vending machine keeps rejecting my coins." },
    choices: [
      "Yes, it was installed just last month.",
      "Try the one in the break room instead.",
      "I'll have a bottle of water, thanks."
    ],
    answer: 1,
    translation: "自動販売機が硬貨を受け付けてくれないんです。\n(A) はい、先月設置されたばかりです。\n(B) 代わりに休憩室のものを使ってみてください。\n(C) では水を1本もらいます。",
    explanation: "疑問文ではなく『不具合の報告』。それに対して代替策を提案した(B)が自然。(A)は連想のひっかけ、(C)はvending machine(自販機)から飲み物を連想させるひっかけ。"
  },
  {
    id: "s6p2-09",
    question: { speaker: "W", text: "Could you water the plants while I'm away next week?" },
    choices: [
      "The water cooler needs refilling.",
      "They were planted last spring.",
      "Of course, I'll look after them."
    ],
    answer: 2,
    translation: "来週私が留守の間、植物に水やりをしてもらえますか?\n(A) ウォーターサーバーの水を補充しないと。\n(B) それらは去年の春に植えられました。\n(C) もちろん、面倒を見ますよ。",
    explanation: "依頼(Could you 〜?)に対して快諾した(C)が正解。(A)はwaterの繰り返しひっかけ、(B)はplant(植物/植える)の派生語ひっかけ。"
  },
  {
    id: "s6p2-10",
    question: { speaker: "M", text: "The photocopier lease ends next month, doesn't it?" },
    choices: [
      "Right, we'll need to decide whether to renew it.",
      "The copies are already on your desk.",
      "It's leased from a downtown vendor."
    ],
    answer: 0,
    translation: "コピー機のリースは来月で終わりますよね?\n(A) そうです、更新するかどうか決めないといけませんね。\n(B) コピーはもうあなたの机の上にありますよ。\n(C) 市内の業者からリースしています。",
    explanation: "付加疑問文には普通のYes/No疑問文と同じように答えればよい。同意し次の行動に触れた(A)が正解。(B)はphotocopier/copiesの音のひっかけ、(C)はleaseの繰り返しひっかけ。"
  },
  {
    id: "s6p2-11",
    question: { speaker: "W", text: "Which delivery company handled our last shipment?" },
    choices: [
      "Yes, it arrived right on time.",
      "To the downtown warehouse.",
      "The one we started using back in March."
    ],
    answer: 2,
    translation: "前回の発送はどの配送業者が担当しましたか?\n(A) はい、時間どおりに到着しました。\n(B) 市内の倉庫へです。\n(C) 3月から使い始めたところです。",
    explanation: "Which(どの)に対して The one 〜 で特定した(C)が正解。(A)はWH疑問文にYesで答えており不可、(B)はWhere(どこへ)の応答。"
  },
  {
    id: "s6p2-12",
    question: { speaker: "M", text: "Do you know where the first-aid kit is kept?" },
    choices: [
      "He was first in line this morning.",
      "It's mounted on the wall by the kitchen.",
      "The kit costs about thirty dollars."
    ],
    answer: 1,
    translation: "救急箱がどこに置いてあるかご存じですか?\n(A) 彼は今朝、列の先頭でした。\n(B) 台所のそばの壁に取り付けてありますよ。\n(C) その箱は30ドルくらいします。",
    explanation: "間接疑問文で場所を尋ねているので、具体的な場所を答えた(B)が正解。(A)はfirst-aid/firstの繰り返しひっかけ、(C)はkitから値段を連想させるひっかけ。"
  },
  {
    id: "s6p2-13",
    question: { speaker: "W", text: "Why don't we reschedule the site visit for Friday?" },
    choices: [
      "Good idea — everyone's free that day.",
      "The website is being redesigned.",
      "It's a lovely view from the site."
    ],
    answer: 0,
    translation: "現地視察を金曜日に組み直しませんか?\n(A) いい考えですね、その日はみんな空いています。\n(B) ウェブサイトは今、作り直しているところです。\n(C) その現場からの眺めは素晴らしいですよ。",
    explanation: "Why don't we 〜? は理由を聞いているのではなく『提案』。同意した(A)が正解。(B)はsite/websiteの音のひっかけ、(C)はsiteの繰り返しひっかけ。"
  },
  {
    id: "s6p2-14",
    question: { speaker: "M", text: "How much does a booth at the job fair cost?" },
    choices: [
      "In the main exhibition hall.",
      "Five hundred dollars for the day.",
      "The weather should be fair tomorrow."
    ],
    answer: 1,
    translation: "就職フェアのブースはいくらかかりますか?\n(A) メインの展示ホールでです。\n(B) 1日500ドルです。\n(C) 明日の天気は晴れのはずです。",
    explanation: "How much(いくら)に対して金額を答えた(B)が正解。(A)はWhere(どこ)の応答、(C)はfair(フェア/晴れの)の多義語による音のひっかけ。"
  },
  {
    id: "s6p2-15",
    question: { speaker: "W", text: "Who set the agenda for tomorrow's board meeting?" },
    choices: [
      "I haven't seen the agenda yet, actually.",
      "In the executive boardroom.",
      "About twelve items long."
    ],
    answer: 0,
    translation: "明日の役員会議の議題は誰が決めたのですか?\n(A) 実は、私はまだ議題を見ていないんです。\n(B) 役員会議室でです。\n(C) 12項目くらいの長さです。",
    explanation: "Whoに人名で答えず『まだ見ていない(=分からない)』と間接的に返す応答。この『わからない系』はPart 2の頻出正解パターン。(B)はboardの繰り返しひっかけ、(C)は項目数の連想ひっかけ。"
  },
  // ここから間接応答(変化球)問題。本番でも15問目あたりから難度の高いタイプが増える
  {
    id: "s6p2-16",
    question: { speaker: "M", text: "Where should we display the new product samples?" },
    choices: [
      "At the very end of the month.",
      "Isn't the front window reserved for seasonal items?",
      "Yes, I got a free sample too."
    ],
    answer: 1,
    translation: "新製品のサンプルはどこに陳列しましょうか?\n(A) 月のちょうど末にです。\n(B) 正面のウィンドウは季節商品用に取ってありませんでしたっけ?\n(C) はい、私も無料サンプルをもらいました。",
    explanation: "変化球:場所を答えず『質問に質問で返す』パターン。『そこは別用途では?』という切り返しが正解。(A)はWhen向けの応答、(C)はsampleの繰り返し+WH疑問文にYesで不可。"
  },
  {
    id: "s6p2-17",
    question: { speaker: "W", text: "When does this year's internship program begin?" },
    choices: [
      "The program was very popular last year.",
      "Yes, in the training room.",
      "The HR coordinator posted the dates online."
    ],
    answer: 2,
    translation: "今年のインターンシップ制度はいつ始まりますか?\n(A) その制度は去年とても好評でした。\n(B) はい、研修室でです。\n(C) 人事の担当者が日程をオンラインに載せていますよ。",
    explanation: "変化球:日付を答えず『情報のありか(人事が掲載済み)』を教えるパターン。『そこを見れば分かる』型の間接応答。(A)はprogramの繰り返しひっかけ、(B)はWH疑問文にYesで不可。"
  },
  {
    id: "s6p2-18",
    question: { speaker: "M", text: "Has payroll processed this month's bonuses yet?" },
    choices: [
      "The accounting office is still closed for the audit.",
      "I earned a small bonus last year.",
      "Yes, the payment process was simple."
    ],
    answer: 0,
    translation: "給与部門は今月のボーナスをもう処理しましたか?\n(A) 経理部はまだ監査で閉まっているんです。\n(B) 私は去年、少額のボーナスをもらいました。\n(C) はい、支払い処理は簡単でした。",
    explanation: "変化球:Yes/Noを言わず『経理がまだ閉まっている』と述べて『まだ処理されていない』を含意するパターン。推論が必要。(B)はbonusの繰り返しひっかけ、(C)はprocessの派生語ひっかけ。"
  },
  {
    id: "s6p2-19",
    question: { speaker: "W", text: "Why is the west staircase blocked off today?" },
    choices: [
      "It leads up to the rooftop terrace.",
      "There's a notice taped by the door explaining it.",
      "Yes, I'll block out the whole afternoon."
    ],
    answer: 1,
    translation: "なぜ今日は西側の階段が封鎖されているのですか?\n(A) それは屋上テラスに続いています。\n(B) 入口に理由を書いた貼り紙がありますよ。\n(C) はい、午後いっぱい予定を空けておきます。",
    explanation: "変化球:理由を直接言わず『情報のありか(貼り紙)』を教えるパターン。(A)は行き先の話で理由になっておらず、(C)はblocked/block outの音のひっかけ+WH疑問文にYesで不可。"
  },
  {
    id: "s6p2-20",
    question: { speaker: "M", text: "Should we hire a temp or ask the team to work overtime?" },
    choices: [
      "Yes, that sounds fine to me.",
      "The temperature dropped sharply last night.",
      "Most of the team is already fully booked next week."
    ],
    answer: 2,
    translation: "臨時スタッフを雇うべきですか、それともチームに残業を頼むべきですか?\n(A) はい、それでいいと思います。\n(B) 昨夜は気温が急に下がりました。\n(C) チームのほとんどは来週すでに予定が埋まっています。",
    explanation: "変化球:どちらとは言わず『チームは手一杯』という事実を伝えて『臨時スタッフにしよう』を含意するパターン。(A)は選択疑問文にYesで不可、(B)はtemp/temperatureの音のひっかけ。"
  },
  {
    id: "s6p2-21",
    question: { speaker: "W", text: "Who's covering the reception desk during the conference?" },
    choices: [
      "We received a very warm welcome.",
      "In the main lobby, as usual.",
      "Actually, the conference has been switched to online only."
    ],
    answer: 2,
    translation: "会議の間、受付は誰が担当するのですか?\n(A) とても温かい歓迎を受けました。\n(B) いつもどおりメインロビーでです。\n(C) 実は、会議はオンラインのみに切り替わったんです。",
    explanation: "変化球:担当者を答えず『会議の実施形態(前提)自体が変わった』と返すパターン。前提を崩す応答は最難関。(A)はreception/receivedの音のひっかけ、(B)はWhere(どこ)の応答。"
  },
  {
    id: "s6p2-22",
    question: { speaker: "M", text: "How much are we over budget on the campaign?" },
    choices: [
      "The final figures won't be ready until Friday.",
      "The campaign ran for six weeks.",
      "Yes, it turned out rather costly."
    ],
    answer: 0,
    translation: "そのキャンペーンで予算をいくら超過していますか?\n(A) 最終的な数字は金曜日まで出そろわないんです。\n(B) そのキャンペーンは6週間続きました。\n(C) はい、かなり高くつきました。",
    explanation: "変化球:金額を答えず『まだ集計中で今は言えない』と返すパターン。『今は答えられない』型の正解。(B)はcampaignの繰り返しひっかけ、(C)はWH疑問文にYesで不可。"
  },
  {
    id: "s6p2-23",
    question: { speaker: "W", text: "Would you mind training the new hire on the database this afternoon?" },
    choices: [
      "Yes, the trains were running late today.",
      "I'll be at the regional office until Thursday.",
      "The database was upgraded just recently."
    ],
    answer: 1,
    translation: "今日の午後、新人にデータベースの使い方を教えていただけませんか?\n(A) はい、今日は電車が遅れていました。\n(B) 木曜日まで地方の営業所に行っているんです。\n(C) データベースはつい最近アップグレードされました。",
    explanation: "変化球:依頼に対してYes/Noを言わず『不在にする』と伝えて婉曲に断るパターン。都合を述べて断る応答は頻出の正解。(A)はtrain(教える/電車)の多義語による音のひっかけ、(C)はdatabaseの繰り返しひっかけ。"
  },
  {
    id: "s6p2-24",
    question: { speaker: "M", text: "Is there a stationery shop in this building?" },
    choices: [
      "Yes, I bought some envelopes there yesterday.",
      "No, I'm not moving offices.",
      "The building directory in the lobby would list one."
    ],
    answer: 2,
    translation: "この建物の中に文房具店はありますか?\n(A) はい、昨日そこで封筒を買いました。\n(B) いいえ、オフィスを移すつもりはありません。\n(C) ロビーの館内案内板に載っているはずですよ。",
    explanation: "変化球:あるかないかを直接答えず『調べる手段(館内案内板)』を教えるパターン。(A)はstationery(文房具)から連想させるひっかけ、(B)はstationery/stationary(動かない)の音の混同を突いたひっかけ。"
  },
  {
    id: "s6p2-25",
    question: { speaker: "W", text: "The new scheduling app has been running smoothly, hasn't it?" },
    choices: [
      "We haven't tried it during a busy week yet, though.",
      "Yes, I run a few kilometers every morning.",
      "The schedule is posted on the board."
    ],
    answer: 0,
    translation: "新しい予定管理アプリは順調に動いていますよね?\n(A) ただ、忙しい週にはまだ試していないんですよ。\n(B) はい、毎朝数キロ走っています。\n(C) スケジュールは掲示板に貼ってあります。",
    explanation: "変化球:同意を求める付加疑問文に対し、すぐには同意せず『まだ判断できない』と留保を付けるパターン。(B)はrunning/run(動作する/走る)の多義語による連想ひっかけ、(C)はscheduling/scheduleの繰り返しひっかけ。"
  }
];
