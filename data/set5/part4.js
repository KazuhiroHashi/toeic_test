// Part 4: 説明文問題(トークを聞いて設問に答える)
window.TOEIC_DATA_5 = window.TOEIC_DATA_5 || {};
window.TOEIC_DATA_5.part4 = [
  {
    id: "s5p4-01",
    kind: "telephone message",
    title: "トーク 1(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hi, this is a message for Mr. Dawson. This is Priya calling from Golden Spoon Catering. I'm confirming your order for the company anniversary luncheon this Friday. We have you down for fifty guests with the vegetarian menu you selected. One quick note — our delivery van can't reach your loading dock because of the road resurfacing on Miller Street, so our staff will carry everything in through the main lobby instead. We'll arrive by eleven to set everything up before your noon start. If anything changes on your end, please reach me at the number I'll leave at the end of this message. Thanks so much." }
    ],
    translation: "もしもし、ドーソン様への伝言です。ゴールデン・スプーン・ケータリングのプリヤと申します。今週金曜日の会社設立記念昼食会のご注文の確認でお電話しました。ベジタリアンメニューで50名様と承っております。1点だけご連絡です——ミラー通りの道路舗装工事のため、配送車が搬入口に入れませんので、スタッフが正面ロビーからすべてお運びします。正午開始の前に準備を整えるため、11時までに到着します。そちらで何か変更がありましたら、このメッセージの最後に残す番号までご連絡ください。よろしくお願いいたします。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To confirm an order",
          "To recommend a new menu",
          "To reschedule an event",
          "To apply for a position"
        ],
        answer: 0,
        explanation: "冒頭の I'm confirming your order（ご注文の確認）が根拠。電話の目的はトーク前半で述べられる定石。『メニューの提案』『日程変更』は本文にない連想のひっかけ。"
      },
      {
        q: "What problem does the speaker mention?",
        choices: [
          "Some guests have canceled.",
          "A menu item is unavailable.",
          "A delivery vehicle cannot use the loading dock.",
          "The event has been postponed."
        ],
        answer: 2,
        explanation: "our delivery van can't reach your loading dock because of the road resurfacing（道路工事で配送車が搬入口に入れない）が根拠。loading dock がそのまま選択肢に使われている。"
      },
      {
        q: "What will the staff do before noon?",
        choices: [
          "Collect a payment",
          "Deliver invitations",
          "Park at the loading dock",
          "Set up for the event"
        ],
        answer: 3,
        explanation: "We'll arrive by eleven to set everything up before your noon start（正午開始前に準備を整える）が根拠。set everything up が Set up for the event に対応。"
      }
    ]
  },
  {
    id: "s5p4-02",
    kind: "announcement",
    title: "トーク 2(館内アナウンス)",
    audio: [
      { speaker: "M", text: "Attention, library visitors. We're pleased to announce that starting next Monday, the Westbrook Public Library will stay open two hours later on weekdays, closing at nine instead of seven. This change is part of our effort to better serve students and evening commuters. We've also installed four new self-checkout machines near the main entrance, so you can borrow books without waiting in line. Staff will be nearby all week to show you how they work. And as always, if you're returning items after we close, the outdoor drop box by the parking lot is available any time, day or night. Thank you for being part of our community." }
    ],
    translation: "図書館をご利用の皆さまにお知らせします。来週月曜日より、ウェストブルック公立図書館は平日の閉館時間を2時間延長し、7時ではなく9時に閉館いたします。これは学生の方や夜間の通勤・通学者により良くお応えするための取り組みの一環です。また、正面入口付近に新しいセルフチェックアウト機を4台設置しましたので、列に並ばずに本を借りられます。今週いっぱいスタッフが近くで使い方をご案内します。そしていつも通り、閉館後に返却される場合は、駐車場横の屋外返却ボックスを昼夜問わずいつでもご利用いただけます。地域の一員でいてくださり、ありがとうございます。",
    questions: [
      {
        q: "What is being announced?",
        choices: [
          "The opening of a new branch",
          "Longer opening hours",
          "A book donation drive",
          "A new membership fee"
        ],
        answer: 1,
        explanation: "the library will stay open two hours later ... closing at nine instead of seven（2時間遅くまで開館）が根拠。stay open ... later が Longer opening hours に言い換えられている。"
      },
      {
        q: "What has recently been installed?",
        choices: [
          "Additional parking spaces",
          "Public computers",
          "A children's reading area",
          "Self-checkout machines"
        ],
        answer: 3,
        explanation: "We've also installed four new self-checkout machines（セルフチェックアウト機を設置)が根拠。parking や computers は本文の別語(parking lot 等)からの連想ひっかけ。"
      },
      {
        q: "According to the speaker, what can visitors do at any time?",
        choices: [
          "Return books in an outdoor drop box",
          "Reserve a study room",
          "Borrow a laptop",
          "Attend a class"
        ],
        answer: 0,
        explanation: "the outdoor drop box ... is available any time, day or night（屋外返却ボックスは昼夜いつでも利用可）が根拠。any time が設問の at any time に対応。"
      }
    ]
  },
  {
    id: "s5p4-03",
    kind: "advertisement",
    title: "トーク 3(店舗広告)",
    audio: [
      { speaker: "W", text: "Looking to refresh your home without breaking the bank? This weekend only, Hartwell Furniture is holding its biggest clearance sale of the year. Every sofa, table, and bookshelf in the store is marked down at least forty percent, and select mattresses are half off. Spend more than five hundred dollars on any single item, and we'll deliver it right to your door for free. Our doors open at nine on Saturday, and the first thirty shoppers each receive a twenty-dollar gift card. You'll find us on Oak Avenue, right beside the train station. Come early — once these deals are gone, they're gone." }
    ],
    translation: "予算を抑えて家を模様替えしたいとお考えですか? 今週末限定で、ハートウェル・ファニチャーが今年最大のクリアランスセールを開催します。店内のソファ、テーブル、本棚はすべて40パーセント以上値下げ、一部のマットレスは半額です。1点で500ドルを超えるお買い上げなら、ご自宅まで無料で配送します。土曜は9時に開店し、先着30名様には20ドルのギフトカードを差し上げます。オーク通り、鉄道駅のすぐ隣です。お早めに——このお買い得品はなくなり次第終了です。",
    questions: [
      {
        q: "What type of business is being advertised?",
        choices: [
          "A moving company",
          "An interior design firm",
          "A furniture store",
          "An appliance repair shop"
        ],
        answer: 2,
        explanation: "Hartwell Furniture がソファやテーブル、本棚(sofa, table, bookshelf)を販売しており furniture store。『引っ越し業者』『内装デザイン』は家に関する連想のひっかけ。"
      },
      {
        q: "What is offered to customers who spend more than $500?",
        choices: [
          "Free home delivery",
          "A free gift card",
          "An extended warranty",
          "A larger discount"
        ],
        answer: 0,
        explanation: "Spend more than five hundred dollars ... we'll deliver it right to your door for free（500ドル超で無料配送）が根拠。ギフトカードは『先着30名』の別特典で、条件を取り違えさせるひっかけ。"
      },
      {
        q: "What will the first thirty shoppers receive?",
        choices: [
          "A free mattress",
          "A gift card",
          "A product catalog",
          "A discount coupon"
        ],
        answer: 1,
        explanation: "the first thirty shoppers each receive a twenty-dollar gift card（先着30名にギフトカード）が根拠。mattress は half off の対象で、こちらもひっかけ。"
      }
    ]
  },
  {
    id: "s5p4-04",
    kind: "tour information",
    title: "トーク 4(工場見学の案内)",
    audio: [
      { speaker: "M", text: "Welcome, everyone, to the Cocoa Bean Chocolate Factory, and thank you for joining today's tour. Here's how the next ninety minutes will go. We'll start in the roasting room, where you'll see how raw cacao beans are turned into the chocolate you know and love. After that, we'll move to the packaging line, and yes — you'll get to sample a few pieces fresh off the belt. For safety, please stay behind the yellow lines at all times and keep your hairnet on inside the production areas. You're welcome to take photos everywhere except on the packaging line, where some of our equipment is confidential. All right, let's get started." }
    ],
    translation: "皆さま、ココアビーン・チョコレート工場へようこそ。本日の見学ツアーにご参加いただきありがとうございます。これからの90分の流れをご説明します。まず焙煎室から始め、生のカカオ豆が皆さんのよく知るチョコレートになる様子をご覧いただきます。その後、包装ラインへ移動します。そうです——ベルトから出たばかりのチョコを数個試食していただけます。安全のため、常に黄色い線の内側にとどまり、製造エリア内ではヘアネットを着けたままにしてください。写真は、一部の設備が機密である包装ラインを除き、どこでも撮影可能です。それでは始めましょう。",
    questions: [
      {
        q: "Where will the tour begin?",
        choices: [
          "In the gift shop",
          "At the main entrance",
          "In the tasting room",
          "In the roasting room"
        ],
        answer: 3,
        explanation: "We'll start in the roasting room（焙煎室から始める）が根拠。start が begin に対応。gift shop や tasting room は工場見学の連想ひっかけ。"
      },
      {
        q: "What are visitors allowed to do?",
        choices: [
          "Operate the machines",
          "Sample some products",
          "Take beans home",
          "Buy items at a discount"
        ],
        answer: 1,
        explanation: "you'll get to sample a few pieces fresh off the belt（試食できる)が根拠。sample が選択肢にそのまま使われている。"
      },
      {
        q: "Where are photographs not permitted?",
        choices: [
          "In the roasting room",
          "In the parking lot",
          "On the packaging line",
          "In the tasting area"
        ],
        answer: 2,
        explanation: "take photos everywhere except on the packaging line（包装ラインを除きどこでも撮影可)が根拠。except（〜を除いて）が撮影禁止の場所を示す。roasting room は撮影可なのでひっかけ。"
      }
    ]
  },
  {
    id: "s5p4-05",
    kind: "broadcast",
    title: "トーク 5(ラジオのローカルニュース)",
    audio: [
      { speaker: "W", text: "And now for local news. The city's newest farmers market will open this Saturday in Riverside Square, giving residents a weekly place to buy fresh produce straight from area growers. More than forty vendors have signed up, offering everything from organic vegetables to homemade bread and cut flowers. The market will run every Saturday morning from eight to noon, continuing through the end of October. Organizers say on-site parking will be limited, so they encourage visitors to take the number twelve bus, which stops right at the square. For a full list of vendors, visit the city's Web site. And now, over to Sam with your weekend weather." }
    ],
    translation: "続いてローカルニュースです。市内で最も新しいファーマーズマーケットが今週土曜日、リバーサイド広場で開場します。地域の生産者から直接、新鮮な農産物を毎週買える場を住民に提供します。40を超える出店者が登録済みで、有機野菜から自家製パン、切り花まで幅広く並びます。マーケットは毎週土曜の午前8時から正午まで開かれ、10月末まで続きます。主催者によると現地の駐車は限られるため、広場のすぐ前に停まる12番バスの利用を勧めています。出店者の一覧は市のウェブサイトをご覧ください。それでは週末の天気をサムから。",
    questions: [
      {
        q: "What is the report mainly about?",
        choices: [
          "The opening of a farmers market",
          "A new public bus route",
          "A community gardening contest",
          "A road repair project"
        ],
        answer: 0,
        explanation: "The city's newest farmers market will open this Saturday（新しいファーマーズマーケットが開場)が話の中心。バスは移動手段として触れるだけで主題ではない(ひっかけ)。"
      },
      {
        q: "When will the market close for the season?",
        choices: [
          "At the end of August",
          "At the end of September",
          "At the end of October",
          "At the end of November"
        ],
        answer: 2,
        explanation: "continuing through the end of October（10月末まで続く)が根拠。毎回8時〜正午という時刻情報と混同させないよう注意する数値問題。"
      },
      {
        q: "What does the speaker encourage listeners to do?",
        choices: [
          "Bring reusable bags",
          "Take the number 12 bus",
          "Arrive before opening",
          "Register in advance"
        ],
        answer: 1,
        explanation: "they encourage visitors to take the number twelve bus（12番バスの利用を勧める)が根拠。駐車が限られるため公共交通を促している。"
      }
    ]
  },
  {
    id: "s5p4-06",
    kind: "excerpt from a meeting",
    graphicKind: "schedule",
    title: "トーク 6(会議の抜粋・図表問題)",
    graphic: "Product Launch Timeline\n1. Design finalized — May 5\n2. Prototype testing — May 19\n3. Marketing materials — June 2\n4. Public launch — June 16",
    audio: [
      { speaker: "M", text: "Let's do a quick check on our phone launch timeline. Most of it is on track, but I want to flag one delay. The group handling our marketing materials is short-staffed this month, so that piece will slip by about a week from its original date. Everything before it — the design work and the prototype testing — is already finished on schedule, and I don't expect the public launch date to move at all. To make up the lost time, I've asked the design team to pitch in and help create the promotional graphics. Let's revisit the whole schedule again next Monday." }
    ],
    translation: "【図表】製品ローンチ工程表/1. デザイン確定 — 5月5日/2. 試作品テスト — 5月19日/3. マーケティング資料 — 6月2日/4. 一般発売 — 6月16日\nスマートフォンのローンチ工程を手短に確認しましょう。ほとんどは順調ですが、1点だけ遅れを指摘しておきます。マーケティング資料を担当するグループが今月は人手不足で、その工程は当初の日程から約1週間ずれ込みます。それより前の作業——デザインと試作品テスト——はすでに予定通り完了しており、一般発売の日程は動かないと見ています。遅れを取り戻すため、デザインチームに応援を頼み、販促用のグラフィック作成を手伝ってもらうことにしました。全体の日程は来週月曜にまた見直しましょう。",
    questions: [
      {
        q: "Look at the graphic. Which date will most likely change?",
        choices: [
          "May 5",
          "May 19",
          "June 2",
          "June 16"
        ],
        answer: 2,
        explanation: "図表問題。音声で『marketing materials の工程が約1週間ずれ込む』と述べ、図表でその工程は 6月2日。図表と音声の両方が必要。design(5/5)と prototype(5/19)は完了済み、public launch(6/16)は動かないと明言されておりひっかけ。"
      },
      {
        q: "Why will there be a delay?",
        choices: [
          "A supplier shipped late.",
          "A team does not have enough staff.",
          "The budget was reduced.",
          "A test was unsuccessful."
        ],
        answer: 1,
        explanation: "The group ... is short-staffed this month（人手不足)が根拠。short-staffed が does not have enough staff に言い換えられている。"
      },
      {
        q: "What has the speaker asked the design team to do?",
        choices: [
          "Retest the prototype",
          "Delay the public launch",
          "Hire additional workers",
          "Help create promotional graphics"
        ],
        answer: 3,
        explanation: "I've asked the design team to pitch in and help create the promotional graphics（販促グラフィック作成を手伝う)が根拠。pitch in and help が Help に対応。"
      }
    ]
  },
  {
    id: "s5p4-07",
    kind: "telephone message",
    title: "トーク 7(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hello, this is a message for Mr. Alvarez. This is Tina from Rideline Auto Service. Good news — your car is ready to pick up. We replaced the brake pads and rotated the tires just as you requested. We also noticed the wiper blades were badly worn, so we went ahead and replaced those for you at no extra charge. Your total comes to two hundred and forty dollars. We're open until six today and from eight to five on Saturday. When you come by, please remember to bring the claim ticket you were given at drop-off. If you have any questions about the work, feel free to call me back. Thanks." }
    ],
    translation: "もしもし、アルバレス様への伝言です。ライドライン・オートサービスのティナと申します。良いお知らせです——お車のお引き取り準備が整いました。ご依頼どおり、ブレーキパッドを交換し、タイヤをローテーションしました。また、ワイパーブレードがひどく摩耗していたので、追加料金なしで交換しておきました。お会計は合計240ドルです。本日は6時まで、土曜は8時から5時まで営業しています。お越しの際は、お預かり時にお渡しした引換券を必ずお持ちください。作業についてご質問があれば、折り返しお電話ください。よろしくお願いします。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To say a vehicle is ready",
          "To schedule a repair",
          "To request advance payment",
          "To report a delay"
        ],
        answer: 0,
        explanation: "your car is ready to pick up（車の引き取り準備が整った)が根拠。予約を取る/前払い/遅延はいずれも本文に反するひっかけ。"
      },
      {
        q: "What did the service center do at no additional cost?",
        choices: [
          "Rotated the tires",
          "Replaced the brake pads",
          "Washed the exterior",
          "Replaced the wiper blades"
        ],
        answer: 3,
        explanation: "the wiper blades were badly worn, so we ... replaced those ... at no extra charge（ワイパーを無料で交換)が根拠。タイヤやブレーキは『依頼どおり』の有料作業で、無料の作業はワイパーだけ。"
      },
      {
        q: "What is the listener asked to bring?",
        choices: [
          "A credit card",
          "A claim ticket",
          "The owner's manual",
          "A spare key"
        ],
        answer: 1,
        explanation: "please remember to bring the claim ticket（引換券を持参)が根拠。支払い(240ドル)の連想でクレジットカードを選ばせるひっかけ。"
      }
    ]
  },
  {
    id: "s5p4-08",
    kind: "speech",
    title: "トーク 8(スピーチ)",
    audio: [
      { speaker: "M", text: "Good evening, and thank you all for coming to our annual volunteer appreciation dinner. Each year, this shelter depends on people like you — folks who give up their weekends to sort donations, serve meals, and welcome newcomers. Over the past year, our two hundred volunteers contributed more than fifteen thousand hours of service, which is a record for us. Thanks to that effort, we were able to help nearly twice as many families as we did the year before. In a few minutes, we'll be handing out certificates to everyone who reached the one-hundred-hour mark. But first, please help yourselves to the buffet at the back of the room. Enjoy the evening." }
    ],
    translation: "こんばんは、そして毎年恒例のボランティア感謝の夕食会にお集まりいただきありがとうございます。この保護施設は毎年、皆さんのような方々——週末を割いて寄付品を仕分けし、食事を配り、新しく来た人を迎える方々——に支えられています。この1年で、200名のボランティアが1万5千時間を超える奉仕を提供してくださり、これは当施設の記録です。その努力のおかげで、前年のほぼ2倍の家族を支援することができました。数分後には、100時間に達したすべての方に修了証をお渡しします。ですがまずは、部屋の奥のビュッフェをどうぞご自由にお召し上がりください。夕べをお楽しみください。",
    questions: [
      {
        q: "What is the purpose of the event?",
        choices: [
          "To raise funds",
          "To recruit new members",
          "To celebrate an anniversary",
          "To thank volunteers"
        ],
        answer: 3,
        explanation: "annual volunteer appreciation dinner（ボランティア感謝の会)が根拠。appreciation が thank に対応。募金や新規募集は本文に反するひっかけ。"
      },
      {
        q: "What record was set this past year?",
        choices: [
          "The number of donations received",
          "The number of service hours",
          "The amount of money raised",
          "The number of events held"
        ],
        answer: 1,
        explanation: "more than fifteen thousand hours of service, which is a record（1万5千時間超という記録)が根拠。donations という語は別文脈(sort donations)で登場するひっかけ。"
      },
      {
        q: "What will happen in a few minutes?",
        choices: [
          "A guest speaker will present.",
          "A raffle will be held.",
          "Certificates will be handed out.",
          "A tour will be given."
        ],
        answer: 2,
        explanation: "we'll be handing out certificates to everyone who reached the one-hundred-hour mark（100時間到達者に修了証を渡す)が根拠。"
      }
    ]
  },
  {
    id: "s5p4-09",
    kind: "talk",
    graphicKind: "list",
    title: "トーク 9(教室の案内・図表問題)",
    graphic: "Weekend Cooking Classes\n1. Fresh Pasta — $45\n2. Thai Street Food — $50\n3. French Pastries — $60\n4. Sushi Basics — $55",
    audio: [
      { speaker: "W", text: "Thanks for signing up for one of our weekend cooking classes here at the Maple Kitchen studio. Before we get to the schedule, I have one update. The instructor for our most expensive class has just moved out of state, so unfortunately we've had to cancel that session for now. Anyone who registered for it will be refunded automatically within three business days — there's nothing you need to do. The other three classes will run exactly as planned. If you'd like to switch into one of them instead, come talk to me right after this and I'll check for open spots. Just so you know, the sushi class already has a short waitlist, so let me know soon." }
    ],
    translation: "【図表】週末料理教室/1. 生パスタ — 45ドル/2. タイのストリートフード — 50ドル/3. フランス菓子 — 60ドル/4. 寿司の基礎 — 55ドル\nメープル・キッチン・スタジオの週末料理教室にお申し込みいただきありがとうございます。日程の前に1つお知らせです。最も受講料の高いクラスの講師が州外へ引っ越したばかりで、残念ながらそのクラスは当面中止することになりました。申し込まれた方には3営業日以内に自動的に返金されますので、お手続きは不要です。他の3クラスは予定どおり開催します。代わりにどれかに変更したい方は、この後すぐ私にお声がけください。空きを確認します。なお、寿司のクラスはすでに短い順番待ちがありますので、お早めにお知らせください。",
    questions: [
      {
        q: "Look at the graphic. Which class has been canceled?",
        choices: [
          "Fresh Pasta",
          "Thai Street Food",
          "French Pastries",
          "Sushi Basics"
        ],
        answer: 2,
        explanation: "図表問題。音声は『our most expensive class(最も受講料が高いクラス)』が中止と言い、クラス名は言わない。図表で最も高い60ドルは French Pastries。図表と音声の両方が必要。"
      },
      {
        q: "Why was the class canceled?",
        choices: [
          "The instructor moved away.",
          "Too few people signed up.",
          "The kitchen is being renovated.",
          "Some ingredients were unavailable."
        ],
        answer: 0,
        explanation: "The instructor ... has just moved out of state（講師が州外へ引っ越した)が根拠。moved out of state が moved away に対応。"
      },
      {
        q: "What does the speaker say about refunds?",
        choices: [
          "They must be requested in writing.",
          "They will be issued automatically.",
          "They are not available.",
          "They will take about a month."
        ],
        answer: 1,
        explanation: "will be refunded automatically within three business days（3営業日以内に自動返金)が根拠。there's nothing you need to do とも述べ、申請不要である点を確認できる。"
      }
    ]
  },
  {
    id: "s5p4-10",
    kind: "announcement",
    title: "トーク 10(施設内アナウンス)",
    audio: [
      { speaker: "M", text: "Good morning, members. This is a quick announcement from the front desk here at Summit Fitness. Please be aware that our swimming pool and hot tub will be closed for deep cleaning this Wednesday and Thursday. They'll reopen on Friday morning at the usual six-o'clock start. During the closure, all of our other facilities — the gym floor, the exercise studios, and the sauna — will stay open as normal. As a thank-you for your patience, we're giving every member a free guest pass this week, so feel free to bring a friend along to try us out. You can pick up your pass anytime at the front desk. Have a great workout." }
    ],
    translation: "会員の皆さま、おはようございます。サミット・フィットネスのフロントからの短いお知らせです。今週水曜と木曜、当施設のプールとジャグジーは徹底清掃のため閉鎖されますのでご注意ください。金曜の朝、通常どおり6時に再開します。閉鎖中も、その他の施設——ジムフロア、エクササイズスタジオ、サウナ——は通常どおり営業します。お待ちいただくお礼として、今週は会員の皆さま全員に無料のゲストパスを差し上げます。ぜひお友達を連れて当施設をお試しください。パスはフロントでいつでもお受け取りいただけます。良いトレーニングを。",
    questions: [
      {
        q: "Which facility will be closed on Wednesday and Thursday?",
        choices: [
          "The sauna",
          "The gym floor",
          "The exercise studios",
          "The swimming pool"
        ],
        answer: 3,
        explanation: "our swimming pool and hot tub will be closed（プールが閉鎖)が根拠。sauna・gym floor・studios は『通常どおり営業』と明言されておりひっかけ。"
      },
      {
        q: "When will the facility reopen?",
        choices: [
          "Wednesday evening",
          "Thursday night",
          "Friday morning",
          "Saturday afternoon"
        ],
        answer: 2,
        explanation: "They'll reopen on Friday morning at the usual six-o'clock start（金曜朝6時に再開)が根拠。閉鎖日(水・木)と混同させない時間の聞き取り問題。"
      },
      {
        q: "What is being offered to members this week?",
        choices: [
          "A free guest pass",
          "A membership discount",
          "A personal training session",
          "A free towel"
        ],
        answer: 0,
        explanation: "we're giving every member a free guest pass this week（無料ゲストパス)が根拠。会員料金の割引ではない点に注意。"
      }
    ]
  }
];
