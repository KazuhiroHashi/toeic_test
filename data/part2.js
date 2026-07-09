// Part 2: 応答問題(質問を聞いて最も適切な応答を選ぶ)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part2 = [
  {
    id: "p2-01",
    question: { speaker: "W", text: "Where is the marketing report I asked for?" },
    choices: [
      "It's on your desk, next to the phone.",
      "Yes, the market opens at nine.",
      "She reported it yesterday."
    ],
    answer: 0,
    translation: "お願いしたマーケティング報告書はどこにありますか?\n(A) あなたの机の上、電話の横にあります。\n(B) はい、市場は9時に開きます。\n(C) 彼女は昨日それを報告しました。",
    explanation: "Where(どこ)に対して場所を答えている(A)が正解。(B)はmarketing/marketの音のひっかけ、(C)はreportの派生語のひっかけ。"
  },
  {
    id: "p2-02",
    question: { speaker: "M", text: "When does the workshop start?" },
    choices: [
      "In the main conference room.",
      "At ten thirty, right after the break.",
      "It lasted two hours."
    ],
    answer: 1,
    translation: "ワークショップはいつ始まりますか?\n(A) 大会議室でです。\n(B) 10時半、休憩のすぐ後です。\n(C) 2時間続きました。",
    explanation: "When(いつ)に対して時刻を答えている(B)が正解。(A)は場所、(C)は過去形で時制が合わない。"
  },
  {
    id: "p2-03",
    question: { speaker: "W", text: "Who's going to lead the new project?" },
    choices: [
      "It starts next Monday.",
      "A new client in Osaka.",
      "Ms. Tanaka from the sales team."
    ],
    answer: 2,
    translation: "誰が新しいプロジェクトを率いるのですか?\n(A) 来週の月曜日に始まります。\n(B) 大阪の新しい顧客です。\n(C) 営業チームの田中さんです。",
    explanation: "Who(誰)に対して人名を答えている(C)が正解。(A)は時、(B)は人ではなく取引先。"
  },
  {
    id: "p2-04",
    question: { speaker: "M", text: "Have you finished reviewing the contract?" },
    choices: [
      "Not yet, I'll be done by noon.",
      "Sure, I'd love another view.",
      "The contractor is here."
    ],
    answer: 0,
    translation: "契約書の確認は終わりましたか?\n(A) まだです。正午までには終わらせます。\n(B) もちろん、別の景色を見たいです。\n(C) 請負業者が来ています。",
    explanation: "Yes/No疑問文に対して『まだ+完了予定』で自然に答えている(A)が正解。(B)はreviewing/viewの音のひっかけ、(C)はcontract/contractorのひっかけ。"
  },
  {
    id: "p2-05",
    question: { speaker: "W", text: "Would you like to attend the seminar online or in person?" },
    choices: [
      "Yes, I would.",
      "Online works better for me.",
      "About fifty attendees."
    ],
    answer: 1,
    translation: "セミナーにはオンラインで参加したいですか、それとも対面で参加したいですか?\n(A) はい、そうしたいです。\n(B) 私にはオンラインの方が都合がいいです。\n(C) 約50名の参加者です。",
    explanation: "A or B の選択疑問文にはYes/Noでは答えられない。どちらかを選んだ(B)が正解。"
  },
  {
    id: "p2-06",
    question: { speaker: "M", text: "Why was the flight to Chicago delayed?" },
    choices: [
      "Because of the heavy snow.",
      "At gate twenty-two.",
      "For about three days."
    ],
    answer: 0,
    translation: "シカゴ行きの便はなぜ遅れたのですか?\n(A) 大雪のためです。\n(B) 22番ゲートです。\n(C) 約3日間です。",
    explanation: "Why(なぜ)に対して理由(Because of 〜)で答えている(A)が正解。"
  },
  {
    id: "p2-07",
    question: { speaker: "W", text: "How often do you back up the customer database?" },
    choices: [
      "It's backed by the IT team.",
      "Every night at eleven.",
      "About two hundred customers."
    ],
    answer: 1,
    translation: "顧客データベースはどのくらいの頻度でバックアップしていますか?\n(A) それはITチームが支援しています。\n(B) 毎晩11時です。\n(C) 約200人の顧客です。",
    explanation: "How often(頻度)に対して Every night(毎晩)と答えている(B)が正解。(A)はback upとbackedの音のひっかけ。"
  },
  {
    id: "p2-08",
    question: { speaker: "M", text: "The printer on the third floor isn't working again." },
    choices: [
      "I'll print it in color.",
      "Yes, he works on the third floor.",
      "I'll call the repair service right away."
    ],
    answer: 2,
    translation: "3階のプリンターがまた動かなくなっています。\n(A) カラーで印刷します。\n(B) はい、彼は3階で働いています。\n(C) すぐに修理サービスに電話します。",
    explanation: "疑問文ではなく『問題の報告』。それに対して対応策を述べた(C)が自然。平叙文への応答はPart 2の頻出パターン。"
  },
  {
    id: "p2-09",
    question: { speaker: "W", text: "Could you send me the agenda before the meeting?" },
    choices: [
      "Sure, I'll e-mail it to you this afternoon.",
      "The meeting room was crowded.",
      "No, I haven't met her before."
    ],
    answer: 0,
    translation: "会議の前に議題を送っていただけますか?\n(A) もちろん、今日の午後メールでお送りします。\n(B) 会議室は混んでいました。\n(C) いいえ、彼女に以前会ったことはありません。",
    explanation: "依頼(Could you 〜?)に対して快諾+手段を答えた(A)が正解。(C)はmeeting/metの音のひっかけ。"
  },
  {
    id: "p2-10",
    question: { speaker: "M", text: "You've met the new director, haven't you?" },
    choices: [
      "In the director's office.",
      "Yes, at last week's orientation.",
      "He'll direct the next film."
    ],
    answer: 1,
    translation: "新しい部長にはもう会いましたよね?\n(A) 部長のオフィスでです。\n(B) はい、先週のオリエンテーションで。\n(C) 彼が次の映画を監督します。",
    explanation: "付加疑問文(〜, haven't you?)は普通のYes/No疑問文と同じように答えればよい。Yes+具体的な場面を答えた(B)が正解。"
  },
  {
    id: "p2-11",
    question: { speaker: "W", text: "Which vendor did we choose for the office supplies?" },
    choices: [
      "The one with the fastest delivery.",
      "Yes, we need more paper.",
      "It's a surprise party."
    ],
    answer: 0,
    translation: "事務用品はどの業者に決めましたか?\n(A) 配送が一番速いところです。\n(B) はい、紙がもっと必要です。\n(C) サプライズパーティーです。",
    explanation: "Which(どの)に対して The one with 〜(〜のところ)と特定している(A)が正解。(C)はsupplies/surpriseの音のひっかけ。"
  },
  {
    id: "p2-12",
    question: { speaker: "M", text: "Do you know where I can find the expense report form?" },
    choices: [
      "It was very expensive.",
      "Check the shared drive under 'Finance'.",
      "He found it interesting."
    ],
    answer: 1,
    translation: "経費報告書のフォームがどこにあるかご存じですか?\n(A) それはとても高価でした。\n(B) 共有ドライブの『Finance』フォルダを見てください。\n(C) 彼はそれを面白いと思いました。",
    explanation: "間接疑問文。場所を尋ねているので、具体的な場所を示した(B)が正解。(A)はexpense/expensiveの音のひっかけ。"
  },
  {
    id: "p2-13",
    question: { speaker: "W", text: "Why don't we take a short break before the next session?" },
    choices: [
      "Because the brake didn't work.",
      "Good idea. I could use some coffee.",
      "It won't break easily."
    ],
    answer: 1,
    translation: "次のセッションの前に少し休憩しませんか?\n(A) ブレーキが効かなかったからです。\n(B) いいですね。コーヒーが飲みたいです。\n(C) それは簡単には壊れません。",
    explanation: "Why don't we 〜? は理由を聞いているのではなく『提案』。同意した(B)が正解。(A)(C)はbreak/brakeの音のひっかけ。"
  },
  {
    id: "p2-14",
    question: { speaker: "M", text: "How much will it cost to ship these samples overseas?" },
    choices: [
      "By express mail.",
      "Around eighty dollars, I believe.",
      "The ship leaves at noon."
    ],
    answer: 1,
    translation: "これらのサンプルを海外へ発送するのにいくらかかりますか?\n(A) 速達便でです。\n(B) 80ドルくらいだと思います。\n(C) 船は正午に出ます。",
    explanation: "How much(いくら)に対して金額を答えた(B)が正解。(C)はship(発送する/船)の多義語ひっかけ。"
  },
  {
    id: "p2-15",
    question: { speaker: "W", text: "Who approved the budget increase for next quarter?" },
    choices: [
      "I wasn't at that meeting, actually.",
      "About ten percent.",
      "Next to the bank."
    ],
    answer: 0,
    translation: "来四半期の予算増額を承認したのは誰ですか?\n(A) 実は私はその会議に出ていなかったんです。\n(B) 約10パーセントです。\n(C) 銀行の隣です。",
    explanation: "Whoに人名で答えず『知らない(会議にいなかった)』と間接的に答える応答。この『わからない系』の応答はPart 2の頻出正解パターン。"
  },
  // ここから間接応答(変化球)問題。本番でも15問目あたりから増えてくる难しいタイプ
  {
    id: "p2-16",
    question: { speaker: "W", text: "Where should we hold the year-end reception?" },
    choices: [
      "At the end of December.",
      "Didn't Marketing already book the rooftop hall?",
      "Yes, I received the invitation."
    ],
    answer: 1,
    translation: "年末のレセプションはどこで開きましょうか?\n(A) 12月の末にです。\n(B) マーケティング部がもう屋上ホールを予約していませんでしたっけ?\n(C) はい、招待状を受け取りました。",
    explanation: "変化球:場所を答えず『質問に質問で返す』パターン。『もう決まっているのでは?』という切り返しが正解になる。(A)はWhen向けの応答、(C)はreception/receivedの音のひっかけ。"
  },
  {
    id: "p2-17",
    question: { speaker: "M", text: "When is the deadline for the grant application?" },
    choices: [
      "The application fee is forty dollars.",
      "Yes, by express mail.",
      "Dr. Okada's assistant would know."
    ],
    answer: 2,
    translation: "助成金申請の締め切りはいつですか?\n(A) 申請料は40ドルです。\n(B) はい、速達でです。\n(C) 岡田先生のアシスタントなら知っていますよ。",
    explanation: "変化球:日付を答えず『知っている人を教える』パターン。『私は知らないが◯◯に聞けば分かる』は近年頻出の正解。(A)はapplicationの繰り返しによるひっかけ、(B)はWH疑問文にYesで答えており不可。"
  },
  {
    id: "p2-18",
    question: { speaker: "W", text: "Has the client approved the final design?" },
    choices: [
      "We're meeting them tomorrow morning.",
      "I designed the logo myself.",
      "No, the sign was removed."
    ],
    answer: 0,
    translation: "クライアントは最終デザインを承認しましたか?\n(A) 明日の朝、先方と打ち合わせをすることになっています。\n(B) ロゴは私が自分でデザインしました。\n(C) いいえ、看板は撤去されました。",
    explanation: "変化球:Yes/Noを言わず『明日会う』と答えることで『まだ承認されていない』を含意するパターン。推論が必要な間接応答。(B)はdesignの派生語、(C)はdesign/signの音のひっかけ。"
  },
  {
    id: "p2-19",
    question: { speaker: "M", text: "Why is the parking garage closed today?" },
    choices: [
      "It usually closes at midnight.",
      "There's a notice posted by the entrance.",
      "Yes, I'll close the window."
    ],
    answer: 1,
    translation: "なぜ今日は駐車場が閉まっているのですか?\n(A) 普段は深夜0時に閉まります。\n(B) 入口に貼り紙がありますよ。\n(C) はい、窓を閉めますね。",
    explanation: "変化球:理由を直接言わず『情報のありか(貼り紙)』を教えるパターン。『そこを見れば分かる』型の間接応答。(A)は時刻の話で理由になっておらず、(C)はclosed/closeの音のひっかけ+WH疑問文にYesは不可。"
  },
  {
    id: "p2-20",
    question: { speaker: "W", text: "Should we take the highway or the local roads to the conference center?" },
    choices: [
      "The conference starts at ten.",
      "The traffic report says the highway is backed up.",
      "Yes, let's take it."
    ],
    answer: 1,
    translation: "会議場までは高速道路で行くべきですか、それとも一般道ですか?\n(A) 会議は10時に始まります。\n(B) 交通情報では高速道路は渋滞しているそうですよ。\n(C) はい、そうしましょう。",
    explanation: "変化球:どちらとは言わず『高速は渋滞』という事実を伝えて『一般道にしよう』を含意するパターン。(C)は選択疑問文にYesで答えており不可。選択疑問文へのYes/No応答は原則誤り。"
  },
  {
    id: "p2-21",
    question: { speaker: "M", text: "Who's going to train the new hires next month?" },
    choices: [
      "About ten new employees.",
      "By train, I think.",
      "Actually, the orientation might be pushed back to September."
    ],
    answer: 2,
    translation: "来月、新入社員の研修は誰が担当するのですか?\n(A) 新入社員は10人ほどです。\n(B) 電車でだと思います。\n(C) 実は、オリエンテーション自体が9月に延期されるかもしれないんです。",
    explanation: "変化球:担当者を答えず『質問の前提(来月実施)自体が変わるかも』と返すパターン。前提を崩す応答は最難関の間接応答。(B)はtrain(研修する/電車)の多義語ひっかけ。"
  },
  {
    id: "p2-22",
    question: { speaker: "W", text: "How much did we spend on advertising last quarter?" },
    choices: [
      "The finance report isn't ready yet.",
      "Mostly in online newspapers.",
      "Yes, it was quite expensive."
    ],
    answer: 0,
    translation: "前四半期の広告費はいくらでしたか?\n(A) 財務報告書がまだできていないんです。\n(B) 主にオンライン新聞にです。\n(C) はい、かなり高額でした。",
    explanation: "変化球:金額を答えず『まだ分からない(報告書が未完成)』と理由を添えて返すパターン。『今は答えられない』型の正解。(B)はWhere向けの応答、(C)はWH疑問文にYesで不可。"
  },
  {
    id: "p2-23",
    question: { speaker: "M", text: "Would you mind reviewing my presentation slides this afternoon?" },
    choices: [
      "The slides are all in color.",
      "I'm about to leave for a client visit.",
      "Yes, the reviews were positive."
    ],
    answer: 1,
    translation: "今日の午後、私のプレゼン資料を見ていただけませんか?\n(A) スライドはすべてカラーです。\n(B) これからクライアント訪問に出るところなんです。\n(C) はい、レビューは好評でした。",
    explanation: "変化球:依頼に対してYes/Noを言わず『外出する』と伝えて婉曲に断るパターン。都合を述べて断る応答は頻出の正解。(C)はreviewing/reviewsの派生語ひっかけ。"
  },
  {
    id: "p2-24",
    question: { speaker: "W", text: "Is there a pharmacy near the hotel?" },
    choices: [
      "Yes, take two tablets daily.",
      "No, I'm feeling much better now.",
      "The front desk should have a map."
    ],
    answer: 2,
    translation: "ホテルの近くに薬局はありますか?\n(A) はい、1日2錠服用してください。\n(B) いいえ、もうだいぶ良くなりました。\n(C) フロントに地図があるはずですよ。",
    explanation: "変化球:あるかないかを答えず『調べる手段(フロントの地図)』を教えるパターン。(A)(B)はpharmacy(薬局)から連想される『薬・体調』で誤答を誘うひっかけ。"
  },
  {
    id: "p2-25",
    question: { speaker: "M", text: "The quarterly sales figures look strong, don't they?" },
    choices: [
      "December's numbers aren't included yet, though.",
      "Yes, he exercises every day.",
      "In the sales department."
    ],
    answer: 0,
    translation: "四半期の売上数値は好調に見えますよね?\n(A) ただ、12月の数字はまだ入っていないんですよ。\n(B) はい、彼は毎日運動しています。\n(C) 営業部でです。",
    explanation: "変化球:同意を求める付加疑問文に対し、同意せず『判断はまだ早い』と留保を付けるパターン。(B)はstrong(強い→体が丈夫)の連想ひっかけ、(C)はsalesの繰り返しひっかけ。"
  }
];
