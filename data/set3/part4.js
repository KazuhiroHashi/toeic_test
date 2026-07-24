// セット3 part4(監査反映・正解位置均等化済み)
window.TOEIC_DATA_3 = window.TOEIC_DATA_3 || {};
window.TOEIC_DATA_3.part4 = [
  {
    "id": "s3p4-01",
    "kind": "telephone message",
    "title": "トーク 1(電話メッセージ)",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, this message is for Mr. Patterson. This is Renata from Golden Fork Catering, calling about the order for your office luncheon this Friday. I'm afraid the grilled salmon you selected won't be available that day, so I'd like to suggest our roasted chicken as a replacement at the same price. Could you let me know by tomorrow morning whether that works for you? Also, just a reminder that we'll need the final number of guests by Thursday, since our kitchen prepares every dish fresh on the day of the event. You can reach me directly at five five five, zero one seven two. Thank you so much."
      }
    ],
    "translation": "もしもし、パターソン様への伝言です。ゴールデンフォーク・ケータリングのレナータと申します。今週金曜日の社内ランチのご注文の件でお電話しました。あいにく、お選びいただいたグリルサーモンが当日ご用意できなくなりました。そこで、同じ価格でローストチキンへの変更をご提案したいと思います。これでよろしいか、明日の午前中までにお知らせいただけますか? また、当店の厨房は当日にすべての料理を新鮮に仕込むため、木曜日までに最終的なご参加人数が必要です。私の直通は555-0172です。よろしくお願いいたします。",
    "questions": [
      {
        "q": "Why is the speaker calling?",
        "choices": [
          "To cancel an event",
          "To confirm a delivery address",
          "To request a payment",
          "To suggest a change to an order"
        ],
        "answer": 3,
        "explanation": "the grilled salmon won't be available ... I'd like to suggest our roasted chicken as a replacement(サーモンが用意できず代替を提案)が根拠。電話の目的は冒頭で述べられる。"
      },
      {
        "q": "What does the speaker ask the listener to provide by Thursday?",
        "choices": [
          "A signed contract",
          "A deposit",
          "The final number of guests",
          "A seating chart"
        ],
        "answer": 2,
        "explanation": "we'll need the final number of guests by Thursday が根拠。headcount(人数)を問う典型。"
      },
      {
        "q": "What does the speaker say about the food?",
        "choices": [
          "It can be frozen in advance.",
          "It includes a free dessert.",
          "It is currently on sale.",
          "It is prepared fresh on the day."
        ],
        "answer": 3,
        "explanation": "our kitchen prepares every dish fresh on the day of the event が根拠。fresh(できたて)を言い換えなく問う。"
      }
    ]
  },
  {
    "id": "s3p4-02",
    "kind": "announcement",
    "title": "トーク 2(施設内アナウンス)",
    "audio": [
      {
        "speaker": "M",
        "text": "Attention, members. We'd like to let you know that our swimming pool will be closed for resurfacing from Monday, June second, through Friday, June sixth. During that time, everything else — the weight room, the sauna, and the group fitness studios — will stay open as usual. For those of you who swim regularly, we've arranged free access to the indoor pool at our sister club on Fifth Street. Just show your membership card at their front desk, and you're all set. We're sorry for the disruption and thank you for your patience. The pool will reopen on Saturday, June seventh."
      }
    ],
    "translation": "会員の皆さまにお知らせします。当施設のプールは、6月2日(月)から6月6日(金)まで、表面の張り替え工事のため閉鎖いたします。その間、ウェイトルーム、サウナ、グループフィットネススタジオなど、その他の設備は通常通りご利用いただけます。日ごろ泳がれる方のために、5番街の姉妹クラブの屋内プールを無料でご利用いただけるよう手配しました。先方のフロントで会員証をご提示いただくだけで結構です。ご不便をおかけしますが、ご理解に感謝いたします。プールは6月7日(土)に再開します。",
    "questions": [
      {
        "q": "What will be closed in early June?",
        "choices": [
          "The swimming pool",
          "The sauna",
          "The parking lot",
          "The weight room"
        ],
        "answer": 0,
        "explanation": "our swimming pool will be closed for resurfacing が根拠。他の設備(ウェイトルーム等)は開いておりひっかけ。"
      },
      {
        "q": "What can regular swimmers do during the closure?",
        "choices": [
          "Use a pool at another club",
          "Freeze their membership",
          "Book private lessons",
          "Receive a partial refund"
        ],
        "answer": 0,
        "explanation": "free access to the indoor pool at our sister club on Fifth Street(姉妹クラブのプールを無料で)が根拠。"
      },
      {
        "q": "What are members asked to show at the sister club?",
        "choices": [
          "A photo ID",
          "A guest pass",
          "Their membership card",
          "A payment receipt"
        ],
        "answer": 2,
        "explanation": "show your membership card at their front desk が根拠。"
      }
    ]
  },
  {
    "id": "s3p4-03",
    "kind": "advertisement",
    "title": "トーク 3(ラジオ広告)",
    "audio": [
      {
        "speaker": "W",
        "text": "Have you ever wanted to take stunning photos but felt overwhelmed by all the buttons on your camera? At Lenscraft Academy, we make photography simple. Our online course breaks everything down into short, easy lessons you can follow at your own pace, from your phone or your computer. Whether you're a complete beginner or just want to sharpen your skills, our expert instructors guide you every step of the way. Sign up this week, and your first month is only five dollars — that's ninety percent off the regular price. And every new member gets full access to our private online community of fellow photographers. Visit lenscraft academy dot com to start today."
      }
    ],
    "translation": "素敵な写真を撮ってみたいのに、カメラのボタンの多さに圧倒されたことはありませんか? レンズクラフト・アカデミーなら、写真をシンプルにします。当校のオンライン講座は、すべてを短くやさしいレッスンに分解し、スマホでもパソコンでも、自分のペースで学べます。まったくの初心者の方も、腕を磨きたい方も、経験豊富な講師が一歩ずつご案内します。今週お申し込みいただくと、初月はたった5ドル——通常価格の90%引きです。さらに新規会員の方は全員、写真愛好家のための非公開オンラインコミュニティに参加できます。今すぐ lenscraftacademy.com にアクセスしてください。",
    "questions": [
      {
        "q": "What is being advertised?",
        "choices": [
          "A camera repair shop",
          "A photo printing service",
          "An online photography course",
          "A modeling agency"
        ],
        "answer": 2,
        "explanation": "Our online course ... photography から、オンラインの写真講座の広告。camera から連想させる修理店はひっかけ。"
      },
      {
        "q": "What is offered to those who sign up this week?",
        "choices": [
          "A free camera",
          "A discounted first month",
          "A private lesson",
          "A physical textbook"
        ],
        "answer": 1,
        "explanation": "your first month is only five dollars — that's ninety percent off(初月が90%引き)が根拠。"
      },
      {
        "q": "What does every new member receive?",
        "choices": [
          "A free camera bag",
          "Access to an online community",
          "One-on-one coaching",
          "A printed guidebook"
        ],
        "answer": 1,
        "explanation": "every new member gets full access to our private online community が根拠。"
      }
    ]
  },
  {
    "id": "s3p4-04",
    "kind": "broadcast",
    "title": "トーク 4(ラジオニュース)",
    "audio": [
      {
        "speaker": "M",
        "text": "In local news, the city announced today that its new bike-sharing program, GreenWheel, will officially launch next Monday. Starting that day, residents will be able to rent bicycles from more than forty stations placed throughout downtown and along the riverfront. The first thirty minutes of every ride will be free, with a small fee after that. City officials say the program is part of a broader effort to ease traffic congestion and cut carbon emissions. To use the service, riders simply download the GreenWheel app and scan the code on any available bike. A map showing all of the station locations is posted on the city's Web site."
      }
    ],
    "translation": "地元のニュースです。市は本日、新しい自転車シェアリングプログラム『グリーンホイール』を来週月曜日に正式に開始すると発表しました。当日から、住民はダウンタウン一帯や川沿いに設置された40か所以上のステーションで自転車を借りられます。各利用の最初の30分は無料で、それ以降は少額の料金がかかります。市当局によると、この事業は交通渋滞の緩和と二酸化炭素排出の削減を目指す大きな取り組みの一環です。利用するには、グリーンホイールのアプリをダウンロードし、空いている自転車のコードを読み取るだけです。全ステーションの場所を示す地図は市のウェブサイトに掲載されています。",
    "questions": [
      {
        "q": "What is the news mainly about?",
        "choices": [
          "A change in transit fares",
          "A downtown festival",
          "A new bike-sharing program",
          "A road construction project"
        ],
        "answer": 2,
        "explanation": "its new bike-sharing program, GreenWheel, will officially launch が主題。"
      },
      {
        "q": "What is free for riders?",
        "choices": [
          "The first thirty minutes",
          "The mobile app",
          "Rides on weekends",
          "Parking downtown"
        ],
        "answer": 0,
        "explanation": "The first thirty minutes of every ride will be free が根拠。アプリ自体も無料だが問われているのは乗車。"
      },
      {
        "q": "How do riders start a rental?",
        "choices": [
          "By visiting a rental office",
          "By reserving over the phone",
          "By buying a paper ticket",
          "By scanning a code with an app"
        ],
        "answer": 3,
        "explanation": "download the GreenWheel app and scan the code on any available bike が根拠。"
      }
    ]
  },
  {
    "id": "s3p4-05",
    "kind": "tour information",
    "title": "トーク 5(見学ツアーの案内)",
    "audio": [
      {
        "speaker": "W",
        "text": "Welcome, everyone, to Fernwood Botanical Gardens. My name is Priya, and I'll be leading today's guided walk. Just a few things before we set off. Some of the paths can be a little uneven, so please watch your step, and feel free to ask questions at any time. We'll begin in the tropical greenhouse, where the orchids are in full bloom this month, and finish at the rose terrace, which has a lovely view over the valley. The whole walk takes about an hour. If you get thirsty, there's a café near the main gate that serves drinks and light snacks. One last thing — please don't pick any of the flowers. All right, shall we begin?"
      }
    ],
    "translation": "皆さま、ファーンウッド植物園へようこそ。本日ガイドを務めますプリヤと申します。出発前に、いくつかご案内を。園路の一部は少し凹凸がありますので、足元にお気をつけください。ご質問はいつでもどうぞ。ツアーは熱帯温室から始めます。今月はランが満開です。そして渓谷を見渡せる素敵な眺めのローズテラスで終わります。全体で約1時間です。喉が渇いたら、正門近くのカフェで飲み物や軽食をお召し上がりいただけます。最後にもう一点——お花は摘まないでください。それでは、始めましょうか。",
    "questions": [
      {
        "q": "Where will the tour begin?",
        "choices": [
          "In the tropical greenhouse",
          "At the café",
          "At the main gate",
          "At the rose terrace"
        ],
        "answer": 0,
        "explanation": "We'll begin in the tropical greenhouse が根拠。rose terrace は終了地点でひっかけ。"
      },
      {
        "q": "What does the guide ask the visitors not to do?",
        "choices": [
          "Bring in food",
          "Take photographs",
          "Touch the plants",
          "Pick any flowers"
        ],
        "answer": 3,
        "explanation": "please don't pick any of the flowers が根拠。"
      },
      {
        "q": "What is located near the main gate?",
        "choices": [
          "A café",
          "A restroom",
          "A parking area",
          "A gift shop"
        ],
        "answer": 0,
        "explanation": "there's a café near the main gate that serves drinks and light snacks が根拠。"
      }
    ]
  },
  {
    "id": "s3p4-06",
    "kind": "excerpt from a meeting",
    "graphicKind": "list",
    "title": "トーク 6(会議の抜粋・図表問題)",
    "graphic": "Monthly Newsletter Sign-ups\n1. January — 150\n2. February — 290\n3. March — 470\n4. April — 220",
    "audio": [
      {
        "speaker": "M",
        "text": "Let's turn to our newsletter numbers. As the chart shows, sign-ups climbed steadily for three straight months and hit a record high, and then they dropped off in the final month. And I think we know why. That last month is exactly when we replaced our quick one-click sign-up with a much longer form that asks for a lot of personal details. My guess is that plenty of visitors started filling it out and gave up partway through. So my proposal is simple: let's switch back to the shorter form and run a two-week test to see if the numbers recover. Any objections?"
      }
    ],
    "translation": "【図表】月別ニュースレター登録数/1月150/2月290/3月470/4月220\nニュースレターの数字に移りましょう。グラフの通り、登録数は3か月連続で着実に伸びて過去最高を記録し、その後、最後の月に落ち込みました。理由は分かっていると思います。その最後の月は、ちょうど当社がワンクリックの簡単登録を、個人情報を多く求めるずっと長いフォームに変えた時期です。おそらく、多くの訪問者が記入を始めたものの途中でやめてしまったのでしょう。そこで私の提案は単純です。短いフォームに戻し、2週間のテストを行って数字が回復するか見てみましょう。ご異論はありますか?",
    "questions": [
      {
        "q": "Look at the graphic. In which month were newsletter sign-ups the highest?",
        "choices": [
          "April",
          "March",
          "January",
          "February"
        ],
        "answer": 1,
        "explanation": "図表問題。音声は『3か月連続で伸びて過去最高、その後最後の月に落ち込んだ』と述べるだけで月名を言わない。図表で最大の470はMarch。音声と図表の両方が必要。"
      },
      {
        "q": "According to the speaker, what most likely caused the drop?",
        "choices": [
          "A longer sign-up form",
          "A holiday period",
          "A Web site error",
          "A price increase"
        ],
        "answer": 0,
        "explanation": "we replaced our quick one-click sign-up with a much longer form ... gave up partway through(長いフォームに変えたため途中離脱)が根拠。"
      },
      {
        "q": "What does the speaker propose?",
        "choices": [
          "Sending more e-mails",
          "Raising the subscription price",
          "Canceling the newsletter",
          "Returning to the shorter form"
        ],
        "answer": 3,
        "explanation": "let's switch back to the shorter form(短いフォームに戻す)が根拠。"
      }
    ]
  },
  {
    "id": "s3p4-07",
    "kind": "speech",
    "title": "トーク 7(スピーチ)",
    "audio": [
      {
        "speaker": "W",
        "text": "Thank you all for joining us on this special morning. Ten years ago, this lot was just an empty, unused space. Today, thanks to the generosity of hundreds of donors and countless volunteer hours, we're proud to open the doors of the Maple Street Community Center. Inside, you'll find a library, a children's play area, and a large hall that local groups can reserve free of charge. And starting next week, we'll offer free evening classes in everything from computer skills to painting. I'd especially like to thank our lead architect, Mr. Osei, whose design made this bright, welcoming building possible. Now, please join me in cutting the ribbon."
      }
    ],
    "translation": "この特別な朝にお集まりいただき、ありがとうございます。10年前、この区画はただの空き地でした。今日、何百人もの寄付者の寛大さと、数えきれないボランティアの時間のおかげで、メープルストリート・コミュニティセンターの扉を開くことができ、誇りに思います。館内には、図書室、子ども向けの遊び場、そして地元の団体が無料で予約できる大ホールがあります。さらに来週からは、コンピュータースキルから絵画まで、さまざまな無料の夜間講座を開講します。とりわけ、この明るく居心地のよい建物を実現してくれた主任建築家のオセイ氏に感謝したいと思います。それでは、一緒にテープカットをいたしましょう。",
    "questions": [
      {
        "q": "What event is taking place?",
        "choices": [
          "A fundraising dinner",
          "The opening of a community center",
          "An art exhibition",
          "A retirement party"
        ],
        "answer": 1,
        "explanation": "we're proud to open the doors of the Maple Street Community Center が根拠。寄付やボランティアの言及から募金行事を選ばせるひっかけ。"
      },
      {
        "q": "What can local groups do free of charge?",
        "choices": [
          "Borrow laptops",
          "Reserve the large hall",
          "Receive free meals",
          "Store their belongings"
        ],
        "answer": 1,
        "explanation": "a large hall that local groups can reserve free of charge が根拠。"
      },
      {
        "q": "Whom does the speaker especially thank?",
        "choices": [
          "The head volunteer",
          "The city mayor",
          "A local business owner",
          "The architect"
        ],
        "answer": 3,
        "explanation": "I'd especially like to thank our lead architect, Mr. Osei が根拠。"
      }
    ]
  },
  {
    "id": "s3p4-08",
    "kind": "talk",
    "title": "トーク 8(ワークショップの導入)",
    "audio": [
      {
        "speaker": "M",
        "text": "Good evening, and welcome to tonight's career workshop, 'Resumes That Get Noticed.' I'm Marcus, and I've spent fifteen years as a hiring manager reviewing job applications. Over the next ninety minutes, I'll share the most common mistakes I see, and, more importantly, how to fix them. Here's how tonight will work. First, we'll go through some real, anonymous examples up on the screen. After that, you'll have time to revise your own resume using what you've learned, while I walk around and give each of you feedback. So please take out the printed copy of your resume that I asked you to bring tonight. Don't worry if it's rough — that's exactly what we're here to improve."
      }
    ],
    "translation": "こんばんは。本日のキャリアワークショップ『目に留まる履歴書』へようこそ。マーカスと申します。私は採用担当として15年間、応募書類を審査してきました。これからの90分で、私がよく見かける失敗と、より大切なその直し方をお伝えします。今夜の流れはこうです。まず、画面に実際の匿名の例をいくつか映して見ていきます。その後、学んだことを使ってご自身の履歴書を書き直す時間を取り、その間、私が皆さんのところを回って一人ずつフィードバックします。ですので、今夜お持ちいただくようお願いした履歴書の印刷版を出してください。粗くても心配いりません——まさにそれを良くするためにここにいるのですから。",
    "questions": [
      {
        "q": "Who most likely is the speaker?",
        "choices": [
          "A university professor",
          "A company owner",
          "A career fair organizer",
          "A hiring manager"
        ],
        "answer": 3,
        "explanation": "I've spent fifteen years as a hiring manager(採用担当)が根拠。"
      },
      {
        "q": "What will participants do after reviewing the examples?",
        "choices": [
          "Watch a short video",
          "Take a written test",
          "Revise their own resume",
          "Break into small groups"
        ],
        "answer": 2,
        "explanation": "you'll have time to revise your own resume using what you've learned が根拠。"
      },
      {
        "q": "What are participants asked to take out?",
        "choices": [
          "A printed copy of their resume",
          "A pen and notebook",
          "A laptop computer",
          "A name tag"
        ],
        "answer": 0,
        "explanation": "please take out the printed copy of your resume that I asked you to bring が根拠。"
      }
    ]
  },
  {
    "id": "s3p4-09",
    "kind": "announcement",
    "graphicKind": "schedule",
    "title": "トーク 9(イベント案内・図表問題)",
    "graphic": "Community Wellness Fair — Session Schedule\n1. 10:00  Nutrition Basics\n2. 11:00  Yoga for Beginners\n3. 13:00  Stress Management\n4. 14:00  Healthy Cooking Demo",
    "audio": [
      {
        "speaker": "W",
        "text": "Good morning, and welcome to the Community Wellness Fair. Before the sessions get underway, one quick update. Unfortunately, the presenter for our one o'clock session is delayed by a traffic jam on the highway, so that session will now begin thirty minutes later than printed. Every other session will run exactly as scheduled. While you wait, we'd encourage you to stop by the information booth in the main lobby, where you can pick up free samples and enter our raffle for a fitness tracker. Winners will be announced at the very end of the day. Thank you, and enjoy the fair."
      }
    ],
    "translation": "【図表】コミュニティ・ウェルネス・フェア セッション予定/1. 10:00 栄養の基本/2. 11:00 初心者ヨガ/3. 13:00 ストレス管理/4. 14:00 ヘルシー料理デモ\nおはようございます。コミュニティ・ウェルネス・フェアへようこそ。セッションが始まる前に、一つ手短にお知らせを。あいにく、午後1時のセッションの講師が高速道路の渋滞で遅れており、そのセッションは予定より30分遅れて開始します。それ以外のセッションはすべて予定通り行います。お待ちの間、メインロビーの案内ブースにぜひお立ち寄りください。無料サンプルを受け取ったり、フィットネストラッカーが当たる抽選に参加したりできます。当選者は本日の最後に発表します。それでは、フェアをお楽しみください。",
    "questions": [
      {
        "q": "Look at the graphic. Which session will begin later than scheduled?",
        "choices": [
          "Healthy Cooking Demo",
          "Yoga for Beginners",
          "Stress Management",
          "Nutrition Basics"
        ],
        "answer": 2,
        "explanation": "図表問題。音声は『午後1時のセッションが30分遅れる』とだけ述べ、名称は言わない。図表で13:00に対応するのは Stress Management。"
      },
      {
        "q": "Why will the session be delayed?",
        "choices": [
          "Too few people registered.",
          "A presenter is stuck in traffic.",
          "Some equipment is missing.",
          "A room is being cleaned."
        ],
        "answer": 1,
        "explanation": "the presenter ... is delayed by a traffic jam on the highway が根拠。"
      },
      {
        "q": "What can attendees do at the information booth?",
        "choices": [
          "Register for sessions",
          "Enter a raffle",
          "Meet the presenters",
          "Purchase lunch"
        ],
        "answer": 1,
        "explanation": "enter our raffle for a fitness tracker(抽選に参加)が根拠。当選発表は最後なのでその場で受け取るわけではない。"
      }
    ]
  },
  {
    "id": "s3p4-10",
    "kind": "telephone message",
    "title": "トーク 10(電話メッセージ)",
    "audio": [
      {
        "speaker": "M",
        "text": "Hello, this message is for Ms. Caldwell. This is Theo from Nordic Home Furnishings, calling about the dining table and chairs you ordered last week. Good news — your order arrived at our warehouse earlier than we expected. We can deliver it as soon as this Saturday, between nine and noon. But I'll need to confirm that someone will be home to receive it, since the set is quite large and requires a signature. Could you please call me back to arrange a time that works for you? Also, if you'd like, our delivery team can assemble the furniture for you for a small additional fee. My number is five five five, zero one three nine. Thanks, and I look forward to hearing from you."
      }
    ],
    "translation": "もしもし、コールドウェル様への伝言です。ノルディック・ホーム・ファニシングズのテオと申します。先週ご注文いただいたダイニングテーブルと椅子の件でお電話しました。良いお知らせです——ご注文の品が、予想より早く当社の倉庫に届きました。早ければ今週土曜日の9時から正午の間にお届けできます。ただ、このセットはかなり大きく、受け取りにサインが必要なため、どなたかがご在宅かどうか確認させていただく必要があります。ご都合のよい時間を決めるため、折り返しお電話いただけますか? また、ご希望であれば、当社の配送チームが少額の追加料金で家具の組み立ても承ります。私の番号は555-0139です。ご連絡をお待ちしております。",
    "questions": [
      {
        "q": "What has arrived earlier than expected?",
        "choices": [
          "A replacement part",
          "A refund check",
          "A furniture order",
          "A product catalog"
        ],
        "answer": 2,
        "explanation": "the dining table and chairs you ordered ... arrived at our warehouse earlier than we expected が根拠。"
      },
      {
        "q": "Why does the speaker ask the listener to call back?",
        "choices": [
          "To arrange a delivery time",
          "To choose a fabric color",
          "To report a damaged item",
          "To pay an outstanding balance"
        ],
        "answer": 0,
        "explanation": "call me back to arrange a time that works(配送時間を決めるため)が根拠。在宅とサインの確認が必要。"
      },
      {
        "q": "What is available for a small additional fee?",
        "choices": [
          "An extended warranty",
          "Furniture assembly",
          "Gift wrapping",
          "Faster shipping"
        ],
        "answer": 1,
        "explanation": "our delivery team can assemble the furniture for you for a small additional fee が根拠。"
      }
    ]
  }
];
