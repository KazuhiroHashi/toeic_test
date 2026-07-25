// セット5 part4(重複差し替え・正解位置均等化済み)
window.TOEIC_DATA_5 = window.TOEIC_DATA_5 || {};
window.TOEIC_DATA_5.part4 = [
  {
    "id": "s5p4-01",
    "kind": "telephone message",
    "title": "トーク 1(電話メッセージ)",
    "audio": [
      {
        "speaker": "W",
        "text": "Hello, this is a message for Mr. Daniel Foster. This is the scheduling office at Riverside Imaging Center. I'm calling to confirm your MRI scan appointment this Friday at nine in the morning. There are a couple of things to remember before you come in. Please don't eat anything for four hours before the scan, though you may drink water as usual. Also, be sure to leave all metal items — such as watches, jewelry, and belts — at home, since they cannot be worn inside the scanning room. The scan itself takes about forty-five minutes. If you have any questions or need to change the date, please call us back at five five five, six one seven zero. Thank you."
      }
    ],
    "translation": "もしもし、ダニエル・フォスター様への伝言です。リバーサイド画像診断センターの予約担当です。今週金曜日の午前9時に予定されているMRI検査のご予約を確認するためお電話しました。ご来院前にいくつか覚えておいていただきたいことがあります。検査の4時間前からは何も召し上がらないでください。水はいつも通り飲んでいただいて構いません。また、時計・宝飾品・ベルトなどの金属類は撮影室内で身につけられませんので、すべてご自宅に置いてきてください。検査自体は約45分かかります。ご質問や日程変更が必要な場合は、555-6170までお電話ください。よろしくお願いいたします。",
    "questions": [
      {
        "q": "Why is the speaker calling?",
        "choices": [
          "To report test results",
          "To confirm an appointment",
          "To announce a new service",
          "To request a payment"
        ],
        "answer": 1,
        "explanation": "『I'm calling to confirm your MRI scan appointment』が根拠。医療機関からの予約確認の電話。report test results(検査結果の報告)は述べていないひっかけ。"
      },
      {
        "q": "What does the speaker ask the listener to leave at home?",
        "choices": [
          "Insurance documents",
          "Any metal items",
          "A list of medications",
          "A photo ID"
        ],
        "answer": 1,
        "explanation": "『leave all metal items — such as watches, jewelry, and belts — at home』が根拠。時計・宝飾品・ベルトを metal items(金属類)と総称している。"
      },
      {
        "q": "How long does the scan take?",
        "choices": [
          "About 60 minutes",
          "About 30 minutes",
          "About 45 minutes",
          "About 90 minutes"
        ],
        "answer": 2,
        "explanation": "『The scan itself takes about forty-five minutes』が根拠。数字の聞き取り問題。"
      }
    ]
  },
  {
    "id": "s5p4-02",
    "kind": "announcement",
    "title": "トーク 2(学内アナウンス)",
    "audio": [
      {
        "speaker": "M",
        "text": "Good afternoon, students. This is an announcement from the Academic Success Center. Registration for our fall series of research skills workshops is now open. These free sessions cover topics such as finding academic sources, citing references correctly, and organizing a long paper. They're especially useful for students working on their senior thesis. Space in each workshop is limited to twenty students, so we encourage you to sign up early through the student portal. One more thing — students who attend at least three workshops will receive a certificate that can be added to their academic record. If you have questions, stop by our office on the second floor of the Baxter Building."
      }
    ],
    "translation": "皆さん、こんにちは。アカデミック・サクセス・センターからのお知らせです。秋期の研究スキル・ワークショップ・シリーズの受付を開始しました。この無料セッションでは、学術資料の探し方、正しい参考文献の引用、長い論文の構成といったテーマを扱います。卒業論文に取り組む学生に特に役立ちます。各ワークショップの定員は20名ですので、学生ポータルから早めにお申し込みください。もう一点——3回以上参加した学生には、成績記録に加えられる修了証を差し上げます。ご質問はバクスター棟2階の当センター事務室までお越しください。",
    "questions": [
      {
        "q": "What is the purpose of the announcement?",
        "choices": [
          "To announce that registration is open",
          "To report exam results",
          "To introduce new faculty members",
          "To promote a new degree program"
        ],
        "answer": 0,
        "explanation": "『Registration for our fall series of research skills workshops is now open』が根拠。学位課程の宣伝ではなく『受付開始』の告知。"
      },
      {
        "q": "Where is the speaker's office located?",
        "choices": [
          "In the campus library",
          "In the main administration building",
          "Next to the campus bookstore",
          "On the second floor of the Baxter Building"
        ],
        "answer": 3,
        "explanation": "『stop by our office on the second floor of the Baxter Building』が根拠。建物名と階数を最後に一度だけ述べるタイプの設問で、聞き逃しやすい。図書館や書店は音声に登場しないひっかけ。"
      },
      {
        "q": "What can students who attend at least three sessions receive?",
        "choices": [
          "A free textbook",
          "Extra exam credit",
          "A tuition discount",
          "A certificate"
        ],
        "answer": 3,
        "explanation": "『students who attend at least three workshops will receive a certificate』が根拠。tuition discount(授業料割引)は述べていないひっかけ。"
      }
    ]
  },
  {
    "id": "s5p4-03",
    "kind": "advertisement",
    "title": "トーク 3(ラジオ広告)",
    "audio": [
      {
        "speaker": "W",
        "text": "Are the floors in your home starting to show their age? At Cedarline Flooring, we make replacing them simple. Our certified installers measure, remove, and lay new hardwood or tile floors to fit any room, and most single-room jobs are finished in just one day. Right now, homeowners who book before the end of September will receive a free in-home measurement, plus a ten-year warranty on all materials. We also handle the cleanup ourselves, so you can walk on your new floor the very same evening. To find out what your project would cost, request a free quote on our Web site, cedarline dash flooring dot com. Cedarline Flooring — a fresh floor, without the fuss."
      }
    ],
    "translation": "ご自宅の床が古びてきていませんか? シダーライン・フローリングなら、床の張り替えが簡単です。認定施工士が採寸から撤去、新しい無垢材やタイルの床の施工まで、どんな部屋にも合わせて行い、1部屋の工事なら多くがわずか1日で完了します。今なら、9月末までにご予約いただいた住宅所有者の方に、無料の訪問採寸と全材料の10年保証をお付けします。片付けも当社が行いますので、その日の夕方にはもう新しい床の上を歩けます。工事費用がいくらになるかは、当社ウェブサイト cedarline-flooring.com で無料見積もりをご請求ください。シダーライン・フローリング——手間なく、新しい床を。",
    "questions": [
      {
        "q": "What type of business is being advertised?",
        "choices": [
          "A furniture store",
          "A house cleaning service",
          "A flooring installer",
          "A hardware store"
        ],
        "answer": 2,
        "explanation": "『Our certified installers measure, remove, and lay new hardwood or tile floors』が根拠。床材を販売するだけの店ではなく施工業者。『we also handle the cleanup』から清掃業者を選ばせるひっかけに注意。"
      },
      {
        "q": "What are customers who book before the end of September offered?",
        "choices": [
          "A cash rebate",
          "A free rug",
          "Free monthly cleaning",
          "A free in-home measurement"
        ],
        "answer": 3,
        "explanation": "『homeowners who book before the end of September will receive a free in-home measurement』が根拠。9月末までの予約特典。無料なのは採寸であって清掃の定期サービスではない。"
      },
      {
        "q": "How can listeners get a quote?",
        "choices": [
          "By visiting a showroom",
          "By calling a toll-free number",
          "By requesting one on the Web site",
          "By mailing a form"
        ],
        "answer": 2,
        "explanation": "『request a free quote on our Web site』が根拠。ウェブサイトからの見積もり請求で、電話番号やショールームには一切言及がない。"
      }
    ]
  },
  {
    "id": "s5p4-04",
    "kind": "excerpt from a meeting",
    "title": "トーク 4(会議の抜粋)",
    "audio": [
      {
        "speaker": "M",
        "text": "Okay, let's talk about the Brightwater commercial before we finish. The client approved our storyboard yesterday, so we're clear to move into filming. We've booked the downtown studio for the two shooting days next week, Monday and Tuesday. The one issue is that our usual lighting technician, Carlos, is away on another project, so I've arranged for a freelancer named Priya to join us — please make her feel welcome. Once filming wraps, editing will take about two weeks, which puts our delivery date in early June, right on schedule. Sofia, could you send the updated call sheet to the whole crew by tomorrow? Thanks, everyone."
      }
    ],
    "translation": "では、終わる前にブライトウォーターのコマーシャルについて話しましょう。クライアントが昨日ストーリーボードを承認してくれたので、撮影に入って問題ありません。来週の撮影2日間、月曜と火曜にダウンタウンのスタジオを予約しました。一つ問題があって、いつもの照明技師のカルロスが別の案件で不在なので、プリヤというフリーランスの方に入ってもらうよう手配しました。どうか歓迎してあげてください。撮影が終われば編集に約2週間かかり、納品は6月初旬、予定通りです。ソフィア、更新した香盤表を明日までにクルー全員に送ってもらえますか? では、皆さんありがとう。",
    "questions": [
      {
        "q": "What is the speaker mainly discussing?",
        "choices": [
          "Hiring a new manager",
          "Editing a finished film",
          "Plans for filming a commercial",
          "Choosing a client"
        ],
        "answer": 2,
        "explanation": "『we're clear to move into filming』撮影開始に向けたコマーシャル制作の打ち合わせが中心。editing は後工程の話でひっかけ。"
      },
      {
        "q": "Why has a freelancer been arranged?",
        "choices": [
          "A client requested it",
          "A regular staff member is unavailable",
          "The budget increased",
          "The team is expanding"
        ],
        "answer": 1,
        "explanation": "『our usual lighting technician, Carlos, is away on another project, so I've arranged for a freelancer』が根拠。away on another project を unavailable と言い換え。"
      },
      {
        "q": "What is Sofia asked to do?",
        "choices": [
          "Contact the client",
          "Update the budget",
          "Reserve a meeting room",
          "Send an updated schedule to the team"
        ],
        "answer": 3,
        "explanation": "『Sofia, could you send the updated call sheet to the whole crew by tomorrow』が根拠。call sheet(香盤表)は当日の進行予定表なので『updated schedule』が言い換え。クライアントへの連絡や予算の更新は依頼されていない。"
      }
    ]
  },
  {
    "id": "s5p4-05",
    "kind": "announcement",
    "graphicKind": "schedule",
    "title": "トーク 5(園芸店のアナウンス・図表問題)",
    "graphic": "Saturday Gardening Workshops\n1. Composting Basics — 10:00 A.M.\n2. Container Vegetables — 11:30 A.M.\n3. Pruning Fruit Trees — 1:00 P.M.\n4. Designing a Pollinator Garden — 2:30 P.M.",
    "audio": [
      {
        "speaker": "W",
        "text": "Good morning, and welcome to Greenleaf Garden Center. A quick note about today's free workshops. Unfortunately, our instructor for the eleven-thirty session on growing vegetables in containers has called in sick, so that class has been canceled for today. We're very sorry for the inconvenience, and it will be rescheduled for next Saturday. All the other sessions will run as planned. If you'd like to join one, just sign the list at the information desk near the entrance. And don't forget — anyone who attends a workshop today gets ten percent off seeds and soil in our shop. Enjoy your visit."
      }
    ],
    "translation": "【図表】土曜日のガーデニング・ワークショップ/1. 堆肥づくりの基礎——午前10:00/2. コンテナ野菜——午前11:30/3. 果樹の剪定——午後1:00/4. 送粉者の庭づくり——午後2:30\nおはようございます。グリーンリーフ園芸センターへようこそ。本日の無料ワークショップについて一点お知らせです。あいにく、11時30分のコンテナでの野菜栽培のセッションの講師が病欠のため、本日そのクラスは中止となりました。ご不便をおかけして申し訳ございません。来週土曜日に振り替え開催します。他のセッションはすべて予定通り行います。参加をご希望の方は、入口近くの案内デスクにあるリストにご記名ください。そして、本日ワークショップに参加された方は、店内の種と土が10パーセント引きになりますのでお忘れなく。ごゆっくりどうぞ。",
    "questions": [
      {
        "q": "Look at the graphic. Which workshop has been canceled?",
        "choices": [
          "Container Vegetables",
          "Pruning Fruit Trees",
          "Composting Basics",
          "Designing a Pollinator Garden"
        ],
        "answer": 0,
        "explanation": "図表問題。音声の『the eleven-thirty session on growing vegetables in containers ... has been canceled』と、図表の11:30の項目 Container Vegetables を突き合わせる。図表と音声の両方が必要。"
      },
      {
        "q": "Why was the workshop canceled?",
        "choices": [
          "A room is unavailable",
          "Bad weather",
          "Low enrollment",
          "The instructor is ill"
        ],
        "answer": 3,
        "explanation": "『our instructor ... has called in sick』が根拠。called in sick を ill と言い換え。天候によるものではない。"
      },
      {
        "q": "How can visitors join a workshop?",
        "choices": [
          "By registering online",
          "By signing a list at the desk",
          "By calling ahead",
          "By paying at the entrance"
        ],
        "answer": 1,
        "explanation": "『sign the list at the information desk near the entrance』が根拠。オンライン登録ではなく案内デスクでの記名。"
      }
    ]
  },
  {
    "id": "s5p4-06",
    "kind": "tour information",
    "title": "トーク 6(見学案内)",
    "audio": [
      {
        "speaker": "M",
        "text": "Welcome, everyone, to the Cape Ridge Wind Farm Visitor Center. Before we head outside to see the turbines up close, let me go over a few points. First, for safety, please wear the hard hats we've provided and stay on the marked path at all times. The turbines you'll see are among the tallest in the region, and each one can power roughly a thousand homes. Our walk will last about an hour, and it does involve some uphill sections, so let me know if you'd prefer the shorter, flat route. When we return, there'll be a short film in the auditorium about how wind energy reaches your home. Alright, please grab a hard hat and follow me."
      }
    ],
    "translation": "皆さま、ケープリッジ風力発電所ビジターセンターへようこそ。外に出てタービンを間近で見る前に、いくつか確認させてください。まず安全のため、お配りしたヘルメットを着用し、常に表示された通路を歩いてください。ご覧いただくタービンはこの地域でも最も高い部類で、1基でおよそ1,000世帯分の電力をまかなえます。散策は約1時間で、上り坂の区間もありますので、短くて平坦なルートがよければお知らせください。戻ってきたら、講堂で風力エネルギーが家庭に届く仕組みについての短い映像を上映します。それでは、ヘルメットを取って私についてきてください。",
    "questions": [
      {
        "q": "Where most likely are the listeners?",
        "choices": [
          "At a car factory",
          "At a solar power plant",
          "At a wind farm",
          "At a national park"
        ],
        "answer": 2,
        "explanation": "『welcome to the Cape Ridge Wind Farm Visitor Center ... see the turbines』が根拠。turbines(タービン)と wind energy が場所を特定する手がかり。"
      },
      {
        "q": "What does the speaker ask the listeners to do for safety?",
        "choices": [
          "Wear hard hats",
          "Take photographs",
          "Silence their phones",
          "Bring drinking water"
        ],
        "answer": 0,
        "explanation": "『for safety, please wear the hard hats we've provided』が根拠。安全のためのヘルメット着用の指示。"
      },
      {
        "q": "What will the listeners do after the walk?",
        "choices": [
          "Visit a gift shop",
          "Watch a short film",
          "Have lunch",
          "Meet an engineer"
        ],
        "answer": 1,
        "explanation": "『When we return, there'll be a short film in the auditorium』が根拠。散策後に映像を上映する。"
      }
    ]
  },
  {
    "id": "s5p4-07",
    "kind": "telephone message",
    "title": "トーク 7(電話メッセージ)",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, this message is for Mr. and Mrs. Alvarez. This is Nina from Goldenhour Photography, calling about your outdoor family portrait session scheduled for Saturday at Ridgeway Park. The weather forecast is now predicting heavy rain all day Saturday, so I'd recommend moving the shoot to Sunday, when the skies should be clear. The same morning time, ten o'clock, is available. Alternatively, if the weekend doesn't work for you, we can do the session at our indoor studio instead. Please let me know which you'd prefer by calling me back at five five five, four four two one. Thanks, and I hope we can get some beautiful photos for you."
      }
    ],
    "translation": "もしもし、アルバレス様ご夫妻への伝言です。ゴールデンアワー・フォトグラフィーのニーナと申します。土曜日にリッジウェイ公園で予定されている屋外での家族ポートレート撮影の件でお電話しました。天気予報が土曜は一日中大雨と出ておりますので、晴れる見込みの日曜日に撮影をずらすことをお勧めします。同じ午前10時の枠が空いています。あるいは、週末のご都合が合わなければ、代わりに当社の屋内スタジオで撮影することもできます。どちらがよろしいか、555-4421まで折り返しお電話いただけますか。それでは、素敵なお写真が撮れることを願っています。",
    "questions": [
      {
        "q": "Why is the speaker calling?",
        "choices": [
          "To cancel the session permanently",
          "To confirm a payment",
          "To suggest changing the date",
          "To offer a discount"
        ],
        "answer": 2,
        "explanation": "『I'd recommend moving the shoot to Sunday』が根拠。撮影日の変更提案であり、完全なキャンセルではない。"
      },
      {
        "q": "What is the problem?",
        "choices": [
          "A photographer is sick",
          "Rain is forecast",
          "A location is closed",
          "Some equipment is broken"
        ],
        "answer": 1,
        "explanation": "『The weather forecast is now predicting heavy rain all day Saturday』が根拠。雨天が問題。"
      },
      {
        "q": "What alternative does the speaker offer?",
        "choices": [
          "An indoor studio session",
          "A shorter session",
          "A full refund",
          "A different photographer"
        ],
        "answer": 0,
        "explanation": "『we can do the session at our indoor studio instead』が根拠。屋外が難しい場合の代替案。"
      }
    ]
  },
  {
    "id": "s5p4-08",
    "kind": "broadcast",
    "title": "トーク 8(ラジオ放送)",
    "audio": [
      {
        "speaker": "M",
        "text": "You're listening to Community Roundup on KDLT. In local news, the town of Millbrook is launching its Green Streets project this weekend. Volunteers will gather at Central Square on Saturday morning to plant three hundred trees along the main roads over the next two months. Organizers say the trees will provide shade, improve air quality, and give the downtown a fresh look. Anyone interested in helping can register at the town hall or simply show up at eight A.M. Saturday. Gloves and tools will be provided, but you're asked to bring your own water bottle. Coming up after the break, we'll have this week's weather outlook."
      }
    ],
    "translation": "お聴きの番組はKDLTの『コミュニティ・ラウンドアップ』です。地域のニュースです。ミルブルックの町が今週末、グリーン・ストリート計画を始動します。ボランティアが土曜の朝にセントラル・スクエアに集まり、今後2か月かけて幹線道路沿いに300本の木を植えます。主催者によると、これらの木は日陰を作り、空気の質を改善し、中心街に新しい表情を与えるとのことです。手伝いたい方は町役場で登録するか、土曜午前8時にそのままお越しください。手袋と道具は用意されますが、水筒はご自身でお持ちください。休憩の後は、今週の天気予報をお届けします。",
    "questions": [
      {
        "q": "What is the news report mainly about?",
        "choices": [
          "A park renovation",
          "A tree-planting project",
          "A road repair project",
          "A recycling contest"
        ],
        "answer": 1,
        "explanation": "『the town of Millbrook is launching its Green Streets project ... to plant three hundred trees』が根拠。植樹プロジェクトの紹介。"
      },
      {
        "q": "What are volunteers asked to bring?",
        "choices": [
          "A photo ID",
          "A registration form",
          "A parking permit",
          "Their own water bottle"
        ],
        "answer": 3,
        "explanation": "『you're asked to bring your own water bottle』が根拠。持参が求められているのは水筒だけで、必要な道具は主催者側が用意する。登録は町役場で行うと述べているだけで、書類の持参や身分証・駐車許可証への言及はない。"
      },
      {
        "q": "What will listeners hear after the break?",
        "choices": [
          "A weather forecast",
          "A sports report",
          "A music segment",
          "A traffic update"
        ],
        "answer": 0,
        "explanation": "『Coming up after the break, we'll have this week's weather outlook』が根拠。休憩後は天気の見通し。"
      }
    ]
  },
  {
    "id": "s5p4-09",
    "kind": "talk",
    "graphicKind": "invoice",
    "title": "トーク 9(店舗スタッフへの説明・図表問題)",
    "graphic": "Equipment Order — Bayleaf Café\n1. Espresso machine — $3,200\n2. Display refrigerator — $2,100\n3. Dough mixer — $1,450\n4. Prep table — $600",
    "audio": [
      {
        "speaker": "W",
        "text": "Before I place our kitchen equipment order, let me go over it with you one more time. Head office approved the request, but with one condition — they've asked us to leave off the single most expensive item for now and add it in next quarter instead. So I'm taking that item off this order; everything else stays as it is. The good news is that the supplier is offering free shipping on any order placed this week, so I'll send the purchase order by Friday. Once the delivery arrives, Tom will check each piece against the packing list before we enter it in our inventory system. If any of you think we're missing something essential, let me know by the end of the day."
      }
    ],
    "translation": "【図表】機材発注 — ベイリーフ・カフェ/1. エスプレッソマシン — 3,200ドル/2. ディスプレイ冷蔵庫 — 2,100ドル/3. 生地ミキサー — 1,450ドル/4. 下ごしらえ台 — 600ドル\n厨房機器の発注をかける前に、もう一度皆さんと確認させてください。本部は申請を承認してくれましたが、一つ条件があります——最も高額な品目を今回は外し、代わりに来四半期に追加してほしいとのことです。ですので、その品目は今回の注文から外します。それ以外はそのままです。良い知らせは、仕入先が今週中の注文なら送料を無料にしてくれることで、金曜までに発注書を送ります。納品が届いたら、在庫システムに登録する前に、トムが各機材を納品書と照合します。何か必要不可欠なものが抜けていると思う人がいたら、今日の終業までに教えてください。",
    "questions": [
      {
        "q": "Look at the graphic. Which item will be removed from the order?",
        "choices": [
          "Espresso machine",
          "Display refrigerator",
          "Dough mixer",
          "Prep table"
        ],
        "answer": 0,
        "explanation": "図表問題。音声の『leave off the single most expensive item』と、図表で最も高額な品目 Espresso machine(3,200ドル)を突き合わせる。音声は品目名を一切言わないため、金額の比較が必須。"
      },
      {
        "q": "What is the supplier offering this week?",
        "choices": [
          "Free shipping",
          "Free installation",
          "An extended warranty",
          "A volume discount"
        ],
        "answer": 0,
        "explanation": "『the supplier is offering free shipping on any order placed this week』が根拠。無料なのは配送であって設置ではない。値引きや保証延長への言及もない。"
      },
      {
        "q": "What will Tom do when the delivery arrives?",
        "choices": [
          "Submit the order",
          "Update the inventory prices",
          "Check the items against a list",
          "Contact the supplier"
        ],
        "answer": 2,
        "explanation": "『Tom will check each piece against the packing list』が根拠。発注書を送るのは話し手自身なのでひっかけ。在庫システムへの登録は照合の後の作業。"
      }
    ]
  },
  {
    "id": "s5p4-10",
    "kind": "speech",
    "title": "トーク 10(スピーチ)",
    "audio": [
      {
        "speaker": "M",
        "text": "Thank you all for joining us this evening. It's my great pleasure to announce the launch of the Hartwell Scholarship Fund here at Bayside University. The fund was made possible by a generous donation from alumna Grace Hartwell, who graduated from our engineering program thirty years ago. Starting this fall, the scholarship will cover full tuition for five students each year who show exceptional promise but need financial support. Grace has told me that she received similar help as a student, and she wants to give the next generation the same opportunity. In a moment, Grace herself will come up to share her story. But first, please join me in a warm round of applause to thank her."
      }
    ],
    "translation": "今晩はお集まりいただきありがとうございます。ここベイサイド大学にハートウェル奨学基金が発足したことをご報告できるのは、私にとって大きな喜びです。この基金は、30年前に本学の工学課程を卒業した同窓生グレース・ハートウェルさんの寛大なご寄付によって実現しました。今秋から、この奨学金は、並外れた将来性がありながら経済的支援を必要とする学生5名に対し、毎年全額の授業料を給付します。グレースさんは、自身も学生時代に同様の支援を受けたので、次の世代に同じ機会を与えたいのだと話してくれました。まもなく、グレースさんご本人が登壇してご自身の話をしてくださいます。ですがその前に、彼女に感謝を込めて温かい拍手をお願いします。",
    "questions": [
      {
        "q": "What is the purpose of the speech?",
        "choices": [
          "To announce a scholarship fund",
          "To celebrate a graduation",
          "To introduce a new course",
          "To open a new building"
        ],
        "answer": 0,
        "explanation": "『It's my great pleasure to announce the launch of the Hartwell Scholarship Fund』が根拠。奨学基金の発足を告げるスピーチ。"
      },
      {
        "q": "What did Grace Hartwell do?",
        "choices": [
          "She designed the campus",
          "She gave a large gift to the university",
          "She won a teaching award",
          "She taught at the university"
        ],
        "answer": 1,
        "explanation": "『a generous donation from alumna Grace Hartwell』が根拠。generous donation を『大口の寄付』と言い換えている。alumna は卒業生であり、大学で教えていたわけでも設計に関わったわけでもない。"
      },
      {
        "q": "What will Grace Hartwell do next?",
        "choices": [
          "Hand out awards",
          "Show a short video",
          "Lead a campus tour",
          "Speak to the audience"
        ],
        "answer": 3,
        "explanation": "『In a moment, Grace herself will come up to share her story』が根拠。come up to share her story を speak to the audience と言い換えている。直後に拍手はあるが、それは聴衆の行動であってグレース自身の次の行動ではない。"
      }
    ]
  }
];
