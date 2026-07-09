// Part 3: 会話問題(会話を聞いて設問に答える)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part3 = [
  {
    id: "p3-01",
    title: "会話 1",
    audio: [
      { speaker: "M", text: "Hi, Emily. I heard the client moved our presentation up to Thursday morning. Do you think the slides will be ready in time?" },
      { speaker: "W", text: "The sales figures are done, but I'm still waiting for the product photos from the design team. They said tomorrow at the earliest." },
      { speaker: "M", text: "That's cutting it close. Why don't I call Mark in design and ask him to prioritize our request?" },
      { speaker: "W", text: "That would help a lot. In the meantime, I'll finish the summary section so we can review the whole deck tomorrow afternoon." }
    ],
    translation: "男性:やあ、エミリー。クライアントがプレゼンを木曜の朝に前倒ししたと聞いたよ。スライドは間に合いそう?\n女性:売上データは終わっているんだけど、デザインチームからの製品写真をまだ待っているの。早くても明日だそうよ。\n男性:それはぎりぎりだね。僕がデザインのマークに電話して、うちの依頼を優先してもらえるよう頼もうか?\n女性:それは助かるわ。その間に私は要約セクションを仕上げて、明日の午後に全体を確認できるようにしておくわね。",
    questions: [
      {
        q: "What are the speakers mainly discussing?",
        choices: [
          "A schedule change for a presentation",
          "A problem with a sales contract",
          "Hiring a new designer",
          "A client's product complaint"
        ],
        answer: 0,
        explanation: "冒頭で『クライアントがプレゼンを木曜朝に前倒しした』と述べ、その準備が間に合うかを話している。主題を問う設問は会話の最初にヒントが出ることが多い。"
      },
      {
        q: "What is the woman waiting for?",
        choices: [
          "Sales figures",
          "Product photos",
          "A signed contract",
          "Travel approval"
        ],
        answer: 1,
        explanation: "女性は I'm still waiting for the product photos from the design team と明言している。売上データ(sales figures)は『完了済み』なのでひっかけ。"
      },
      {
        q: "What does the man offer to do?",
        choices: [
          "Postpone the meeting",
          "Finish the summary section",
          "Contact the design team",
          "Take new photos himself"
        ],
        answer: 2,
        explanation: "男性の Why don't I call Mark in design(デザインのマークに電話しようか)が申し出。call が Contact に言い換えられている。"
      }
    ]
  },
  {
    id: "p3-02",
    title: "会話 2",
    audio: [
      { speaker: "W", text: "Welcome to Grandview Hotel. How may I help you?" },
      { speaker: "M", text: "Hi, I have a reservation under Sato. I know check-in starts at three, but my flight arrived early. Is there any chance my room is ready?" },
      { speaker: "W", text: "Let me check... I'm afraid housekeeping is still working on it. But you're welcome to leave your luggage here, and our café on the second floor is open if you'd like to wait." },
      { speaker: "M", text: "That sounds good. Could you call me at the café when the room is ready? Here's my mobile number." }
    ],
    translation: "女性:グランドビューホテルへようこそ。ご用件を承ります。\n男性:こんにちは。サトウで予約しています。チェックインは3時からと知っていますが、飛行機が早く着いてしまって。部屋の準備ができている可能性はありますか?\n女性:確認いたします……あいにく、まだ清掃中でございます。ただ、お荷物はこちらでお預かりできますし、お待ちいただくなら2階のカフェも営業しております。\n男性:いいですね。部屋の準備ができたらカフェに電話をもらえますか? これが私の携帯番号です。",
    questions: [
      {
        q: "Where most likely are the speakers?",
        choices: [
          "At an airport",
          "At a hotel",
          "At a restaurant",
          "At a travel agency"
        ],
        answer: 1,
        explanation: "冒頭の Welcome to Grandview Hotel と、チェックイン・客室清掃の話題から、ホテルのフロントでの会話だと分かる。"
      },
      {
        q: "Why is the man's room not available?",
        choices: [
          "It is being cleaned.",
          "It was double-booked.",
          "The hotel is fully occupied.",
          "His reservation was canceled."
        ],
        answer: 0,
        explanation: "女性の housekeeping is still working on it(清掃係がまだ作業中)を It is being cleaned. と言い換えている。"
      },
      {
        q: "What does the man ask the woman to do?",
        choices: [
          "Store his luggage in his room",
          "Bring coffee to the lobby",
          "Notify him when the room is ready",
          "Change his reservation"
        ],
        answer: 2,
        explanation: "男性の Could you call me at the café when the room is ready? が依頼。call が Notify(知らせる)に言い換えられている。"
      }
    ]
  },
  {
    id: "p3-03",
    title: "会話 3",
    audio: [
      { speaker: "M", text: "Rachel, the registration numbers for our online training course are lower than we expected. We've only got forty sign-ups so far." },
      { speaker: "W", text: "Hmm, that's about half of our target. Maybe the course fee is too high compared to similar programs." },
      { speaker: "M", text: "Actually, our price is pretty standard. I think the problem is visibility — we've only promoted it in our newsletter." },
      { speaker: "W", text: "Good point. Let's run some ads on social media this week. I'll draft a proposal for the budget and send it to you by tomorrow." }
    ],
    translation: "男性:レイチェル、オンライン研修コースの登録者数が予想より少ないんだ。今のところ40人しか申し込みがない。\n女性:うーん、目標の半分くらいね。類似プログラムと比べて受講料が高すぎるのかしら。\n男性:実は、うちの価格はごく標準的なんだ。問題は露出だと思う——ニュースレターでしか宣伝していないから。\n女性:確かにそうね。今週SNSに広告を出しましょう。予算の提案書を作って、明日までにあなたに送るわ。",
    questions: [
      {
        q: "What problem are the speakers discussing?",
        choices: [
          "A course has too few participants.",
          "A newsletter was not delivered.",
          "A training venue is unavailable.",
          "A budget request was rejected."
        ],
        answer: 0,
        explanation: "冒頭の registration numbers ... are lower than we expected(登録者数が予想より少ない)が問題。too few participants に言い換えられている。"
      },
      {
        q: "What does the man think is the cause of the problem?",
        choices: [
          "The course fee is too high.",
          "The course is not well publicized.",
          "The content is outdated.",
          "The schedule is inconvenient."
        ],
        answer: 1,
        explanation: "男性は I think the problem is visibility(問題は露出だ)と述べている。女性が挙げた『受講料が高い』説は男性が否定しているのでひっかけ。"
      },
      {
        q: "What will the woman do by tomorrow?",
        choices: [
          "Lower the course fee",
          "Cancel the training course",
          "Send a budget proposal",
          "Publish a newsletter"
        ],
        answer: 2,
        explanation: "女性の最後の発言 I'll draft a proposal for the budget and send it to you by tomorrow が根拠。『明日までに』という時間表現が設問のキーになっている。"
      }
    ]
  },
  {
    id: "p3-04",
    title: "会話 4",
    audio: [
      { speaker: "W", text: "Hi, this is Karen from Beacon Office Interiors. I'm calling about the standing desks you ordered. The gray model is out of stock until the end of the month." },
      { speaker: "M", text: "Oh no, we're moving into our new office next week. Is there anything similar you could deliver sooner?" },
      { speaker: "W", text: "We have the same model in white, available for delivery this Friday. It's actually ten percent cheaper, too." },
      { speaker: "M", text: "White would work fine. Please go ahead and change the order — and could you send me a revised invoice today?" }
    ],
    translation: "女性:もしもし、ビーコン・オフィス・インテリアのカレンです。ご注文いただいたスタンディングデスクの件でお電話しました。グレーのモデルが月末まで在庫切れなんです。\n男性:困ったな、来週新しいオフィスに引っ越すんです。もっと早く納品できる似た商品はありませんか?\n女性:同じモデルの白でしたら、今週金曜日にお届けできます。実は10パーセント安いんですよ。\n男性:白で大丈夫です。注文の変更を進めてください。それと、修正した請求書を今日中に送ってもらえますか?",
    questions: [
      {
        q: "Why is the woman calling?",
        choices: [
          "To confirm a delivery address",
          "To report that an item is unavailable",
          "To offer a new product line",
          "To schedule an office tour"
        ],
        answer: 1,
        explanation: "女性は The gray model is out of stock(グレーのモデルが在庫切れ)と伝えるために電話している。out of stock が unavailable に言い換えられている。"
      },
      {
        q: "What will happen next week?",
        choices: [
          "A new product will be released.",
          "The man will take a vacation.",
          "The man's company will relocate.",
          "A sale will begin."
        ],
        answer: 2,
        explanation: "男性の we're moving into our new office next week が根拠。moving into a new office が relocate(移転する)に言い換えられている。"
      },
      {
        q: "What does the man ask the woman to send?",
        choices: [
          "A product catalog",
          "A color sample",
          "A delivery schedule",
          "An updated invoice"
        ],
        answer: 3,
        explanation: "男性の最後の could you send me a revised invoice today? が根拠。revised が updated に言い換えられている。"
      }
    ]
  }
];
