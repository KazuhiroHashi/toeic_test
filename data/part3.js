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
        q: "Why did the man arrive at the hotel early?",
        choices: [
          "His flight arrived ahead of schedule.",
          "His meeting finished sooner than expected.",
          "He mistook the check-in time.",
          "He wanted to avoid heavy traffic."
        ],
        answer: 0,
        explanation: "男性の my flight arrived early(飛行機が早く着いた)が根拠。チェックインは3時からと知っていた、と自分で言っているので(C)は誤り。"
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
          "The price is too high.",
          "It has not been advertised enough.",
          "The material is out of date.",
          "The timing is inconvenient."
        ],
        answer: 1,
        explanation: "男性は I think the problem is visibility(問題は露出=宣伝不足)と述べている。女性が挙げた『料金が高い』説は男性が否定しているのでひっかけ。"
      },
      {
        q: "What will the woman do by tomorrow?",
        choices: [
          "Revise a schedule",
          "Send a budget proposal",
          "Publish a newsletter",
          "Contact an instructor"
        ],
        answer: 1,
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
  },
  {
    id: "p3-05",
    title: "会話 5(3人の会話:女性2人+男性1人)",
    audio: [
      { speaker: "W", text: "Jack, Olivia — do you have a minute? The caterer for Friday's client reception just called. They can't get the seafood platters we ordered." },
      { speaker: "M", text: "That's not good news, Emma. The reception starts at six, and we're expecting more than thirty guests." },
      { speaker: "W2", text: "What if we switch to their international buffet option instead? I tried it at the trade show last month, and it was excellent." },
      { speaker: "W", text: "Good idea. Is it within our budget, though? We can't go over two thousand dollars." },
      { speaker: "M", text: "I'll call the caterer right now and ask for a revised quote. If it's too expensive, we could drop the dessert course." },
      { speaker: "W2", text: "And I'll update the invitation e-mail so the guests know about the menu change." }
    ],
    translation: "エマ(女性1):ジャック、オリビア——ちょっといい? 金曜のクライアント向けレセプションのケータリング業者から電話があって、注文したシーフードの盛り合わせが用意できないそうなの。\nジャック(男性):それはまずいね、エマ。レセプションは6時開始で、30人以上のゲストが来る予定なのに。\nオリビア(女性2):代わりにインターナショナル・ビュッフェのプランに切り替えるのはどう? 先月の展示会で食べたけど、すごく良かったわよ。\nエマ:いい考えね。ただ、予算内に収まるかしら? 2,000ドルは超えられないの。\nジャック:今すぐ業者に電話して、修正見積もりをもらうよ。高すぎたら、デザートのコースを外せばいい。\nオリビア:じゃあ私は招待メールを更新して、ゲストにメニュー変更を知らせておくわね。",
    questions: [
      {
        q: "What event are the speakers preparing for?",
        choices: [
          "A reception for clients",
          "A product demonstration",
          "A retirement party",
          "A job fair"
        ],
        answer: 0,
        explanation: "エマの最初の発言 Friday's client reception(金曜のクライアント向けレセプション)が根拠。3人の会話では『誰が何を言ったか』を名前と声で追うのがポイント。"
      },
      {
        q: "What does Olivia suggest?",
        choices: [
          "Postponing the event",
          "Choosing a different menu option",
          "Reducing the number of guests",
          "Hiring another caterer"
        ],
        answer: 1,
        explanation: "オリビア(2人目の女性)の What if we switch to their international buffet option? が提案。switch to 〜 option が Choosing a different menu option に言い換えられている。"
      },
      {
        q: "What will the man most likely do next?",
        choices: [
          "Send an invitation e-mail",
          "Cancel the dessert course",
          "Request a new price estimate",
          "Visit the trade show"
        ],
        answer: 2,
        explanation: "ジャックの I'll call the caterer right now and ask for a revised quote が根拠。quote(見積もり)が estimate に言い換えられている。メール更新はオリビアの役割なのでひっかけ。"
      }
    ]
  },
  {
    id: "p3-06",
    title: "会話 6",
    audio: [
      { speaker: "W", text: "Hi, this is Yuki Sato from Crestline Accounting. Our copier on the second floor keeps jamming — this is the third time this week." },
      { speaker: "M", text: "Sorry to hear that. It might be a worn roller. Could you tell me the model number? It's on a sticker on the back of the machine." },
      { speaker: "W", text: "Let me see... It's a TX-450." },
      { speaker: "M", text: "Thanks. I have the parts for that model in stock, so I can come by tomorrow morning between nine and eleven, if that works." },
      { speaker: "W", text: "That's fine. I'll let the front desk know you're coming." }
    ],
    translation: "女性:もしもし、クレストライン会計事務所のサトウ・ユキです。2階のコピー機が紙詰まりを繰り返していて、今週これで3回目なんです。\n男性:それは申し訳ありません。ローラーの摩耗かもしれません。型番を教えていただけますか? 機械の裏のシールに書いてあります。\n女性:ええと……TX-450です。\n男性:ありがとうございます。そのモデルの部品は在庫があるので、よろしければ明日の午前9時から11時の間にお伺いできます。\n女性:大丈夫です。受付にあなたが来ることを伝えておきます。",
    questions: [
      {
        q: "Why is the woman calling?",
        choices: [
          "To order office supplies",
          "To report an equipment problem",
          "To cancel a service contract",
          "To ask about an invoice"
        ],
        answer: 1,
        explanation: "冒頭の Our copier keeps jamming(コピー機が紙詰まりを繰り返す)が根拠。機器の不具合報告=equipment problem への言い換え。"
      },
      {
        q: "What does the man ask the woman to provide?",
        choices: [
          "Her office address",
          "A payment method",
          "A model number",
          "A copy of her contract"
        ],
        answer: 2,
        explanation: "男性の Could you tell me the model number? が根拠。場所(裏のシール)まで案内している。"
      },
      {
        q: "What does the woman say she will do?",
        choices: [
          "Leave the office early",
          "Notify the reception desk",
          "Order a replacement part",
          "Call back tomorrow"
        ],
        answer: 1,
        explanation: "最後の I'll let the front desk know(受付に知らせておく)が根拠。front desk が reception desk に言い換えられている。"
      }
    ]
  },
  {
    id: "p3-07",
    title: "会話 7(3人の会話:男性2人+女性1人)",
    audio: [
      { speaker: "W", text: "Ken, Daniel — quick update on this weekend. The movers will arrive on Saturday at eight, so everything needs to be packed by Friday evening." },
      { speaker: "M", text: "We're almost done with the file cabinets. What about the computers?" },
      { speaker: "W", text: "The IT team will handle those. I just need you two to label your boxes with your names and new desk numbers." },
      { speaker: "M2", text: "The labels ran out this morning, though. Should I pick some up from the supply store at lunch?" },
      { speaker: "W", text: "Yes, please do, Daniel. Keep the receipt and I'll reimburse you this afternoon." },
      { speaker: "M", text: "And I'll e-mail everyone a reminder about the Friday deadline." }
    ],
    translation: "女性:ケン、ダニエル——今週末の件で連絡よ。引っ越し業者は土曜の8時に来るから、金曜の夜までに全部梱包を終わらせる必要があるわ。\n男性1(ケン):ファイルキャビネットはほぼ終わってます。コンピューターはどうします?\n女性:それはITチームが担当するわ。あなたたち2人には、箱に名前と新しいデスク番号のラベルを貼ってもらいたいの。\n男性2(ダニエル):ただ、今朝ラベルを切らしてしまって。昼休みに購買部で買ってきましょうか?\n女性:ええ、お願い、ダニエル。レシートを取っておいて。今日の午後精算するわ。\n男性1:じゃあ僕は、金曜の締め切りのリマインダーを全員にメールしておきます。",
    questions: [
      {
        q: "What will happen on Saturday?",
        choices: [
          "An office party will be held.",
          "A moving company will arrive.",
          "New computers will be installed.",
          "A client will visit the office."
        ],
        answer: 1,
        explanation: "冒頭の The movers will arrive on Saturday at eight が根拠。movers が moving company に言い換えられている。"
      },
      {
        q: "What does Daniel offer to do?",
        choices: [
          "Pack the file cabinets",
          "Contact the IT team",
          "Purchase some labels",
          "Reserve a parking space"
        ],
        answer: 2,
        explanation: "2人目の男性(ダニエル)の Should I pick some up from the supply store? が申し出。3人の会話では発言者の特定が問われる。"
      },
      {
        q: "What does the woman say she will do this afternoon?",
        choices: [
          "Repay a colleague",
          "Print new labels",
          "Inspect the boxes",
          "Meet the movers"
        ],
        answer: 0,
        explanation: "女性の I'll reimburse you this afternoon(午後に精算する)が根拠。reimburse(立て替え分を払い戻す)が repay に言い換えられている。"
      }
    ]
  },
  {
    id: "p3-08",
    title: "会話 8(図表問題)",
    graphic: "Meeting Rooms — Hartwell Office\n1. Room A — seats 6 / TV monitor\n2. Room B — seats 10 / whiteboard\n3. Room C — seats 14 / whiteboard\n4. Room D — seats 16 / video conference system",
    audio: [
      { speaker: "M", text: "Hannah, I'm booking a room for Thursday's project review. Twelve people have signed up so far." },
      { speaker: "W", text: "Don't forget the two engineers from the Osaka office — they're joining remotely, so we'll need the video conference system." },
      { speaker: "M", text: "Good point. That narrows it down to one room, then. I'll reserve it for two o'clock." },
      { speaker: "W", text: "Better make it two thirty. The sales team has that room until quarter past two." }
    ],
    translation: "【図表】会議室一覧(ハートウェル・オフィス)/A:6名・モニター/B:10名・ホワイトボード/C:14名・ホワイトボード/D:16名・ビデオ会議システム\n男性:ハンナ、木曜のプロジェクトレビュー用に部屋を予約するんだけど、今のところ12人が参加登録してる。\n女性:大阪オフィスのエンジニア2人を忘れないで。リモート参加だから、ビデオ会議システムが必要よ。\n男性:確かに。それなら部屋は1つに絞られるね。2時で予約するよ。\n女性:2時半にした方がいいわ。営業チームが2時15分までその部屋を使うから。",
    questions: [
      {
        q: "Look at the graphic. Which room will the man most likely reserve?",
        choices: ["Room A", "Room B", "Room C", "Room D"],
        answer: 3,
        explanation: "図表問題。音声の『12人以上+ビデオ会議システムが必要』と図表を突き合わせる。人数(12人)だけならCも可だが、ビデオ会議システムがあるのはDのみ。"
      },
      {
        q: "Who will join the meeting remotely?",
        choices: ["Two engineers", "Two salespeople", "A project manager", "A client"],
        answer: 0,
        explanation: "女性の the two engineers from the Osaka office — they're joining remotely が根拠。"
      },
      {
        q: "What time will the meeting most likely start?",
        choices: ["At 2:00", "At 2:15", "At 2:30", "At 3:00"],
        answer: 2,
        explanation: "女性の Better make it two thirty(2時半にした方がいい)が根拠。2:15は営業チームが部屋を使い終わる時刻のひっかけ。"
      }
    ]
  },
  {
    id: "p3-09",
    title: "会話 9(意図問題)",
    audio: [
      { speaker: "W", text: "Marcus, could you help me put together the handouts for Friday's client workshop? I still have thirty pages of slides to finish." },
      { speaker: "M", text: "It's already Wednesday, Aya." },
      { speaker: "W", text: "I know, I know. The client changed the topic on Monday, so I had to start over." },
      { speaker: "M", text: "All right. Send me the draft tonight, and I'll format the handouts tomorrow while you finish the slides." },
      { speaker: "W", text: "Thank you! I'll buy you lunch after the workshop." }
    ],
    translation: "女性:マーカス、金曜のクライアント向けワークショップの配布資料作りを手伝ってくれない? スライドがまだ30ページも残っていて。\n男性:もう水曜日だよ、アヤ。\n女性:分かってる、分かってるわ。クライアントが月曜にテーマを変えたから、やり直しになったのよ。\n男性:分かった。今夜下書きを送って。君がスライドを仕上げている間に、明日僕が配布資料の体裁を整えるよ。\n女性:ありがとう! ワークショップの後、ランチをおごるわね。",
    questions: [
      {
        q: "What is the woman preparing for?",
        choices: [
          "A job interview",
          "A client workshop",
          "A board meeting",
          "A trade show"
        ],
        answer: 1,
        explanation: "冒頭の Friday's client workshop が根拠。"
      },
      {
        q: "What does the man imply when he says, \"It's already Wednesday\"?",
        choices: [
          "He is worried that little time is left.",
          "He forgot about an appointment.",
          "The schedule was printed incorrectly.",
          "He wants to leave the office early."
        ],
        answer: 0,
        explanation: "意図問題。金曜が本番なのに『もう水曜だ』=残り時間が少ないことへの懸念。発言の文字通りの意味ではなく、文脈上の意図を問うタイプ。"
      },
      {
        q: "What does the man agree to do?",
        choices: [
          "Revise the slides",
          "Contact the client",
          "Prepare the handouts",
          "Reschedule the workshop"
        ],
        answer: 2,
        explanation: "男性の I'll format the handouts tomorrow が根拠。スライドを仕上げるのは女性なので(A)はひっかけ。"
      }
    ]
  },
  {
    id: "p3-10",
    title: "会話 10",
    audio: [
      { speaker: "M", text: "Hi, I'd like to return this jacket. I bought it here last weekend, but it's too small." },
      { speaker: "W", text: "Do you have the receipt with you?" },
      { speaker: "M", text: "Actually, no. I think I left it at home, and I paid in cash, so it's not on my card statement either." },
      { speaker: "W", text: "In that case, I can't give you a cash refund, but I can offer you store credit for the current price, or you could exchange it for a larger size." },
      { speaker: "M", text: "A larger size would be perfect, if you have one." },
      { speaker: "W", text: "Let me check our stock. If we don't have it here, I can have one sent from our Riverside branch by Thursday." }
    ],
    translation: "男性:すみません、このジャケットを返品したいのですが。先週末ここで買ったんですが、小さすぎて。\n女性:レシートはお持ちですか?\n男性:実は、無いんです。家に置いてきたみたいで。現金で払ったので、カードの明細にも残っていなくて。\n女性:その場合、現金での返金はできませんが、現在の販売価格分のストアクレジットをお付けするか、大きいサイズへの交換ならできます。\n男性:大きいサイズがあれば、それが一番ありがたいです。\n女性:在庫を確認しますね。この店に無ければ、リバーサイド店から木曜日までに取り寄せられます。",
    questions: [
      {
        q: "Why does the man want to return the jacket?",
        choices: [
          "It is damaged.",
          "It is the wrong size.",
          "He found a cheaper one.",
          "He bought two by mistake."
        ],
        answer: 1,
        explanation: "冒頭の it's too small(小さすぎる)が根拠。wrong size への言い換え。"
      },
      {
        q: "What problem does the man have?",
        choices: [
          "He lost his credit card.",
          "He does not have his receipt.",
          "The jacket is no longer sold.",
          "His card was declined."
        ],
        answer: 1,
        explanation: "女性のレシート確認に対し、男性は I think I left it at home(家に置いてきた)と答えている。"
      },
      {
        q: "What does the woman say about the Riverside branch?",
        choices: [
          "It is closed on Thursdays.",
          "It is being renovated.",
          "It can send a product to her store.",
          "It offers cash refunds."
        ],
        answer: 2,
        explanation: "最後の I can have one sent from our Riverside branch(リバーサイド店から取り寄せられる)が根拠。木曜は『届く期限』でありひっかけ。"
      }
    ]
  },
  {
    id: "p3-11",
    title: "会話 11",
    audio: [
      { speaker: "W", text: "Hello, I'm calling about my reservation on flight two-oh-seven to Denver this Friday. I'd like to move to an earlier flight on the same day, if possible." },
      { speaker: "M", text: "Let me check... We have seats available on the ten-fifteen departure. Normally there's a thirty-dollar change fee, but I see you're a Sky Club member, so the fee will be waived." },
      { speaker: "W", text: "That's great. Could I also get an aisle seat?" },
      { speaker: "M", text: "Certainly — seat fourteen C. You'll receive an updated itinerary by e-mail within the hour." }
    ],
    translation: "女性:もしもし、今週金曜のデンバー行き207便の予約の件でお電話しました。可能なら、同じ日のもっと早い便に変更したいのですが。\n男性:お調べします……10時15分発の便に空席がございます。通常は30ドルの変更手数料がかかりますが、スカイクラブ会員でいらっしゃるので、手数料は免除になります。\n女性:良かった。それと、通路側の席にできますか?\n男性:かしこまりました——14Cです。1時間以内に、更新された旅程表をEメールでお送りします。",
    questions: [
      {
        q: "What does the woman want to do?",
        choices: [
          "Cancel her trip",
          "Take an earlier flight",
          "Upgrade to business class",
          "Add a checked bag"
        ],
        answer: 1,
        explanation: "冒頭の I'd like to move to an earlier flight が根拠。"
      },
      {
        q: "Why will the fee be waived?",
        choices: [
          "The woman booked online.",
          "The flight was delayed.",
          "The woman belongs to a membership program.",
          "It is the woman's first flight."
        ],
        answer: 2,
        explanation: "男性の you're a Sky Club member, so the fee will be waived が根拠。会員プログラム(membership program)への言い換え。"
      },
      {
        q: "What will the woman receive by e-mail?",
        choices: [
          "A refund notice",
          "A revised itinerary",
          "A boarding pass",
          "A discount coupon"
        ],
        answer: 1,
        explanation: "最後の an updated itinerary by e-mail が根拠。updated が revised に言い換えられている。"
      }
    ]
  },
  {
    id: "p3-12",
    title: "会話 12(図表問題)",
    graphic: "Invoice #8841 — Coretti Office Furnishings\n1. Desk lamp ($30 × 2) — $60\n2. Office chair — $120\n3. Bookshelf — $85\n4. Delivery — $20\nTotal — $285",
    audio: [
      { speaker: "M", text: "Hello, this is Robert Lin. I just received invoice eighty-eight forty-one, and there seems to be a mistake. I ordered only one desk lamp, but I was charged for two." },
      { speaker: "W", text: "I'm very sorry about that, Mr. Lin. Let me pull up your order... You're right. I'll refund the difference to your card today." },
      { speaker: "M", text: "Thank you. Also, could you send me a corrected invoice for our records?" },
      { speaker: "W", text: "Of course. I'll e-mail it within the hour, and the refund should appear on your statement in three to five business days." }
    ],
    translation: "【図表】請求書#8841(コレッティ・オフィス家具)/デスクランプ(30ドル×2)60ドル/オフィスチェア120ドル/本棚85ドル/配送料20ドル/合計285ドル\n男性:もしもし、ロバート・リンです。請求書8841を受け取ったのですが、間違いがあるようです。デスクランプは1つしか注文していないのに、2つ分請求されています。\n女性:大変申し訳ございません、リン様。ご注文を確認します……おっしゃる通りです。本日、差額をカードに返金いたします。\n男性:ありがとうございます。それと、記録用に修正した請求書を送っていただけますか?\n女性:もちろんです。1時間以内にEメールでお送りします。返金は3〜5営業日で明細に反映されます。",
    questions: [
      {
        q: "Look at the graphic. How much will the man be refunded?",
        choices: ["$20", "$30", "$60", "$120"],
        answer: 1,
        explanation: "図表問題。音声の『ランプは1つだけ注文したのに2つ分請求された』と図表(30ドル×2)を突き合わせる。返金は差額の30ドル。60ドルは2つ分の合計でひっかけ。"
      },
      {
        q: "What does the man ask the woman to send?",
        choices: [
          "A product catalog",
          "A return label",
          "A corrected invoice",
          "A delivery receipt"
        ],
        answer: 2,
        explanation: "男性の could you send me a corrected invoice? が根拠。"
      },
      {
        q: "According to the woman, when will the refund appear?",
        choices: [
          "Later today",
          "Tomorrow morning",
          "Within the hour",
          "In three to five business days"
        ],
        answer: 3,
        explanation: "最後の the refund should appear in three to five business days が根拠。『1時間以内』は修正請求書の送付時期でひっかけ。"
      }
    ]
  },
  {
    id: "p3-13",
    title: "会話 13",
    audio: [
      { speaker: "W", text: "Hi, Tom. I just started in the marketing department on Monday. Could you tell me how to get a parking permit for the staff garage?" },
      { speaker: "M", text: "Sure. You apply through the facilities page on the intranet — it usually takes about a week to process." },
      { speaker: "W", text: "A week? I drove here today. Is there anything I can do in the meantime?" },
      { speaker: "M", text: "Ask the security desk in the lobby for a temporary pass. They can issue one on the spot — just show your employee ID." }
    ],
    translation: "女性:こんにちは、トム。月曜からマーケティング部に入ったばかりなんですが、職員用駐車場の許可証はどうやって取ればいいか教えてもらえますか?\n男性:もちろん。イントラネットの施設管理ページから申請するんだ。処理には普通1週間くらいかかるよ。\n女性:1週間も? 今日は車で来てしまったんです。それまでの間、何かできることはありますか?\n男性:ロビーの警備デスクで臨時パスをもらうといいよ。社員証を見せれば、その場で発行してくれる。",
    questions: [
      {
        q: "What does the woman ask about?",
        choices: [
          "Finding a meeting room",
          "Getting a parking permit",
          "Using the intranet",
          "Replacing an ID card"
        ],
        answer: 1,
        explanation: "冒頭の how to get a parking permit が根拠。"
      },
      {
        q: "According to the man, how long does the application take?",
        choices: [
          "One day",
          "Three days",
          "About a week",
          "Two weeks"
        ],
        answer: 2,
        explanation: "男性の it usually takes about a week to process が根拠。"
      },
      {
        q: "What does the man suggest the woman do?",
        choices: [
          "Go to the security desk",
          "Call the facilities manager",
          "Use a different entrance",
          "Come earlier tomorrow"
        ],
        answer: 0,
        explanation: "男性の Ask the security desk in the lobby for a temporary pass が根拠。その場で臨時パスを発行してもらえる。"
      }
    ]
  }
];
