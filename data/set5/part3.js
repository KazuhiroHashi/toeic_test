// セット5 part3(重複差し替え・正解位置均等化済み)
window.TOEIC_DATA_5 = window.TOEIC_DATA_5 || {};
window.TOEIC_DATA_5.part3 = [
  {
    "id": "s5p3-01",
    "title": "会話 1",
    "audio": [
      {
        "speaker": "W",
        "text": "Good morning, Lakeside Physiotherapy. How can I help you?"
      },
      {
        "speaker": "M",
        "text": "Hi, this is Andrew Cole. I have a session with Dr. Reyes this Thursday at four, but something's come up at work. Could I move it to Friday?"
      },
      {
        "speaker": "W",
        "text": "Let me look... Dr. Reyes is fully booked on Friday, but she has an opening on Monday at ten. Would that suit you?"
      },
      {
        "speaker": "M",
        "text": "Monday morning works. And should I keep doing the stretching exercises she gave me until then?"
      },
      {
        "speaker": "W",
        "text": "Yes, please continue them every day. I'll send you a text to confirm Monday at ten."
      }
    ],
    "translation": "女性:おはようございます、レイクサイド理学療法です。ご用件を承ります。\n男性:こんにちは、アンドリュー・コールです。今週木曜の4時にレイエス先生の施術を予約しているんですが、仕事で急用ができてしまって。金曜に変更できますか?\n女性:確認しますね……レイエス先生は金曜は予約でいっぱいですが、月曜の10時なら空いています。それでよろしいですか?\n男性:月曜の朝で大丈夫です。それと、それまで先生に教わったストレッチの運動は続けていた方がいいですか?\n女性:はい、毎日続けてください。月曜10時の確認のメッセージをお送りします。",
    "questions": [
      {
        "q": "Why is the man calling?",
        "choices": [
          "To ask about a bill",
          "To cancel a membership",
          "To order equipment",
          "To change an appointment"
        ],
        "answer": 3,
        "explanation": "男性の Could I move it to Friday?(金曜に動かせますか)から、予約変更が目的。move が change に言い換えられている。会員解約や請求の話は出ていないのでひっかけ。"
      },
      {
        "q": "What does the woman say about Friday?",
        "choices": [
          "A different doctor is on duty.",
          "Dr. Reyes has no available times.",
          "The session fee is higher.",
          "The clinic is closed all day."
        ],
        "answer": 1,
        "explanation": "女性の Dr. Reyes is fully booked on Friday(金曜は予約でいっぱい)が根拠。fully booked を has no available times と言い換えている。"
      },
      {
        "q": "What does the woman tell the man to keep doing?",
        "choices": [
          "Filling out new forms",
          "Doing his stretching exercises",
          "Taking his medication",
          "Paying in installments"
        ],
        "answer": 1,
        "explanation": "男性の質問に対し女性は please continue them every day と答えている。them は the stretching exercises を指す。薬(medication)の話は出ていない。"
      }
    ]
  },
  {
    "id": "s5p3-02",
    "title": "会話 2",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, I'm taking the online marketing analytics course. I wanted to check when this week's recorded lecture will be available to watch."
      },
      {
        "speaker": "M",
        "text": "The recordings usually go up about two days after the live class. This week's session was on Wednesday, so it should be ready by Friday afternoon."
      },
      {
        "speaker": "W",
        "text": "Great, thank you. And where can I find the assigned readings?"
      },
      {
        "speaker": "M",
        "text": "They're under the 'Resources' tab on the course page. If they're not there, just e-mail me and I'll send you the file directly."
      }
    ],
    "translation": "女性:こんにちは、オンラインのマーケティング分析コースを受講しているんですが、今週の録画講義がいつ見られるようになるか確認したくて。\n男性:録画はたいてい、ライブ授業の2日後くらいに公開されます。今週の回は水曜だったので、金曜の午後には見られるはずです。\n女性:助かります、ありがとう。それと、指定された読み物はどこで見つけられますか?\n男性:コースページの『資料』タブの下にあります。もしそこに無ければ、私にメールをくれれば直接ファイルをお送りします。",
    "questions": [
      {
        "q": "What is the woman asking about?",
        "choices": [
          "Where a classroom is located",
          "How to pay her tuition",
          "When a lecture recording will be available",
          "How to switch to another course"
        ],
        "answer": 2,
        "explanation": "女性の when this week's recorded lecture will be available to watch が根拠。学費や教室の場所、コース変更の話は出ていない。"
      },
      {
        "q": "When will this week's recording be available?",
        "choices": [
          "In two weeks",
          "On Monday",
          "By Friday",
          "On Wednesday"
        ],
        "answer": 2,
        "explanation": "男性の it should be ready by Friday afternoon が根拠。Wednesday は録画された日(ライブ授業の日)でありひっかけ。"
      },
      {
        "q": "What does the man offer to do?",
        "choices": [
          "Send her a file by e-mail",
          "Refund a fee",
          "Record another lecture",
          "Extend a deadline"
        ],
        "answer": 0,
        "explanation": "男性の just e-mail me and I'll send you the file directly が申し出。締め切り延長や返金の話はない。"
      }
    ]
  },
  {
    "id": "s5p3-03",
    "title": "会話 3",
    "audio": [
      {
        "speaker": "M",
        "text": "Fiona, the building manager approved our plan to add recycling stations on every floor. We can start next month."
      },
      {
        "speaker": "W",
        "text": "That's great news. Should we get separate bins for paper, plastic, and food waste?"
      },
      {
        "speaker": "M",
        "text": "Yes. And I think we should put a short sign above each bin so people sort things correctly."
      },
      {
        "speaker": "W",
        "text": "Good idea. I'll design the signs this week and ask a shop to laminate them."
      }
    ],
    "translation": "男性:フィオナ、ビル管理者が各階にリサイクルステーションを設ける僕らの案を承認してくれたよ。来月から始められる。\n女性:それは良いニュースね。紙、プラスチック、生ごみ用に別々のごみ箱を用意した方がいいかしら?\n男性:うん。それと、みんなが正しく分別できるように、各ごみ箱の上に短い掲示を出すべきだと思う。\n女性:いい考えね。今週私が掲示をデザインして、業者にラミネート加工を頼むわ。",
    "questions": [
      {
        "q": "What have the speakers received approval for?",
        "choices": [
          "Extending the office hours",
          "Renovating the lobby",
          "Setting up recycling stations",
          "Hiring additional cleaners"
        ],
        "answer": 2,
        "explanation": "男性の approved our plan to add recycling stations が根拠。add を Setting up と言い換えている。清掃員の増員や改装の話ではない。"
      },
      {
        "q": "What does the man suggest adding?",
        "choices": [
          "A water dispenser",
          "A new staff kitchen",
          "More parking spaces",
          "Signs above the bins"
        ],
        "answer": 3,
        "explanation": "男性の put a short sign above each bin が根拠。分別を促す掲示の設置を提案している。"
      },
      {
        "q": "What will the woman do this week?",
        "choices": [
          "Train new employees",
          "Order new furniture",
          "Contact the landlord",
          "Design some signs"
        ],
        "answer": 3,
        "explanation": "女性の I'll design the signs this week が根拠。ラミネートは業者に頼むのであって自分でするのではない点に注意。"
      }
    ]
  },
  {
    "id": "s5p3-04",
    "title": "会話 4",
    "audio": [
      {
        "speaker": "W",
        "text": "So, Mr. Ellis, you'd like to redo the front garden. What did you have in mind?"
      },
      {
        "speaker": "M",
        "text": "The lawn needs so much watering in summer. I'd like something that stays green with a lot less water."
      },
      {
        "speaker": "W",
        "text": "Then I'd recommend drought-tolerant plants like lavender and ornamental grasses, with gravel paths in between."
      },
      {
        "speaker": "M",
        "text": "That sounds perfect. How long would the work take?"
      },
      {
        "speaker": "W",
        "text": "About a week, once the plants arrive. I'll e-mail you a design and a cost estimate by Tuesday."
      }
    ],
    "translation": "女性:では、エリスさん、前庭をやり直したいということですね。どんなイメージをお持ちですか?\n男性:芝生は夏にすごく水やりが要るんです。もっとずっと少ない水で緑を保てるものにしたくて。\n女性:でしたら、ラベンダーや観賞用の草のような乾燥に強い植物を、間に砂利の小道を挟んでお勧めします。\n男性:それは完璧です。作業はどれくらいかかりますか?\n女性:植物が届けば1週間ほどです。火曜までにデザインと見積もりをメールでお送りします。",
    "questions": [
      {
        "q": "Where most likely are the speakers?",
        "choices": [
          "At a garden center",
          "At the man's home",
          "At a repair shop",
          "At a city park"
        ],
        "answer": 1,
        "explanation": "女性が redo the front garden(前庭をやり直す)と切り出し、施工の相談をしていることから、男性の自宅での現地打ち合わせと分かる。園芸用品店や公園ではない。"
      },
      {
        "q": "What does the man want to reduce?",
        "choices": [
          "The amount of water needed",
          "The number of trees",
          "The size of the garden",
          "The cost of his tools"
        ],
        "answer": 0,
        "explanation": "男性の something that stays green with a lot less water が根拠。水やりの量を減らしたい。庭の広さや木の本数の話ではない。"
      },
      {
        "q": "What will the woman send by Tuesday?",
        "choices": [
          "A list of suppliers",
          "A photo album",
          "A design and a cost estimate",
          "A signed contract"
        ],
        "answer": 2,
        "explanation": "女性の I'll e-mail you a design and a cost estimate by Tuesday が根拠。『火曜までに』の期限が設問のキー。"
      }
    ]
  },
  {
    "id": "s5p3-05",
    "title": "会話 5(3人の会話:女性2人+男性1人)",
    "audio": [
      {
        "speaker": "W",
        "text": "Ben, Chloe — we need to plan the recruitment video shoot for next week. Marketing wants it finished by Friday."
      },
      {
        "speaker": "M",
        "text": "How long will the shoot take, Grace?"
      },
      {
        "speaker": "W",
        "text": "Probably two days. We'll film the staff interviews on the first day and general office footage on the second."
      },
      {
        "speaker": "W2",
        "text": "I can arrange the interview room and the lighting. Should I also reserve the camera operator we hired last time?"
      },
      {
        "speaker": "W",
        "text": "Yes, please do, Chloe. Ben, could you write the list of interview questions?"
      },
      {
        "speaker": "M",
        "text": "Sure. I'll have them ready by Wednesday."
      }
    ],
    "translation": "グレース(女性1):ベン、クロエ——来週の採用動画の撮影を計画しないと。マーケティング部が金曜までに仕上げてほしいって。\nベン(男性):撮影はどれくらいかかるの、グレース?\nグレース:たぶん2日ね。1日目に社員インタビューを撮って、2日目にオフィス全般の映像を撮る予定。\nクロエ(女性2):私はインタビュー用の部屋と照明を手配できるわ。前回頼んだカメラマンも予約しておきましょうか?\nグレース:ええ、お願い、クロエ。ベン、インタビューの質問リストを作ってくれる?\nベン:いいよ。水曜までに用意しておく。",
    "questions": [
      {
        "q": "What are the speakers planning?",
        "choices": [
          "A recruitment video shoot",
          "A press conference",
          "A holiday party",
          "A training seminar"
        ],
        "answer": 0,
        "explanation": "グレースの plan the recruitment video shoot が根拠。記者会見や研修、パーティーではない。3人の会話では冒頭で全体の目的をつかむ。"
      },
      {
        "q": "What does Chloe offer to do?",
        "choices": [
          "Edit the final video",
          "Contact the marketing team",
          "Reserve a camera operator",
          "Write the interview questions"
        ],
        "answer": 2,
        "explanation": "2人目の女性クロエの reserve the camera operator we hired last time? が申し出。質問リスト作成はベンの担当なのでひっかけ。"
      },
      {
        "q": "What will Ben do by Wednesday?",
        "choices": [
          "Set up the lighting",
          "Book a studio",
          "Film the interviews",
          "Prepare the interview questions"
        ],
        "answer": 3,
        "explanation": "ベンの I'll have them ready by Wednesday が根拠。them は質問リストを指す。照明の手配はクロエの担当。"
      }
    ]
  },
  {
    "id": "s5p3-06",
    "title": "会話 6",
    "audio": [
      {
        "speaker": "M",
        "text": "Hi, I'm a new patient. I have a ten o'clock appointment for a cleaning."
      },
      {
        "speaker": "W",
        "text": "Welcome. Since this is your first visit, could you please complete this medical history form? It takes about five minutes."
      },
      {
        "speaker": "M",
        "text": "Sure. Do you need my insurance card as well?"
      },
      {
        "speaker": "W",
        "text": "Yes, please. I'll make a copy of it while you fill out the form, and then the hygienist will call you in."
      }
    ],
    "translation": "男性:こんにちは、初診なんですが。10時にクリーニングの予約をしています。\n女性:ようこそ。初めてのご来院ですので、こちらの問診票にご記入いただけますか? 5分ほどで終わります。\n男性:分かりました。保険証もいりますか?\n女性:はい、お願いします。ご記入いただいている間にコピーを取りますね。その後、歯科衛生士がお呼びします。",
    "questions": [
      {
        "q": "Why is the man at the clinic?",
        "choices": [
          "To pay an overdue bill",
          "To have his teeth cleaned",
          "To schedule surgery",
          "To pick up test results"
        ],
        "answer": 1,
        "explanation": "男性の an appointment for a cleaning と、後の hygienist(歯科衛生士)から歯のクリーニングと分かる。検査結果の受け取りや支払いではない。"
      },
      {
        "q": "What does the woman ask the man to complete?",
        "choices": [
          "A payment slip",
          "An appointment card",
          "A feedback survey",
          "A medical history form"
        ],
        "answer": 3,
        "explanation": "女性の complete this medical history form が根拠。初診のため問診票の記入を求めている。"
      },
      {
        "q": "What will the woman do next?",
        "choices": [
          "Call the dentist",
          "Make a copy of his insurance card",
          "Reschedule his visit",
          "Give him a receipt"
        ],
        "answer": 1,
        "explanation": "女性の I'll make a copy of it(保険証のコピーを取る)が根拠。it は insurance card を指す。"
      }
    ]
  },
  {
    "id": "s5p3-07",
    "title": "会話 7(3人の会話:男性2人+女性1人)",
    "audio": [
      {
        "speaker": "W",
        "text": "Tom, Raj — the contractor can install the rooftop solar panels next Thursday, so we need to get the building ready."
      },
      {
        "speaker": "M",
        "text": "Roof access is through the fifth floor, right? I'll make sure that door is unlocked in the morning."
      },
      {
        "speaker": "W",
        "text": "Thanks, Tom. We'll also have to shut off power to the top floor for about an hour during the work."
      },
      {
        "speaker": "M2",
        "text": "I'll send a notice to the fifth-floor staff so they can plan around the outage."
      },
      {
        "speaker": "W",
        "text": "Perfect, Raj. And could you also set aside a few parking spots for the contractor's truck?"
      },
      {
        "speaker": "M2",
        "text": "No problem. I'll take care of both this afternoon."
      }
    ],
    "translation": "ローラ(女性):トム、ラジ——業者が来週木曜に屋上の太陽光パネルを設置できるそうよ。だから建物の準備をしないと。\nトム(男性1):屋上へのアクセスは5階からだよね? 当日の朝、そのドアを開けておくようにするよ。\nローラ:ありがとう、トム。それと、作業中は1時間ほど最上階の電源を切る必要があるの。\nラジ(男性2):停電に備えられるよう、5階の社員に通知を送っておきます。\nローラ:完璧ね、ラジ。それと、業者のトラック用に駐車スペースをいくつか確保してもらえる?\nラジ:問題ありません。今日の午後、両方やっておきます。",
    "questions": [
      {
        "q": "What will be installed on Thursday?",
        "choices": [
          "Solar panels",
          "Air conditioners",
          "New windows",
          "An elevator"
        ],
        "answer": 0,
        "explanation": "ローラの install the rooftop solar panels next Thursday が根拠。窓やエレベーターではない。"
      },
      {
        "q": "What does Tom agree to do?",
        "choices": [
          "Reserve some parking spaces",
          "Notify the fifth-floor staff",
          "Turn off the power",
          "Unlock the roof access"
        ],
        "answer": 3,
        "explanation": "トムの I'll make sure that door is unlocked が根拠。駐車スペースの確保と社員への通知はラジの担当なのでひっかけ。"
      },
      {
        "q": "What does Raj offer to do?",
        "choices": [
          "Postpone the installation",
          "Send a notice about a power outage",
          "Meet the contractor outside",
          "Inspect the roof himself"
        ],
        "answer": 1,
        "explanation": "2人目の男性ラジの send a notice to the fifth-floor staff so they can plan around the outage が根拠。誰が何を担当するかを声と名前で追う。"
      }
    ]
  },
  {
    "id": "s5p3-08",
    "graphicKind": "list",
    "title": "会話 8(図表問題)",
    "graphic": "Riverstone Medical Center — Floor Directory\n1. Floor 1 — General Practice\n2. Floor 2 — Dermatology\n3. Floor 3 — Physical Therapy\n4. Floor 4 — Radiology (X-ray & Imaging)",
    "audio": [
      {
        "speaker": "W",
        "text": "Excuse me, my doctor referred me for an X-ray of my knee. Which floor should I go to?"
      },
      {
        "speaker": "M",
        "text": "Imaging is on the top floor. Take the elevator on your left."
      },
      {
        "speaker": "W",
        "text": "Thank you. Do I need to check in up there, or here at the front desk first?"
      },
      {
        "speaker": "M",
        "text": "You can go straight up — they'll already have your referral in the system. Just bring your ID with you."
      }
    ],
    "translation": "【図表】リバーストーン医療センター フロア案内/1階:一般診療/2階:皮膚科/3階:理学療法/4階:放射線科(X線・画像診断)\n女性:すみません、医師にひざのX線検査を紹介されたんですが、何階に行けばいいですか?\n男性:画像診断は最上階です。左手のエレベーターをお使いください。\n女性:ありがとうございます。上で受付をするんですか、それとも先にこの受付でしますか?\n男性:そのまま上に行って大丈夫です——紹介の情報はすでにシステムに入っていますので。身分証だけお持ちください。",
    "questions": [
      {
        "q": "Look at the graphic. Which floor will the woman go to?",
        "choices": [
          "Floor 4",
          "Floor 2",
          "Floor 1",
          "Floor 3"
        ],
        "answer": 0,
        "explanation": "図表問題。音声の X-ray と、男性の Imaging is on the top floor を、図表の『4階:放射線科(X線・画像診断)』と突き合わせる。X線=Radiology は4階。"
      },
      {
        "q": "What does the man tell the woman to bring?",
        "choices": [
          "An appointment card",
          "Her ID",
          "A referral letter",
          "A payment receipt"
        ],
        "answer": 1,
        "explanation": "男性の Just bring your ID with you が根拠。紹介情報はすでにシステムにあると言っているので、referral letter(紹介状)を持参する必要はなくひっかけ。"
      },
      {
        "q": "What does the man say the woman can do?",
        "choices": [
          "Wait in the lobby",
          "Fill out a form first",
          "Come back another day",
          "Go straight up to the department"
        ],
        "answer": 3,
        "explanation": "男性の You can go straight up が根拠。ここの受付での手続きは不要と伝えている。"
      }
    ]
  },
  {
    "id": "s5p3-09",
    "title": "会話 9(意図問題)",
    "audio": [
      {
        "speaker": "M",
        "text": "Nadia, have you finished grading the midterm essays? The grades are due to the registrar on Monday."
      },
      {
        "speaker": "W",
        "text": "There are ninety of them."
      },
      {
        "speaker": "M",
        "text": "I know it's a lot. I can take half if that helps — say, the last forty-five."
      },
      {
        "speaker": "W",
        "text": "That would be great. If we split them, I can definitely finish my share by Sunday night."
      },
      {
        "speaker": "M",
        "text": "Let's do that, then. I'll start on mine this evening."
      }
    ],
    "translation": "男性:ナディア、中間試験の小論文の採点は終わった? 成績は月曜までに教務課へ提出しないといけないんだ。\n女性:90枚もあるのよ。\n男性:大変なのは分かってる。もし助けになるなら、僕が半分——後半の45枚を引き受けるよ。\n女性:それは助かるわ。分ければ、私の分は日曜の夜までに必ず終えられる。\n男性:じゃあそうしよう。僕は今夜から自分の分を始めるよ。",
    "questions": [
      {
        "q": "What are the speakers mainly discussing?",
        "choices": [
          "Choosing a textbook",
          "Scheduling a final exam",
          "Planning a new course",
          "Grading student essays"
        ],
        "answer": 3,
        "explanation": "冒頭の grading the midterm essays が根拠。教科書選びや試験日程の話ではない。"
      },
      {
        "q": "What does the woman imply when she says, \"There are ninety of them\"?",
        "choices": [
          "The workload is very large.",
          "The class is too small.",
          "She has already finished grading.",
          "She needs more essays."
        ],
        "answer": 0,
        "explanation": "意図問題。月曜締め切りに対し『90枚もある』=一人では終わらないほど量が多いという含意。だから男性が半分引き受ける流れになる。文字通りの意味ではなく文脈上の意図を問う。"
      },
      {
        "q": "What does the man offer to do?",
        "choices": [
          "Cancel the midterm",
          "Grade half of the essays",
          "Extend the deadline",
          "Hire another assistant"
        ],
        "answer": 1,
        "explanation": "男性の I can take half ... the last forty-five が申し出。締め切り延長や助手の雇用ではない。"
      }
    ]
  },
  {
    "id": "s5p3-10",
    "title": "会話 10",
    "audio": [
      {
        "speaker": "M",
        "text": "Hi, I'm looking for some plants for my backyard, but it gets very little sun — it's in shade almost all day."
      },
      {
        "speaker": "W",
        "text": "In that case, ferns and hostas do really well in shade, and they're both quite low-maintenance."
      },
      {
        "speaker": "M",
        "text": "That's good to hear. How often would I need to water them?"
      },
      {
        "speaker": "W",
        "text": "About twice a week in summer, and less when it's cooler. They're over in aisle three if you'd like to take a look."
      }
    ],
    "translation": "男性:こんにちは、裏庭用の植物を探しているんですが、日当たりがすごく悪くて——ほぼ一日中日陰なんです。\n女性:それなら、シダやギボウシは日陰でもよく育ちますし、どちらも手間がかかりません。\n男性:それはいいですね。水やりはどのくらいの頻度で必要ですか?\n女性:夏で週2回くらい、涼しくなればもっと少なくて大丈夫です。ご覧になるなら3番通路にありますよ。",
    "questions": [
      {
        "q": "What is the man looking for?",
        "choices": [
          "Garden tools",
          "Plants for a shady area",
          "Outdoor furniture",
          "A watering system"
        ],
        "answer": 1,
        "explanation": "男性の plants for my backyard ... in shade almost all day が根拠。日陰向きの植物を探している。道具や家具ではない。"
      },
      {
        "q": "What does the woman say about the plants she recommends?",
        "choices": [
          "They require little care.",
          "They are currently on sale.",
          "They bloom all year.",
          "They grow very quickly."
        ],
        "answer": 0,
        "explanation": "女性の they're both quite low-maintenance(手間がかからない)が根拠。require little care への言い換え。一年中咲くやセール中とは言っていない。"
      },
      {
        "q": "What does the woman suggest the man do?",
        "choices": [
          "Order the plants online",
          "Come back in summer",
          "Speak with a manager",
          "Look in aisle three"
        ],
        "answer": 3,
        "explanation": "女性の They're over in aisle three if you'd like to take a look が根拠。3番通路を見るよう促している。"
      }
    ]
  },
  {
    "id": "s5p3-11",
    "title": "会話 11",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, I'd like to book a family portrait session for next month. Do you do outdoor shoots?"
      },
      {
        "speaker": "M",
        "text": "We offer both studio and outdoor sessions. The outdoor ones are especially popular in the fall when the leaves change color."
      },
      {
        "speaker": "W",
        "text": "Outdoor sounds lovely. How many edited photos come with a session?"
      },
      {
        "speaker": "M",
        "text": "The standard package includes fifteen edited digital photos, and you can order prints separately."
      },
      {
        "speaker": "W",
        "text": "That sounds good. Could I book the first Saturday of next month?"
      },
      {
        "speaker": "M",
        "text": "Let me check availability, and I'll call you back within the hour to confirm."
      }
    ],
    "translation": "女性:こんにちは、来月に家族のポートレート撮影を予約したいんですが。屋外撮影はやっていますか?\n男性:スタジオと屋外の両方の撮影をご用意しています。屋外は特に、葉が色づく秋に人気です。\n女性:屋外いいですね。撮影1回で編集済みの写真は何枚もらえますか?\n男性:標準パッケージには編集済みのデジタル写真が15枚含まれます。プリントは別途ご注文いただけます。\n女性:いいですね。来月の第1土曜日に予約できますか?\n男性:空き状況を確認して、1時間以内に折り返しお電話して確定します。",
    "questions": [
      {
        "q": "What does the woman want to do?",
        "choices": [
          "Book a portrait session",
          "Frame some prints",
          "Buy a new camera",
          "Take a photography class"
        ],
        "answer": 0,
        "explanation": "女性の book a family portrait session が根拠。カメラ購入や撮影教室ではない。"
      },
      {
        "q": "What does the man say about the standard package?",
        "choices": [
          "It requires a deposit.",
          "It takes two weeks to deliver.",
          "It includes fifteen edited photos.",
          "It is only for studio shots."
        ],
        "answer": 2,
        "explanation": "男性の The standard package includes fifteen edited digital photos が根拠。プリントは別料金であって、パッケージに含まれるのは編集済み写真15枚。"
      },
      {
        "q": "What will the man most likely do next?",
        "choices": [
          "Call the woman back",
          "Send a price list",
          "Cancel a booking",
          "Visit the woman's home"
        ],
        "answer": 0,
        "explanation": "男性の I'll call you back within the hour to confirm が根拠。空き状況を確認してから折り返す。"
      }
    ]
  },
  {
    "id": "s5p3-12",
    "graphicKind": "invoice",
    "title": "会話 12(図表問題)",
    "graphic": "Invoice #5527 — Greenway Landscaping\n1. Lawn mowing — $40\n2. Hedge trimming — $55\n3. Tree pruning ($90 × 2) — $180\n4. Debris removal — $35\nTotal — $310",
    "audio": [
      {
        "speaker": "W",
        "text": "Hello, this is Diane Park. I received invoice five-five-two-seven, but I think there's an error. Your crew pruned only one tree in my yard, not two."
      },
      {
        "speaker": "M",
        "text": "Let me pull up the work order... You're right, our team noted just one. I'll correct the charge and refund the difference."
      },
      {
        "speaker": "W",
        "text": "Thank you. Could you also send me an updated invoice for my records?"
      },
      {
        "speaker": "M",
        "text": "Of course. I'll e-mail the corrected version today, and the refund should post to your account in about a week."
      }
    ],
    "translation": "【図表】請求書#5527(グリーンウェイ造園)/芝刈り40ドル/生垣の刈り込み55ドル/木の剪定(90ドル×2)180ドル/ごみ撤去35ドル/合計310ドル\n女性:もしもし、ダイアン・パークです。請求書5527を受け取ったのですが、間違いがあるようです。うちの庭で作業員が剪定したのは2本ではなく1本だけです。\n男性:作業指示書を確認します……おっしゃる通りです、うちのチームも1本と記録しています。料金を修正して、差額を返金します。\n女性:ありがとうございます。記録用に、修正した請求書も送っていただけますか?\n男性:もちろんです。本日、修正版をメールでお送りします。返金は1週間ほどでお客様の口座に反映されます。",
    "questions": [
      {
        "q": "Look at the graphic. How much will the woman be refunded?",
        "choices": [
          "$180",
          "$40",
          "$90",
          "$55"
        ],
        "answer": 2,
        "explanation": "図表問題。音声の『木の剪定は2本ではなく1本』と図表(90ドル×2=180ドル)を突き合わせる。1本分の90ドルが過剰請求なので返金額は90ドル。180ドルは2本分の合計でひっかけ。"
      },
      {
        "q": "What does the woman ask the man to send?",
        "choices": [
          "A service contract",
          "A payment reminder",
          "An updated invoice",
          "A work schedule"
        ],
        "answer": 2,
        "explanation": "女性の send me an updated invoice for my records が根拠。修正版の請求書を求めている。"
      },
      {
        "q": "According to the man, when will the refund post?",
        "choices": [
          "In about a week",
          "Next month",
          "Later today",
          "In three days"
        ],
        "answer": 0,
        "explanation": "男性の the refund should post to your account in about a week が根拠。『本日』は修正請求書をメールする時期であり、返金の反映時期とは別なのでひっかけ。"
      }
    ]
  },
  {
    "id": "s5p3-13",
    "title": "会話 13",
    "audio": [
      {
        "speaker": "M",
        "text": "Hi, I have a couple of old computers and a broken microwave to get rid of. Does the city collect electronics?"
      },
      {
        "speaker": "W",
        "text": "We hold an electronics recycling day on the last Saturday of each month at Hollis Park."
      },
      {
        "speaker": "M",
        "text": "That's this weekend, then. Is there a fee?"
      },
      {
        "speaker": "W",
        "text": "It's free for households, up to five items. Large appliances like refrigerators have a small charge, though."
      },
      {
        "speaker": "M",
        "text": "Good to know. A microwave counts as a small item, right?"
      },
      {
        "speaker": "W",
        "text": "Yes, that's fine. Just drop everything off between nine and one."
      }
    ],
    "translation": "男性:こんにちは、古いパソコン数台と壊れた電子レンジを処分したいんですが。市は電子機器を回収していますか?\n女性:毎月最終土曜日に、ホリス公園で電子機器のリサイクルの日を設けています。\n男性:では今週末ですね。料金はかかりますか?\n女性:一般家庭は5点まで無料です。ただ、冷蔵庫のような大型家電は少額の料金がかかります。\n男性:分かりました。電子レンジは小型の品扱いですよね?\n女性:はい、大丈夫です。9時から1時の間にお持ちください。",
    "questions": [
      {
        "q": "Why is the man calling?",
        "choices": [
          "To buy a new microwave",
          "To report a broken appliance",
          "To ask about recycling old electronics",
          "To schedule a home pickup"
        ],
        "answer": 2,
        "explanation": "男性の Does the city collect electronics? が根拠。古い電子機器の処分方法を尋ねている。故障の報告や購入ではない。"
      },
      {
        "q": "What does the woman say is free?",
        "choices": [
          "Recycling large refrigerators",
          "Dropping off up to five household items",
          "Repairing small appliances",
          "A home collection service"
        ],
        "answer": 1,
        "explanation": "女性の It's free for households, up to five items が根拠。大型家電(冷蔵庫)は少額の料金がかかるので無料ではなくひっかけ。"
      },
      {
        "q": "What time can the man drop off his items?",
        "choices": [
          "After five",
          "Before nine",
          "Between nine and one",
          "Only on weekday mornings"
        ],
        "answer": 2,
        "explanation": "女性の drop everything off between nine and one が根拠。回収は最終土曜の9時〜1時。"
      }
    ]
  }
];
