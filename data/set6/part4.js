// Part 4: 説明文問題(トークを聞いて設問に答える) — Set 6
window.TOEIC_DATA_6 = window.TOEIC_DATA_6 || {};
window.TOEIC_DATA_6.part4 = [
  {
    id: "s6p4-01",
    kind: "telephone message",
    title: "トーク 1(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hello, this message is for Mr. Alvarez. This is Priya from Bluebird Catering, calling about the lunch order for your office event this Friday. I need to let you know about one small change. Unfortunately, the roasted salmon you selected won't be available that day, so I've replaced it with grilled chicken at no extra charge. Everything else on your order stays exactly the same. Our driver will arrive around eleven thirty, half an hour before your event, to set up the buffet. One thing I still need from you: could you tell me where our staff should park when they arrive? Please call me back at five five five, zero one seven seven. Thank you." }
    ],
    translation: "もしもし、アルバレス様への伝言です。ブルーバード・ケータリングのプリヤと申します。今週金曜日の社内イベント向けランチのご注文の件でお電話しました。1点だけ小さな変更のお知らせです。あいにく、お選びいただいたローストサーモンがその日ご用意できないため、追加料金なしでグリルドチキンに変更させていただきました。それ以外のご注文内容はまったく同じです。配送スタッフはイベントの30分前、11時半ごろに到着し、ビュッフェの準備をいたします。1点お願いがあります——スタッフが到着した際、どこに駐車すればよいか教えていただけますか? 555-0177 まで折り返しお電話ください。よろしくお願いいたします。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To confirm a change to an order",
          "To cancel an event",
          "To request a payment",
          "To recommend a new restaurant"
        ],
        answer: 0,
        explanation: "I need to let you know about one small change(1つ小さな変更をお知らせ)と、注文内容の変更(サーモン→チキン)が話の目的。電話の目的は冒頭で述べられる定石。"
      },
      {
        q: "What does the speaker say about the salmon?",
        choices: [
          "It is very popular.",
          "It will cost extra.",
          "It is not available.",
          "It has been added to the menu."
        ],
        answer: 2,
        explanation: "the roasted salmon ... won't be available that day(その日は用意できない)が根拠。won't be available が not available に言い換えられている。at no extra charge(追加料金なし)から『追加費用がかかる』はひっかけ。"
      },
      {
        q: "What does the speaker ask the listener to do?",
        choices: [
          "Confirm the number of guests",
          "Send a payment in advance",
          "Change the event time",
          "Provide parking information"
        ],
        answer: 3,
        explanation: "could you tell me where our staff should park(どこに駐車すればよいか教えてほしい)が根拠。駐車場所の情報提供を求めている。"
      }
    ]
  },
  {
    id: "s6p4-02",
    kind: "announcement",
    title: "トーク 2(図書館アナウンス)",
    audio: [
      { speaker: "M", text: "Attention, library patrons. Please be aware that the Maplewood Public Library will be closed for renovations from June tenth through June twenty-fourth. During this time, we'll be upgrading our computer area and adding a brand-new children's reading room. While the building is closed, you can still return your books using the drop box beside the main entrance. And don't worry about late fees — all items due during the closure have been automatically extended to July first. Our online catalog and e-book services will remain fully available the whole time. We appreciate your patience, and we can't wait to show you the improvements when we reopen." }
    ],
    translation: "ご来館の皆さまにお知らせします。メープルウッド公共図書館は、6月10日から6月24日まで改装のため休館いたします。この期間中、コンピューターコーナーを改良し、真新しい児童向け読書室を新設します。休館中も、正面入口横の返却ボックスを使って本をご返却いただけます。延滞料金のご心配は不要です——休館期間中に返却期限を迎える資料は、すべて自動的に7月1日まで延長されています。オンライン蔵書検索と電子書籍サービスは、期間中も引き続きすべてご利用いただけます。ご不便をおかけしますが、リニューアル後の改善点をぜひご覧いただければ幸いです。",
    questions: [
      {
        q: "What is the purpose of the announcement?",
        choices: [
          "To announce a temporary closure",
          "To promote a book sale",
          "To introduce a new branch",
          "To explain a fee increase"
        ],
        answer: 0,
        explanation: "the library will be closed for renovations from June tenth through June twenty-fourth(改装のため一定期間休館)が根拠。closed for renovations = temporary closure。"
      },
      {
        q: "What will be added during the renovation?",
        choices: [
          "A café",
          "A children's reading room",
          "A parking lot",
          "A meeting hall"
        ],
        answer: 1,
        explanation: "adding a brand-new children's reading room(児童向け読書室を新設)が根拠。コンピューターコーナーは『改良(upgrade)』で新設ではないためひっかけ。"
      },
      {
        q: "How should patrons return books during the closure?",
        choices: [
          "By mailing them",
          "By keeping them until the library reopens",
          "By using the drop box",
          "By taking them to another branch"
        ],
        answer: 2,
        explanation: "you can still return your books using the drop box(返却ボックスを使って返却できる)が根拠。"
      }
    ]
  },
  {
    id: "s6p4-03",
    kind: "advertisement",
    title: "トーク 3(ラジオ広告)",
    audio: [
      { speaker: "W", text: "Tired of deciding what to cook every single night? With Freshcrate, dinner just got easier. Each week we deliver a box of fresh, pre-measured ingredients and simple recipe cards right to your door — everything you need to make a delicious meal in under thirty minutes. Choose from more than twenty recipes a week, including vegetarian and low-carb options. And right now, new subscribers get their first three boxes at half price. There's no long-term contract, so you can pause or cancel anytime. Ready to reclaim your evenings? Visit freshcrate dot com and enter the code COOK at checkout. Freshcrate — home cooking made simple." }
    ],
    translation: "毎晩、何を作ろうか悩むのに疲れていませんか? フレッシュクレートなら、夕食の準備がぐっと楽になります。毎週、新鮮で分量計算済みの食材と、わかりやすいレシピカードをご自宅までお届け——30分以内においしい一皿を作るのに必要なものがすべて揃います。ベジタリアンや低糖質のメニューを含む、週20種類以上のレシピからお選びいただけます。しかも今なら、新規ご登録の方は最初の3箱が半額。長期契約は不要なので、いつでも一時停止・解約できます。夜の時間を取り戻しませんか? freshcrate.com にアクセスし、購入時にコード『COOK』を入力してください。フレッシュクレート——家庭料理を、もっとシンプルに。",
    questions: [
      {
        q: "What is being advertised?",
        choices: [
          "A grocery store",
          "A cooking class",
          "A restaurant",
          "A meal-kit delivery service"
        ],
        answer: 3,
        explanation: "食材とレシピを毎週宅配する(deliver a box of fresh ingredients and recipe cards)ミールキット宅配サービス。調理済みではなく食材を届ける点でレストラン(C)と区別。"
      },
      {
        q: "What do new subscribers receive?",
        choices: [
          "A free cookbook",
          "A discount on their first boxes",
          "A free kitchen tool",
          "Free delivery for a year"
        ],
        answer: 1,
        explanation: "new subscribers get their first three boxes at half price(最初の3箱が半額)が根拠。half price = discount。"
      },
      {
        q: "According to the advertisement, how can listeners get the offer?",
        choices: [
          "By entering a code online",
          "By calling a phone number",
          "By visiting a store",
          "By referring a friend"
        ],
        answer: 0,
        explanation: "visit freshcrate dot com and enter the code COOK at checkout(サイトでコードを入力)が根拠。"
      }
    ]
  },
  {
    id: "s6p4-04",
    kind: "broadcast",
    title: "トーク 4(ラジオ・ビジネスニュース)",
    audio: [
      { speaker: "M", text: "In local business news, software company Nimbus Technologies announced today that it will move its headquarters from Riverton to the downtown Kingsport district next spring. The move is expected to create around two hundred new jobs over the next two years. Company president Elena Ford said the larger office space will allow Nimbus to expand its research team, which develops navigation software for the shipping industry. City officials welcomed the news, noting that the relocation could attract other technology firms to the area. Nimbus plans to begin hiring for the new positions this fall. For more on this story, visit our Web site." }
    ],
    translation: "地元ビジネスニュースです。ソフトウェア企業ニンバス・テクノロジーズは本日、来春、本社をリバートンからキングスポートの中心街地区へ移転すると発表しました。この移転により、今後2年間でおよそ200の新規雇用が生まれる見込みです。同社のエレナ・フォード社長は、より広いオフィスにより、海運業界向けのナビゲーションソフトを開発する研究チームを拡大できると述べました。市当局はこのニュースを歓迎し、移転が他のテクノロジー企業をこの地域に呼び込む可能性があると指摘しました。ニンバスは今秋、新しい職の採用を開始する予定です。詳しくは当局のウェブサイトをご覧ください。",
    questions: [
      {
        q: "What is the report mainly about?",
        choices: [
          "A company merger",
          "A product launch",
          "A company relocating its headquarters",
          "A factory closing"
        ],
        answer: 2,
        explanation: "it will move its headquarters from Riverton to ... Kingsport(本社を移転する)が話の中心。move ... headquarters = relocating its headquarters。"
      },
      {
        q: "What kind of product does the company develop?",
        choices: [
          "Navigation software",
          "Mobile games",
          "Accounting software",
          "Medical devices"
        ],
        answer: 0,
        explanation: "develops navigation software for the shipping industry(海運業界向けナビソフト)が根拠。ソフト企業だからと accounting software を選ばせるひっかけ。"
      },
      {
        q: "According to the report, what will the company do this fall?",
        choices: [
          "Open a store",
          "Release a report",
          "Hold a conference",
          "Begin hiring"
        ],
        answer: 3,
        explanation: "Nimbus plans to begin hiring for the new positions this fall(今秋に採用開始)が根拠。"
      }
    ]
  },
  {
    id: "s6p4-05",
    kind: "excerpt from a meeting",
    graphicKind: "agenda",
    title: "トーク 5(会議の抜粋・図表問題)",
    graphic: "Product Launch Timeline\n1. Design finalization — August\n2. Prototype testing — September\n3. Marketing campaign — October\n4. Product release — November",
    audio: [
      { speaker: "W", text: "Thanks, everyone, for joining today's product meeting. I want to focus on one part of our timeline that's now at risk. The design team told me this morning that they need about two more weeks to finalize the packaging, which pushes their work into early September. That's a concern, because the phase that comes right after can't start until the final design is approved. To keep us on track for the November release, I've asked the testing team to set up and calibrate their equipment early, so they can begin the moment the design is ready. For now, let's leave the marketing campaign and the release date unchanged." }
    ],
    translation: "【図表】製品ローンチ工程/1. デザイン確定——8月/2. 試作品テスト——9月/3. マーケティング施策——10月/4. 製品リリース——11月\n本日は製品会議にお集まりいただきありがとうございます。今、工程の中で危うくなっている部分に絞ってお話しします。今朝デザインチームから、パッケージの最終確定にあと2週間ほど必要だと連絡があり、その作業が9月初旬にずれ込みます。これは問題です。というのも、直後の工程は最終デザインが承認されるまで着手できないからです。11月のリリースに間に合わせるため、テストチームには機材の設置と調整を前倒しで進め、デザインが整い次第すぐ着手できるようお願いしました。当面、マーケティング施策とリリース日は変更しません。",
    questions: [
      {
        q: "Look at the graphic. Which phase is now expected to take longer?",
        choices: [
          "Design finalization",
          "Prototype testing",
          "Marketing campaign",
          "Product release"
        ],
        answer: 0,
        explanation: "図表問題。音声で『デザインチームがあと2週間必要=作業が延びる』と言っており、図表でそれに対応するのは Design finalization。図表と音声の両方が必要。"
      },
      {
        q: "Why is the speaker concerned?",
        choices: [
          "A budget was reduced.",
          "One phase depends on another.",
          "A team member has resigned.",
          "A supplier is unavailable."
        ],
        answer: 1,
        explanation: "the phase that comes right after can't start until the final design is approved(直後の工程は最終デザイン承認まで開始できない)が根拠。工程間の依存関係が懸念点。"
      },
      {
        q: "What does the speaker ask the testing team to do?",
        choices: [
          "Hire more staff",
          "Delay the release",
          "Prepare their equipment early",
          "Redesign the packaging"
        ],
        answer: 2,
        explanation: "I've asked the testing team to set up and calibrate their equipment early(機材を前倒しで準備する)が根拠。set up and calibrate early = prepare early。"
      }
    ]
  },
  {
    id: "s6p4-06",
    kind: "tour information",
    title: "トーク 6(ワイナリー見学案内)",
    audio: [
      { speaker: "M", text: "Welcome, everyone, to Stonebrook Vineyards, and thank you for joining our afternoon tour. Here's what to expect over the next hour. First, we'll walk out through the vineyards, where I'll explain how we grow and harvest our grapes. After that, we'll head down into the cellar to see how the wine is aged in oak barrels. Please watch your step there — the cellar floor can get quite slippery. We'll finish up in the tasting room, where you'll get to sample four of our award-winning wines. And if you'd like to take some home, our shop is offering all tour guests ten percent off any bottle today. All right, please follow me toward the vineyards." }
    ],
    translation: "皆さま、ストーンブルック・ヴィンヤードへようこそ。午後のツアーにご参加いただきありがとうございます。これから1時間の流れをご案内します。まず、ぶどう畑を歩き、ぶどうの栽培と収穫についてご説明します。その後、地下のセラーへ下り、オーク樽でのワインの熟成の様子をご覧いただきます。セラーの床はかなり滑りやすいので、足元にご注意ください。最後は試飲室で、当ワイナリー受賞歴のあるワインを4種類お試しいただけます。お土産にご購入をご希望の方には、本日ツアー参加者限定で、どのボトルも10パーセント引きにいたします。それでは、ぶどう畑へと私についてきてください。",
    questions: [
      {
        q: "Where does the tour begin?",
        choices: [
          "In the cellar",
          "In the tasting room",
          "In the gift shop",
          "In the vineyards"
        ],
        answer: 3,
        explanation: "First, we'll walk out through the vineyards(まずぶどう畑を歩く)が根拠。cellar や tasting room は後の場所でひっかけ。"
      },
      {
        q: "What does the speaker warn the listeners about?",
        choices: [
          "The cellar floor may be slippery.",
          "Photography is not allowed.",
          "The tour may run late.",
          "Some paths are closed."
        ],
        answer: 0,
        explanation: "the cellar floor can get quite slippery(セラーの床が滑りやすい)と足元への注意を促している。"
      },
      {
        q: "What can tour guests do at a discount today?",
        choices: [
          "Book a future tour",
          "Buy bottles of wine",
          "Join a wine club",
          "Attend a tasting event"
        ],
        answer: 1,
        explanation: "our shop is offering all tour guests ten percent off any bottle(ボトルが10%引き)が根拠。ボトルの購入が割引対象。"
      }
    ]
  },
  {
    id: "s6p4-07",
    kind: "telephone message",
    title: "トーク 7(電話メッセージ)",
    audio: [
      { speaker: "M", text: "Hi, this is a message for Ms. Tanaka. This is Marcus from Vertex Internet, calling about your installation appointment scheduled for tomorrow morning. Unfortunately, our technician has a scheduling conflict and won't be able to make the nine A.M. slot. I'm really sorry for the short notice. We do have an opening tomorrow afternoon at two, or the following morning at nine if that works better for you. Whichever you choose, the installation itself should only take about an hour, and there's no charge for the visit. Please call me back at five five five, four four one two so we can lock in a new time. Thanks so much." }
    ],
    translation: "もしもし、タナカ様への伝言です。バーテックス・インターネットのマーカスと申します。明日午前に予定されている設置作業のご予約の件でお電話しました。あいにく、担当技術者の予定が重なってしまい、午前9時の枠に伺えなくなりました。直前のご連絡となり大変申し訳ございません。明日午後2時、またはご都合がよろしければ翌朝9時に空きがございます。どちらをお選びいただいても、設置作業自体は1時間ほどで、訪問に費用はかかりません。新しい日時を確定したいので、555-4412 まで折り返しお電話ください。よろしくお願いいたします。",
    questions: [
      {
        q: "What problem does the speaker mention?",
        choices: [
          "A part is out of stock.",
          "A payment was declined.",
          "A technician is unavailable.",
          "An address is incorrect."
        ],
        answer: 2,
        explanation: "our technician has a scheduling conflict and won't be able to make the nine A.M. slot(技術者が予定重複で来られない)が根拠。scheduling conflict = unavailable。"
      },
      {
        q: "How long will the installation take?",
        choices: [
          "About thirty minutes",
          "About an hour",
          "About two hours",
          "About half a day"
        ],
        answer: 1,
        explanation: "the installation itself should only take about an hour(作業は約1時間)が根拠。数字の聞き取り。"
      },
      {
        q: "What does the speaker ask the listener to do?",
        choices: [
          "Call back to choose a new time",
          "Pay a service fee",
          "Be home at nine A.M.",
          "Send some documents"
        ],
        answer: 0,
        explanation: "call me back ... so we can lock in a new time(折り返し電話して新しい日時を確定)が根拠。there's no charge から『料金支払い』はひっかけ。"
      }
    ]
  },
  {
    id: "s6p4-08",
    kind: "talk",
    title: "トーク 8(料理教室の案内)",
    audio: [
      { speaker: "W", text: "Good evening, and welcome to tonight's pasta-making workshop here at the Ashford Culinary Studio. I'm Chef Rosa, and I'll be guiding you through the whole evening. Over the next two hours, you'll learn to make fresh pasta dough entirely from scratch — no machine required — and then shape it into homemade ravioli. You'll find an apron and all of your ingredients already laid out at your station. Before we get started, please wash your hands at the sinks along the back wall. And don't worry if your first few tries aren't perfect; tonight is all about having fun and learning something new. At the end, we'll all sit down together and enjoy the dishes we've made. Let's begin." }
    ],
    translation: "こんばんは。今夜、アシュフォード料理スタジオでのパスタ作りワークショップへようこそ。シェフのローザです。今夜はずっと私がご案内します。これから2時間で、生地から完全に手作りで生パスタを作り——機械は不要です——それを手作りのラビオリに仕上げます。エプロンと材料はすべて各自の作業台に用意してあります。始める前に、奥の壁沿いのシンクで手を洗ってください。最初のうちうまくいかなくても心配いりません。今夜は楽しんで、新しいことを学ぶのが目的です。最後は全員で席に着き、作った料理を一緒に味わいましょう。では始めましょう。",
    questions: [
      {
        q: "What will the participants learn to make?",
        choices: [
          "Bread",
          "Fresh pasta",
          "Desserts",
          "Soup"
        ],
        answer: 1,
        explanation: "learn to make fresh pasta dough ... shape it into homemade ravioli(生パスタを作りラビオリに)が根拠。"
      },
      {
        q: "What does the speaker tell the listeners to do before starting?",
        choices: [
          "Put on gloves",
          "Read the recipe",
          "Wash their hands",
          "Turn on the ovens"
        ],
        answer: 2,
        explanation: "please wash your hands at the sinks(シンクで手を洗ってください)が根拠。"
      },
      {
        q: "What will the participants do at the end of the workshop?",
        choices: [
          "Take home extra ingredients",
          "Receive a certificate",
          "Clean their stations",
          "Eat the food they prepared"
        ],
        answer: 3,
        explanation: "we'll all sit down together and enjoy the dishes we've made(作った料理を一緒に味わう)が根拠。enjoy the dishes = eat the food。"
      }
    ]
  },
  {
    id: "s6p4-09",
    kind: "announcement",
    graphicKind: "schedule",
    title: "トーク 9(会議アナウンス・図表問題)",
    graphic: "Marketing Conference — Room Assignments\n1. Social Media Trends — Room A\n2. Email Strategy — Room B\n3. Brand Storytelling — Room C\n4. Data Analytics — Room D",
    audio: [
      { speaker: "W", text: "Good morning, and welcome to the annual Marketing Conference. Before the sessions begin, I have one room change to announce. Because of much higher interest than we expected, the Brand Storytelling session has been moved to our largest space, the main auditorium, instead of the room printed in your program. All of the other sessions will take place exactly as scheduled. A couple of reminders: lunch will be served in the lobby at twelve thirty, and this afternoon's keynote speaker will start promptly at two. Finally, if you haven't picked up your name badge yet, please stop by the registration desk near the entrance. Enjoy the conference." }
    ],
    translation: "【図表】マーケティング・カンファレンス 部屋割り/1. ソーシャルメディア動向——ルームA/2. メール戦略——ルームB/3. ブランドストーリーテリング——ルームC/4. データ分析——ルームD\nおはようございます。年次マーケティング・カンファレンスへようこそ。セッション開始前に、1つ部屋の変更をお知らせします。予想をはるかに上回る関心をいただいたため、ブランドストーリーテリングのセッションは、プログラム記載の部屋ではなく、最も広い会場であるメインホールに変更となりました。他のすべてのセッションは予定どおり行われます。いくつかお知らせです——昼食は12時半にロビーでご用意し、本日午後の基調講演は2時ちょうどに始まります。最後に、まだ名札を受け取っていない方は、入口近くの受付にお立ち寄りください。カンファレンスをお楽しみください。",
    questions: [
      {
        q: "Look at the graphic. Which room will not be used as originally planned?",
        choices: [
          "Room A",
          "Room B",
          "Room C",
          "Room D"
        ],
        answer: 2,
        explanation: "図表問題。音声で『Brand Storytelling がメインホールに変更』と言っており、図表で Brand Storytelling に対応するのはルームC。よって当初予定のルームCは使われない。"
      },
      {
        q: "Why was one session moved?",
        choices: [
          "A room is being repaired.",
          "Interest was higher than expected.",
          "A speaker canceled.",
          "The equipment failed."
        ],
        answer: 1,
        explanation: "Because of much higher interest than we expected(予想以上の関心のため)が根拠。より広い会場が必要になった。"
      },
      {
        q: "What are listeners told they can do at the registration desk?",
        choices: [
          "Submit questions",
          "Pay a registration fee",
          "Get lunch tickets",
          "Pick up a name badge"
        ],
        answer: 3,
        explanation: "if you haven't picked up your name badge yet, please stop by the registration desk(名札は受付で)が根拠。"
      }
    ]
  },
  {
    id: "s6p4-10",
    kind: "speech",
    title: "トーク 10(開所式のスピーチ)",
    audio: [
      { speaker: "M", text: "Thank you all for being here on this special morning. It's my great pleasure to officially open the Greenfield Community Center. Three years ago, this was an empty lot, and today it's a place where our neighbors can gather, learn, and stay active. Inside, you'll find a gymnasium, an art studio, and a computer lab that will offer free classes to residents of all ages. I especially want to thank the hundreds of volunteers and the local businesses whose donations made this project possible. Starting next Monday, the center will be open seven days a week. But first, let's cut the ribbon — and then I invite every one of you inside for a tour and some refreshments." }
    ],
    translation: "この特別な朝にお集まりいただき、ありがとうございます。グリーンフィールド・コミュニティセンターの開所を正式に宣言できることを大変うれしく思います。3年前、ここは空き地でした。それが今日、ご近所の皆さんが集い、学び、体を動かせる場所になりました。館内には体育館、アートスタジオ、そしてあらゆる年代の住民に無料クラスを提供するコンピューターラボがあります。とりわけ、このプロジェクトを実現してくださった何百人ものボランティアと、寄付をくださった地元企業に感謝します。来週月曜日から、当センターは週7日開館します。ですがまず、テープカットをしましょう——そのあと、皆さんを館内の見学と軽食にご案内します。",
    questions: [
      {
        q: "What is the purpose of the speech?",
        choices: [
          "To open a new community center",
          "To celebrate an anniversary",
          "To announce a donation campaign",
          "To introduce a new director"
        ],
        answer: 0,
        explanation: "It's my great pleasure to officially open the Greenfield Community Center(コミュニティセンターの開所)が話の目的。"
      },
      {
        q: "What will the center offer for free?",
        choices: [
          "Meals",
          "Parking",
          "Classes",
          "Memberships"
        ],
        answer: 2,
        explanation: "a computer lab that will offer free classes to residents(無料クラスを提供)が根拠。"
      },
      {
        q: "What will the listeners most likely do next?",
        choices: [
          "Make a donation",
          "Sign up for a class",
          "Leave the building",
          "Watch a ribbon-cutting"
        ],
        answer: 3,
        explanation: "最後の let's cut the ribbon(まずテープカットを)が根拠。この直後に行われる行動はテープカット。"
      }
    ]
  }
];
