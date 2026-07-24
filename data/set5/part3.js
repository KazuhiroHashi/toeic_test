// Part 3: 会話問題(会話を聞いて設問に答える)
window.TOEIC_DATA_5 = window.TOEIC_DATA_5 || {};
window.TOEIC_DATA_5.part3 = [
  {
    id: "s5p3-01",
    title: "会話 1",
    audio: [
      { speaker: "W", text: "Hi, this is Priya in the accounting department. I'm working from home today, but I can't connect to the company VPN. It keeps saying my password is invalid." },
      { speaker: "M", text: "Thanks for calling, Priya. That usually happens when the security app hasn't been updated in a while. When did you last install an update?" },
      { speaker: "W", text: "Hmm, I'm not sure. Probably a couple of months ago." },
      { speaker: "M", text: "That's likely the cause. I'll send you a link to the latest version. Once you install it, restart your laptop and try logging in again." },
      { speaker: "W", text: "Okay. And if it still doesn't work?" },
      { speaker: "M", text: "Just call back and reference ticket number three-two-one, and we'll set up a remote session." }
    ],
    translation: "女性:もしもし、経理部のプリヤです。今日は在宅勤務なんですが、会社のVPNに接続できなくて。パスワードが無効だと表示され続けるんです。\n男性:お電話ありがとうございます、プリヤさん。それはたいてい、セキュリティアプリをしばらく更新していないときに起こります。最後に更新をインストールしたのはいつですか?\n女性:うーん、はっきりしません。たぶん2か月くらい前かと。\n男性:それが原因でしょうね。最新版のリンクをお送りします。インストールしたら、ノートパソコンを再起動して、もう一度ログインしてみてください。\n女性:分かりました。それでもだめなら?\n男性:折り返しお電話いただき、チケット番号321とお伝えください。リモートセッションを設定します。",
    questions: [
      {
        q: "Why is the woman calling?",
        choices: [
          "Because she cannot connect remotely",
          "To reset her password",
          "To request new equipment",
          "To schedule a software demonstration"
        ],
        answer: 0,
        explanation: "女性は在宅勤務中で『会社のVPNに接続できない』と述べている。connect to the VPN を connect remotely(遠隔で接続)に言い換えている。『パスワードが無効』という表示は症状であって、パスワード再設定が目的ではないので(B)はひっかけ。"
      },
      {
        q: "What does the man say is probably causing the problem?",
        choices: [
          "An expired account",
          "A weak internet signal",
          "Outdated software",
          "An incorrect username"
        ],
        answer: 2,
        explanation: "男性は the security app hasn't been updated in a while(セキュリティアプリがしばらく更新されていない)を原因と見ている。updated されていない=Outdated software への言い換え。"
      },
      {
        q: "What should the woman do if the problem continues?",
        choices: [
          "Visit the IT office in person",
          "Reinstall the operating system",
          "Contact her manager",
          "Reference a ticket number"
        ],
        answer: 3,
        explanation: "男性の call back and reference ticket number three-two-one が根拠。『まだ直らなければ』という条件が設問のキー。"
      }
    ]
  },
  {
    id: "s5p3-02",
    title: "会話 2",
    audio: [
      { speaker: "W", text: "Welcome to Marlowe Books. Can I help you find something?" },
      { speaker: "M", text: "Yes, I'm looking for a cookbook called Coastal Kitchen. I checked your shelves but couldn't find it." },
      { speaker: "W", text: "Let me check our system... I'm afraid it's sold out at this location. But I can order a copy from our warehouse for you." },
      { speaker: "M", text: "How long would that take?" },
      { speaker: "W", text: "About four business days. We'll phone you when it arrives, and you can pay when you pick it up." },
      { speaker: "M", text: "That works. Let me give you my number." }
    ],
    translation: "女性:マーロウ書店へようこそ。何かお探しですか?\n男性:はい、『コースタル・キッチン』という料理本を探しています。棚を見たのですが、見つからなくて。\n女性:システムを確認しますね……あいにく、この店舗では売り切れです。ただ、倉庫から1冊お取り寄せできますよ。\n男性:どのくらいかかりますか?\n女性:4営業日ほどです。届いたらお電話しますので、受け取りの際にお支払いください。\n男性:それでお願いします。番号をお伝えしますね。",
    questions: [
      {
        q: "What is the man looking for?",
        choices: [
          "A travel guide",
          "A cookbook",
          "A magazine subscription",
          "A gift card"
        ],
        answer: 1,
        explanation: "男性の a cookbook called Coastal Kitchen が根拠。書名だけでなく『料理本』という種類まで押さえる。"
      },
      {
        q: "What does the woman offer to do?",
        choices: [
          "Give him a discount",
          "Recommend a similar title",
          "Ship the book to his home",
          "Order the item from a warehouse"
        ],
        answer: 3,
        explanation: "女性の I can order a copy from our warehouse for you が申し出。受け取りは店頭(pick it up)なので、自宅配送(C)はひっかけ。"
      },
      {
        q: "What will the woman do when the item arrives?",
        choices: [
          "Telephone the man",
          "Mail him a receipt",
          "Deliver it to his office",
          "Refund a deposit"
        ],
        answer: 0,
        explanation: "女性の We'll phone you when it arrives が根拠。phone が Telephone に言い換えられている。"
      }
    ]
  },
  {
    id: "s5p3-03",
    title: "会話 3",
    audio: [
      { speaker: "W", text: "David, management wants us to run a customer satisfaction survey before the end of the quarter." },
      { speaker: "M", text: "Okay. Are we sending it by e-mail, or posting it on the website?" },
      { speaker: "W", text: "Both, I think. But first we need to decide what to ask. Could you draft about ten questions by Wednesday?" },
      { speaker: "M", text: "Sure. Should I focus on the delivery service? We've had a few complaints about late shipments lately." },
      { speaker: "W", text: "Good idea. I'll book a meeting room so we can review your draft together on Thursday." }
    ],
    translation: "女性:デイビッド、経営陣が四半期末までに顧客満足度調査を実施したいそうよ。\n男性:分かりました。メールで送るんですか、それともウェブサイトに掲載するんですか?\n女性:両方だと思う。でもまず何を聞くか決めないと。水曜までに10問ほど下書きしてもらえる?\n男性:いいですよ。配送サービスに絞りましょうか? 最近、配達の遅れについて苦情がいくつかありましたし。\n女性:いい考えね。会議室を予約して、木曜にあなたの下書きを一緒に確認しましょう。",
    questions: [
      {
        q: "What are the speakers planning to do?",
        choices: [
          "Redesign the website",
          "Launch a new product",
          "Conduct a customer survey",
          "Hire delivery staff"
        ],
        answer: 2,
        explanation: "女性の run a customer satisfaction survey が根拠。run a survey が Conduct a survey に言い換えられている。ウェブサイトは送付手段の話でありひっかけ。"
      },
      {
        q: "What does the man suggest focusing on?",
        choices: [
          "The delivery service",
          "Product pricing",
          "Store locations",
          "Staff training"
        ],
        answer: 0,
        explanation: "男性の Should I focus on the delivery service? が根拠。遅配への苦情を理由に挙げている。"
      },
      {
        q: "What does the woman say she will do?",
        choices: [
          "Send out the survey",
          "Reserve a meeting room",
          "Contact customers directly",
          "Approve a budget"
        ],
        answer: 1,
        explanation: "女性の I'll book a meeting room が根拠。book が Reserve に言い換えられている。"
      }
    ]
  },
  {
    id: "s5p3-04",
    title: "会話 4",
    audio: [
      { speaker: "M", text: "Hello, I'd like to book a shuttle to the airport for tomorrow morning. My flight leaves at nine." },
      { speaker: "W", text: "Certainly. For a nine o'clock flight, I'd recommend a pickup at six. Traffic can be heavy on the highway." },
      { speaker: "M", text: "Six sounds early, but better safe than sorry. I'm at the Fairmont Apartments on Cedar Street." },
      { speaker: "W", text: "Got it. The fare is a flat twenty-five dollars, payable to the driver. Cash or card?" },
      { speaker: "M", text: "Card, please." },
      { speaker: "W", text: "Perfect. Your driver will text you when he's five minutes away." }
    ],
    translation: "男性:もしもし、明日の朝、空港行きのシャトルを予約したいのですが。飛行機は9時発です。\n女性:承知しました。9時の便でしたら、6時のお迎えをおすすめします。幹線道路は渋滞することがありますので。\n男性:6時は早いですが、念のためですね。シダー通りのフェアモント・アパートメンツにいます。\n女性:かしこまりました。料金は一律25ドルで、運転手にお支払いください。現金かカードか、どちらになさいますか?\n男性:カードでお願いします。\n女性:承知しました。運転手が5分前になったらショートメッセージをお送りします。",
    questions: [
      {
        q: "Why is the man calling?",
        choices: [
          "To confirm a flight time",
          "To change a hotel booking",
          "To report a delay",
          "To reserve airport transportation"
        ],
        answer: 3,
        explanation: "男性の I'd like to book a shuttle to the airport が根拠。book a shuttle to the airport を reserve airport transportation に言い換えている。フライト時刻は条件の説明でありひっかけ。"
      },
      {
        q: "Why does the woman recommend an early pickup?",
        choices: [
          "The flight might be moved up.",
          "The airport is far away.",
          "The roads may be congested.",
          "Check-in closes early."
        ],
        answer: 2,
        explanation: "女性の Traffic can be heavy on the highway(幹線道路が渋滞しうる)が根拠。heavy traffic が congested roads に言い換えられている。"
      },
      {
        q: "How will the driver contact the man?",
        choices: [
          "By calling the front desk",
          "By sending a text message",
          "By ringing the doorbell",
          "By e-mailing him"
        ],
        answer: 1,
        explanation: "女性の Your driver will text you が根拠。text が sending a text message に言い換えられている。"
      }
    ]
  },
  {
    id: "s5p3-05",
    title: "会話 5(3人の会話:女性2人+男性1人)",
    audio: [
      { speaker: "W", text: "Sam, Nina — we need to finalize the plans for the company's tenth anniversary party next month. I've already booked the rooftop hall downtown." },
      { speaker: "M", text: "Nice choice, Grace. How many people are we expecting?" },
      { speaker: "W", text: "Around eighty, including partners. Nina, weren't you going to look into a photographer?" },
      { speaker: "W2", text: "Yes. I contacted two studios. Brightside is cheaper, but Lumen has much better reviews and can stay the whole evening." },
      { speaker: "M", text: "I'd go with Lumen, then — the photos will be around for years. What about catering?" },
      { speaker: "W", text: "I'll handle the catering myself. Nina, could you confirm Lumen by Friday? And Sam, please send out the invitations." }
    ],
    translation: "グレース(女性1):サム、ニーナ——来月の会社の10周年パーティーの計画を固めないと。ダウンタウンのルーフトップホールはもう予約したわ。\nサム(男性):いい選択だね、グレース。何人くらい来る予定?\nグレース:パートナー企業も含めて80人くらい。ニーナ、あなたカメラマンを調べてくれる予定だったよね?\nニーナ(女性2):ええ。2つのスタジオに連絡したの。ブライトサイドの方が安いけど、ルーメンの方が口コミがずっと良くて、夜通し対応してくれるわ。\nサム:じゃあルーメンにしよう——写真は何年も残るからね。ケータリングはどう?\nグレース:ケータリングは私が自分で手配するわ。ニーナ、金曜までにルーメンを確定してくれる? それからサム、招待状を送っておいて。",
    questions: [
      {
        q: "What are the speakers planning?",
        choices: [
          "An anniversary celebration",
          "A product launch",
          "A training retreat",
          "A press conference"
        ],
        answer: 0,
        explanation: "グレースの the company's tenth anniversary party が根拠。anniversary party が anniversary celebration に言い換えられている。"
      },
      {
        q: "What does Nina say about the Lumen studio?",
        choices: [
          "It is the cheapest option.",
          "It is fully booked.",
          "It is located downtown.",
          "It has highly rated reviews."
        ],
        answer: 3,
        explanation: "ニーナ(2人目の女性)の Lumen has much better reviews が根拠。安いのはブライトサイドなので(A)はひっかけ。3人の会話では発言者(誰が言ったか)を追うことが重要。"
      },
      {
        q: "What will Sam do?",
        choices: [
          "Confirm the photographer",
          "Arrange the catering",
          "Send the invitations",
          "Reserve the venue"
        ],
        answer: 2,
        explanation: "グレースが Sam, please send out the invitations と依頼している。カメラマン確定はニーナ、ケータリングはグレース、会場は予約済み、と役割を切り分ける。"
      }
    ]
  },
  {
    id: "s5p3-06",
    title: "会話 6",
    audio: [
      { speaker: "W", text: "Hi, I'm a member at your gym, and I'll be traveling abroad for two months. Can I pause my membership instead of canceling it?" },
      { speaker: "M", text: "Absolutely. We offer a membership freeze for up to three months. There's a small fee of five dollars a month to hold your spot." },
      { speaker: "W", text: "That's reasonable. When can it start?" },
      { speaker: "M", text: "It can begin on the first of next month. Just come by the front desk with your membership card, and we'll process it." },
      { speaker: "W", text: "Great. And can I upgrade to the plan that includes the pool when I get back?" },
      { speaker: "M", text: "Of course — just let us know then, and we'll adjust your plan." }
    ],
    translation: "女性:こんにちは、こちらのジムの会員なのですが、2か月間海外に行くことになって。解約ではなく、会員資格を一時停止できますか?\n男性:もちろんです。最長3か月まで会員資格の凍結ができます。席を確保しておくために、月5ドルのわずかな料金がかかります。\n女性:妥当ですね。いつから始められますか?\n男性:来月の1日から開始できます。会員証を持って受付にお越しいただければ、手続きします。\n女性:助かります。それと、戻ってきたらプール付きのプランにアップグレードできますか?\n男性:もちろんです——その時にお知らせいただければ、プランを変更します。",
    questions: [
      {
        q: "Why is the woman calling?",
        choices: [
          "To cancel her membership",
          "To temporarily suspend her membership",
          "To file a complaint",
          "To sign up for a class"
        ],
        answer: 1,
        explanation: "女性の Can I pause my membership? が根拠。pause=temporarily suspend への言い換え。本人が『解約ではなく(instead of canceling)』と明言しているので(A)はひっかけ。"
      },
      {
        q: "What does the man ask the woman to bring to the front desk?",
        choices: [
          "Her membership card",
          "A photo ID",
          "A payment receipt",
          "A doctor's note"
        ],
        answer: 0,
        explanation: "男性の come by the front desk with your membership card が根拠。"
      },
      {
        q: "What does the woman say she wants to do later?",
        choices: [
          "Bring a guest",
          "Extend the freeze",
          "Change gyms",
          "Add pool access to her plan"
        ],
        answer: 3,
        explanation: "女性の upgrade to the plan that includes the pool が根拠。プールを含むプランへの変更=pool access の追加。"
      }
    ]
  },
  {
    id: "s5p3-07",
    title: "会話 7(3人の会話:男性2人+女性1人)",
    audio: [
      { speaker: "M", text: "Diane, Marcus — the trade show opens at nine tomorrow, so we should finish setting up the booth tonight." },
      { speaker: "W", text: "The banners just arrived, but the product samples are still back at the hotel. Someone needs to bring them over." },
      { speaker: "M2", text: "I can grab them, Diane. I'm driving to the hotel anyway to pick up the brochures." },
      { speaker: "W", text: "Perfect, Marcus. Leo, can you set up the display screen and test the demo video?" },
      { speaker: "M", text: "Sure. I'll make sure it's running before we leave tonight." },
      { speaker: "W", text: "Great. I'll arrange the tables and chairs. Let's aim to be done by eight." }
    ],
    translation: "レオ(男性1):ダイアン、マーカス——展示会は明日9時開場だから、今夜のうちにブースの設営を終わらせよう。\nダイアン(女性):バナーは今届いたけど、製品サンプルはまだホテルにあるわ。誰かが持ってこないと。\nマーカス(男性2):僕が取ってくるよ、ダイアン。どのみちパンフレットを取りにホテルに車で行くから。\nダイアン:助かるわ、マーカス。レオ、ディスプレイ画面をセットして、デモ動画をテストしてもらえる?\nレオ:いいよ。今夜出る前に動くか確認しておく。\nダイアン:ありがとう。私はテーブルと椅子を並べるわ。8時までに終わらせましょう。",
    questions: [
      {
        q: "When does the trade show open?",
        choices: [
          "At eight",
          "At nine",
          "At ten",
          "At noon"
        ],
        answer: 1,
        explanation: "レオの the trade show opens at nine tomorrow が根拠。8時は『設営を終わらせたい目標時刻』なのでひっかけ。数字のすり替えに注意。"
      },
      {
        q: "What does Marcus offer to do?",
        choices: [
          "Set up the display screen",
          "Arrange the tables",
          "Bring the product samples",
          "Print the brochures"
        ],
        answer: 2,
        explanation: "2人目の男性(マーカス)の I can grab them(=製品サンプルを取ってくる)が申し出。画面設営はレオ、テーブルはダイアンの担当。3人の会話では発言者の特定が問われる。"
      },
      {
        q: "What will Leo do?",
        choices: [
          "Test the demo video",
          "Deliver the banners",
          "Confirm the schedule",
          "Greet the visitors"
        ],
        answer: 0,
        explanation: "ダイアンがレオに set up the display screen and test the demo video を頼み、レオが Sure と応じている。"
      }
    ]
  },
  {
    id: "s5p3-08",
    graphicKind: "schedule",
    title: "会話 8(図表問題)",
    graphic: "Riverbend Brewery — Saturday Tours\n1. 10:00  Standard Tour\n2. 11:30  Standard Tour\n3. 13:00  Tasting Tour\n4. 15:00  Master Brewer Tour",
    audio: [
      { speaker: "W", text: "Riverbend Brewery, how can I help you?" },
      { speaker: "M", text: "Hi, I'd like to book a tour for this Saturday. I'm especially interested in one that includes a tasting." },
      { speaker: "W", text: "We have a couple of options. Are you free in the morning or the afternoon?" },
      { speaker: "M", text: "The afternoon works better. I have a lunch meeting until twelve thirty." },
      { speaker: "W", text: "In that case, the early afternoon tour would be perfect. It includes a guided tasting of four of our beers." },
      { speaker: "M", text: "Sounds great. Could you book two spots for me?" }
    ],
    translation: "【図表】リバーベンド醸造所・土曜のツアー/1. 10:00 スタンダードツアー/2. 11:30 スタンダードツアー/3. 13:00 テイスティングツアー/4. 15:00 マスターブリュワーツアー\n女性:リバーベンド醸造所です。ご用件を承ります。\n男性:こんにちは、今週土曜のツアーを予約したいのですが。特に、試飲が含まれるものに興味があります。\n女性:いくつか選択肢がございます。午前と午後、どちらがご都合よろしいですか?\n男性:午後の方がいいですね。12時半までランチミーティングがあるので。\n女性:でしたら、午後の早い時間のツアーがぴったりです。4種類のビールのガイド付き試飲が含まれます。\n男性:いいですね。2名分予約してもらえますか?",
    questions: [
      {
        q: "Look at the graphic. Which tour will the man most likely take?",
        choices: [
          "The 10:00 tour",
          "The 11:30 tour",
          "The 1:00 tour",
          "The 3:00 tour"
        ],
        answer: 2,
        explanation: "図表問題。音声の『試飲を希望+午後がよい(12時半以降)』と図表を突き合わせる。試飲付きで午後早めなのは13:00のTasting Tour。15:00はMaster Brewer Tourで試飲の説明がなくひっかけ。"
      },
      {
        q: "Why is the man unavailable in the morning?",
        choices: [
          "He has a meeting.",
          "He works on Saturdays.",
          "He is traveling.",
          "The morning tours are full."
        ],
        answer: 0,
        explanation: "男性の I have a lunch meeting until twelve thirty が根拠。午前中は会議で埋まっている。"
      },
      {
        q: "How many spots does the man want to book?",
        choices: [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        answer: 1,
        explanation: "男性の Could you book two spots for me? が根拠。『4種類のビール』の four は試飲の内容でありひっかけ。"
      }
    ]
  },
  {
    id: "s5p3-09",
    title: "会話 9(意図問題)",
    audio: [
      { speaker: "W", text: "Kevin, I'm really sorry, but my last train home is at nine. Is there any way you could close the store tonight?" },
      { speaker: "M", text: "I've got tickets to the concert tonight." },
      { speaker: "W", text: "Oh, that's right — I completely forgot. Never mind, I'll ask Sophia instead." },
      { speaker: "M", text: "Actually, the concert doesn't start until eight thirty. I can stay until eight and help you cash out before I go." },
      { speaker: "W", text: "That would be a huge help. Thank you, Kevin." }
    ],
    translation: "女性:ケビン、本当に申し訳ないんだけど、家に帰る終電が9時なの。今夜、店を閉めてもらうことってできる?\n男性:今夜はコンサートのチケットを持ってるんだ。\n女性:あ、そうだった——すっかり忘れてた。気にしないで、代わりにソフィアに頼むわ。\n男性:いや、コンサートは8時半まで始まらないから。8時までいて、帰る前にレジ締めを手伝えるよ。\n女性:すごく助かる。ありがとう、ケビン。",
    questions: [
      {
        q: "What does the woman ask the man to do?",
        choices: [
          "Drive her home",
          "Work Sophia's shift",
          "Fix a cash register",
          "Close the store tonight"
        ],
        answer: 3,
        explanation: "女性の could you close the store tonight? が根拠。終電の都合で自分が閉店まで残れないため頼んでいる。"
      },
      {
        q: "What does the man imply when he says, \"I've got tickets to the concert tonight\"?",
        choices: [
          "He cannot afford to help.",
          "He may be unable to stay late.",
          "He wants to invite the woman.",
          "He is leaving the company."
        ],
        answer: 1,
        explanation: "意図問題。『今夜コンサートのチケットがある』は文字通りの情報提供ではなく、『(予定があるので)遅くまで残るのは難しいかもしれない』という含意。女性が Never mind と引き下がっていることからも読み取れる。"
      },
      {
        q: "What does the man finally agree to do?",
        choices: [
          "Stay for part of the evening",
          "Cancel his plans",
          "Find a replacement",
          "Close the store by himself"
        ],
        answer: 0,
        explanation: "男性の I can stay until eight and help you cash out が根拠。8時まで=夜の一部だけ残る。予定を取りやめるわけではないので(B)は誤り。"
      }
    ]
  },
  {
    id: "s5p3-10",
    title: "会話 10",
    audio: [
      { speaker: "M", text: "Hi, the screen on my phone cracked when I dropped it. Can you repair it here?" },
      { speaker: "W", text: "We can. Do you know if your phone is still under warranty? If so, the repair might be free." },
      { speaker: "M", text: "I bought it about fourteen months ago." },
      { speaker: "W", text: "Ah, our standard warranty is twelve months, so unfortunately the repair won't be covered. A screen replacement is eighty dollars." },
      { speaker: "M", text: "I see. How long will it take?" },
      { speaker: "W", text: "About two hours. If you leave it with us now, it'll be ready by four this afternoon." }
    ],
    translation: "男性:すみません、落としてしまって携帯の画面が割れたんです。ここで修理できますか?\n女性:できますよ。お使いの携帯はまだ保証期間内かご存じですか? もしそうなら、修理は無料になるかもしれません。\n男性:14か月ほど前に買いました。\n女性:ああ、当店の標準保証は12か月なので、残念ながら修理は対象外です。画面交換は80ドルになります。\n男性:そうですか。どのくらいかかりますか?\n女性:2時間ほどです。今お預けいただければ、今日の午後4時までにできあがります。",
    questions: [
      {
        q: "What is the problem with the man's phone?",
        choices: [
          "The battery drains quickly.",
          "The screen is broken.",
          "It will not turn on.",
          "It is missing."
        ],
        answer: 1,
        explanation: "男性の the screen on my phone cracked(画面が割れた)が根拠。cracked が broken に言い換えられている。"
      },
      {
        q: "Why is the repair NOT free?",
        choices: [
          "He lost the receipt.",
          "The damage was intentional.",
          "The warranty has expired.",
          "The model is discontinued."
        ],
        answer: 2,
        explanation: "標準保証は12か月だが、男性は購入から14か月経過しているため保証切れ。数字(14か月>12か月)の突き合わせが得点のカギ。"
      },
      {
        q: "When will the phone be ready?",
        choices: [
          "In thirty minutes",
          "Tomorrow morning",
          "In two days",
          "By this afternoon"
        ],
        answer: 3,
        explanation: "女性の it'll be ready by four this afternoon が根拠。所要時間の『2時間』はひっかけで、設問は完成時刻を問うている。"
      }
    ]
  },
  {
    id: "s5p3-11",
    title: "会話 11",
    audio: [
      { speaker: "W", text: "Hi, I have a reservation for a compact car under the name Foster." },
      { speaker: "M", text: "Let me find that... Yes, a compact for three days. I have some good news — we've run out of compacts, so we'll upgrade you to a midsize at no extra charge." },
      { speaker: "W", text: "Oh, that's fine with me. Does it come with a navigation system?" },
      { speaker: "M", text: "It does, and unlimited mileage is included. I'll just need your driver's license and a credit card." },
      { speaker: "W", text: "Here you go. One more thing — can I return the car at your downtown branch instead of here at the airport?" },
      { speaker: "M", text: "Yes, but there's a fifteen-dollar drop-off fee for returning it at a different location." }
    ],
    translation: "女性:こんにちは、フォスターの名前でコンパクトカーを予約しています。\n男性:お調べします……はい、3日間のコンパクトですね。良いお知らせがあります——コンパクトが出払ってしまったので、追加料金なしでミドルサイズにアップグレードいたします。\n女性:あら、それは構いませんよ。カーナビは付いていますか?\n男性:付いています。走行距離無制限も含まれます。運転免許証とクレジットカードだけお願いします。\n女性:どうぞ。もう一つ——ここ空港ではなく、ダウンタウン店で車を返却できますか?\n男性:できますが、別の場所での返却には15ドルの乗り捨て料金がかかります。",
    questions: [
      {
        q: "Why will the woman receive an upgrade?",
        choices: [
          "She is a frequent customer.",
          "No compact cars are available.",
          "She reserved online.",
          "It is a special promotion."
        ],
        answer: 1,
        explanation: "男性の we've run out of compacts, so we'll upgrade you が根拠。run out of=在庫切れ=No compact cars are available への言い換え。"
      },
      {
        q: "What does the man ask the woman for?",
        choices: [
          "A booking confirmation",
          "A cash deposit",
          "Proof of insurance",
          "Her driver's license"
        ],
        answer: 3,
        explanation: "男性の I'll just need your driver's license and a credit card が根拠。"
      },
      {
        q: "What will happen if the woman returns the car downtown?",
        choices: [
          "She will get a discount.",
          "She must refuel it.",
          "She will be charged a fee.",
          "The rental will be extended."
        ],
        answer: 2,
        explanation: "男性の there's a fifteen-dollar drop-off fee for returning it at a different location が根拠。別店舗返却で料金が発生する。"
      }
    ]
  },
  {
    id: "s5p3-12",
    graphicKind: "list",
    title: "会話 12(図表問題)",
    graphic: "Print Package Prices — QuickPrint\n1. 100 flyers — $40\n2. 250 flyers — $85\n3. 500 flyers — $150\n4. 1,000 flyers — $260",
    audio: [
      { speaker: "W", text: "QuickPrint, how can I help you today?" },
      { speaker: "M", text: "Hi, I need to order flyers for a community fair. We're expecting about four hundred people." },
      { speaker: "W", text: "We have a few package sizes. I'd suggest ordering a few extra in case more people show up." },
      { speaker: "M", text: "Good idea. Let's go with the package that gives us five hundred, then." },
      { speaker: "W", text: "Great choice. Will you need them by this Friday?" },
      { speaker: "M", text: "The fair is in two weeks, so there's no rush. But can you use recycled paper?" }
    ],
    translation: "【図表】印刷パッケージ料金・クイックプリント/1. チラシ100枚 40ドル/2. チラシ250枚 85ドル/3. チラシ500枚 150ドル/4. チラシ1,000枚 260ドル\n女性:クイックプリントです。本日はどのようなご用件でしょうか?\n男性:こんにちは、地域のお祭り用にチラシを注文したいんです。400人ほど来る見込みです。\n女性:いくつかのパッケージサイズがございます。もっと来場者が増える場合に備えて、少し多めのご注文をおすすめします。\n男性:いい考えですね。では500枚になるパッケージにしましょう。\n女性:良いお選びです。今週金曜までに必要ですか?\n男性:お祭りは2週間後なので、急ぎではありません。ただ、再生紙は使えますか?",
    questions: [
      {
        q: "Look at the graphic. How much will the man most likely pay?",
        choices: [
          "$40",
          "$85",
          "$150",
          "$260"
        ],
        answer: 2,
        explanation: "図表問題。男性は『500枚になるパッケージ』を選んでいる。図表で500 flyersは150ドル。来場見込みの400という数字に引きずられないよう、実際に注文した枚数(500)で料金を読む。"
      },
      {
        q: "What event are the flyers for?",
        choices: [
          "A job fair",
          "A community fair",
          "A grand opening",
          "A charity concert"
        ],
        answer: 1,
        explanation: "男性の flyers for a community fair が根拠。fair(お祭り/催し)の種類を取り違えないこと。"
      },
      {
        q: "What does the man ask about?",
        choices: [
          "Recycled paper",
          "Same-day delivery",
          "A bulk discount",
          "Color printing"
        ],
        answer: 0,
        explanation: "男性の can you use recycled paper? が根拠。金曜の話は納期の確認で、男性は『急がない』と答えているのでひっかけ。"
      }
    ]
  },
  {
    id: "s5p3-13",
    title: "会話 13",
    audio: [
      { speaker: "W", text: "Hi, Ron. I took a client to lunch yesterday and paid for it myself. How do I get reimbursed?" },
      { speaker: "M", text: "You'll use the expense app on the company portal. Just take a photo of the receipt and upload it under 'Client Meals.'" },
      { speaker: "W", text: "Do I need my manager's approval?" },
      { speaker: "M", text: "Yes. Once you submit it, your manager gets a notification to approve it. After that, finance processes the payment in the next pay cycle." },
      { speaker: "W", text: "Got it. And what if I lose a receipt?" },
      { speaker: "M", text: "Then you'd have to fill out a missing-receipt form, but it's much easier to just hold on to the receipt." }
    ],
    translation: "女性:こんにちは、ロン。昨日クライアントをランチに連れて行って、自分で払ったの。どうやって精算すればいい?\n男性:会社ポータルの経費アプリを使うんだ。レシートの写真を撮って、『クライアント飲食(Client Meals)』の項目にアップロードするだけだよ。\n女性:上司の承認は必要?\n男性:うん。提出すると、上司に承認の通知が届く。その後、経理が次の給与サイクルで支払いを処理するんだ。\n女性:分かった。もしレシートをなくしたら?\n男性:その場合はレシート紛失フォームを書かないといけないけど、レシートを取っておく方がずっと楽だよ。",
    questions: [
      {
        q: "What does the woman want to do?",
        choices: [
          "Book a client lunch",
          "Get reimbursed for an expense",
          "Update her contact details",
          "Request a pay raise"
        ],
        answer: 1,
        explanation: "女性の How do I get reimbursed?(どう精算する?)が根拠。立て替えたランチ代の払い戻しを求めている。"
      },
      {
        q: "According to the man, what must happen after the woman submits her request?",
        choices: [
          "Her manager must approve it.",
          "She must call finance.",
          "She must print a form.",
          "She must wait a full month."
        ],
        answer: 0,
        explanation: "男性の your manager gets a notification to approve it が根拠。提出後にまず上司の承認が必要。"
      },
      {
        q: "What does the man recommend?",
        choices: [
          "Using a company credit card",
          "Submitting expenses weekly",
          "Asking finance directly",
          "Keeping the receipt"
        ],
        answer: 3,
        explanation: "男性の it's much easier to just hold on to the receipt が根拠。hold on to=Keeping(取っておく)への言い換え。"
      }
    ]
  }
];
