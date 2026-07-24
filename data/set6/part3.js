// Part 3: 会話問題(会話を聞いて設問に答える)
window.TOEIC_DATA_6 = window.TOEIC_DATA_6 || {};
window.TOEIC_DATA_6.part3 = [
  {
    id: "s6p3-01",
    title: "会話 1",
    audio: [
      { speaker: "W", text: "Hello, I'm calling to change a dinner reservation I made for this Saturday under the name Fletcher. I booked a table for four, but two more colleagues will be joining us now." },
      { speaker: "M", text: "Let me pull that up... A party of four at seven o'clock. I can update it to six guests, but a table that size is only free at seven thirty. Would that work?" },
      { speaker: "W", text: "Seven thirty is fine. One of my colleagues uses a wheelchair — is your dining area accessible?" },
      { speaker: "M", text: "Yes, the main floor is fully accessible, and I'll note that you should be seated near the entrance. We'll see you on Saturday." }
    ],
    translation: "女性:もしもし、今週土曜にフレッチャーの名前で取ったディナーの予約を変更したくてお電話しました。4名で予約したのですが、同僚があと2人加わることになって。\n男性:お調べします……7時に4名様ですね。6名様に変更できますが、その人数のテーブルは7時半しか空いておりません。それでよろしいですか?\n女性:7時半で大丈夫です。同僚の1人が車椅子を使うのですが、そちらのお食事スペースはバリアフリーですか?\n男性:はい、メインフロアは完全にバリアフリーです。入口近くのお席にするよう記録しておきます。土曜にお待ちしております。",
    questions: [
      {
        q: "Why is the woman calling?",
        choices: [
          "To modify a reservation",
          "To cancel an order",
          "To request a refund",
          "To apply for a job"
        ],
        answer: 0,
        explanation: "冒頭の I'm calling to change a dinner reservation(予約を変更するために電話している)が根拠。change が modify に言い換えられている。取り消しではなく人数変更なので(B)はひっかけ。"
      },
      {
        q: "What change does the woman request?",
        choices: [
          "An earlier date",
          "A private room",
          "A larger group size",
          "A different menu"
        ],
        answer: 2,
        explanation: "女性の two more colleagues will be joining us(あと2人加わる)から、人数を増やす変更だと分かる。男性も update it to six guests と確認している。"
      },
      {
        q: "What does the woman ask about?",
        choices: [
          "Parking availability",
          "Wheelchair accessibility",
          "The dress code",
          "Payment options"
        ],
        answer: 1,
        explanation: "女性の is your dining area accessible?(お食事スペースはバリアフリーか)が根拠。車椅子利用者への配慮を尋ねている。"
      }
    ]
  },
  {
    id: "s6p3-02",
    title: "会話 2",
    audio: [
      { speaker: "M", text: "Hi, I'd like to sign up for a membership. A friend recommended this place for its early-morning classes." },
      { speaker: "W", text: "Great choice. We have two plans — the basic plan gives you access to the equipment, and the premium plan adds unlimited group classes. Which sounds better?" },
      { speaker: "M", text: "The premium one. Do the classes need to be booked in advance?" },
      { speaker: "W", text: "For popular ones like spin and yoga, yes — you reserve through our app. I'll set up your account now. Could I see a photo ID?" }
    ],
    translation: "男性:こんにちは、会員登録をしたいのですが。早朝クラスがいいと友人に勧められて。\n女性:いい選択です。プランは2種類あります——ベーシックプランは器具が使え、プレミアムプランはそれに加えてグループクラスが無制限です。どちらがよろしいですか?\n男性:プレミアムでお願いします。クラスは事前予約が必要ですか?\n女性:スピンやヨガのような人気クラスは必要です——アプリで予約します。今アカウントを作りますね。写真付きの身分証を拝見できますか?",
    questions: [
      {
        q: "Where most likely is the conversation taking place?",
        choices: [
          "At a library",
          "At a fitness center",
          "At a clinic",
          "At a hotel"
        ],
        answer: 1,
        explanation: "membership、equipment、group classes、spin、yoga などの語からフィットネス施設だと分かる。early-morning classes(早朝クラス)もヒント。"
      },
      {
        q: "What does the man decide to do?",
        choices: [
          "Choose the premium plan",
          "Cancel a class",
          "Get a refund",
          "Upgrade later"
        ],
        answer: 0,
        explanation: "男性は The premium one と即答している。ベーシックとプレミアムの2択で後者を選んでいる。"
      },
      {
        q: "What does the woman ask the man to provide?",
        choices: [
          "A credit card",
          "A medical form",
          "A photo ID",
          "A phone number"
        ],
        answer: 2,
        explanation: "女性の最後の Could I see a photo ID? が根拠。アカウント作成のために身分証を求めている。"
      }
    ]
  },
  {
    id: "s6p3-03",
    title: "会話 3",
    audio: [
      { speaker: "W", text: "Hi, this is Priya in accounting. My laptop won't connect to the office network, and I have a payroll report due this afternoon." },
      { speaker: "M", text: "Let me help. First, can you tell me whether other people on your floor are having the same issue, or is it just your machine?" },
      { speaker: "W", text: "Just mine, I think. My neighbor's computer is working fine." },
      { speaker: "M", text: "Okay, that points to your laptop's settings. I'll remote in and reset your network profile — it should take about ten minutes. Please save any open files first." }
    ],
    translation: "女性:もしもし、経理部のプリヤです。ノートパソコンが社内ネットワークにつながらなくて、午後に給与レポートの締め切りがあるんです。\n男性:お手伝いします。まず、同じフロアの他の人も同じ問題が起きているか、それともあなたの端末だけか教えてもらえますか?\n女性:私のだけだと思います。隣の人のパソコンは普通に動いているので。\n男性:なるほど、それならあなたのノートパソコンの設定が原因ですね。リモートで入ってネットワークプロファイルをリセットします——10分ほどで終わります。まず開いているファイルを保存してください。",
    questions: [
      {
        q: "What is the woman's problem?",
        choices: [
          "She deleted an important file.",
          "Her computer cannot access the network.",
          "Her password has expired.",
          "A printer is out of order."
        ],
        answer: 1,
        explanation: "冒頭の My laptop won't connect to the office network(ノートパソコンがネットワークにつながらない)が根拠。connect が access に言い換えられている。"
      },
      {
        q: "What does the man ask the woman?",
        choices: [
          "Whether coworkers are affected too",
          "What model her laptop is",
          "When the report is due",
          "Her employee number"
        ],
        answer: 0,
        explanation: "男性の can you tell me whether other people on your floor are having the same issue が根拠。原因の切り分けのために周囲の状況を尋ねている。"
      },
      {
        q: "What does the man tell the woman to do?",
        choices: [
          "Restart the router",
          "Call back later",
          "Save her open files",
          "Replace a cable"
        ],
        answer: 2,
        explanation: "男性の最後の Please save any open files first が根拠。リセット前にファイルを保存するよう指示している。"
      }
    ]
  },
  {
    id: "s6p3-04",
    title: "会話 4",
    audio: [
      { speaker: "M", text: "Good afternoon, City Heritage Museum. How can I help you?" },
      { speaker: "W", text: "Hi, I'd like to book a guided tour for a group of visiting students — about twenty-five of them — next Wednesday." },
      { speaker: "M", text: "Certainly. Groups of twenty or more get a discounted rate, and Wednesday mornings are quite open. Would ten o'clock work?" },
      { speaker: "W", text: "Ten is perfect. Is there anything we should know, or is photography allowed inside?" },
      { speaker: "M", text: "Photography without flash is fine. Just have the students leave large bags at the coat check when they arrive." }
    ],
    translation: "男性:こんにちは、シティ・ヘリテージ博物館です。ご用件を承ります。\n女性:こんにちは、来週水曜に、見学に来る学生のグループ——25人ほど——のガイド付きツアーを予約したいのですが。\n男性:承知しました。20人以上のグループは割引料金が適用されます。水曜の午前中はかなり空いています。10時でいかがですか?\n女性:10時で完璧です。何か知っておくべきことはありますか? それと、館内は写真撮影できますか?\n男性:フラッシュなしの撮影なら問題ありません。到着したら、大きな荷物はクロークにお預けいただくようお願いします。",
    questions: [
      {
        q: "What is the woman arranging?",
        choices: [
          "A class reunion",
          "A guided tour for students",
          "A fundraising dinner",
          "An art class"
        ],
        answer: 1,
        explanation: "女性の book a guided tour for a group of visiting students が根拠。学生グループ向けのガイドツアーの予約。"
      },
      {
        q: "Why does the group qualify for a discount?",
        choices: [
          "It is visiting on a weekday.",
          "The members are students.",
          "It has more than twenty people.",
          "It booked online."
        ],
        answer: 2,
        explanation: "男性の Groups of twenty or more get a discounted rate(20人以上は割引)が根拠。25人なので条件を満たす。曜日や学生であることが理由ではないのでひっかけ。"
      },
      {
        q: "What are visitors asked to do upon arrival?",
        choices: [
          "Wear name tags",
          "Buy tickets online",
          "Turn off their phones",
          "Leave large bags at the coat check"
        ],
        answer: 3,
        explanation: "男性の最後の leave large bags at the coat check when they arrive が根拠。到着時に大きな荷物を預けるよう求めている。"
      }
    ]
  },
  {
    id: "s6p3-05",
    title: "会話 5(3人の会話:男性2人+女性1人)",
    audio: [
      { speaker: "W", text: "Greg, Victor — I just heard from the supplier that our shipment of packaging materials is delayed until next Tuesday." },
      { speaker: "M", text: "That's a problem, Lena. We're supposed to start filling the holiday orders on Monday." },
      { speaker: "W", text: "Exactly. Do we have any of the old boxes left in the back?" },
      { speaker: "M2", text: "I checked this morning — only about two hundred, and we need at least a thousand for Monday." },
      { speaker: "M", text: "What if I call our other branch in Milton? They might be able to lend us some overnight." },
      { speaker: "M2", text: "Good idea, Greg. Meanwhile, I'll rearrange the schedule so we pack the smaller orders first, since those don't need the new boxes." }
    ],
    translation: "レナ(女性):グレッグ、ビクター——たった今、仕入先から梱包材の入荷が来週火曜まで遅れると連絡があったの。\nグレッグ(男性1):それは困るね、レナ。月曜からホリデー向けの注文を出荷し始める予定なのに。\nレナ:そうなの。奥に古い箱の在庫は残っている?\nビクター(男性2):今朝確認したよ——200個くらいしかない。月曜には最低1,000個必要なのに。\nグレッグ:ミルトンの別支店に電話してみようか? 一晩で貸してくれるかもしれない。\nビクター:いい考えだね、グレッグ。その間、僕は新しい箱がいらない小さめの注文を先に梱包するよう、予定を組み直しておくよ。",
    questions: [
      {
        q: "What problem are the speakers discussing?",
        choices: [
          "A shipment has been delayed.",
          "An order was canceled.",
          "A machine has broken down.",
          "A worker has quit."
        ],
        answer: 0,
        explanation: "レナの our shipment of packaging materials is delayed(梱包材の入荷が遅れている)が根拠。3人の会話では冒頭の女性の発言が主題を示すことが多い。"
      },
      {
        q: "What does Victor say he will do?",
        choices: [
          "Count the remaining boxes",
          "Rearrange the work schedule",
          "Contact the supplier",
          "Deliver the orders himself"
        ],
        answer: 1,
        explanation: "2人目の男性ビクターの I'll rearrange the schedule so we pack the smaller orders first が根拠。在庫確認(count)は既に済ませているのでひっかけ。"
      },
      {
        q: "What does Greg offer to do?",
        choices: [
          "Hire temporary staff",
          "Postpone the holiday orders",
          "Borrow boxes from another branch",
          "Buy boxes locally"
        ],
        answer: 2,
        explanation: "グレッグの call our other branch in Milton ... lend us some(別支店から借りる)が根拠。branch in Milton が another branch に言い換えられている。"
      }
    ]
  },
  {
    id: "s6p3-06",
    title: "会話 6",
    audio: [
      { speaker: "W", text: "Hi, I'm here to pick up a prescription for Daniel Ortega." },
      { speaker: "M", text: "Let me check... Yes, it's ready. I should mention this medication can cause drowsiness, so it's best to avoid driving after taking it." },
      { speaker: "W", text: "Good to know. Also, my doctor said there might be a cheaper generic version?" },
      { speaker: "M", text: "There is. The generic is about half the price and works the same way. Would you like me to switch it?" },
      { speaker: "W", text: "Yes, please. That would help a lot." }
    ],
    translation: "女性:こんにちは、ダニエル・オルテガの処方薬を受け取りに来ました。\n男性:確認します……はい、ご用意できています。この薬は眠気を引き起こすことがあるので、服用後の運転は避けた方がいいとお伝えしておきます。\n女性:知れてよかったです。それと、医師がもっと安いジェネリック版があるかもと言っていたのですが。\n男性:ございます。ジェネリックは半額ほどで、効き目は同じです。そちらに切り替えましょうか?\n女性:はい、お願いします。とても助かります。",
    questions: [
      {
        q: "Where most likely are the speakers?",
        choices: [
          "At a hospital",
          "At a supermarket",
          "At a pharmacy",
          "At a dentist's office"
        ],
        answer: 2,
        explanation: "prescription(処方薬)、medication、generic version などの語から薬局だと分かる。pick up a prescription(処方薬を受け取る)が決定的なヒント。"
      },
      {
        q: "What does the man warn the woman about?",
        choices: [
          "A possible side effect",
          "A long wait time",
          "A price increase",
          "An expired product"
        ],
        answer: 0,
        explanation: "男性の this medication can cause drowsiness(眠気を引き起こす)が根拠。副作用(side effect)についての注意。"
      },
      {
        q: "What does the woman decide to do?",
        choices: [
          "Consult her doctor",
          "Switch to a generic medication",
          "Pay in cash",
          "Come back later"
        ],
        answer: 1,
        explanation: "男性の切り替え提案に女性が Yes, please と答えている。ジェネリックへの変更を選んでいる。"
      }
    ]
  },
  {
    id: "s6p3-07",
    title: "会話 7(3人の会話:女性2人+男性1人)",
    audio: [
      { speaker: "W", text: "Carlos, Bethany — we need to decide on a topic for the first episode of the company podcast. Marketing wants it live by the end of the month." },
      { speaker: "M", text: "How about interviewing someone from the product team about the new app? Customers keep asking how it was designed." },
      { speaker: "W2", text: "I like that, Nora, but our head of design is on leave until the twentieth. Could we start with a customer success story instead?" },
      { speaker: "W", text: "That works. Bethany, could you reach out to a client who'd be willing to be interviewed?" },
      { speaker: "W2", text: "Sure, I'll email a few of them this afternoon." },
      { speaker: "M", text: "And I'll book the recording studio for next week." }
    ],
    translation: "ノラ(女性1):カルロス、ベサニー——会社のポッドキャストの第1回のテーマを決めなきゃ。マーケティングは今月末までに公開したいそうよ。\nカルロス(男性):新しいアプリについて、製品チームの誰かにインタビューするのはどう? 顧客がどう設計されたのかよく聞いてくるし。\nベサニー(女性2):いいと思うけど、ノラ、うちのデザイン責任者は20日まで休暇中なの。代わりに顧客の成功事例から始めるのはどうかしら?\nノラ:それでいこう。ベサニー、インタビューに応じてくれそうな顧客に連絡してもらえる?\nベサニー:もちろん、今日の午後に何人かメールするわ。\nカルロス:じゃあ僕は来週の録音スタジオを予約しておくよ。",
    questions: [
      {
        q: "What are the speakers planning?",
        choices: [
          "A product launch",
          "The first episode of a podcast",
          "A training video",
          "A press release"
        ],
        answer: 1,
        explanation: "ノラの the first episode of the company podcast が根拠。3人で会社のポッドキャスト初回を企画している。"
      },
      {
        q: "Why does Bethany suggest a different topic?",
        choices: [
          "The app is not ready.",
          "The deadline has moved.",
          "A colleague is unavailable.",
          "Customers have complained."
        ],
        answer: 2,
        explanation: "2人目の女性ベサニーの our head of design is on leave until the twentieth(デザイン責任者が休暇中)が根拠。担当者が不在なので別テーマを提案している。"
      },
      {
        q: "What will Carlos do?",
        choices: [
          "Interview a client",
          "Email some customers",
          "Edit the audio",
          "Reserve a recording studio"
        ],
        answer: 3,
        explanation: "カルロスの最後の I'll book the recording studio が根拠。顧客へのメールはベサニーの役割なのでひっかけ。"
      }
    ]
  },
  {
    id: "s6p3-08",
    graphicKind: "schedule",
    title: "会話 8(図表問題)",
    graphic: "Harbor Ferry — Weekday Departures\n1. 8:00  → Oakport\n2. 9:30  → Bell Island\n3. 11:00 → Oakport\n4. 12:30 → Bell Island",
    audio: [
      { speaker: "M", text: "Excuse me, I need to get to Bell Island for a meeting at noon. Which ferry should I take?" },
      { speaker: "W", text: "Well, the crossing takes about forty minutes. The earlier Bell Island departure would get you there with plenty of time to spare." },
      { speaker: "M", text: "Perfect. Is there a café on board? I haven't had breakfast yet." },
      { speaker: "W", text: "Yes, on the upper deck. You can buy your ticket at the booth behind you — it's ten dollars one way." }
    ],
    translation: "【図表】ハーバー・フェリー 平日の出航/8:00→オークポート/9:30→ベル島/11:00→オークポート/12:30→ベル島\n男性:すみません、正午の会議のためにベル島へ行きたいんです。どのフェリーに乗ればいいですか?\n女性:そうですね、渡航には40分ほどかかります。早い方のベル島行きに乗れば、余裕を持って着けますよ。\n男性:完璧です。船内にカフェはありますか? まだ朝食を食べていなくて。\n女性:はい、上のデッキにあります。チケットは後ろのブースで買えます——片道10ドルです。",
    questions: [
      {
        q: "Look at the graphic. Which ferry will the man most likely take?",
        choices: [
          "The 8:00 ferry",
          "The 9:30 ferry",
          "The 11:00 ferry",
          "The 12:30 ferry"
        ],
        answer: 1,
        explanation: "図表問題。男性は『正午の会議に間に合うベル島行き』を必要とし、女性は『早い方のベル島行き』を勧めている。図表でベル島行きは9:30と12:30。12:30では正午に間に合わないので9:30。行き先と時刻の両方を突き合わせる必要がある。"
      },
      {
        q: "What does the man ask about?",
        choices: [
          "A restroom",
          "Food service on board",
          "Wireless internet",
          "Life jackets"
        ],
        answer: 1,
        explanation: "男性の Is there a café on board?(船内にカフェはあるか)が根拠。朝食を食べていないので船内の食事を尋ねている。"
      },
      {
        q: "How much is a one-way ticket?",
        choices: [
          "Eight dollars",
          "Ten dollars",
          "Twelve dollars",
          "Fifteen dollars"
        ],
        answer: 1,
        explanation: "女性の最後の it's ten dollars one way(片道10ドル)が根拠。"
      }
    ]
  },
  {
    id: "s6p3-09",
    title: "会話 9(意図問題)",
    audio: [
      { speaker: "W", text: "Hey, Marcus. I'm scheduled to work the front desk this Sunday, but I just found out my sister's wedding is that day. Is there any way you could take my shift?" },
      { speaker: "M", text: "This Sunday? I'm actually running a marathon that morning." },
      { speaker: "W", text: "Oh, that's right, I forgot. No worries, I'll ask Tanya then." },
      { speaker: "M", text: "Actually, the race ends by eleven. I could cover the afternoon if someone takes the morning." },
      { speaker: "W", text: "That would be great. I'll see if Tanya can do the morning half. Thanks, Marcus!" }
    ],
    translation: "女性:ねえ、マーカス。今週日曜に受付のシフトが入っているんだけど、その日が妹の結婚式だと分かって。私のシフトを代わってもらえないかな?\n男性:今週の日曜? その日の朝はマラソンを走るんだよ。\n女性:あ、そうだった、忘れてた。大丈夫、じゃあターニャに頼むわ。\n男性:いや、レースは11時までに終わるんだ。誰かが午前を担当してくれるなら、僕が午後をカバーできるよ。\n女性:それは助かる。午前の分をターニャができるか聞いてみるね。ありがとう、マーカス!",
    questions: [
      {
        q: "What does the woman ask the man to do?",
        choices: [
          "Attend a wedding with her",
          "Work her shift",
          "Train a new employee",
          "Run in a race"
        ],
        answer: 1,
        explanation: "女性の could you take my shift?(私のシフトを代わってくれる?)が根拠。妹の結婚式のため代わりを頼んでいる。"
      },
      {
        q: "What does the man imply when he says, \"This Sunday?\"",
        choices: [
          "He already has a commitment that day.",
          "He forgot the schedule was posted.",
          "He wants to change the time.",
          "He is surprised the desk is open."
        ],
        answer: 0,
        explanation: "意図問題。『今週の日曜?』と聞き返し、直後にマラソンの予定を挙げていることから、その日は先約があって引き受けにくいという含意。文字通りの疑問ではなく文脈上の意図を問う。"
      },
      {
        q: "What does the man agree to do?",
        choices: [
          "Cover the afternoon shift",
          "Find a replacement",
          "Work the entire day",
          "Take Sunday off"
        ],
        answer: 0,
        explanation: "男性の I could cover the afternoon if someone takes the morning が根拠。マラソン後、午後だけ担当することに同意している。"
      }
    ]
  },
  {
    id: "s6p3-10",
    title: "会話 10",
    audio: [
      { speaker: "M", text: "Thanks for showing me the apartment. I really like the natural light in the living room." },
      { speaker: "W", text: "It's one of the brightest units in the building. The rent is fourteen hundred a month, and that includes water and trash service." },
      { speaker: "M", text: "That's reasonable. Is parking available? I have a car." },
      { speaker: "W", text: "There's an assigned spot in the garage for an extra fifty dollars a month. If you're interested, I can hold the unit with a deposit today." },
      { speaker: "M", text: "Let me talk it over with my partner tonight, and I'll call you tomorrow." }
    ],
    translation: "男性:部屋を見せていただきありがとうございます。リビングの自然光がとても気に入りました。\n女性:この建物で一番明るい部屋の一つです。家賃は月1,400ドルで、水道とゴミ収集のサービスが含まれています。\n男性:手頃ですね。駐車場は使えますか? 車を持っているんです。\n女性:ガレージに専用スペースがあり、月に追加で50ドルかかります。ご興味があれば、今日デポジットでこの部屋を押さえられますよ。\n男性:今夜パートナーと相談して、明日お電話します。",
    questions: [
      {
        q: "What are the speakers mainly discussing?",
        choices: [
          "Renting an apartment",
          "Remodeling an office",
          "Booking a hotel room",
          "Selling a house"
        ],
        answer: 0,
        explanation: "showing me the apartment、The rent is、hold the unit などの語から賃貸物件の内見だと分かる。"
      },
      {
        q: "What is included in the rent?",
        choices: [
          "A parking spot",
          "Water and trash service",
          "Internet access",
          "Furniture"
        ],
        answer: 1,
        explanation: "女性の that includes water and trash service が根拠。駐車場は月50ドル追加なので含まれておらず(A)はひっかけ。"
      },
      {
        q: "What does the man say he will do?",
        choices: [
          "Sign a lease today",
          "Pay a deposit now",
          "Discuss it with his partner",
          "View another unit"
        ],
        answer: 2,
        explanation: "男性の最後の talk it over with my partner tonight が根拠。即決せず相談してから明日電話すると述べている。"
      }
    ]
  },
  {
    id: "s6p3-11",
    title: "会話 11",
    audio: [
      { speaker: "W", text: "Hi, I have a reservation for a compact car under Sandra Yee, picking up today for three days." },
      { speaker: "M", text: "Let me find that... Here it is. Unfortunately, we're out of compact cars right now, but I can upgrade you to a midsize at no extra charge." },
      { speaker: "W", text: "That works. Does it come with a navigation system?" },
      { speaker: "M", text: "This one has built-in navigation, yes. I'll also need to see your driver's license and a credit card for the deposit." }
    ],
    translation: "女性:こんにちは、サンドラ・イーの名前でコンパクトカーを予約しています。今日から3日間の受け取りです。\n男性:お調べします……ございました。あいにく今コンパクトカーが出払っているのですが、追加料金なしでミドルサイズにアップグレードできます。\n女性:それでいいです。ナビゲーションシステムは付いていますか?\n男性:こちらは車載ナビ付きです。それと、運転免許証とデポジット用のクレジットカードを拝見する必要があります。",
    questions: [
      {
        q: "Why can't the woman get the car she reserved?",
        choices: [
          "That type is unavailable.",
          "It needs repairs.",
          "Her reservation expired.",
          "It is the wrong color."
        ],
        answer: 0,
        explanation: "男性の we're out of compact cars right now(コンパクトカーが出払っている)が根拠。out of stock 状態=unavailable への言い換え。"
      },
      {
        q: "What does the man offer?",
        choices: [
          "A discount coupon",
          "A larger vehicle at no cost",
          "Free fuel",
          "An extra rental day"
        ],
        answer: 1,
        explanation: "男性の upgrade you to a midsize at no extra charge が根拠。midsize は compact より大きく、追加料金なしなので a larger vehicle at no cost。"
      },
      {
        q: "What does the man ask to see?",
        choices: [
          "Her travel itinerary",
          "Her insurance papers",
          "A license and a credit card",
          "A return receipt"
        ],
        answer: 2,
        explanation: "男性の最後の your driver's license and a credit card が根拠。免許証とクレジットカードの両方を求めている。"
      }
    ]
  },
  {
    id: "s6p3-12",
    graphicKind: "agenda",
    title: "会話 12(図表問題)",
    graphic: "Regional Sales Conference — Morning Agenda\n1. 9:00  Opening Remarks\n2. 9:30  Market Trends\n3. 10:30 Product Roadmap\n4. 11:30 Q&A Panel",
    audio: [
      { speaker: "M", text: "Sarah, I can only stay at the conference until eleven because of my flight. Which session should I prioritize?" },
      { speaker: "W", text: "The product roadmap is the one you can't miss — it covers the new features your clients keep asking about." },
      { speaker: "M", text: "Good point. I'll skip the earlier talk on market trends, then. Could you take notes for me on the last session?" },
      { speaker: "W", text: "Of course. I'll email you a summary afterward." }
    ],
    translation: "【図表】地域営業カンファレンス 午前のアジェンダ/9:00 開会の挨拶/9:30 市場動向/10:30 製品ロードマップ/11:30 質疑応答パネル\n男性:サラ、飛行機の都合で、カンファレンスには11時までしかいられないんだ。どのセッションを優先すべきかな?\n女性:製品ロードマップは外せないわよ——あなたの顧客がずっと聞いてくる新機能を扱うから。\n男性:確かに。じゃあ市場動向の早い方の話は飛ばすよ。最後のセッションのメモを取ってもらえる?\n女性:もちろん。後でサマリーをメールするわ。",
    questions: [
      {
        q: "Look at the graphic. Which session will the man most likely attend?",
        choices: [
          "Opening Remarks",
          "Market Trends",
          "Product Roadmap",
          "Q&A Panel"
        ],
        answer: 2,
        explanation: "図表問題。男性は11時までしかいられず、女性は『製品ロードマップは外せない』と勧めている。図表で10:30の Product Roadmap は11時前に始まり、女性の推薦とも一致する。"
      },
      {
        q: "Why must the man leave early?",
        choices: [
          "He has a flight to catch.",
          "He has another meeting.",
          "He is feeling unwell.",
          "He must visit a client."
        ],
        answer: 0,
        explanation: "男性の I can only stay ... because of my flight が根拠。飛行機の都合で早く出る必要がある。"
      },
      {
        q: "What does the woman offer to do?",
        choices: [
          "Reschedule his flight",
          "Take notes and email a summary",
          "Introduce him to a client",
          "Present in his place"
        ],
        answer: 1,
        explanation: "女性の take notes ... I'll email you a summary afterward が根拠。メモを取ってサマリーを送ると申し出ている。"
      }
    ]
  },
  {
    id: "s6p3-13",
    title: "会話 13",
    audio: [
      { speaker: "W", text: "Hi, my phone bill has gone up the last two months, and I don't understand why. I'm on the basic plan." },
      { speaker: "M", text: "Let me look at your account... I see — you've been going over your data limit, so you're paying overage fees each month." },
      { speaker: "W", text: "Ah, that explains it. I've been streaming a lot of video lately." },
      { speaker: "M", text: "In that case, our unlimited data plan would actually save you money. It's a flat rate, and you'd never pay overage charges again." },
      { speaker: "W", text: "That sounds much better. Let's switch to that." }
    ],
    translation: "女性:こんにちは、この2か月で携帯の請求額が上がっていて、理由が分からないんです。ベーシックプランなのに。\n男性:アカウントを確認します……なるほど——データ容量を超過していて、毎月超過料金を支払っていますね。\n女性:ああ、それで納得です。最近たくさん動画を見ていて。\n男性:それでしたら、うちの無制限データプランの方がむしろお得です。定額なので、二度と超過料金を払わずに済みます。\n女性:その方がずっといいですね。それに切り替えましょう。",
    questions: [
      {
        q: "What is the woman's concern?",
        choices: [
          "Her phone is broken.",
          "Her bill has increased.",
          "She lost her phone.",
          "She wants a new number."
        ],
        answer: 1,
        explanation: "冒頭の my phone bill has gone up(請求額が上がった)が根拠。gone up が increased に言い換えられている。"
      },
      {
        q: "What is causing the higher charges?",
        choices: [
          "A late payment",
          "An international call",
          "Going over the data limit",
          "Extra devices"
        ],
        answer: 2,
        explanation: "男性の you've been going over your data limit, so you're paying overage fees が根拠。データ超過が原因。"
      },
      {
        q: "What does the woman decide to do?",
        choices: [
          "Cancel her account",
          "Upgrade her phone",
          "Pay in installments",
          "Switch to an unlimited plan"
        ],
        answer: 3,
        explanation: "女性の最後の Let's switch to that(無制限プランに切り替える)が根拠。定額プランへの変更を選んでいる。"
      }
    ]
  }
];
