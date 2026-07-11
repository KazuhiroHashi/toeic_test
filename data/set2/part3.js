// セット2 Part 3: 会話問題(13会話39問。3人の会話×2、図表問題×2、意図問題を含む)
window.TOEIC_DATA_2 = window.TOEIC_DATA_2 || {};
window.TOEIC_DATA_2.part3 = [
  {
    id: "s2p3-01",
    title: "会話 1",
    audio: [
      { speaker: "W", text: "Daniel, have you had a chance to look at the venue options for the product launch? We need to decide by Friday." },
      { speaker: "M", text: "I visited two of them yesterday. The riverside hall is beautiful, but it only holds about eighty people, and we're expecting closer to one hundred and twenty." },
      { speaker: "W", text: "That's a problem. What about the conference center downtown?" },
      { speaker: "M", text: "That one's big enough, but it's booked on our date. I'll ask if they have any nearby partner venues we could use instead." }
    ],
    translation: "女性:ダニエル、製品発表会の会場候補を見てもらえた? 金曜までに決めないといけないの。\n男性:昨日、2つ見てきたよ。リバーサイドホールはきれいなんだけど、80人ほどしか入らなくて。うちは120人近く来る見込みだよね。\n女性:それは困るわね。ダウンタウンのカンファレンスセンターはどう?\n男性:そこは十分な広さなんだけど、うちの日程では予約が埋まってるんだ。近くに使える提携会場がないか聞いてみるよ。",
    questions: [
      {
        q: "What event are the speakers planning?",
        choices: [
          "A product launch",
          "A job fair",
          "A retirement party",
          "A training workshop"
        ],
        answer: 0,
        explanation: "冒頭の the venue options for the product launch が根拠。何のイベントかを問う設問。"
      },
      {
        q: "What is the problem with the riverside hall?",
        choices: [
          "It is too expensive.",
          "It is too far away.",
          "Its capacity is too small.",
          "It is closed for repairs."
        ],
        answer: 2,
        explanation: "男性の it only holds about eighty people ... expecting closer to one hundred and twenty(80人しか入らないが120人来る)が根拠。capacity(収容人数)が小さい。"
      },
      {
        q: "What does the man say he will do?",
        choices: [
          "Reduce the guest list",
          "Ask about other venues",
          "Postpone the event",
          "Negotiate a lower price"
        ],
        answer: 1,
        explanation: "最後の I'll ask if they have any nearby partner venues(近くの提携会場を聞いてみる)が根拠。"
      }
    ]
  },
  {
    id: "s2p3-02",
    title: "会話 2",
    audio: [
      { speaker: "M", text: "Good morning. I'd like to open a business checking account for my new bakery." },
      { speaker: "W", text: "Congratulations! I can help with that. You'll need a photo ID and your business registration certificate. Do you have both with you?" },
      { speaker: "M", text: "I have my driver's license, but I left the registration at the shop. Can I bring it this afternoon?" },
      { speaker: "W", text: "Of course. I'll start the application now, and you can just drop off the certificate later. We'll have the account ready by tomorrow." }
    ],
    translation: "男性:おはようございます。新しく開いたパン屋のビジネス用当座預金口座を開設したいのですが。\n女性:おめでとうございます! お手伝いします。写真付き身分証明書と事業登録証が必要です。両方お持ちですか?\n男性:運転免許証はありますが、登録証は店に置いてきてしまって。午後に持ってきてもいいですか?\n女性:もちろんです。今、申請を始めておきますので、後で登録証を届けてくださればけっこうです。口座は明日までに準備できます。",
    questions: [
      {
        q: "What does the man want to do?",
        choices: [
          "Apply for a loan",
          "Open a bank account",
          "Report a lost card",
          "Exchange currency"
        ],
        answer: 1,
        explanation: "冒頭の open a business checking account が根拠。銀行口座の開設。"
      },
      {
        q: "What problem does the man mention?",
        choices: [
          "He forgot a document.",
          "He lost his ID.",
          "He is running late.",
          "His card was declined."
        ],
        answer: 0,
        explanation: "男性の I left the registration at the shop(登録証を店に置いてきた)が根拠。書類の忘れ物。"
      },
      {
        q: "What does the woman say she will do now?",
        choices: [
          "Print a certificate",
          "Call the man's shop",
          "Begin the application",
          "Close the account"
        ],
        answer: 2,
        explanation: "女性の I'll start the application now(今、申請を始める)が根拠。"
      }
    ]
  },
  {
    id: "s2p3-03",
    title: "会話 3",
    audio: [
      { speaker: "W", text: "Hi, I'm calling about the running shoes I ordered last week. The tracking says they were delivered, but I never received them." },
      { speaker: "M", text: "I'm sorry to hear that. Let me look into it... It seems the package was left at your building's front desk. Have you checked there?" },
      { speaker: "W", text: "Oh, I didn't realize they'd leave it there. I'll check with the desk. But if it's not there, what happens?" },
      { speaker: "M", text: "If it's missing, just call us back and we'll ship a replacement at no charge and open an investigation with the courier." }
    ],
    translation: "女性:もしもし、先週注文したランニングシューズの件でお電話しました。追跡では配達済みになっているのに、受け取っていないんです。\n男性:それは申し訳ありません。お調べします……お客様のビルのフロントに預けられたようです。そちらは確認されましたか?\n女性:あら、そこに置くとは知りませんでした。フロントに聞いてみます。でも、もしなかったらどうなりますか?\n男性:もし見つからなければ、折り返しお電話ください。無料で代替品を発送し、配送業者に調査を依頼します。",
    questions: [
      {
        q: "Why is the woman calling?",
        choices: [
          "To change her order",
          "To report a missing package",
          "To ask about a refund policy",
          "To cancel a subscription"
        ],
        answer: 1,
        explanation: "配達済みなのに受け取っていない=届いていない荷物の報告。missing package への言い換え。"
      },
      {
        q: "What does the man suggest the woman do?",
        choices: [
          "Check the front desk",
          "Wait another day",
          "Contact the courier herself",
          "Reorder the shoes"
        ],
        answer: 0,
        explanation: "男性の the package was left at your building's front desk. Have you checked there? が根拠。"
      },
      {
        q: "What will happen if the package cannot be found?",
        choices: [
          "The woman will receive a refund.",
          "A replacement will be sent for free.",
          "The order will be canceled.",
          "The woman must file a police report."
        ],
        answer: 1,
        explanation: "最後の we'll ship a replacement at no charge(無料で代替品を発送)が根拠。返金ではなく代替品。"
      }
    ]
  },
  {
    id: "s2p3-04",
    title: "会話 4",
    audio: [
      { speaker: "M", text: "Sophie, the printer in the design room is showing an error again. I have to print the client proofs before three o'clock." },
      { speaker: "W", text: "That printer has been unreliable all month. Have you tried the one in the finance department?" },
      { speaker: "M", text: "I didn't know we were allowed to use that one." },
      { speaker: "W", text: "We are, as long as it's for urgent jobs. Just let Kevin know so he can add you to the approved user list. I'll message him for you right now." }
    ],
    translation: "男性:ソフィー、デザイン室のプリンターがまたエラーを出しているんだ。3時までにクライアント用の校正刷りを印刷しないといけないのに。\n女性:あのプリンター、今月ずっと調子が悪いのよね。財務部のプリンターは試した?\n男性:あれを使っていいとは知らなかったよ。\n女性:急ぎの仕事なら使えるわ。ケヴィンに一言伝えて、承認済みユーザーに追加してもらって。今すぐ私が彼にメッセージを送っておくわ。",
    questions: [
      {
        q: "What is the man's problem?",
        choices: [
          "A printer is not working properly.",
          "He missed a client meeting.",
          "He cannot find a document.",
          "His computer is too slow."
        ],
        answer: 0,
        explanation: "冒頭の the printer ... is showing an error again が根拠。プリンターの不具合。"
      },
      {
        q: "What does the woman suggest?",
        choices: [
          "Rescheduling the deadline",
          "Using another department's printer",
          "Calling a repair service",
          "Printing at a nearby shop"
        ],
        answer: 1,
        explanation: "女性の Have you tried the one in the finance department?(財務部のを試した?)が根拠。"
      },
      {
        q: "What does the woman offer to do?",
        choices: [
          "Fix the printer herself",
          "Print the proofs for him",
          "Send a message to Kevin",
          "Contact the client"
        ],
        answer: 2,
        explanation: "最後の I'll message him for you right now(今すぐケヴィンにメッセージを送る)が根拠。"
      }
    ]
  },
  {
    id: "s2p3-05",
    title: "会話 5(3人の会話:女性2人+男性1人)",
    audio: [
      { speaker: "W", text: "Okay, team, the community festival booth is next Saturday. Let's confirm who's doing what. Ryan, are you still handling the setup?" },
      { speaker: "M", text: "Yes, I'll get there at seven to put up the tent and tables. I could use one more person to help carry the banners, though." },
      { speaker: "W2", text: "I can come early and help with that, Ryan. I'm bringing the sample products anyway." },
      { speaker: "W", text: "Perfect, Nina. And I'll handle registration and collect visitors' contact information at the booth." },
      { speaker: "M", text: "Sounds good. Oh, should someone bring a cash box? We're selling the mugs this year." },
      { speaker: "W", text: "Good catch. I'll pick one up from the office on Friday." }
    ],
    translation: "女性1:さて、みんな。地域フェスティバルのブースは来週土曜よ。誰が何を担当するか確認しましょう。ライアン、設営は引き続きお願いできる?\n男性(ライアン):うん、7時に着いてテントとテーブルを立てるよ。ただ、バナーを運ぶのにもう1人手伝いが欲しいな。\n女性2(ニーナ):私が早く来て手伝えるわ、ライアン。どのみちサンプル商品を持っていくし。\n女性1:完璧ね、ニーナ。私はブースで受付をして、来場者の連絡先を集めるわ。\n男性:いいね。あ、誰かキャッシュボックスを持ってくるべきかな? 今年はマグカップを売るから。\n女性1:よく気づいたわ。金曜にオフィスから持ってくるわね。",
    questions: [
      {
        q: "What are the speakers preparing for?",
        choices: [
          "A festival booth",
          "A store opening",
          "A board meeting",
          "A training day"
        ],
        answer: 0,
        explanation: "冒頭の the community festival booth is next Saturday が根拠。何の準備かを問う設問。"
      },
      {
        q: "What does Nina offer to do?",
        choices: [
          "Register visitors",
          "Help carry the banners",
          "Set up the tent alone",
          "Buy a cash box"
        ],
        answer: 1,
        explanation: "2人目の女性(ニーナ)の I can come early and help with that(=バナー運びを手伝う)が根拠。3人の会話は発言者の特定が問われる。"
      },
      {
        q: "What will the first woman do on Friday?",
        choices: [
          "Print the banners",
          "Bring sample products",
          "Get a cash box from the office",
          "Meet the festival organizers"
        ],
        answer: 2,
        explanation: "最後の I'll pick one up(=キャッシュボックス)from the office on Friday が根拠。サンプル商品はニーナの担当でひっかけ。"
      }
    ]
  },
  {
    id: "s2p3-06",
    title: "会話 6",
    audio: [
      { speaker: "W", text: "Thanks for coming in for the interview, Mr. Patel. I see you've spent five years in hotel management. What made you apply for this operations role with us?" },
      { speaker: "M", text: "I've enjoyed hospitality, but I'm looking for a position where I can use more of my data analysis skills. Your company is known for its data-driven approach." },
      { speaker: "W", text: "That's great to hear. This role does involve a lot of reporting. One thing to note — it requires occasional travel to our regional offices. Would that be an issue?" },
      { speaker: "M", text: "Not at all. I'm happy to travel." }
    ],
    translation: "女性:面接にお越しいただきありがとうございます、パテルさん。ホテル管理で5年のご経験がおありですね。なぜ当社の業務職に応募されたのですか?\n男性:接客業は楽しかったのですが、もっと自分のデータ分析スキルを活かせる職を探しています。御社はデータ重視のアプローチで知られていますから。\n女性:それは嬉しいですね。この職は確かに報告業務が多いです。一点、地方オフィスへの出張が時々あります。問題ないですか?\n男性:まったく問題ありません。喜んで出張します。",
    questions: [
      {
        q: "Where most likely does the conversation take place?",
        choices: [
          "At a job interview",
          "At a hotel check-in",
          "At a training session",
          "At a client meeting"
        ],
        answer: 0,
        explanation: "Thanks for coming in for the interview と応募動機のやり取りから、就職面接だと分かる。"
      },
      {
        q: "Why does the man want to change jobs?",
        choices: [
          "To earn a higher salary",
          "To use his data analysis skills",
          "To work closer to home",
          "To manage a larger team"
        ],
        answer: 1,
        explanation: "男性の I'm looking for a position where I can use more of my data analysis skills が根拠。"
      },
      {
        q: "What does the woman say about the position?",
        choices: [
          "It requires some travel.",
          "It is a temporary role.",
          "It starts immediately.",
          "It is based overseas."
        ],
        answer: 0,
        explanation: "女性の it requires occasional travel to our regional offices が根拠。"
      }
    ]
  },
  {
    id: "s2p3-07",
    title: "会話 7(図表問題)",
    graphic: "Workshop Schedule — Saturday\n1. 9:00  Time Management\n2. 10:30 Public Speaking\n3. 13:00 Team Leadership\n4. 14:30 Conflict Resolution",
    audio: [
      { speaker: "M", text: "Have you decided which afternoon workshop to attend on Saturday? I'm trying to choose between the two." },
      { speaker: "W", text: "I was going to do the leadership one, but my manager specifically recommended the session on handling disagreements, so I'll go with that." },
      { speaker: "M", text: "That makes sense. I'll join you in that one, then. Should we grab lunch beforehand at noon?" },
      { speaker: "W", text: "Sounds good. Let's meet in the lobby at eleven forty-five." }
    ],
    translation: "【図表】ワークショップ日程(土曜)/9:00 時間管理/10:30 スピーチ/13:00 チームリーダーシップ/14:30 対立の解決\n男性:土曜の午後のワークショップ、どれに出るか決めた? 2つで迷ってるんだ。\n女性:リーダーシップのにしようと思ってたんだけど、上司が意見の対立を扱うセッションを特に勧めてくれたから、そっちにするわ。\n男性:なるほど。じゃあ僕もそれに参加するよ。前に正午にランチでもどう?\n女性:いいわね。11時45分にロビーで待ち合わせましょう。",
    questions: [
      {
        q: "Look at the graphic. Which workshop will the speakers attend together?",
        choices: [
          "Time Management",
          "Public Speaking",
          "Team Leadership",
          "Conflict Resolution"
        ],
        answer: 3,
        explanation: "図表問題。女性の『意見の対立を扱うセッション(handling disagreements)』は図表の Conflict Resolution。男性も『そのセッションに参加する』と言っている。"
      },
      {
        q: "Why did the woman change her choice?",
        choices: [
          "The times overlapped.",
          "Her manager recommended another session.",
          "A workshop was canceled.",
          "The room was full."
        ],
        answer: 1,
        explanation: "女性の my manager specifically recommended the session ...(上司が勧めた)が根拠。"
      },
      {
        q: "What time will the speakers meet?",
        choices: [
          "At 11:45",
          "At 12:00",
          "At 1:00",
          "At 2:30"
        ],
        answer: 0,
        explanation: "最後の Let's meet in the lobby at eleven forty-five が根拠。正午はランチの時間でひっかけ。"
      }
    ]
  },
  {
    id: "s2p3-08",
    title: "会話 8(意図問題)",
    audio: [
      { speaker: "W", text: "Greg, the annual report is due to the board tomorrow morning. How are the financial charts coming along?" },
      { speaker: "M", text: "The charts are done, but I'm still waiting for the final revenue numbers from accounting. They said they'd send them by five." },
      { speaker: "W", text: "It's already four thirty." },
      { speaker: "M", text: "I know. If they're late, I'll stay tonight to finish. But honestly, I'd rather not." },
      { speaker: "W", text: "Let me call the accounting manager directly and push them. That might speed things up." }
    ],
    translation: "女性:グレッグ、年次報告書は明日の朝が取締役会への提出期限よ。財務グラフの進み具合はどう?\n男性:グラフは終わっているんだけど、経理からの最終売上数値をまだ待っているんだ。5時までに送ると言っていたよ。\n女性:もう4時半よ。\n男性:分かってる。もし遅れたら、今夜残って仕上げるよ。でも正直、それは避けたいな。\n女性:私が経理部長に直接電話して急かすわ。そのほうが早く進むかも。",
    questions: [
      {
        q: "What is due tomorrow morning?",
        choices: [
          "An annual report",
          "A budget proposal",
          "A client presentation",
          "A job application"
        ],
        answer: 0,
        explanation: "冒頭の the annual report is due to the board tomorrow morning が根拠。"
      },
      {
        q: "What does the woman imply when she says, \"It's already four thirty\"?",
        choices: [
          "She is worried the numbers may arrive late.",
          "The meeting has been moved up.",
          "She needs to leave the office.",
          "The clock is set incorrectly."
        ],
        answer: 0,
        explanation: "意図問題。経理は『5時までに送る』と言っており、それに対し『もう4時半だ』=期限が迫り間に合わないのではという懸念。"
      },
      {
        q: "What does the woman offer to do?",
        choices: [
          "Finish the charts herself",
          "Call the accounting manager",
          "Postpone the deadline",
          "Stay late with the man"
        ],
        answer: 1,
        explanation: "最後の Let me call the accounting manager directly and push them が根拠。"
      }
    ]
  },
  {
    id: "s2p3-09",
    title: "会話 9",
    audio: [
      { speaker: "M", text: "Welcome to Green Valley Garden Center. Are you finding everything all right?" },
      { speaker: "W", text: "Actually, I'm looking for a plant for my office desk. It doesn't get much sunlight, and I tend to forget to water things." },
      { speaker: "M", text: "In that case, I'd recommend a snake plant. It thrives in low light and only needs watering every couple of weeks. They're right over there on the second shelf." },
      { speaker: "W", text: "That sounds perfect. Do you sell decorative pots to go with it?" },
      { speaker: "M", text: "We do — they're in the aisle next to the register. I can show you after we pick out your plant." }
    ],
    translation: "男性:グリーンバレー・ガーデンセンターへようこそ。お探しのものは見つかりましたか?\n女性:実は、オフィスの机に置く植物を探しているんです。あまり日が当たらなくて、水やりも忘れがちで。\n男性:それでしたら、サンスベリアがおすすめです。日陰でもよく育ち、水やりは2週間に1回で済みます。あちらの2段目の棚にあります。\n女性:完璧ですね。それに合う装飾用の鉢も売っていますか?\n男性:ございます——レジの隣の通路です。植物を選んだ後にご案内しますね。",
    questions: [
      {
        q: "What is the woman looking for?",
        choices: [
          "A plant for her desk",
          "Gardening tools",
          "A gift for a friend",
          "Outdoor furniture"
        ],
        answer: 0,
        explanation: "女性の I'm looking for a plant for my office desk が根拠。"
      },
      {
        q: "Why does the man recommend a snake plant?",
        choices: [
          "It is the cheapest option.",
          "It needs little light and water.",
          "It flowers all year round.",
          "It grows very quickly."
        ],
        answer: 1,
        explanation: "男性の It thrives in low light and only needs watering every couple of weeks が根拠。手間がかからない点を推している。"
      },
      {
        q: "What does the woman ask about?",
        choices: [
          "Delivery options",
          "Decorative pots",
          "A membership discount",
          "Store hours"
        ],
        answer: 1,
        explanation: "女性の Do you sell decorative pots to go with it? が根拠。"
      }
    ]
  },
  {
    id: "s2p3-10",
    title: "会話 10(3人の会話:男性2人+女性1人)",
    audio: [
      { speaker: "M", text: "Thanks for meeting me. I'm thinking of renovating the café's seating area. I'd like it to feel more open and modern." },
      { speaker: "W", text: "We can definitely help with that. My colleague Marcus handles the lighting and furniture side, and I focus on layout and materials." },
      { speaker: "M2", text: "Right. For a café, I'd suggest replacing those heavy pendant lamps with recessed lighting — it makes the ceiling feel higher." },
      { speaker: "M", text: "I like that idea. My main concern is the budget, though. I can spend up to fifteen thousand." },
      { speaker: "W", text: "That's workable. We'll put together two design options within that range and send them to you by next Tuesday." }
    ],
    translation: "男性(店主):お会いいただきありがとうございます。カフェの座席エリアを改装しようと思っているんです。もっと開放的でモダンな雰囲気にしたくて。\n女性:ぜひお手伝いします。同僚のマーカスが照明と家具を担当し、私はレイアウトと素材を担当します。\n男性2(マーカス):そうですね。カフェなら、あの重いペンダントランプを埋め込み照明に替えるのをお勧めします。天井が高く感じられますよ。\n男性(店主):それはいいですね。ただ、私の一番の懸念は予算なんです。1万5千まで出せます。\n女性:それなら大丈夫です。その範囲でデザイン案を2つまとめて、来週火曜までにお送りします。",
    questions: [
      {
        q: "What does the man want to do?",
        choices: [
          "Renovate a café",
          "Open a new store",
          "Sell his business",
          "Hire more staff"
        ],
        answer: 0,
        explanation: "冒頭の renovating the café's seating area が根拠。"
      },
      {
        q: "What does Marcus recommend?",
        choices: [
          "Adding more tables",
          "Changing the lighting",
          "Repainting the walls",
          "Installing a new counter"
        ],
        answer: 1,
        explanation: "2人目の男性(マーカス)の replacing those heavy pendant lamps with recessed lighting が根拠。照明の変更。"
      },
      {
        q: "What is the man's main concern?",
        choices: [
          "The timeline",
          "The budget",
          "The location",
          "The noise level"
        ],
        answer: 1,
        explanation: "男性の My main concern is the budget が根拠。"
      }
    ]
  },
  {
    id: "s2p3-11",
    title: "会話 11",
    audio: [
      { speaker: "W", text: "Hi, this is Laura from Suite 402. The heating in my apartment stopped working last night, and it's quite cold." },
      { speaker: "M", text: "I'm sorry about that, Laura. I can send our maintenance technician over. He's available either today at four or tomorrow morning at nine." },
      { speaker: "W", text: "Today at four would be much better — I don't want to spend another cold night. I'll be home by then." },
      { speaker: "M", text: "No problem. I'll schedule him for four. He'll ring the buzzer when he arrives." }
    ],
    translation: "女性:もしもし、402号室のローラです。昨夜からアパートの暖房が効かなくなって、かなり寒いんです。\n男性:それは申し訳ありません、ローラさん。保守担当者を向かわせます。今日の4時か、明日の朝9時なら空いています。\n女性:今日の4時のほうがずっといいです——これ以上寒い夜を過ごしたくないので。それまでには帰宅しています。\n男性:承知しました。4時で手配します。到着したらブザーを鳴らします。",
    questions: [
      {
        q: "Why is the woman calling?",
        choices: [
          "To report a broken heater",
          "To pay her rent",
          "To renew her lease",
          "To request a parking space"
        ],
        answer: 0,
        explanation: "冒頭の The heating in my apartment stopped working(暖房が効かない)が根拠。"
      },
      {
        q: "When does the woman prefer the technician to visit?",
        choices: [
          "Today at four",
          "Tomorrow at nine",
          "This weekend",
          "Next week"
        ],
        answer: 0,
        explanation: "女性の Today at four would be much better が根拠。もう1晩寒い思いをしたくないため。"
      },
      {
        q: "What does the man say the technician will do on arrival?",
        choices: [
          "Call her cell phone",
          "Ring the buzzer",
          "Leave a note",
          "Check in at the office"
        ],
        answer: 1,
        explanation: "最後の He'll ring the buzzer when he arrives が根拠。"
      }
    ]
  },
  {
    id: "s2p3-12",
    title: "会話 12(図表問題)",
    graphic: "Parking Rates — Central Garage\n1. Up to 1 hour — $4\n2. Up to 2 hours — $7\n3. Up to 3 hours — $9\n4. All day — $15",
    audio: [
      { speaker: "M", text: "Excuse me, I'm attending a two-hour seminar in this building. How much will parking cost?" },
      { speaker: "W", text: "Well, seminars often run a bit over. If you think you might stay longer than planned, the three-hour rate is only a little more and saves you from a surprise charge." },
      { speaker: "M", text: "Good point. I'll plan for three hours, then. Is there a discount for seminar attendees?" },
      { speaker: "W", text: "There is, actually. Show your event badge when you exit, and you'll get two dollars off." }
    ],
    translation: "【図表】駐車料金——セントラル・ガレージ/1時間まで4ドル/2時間まで7ドル/3時間まで9ドル/1日15ドル\n男性:すみません、このビルで2時間のセミナーに参加するんです。駐車料金はいくらになりますか?\n女性:そうですね、セミナーは少し延びることが多いんです。予定より長くなりそうなら、3時間料金は少し高いだけで、思わぬ追加料金を避けられますよ。\n男性:なるほど。じゃあ3時間で見ておきます。セミナー参加者向けの割引はありますか?\n女性:実はあります。出るときにイベントのバッジを見せれば、2ドル引きになります。",
    questions: [
      {
        q: "Look at the graphic. How much will the man most likely pay before the discount?",
        choices: ["$4", "$7", "$9", "$15"],
        answer: 2,
        explanation: "図表問題。男性は女性の助言に従い『3時間で見ておく』と言っている。図表の3時間まで=9ドル。2時間の7ドルはひっかけ。"
      },
      {
        q: "Why does the woman suggest paying for three hours?",
        choices: [
          "The seminar may run long.",
          "It is the cheapest option.",
          "Two-hour parking is unavailable.",
          "The garage closes early."
        ],
        answer: 0,
        explanation: "女性の seminars often run a bit over ... if you think you might stay longer(延びることが多い)が根拠。"
      },
      {
        q: "How can the man get a discount?",
        choices: [
          "By paying in cash",
          "By showing his event badge",
          "By parking before noon",
          "By joining a membership"
        ],
        answer: 1,
        explanation: "最後の Show your event badge when you exit ... two dollars off が根拠。"
      }
    ]
  },
  {
    id: "s2p3-13",
    title: "会話 13",
    audio: [
      { speaker: "W", text: "Marco, I just reviewed the draft of the newsletter. It looks great, but I noticed the date of the customer appreciation event is wrong. It says the fifteenth, but it's actually the eighteenth." },
      { speaker: "M", text: "Oh, good catch. I must have copied the old date. I'll fix it right away." },
      { speaker: "W", text: "Thanks. Also, could we add a short paragraph about the new loyalty program? A lot of customers have been asking about it." },
      { speaker: "M", text: "Sure. I'll draft something and send you the updated version before I schedule it to go out on Monday." }
    ],
    translation: "女性:マルコ、ニュースレターの下書きを確認したわ。とても良いんだけど、顧客感謝イベントの日付が間違っているのに気づいたの。15日となっているけど、実際は18日よ。\n男性:あ、よく気づいてくれたね。古い日付をコピーしてしまったんだな。すぐ直すよ。\n女性:ありがとう。あと、新しいロイヤルティプログラムについて短い段落を加えられる? 多くのお客様が問い合わせてきているの。\n男性:もちろん。何か書いてみて、月曜に配信予約する前に更新版を送るよ。",
    questions: [
      {
        q: "What are the speakers discussing?",
        choices: [
          "A newsletter draft",
          "A customer complaint",
          "A budget report",
          "A store layout"
        ],
        answer: 0,
        explanation: "冒頭の the draft of the newsletter が根拠。"
      },
      {
        q: "What error did the woman find?",
        choices: [
          "A misspelled name",
          "An incorrect event date",
          "A wrong price",
          "A missing photo"
        ],
        answer: 1,
        explanation: "女性の the date of the customer appreciation event is wrong(イベントの日付が間違い)が根拠。"
      },
      {
        q: "What does the woman ask the man to add?",
        choices: [
          "A paragraph about a loyalty program",
          "A list of store locations",
          "A customer survey link",
          "A discount coupon"
        ],
        answer: 0,
        explanation: "女性の could we add a short paragraph about the new loyalty program? が根拠。"
      }
    ]
  }
];
