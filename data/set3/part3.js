// セット3 part3(監査反映・正解位置均等化済み)
window.TOEIC_DATA_3 = window.TOEIC_DATA_3 || {};
window.TOEIC_DATA_3.part3 = [
  {
    "id": "s3p3-01",
    "title": "会話 1",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, I'm here to pick up a prescription for Diane Foster."
      },
      {
        "speaker": "M",
        "text": "Let me check... I'm sorry, but it isn't quite ready yet. The pharmacist is still filling it, so it will be about fifteen more minutes."
      },
      {
        "speaker": "W",
        "text": "Oh, I have another errand nearby. Can I come back around four?"
      },
      {
        "speaker": "M",
        "text": "That's fine. And just so you know, this medication should be taken with food, so I'll include an instruction sheet."
      }
    ],
    "translation": "女性:こんにちは、ダイアン・フォスターの処方薬を受け取りに来ました。\n男性:確認します……申し訳ありませんが、まだ準備ができていません。薬剤師が調剤中で、あと15分ほどかかります。\n女性:あら、近くで別の用事があるんです。4時ごろにまた来てもいいですか?\n男性:大丈夫です。それと、念のためですが、このお薬は食事と一緒に飲んでください。説明書もお付けしますね。",
    "questions": [
      {
        "q": "What is the woman trying to do?",
        "choices": [
          "Schedule an appointment",
          "Pick up a prescription",
          "Return a product",
          "Apply for a card"
        ],
        "answer": 1,
        "explanation": "冒頭の I'm here to pick up a prescription(処方薬を受け取りに来た)が根拠。あえて『どこか(場所)』は問わず、目的を問う設問にしている。"
      },
      {
        "q": "Why can't the woman receive the item right away?",
        "choices": [
          "Payment was declined.",
          "It is out of stock.",
          "It was sent to another store.",
          "It is still being prepared."
        ],
        "answer": 3,
        "explanation": "男性の it isn't quite ready ... still filling it(まだ調剤中)を It is still being prepared. と言い換えている。in stock(在庫)や payment(支払い)は会話に出てこない連想ひっかけ。"
      },
      {
        "q": "What does the man say about the medication?",
        "choices": [
          "It should be refrigerated.",
          "It may cause drowsiness.",
          "It cannot be refilled.",
          "It should be taken with food."
        ],
        "answer": 3,
        "explanation": "男性の this medication should be taken with food(食事と一緒に飲む)がそのまま根拠。冷蔵・眠気などはもっともらしい連想ひっかけ。"
      }
    ]
  },
  {
    "id": "s3p3-02",
    "title": "会話 2",
    "audio": [
      {
        "speaker": "W",
        "text": "Hello, I have a reservation for a compact car under the name Alvarez, picking up this morning."
      },
      {
        "speaker": "M",
        "text": "Thank you, Ms. Alvarez. I see your booking. Unfortunately, we've run out of compact cars, so I'd like to offer you a midsize SUV at no extra charge."
      },
      {
        "speaker": "W",
        "text": "That works for me. Does it have a navigation system? I'm not familiar with the area."
      },
      {
        "speaker": "M",
        "text": "It does, and I'll set your hotel as the destination before you leave. Just be sure to return the vehicle with a full tank."
      }
    ],
    "translation": "女性:こんにちは、アルバレスの名前でコンパクトカーを予約していて、今朝受け取る予定です。\n男性:ありがとうございます、アルバレス様。ご予約を確認しました。あいにくコンパクトカーが出払っておりまして、追加料金なしで中型SUVをご用意させていただければと思います。\n女性:それで大丈夫です。ナビは付いていますか? この辺りに不慣れなもので。\n男性:付いております。出発前にホテルを目的地に設定しておきます。お車は燃料を満タンにしてご返却ください。",
    "questions": [
      {
        "q": "Why does the man offer an upgrade?",
        "choices": [
          "The reserved car is unavailable.",
          "The customer is a member.",
          "It is a holiday promotion.",
          "The woman requested a larger car."
        ],
        "answer": 0,
        "explanation": "男性の we've run out of compact cars(コンパクトカーが在庫切れ)が根拠。女性が大きい車を頼んだわけではないので(D)はひっかけ。"
      },
      {
        "q": "What does the woman ask about?",
        "choices": [
          "The rental price",
          "Insurance coverage",
          "A navigation system",
          "Fuel type"
        ],
        "answer": 2,
        "explanation": "女性の Does it have a navigation system? が根拠。保険・料金・燃料の種類は連想ひっかけ。"
      },
      {
        "q": "What is the woman asked to do when returning the car?",
        "choices": [
          "Pay a deposit",
          "Clean the interior",
          "Return it early",
          "Fill the fuel tank"
        ],
        "answer": 3,
        "explanation": "男性の return the vehicle with a full tank(満タンで返す)が根拠。full tank を Fill the fuel tank と言い換えている。"
      }
    ]
  },
  {
    "id": "s3p3-03",
    "title": "会話 3",
    "audio": [
      {
        "speaker": "W",
        "text": "Excuse me, I'm looking for a book called Coastal Birds of the Pacific, but it isn't on the shelf."
      },
      {
        "speaker": "M",
        "text": "Let me look it up... It's currently checked out and due back next Wednesday. Would you like me to place a hold on it for you?"
      },
      {
        "speaker": "W",
        "text": "Yes, please. Can you notify me by e-mail when it becomes available?"
      },
      {
        "speaker": "M",
        "text": "Of course. And if you need it sooner, we can request a copy from our branch across town through interlibrary loan."
      }
    ],
    "translation": "女性:すみません、『Coastal Birds of the Pacific』という本を探しているのですが、棚にないんです。\n男性:お調べします……ただ今貸出中で、返却予定は来週水曜です。予約をお取りしましょうか?\n女性:お願いします。手に入ったらメールで知らせてもらえますか?\n男性:もちろんです。それと、もっと早く必要でしたら、相互貸借で街の反対側の分館から取り寄せることもできますよ。",
    "questions": [
      {
        "q": "What is the woman looking for?",
        "choices": [
          "A library card",
          "A study room",
          "A magazine subscription",
          "A specific book"
        ],
        "answer": 3,
        "explanation": "女性の I'm looking for a book called ...(特定の本を探している)が根拠。study room や library card は場面からの連想ひっかけ。"
      },
      {
        "q": "What does the man offer to do?",
        "choices": [
          "Extend a due date",
          "Waive a late fee",
          "Recommend another title",
          "Place a hold on the item"
        ],
        "answer": 3,
        "explanation": "男性の Would you like me to place a hold on it? が申し出。due date(返却期限)は本が返る時期の話でひっかけ。"
      },
      {
        "q": "How does the woman want to be notified?",
        "choices": [
          "By e-mail",
          "By text message",
          "By phone",
          "By mail"
        ],
        "answer": 0,
        "explanation": "女性の notify me by e-mail(メールで知らせて)が根拠。phone / text / mail は連絡手段の紛らわしい選択肢。"
      }
    ]
  },
  {
    "id": "s3p3-04",
    "title": "会話 4",
    "audio": [
      {
        "speaker": "M",
        "text": "IT support, this is Kevin. How can I help?"
      },
      {
        "speaker": "W",
        "text": "Hi, I can't log in to the expense reporting system. It keeps saying my password has expired, even though I just reset it yesterday."
      },
      {
        "speaker": "M",
        "text": "I see. Sometimes the system takes a few hours to sync a new password. Let me reset it manually on my end right now."
      },
      {
        "speaker": "W",
        "text": "Thank you. I have a reimbursement claim due today, so I really need it working."
      },
      {
        "speaker": "M",
        "text": "Understood. Try logging in again in five minutes, and call me back if it still fails."
      }
    ],
    "translation": "男性:ITサポートのケヴィンです。どうされましたか?\n女性:もしもし、経費精算システムにログインできないんです。昨日パスワードをリセットしたばかりなのに、期限切れだと出続けていて。\n男性:なるほど。新しいパスワードの反映に数時間かかることがあります。今すぐこちらで手動でリセットしますね。\n女性:ありがとう。今日締め切りの精算申請があるので、本当に動いてほしくて。\n男性:承知しました。5分後にもう一度ログインを試してみて、それでもだめならまた電話してください。",
    "questions": [
      {
        "q": "Why is the woman calling?",
        "choices": [
          "To request new software",
          "To report a login problem",
          "To schedule a training",
          "To order a laptop"
        ],
        "answer": 1,
        "explanation": "女性の I can't log in ... my password has expired(ログインできない)が根拠。login problem への言い換え。"
      },
      {
        "q": "What does the man do for the woman?",
        "choices": [
          "Replace her computer",
          "Transfer her call",
          "Reset her password",
          "Extend a deadline"
        ],
        "answer": 2,
        "explanation": "男性の Let me reset it manually(手動でリセットする)が根拠。締め切り延長やPC交換はしていないのでひっかけ。"
      },
      {
        "q": "Why does the woman need it fixed today?",
        "choices": [
          "A client is waiting.",
          "She is leaving on a trip.",
          "Her manager requested a report.",
          "She has a claim due today."
        ],
        "answer": 3,
        "explanation": "女性の I have a reimbursement claim due today(今日締め切りの精算申請がある)が根拠。『due today(今日締め切り)』という時間表現がキー。"
      }
    ]
  },
  {
    "id": "s3p3-05",
    "title": "会話 5(3人の会話:女性2人+男性1人)",
    "audio": [
      {
        "speaker": "W",
        "text": "Ben, Grace — let's finalize the plan for the company charity run. Registration opens Monday. Ben, are you still managing the online sign-up form?"
      },
      {
        "speaker": "M",
        "text": "Yes, Priya. The form is ready. I just need someone to write the description of the route and the start time."
      },
      {
        "speaker": "W2",
        "text": "I can do that, Ben. I ran the same course last year, so I know it well."
      },
      {
        "speaker": "W",
        "text": "Great, Grace. Then I'll take care of ordering the T-shirts for the participants. What size range should I order?"
      },
      {
        "speaker": "M",
        "text": "Let's go with small through extra-large. And could you order about ten extra, just in case?"
      },
      {
        "speaker": "W",
        "text": "Good idea. I'll place that order this afternoon."
      }
    ],
    "translation": "プリヤ(女性1):ベン、グレース——会社のチャリティーランの計画を固めましょう。申込みは月曜開始よ。ベン、オンラインの申込フォームはまだあなたが担当してる?\nベン(男性):うん、プリヤ。フォームは準備できてる。あとは誰かにコースの説明とスタート時刻を書いてもらう必要があるんだ。\nグレース(女性2):それは私がやれるわ、ベン。去年同じコースを走ったから、よく知ってるの。\nプリヤ:助かるわ、グレース。じゃあ私は参加者用のTシャツの手配を引き受ける。サイズはどの範囲で頼めばいい?\nベン:S から XL までにしよう。念のため10枚ほど多めに頼んでもらえる?\nプリヤ:いいわね。今日の午後に注文しておくわ。",
    "questions": [
      {
        "q": "What are the speakers organizing?",
        "choices": [
          "A charity run",
          "A staff retreat",
          "A product launch",
          "An award ceremony"
        ],
        "answer": 0,
        "explanation": "冒頭の the company charity run が根拠。何を企画しているかを問う設問。3人の会話では名前と声で話者を追う。"
      },
      {
        "q": "What does Grace offer to do?",
        "choices": [
          "Order the T-shirts",
          "Write the route description",
          "Design the sign-up form",
          "Photograph the event"
        ],
        "answer": 1,
        "explanation": "2人目の女性グレースの I can do that ... write the description of the route(コース説明を書く)が根拠。フォームはベン、Tシャツはプリヤの担当なので発言者の取り違えを狙ったひっかけ。"
      },
      {
        "q": "What will Priya do this afternoon?",
        "choices": [
          "Update the website",
          "Order the T-shirts",
          "Confirm the route",
          "Contact sponsors"
        ],
        "answer": 1,
        "explanation": "プリヤの I'll place that order this afternoon(=Tシャツの注文)が根拠。『this afternoon(今日の午後)』の時間表現と発言者の特定が同時に問われる。"
      }
    ]
  },
  {
    "id": "s3p3-06",
    "title": "会話 6",
    "audio": [
      {
        "speaker": "M",
        "text": "Good afternoon, Bella Cucina. This is Antonio."
      },
      {
        "speaker": "W",
        "text": "Hi, I have a dinner reservation for four people this Saturday at seven, but two more colleagues can now join us. Could you change it to six?"
      },
      {
        "speaker": "M",
        "text": "Let me check our availability... Seven o'clock is fully booked for a party of six, but I could seat you at seven forty-five."
      },
      {
        "speaker": "W",
        "text": "That's fine. Could we also have a table near the window, if possible?"
      },
      {
        "speaker": "M",
        "text": "I'll note your request, though I can't guarantee it. We'll see you Saturday at seven forty-five."
      }
    ],
    "translation": "男性:こんにちは、ベラ・クッチーナです。アントニオが承ります。\n女性:こんにちは、今週土曜7時に4名でディナーを予約しているのですが、同僚があと2人参加できることになって。6名に変更できますか?\n男性:空き状況を確認します……7時は6名様のお席が満席なのですが、7時45分でしたらご案内できます。\n女性:大丈夫です。あと、可能なら窓際の席にできますか?\n男性:ご要望として承りますが、確約はできかねます。では土曜の7時45分にお待ちしております。",
    "questions": [
      {
        "q": "Why is the woman calling?",
        "choices": [
          "To cancel a reservation",
          "To change the size of a reservation",
          "To ask about the menu",
          "To order takeout"
        ],
        "answer": 1,
        "explanation": "女性の change it to six(4名から6名へ変更)が根拠。キャンセルではなく人数の変更なので(A)はひっかけ。"
      },
      {
        "q": "What time will the group now arrive?",
        "choices": [
          "At 8:00",
          "At 7:00",
          "At 7:15",
          "At 7:45"
        ],
        "answer": 3,
        "explanation": "男性の I could seat you at seven forty-five(7時45分なら案内できる)が根拠。7時は当初の予約時刻でひっかけ。"
      },
      {
        "q": "What does the woman request?",
        "choices": [
          "A window table",
          "A vegetarian menu",
          "A high chair",
          "A private room"
        ],
        "answer": 0,
        "explanation": "女性の a table near the window(窓際の席)が根拠。near the window を window table と言い換えている。"
      }
    ]
  },
  {
    "id": "s3p3-07",
    "graphicKind": "schedule",
    "title": "会話 7(図表問題)",
    "graphic": "Departures — Westbrook Station\n1. 8:10  Express to Millford (no stops)\n2. 8:25  Local to Millford\n3. 8:40  Express to Harborside\n4. 8:55  Local to Harborside",
    "audio": [
      {
        "speaker": "W",
        "text": "There you are. Our meeting in Millford starts at nine thirty. Which train should we take?"
      },
      {
        "speaker": "M",
        "text": "The eight-ten express would get us there fastest, but I still need to grab a coffee and print the handouts."
      },
      {
        "speaker": "W",
        "text": "Then let's take the next one to Millford. It's a local, so it stops a few times, but we'll still arrive with time to spare."
      },
      {
        "speaker": "M",
        "text": "Sounds good. I'll meet you on the platform in ten minutes."
      }
    ],
    "translation": "【図表】発車案内——ウェストブルック駅/8:10 ミルフォード行き特急(ノンストップ)/8:25 ミルフォード行き各停/8:40 ハーバーサイド行き特急/8:55 ハーバーサイド行き各停\n女性:いたいた。ミルフォードでの会議は9時半開始よ。どの電車に乗る?\n男性:8時10分の特急が一番早く着くけど、まだコーヒーを買って配布資料を印刷しないといけないんだ。\n女性:じゃあミルフォード行きの次の電車にしましょう。各停だから何度か止まるけど、それでも余裕を持って着けるわ。\n男性:いいね。10分後にホームで合流しよう。",
    "questions": [
      {
        "q": "Look at the graphic. Which train will the speakers most likely take?",
        "choices": [
          "The 8:25 train",
          "The 8:10 train",
          "The 8:40 train",
          "The 8:55 train"
        ],
        "answer": 0,
        "explanation": "図表問題。行き先はミルフォード(=8:10か8:25)。男性がコーヒーと印刷で時間が要るため、女性が『ミルフォード行きの次』=8:25の各停を選んでいる。8:10特急は速いが間に合わないひっかけ。"
      },
      {
        "q": "What does the man still need to do before leaving?",
        "choices": [
          "Buy tickets",
          "Call the office",
          "Print some handouts",
          "Find his colleague"
        ],
        "answer": 2,
        "explanation": "男性の print the handouts(配布資料を印刷する)が根拠。コーヒーを買うことも述べているが、選択肢にあるのは印刷。"
      },
      {
        "q": "Where will the speakers meet?",
        "choices": [
          "At the ticket counter",
          "At the exit",
          "On the platform",
          "In the café"
        ],
        "answer": 2,
        "explanation": "男性の I'll meet you on the platform(ホームで合流する)が根拠。café はコーヒーからの連想ひっかけ。"
      }
    ]
  },
  {
    "id": "s3p3-08",
    "title": "会話 8(意図問題)",
    "audio": [
      {
        "speaker": "W",
        "text": "Sam, I'm scheduled to run the front desk this Saturday, but my daughter's recital got moved to that day. Is there any way you could cover for me?"
      },
      {
        "speaker": "M",
        "text": "Saturday... I was planning to catch up on the quarterly report."
      },
      {
        "speaker": "W",
        "text": "I completely understand if you can't. I can ask Elena instead."
      },
      {
        "speaker": "M",
        "text": "No, no. The report can wait until Sunday. I'll cover the desk for you."
      },
      {
        "speaker": "W",
        "text": "You're a lifesaver. I'll take your next weekend shift in return."
      }
    ],
    "translation": "女性:サム、今週土曜は私が受付を担当する予定なんだけど、娘の発表会がその日に変更になってしまって。代わってもらえたりしないかな?\n男性:土曜か……四半期報告書に取りかかろうと思っていたんだよ。\n女性:できないなら全然大丈夫よ。エレナに頼んでもいいし。\n男性:いや、いいよ。報告書は日曜に回せる。受付、代わってあげる。\n女性:本当に助かる。お礼にあなたの次の週末シフトを代わるわ。",
    "questions": [
      {
        "q": "What does the woman ask the man to do?",
        "choices": [
          "Finish a report",
          "Cover her shift",
          "Attend a recital",
          "Swap desks"
        ],
        "answer": 1,
        "explanation": "女性の could you cover for me?(代わってもらえない?)が根拠。cover her shift への言い換え。"
      },
      {
        "q": "What does the man imply when he says, \"I was planning to catch up on the quarterly report\"?",
        "choices": [
          "He wants the woman's help.",
          "He thinks the report is late.",
          "He had other plans for that day.",
          "He has already finished the report."
        ],
        "answer": 2,
        "explanation": "意図問題。頼まれた土曜に『報告書をやるつもりだった』=別の予定があり即答をためらっている含み。直後に日曜に回すと言って引き受けている。"
      },
      {
        "q": "What does the woman offer to do in return?",
        "choices": [
          "Take his next weekend shift",
          "Recommend him for a promotion",
          "Finish the report",
          "Buy him lunch"
        ],
        "answer": 0,
        "explanation": "女性の I'll take your next weekend shift in return(お礼に次の週末シフトを代わる)が根拠。報告書を仕上げるとは言っていないのでひっかけ。"
      }
    ]
  },
  {
    "id": "s3p3-09",
    "title": "会話 9",
    "audio": [
      {
        "speaker": "M",
        "text": "Hi, I'm interested in joining. What membership options do you offer?"
      },
      {
        "speaker": "W",
        "text": "Welcome! We have a monthly plan and an annual plan. The annual one works out cheaper if you come regularly, and it includes two free personal training sessions."
      },
      {
        "speaker": "M",
        "text": "That sounds good. Can I try the facilities before I decide?"
      },
      {
        "speaker": "W",
        "text": "Absolutely. I can give you a one-day guest pass right now, along with a quick tour of the weight room and the pool."
      },
      {
        "speaker": "M",
        "text": "Perfect. Let's start with the tour, then."
      }
    ],
    "translation": "男性:こんにちは、入会を考えているんです。会員プランにはどんな種類がありますか?\n女性:ようこそ! 月額プランと年間プランがあります。定期的に通われるなら年間プランのほうがお得で、無料のパーソナルトレーニングが2回付いています。\n男性:いいですね。決める前に施設を試せますか?\n女性:もちろんです。今すぐ1日ゲストパスをお渡しできますし、ウェイトルームとプールの簡単なご案内もできます。\n男性:完璧です。じゃあまず案内をお願いします。",
    "questions": [
      {
        "q": "What does the man want to do?",
        "choices": [
          "Cancel a membership",
          "File a complaint",
          "Book a class",
          "Join the facility"
        ],
        "answer": 3,
        "explanation": "冒頭の I'm interested in joining(入会に興味がある)が根拠。解約(cancel)とは逆の意図なのでひっかけ。"
      },
      {
        "q": "What is included with the annual plan?",
        "choices": [
          "Personal training sessions",
          "A locker rental",
          "Free parking",
          "Nutrition meals"
        ],
        "answer": 0,
        "explanation": "女性の it includes two free personal training sessions が根拠。駐車場・ロッカーなどはもっともらしい連想ひっかけ。"
      },
      {
        "q": "What will the man do next?",
        "choices": [
          "Take a tour",
          "Sign a contract",
          "Pay a fee",
          "Fill out a form"
        ],
        "answer": 0,
        "explanation": "男性の Let's start with the tour(まず案内から)が根拠。契約や支払いはまだ先なのでひっかけ。"
      }
    ]
  },
  {
    "id": "s3p3-10",
    "title": "会話 10(3人の会話:男性2人+女性1人)",
    "audio": [
      {
        "speaker": "M",
        "text": "Nora, Victor — the trade show opens tomorrow at ten. Let's make sure the booth is ready. Nora, how's the banner coming?"
      },
      {
        "speaker": "W",
        "text": "The main banner is hung, Leo, but the printed brochures haven't arrived yet. The delivery company says they'll be here by eight tomorrow morning."
      },
      {
        "speaker": "M2",
        "text": "That's cutting it close. I'll bring the digital versions on tablets as a backup, in case they're delayed."
      },
      {
        "speaker": "M",
        "text": "Smart thinking, Victor. And could you also test the demo laptop tonight? We can't have it freezing during a presentation."
      },
      {
        "speaker": "M2",
        "text": "Will do. I'll set it up and run through the slides after dinner."
      },
      {
        "speaker": "W",
        "text": "And I'll get to the venue early to arrange the giveaways on the table."
      }
    ],
    "translation": "レオ(男性1):ノラ、ヴィクター——展示会は明日10時開始だ。ブースの準備を確認しよう。ノラ、バナーの具合はどう?\nノラ(女性):メインのバナーは掛け終わったわ、レオ。でも印刷したパンフレットがまだ届いていないの。配送業者は明日の朝8時までには来ると言ってる。\nヴィクター(男性2):ぎりぎりだね。遅れた場合に備えて、僕がタブレットにデジタル版を入れてバックアップとして持っていくよ。\nレオ:いい考えだ、ヴィクター。それと、今夜デモ用のノートPCも確認してくれる? プレゼン中にフリーズしたら困るからね。\nヴィクター:了解。夕食後にセットアップしてスライドを一通り通してみるよ。\nノラ:じゃあ私は会場に早めに行って、テーブルに配布グッズを並べておくわ。",
    "questions": [
      {
        "q": "What are the speakers preparing for?",
        "choices": [
          "A staff meeting",
          "A trade show",
          "A store opening",
          "A press conference"
        ],
        "answer": 1,
        "explanation": "冒頭の the trade show opens tomorrow(展示会が明日開幕)が根拠。何の準備かを問う設問。"
      },
      {
        "q": "What does Victor offer to bring as a backup?",
        "choices": [
          "Printed brochures",
          "Digital versions on tablets",
          "Extra banners",
          "Business cards"
        ],
        "answer": 1,
        "explanation": "2人目の男性ヴィクターの I'll bring the digital versions on tablets as a backup が根拠。printed brochures は届いていない当の品なのでひっかけ。"
      },
      {
        "q": "What will Nora do early tomorrow?",
        "choices": [
          "Test the laptop",
          "Hang the banner",
          "Arrange the giveaways",
          "Pick up the brochures"
        ],
        "answer": 2,
        "explanation": "ノラの I'll get to the venue early to arrange the giveaways が根拠。PCの確認はヴィクター、バナー掛けは済んでいるので発言者・時制の取り違えを狙ったひっかけ。"
      }
    ]
  },
  {
    "id": "s3p3-11",
    "title": "会話 11",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, I'd like to have this suit jacket taken in. It's a little loose around the waist."
      },
      {
        "speaker": "M",
        "text": "Sure, let me take a look. Yes, I can bring in the sides for you. When do you need it by?"
      },
      {
        "speaker": "W",
        "text": "I have a wedding to attend a week from Saturday. Is that enough time?"
      },
      {
        "speaker": "M",
        "text": "Plenty. It'll be ready this Thursday. The alteration will be forty dollars, payable when you pick it up."
      },
      {
        "speaker": "W",
        "text": "Great. I'll come by Thursday afternoon, then."
      }
    ],
    "translation": "女性:こんにちは、このスーツの上着を詰めてもらいたいんです。ウエスト周りが少し緩くて。\n男性:承知しました、拝見しますね。ええ、脇を詰められますよ。いつまでに必要ですか?\n女性:再来週の土曜に結婚式に出席するんです。それで間に合いますか?\n男性:十分です。今週木曜にはできあがります。お直し代は40ドルで、お引き取りの際にお支払いください。\n女性:よかった。じゃあ木曜の午後に取りに来ますね。",
    "questions": [
      {
        "q": "What does the woman want done to the jacket?",
        "choices": [
          "Taken in at the waist",
          "The lining repaired",
          "A button replaced",
          "Shortened at the sleeves"
        ],
        "answer": 0,
        "explanation": "女性の taken in ... loose around the waist(ウエストを詰める)が根拠。袖・ボタン・裏地は別の直しの連想ひっかけ。"
      },
      {
        "q": "Why does the woman need the jacket?",
        "choices": [
          "For a business trip",
          "For a job interview",
          "For a photo shoot",
          "For a wedding"
        ],
        "answer": 3,
        "explanation": "女性の I have a wedding to attend(結婚式に出席する)が根拠。"
      },
      {
        "q": "When can the woman pick up the jacket?",
        "choices": [
          "This Wednesday",
          "This Thursday",
          "Next Monday",
          "Next Saturday"
        ],
        "answer": 1,
        "explanation": "男性の It'll be ready this Thursday(木曜にできる)が根拠。土曜は結婚式の日でありひっかけ。"
      }
    ]
  },
  {
    "id": "s3p3-12",
    "graphicKind": "agenda",
    "title": "会話 12(図表問題)",
    "graphic": "Marketing Summit — Afternoon Agenda\n1. 1:00  Brand Storytelling\n2. 2:00  Social Media Trends\n3. 3:00  Email Campaigns\n4. 4:00  Data Analytics",
    "audio": [
      {
        "speaker": "M",
        "text": "The afternoon has four sessions, but we can only cover so much between the two of us. Which one should each of us attend?"
      },
      {
        "speaker": "W",
        "text": "You should definitely take the one on measuring results with numbers — that's your specialty, and we need those insights for the report."
      },
      {
        "speaker": "M",
        "text": "Good point. I'll take that one. What about you?"
      },
      {
        "speaker": "W",
        "text": "I'll go to the two o'clock session on social media. Let's compare notes over coffee afterward."
      }
    ],
    "translation": "【図表】マーケティング・サミット 午後のアジェンダ/1:00 ブランド・ストーリーテリング/2:00 SNSトレンド/3:00 メールキャンペーン/4:00 データ分析\n男性:午後は4つのセッションがあるけど、2人だとそんなに多くは回れないね。それぞれどれに出る?\n女性:あなたは絶対に『数字で成果を測る』やつに出るべきよ——それはあなたの専門だし、報告書にその知見が要るから。\n男性:確かに。じゃあ僕はそれにするよ。君は?\n女性:私は2時のSNSのセッションに行くわ。後でコーヒーでも飲みながら情報交換しましょう。",
    "questions": [
      {
        "q": "Look at the graphic. Which session will the man attend?",
        "choices": [
          "Brand Storytelling",
          "Social Media Trends",
          "Data Analytics",
          "Email Campaigns"
        ],
        "answer": 2,
        "explanation": "図表問題。女性の『数字で成果を測る(measuring results with numbers)』は図表の Data Analytics。男性も『それにする』と答えている。"
      },
      {
        "q": "What do the speakers plan to do after the sessions?",
        "choices": [
          "Write a report together",
          "Compare notes over coffee",
          "Leave early",
          "Attend a dinner"
        ],
        "answer": 1,
        "explanation": "女性の compare notes over coffee afterward(後でコーヒーを飲みながら情報交換)が根拠。report は理由として触れられるだけでひっかけ。"
      },
      {
        "q": "Why does the woman suggest that session for the man?",
        "choices": [
          "It is the shortest.",
          "It is required.",
          "It matches his expertise.",
          "It has free materials."
        ],
        "answer": 2,
        "explanation": "女性の that's your specialty(あなたの専門)が根拠。specialty を expertise と言い換えている。"
      }
    ]
  },
  {
    "id": "s3p3-13",
    "title": "会話 13",
    "audio": [
      {
        "speaker": "W",
        "text": "Hello, Brightframe Studio. This is Mia."
      },
      {
        "speaker": "M",
        "text": "Hi, I'd like to book a session for professional headshots for our new employees. There are about twelve of them."
      },
      {
        "speaker": "W",
        "text": "We can do that. For groups, we usually come to your office with portable equipment. Would that be more convenient?"
      },
      {
        "speaker": "M",
        "text": "Yes, that would save everyone time. How long would twelve people take?"
      },
      {
        "speaker": "W",
        "text": "Roughly two hours. I'd suggest a weekday morning. I can send you a quote and some sample photos by e-mail today."
      }
    ],
    "translation": "女性:こんにちは、ブライトフレーム・スタジオのミアです。\n男性:こんにちは、新入社員の証明写真の撮影を予約したいのですが。12人ほどいます。\n女性:承れます。団体の場合、通常は携帯機材を持って御社にお伺いします。そのほうがご都合よろしいですか?\n男性:ええ、そのほうが全員の時間を節約できます。12人だとどのくらいかかりますか?\n女性:およそ2時間です。平日の午前中をおすすめします。本日中に見積もりとサンプル写真をメールでお送りできますよ。",
    "questions": [
      {
        "q": "Why is the man calling?",
        "choices": [
          "To order prints",
          "To cancel an appointment",
          "To book a photo session",
          "To apply for a job"
        ],
        "answer": 2,
        "explanation": "男性の I'd like to book a session for professional headshots(証明写真の撮影を予約したい)が根拠。for our new employees から求人(apply for a job)を連想させるひっかけに注意。"
      },
      {
        "q": "What does the woman suggest?",
        "choices": [
          "Hiring more staff",
          "Rescheduling for the weekend",
          "Coming to his office",
          "Renting a studio"
        ],
        "answer": 2,
        "explanation": "女性の we usually come to your office with portable equipment(御社に伺う)が根拠。平日の午前を勧めており週末ではないので(C)はひっかけ。"
      },
      {
        "q": "What will the woman send today?",
        "choices": [
          "A quote and sample photos",
          "An invoice",
          "A schedule",
          "A contract"
        ],
        "answer": 0,
        "explanation": "女性の I can send you a quote and some sample photos ... today が根拠。invoice(請求書)は支払い段階の連想ひっかけ。"
      }
    ]
  }
];
