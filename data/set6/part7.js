// セット6 part7(重複差し替え・正解位置均等化済み)
window.TOEIC_DATA_6 = window.TOEIC_DATA_6 || {};
window.TOEIC_DATA_6.part7 = [
  {
    "id": "s6p7-01",
    "title": "シングル 1(テキストメッセージのやり取り)",
    "passages": [
      {
        "docType": "Text-message chain",
        "text": "Olivia Brand (9:32 A.M.)\nHi Marcus, are you on the Cedar Plaza site today? The upholstery samples for the lobby sofas just arrived at our studio.\n\nMarcus Doyle (9:34 A.M.)\nI'm here until noon. The client wants to pick the fabric before the framing crew starts on Thursday.\n\nOlivia Brand (9:35 A.M.)\nThat's cutting it close. There are six options — three blues and three greens.\n\nMarcus Doyle (9:36 A.M.)\nCan you drop them by around eleven? The client is walking the site at 11:30.\n\nOlivia Brand (9:37 A.M.)\nI have a supplier call at eleven. Let me send them with Priya — she's heading your way with the light fixtures anyway.\n\nMarcus Doyle (9:38 A.M.)\nThat works. Just make sure the samples are labeled.\n\nOlivia Brand (9:39 A.M.)\nAlready done. Priya will be there by 10:45.\n\nMarcus Doyle (9:40 A.M.)\nYou read my mind."
      }
    ],
    "translation": "オリビア・ブランド(午前9:32):マーカス、今日シダー・プラザの現場にいる? ロビーのソファ用の張り地サンプルがちょうどスタジオに届いたの。\nマーカス・ドイル(午前9:34):正午までいるよ。クライアントは、木曜に骨組みの作業班が入る前に生地を選びたがってる。\nオリビア・ブランド(午前9:35):ぎりぎりね。6種類あって、青が3つ、緑が3つ。\nマーカス・ドイル(午前9:36):11時ごろまでに届けてくれる? クライアントが11時半に現場を見て回るんだ。\nオリビア・ブランド(午前9:37):11時に仕入先との電話があるの。プリヤに持って行かせるわ——彼女はどのみち照明器具を持ってそっちに向かうから。\nマーカス・ドイル(午前9:38):それでいい。サンプルにラベルを付けておいてね。\nオリビア・ブランド(午前9:39):もう付けてあるわ。プリヤは10時45分までに着くはず。\nマーカス・ドイル(午前9:40):さすが、分かってるね。",
    "questions": [
      {
        "q": "Why did Ms. Brand contact Mr. Doyle?",
        "choices": [
          "To let him know some samples had arrived",
          "To reschedule a client visit",
          "To order new light fixtures",
          "To confirm a construction deadline"
        ],
        "answer": 0,
        "explanation": "最初のメッセージ『張り地サンプルがスタジオに届いた』が連絡の理由。届いたことを知らせる目的。(A)の期限や(B)の予定変更は本文にない。"
      },
      {
        "q": "At 9:40 A.M., what does Mr. Doyle most likely mean when he writes, \"You read my mind\"?",
        "choices": [
          "He wants Ms. Brand to join the site visit.",
          "He is glad his request was already handled.",
          "He agrees the client should choose the fabric.",
          "He forgot to label the samples himself."
        ],
        "answer": 1,
        "explanation": "意図問題。直前で『ラベルを付けて』と頼んだのに対し『もう付けてある』と返ってきた流れなので、頼みが先に処理されていたことへの満足を表す。文字通り『心を読む』ではない。"
      },
      {
        "q": "What will Priya most likely do?",
        "choices": [
          "Bring items to the Cedar Plaza site",
          "Choose the lobby fabric",
          "Begin the framing work",
          "Attend a supplier call"
        ],
        "answer": 0,
        "explanation": "Let me send them with Priya — she's heading your way with the light fixtures から、プリヤがサンプルと照明器具を現場に届けると分かる。(A)の仕入先電話はオリビアの予定。"
      }
    ]
  },
  {
    "id": "s6p7-02",
    "title": "シングル 2(広告)",
    "passages": [
      {
        "docType": "Advertisement",
        "text": "THREAD & VINE — Autumn Collection Now In Store\n\nDiscover our new season of tailored coats, knitwear, and accessories at Thread & Vine on Marlow Street.\n\nThis month only:\n1. Complimentary in-store alterations on all full-price garments\n2. 15% off when you spend over $200\n3. A free canvas tote with any purchase of two or more items\n4. Early access to the winter collection for members of our loyalty program\n\nOur stylists are available for one-on-one wardrobe consultations by appointment. Visit Monday–Saturday, 10 A.M.–8 P.M., or shop online at threadandvine.com. Please note that alterations require three to five business days."
      }
    ],
    "translation": "スレッド&ヴァイン——秋のコレクション、店頭に登場\n\nマーロー通りのスレッド&ヴァインで、仕立てのコート、ニット、アクセサリーの新シーズンをどうぞ。\n\n今月限定:\n1. 全定価品の店内お直し無料\n2. 200ドル超のお買い上げで15%オフ\n3. 2点以上のご購入でキャンバストートを無料進呈\n4. ロイヤルティ会員様は冬コレクションに先行アクセス\n\nスタイリストによる一対一のワードローブ相談も予約制で承ります。ご来店は月曜〜土曜、午前10時〜午後8時。オンラインは threadandvine.com。なお、お直しには3〜5営業日かかります。",
    "questions": [
      {
        "q": "What is NOT mentioned as an offer this month?",
        "choices": [
          "Free alterations on full-price items",
          "A free tote with multiple items",
          "Free shipping on online orders",
          "A discount for spending over $200"
        ],
        "answer": 2,
        "explanation": "NOT問題。無料お直し・15%オフ・トート進呈・冬物先行アクセスは記載あり。オンライン送料無料には触れていないので(D)が正解。"
      },
      {
        "q": "What is indicated about alterations?",
        "choices": [
          "They cost an additional fee.",
          "They take several business days.",
          "They are limited to coats.",
          "They are available online."
        ],
        "answer": 1,
        "explanation": "alterations require three to five business days(3〜5営業日かかる)が根拠。complimentary(無料)なので(B)は誤り。"
      },
      {
        "q": "Who receives early access to the winter collection?",
        "choices": [
          "Loyalty program members",
          "Customers who spend over $200",
          "Online shoppers",
          "First-time visitors"
        ],
        "answer": 0,
        "explanation": "Early access ... for members of our loyalty program が根拠。200ドル超は割引の条件でひっかけ。"
      }
    ]
  },
  {
    "id": "s6p7-03",
    "title": "シングル 3(Eメール)",
    "passages": [
      {
        "docType": "E-mail",
        "text": "From: Grace Okafor, Business Relationship Manager, Meridian Bank\nTo: Tomás Herrera\nSubject: Your new business account is ready\nDate: February 9\n\nDear Mr. Herrera,\n\nWelcome to Meridian Bank. Your business checking account for Herrera Landscaping (account ending 4417) is now active. Your debit cards and checkbook will arrive by mail within seven business days.\n\nTo begin using online banking, please visit our branch once with a photo ID to complete identity verification; this step cannot be done over the phone. After that, you can manage transfers, deposits, and payroll entirely online.\n\nYour account includes 200 free transactions per month. Beyond that, each transaction costs $0.30. If your monthly balance stays above $10,000, the standard $15 monthly maintenance fee is waived.\n\nPlease don't hesitate to contact me directly with any questions.\n\nBest regards,\nGrace Okafor"
      }
    ],
    "translation": "差出人:グレース・オカフォー(法人担当マネージャー、メリディアン銀行)\n宛先:トマス・エレーラ\n件名:法人口座のご準備が整いました\n日付:2月9日\n\nエレーラ様\n\nメリディアン銀行へようこそ。エレーラ・ランドスケーピング様の法人当座預金口座(下4桁4417)が有効になりました。デビットカードと小切手帳は7営業日以内に郵送で届きます。\n\nオンラインバンキングをご利用いただくには、一度、写真付き身分証をお持ちのうえ支店にお越しいただき、本人確認を完了してください。この手続きは電話では行えません。完了後は、送金・入金・給与支払いをすべてオンラインで管理できます。\n\n口座には月200件までの無料取引が含まれます。それを超える取引は1件0.30ドルです。月の残高が1万ドルを超えていれば、通常の月額維持手数料15ドルは免除されます。\n\nご不明点は私まで直接ご連絡ください。\n\nよろしくお願いいたします。\nグレース・オカフォー",
    "questions": [
      {
        "q": "What is the purpose of the e-mail?",
        "choices": [
          "To offer a business loan",
          "To request a photo ID by mail",
          "To confirm that an account is active",
          "To report suspicious activity"
        ],
        "answer": 2,
        "explanation": "Your business checking account ... is now active(口座が有効になった)ことの通知が主目的。融資の案内(A)や不正利用の報告(C)ではない。"
      },
      {
        "q": "What must Mr. Herrera do to start using online banking?",
        "choices": [
          "Call the bank's help line",
          "Order a new debit card",
          "Mail a signed form",
          "Visit a branch in person"
        ],
        "answer": 3,
        "explanation": "please visit our branch once with a photo ID ... cannot be done over the phone が根拠。来店による本人確認が必要で、電話不可とわざわざ書かれている。"
      },
      {
        "q": "How can the monthly maintenance fee be avoided?",
        "choices": [
          "By enrolling in payroll services",
          "By making fewer than 200 transactions",
          "By paying an annual fee",
          "By keeping the balance above $10,000"
        ],
        "answer": 3,
        "explanation": "If your monthly balance stays above $10,000, the ... fee is waived が根拠。200件は無料取引の上限でひっかけ。"
      }
    ]
  },
  {
    "id": "s6p7-04",
    "title": "シングル 4(お知らせ)",
    "passages": [
      {
        "docType": "Notice",
        "text": "RIVERSTONE CONCERT HALL — Patron Notice\n\nDue to a scheduling conflict, the string quartet originally booked for the evening of March 14 will now perform on March 21. All tickets for March 14 will be honored on the new date.\n\nPatrons who cannot attend on March 21 may exchange their tickets for any other concert this season at the box office, or request a full refund no later than March 10.\n\nPlease also note our latecomer policy: to avoid disturbing the performers, guests arriving after a performance has begun will be seated only during intervals.\n\nWe appreciate your understanding and look forward to welcoming you."
      }
    ],
    "translation": "リバーストーン・コンサートホール——ご来場者へのお知らせ\n\n日程の重複により、3月14日夜に予定していた弦楽四重奏の公演は3月21日に変更となります。3月14日のチケットは新しい日程でそのまま有効です。\n\n3月21日にご来場いただけない方は、ボックスオフィスで今シーズンの他公演のチケットと交換いただけます。または、3月10日までに全額払い戻しをご請求いただけます。\n\nまた、遅れてご来場の方への方針をご確認ください。演奏者の妨げにならないよう、開演後にお越しの方は休憩時間のみご案内いたします。\n\nご理解に感謝いたします。ご来場をお待ちしております。",
    "questions": [
      {
        "q": "What is the purpose of the notice?",
        "choices": [
          "To introduce a new quartet",
          "To announce a rescheduled performance",
          "To advertise season passes",
          "To raise ticket prices"
        ],
        "answer": 1,
        "explanation": "冒頭『3月14日の公演が3月21日に変更』という日程変更の告知が主目的。新しい楽団の紹介(B)や値上げ(C)ではない。"
      },
      {
        "q": "What is indicated about latecomers?",
        "choices": [
          "They are not admitted at all.",
          "They must sit in the back row.",
          "They are seated during intervals only.",
          "They receive a discount."
        ],
        "answer": 2,
        "explanation": "seated only during intervals(休憩時間のみ案内)が根拠。入場自体は認められるので(D)『一切入場不可』は誤り。"
      },
      {
        "q": "How can a patron who cannot attend obtain a refund?",
        "choices": [
          "By exchanging for a recording",
          "By calling the performers",
          "By arriving during an interval",
          "By requesting one by March 10"
        ],
        "answer": 3,
        "explanation": "request a full refund no later than March 10(3月10日までに請求)が根拠。交換は他公演のチケットとであり(C)は誤り。"
      }
    ]
  },
  {
    "id": "s6p7-05",
    "title": "シングル 5(オンラインチャット)",
    "passages": [
      {
        "docType": "Online chat",
        "text": "Nadia Foster (7:12 A.M.)\nSam, we're almost out of the house blend and the roaster's delivery hasn't come. The Saturday rush starts in an hour.\n\nSam Ortega (7:13 A.M.)\nI can call the roaster, but they don't open until eight.\n\nNadia Foster (7:14 A.M.)\nWe can't wait that long. What's in the back?\n\nSam Ortega (7:15 A.M.)\nTwo bags of the single-origin Colombian. Pricier, but it'll do.\n\nNadia Foster (7:16 A.M.)\nLet's use it and not charge extra today. I'll put a note on the board.\n\nSam Ortega (7:17 A.M.)\nOn it. I'll grind a batch now.\n\nNadia Foster (7:18 A.M.)\nThat'll buy us time."
      }
    ],
    "translation": "ナディア・フォスター(午前7:12):サム、ハウスブレンドがもうすぐ切れそうなのに焙煎所の配達が来てないの。土曜の混雑があと1時間で始まるわ。\nサム・オルテガ(午前7:13):焙煎所に電話できるけど、8時まで開かないよ。\nナディア・フォスター(午前7:14):そんなに待てない。奥に何がある?\nサム・オルテガ(午前7:15):シングルオリジンのコロンビアが2袋。少し高いけど、それで足りるよ。\nナディア・フォスター(午前7:16):それを使って、今日は追加料金は取らないでおきましょう。掲示板に一言書いておくわ。\nサム・オルテガ(午前7:17):了解。今すぐ一回分挽くね。\nナディア・フォスター(午前7:18):それで時間が稼げるわね。",
    "questions": [
      {
        "q": "Why did Ms. Foster contact Mr. Ortega?",
        "choices": [
          "To complain about a customer",
          "To report a low supply of coffee",
          "To request a day off",
          "To change the café's opening time"
        ],
        "answer": 1,
        "explanation": "最初のメッセージ we're almost out of the house blend(ハウスブレンドが切れそう)が連絡の理由。在庫不足の報告。"
      },
      {
        "q": "At 7:18 A.M., what does Ms. Foster most likely mean when she writes, \"That'll buy us time\"?",
        "choices": [
          "The café will open later than usual.",
          "Customers will be charged extra today.",
          "The coffee they grind now will last until more arrives.",
          "The roaster will deliver within the hour."
        ],
        "answer": 2,
        "explanation": "意図問題。直前の『今すぐ一回分挽く』を受け、挽いたコロンビアで配達(または開店)まで持たせられるという意味。(B)は『追加料金は取らない』と正反対。"
      }
    ]
  },
  {
    "id": "s6p7-06",
    "title": "シングル 6(記事)",
    "passages": [
      {
        "docType": "Article",
        "text": "MILLBROOK (April 5) — Community radio station WKMB launched a new afternoon program, \"Millbrook Voices,\" on Monday, giving local residents a platform to discuss neighborhood issues on the air.\n\nThe one-hour show airs on weekdays at 4 P.M. and invites listeners to call in with questions for guests, who range from small-business owners to city council members. The station, which is run largely by volunteers, funds its operations through listener donations and local advertising.\n\n\"We wanted a program that belongs to the community, not to us,\" said station manager Dell Rowe. Since the launch, the station's Web site has seen a 40 percent rise in traffic.\n\nRowe added that WKMB hopes to add a Saturday segment featuring local bands by the summer, pending additional funding."
      }
    ],
    "translation": "ミルブルック(4月5日)——コミュニティラジオ局WKMBは月曜、新しい午後の番組『ミルブルック・ボイシズ』を開始し、地域住民が近隣の課題を放送で話し合える場を設けた。\n\n1時間の番組は平日午後4時に放送され、リスナーは電話で参加してゲストに質問できる。ゲストは小規模事業者から市議会議員まで幅広い。局はおもにボランティアで運営され、リスナーからの寄付と地元広告で運営費をまかなっている。\n\n『私たちのものではなく、地域のものになる番組にしたかった』と局長のデル・ロウ氏は語る。開始以降、局のウェブサイトへのアクセスは40パーセント増えた。\n\nロウ氏は、資金が追加で確保できれば、夏までに地元バンドを特集する土曜の枠を設けたいと付け加えた。",
    "questions": [
      {
        "q": "What is the article mainly about?",
        "choices": [
          "The launch of a new radio program",
          "The closing of a local station",
          "A change in advertising rates",
          "A city council election"
        ],
        "answer": 0,
        "explanation": "第1段落の『新しい午後の番組を開始した』が記事全体の主題。閉局(B)や選挙(D)ではない。"
      },
      {
        "q": "How does the station fund its operations?",
        "choices": [
          "Through government grants",
          "Through listener donations and advertising",
          "Through subscription fees",
          "Through ticket sales"
        ],
        "answer": 1,
        "explanation": "funds its operations through listener donations and local advertising が根拠。政府補助(A)や購読料(C)ではない。"
      },
      {
        "q": "What does Mr. Rowe say WKMB hopes to do?",
        "choices": [
          "Move to a new studio",
          "Add a music segment on Saturdays",
          "Broadcast in a second language",
          "Hire more full-time staff"
        ],
        "answer": 1,
        "explanation": "hopes to add a Saturday segment featuring local bands(土曜に地元バンドの枠を設けたい)が根拠。資金次第(pending funding)という留保付き。"
      }
    ]
  },
  {
    "id": "s6p7-07",
    "title": "シングル 7(Eメール)",
    "passages": [
      {
        "docType": "E-mail",
        "text": "From: Bianca Ruiz, Festival Director, Lakeside Food & Music Festival\nTo: Trevor Hoang, Golden Grain Bakery\nSubject: Sponsorship confirmation\nDate: May 22\n\nDear Mr. Hoang,\n\nThank you for confirming Golden Grain Bakery as a Silver Sponsor of this year's Lakeside Food & Music Festival on June 14–15. This e-mail outlines what your sponsorship includes and what we need from you.\n\nYour package includes a 3-meter vendor booth near the main stage, your logo on all printed programs, and two mentions per day from the stage announcer. Booth setup is on June 13 between 2 P.M. and 6 P.M.\n\nTo finalize the program, please send a high-resolution version of your logo by May 30. If you would like to include a coupon in our visitor booklet, we need that artwork by the same date.\n\nPayment of the sponsorship fee is due by June 1. An invoice is attached.\n\nWarm regards,\nBianca Ruiz"
      }
    ],
    "translation": "差出人:ビアンカ・ルイス(フェスティバル・ディレクター、レイクサイド・フード&ミュージック・フェスティバル)\n宛先:トレバー・ホアン(ゴールデン・グレイン・ベーカリー)\n件名:スポンサー確定のご連絡\n日付:5月22日\n\nホアン様\n\n6月14〜15日開催の本年のレイクサイド・フード&ミュージック・フェスティバルで、ゴールデン・グレイン・ベーカリー様にシルバースポンサーをお引き受けいただき、ありがとうございます。本メールでは、スポンサー特典と、こちらからのお願い事項をご案内します。\n\nご提供内容は、メインステージ近くの3メートルの出店ブース、全印刷プログラムへのロゴ掲載、ステージ司会者による1日2回の紹介です。ブース設営は6月13日午後2時〜6時です。\n\nプログラムを確定するため、5月30日までに高解像度のロゴをお送りください。来場者向け冊子にクーポンを掲載されたい場合も、同じ期日までにその原稿が必要です。\n\nスポンサー料のお支払いは6月1日が期限です。請求書を添付します。\n\nよろしくお願いいたします。\nビアンカ・ルイス",
    "questions": [
      {
        "q": "What is the purpose of the e-mail?",
        "choices": [
          "To cancel a festival",
          "To request a refund",
          "To invite the bakery to apply for sponsorship",
          "To confirm sponsorship arrangements"
        ],
        "answer": 3,
        "explanation": "Thank you for confirming ... as a Silver Sponsor(すでに確定)とあり、特典と依頼事項を案内している。招待(A)ではなく手配の確認。"
      },
      {
        "q": "What must Mr. Hoang send by May 30?",
        "choices": [
          "The sponsorship payment",
          "A high-resolution logo",
          "A signed contract",
          "A list of products"
        ],
        "answer": 1,
        "explanation": "please send a high-resolution version of your logo by May 30 が根拠。支払いは6月1日期限でひっかけ。"
      },
      {
        "q": "What is included in the sponsorship?",
        "choices": [
          "Mentions from the stage announcer",
          "Free parking for staff",
          "A discount on festival tickets",
          "A private dressing room"
        ],
        "answer": 0,
        "explanation": "two mentions per day from the stage announcer が根拠。駐車場・割引・楽屋は本文にない。"
      }
    ]
  },
  {
    "id": "s6p7-08",
    "title": "シングル 8(手紙)",
    "passages": [
      {
        "docType": "Letter",
        "text": "Dear Ms. Aldridge,\n\nThank you for choosing Ledgerwood & Pike for your small-business accounting this year. I am writing regarding the year-end financial statement you requested on January 8.\n\nBecause of an unusually heavy filing season, the statement was delivered three days later than the date we had promised, and I sincerely apologize for the delay. I understand you needed it for a loan application, and I regret any inconvenience this may have caused.\n\nTo make up for this, we have applied a 10 percent credit toward your next quarterly bookkeeping invoice. The credit will appear automatically and requires no action on your part.\n\nShould you need any further documents for your lender, please contact me and I will prepare them at no charge.\n\nSincerely,\nHarold Vance\nLedgerwood & Pike"
      }
    ],
    "translation": "アルドリッジ様\n\n本年、スモールビジネスの会計にレジャーウッド&パイクをお選びいただき、ありがとうございます。1月8日にご依頼いただいた年度末財務諸表についてご連絡します。\n\n申告シーズンが例年になく多忙だったため、財務諸表のお届けがお約束した日より3日遅れました。遅延を心よりお詫び申し上げます。融資の申込にご入用だったと承知しており、ご不便をおかけしたことを申し訳なく思います。\n\nお詫びとして、次回の四半期記帳請求書に10パーセントのクレジットを適用いたしました。クレジットは自動的に反映され、お客様側でのお手続きは不要です。\n\n貸し手向けに追加の書類が必要でしたら、私までご連絡ください。無料でご用意いたします。\n\n敬具\nハロルド・バンス\nレジャーウッド&パイク",
    "questions": [
      {
        "q": "Why was the letter written?",
        "choices": [
          "To apologize for a delay",
          "To announce a new service",
          "To request payment of an invoice",
          "To confirm a loan approval"
        ],
        "answer": 0,
        "explanation": "the statement was delivered three days later ... I sincerely apologize for the delay から、書類の遅延に対する謝罪が目的。融資承認の確認(C)ではない。"
      },
      {
        "q": "What is suggested about Ledgerwood & Pike?",
        "choices": [
          "It is relocating its office.",
          "It recently opened.",
          "It has been very busy recently.",
          "It is raising its fees."
        ],
        "answer": 2,
        "explanation": "an unusually heavy filing season(例年になく多忙な申告シーズン)が遅延の理由として述べられている。"
      },
      {
        "q": "What is indicated about the credit?",
        "choices": [
          "It must be requested by phone.",
          "It can be exchanged for cash.",
          "It expires at year-end.",
          "It will be applied automatically."
        ],
        "answer": 3,
        "explanation": "The credit will appear automatically and requires no action(自動反映・手続き不要)が根拠。電話請求(A)や現金化(D)は誤り。"
      }
    ]
  },
  {
    "id": "s6p7-09",
    "title": "シングル 9(広告)",
    "passages": [
      {
        "docType": "Advertisement",
        "text": "SAFFRON & SAGE — A New Neighborhood Bistro on Chestnut Row\n\nNow serving seasonal Mediterranean plates in a warm, casual setting.\n\nOpening-week highlights (through October 12):\n1. A complimentary appetizer with every dinner for two\n2. Half-price coffee and dessert at weekend brunch (Saturday and Sunday, 9 A.M.–2 P.M.)\n3. A hands-on pasta-making class every Thursday evening — $45 per person, ingredients provided\n\nReservations are recommended for dinner and essential for the pasta class, as seats are limited to twelve. Book at saffronandsage.com or call us directly.\n\nWe source our produce from farms within the region and change our menu monthly to reflect what is freshest."
      }
    ],
    "translation": "サフラン&セージ——チェスナット・ロウにオープンした地元ビストロ\n\n温かくカジュアルな雰囲気で、季節の地中海料理をご提供します。\n\nオープン週の見どころ(10月12日まで):\n1. 2名様ディナーごとに前菜を1品無料\n2. 週末ブランチ(土日午前9時〜午後2時)でコーヒーとデザートが半額\n3. 毎週木曜夜の実践パスタ作り教室——お一人45ドル、材料込み\n\nディナーは予約推奨、パスタ教室は定員12名のため予約必須です。ご予約は saffronandsage.com または直接お電話で。\n\n食材は地域内の農場から仕入れ、いちばん新鮮なものを反映してメニューは毎月変わります。",
    "questions": [
      {
        "q": "What type of business is being advertised?",
        "choices": [
          "A produce farm",
          "A grocery store",
          "A cooking school",
          "A restaurant"
        ],
        "answer": 3,
        "explanation": "seasonal Mediterranean plates を提供する bistro(ビストロ)なので飲食店。パスタ教室(B)、農場からの仕入れ(D)は本文中の要素だが業態ではない。"
      },
      {
        "q": "The word \"essential\" in the fourth paragraph is closest in meaning to",
        "choices": [
          "necessary",
          "temporary",
          "expensive",
          "optional"
        ],
        "answer": 0,
        "explanation": "語彙問題。essential(不可欠な)= necessary(必要な)。定員12名で予約必須という文脈からも判断できる。"
      },
      {
        "q": "What is indicated about the menu?",
        "choices": [
          "It is only available at brunch.",
          "It changes every month.",
          "It is set by a guest chef.",
          "It focuses on desserts."
        ],
        "answer": 1,
        "explanation": "change our menu monthly が根拠。デザート中心(B)やブランチ限定(C)ではない。"
      }
    ]
  },
  {
    "id": "s6p7-10",
    "title": "シングル 10(社内メモ)",
    "passages": [
      {
        "docType": "Memo",
        "text": "MEMO\nTo: All Store Associates\nFrom: Yuki Tanaka, Retail Operations Manager\nDate: August 12\nRe: Updated exchange policy and autumn floor set\n\nStarting September 1, our exchange window will extend from 14 to 30 days for all full-price items. Sale items remain final. Please remind customers to keep their receipts, as exchanges without proof of purchase cannot be processed at the register.\n\nA short training video explaining the new policy is available on the staff portal. Every associate should watch it and mark it complete by August 25.\n\nSeparately, the autumn floor set begins on the night of August 31. Associates scheduled for that evening will help move mannequins and refresh window displays after closing. If you are on that shift and cannot stay late, please tell your store manager this week.\n\nYuki"
      }
    ],
    "translation": "メモ\n宛先:全店舗スタッフ\n差出人:ユキ・タナカ(店舗運営マネージャー)\n日付:8月12日\n件名:交換方針の変更と秋のフロアセット\n\n9月1日より、全定価品の交換期間を14日から30日に延長します。セール品は従来通り交換不可です。レシートなしでは店頭で交換処理ができないため、お客様にレシートの保管をお伝えください。\n\n新方針を説明する短い研修動画がスタッフポータルにあります。全スタッフは8月25日までに視聴し、完了マークを付けてください。\n\n別件で、秋のフロアセットを8月31日夜に開始します。その晩シフトのスタッフは、閉店後にマネキンの移動とウィンドウ陳列の刷新を手伝います。当該シフトで遅くまで残れない場合は、今週中に店長に伝えてください。\n\nユキ",
    "questions": [
      {
        "q": "What is changing on September 1?",
        "choices": [
          "The length of the exchange period",
          "Employee uniforms",
          "The store's opening hours",
          "The register software"
        ],
        "answer": 0,
        "explanation": "our exchange window will extend from 14 to 30 days(交換期間を14日から30日に延長)が根拠。営業時間や制服の変更ではない。"
      },
      {
        "q": "What must associates do by August 25?",
        "choices": [
          "Submit a receipt",
          "Rearrange a window display",
          "Complete a training video",
          "Update a price list"
        ],
        "answer": 2,
        "explanation": "watch it and mark it complete by August 25(研修動画を視聴し完了マーク)が根拠。ウィンドウ陳列は8月31日夜の作業でひっかけ。"
      },
      {
        "q": "Why would an associate speak to a store manager?",
        "choices": [
          "To say they cannot work late",
          "To request a refund",
          "To report a broken register",
          "To order new mannequins"
        ],
        "answer": 0,
        "explanation": "cannot stay late, please tell your store manager(遅くまで残れない場合は店長に伝える)が根拠。"
      }
    ]
  },
  {
    "id": "s6p7-11",
    "title": "ダブル 1(お知らせ+Eメール)",
    "passages": [
      {
        "docType": "Notice",
        "text": "SUMMIT FEDERAL BANK — Business Savings Account Tiers\n\nChoose the tier that fits your balance. Interest is paid monthly.\n\n1. Basic (balance $0–$9,999): 0.5% annual interest, $8 monthly fee\n2. Advantage (balance $10,000–$49,999): 1.2% annual interest, no monthly fee, free wire transfers (up to 3 per month)\n3. Premier (balance $50,000 and above): 2.0% annual interest, no monthly fee, unlimited free wire transfers, a dedicated account manager\n\nAll tiers include free online banking and mobile check deposit. To move to a higher tier, no application is needed; your tier is set automatically each month based on your average balance. Wire transfers beyond the free allowance cost $12 each."
      },
      {
        "docType": "E-mail",
        "text": "From: Carla Nwosu, Nwosu Interiors\nTo: business@summitfederal.com\nSubject: Account tier and wire transfers\nDate: June 3\n\nHello,\n\nI opened a business savings account last month and kept an average balance of about $28,000 in May. I'd like to confirm which tier that places me in and whether I am charged a monthly fee.\n\nI also sent five wire transfers to suppliers in May. Could you tell me how much, if anything, I owe for those?\n\nFinally, once my balance grows, I'm interested in having a dedicated account manager. What balance would I need to reach for that?\n\nThank you,\nCarla Nwosu"
      }
    ],
    "translation": "【お知らせ】サミット・フェデラル銀行——法人普通預金のティア(区分)\n残高に合ったティアをお選びください。利息は毎月支払われます。\n1. ベーシック(残高0〜9,999ドル):年利0.5%、月額手数料8ドル\n2. アドバンテージ(残高10,000〜49,999ドル):年利1.2%、月額手数料なし、電信送金無料(月3回まで)\n3. プレミア(残高50,000ドル以上):年利2.0%、月額手数料なし、電信送金無制限無料、専任担当者\n全ティアに無料オンラインバンキングとモバイル小切手入金が含まれます。上位ティアへの移行に申請は不要で、毎月の平均残高に応じて自動的に区分されます。無料枠を超える電信送金は1回12ドルです。\n\n【Eメール】\n差出人:カーラ・ンウォス(ンウォス・インテリアズ)\n宛先:business@summitfederal.com\n件名:口座ティアと電信送金について\n日付:6月3日\n\nこんにちは。\n\n先月、法人普通預金口座を開設し、5月は平均残高を約28,000ドルに保っていました。私がどのティアに該当し、月額手数料がかかるかを確認したいです。\n\nまた、5月に仕入先へ電信送金を5回行いました。それについて、いくら支払う必要があるか(あるとすれば)教えていただけますか?\n\n最後に、残高が増えたら専任担当者をお願いしたいと思っています。そのためにはどの残高に達する必要がありますか?\n\nよろしくお願いします。\nカーラ・ンウォス",
    "questions": [
      {
        "q": "What is included with all account tiers?",
        "choices": [
          "Unlimited wire transfers",
          "A waived fee for every customer",
          "Free online banking",
          "A dedicated account manager"
        ],
        "answer": 2,
        "explanation": "All tiers include free online banking and mobile check deposit が根拠。専任担当者や無制限送金はプレミア限定でひっかけ。"
      },
      {
        "q": "Which tier does Ms. Nwosu's account most likely fall into?",
        "choices": [
          "Basic",
          "No tier qualifies",
          "Advantage",
          "Premier"
        ],
        "answer": 2,
        "explanation": "クロスリファレンス問題。メール『平均残高約28,000ドル』+お知らせ『アドバンテージ=10,000〜49,999ドル』を突き合わせるとアドバンテージ。"
      },
      {
        "q": "What is suggested about Ms. Nwosu's monthly fee?",
        "choices": [
          "She pays no monthly fee.",
          "She pays $12 per month.",
          "She pays $8 per month.",
          "She pays a reduced fee."
        ],
        "answer": 0,
        "explanation": "クロスリファレンス問題。アドバンテージは『月額手数料なし』。8ドルはベーシック、12ドルは超過送金料でひっかけ。"
      },
      {
        "q": "How much does Ms. Nwosu most likely owe for her wire transfers in May?",
        "choices": [
          "$12",
          "$60",
          "$24",
          "$36"
        ],
        "answer": 2,
        "explanation": "クロスリファレンス(計算型)。アドバンテージは月3回まで無料、送った5回のうち超過2回×12ドル=24ドル。"
      },
      {
        "q": "What balance must Ms. Nwosu reach to get a dedicated account manager?",
        "choices": [
          "$10,000",
          "$50,000",
          "$49,999",
          "$28,000"
        ],
        "answer": 1,
        "explanation": "クロスリファレンス問題。専任担当者はプレミア(50,000ドル以上)の特典。28,000ドルは現在の残高でひっかけ。"
      }
    ]
  },
  {
    "id": "s6p7-12",
    "title": "ダブル 2(卸価格表+Eメール)",
    "passages": [
      {
        "docType": "Price list",
        "text": "MERIDIAN KNITWEAR — Wholesale Order Guide\n\nMinimum wholesale order: 12 units. Prices are per unit:\n1. Merino scarves — $18\n2. Wool beanies — $14\n3. Cashmere-blend gloves — $22\n\nVolume discount (applied to the whole order):\n- 50–99 units: 10% off\n- 100 units or more: 15% off\n\nStandard delivery takes 10 business days and is free on orders over $1,000. Rush delivery (4 business days) adds a flat $75. Custom label stitching is available for an extra $2 per unit."
      },
      {
        "docType": "E-mail",
        "text": "From: Owen Priestley, Fable & Fern Boutique\nTo: sales@meridianknitwear.com\nSubject: Autumn wholesale order\nDate: August 19\n\nHello,\n\nI'd like to place my autumn order: 60 merino scarves and 40 wool beanies. I don't need custom labels this time.\n\nTwo questions. First, our shop's autumn window unveiling is on September 2, so I'd like the order to arrive before then. Second, could you confirm the total discount rate that applies to an order of this size?\n\nI'll pay through our usual account.\n\nThanks,\nOwen Priestley"
      }
    ],
    "translation": "【価格表】メリディアン・ニットウェア——卸注文ガイド\n最低卸注文数:12点。価格は1点あたり。\n1. メリノマフラー:18ドル\n2. ウールビーニー:14ドル\n3. カシミヤ混手袋:22ドル\n数量割引(注文全体に適用):\n・50〜99点:10%オフ\n・100点以上:15%オフ\n標準配送は10営業日、1,000ドル超の注文は無料。速達配送(4営業日)は一律75ドル追加。カスタムラベル縫い付けは1点あたり2ドル追加で承ります。\n\n【Eメール】\n差出人:オーウェン・プリーストリー(フェイブル&ファーン・ブティック)\n宛先:sales@meridianknitwear.com\n件名:秋の卸注文\n日付:8月19日\n\nこんにちは。\n\n秋の注文をお願いします。メリノマフラー60点とウールビーニー40点です。今回はカスタムラベルは不要です。\n\n2点質問です。まず、当店の秋のウィンドウお披露目が9月2日なので、それまでに届いてほしいです。次に、この規模の注文に適用される割引率の合計をご確認いただけますか?\n\nお支払いはいつもの口座からで。\n\nよろしくお願いします。\nオーウェン・プリーストリー",
    "questions": [
      {
        "q": "What is the minimum wholesale order?",
        "choices": [
          "50 units",
          "100 units",
          "There is no minimum",
          "12 units"
        ],
        "answer": 3,
        "explanation": "Minimum wholesale order: 12 units が根拠。50点・100点は割引の基準でひっかけ。"
      },
      {
        "q": "What discount rate applies to Mr. Priestley's order?",
        "choices": [
          "20%",
          "15%",
          "10%",
          "5%"
        ],
        "answer": 1,
        "explanation": "クロスリファレンス問題。メール『60点+40点=100点』+価格表『100点以上は15%オフ』を突き合わせる。"
      },
      {
        "q": "How much will Mr. Priestley most likely pay for the goods after the discount?",
        "choices": [
          "$1,476",
          "$1,394",
          "$1,640",
          "$1,254"
        ],
        "answer": 1,
        "explanation": "クロスリファレンス(計算型)。60×18=1,080、40×14=560、小計1,640ドル。15%割引で1,640×0.85=1,394ドル。"
      },
      {
        "q": "What is suggested about delivery for this order?",
        "choices": [
          "He must pay $2 per unit for labels.",
          "Delivery will cost $1,000.",
          "He must pay a $75 rush fee.",
          "Standard delivery will be free."
        ],
        "answer": 3,
        "explanation": "クロスリファレンス問題。小計1,640ドルは1,000ドル超なので標準配送は無料。ラベル(A・B)は不要と本人が述べている。"
      },
      {
        "q": "In the price list, the word \"flat\" is closest in meaning to",
        "choices": [
          "dull",
          "level",
          "fixed",
          "low"
        ],
        "answer": 2,
        "explanation": "語彙問題。a flat $75 の flat は『一律の・固定の』= fixed。金額が数量にかかわらず一定であることを示す。"
      }
    ]
  },
  {
    "id": "s6p7-13",
    "title": "トリプル 1(会場レンタル料金表+Eメール+Eメール)",
    "passages": [
      {
        "docType": "Price list",
        "text": "GRANDVIEW EVENT HALL — Rental Rates\n\nRoom capacities and half-day (4-hour) rates:\n1. Atrium (up to 80 guests) — $600\n2. Garden Room (up to 150 guests) — $900\n3. Grand Ballroom (up to 400 guests) — $1,800\n\nEach half-day rental includes tables, chairs, and basic lighting. A sound system is $150 extra. Time beyond the booked block is billed at $200 per hour. A refundable cleaning deposit of $250 is required for all bookings."
      },
      {
        "docType": "E-mail 1",
        "text": "From: Renée Caldwell, Caldwell Events\nTo: bookings@grandviewhall.com\nDate: April 2\n\nHello,\n\nI'm planning an awards dinner for a client, expecting about 130 guests. Could you recommend a room? We'll need a sound system for the speeches, and I expect the evening to run about five hours, from 6 P.M. to 11 P.M.\n\nAlso, is the cleaning deposit returned after the event?\n\nThank you,\nRenée Caldwell"
      },
      {
        "docType": "E-mail 2",
        "text": "From: Isaac Benton, Grandview Event Hall\nTo: Renée Caldwell\nDate: April 3\n\nDear Ms. Caldwell,\n\nFor 130 guests, the Garden Room is the right fit. I've penciled you in for the evening of May 17.\n\nYour event runs five hours, which is one hour beyond our four-hour block, so an overtime charge applies in addition to the sound system. The cleaning deposit is refunded in full within five business days, provided there is no damage.\n\nPlease confirm by April 20 to hold the date.\n\nBest regards,\nIsaac Benton"
      }
    ],
    "translation": "【料金表】グランドビュー・イベントホール——レンタル料金\n各室の定員と半日(4時間)料金:\n1. アトリウム(最大80名)——600ドル\n2. ガーデンルーム(最大150名)——900ドル\n3. グランドボールルーム(最大400名)——1,800ドル\n各半日レンタルにはテーブル、椅子、基本照明が含まれます。音響設備は150ドル追加。予約時間を超えた分は1時間200ドルで請求。全予約に払い戻し可能な清掃保証金250ドルが必要です。\n\n【Eメール1】(4月2日、コールドウェル→予約係)\nこんにちは。クライアント向けの表彰ディナーを計画しており、約130名を見込んでいます。お部屋を推薦していただけますか? スピーチ用に音響設備が必要で、夜は午後6時〜11時の約5時間になる見込みです。また、清掃保証金はイベント後に返金されますか?\n\n【Eメール2】(4月3日、ベントン→コールドウェル)\nコールドウェル様、130名ならガーデンルームが適しています。5月17日夜で仮押さえしました。イベントは5時間で、4時間枠を1時間超えるため、音響設備に加えて超過料金がかかります。清掃保証金は、破損がなければ5営業日以内に全額返金されます。日程確保のため4月20日までにご確認ください。",
    "questions": [
      {
        "q": "What does the rate sheet indicate about time beyond the booked block?",
        "choices": [
          "It is not permitted.",
          "It requires manager approval.",
          "The hall provides it for free.",
          "It is billed at $200 per hour."
        ],
        "answer": 3,
        "explanation": "Time beyond the booked block is billed at $200 per hour が根拠。無料(A)や不可(C)ではない。"
      },
      {
        "q": "Which room will Ms. Caldwell most likely use?",
        "choices": [
          "Garden Room",
          "Grand Ballroom",
          "Atrium",
          "Rooftop Terrace"
        ],
        "answer": 0,
        "explanation": "クロスリファレンス問題。メール1『約130名』+料金表『ガーデンルームは最大150名』、さらにメール2で the Garden Room is the right fit と推薦されている。"
      },
      {
        "q": "How much will Ms. Caldwell most likely be charged, excluding the refundable deposit?",
        "choices": [
          "$1,050",
          "$1,500",
          "$1,250",
          "$900"
        ],
        "answer": 2,
        "explanation": "クロスリファレンス(計算型)。ガーデンルーム900ドル+音響150ドル+超過1時間200ドル=1,250ドル。250ドルの保証金は返金されるので含めない。"
      },
      {
        "q": "What is indicated about the cleaning deposit?",
        "choices": [
          "It must be paid in cash.",
          "It is non-refundable.",
          "It covers the sound system.",
          "It is returned if there is no damage."
        ],
        "answer": 3,
        "explanation": "メール2の refunded in full ... provided there is no damage が根拠。返金不可(A)ではない。"
      },
      {
        "q": "What is NOT included in the half-day rate?",
        "choices": [
          "Chairs",
          "Basic lighting",
          "A sound system",
          "Tables"
        ],
        "answer": 2,
        "explanation": "NOT問題。テーブル・椅子・基本照明は含まれるが、音響設備は150ドル追加なので含まれない。(D)が正解。"
      }
    ]
  },
  {
    "id": "s6p7-14",
    "title": "トリプル 2(注文確認+Eメール+Eメール)",
    "passages": [
      {
        "docType": "Order confirmation",
        "text": "BAKER'S SUPPLY CO. — Order #7788\nOrdered: March 3 — Customer: Willow Lane Café (Ms. Erin Blythe)\n\n1. Organic flour, 25 kg × 4 — $30 each — $120\n2. Fair-trade cocoa, 5 kg × 2 — $45 each — $90\n3. Vanilla extract, 1 L × 1 — $40\nStandard shipping (3–5 business days) — Free\nTotal — $250\n\nPerishable items ship separately from dry goods.\nEstimated delivery: flour and cocoa — March 6; vanilla — March 9."
      },
      {
        "docType": "E-mail 1",
        "text": "From: Erin Blythe\nTo: orders@bakerssupply.com\nDate: March 7\n\nHello,\n\nI received the flour and cocoa yesterday, but two of the four flour bags were torn and the flour had spilled. I run a weekend baking workshop on March 14 and need the replacement flour before then.\n\nCould you also confirm that the vanilla is still arriving on the ninth?\n\nThanks,\nErin Blythe"
      },
      {
        "docType": "E-mail 2",
        "text": "From: Customer Care, Baker's Supply Co.\nTo: Erin Blythe\nDate: March 7\n\nDear Ms. Blythe,\n\nWe're very sorry about the damaged bags. Two replacement bags of organic flour shipped today by express and will arrive on March 9. There is no need to return the damaged bags — please discard them.\n\nYour vanilla is on schedule for the ninth, so everything will reach you before your workshop.\n\nAs an apology, we have refunded 15% of your order total to your card.\n\nSincerely,\nBaker's Supply Co."
      }
    ],
    "translation": "【注文確認】ベイカーズ・サプライ社——注文#7788\n注文日:3月3日——お客様:ウィロー・レーン・カフェ(エリン・ブライス様)\n1. オーガニック小麦粉 25kg×4:各30ドル=120ドル\n2. フェアトレードココア 5kg×2:各45ドル=90ドル\n3. バニラエクストラクト 1L×1:40ドル\n標準配送(3〜5営業日)——無料\n合計——250ドル\n生鮮品は乾物と別便で発送されます。お届け予定:小麦粉・ココア=3月6日、バニラ=3月9日。\n\n【Eメール1】(3月7日、ブライス→注文係)\nこんにちは。昨日、小麦粉とココアを受け取りましたが、小麦粉4袋のうち2袋が破れて中身がこぼれていました。3月14日に週末のベーキング教室を開くので、それまでに交換の小麦粉が必要です。また、バニラは予定通り9日に届くか確認いただけますか?\n\n【Eメール2】(3月7日、カスタマーケア→ブライス)\nブライス様、破損した袋について大変申し訳ございません。交換のオーガニック小麦粉2袋を本日速達で発送し、3月9日に届きます。破損した袋の返送は不要です——廃棄してください。バニラは9日で予定通りですので、教室の前にすべて届きます。お詫びとして、ご注文合計の15%をカードに返金いたしました。",
    "questions": [
      {
        "q": "What is indicated about order #7788?",
        "choices": [
          "Items may arrive on different dates.",
          "It was paid for in cash.",
          "It includes a discount.",
          "It qualified for rush shipping."
        ],
        "answer": 0,
        "explanation": "注文確認の Perishable items ship separately ... flour and cocoa — March 6; vanilla — March 9 から、品目で届く日が異なる。"
      },
      {
        "q": "Why does Ms. Blythe need the flour by March 14?",
        "choices": [
          "A health inspection is scheduled.",
          "She is opening a new café.",
          "She is hosting a baking workshop.",
          "A supplier is visiting."
        ],
        "answer": 2,
        "explanation": "Eメール1の I run a weekend baking workshop on March 14 が根拠。"
      },
      {
        "q": "What will most likely arrive on March 9?",
        "choices": [
          "Only the cocoa",
          "Replacement flour and vanilla",
          "Only the vanilla",
          "The damaged bags"
        ],
        "answer": 1,
        "explanation": "クロスリファレンス問題。注文確認『バニラ=3月9日』+Eメール2『交換の小麦粉が3月9日到着』の両方から、9日には交換小麦粉とバニラが届く。"
      },
      {
        "q": "What is Ms. Blythe asked to do with the damaged bags?",
        "choices": [
          "Exchange them at a store",
          "Discard them",
          "Return them by mail",
          "Keep them for a refund"
        ],
        "answer": 1,
        "explanation": "Eメール2の no need to return ... please discard them(廃棄してください)が根拠。返送(A)は不要と明記。"
      },
      {
        "q": "How much was most likely refunded to Ms. Blythe?",
        "choices": [
          "$15.00",
          "$45.00",
          "$25.00",
          "$37.50"
        ],
        "answer": 3,
        "explanation": "クロスリファレンス(計算型)。注文確認の合計250ドル+Eメール2『合計の15%を返金』で、250×0.15=37.50ドル。"
      }
    ]
  },
  {
    "id": "s6p7-15",
    "title": "トリプル 3(内装サービス案内+Eメール+Eメール)",
    "passages": [
      {
        "docType": "Web page",
        "text": "NORTHGATE INTERIORS — Room Renovation Packages\n\nTransform your commercial space, one room at a time.\n\n1. Consultation & design plan — $250 (waived if you book any package below)\n2. Repaint & trim (per room) — $400\n3. Flooring replacement (per room) — $900\n4. Full refit: paint, flooring, and lighting (per room) — $1,500\n\nBook three or more rooms in a single project and receive 12% off the package total. All work is scheduled within three weeks of your deposit, and every project ends with a final walk-through inspection."
      },
      {
        "docType": "E-mail 1",
        "text": "From: Diego Salas, Verde Bistro\nTo: hello@northgateinteriors.com\nDate: May 5\n\nHello,\n\nWe're refreshing our restaurant before the summer season. I'd like a full refit for our main dining room, and repaint-and-trim for two smaller private rooms — three rooms in total.\n\nI noticed you offer a multi-room discount; please confirm it applies. Also, will the design consultation still be charged if I book these packages?\n\nWe hope to finish before our reopening on June 1. Is that realistic if we pay the deposit next week?\n\nBest,\nDiego Salas"
      },
      {
        "docType": "E-mail 2",
        "text": "From: Northgate Interiors\nTo: Diego Salas\nDate: May 6\n\nDear Mr. Salas,\n\nThank you for the details. Your project qualifies for the multi-room discount, and the consultation fee is waived since you are booking packages.\n\nWith a deposit next week, we can complete the work within three weeks — comfortably before June 1.\n\nOne note: our lighting supplier is currently out of a fixture used in full refits, but a replacement of equal quality is available, so there will be no delay and no extra cost.\n\nWe'll send a formal quote once you confirm.\n\nBest regards,\nNorthgate Interiors"
      }
    ],
    "translation": "【ウェブページ】ノースゲート・インテリアズ——部屋別リノベーションパッケージ\n商業スペースを一部屋ずつ生まれ変わらせます。\n1. 相談&デザインプラン——250ドル(下記いずれかのパッケージ予約で無料)\n2. 塗り替え&トリム(1部屋あたり)——400ドル\n3. 床材の張り替え(1部屋あたり)——900ドル\n4. フルリフィット:塗装・床材・照明(1部屋あたり)——1,500ドル\n1つのプロジェクトで3部屋以上のご予約でパッケージ合計から12%オフ。すべての作業は着手金から3週間以内に予定され、各プロジェクトは最終の立会い検査で締めくくられます。\n\n【Eメール1】(5月5日、サラス→ノースゲート)\nこんにちは。夏の前にレストランを一新します。メインダイニングにフルリフィット、小さめの個室2部屋に塗り替え&トリム——合計3部屋をお願いしたいです。複数部屋割引があるようなので、適用されるか確認してください。また、これらのパッケージを予約した場合、デザイン相談の料金はかかりますか? 6月1日の再開前に終えたいのですが、来週着手金を払えば現実的ですか?\n\n【Eメール2】(5月6日、ノースゲート→サラス)\nサラス様、詳細をありがとうございます。ご依頼は複数部屋割引の対象で、パッケージ予約のため相談料は無料です。来週の着手金なら3週間以内に完了でき、6月1日には十分間に合います。1点、照明の仕入先がフルリフィットで使う器具を現在切らしていますが、同等品質の代替品があるため、遅延も追加費用もありません。ご確認いただき次第、正式なお見積りをお送りします。",
    "questions": [
      {
        "q": "What is included with every project?",
        "choices": [
          "A maintenance plan",
          "A final inspection",
          "Free furniture",
          "A cleaning service"
        ],
        "answer": 1,
        "explanation": "every project ends with a final walk-through inspection が根拠。final inspection への言い換え。"
      },
      {
        "q": "What is suggested about the consultation fee?",
        "choices": [
          "It will be waived.",
          "It will be doubled.",
          "It must be paid upfront.",
          "It is nonrefundable."
        ],
        "answer": 0,
        "explanation": "クロスリファレンス問題。案内『パッケージ予約で相談料無料』+Eメール2『パッケージ予約のため相談料は無料』で、免除される。"
      },
      {
        "q": "How much will Mr. Salas's project most likely cost?",
        "choices": [
          "$2,024",
          "$1,900",
          "$2,640",
          "$2,300"
        ],
        "answer": 0,
        "explanation": "クロスリファレンス(計算型)。フルリフィット1,500ドル+塗り替え2部屋(400×2=800ドル)=2,300ドル。3部屋以上で12%オフ、2,300×0.88=2,024ドル。"
      },
      {
        "q": "What problem does Northgate Interiors mention?",
        "choices": [
          "The design plan was lost.",
          "The deposit was not received.",
          "A worker is unavailable.",
          "A lighting fixture is out of stock."
        ],
        "answer": 3,
        "explanation": "Eメール2の our lighting supplier is currently out of a fixture(照明器具を切らしている)が根拠。ただし代替品があり遅延も追加費用もない。"
      },
      {
        "q": "What is indicated about the project timeline?",
        "choices": [
          "The work will take over a month.",
          "The reopening must be delayed.",
          "Extra costs will apply.",
          "It can be completed before June 1."
        ],
        "answer": 3,
        "explanation": "クロスリファレンス問題。Eメール1『6月1日再開前に終えたい』+Eメール2『3週間以内に完了、6月1日には十分間に合う』から、6月1日前に完了できる。"
      }
    ]
  }
];
