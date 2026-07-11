// セット2 Part 4: 説明文問題(10トーク30問。図表問題×2を含む)
window.TOEIC_DATA_2 = window.TOEIC_DATA_2 || {};
window.TOEIC_DATA_2.part4 = [
  {
    id: "s2p4-01",
    title: "トーク 1(電話メッセージ)",
    audio: [
      { speaker: "M", text: "Hi, this message is for Ms. Delgado. This is Aiden from Copperfield Auto Service. Your car is ready to pick up — we finished the brake replacement and the oil change this afternoon. The total comes to two hundred and forty dollars, a bit less than our original estimate. We're open until six today and from eight to five tomorrow. One more thing: we noticed your front tires are wearing thin and may need replacing soon, but there's no rush. Give us a call if you'd like to schedule that. Thanks, and see you soon." }
    ],
    translation: "もしもし、デルガード様への伝言です。カッパーフィールド自動車サービスのエイデンです。お車の準備ができました——本日午後、ブレーキ交換とオイル交換を終えました。合計は240ドルで、当初のお見積もりより少し安くなっています。本日は6時まで、明日は8時から5時まで営業しています。もう一点、前輪がすり減ってきており近いうちに交換が必要かもしれませんが、急ぎではありません。ご希望でしたらお電話でご予約ください。それではお待ちしております。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To confirm an appointment time",
          "To say that a car is ready",
          "To offer a discount",
          "To report a delay"
        ],
        answer: 1,
        explanation: "Your car is ready to pick up(お車の準備ができた)が根拠。電話の目的は冒頭で述べられる。"
      },
      {
        q: "What does the speaker say about the cost?",
        choices: [
          "It is higher than expected.",
          "It includes a late fee.",
          "It is lower than the estimate.",
          "It has not been calculated yet."
        ],
        answer: 2,
        explanation: "a bit less than our original estimate(見積もりより少し安い)が根拠。"
      },
      {
        q: "What does the speaker recommend the listener consider?",
        choices: [
          "Replacing the front tires",
          "Buying a new car",
          "Changing the oil more often",
          "Upgrading the brakes"
        ],
        answer: 0,
        explanation: "your front tires are wearing thin and may need replacing soon が根拠。急ぎではないが交換を勧めている。"
      }
    ]
  },
  {
    id: "s2p4-02",
    title: "トーク 2(社内アナウンス)",
    audio: [
      { speaker: "W", text: "Attention, everyone. As many of you know, we're moving to a paperless filing system starting next month. To make the transition smooth, the IT department has set up a new document portal where all files should be uploaded and stored. Beginning Monday, please save your reports directly to the portal rather than printing them. If you have older paper documents that still need to be kept, scanning stations are now available on each floor. A step-by-step guide has been e-mailed to everyone. If you run into any trouble, the help desk is available by phone or online chat throughout the week." }
    ],
    translation: "皆さん、お知らせします。ご存じの通り、来月からペーパーレスのファイリングシステムに移行します。移行をスムーズにするため、IT部門が新しい文書ポータルを用意しました。すべてのファイルはそこにアップロードして保存してください。月曜からは、報告書を印刷するのではなく、直接ポータルに保存してください。まだ保管が必要な古い紙の書類がある場合は、各階にスキャンステーションを設置しています。手順ガイドを全員にメールしました。何か問題があれば、ヘルプデスクが今週いっぱい電話とオンラインチャットで対応します。",
    questions: [
      {
        q: "What change is being announced?",
        choices: [
          "A move to a paperless system",
          "A new office location",
          "A change in working hours",
          "A staff reorganization"
        ],
        answer: 0,
        explanation: "we're moving to a paperless filing system が主題。"
      },
      {
        q: "What are employees asked to do starting Monday?",
        choices: [
          "Print all their reports",
          "Save files to the portal",
          "Attend a training session",
          "Return old equipment"
        ],
        answer: 1,
        explanation: "please save your reports directly to the portal rather than printing them が根拠。"
      },
      {
        q: "What has been provided on each floor?",
        choices: [
          "New printers",
          "Scanning stations",
          "Recycling bins",
          "Charging stations"
        ],
        answer: 1,
        explanation: "scanning stations are now available on each floor が根拠。"
      }
    ]
  },
  {
    id: "s2p4-03",
    title: "トーク 3(店内放送)",
    audio: [
      { speaker: "W", text: "Good afternoon, shoppers, and welcome to Harvest Market. We hope you're enjoying your visit. Just a quick reminder that our weekend produce sale ends today at closing time, so be sure to stock up on fresh fruits and vegetables at twenty percent off. In addition, we're now offering free samples of our new line of organic soups at the deli counter near the bakery. If you're a member of our rewards program, don't forget to scan your card at checkout to earn double points all day today. Thank you for shopping with us, and have a wonderful afternoon." }
    ],
    translation: "こんにちは、お客様。ハーベスト・マーケットへようこそ。お買い物をお楽しみいただけていますでしょうか。週末の生鮮品セールは本日の閉店時間で終了しますので、新鮮な果物や野菜を20%引きでぜひお買い求めください。また、ベーカリー近くのデリカウンターでは、新しいオーガニックスープシリーズの無料試食をご用意しています。リワードプログラム会員の方は、本日一日、レジでカードをスキャンするとポイントが2倍になりますのでお忘れなく。ご来店ありがとうございます。良い午後をお過ごしください。",
    questions: [
      {
        q: "Where is the announcement being made?",
        choices: [
          "At a grocery store",
          "At a restaurant",
          "At a clothing shop",
          "At a farm"
        ],
        answer: 0,
        explanation: "welcome to Harvest Market と produce sale(生鮮品セール)から、食料品店の店内放送と分かる。"
      },
      {
        q: "What is available near the bakery?",
        choices: [
          "A checkout counter",
          "Free soup samples",
          "A customer service desk",
          "A floral display"
        ],
        answer: 1,
        explanation: "free samples of our new line of organic soups at the deli counter near the bakery が根拠。"
      },
      {
        q: "How can members earn double points today?",
        choices: [
          "By spending over a certain amount",
          "By scanning their card at checkout",
          "By buying produce",
          "By signing up online"
        ],
        answer: 1,
        explanation: "scan your card at checkout to earn double points が根拠。"
      }
    ]
  },
  {
    id: "s2p4-04",
    title: "トーク 4(会議の抜粋・図表問題)",
    graphic: "Q3 Sales by Region ($1,000s)\n1. North — 320\n2. South — 210\n3. East — 450\n4. West — 280",
    audio: [
      { speaker: "M", text: "Let's take a look at the third-quarter sales results. Overall, I'm pleased — we exceeded our targets in three of the four regions. As you can see on the chart, one region clearly led the way, bringing in far more than the others thanks to the new distribution hub we opened there in July. The only area that fell short was the South, where we lost a major client early in the quarter. To address that, we're assigning two additional sales reps to the southern territory next month. Let's discuss the details after the break." }
    ],
    translation: "【図表】第3四半期の地域別売上(千ドル)/北320/南210/東450/西280\n第3四半期の売上結果を見てみましょう。全体としては満足しています——4地域のうち3つで目標を上回りました。グラフの通り、ある地域が明らかに他を大きく引き離してトップでした。7月にそこに開設した新しい流通拠点のおかげです。唯一目標に届かなかったのは南部で、四半期の初めに大口顧客を失いました。これに対処するため、来月、南部地域に営業担当を2名追加します。詳細は休憩後に話し合いましょう。",
    questions: [
      {
        q: "Look at the graphic. Which region did the speaker say led sales?",
        choices: ["North", "South", "East", "West"],
        answer: 2,
        explanation: "図表問題。『ある地域が他を大きく引き離してトップ』と述べており、図表で最大の450はEast。"
      },
      {
        q: "According to the speaker, why did that region perform well?",
        choices: [
          "A new distribution hub opened there.",
          "Prices were lowered.",
          "A new product launched.",
          "More staff were hired."
        ],
        answer: 0,
        explanation: "thanks to the new distribution hub we opened there in July が根拠。"
      },
      {
        q: "What will happen in the southern region next month?",
        choices: [
          "A new office will open.",
          "Additional sales reps will be assigned.",
          "Prices will be cut.",
          "A store will close."
        ],
        answer: 1,
        explanation: "we're assigning two additional sales reps to the southern territory next month が根拠。"
      }
    ]
  },
  {
    id: "s2p4-05",
    title: "トーク 5(ラジオ広告)",
    audio: [
      { speaker: "W", text: "Are your energy bills higher than they should be? Let Brightline Insulation help you save. Our certified technicians will inspect your home for free and identify where heat is escaping. Most customers who upgrade their insulation with us cut their heating and cooling costs by up to thirty percent. And for this month only, we're waiving the installation fee for any whole-home package. Don't wait until winter — appointments fill up fast this time of year. Call Brightline today at 555-0143, or visit brightlineinsulation.com to book your free inspection. Brightline Insulation: comfort that pays for itself." }
    ],
    translation: "電気代が必要以上に高くありませんか? ブライトライン断熱にお任せください。当社の認定技術者が、無料でお宅を点検し、熱がどこから逃げているかを特定します。当社で断熱を改善したお客様の多くが、冷暖房費を最大30%削減しています。さらに今月限定で、全戸パッケージの設置費用を無料にします。冬まで待たないでください——この時期は予約がすぐ埋まります。今すぐブライトライン555-0143までお電話いただくか、brightlineinsulation.com で無料点検をご予約ください。ブライトライン断熱——元が取れる快適さを。",
    questions: [
      {
        q: "What service does the company provide?",
        choices: [
          "Home insulation",
          "Air conditioner repair",
          "Solar panel installation",
          "Roof cleaning"
        ],
        answer: 0,
        explanation: "Brightline Insulation と upgrade their insulation から、住宅の断熱サービス。"
      },
      {
        q: "What is offered this month only?",
        choices: [
          "A free inspection",
          "A waived installation fee",
          "A cash rebate",
          "A free thermostat"
        ],
        answer: 1,
        explanation: "for this month only, we're waiving the installation fee が根拠。無料点検は通常サービスでひっかけ。"
      },
      {
        q: "Why does the speaker say listeners should not wait?",
        choices: [
          "Prices will increase soon.",
          "Appointments fill up quickly.",
          "The company is closing.",
          "Supplies are limited."
        ],
        answer: 1,
        explanation: "appointments fill up fast this time of year が根拠。"
      }
    ]
  },
  {
    id: "s2p4-06",
    title: "トーク 6(見学ツアーの案内)",
    audio: [
      { speaker: "M", text: "Welcome, everyone, to the Riverside Chocolate Factory. I'll be your guide today. Before we begin, a few safety reminders: please stay behind the yellow lines at all times, and keep your hands away from the machinery. Photography is welcome, but flash is not permitted in the production area. Our tour will last about forty-five minutes, and we'll end in the tasting room, where you can sample several of our signature chocolates. At the end, the gift shop offers a ten percent discount to all tour guests — just mention that you took the tour. All right, let's head into the roasting room first." }
    ],
    translation: "皆さん、リバーサイド・チョコレート工場へようこそ。本日ご案内するガイドです。始める前に、いくつか安全上の注意を。常に黄色い線の内側にいてください。そして機械には手を近づけないでください。写真撮影は歓迎ですが、製造エリアでのフラッシュは禁止です。ツアーは約45分で、最後は試食室で終わります。そこでは当社を代表するチョコレートをいくつか試食できます。最後に、ギフトショップではツアー参加者全員に10%割引を提供しています——ツアーに参加したとお伝えください。それでは、まず焙煎室に向かいましょう。",
    questions: [
      {
        q: "What are the listeners reminded to do?",
        choices: [
          "Wear protective gloves",
          "Stay behind the yellow lines",
          "Turn off their phones",
          "Sign a waiver form"
        ],
        answer: 1,
        explanation: "please stay behind the yellow lines at all times が根拠。"
      },
      {
        q: "Where will the tour end?",
        choices: [
          "In the roasting room",
          "In the gift shop",
          "In the tasting room",
          "In the packaging area"
        ],
        answer: 2,
        explanation: "we'll end in the tasting room が根拠。焙煎室は最初に向かう場所でひっかけ。"
      },
      {
        q: "How can guests get a discount at the gift shop?",
        choices: [
          "By showing a ticket",
          "By mentioning the tour",
          "By joining a mailing list",
          "By buying over a certain amount"
        ],
        answer: 1,
        explanation: "just mention that you took the tour が根拠。"
      }
    ]
  },
  {
    id: "s2p4-07",
    title: "トーク 7(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hello, this is a message for Mr. Fletcher. This is Dana calling from Lakeside Dental. I'm calling to let you know that Dr. Okonkwo is now available on the afternoon you requested — Thursday, March 6, at two thirty. I've tentatively booked that slot for your cleaning, but please call back to confirm by end of day tomorrow, or the time may be released to another patient. Also, since it's been over a year since your last visit, we'll include a full set of X-rays at no additional charge. You can reach me at 555-0198. Thank you, and we look forward to seeing you." }
    ],
    translation: "もしもし、フレッチャー様への伝言です。レイクサイド歯科のダナと申します。ご希望の午後、オコンクウォ先生の予約が取れるようになりましたのでお知らせします——3月6日(木)の2時半です。その枠をクリーニング用に仮予約しましたが、明日の終業時までに折り返しご確認ください。さもないと、その時間は別の患者様に回る可能性があります。また、前回のご来院から1年以上経っていますので、追加料金なしでレントゲン一式を含めます。ご連絡は555-0198までお願いします。それではお待ちしております。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To offer an available appointment",
          "To cancel a booking",
          "To request a payment",
          "To recommend a specialist"
        ],
        answer: 0,
        explanation: "Dr. Okonkwo is now available on the afternoon you requested(希望の時間が空いた)が根拠。"
      },
      {
        q: "What must the listener do by the end of tomorrow?",
        choices: [
          "Pay a deposit",
          "Confirm the appointment",
          "Complete a form",
          "Choose a dentist"
        ],
        answer: 1,
        explanation: "please call back to confirm by end of day tomorrow が根拠。さもないと枠が他へ回る。"
      },
      {
        q: "What will be included at no extra charge?",
        choices: [
          "A cleaning kit",
          "A set of X-rays",
          "A follow-up visit",
          "A parking pass"
        ],
        answer: 1,
        explanation: "we'll include a full set of X-rays at no additional charge が根拠。1年以上ぶりの来院のため。"
      }
    ]
  },
  {
    id: "s2p4-08",
    title: "トーク 8(交通・天気情報)",
    audio: [
      { speaker: "M", text: "And now for your morning commute update. Drivers heading into the city should be aware that the northbound lanes of Route 12 are down to a single lane near the Baxter exit due to an overnight water main repair. Crews expect to reopen all lanes by around ten this morning, but until then, expect delays of twenty to thirty minutes. If you can, consider taking Elm Boulevard as an alternate route. On the weather front, that light rain will clear by noon, giving way to sunny skies this afternoon. Stay tuned — we'll have another traffic update at the top of the hour." }
    ],
    translation: "続いて朝の通勤情報です。市内へ向かうドライバーの方はご注意ください。ルート12の北行き車線が、夜間の水道本管の補修のため、バクスター出口付近で1車線に絞られています。作業員は今朝10時ごろまでに全車線を再開する見込みですが、それまでは20〜30分の遅れが予想されます。可能であれば、迂回路としてエルム大通りをご検討ください。天気ですが、この小雨は正午までに上がり、午後は晴れる見込みです。この後もお聞きください——次の交通情報は正時にお伝えします。",
    questions: [
      {
        q: "What is causing delays on Route 12?",
        choices: [
          "A traffic accident",
          "A water main repair",
          "A public event",
          "Heavy snowfall"
        ],
        answer: 1,
        explanation: "an overnight water main repair(夜間の水道本管補修)が根拠。"
      },
      {
        q: "What does the speaker suggest drivers do?",
        choices: [
          "Take an alternate route",
          "Leave later than usual",
          "Use public transit",
          "Avoid the city entirely"
        ],
        answer: 0,
        explanation: "consider taking Elm Boulevard as an alternate route が根拠。"
      },
      {
        q: "What does the speaker say about the weather?",
        choices: [
          "It will rain all day.",
          "It will become sunny in the afternoon.",
          "A storm is approaching.",
          "Temperatures will drop sharply."
        ],
        answer: 1,
        explanation: "that light rain will clear by noon, giving way to sunny skies this afternoon が根拠。"
      }
    ]
  },
  {
    id: "s2p4-09",
    title: "トーク 9(社内研修・図表問題)",
    graphic: "Onboarding Day 1 — Agenda\n1. 9:00  Welcome & HR paperwork\n2. 10:00 Office tour\n3. 11:00 IT setup\n4. 13:00 Team introductions",
    audio: [
      { speaker: "W", text: "Good morning, and welcome to your first day! Let me walk you through today's schedule. We'll start with some paperwork, then I'll show you around the building. There's one small change to the printed agenda: the IT team has an urgent system update this morning, so we've swapped the eleven o'clock session with the afternoon one. That means you'll meet your teams right before lunch instead, and we'll set up your computers and accounts after lunch. Everything else stays the same. Please keep your badge with you at all times, since you'll need it for the office tour. Any questions before we begin?" }
    ],
    translation: "【図表】入社1日目——予定表/9:00 歓迎・人事書類/10:00 オフィス案内/11:00 IT設定/13:00 チーム紹介\nおはようございます、そして入社初日おめでとうございます! 本日の予定をご説明します。まず書類手続きから始め、その後、館内をご案内します。印刷した予定表に1つ小さな変更があります。IT チームが今朝、緊急のシステム更新を行うため、11時のセッションと午後のセッションを入れ替えました。つまり、ランチの直前にチームと顔合わせをし、コンピューターとアカウントの設定はランチ後になります。それ以外は変更ありません。オフィス案内で必要になるので、バッジは常に携帯してください。始める前に、何かご質問はありますか?",
    questions: [
      {
        q: "Look at the graphic. Which session has been moved to the afternoon?",
        choices: [
          "Welcome & HR paperwork",
          "Office tour",
          "IT setup",
          "Team introductions"
        ],
        answer: 2,
        explanation: "図表問題。『11時のセッションと午後を入れ替えた』とあり、図表の11:00は IT setup。ITの緊急更新が理由。"
      },
      {
        q: "Why was the schedule changed?",
        choices: [
          "A room was unavailable.",
          "The IT team has an urgent update.",
          "A speaker was absent.",
          "Too few people signed up."
        ],
        answer: 1,
        explanation: "the IT team has an urgent system update this morning が根拠。"
      },
      {
        q: "Why do the listeners need their badges?",
        choices: [
          "For the office tour",
          "To enter the parking lot",
          "To log into computers",
          "To receive lunch"
        ],
        answer: 0,
        explanation: "you'll need it for the office tour が根拠。"
      }
    ]
  },
  {
    id: "s2p4-10",
    title: "トーク 10(受賞スピーチ)",
    audio: [
      { speaker: "M", text: "Thank you all so much for this honor. When I founded Willow Lane Books fifteen years ago, it was just a tiny shop with two employees and a lot of hope. Tonight, being named Small Business of the Year means the world to me. I want to thank our incredible staff, who treat every customer like a neighbor, and this community, which has supported us through good times and hard ones. I also want to announce that, starting this spring, we'll be opening a second location downtown, along with a free weekend reading program for local children. None of this would be possible without you. Thank you again." }
    ],
    translation: "この栄誉に、皆さん本当にありがとうございます。15年前にウィローレーン書店を創業したとき、それは従業員2人と多くの希望だけの小さな店でした。今夜、年間最優秀中小企業に選ばれたことは、私にとって何よりの意味を持ちます。すべてのお客様を隣人のように扱ってくれる素晴らしいスタッフ、そして良い時も苦しい時も支えてくれたこの地域に感謝します。また、この春から、ダウンタウンに2号店を開き、地元の子どもたち向けに週末の無料読書プログラムを始めることを発表したいと思います。これはすべて皆さんのおかげです。改めてありがとうございます。",
    questions: [
      {
        q: "What is the speaker receiving?",
        choices: [
          "A business award",
          "A research grant",
          "A promotion",
          "A retirement gift"
        ],
        answer: 0,
        explanation: "being named Small Business of the Year(年間最優秀中小企業に選ばれた)が根拠。"
      },
      {
        q: "What kind of business does the speaker own?",
        choices: [
          "A bookstore",
          "A café",
          "A clothing shop",
          "A bakery"
        ],
        answer: 0,
        explanation: "I founded Willow Lane Books ... a tiny shop から、書店の経営者。"
      },
      {
        q: "What does the speaker announce?",
        choices: [
          "A second location will open.",
          "The store will close.",
          "Prices will be reduced.",
          "A new manager will be hired."
        ],
        answer: 0,
        explanation: "we'll be opening a second location downtown が根拠。"
      }
    ]
  }
];
