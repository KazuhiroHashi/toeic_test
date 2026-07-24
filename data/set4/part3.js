// セット4 part3(重複差し替え・正解位置均等化済み)
window.TOEIC_DATA_4 = window.TOEIC_DATA_4 || {};
window.TOEIC_DATA_4.part3 = [
  {
    "id": "s4p3-01",
    "title": "会話 1",
    "audio": [
      {
        "speaker": "M",
        "text": "Hello, this is Greg Naylor from Aldervale Machinery. I'm calling about our order of hydraulic valves, part number VH-22. Can you confirm the shipping date?"
      },
      {
        "speaker": "W",
        "text": "Let me check, Mr. Naylor. I'm afraid there's a delay. Our steel supplier fell behind schedule, so the valves won't ship until the fifteenth."
      },
      {
        "speaker": "M",
        "text": "That's a problem. Our assembly line is set to restart on the twelfth. Is there any way to get part of the order sooner?"
      },
      {
        "speaker": "W",
        "text": "We could send two hundred units by the tenth and the rest the following week. Would a partial shipment help?"
      },
      {
        "speaker": "M",
        "text": "Yes, that would keep the line running. Please arrange the partial shipment and e-mail me a revised delivery schedule."
      }
    ],
    "translation": "男性:もしもし、アルダーヴェイル機械のグレッグ・ネイラーです。ハイドロリックバルブ、型番VH-22の注文の件でお電話しました。出荷日を確認できますか?\n女性:お調べします、ネイラー様。あいにく遅れが出ております。当社の鋼材サプライヤーが予定より遅れておりまして、バルブの出荷は15日以降になります。\n男性:それは困りますね。うちの組立ラインは12日に稼働を再開する予定なんです。注文の一部だけでも早く手に入れる方法はありませんか?\n女性:200個を10日までにお送りし、残りを翌週にお届けすることは可能です。分割出荷でよろしいでしょうか?\n男性:はい、それならラインを止めずに済みます。分割出荷を手配して、修正した納品スケジュールをメールで送ってください。",
    "questions": [
      {
        "q": "Why is the man calling?",
        "choices": [
          "To request a refund",
          "To confirm a shipping date",
          "To place a new order",
          "To report a defective valve"
        ],
        "answer": 1,
        "explanation": "冒頭で男性は Can you confirm the shipping date?(出荷日を確認できますか)と述べており、出荷日の確認が目的。『新規注文』や『不良品の報告』は本文にない連想のひっかけ。"
      },
      {
        "q": "What caused the delay?",
        "choices": [
          "A machine broke down.",
          "There was a labor shortage.",
          "A supplier fell behind schedule.",
          "A customs inspection was required."
        ],
        "answer": 2,
        "explanation": "女性の Our steel supplier fell behind schedule(鋼材サプライヤーが予定より遅れた)が原因。『機械の故障』『税関検査』は製造業から連想させるひっかけで、本文の根拠はない。"
      },
      {
        "q": "What does the man ask the woman to send?",
        "choices": [
          "A signed contract",
          "A product sample",
          "A price quote",
          "A revised delivery schedule"
        ],
        "answer": 3,
        "explanation": "男性の最後の e-mail me a revised delivery schedule が根拠。revised(修正された)がキー。見積もりや契約書は登場しない。"
      }
    ]
  },
  {
    "id": "s4p3-02",
    "title": "会話 2",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, this is Dana at Fenmore Distribution. A pallet from your last delivery arrived with several crushed boxes. About a dozen units are damaged."
      },
      {
        "speaker": "M",
        "text": "I'm sorry to hear that. Do you have the tracking number so I can start a damage claim?"
      },
      {
        "speaker": "W",
        "text": "Yes, it's on the packing slip. But first, can you arrange a replacement shipment? We need those units for an order leaving Friday."
      },
      {
        "speaker": "M",
        "text": "I can send replacements today by express, so they'll arrive Wednesday. I'll also e-mail you a claim form."
      },
      {
        "speaker": "W",
        "text": "Perfect. I'll take photos of the damaged boxes and send them over so everything is documented."
      }
    ],
    "translation": "女性:もしもし、フェンモア物流のデイナです。前回の配送のパレットが、いくつかの箱が潰れた状態で届きました。12個ほどが破損しています。\n男性:それは申し訳ありません。破損クレームを始めたいので、追跡番号を教えていただけますか?\n女性:はい、納品書に書いてあります。でもまず、代替品の出荷を手配してもらえますか? 金曜に出荷する注文にそのユニットが必要なんです。\n男性:今日、速達で代替品を送れますので、水曜日には届きます。クレーム用紙もメールでお送りします。\n女性:助かります。破損した箱の写真を撮って送りますので、すべて記録に残しておきます。",
    "questions": [
      {
        "q": "What is the problem?",
        "choices": [
          "A shipment arrived late.",
          "An order was incomplete.",
          "The wrong items were sent.",
          "Some goods were damaged."
        ],
        "answer": 3,
        "explanation": "女性の crushed boxes / units are damaged(箱が潰れ、ユニットが破損)が根拠。『遅延』『誤配送』『数量不足』はいずれも物流でありがちなひっかけだが、本文の問題は破損。"
      },
      {
        "q": "Why does the woman need the replacements quickly?",
        "choices": [
          "To complete an inventory audit",
          "To fill an order leaving Friday",
          "To set up a store display",
          "To prepare product samples"
        ],
        "answer": 1,
        "explanation": "女性の We need those units for an order leaving Friday が根拠。金曜出荷の注文に間に合わせるため。他の選択肢は本文に出てこない。"
      },
      {
        "q": "What does the woman say she will do?",
        "choices": [
          "Take photos of the damage",
          "Contact the delivery driver",
          "Return the damaged pallet",
          "Cancel the order"
        ],
        "answer": 0,
        "explanation": "最後の I'll take photos of the damaged boxes が根拠。クレーム用紙を送るのは男性側で、返品や注文取消は述べていない。"
      }
    ]
  },
  {
    "id": "s4p3-03",
    "title": "会話 3",
    "audio": [
      {
        "speaker": "M",
        "text": "Hi Rina, it's Daniel from the Northgate Herald. I'm calling about your feature on local farmers' markets. It's set for Sunday's edition."
      },
      {
        "speaker": "W",
        "text": "Hi Daniel. The draft is nearly finished. I just need to confirm a couple of quotes with the people I interviewed."
      },
      {
        "speaker": "M",
        "text": "How soon can you send it? Our copy editor needs it by Thursday noon to fit the page layout."
      },
      {
        "speaker": "W",
        "text": "I can get it to you by Wednesday evening. Would it help if I sent the photos separately today?"
      },
      {
        "speaker": "M",
        "text": "Yes, please. That gives our design team a head start on the page."
      }
    ],
    "translation": "男性:こんにちは、リナ。ノースゲート・ヘラルドのダニエルです。地元のファーマーズマーケットに関するあなたの特集記事の件で電話しました。日曜版に載る予定です。\n女性:こんにちは、ダニエル。下書きはほぼ完成しています。取材した人たちにいくつかの引用を確認するだけです。\n男性:どのくらいで送れますか? 校閲担当が紙面レイアウトに合わせるために木曜の正午までに必要なんです。\n女性:水曜の夜までにはお渡しできます。今日、写真を別で送っておくと助かりますか?\n男性:ええ、お願いします。そうすればデザインチームが紙面作りを先に始められます。",
    "questions": [
      {
        "q": "What is the woman writing?",
        "choices": [
          "A product advertisement",
          "A book review",
          "A press release",
          "A newspaper feature"
        ],
        "answer": 3,
        "explanation": "男性の your feature ... It's set for Sunday's edition(日曜版に載る特集)が根拠。edition/copy editor/page layout という語から新聞記事とわかる。"
      },
      {
        "q": "What does the woman still need to do?",
        "choices": [
          "Confirm some quotes",
          "Interview a new source",
          "Rewrite the opening",
          "Choose a headline"
        ],
        "answer": 0,
        "explanation": "女性の confirm a couple of quotes with the people I interviewed が根拠。新たな取材ではなく、既に取材した引用の『確認』。"
      },
      {
        "q": "What does the woman offer to send today?",
        "choices": [
          "The photographs",
          "An invoice",
          "The final draft",
          "A list of sources"
        ],
        "answer": 0,
        "explanation": "女性の I sent the photos separately today が根拠。下書き(final draft)は水曜夜の予定なので today のひっかけ。"
      }
    ]
  },
  {
    "id": "s4p3-04",
    "title": "会話 4",
    "audio": [
      {
        "speaker": "W",
        "text": "Hello, this is Rachel in suite 305. The heating in our office hasn't worked since yesterday, and it's quite cold in here."
      },
      {
        "speaker": "M",
        "text": "I'm sorry about that. We've had a few reports from the third floor. A technician is coming this afternoon to inspect the boiler."
      },
      {
        "speaker": "W",
        "text": "That's good to hear. Do you know when it'll be fixed? We have clients visiting tomorrow morning."
      },
      {
        "speaker": "M",
        "text": "I'll ask the technician for a timeline and let you know by the end of the day. In the meantime, I can bring up a couple of portable heaters."
      },
      {
        "speaker": "W",
        "text": "That would be a big help. Thank you."
      }
    ],
    "translation": "女性:もしもし、305号室のレイチェルです。昨日からオフィスの暖房が効かなくて、かなり寒いんです。\n男性:申し訳ございません。3階からいくつか報告を受けています。今日の午後、技術者がボイラーを点検しに来ます。\n女性:それは良かった。いつ直りそうですか? 明日の朝、クライアントが来るんです。\n男性:技術者に見込み時間を聞いて、今日中にお知らせします。それまでの間、ポータブルヒーターを2台お持ちできますよ。\n女性:それは大変助かります。ありがとうございます。",
    "questions": [
      {
        "q": "Why is the woman calling?",
        "choices": [
          "To ask about parking",
          "To report a heating problem",
          "To renew a lease",
          "To schedule a viewing"
        ],
        "answer": 1,
        "explanation": "冒頭の The heating ... hasn't worked(暖房が効かない)が根拠。ビル管理の他業務(賃貸更新・駐車場・内見)はひっかけ。"
      },
      {
        "q": "What does the man say will happen this afternoon?",
        "choices": [
          "A new tenant will move in.",
          "A technician will inspect the boiler.",
          "The rent will be adjusted.",
          "The building will close early."
        ],
        "answer": 1,
        "explanation": "男性の A technician is coming this afternoon to inspect the boiler が根拠。this afternoon という時間表現がキー。"
      },
      {
        "q": "What does the man offer to bring?",
        "choices": [
          "Extra blankets",
          "Portable heaters",
          "Coffee",
          "A heater manual"
        ],
        "answer": 1,
        "explanation": "男性の I can bring up a couple of portable heaters が根拠。寒さから『毛布』を連想させるが、申し出たのはヒーター。"
      }
    ]
  },
  {
    "id": "s4p3-05",
    "title": "会話 5(3人の会話:女性2人+男性1人)",
    "audio": [
      {
        "speaker": "W",
        "text": "Thanks for coming in, Mr. Alvarez. I'm Sophia, the claims adjuster, and this is my colleague Beatrice, who handled the on-site inspection of your warehouse."
      },
      {
        "speaker": "M",
        "text": "Nice to meet you, Beatrice. So, will the storm damage to the roof be covered?"
      },
      {
        "speaker": "W2",
        "text": "Yes, it will. The wind damage falls under your policy. I've estimated the repair at around eighteen thousand dollars."
      },
      {
        "speaker": "M",
        "text": "That's a relief. How long until I receive the payment?"
      },
      {
        "speaker": "W",
        "text": "Once you submit two repair estimates from licensed contractors, we can process the claim within ten business days."
      },
      {
        "speaker": "W2",
        "text": "And I'll e-mail you our list of approved contractors this afternoon."
      }
    ],
    "translation": "ソフィア(女性1):お越しいただきありがとうございます、アルバレスさん。私は損害査定担当のソフィアで、こちらは同僚のベアトリスです。あなたの倉庫の現地調査を担当しました。\n男性(アルバレス):はじめまして、ベアトリス。それで、屋根の暴風被害は補償されますか?\nベアトリス(女性2):はい、されます。強風による損害はご契約の対象です。修理費用はおよそ1万8千ドルと見積もりました。\n男性:安心しました。支払いを受け取るまでどのくらいかかりますか?\nソフィア:免許を持つ業者からの修理見積もりを2通提出していただければ、10営業日以内に請求を処理できます。\nベアトリス:それと、承認済み業者のリストを今日の午後メールでお送りします。",
    "questions": [
      {
        "q": "What are the speakers mainly discussing?",
        "choices": [
          "A storm-damage claim",
          "A new insurance policy",
          "A rental agreement",
          "A building renovation"
        ],
        "answer": 0,
        "explanation": "the storm damage to the roof / The wind damage falls under your policy から、暴風被害の保険請求が主題。新規契約や賃貸契約はひっかけ。"
      },
      {
        "q": "Who inspected the warehouse?",
        "choices": [
          "Sophia",
          "A contractor",
          "Mr. Alvarez",
          "Beatrice"
        ],
        "answer": 3,
        "explanation": "発言者特定問題。ソフィアが this is my colleague Beatrice, who handled the on-site inspection と紹介している。3人の会話では名前と役割の対応を追う。"
      },
      {
        "q": "What does the man need to submit?",
        "choices": [
          "A photo of the damage",
          "A signed lease",
          "Two repair estimates",
          "A renovation permit"
        ],
        "answer": 2,
        "explanation": "ソフィアの submit two repair estimates from licensed contractors が根拠。写真や許可証、賃貸契約は登場しないひっかけ。"
      }
    ]
  },
  {
    "id": "s4p3-06",
    "title": "会話 6",
    "audio": [
      {
        "speaker": "M",
        "text": "Hi, this is Owen from Greenfield Organic Farm. I'm calling to confirm your weekly order of vegetables for the co-op."
      },
      {
        "speaker": "W",
        "text": "Hi Owen. Yes, the usual crates of tomatoes and lettuce, but could you add ten crates of bell peppers this week? We have a promotion coming up."
      },
      {
        "speaker": "M",
        "text": "Ten crates of peppers... let me check. The peppers are ripening slowly this season, so I can guarantee six crates by Thursday and the rest next week."
      },
      {
        "speaker": "W",
        "text": "Six is fine for now. Same delivery time, seven a.m.?"
      },
      {
        "speaker": "M",
        "text": "Yes, our truck will be there at seven. I'll e-mail you the updated order total."
      }
    ],
    "translation": "男性:もしもし、グリーンフィールド有機農園のオーウェンです。生協向けの毎週の野菜注文を確認するためお電話しました。\n女性:こんにちは、オーウェン。ええ、いつものトマトとレタスのケースをお願いします。それと今週はベルペッパーを10ケース追加できますか? 販促キャンペーンが控えているんです。\n男性:ペッパー10ケースですね……確認します。今シーズンはペッパーの熟すのが遅くて、木曜までに6ケースを確約でき、残りは来週になります。\n女性:今のところ6ケースで大丈夫です。配達時間は同じ、朝7時ですか?\n男性:はい、うちのトラックが7時に伺います。更新した注文合計をメールで送ります。",
    "questions": [
      {
        "q": "Why is the man calling?",
        "choices": [
          "To report a shipping error",
          "To reschedule a delivery",
          "To confirm a produce order",
          "To negotiate a price"
        ],
        "answer": 2,
        "explanation": "冒頭の confirm your weekly order of vegetables が根拠。配達の再調整や誤配送、価格交渉は本文になく連想のひっかけ。"
      },
      {
        "q": "Why can't the man supply all the bell peppers this week?",
        "choices": [
          "A worker is on leave.",
          "Prices have risen.",
          "A delivery truck broke down.",
          "The crop is ripening slowly."
        ],
        "answer": 3,
        "explanation": "男性の The peppers are ripening slowly this season が根拠。トラックや人員の問題ではなく、作物の生育の遅れ。"
      },
      {
        "q": "What will the man send by e-mail?",
        "choices": [
          "An updated order total",
          "A product photo",
          "A delivery schedule",
          "A seasonal price list"
        ],
        "answer": 0,
        "explanation": "最後の I'll e-mail you the updated order total が根拠。updated(更新された)がキー。価格表や写真はひっかけ。"
      }
    ]
  },
  {
    "id": "s4p3-07",
    "title": "会話 7(3人の会話:男性2人+女性1人)",
    "audio": [
      {
        "speaker": "W",
        "text": "Marco, Hassan, I want to finalize the plan for upgrading the packaging line. The new machine arrives in two weeks."
      },
      {
        "speaker": "M",
        "text": "Great, Lena. Should we schedule the installation during the weekend shutdown so we don't lose production time?"
      },
      {
        "speaker": "W",
        "text": "Exactly what I was thinking. Marco, can you coordinate with the maintenance crew?"
      },
      {
        "speaker": "M",
        "text": "Sure, I'll set it up."
      },
      {
        "speaker": "M2",
        "text": "And I'll arrange training for the line operators. The vendor offers a two-day course on the new controls."
      },
      {
        "speaker": "W",
        "text": "Perfect, Hassan. Book that for the week after installation."
      }
    ],
    "translation": "女性(リナ):マルコ、ハッサン、包装ラインの更新計画を固めたいの。新しい機械は2週間後に届くわ。\nマルコ(男性1):いいですね、リナ。生産時間を失わないよう、週末の稼働停止中に設置を組みませんか?\n女性:まさにそう考えていたの。マルコ、保守班と調整してくれる?\nマルコ:もちろん、手配します。\nハッサン(男性2):それから、僕はライン作業者向けの研修を手配します。ベンダーが新しい操作系について2日間の講習を提供しています。\n女性:完璧ね、ハッサン。それは設置の翌週に予約して。",
    "questions": [
      {
        "q": "What are the speakers planning?",
        "choices": [
          "Reducing production hours",
          "Upgrading a packaging line",
          "Hiring new operators",
          "Relocating the factory"
        ],
        "answer": 1,
        "explanation": "リナの upgrading the packaging line が根拠。作業者は既存で、研修が話題になるが『新規採用』ではない。工場移転や生産時間削減は本文にない。"
      },
      {
        "q": "What does Marco agree to do?",
        "choices": [
          "Order replacement parts",
          "Arrange operator training",
          "Coordinate with the maintenance crew",
          "Contact the vendor"
        ],
        "answer": 2,
        "explanation": "発言者特定問題。リナの依頼に対しマルコが Sure, I'll set it up と答えており、担当は保守班との調整。研修はハッサンの担当なのでひっかけ。"
      },
      {
        "q": "What will Hassan arrange?",
        "choices": [
          "A safety inspection",
          "Training for the operators",
          "A delivery date",
          "A weekend shutdown"
        ],
        "answer": 1,
        "explanation": "ハッサン(2人目の男性)の I'll arrange training for the line operators が根拠。週末停止や納品日は他の話題。"
      }
    ]
  },
  {
    "id": "s4p3-08",
    "graphicKind": "list",
    "title": "会話 8(図表問題)",
    "graphic": "Warehouse Inventory — Brauthwaite Logistics\n1. Packing tape — Aisle 2 — 45 rolls\n2. Cardboard boxes (large) — Aisle 4 — 120 units\n3. Bubble wrap — Aisle 5 — 8 rolls\n4. Shipping labels — Aisle 7 — 300 sheets",
    "audio": [
      {
        "speaker": "M",
        "text": "Nadia, I'm doing the stock check. We're running very low on one item, only eight left, over in aisle five."
      },
      {
        "speaker": "W",
        "text": "That won't last through the holiday rush. Go ahead and reorder, get at least twenty more."
      },
      {
        "speaker": "M",
        "text": "Will do. I'll place the order today."
      },
      {
        "speaker": "W",
        "text": "Thanks. Also double-check the large boxes in aisle four; we shipped a lot of them yesterday."
      },
      {
        "speaker": "M",
        "text": "Those are fine, still well over a hundred in stock."
      }
    ],
    "translation": "【図表】在庫一覧(ブラウスウェイト物流)/1. 梱包テープ 通路2 45ロール/2. 段ボール箱(大) 通路4 120個/3. 気泡緩衝材 通路5 8ロール/4. 配送ラベル 通路7 300枚\n男性:ナディア、在庫チェックをしてるんだけど、あるものがすごく少なくなってる。通路5に8個しか残ってない。\n女性:それでは年末の繁忙期はもたないわね。すぐに再発注して。少なくとも20個は追加で。\n男性:了解。今日発注しておくよ。\n女性:ありがとう。あと、通路4の大きい箱も確認しておいて。昨日たくさん出荷したから。\n男性:それは大丈夫、まだ100個以上あるよ。",
    "questions": [
      {
        "q": "Look at the graphic. Which item will the man reorder?",
        "choices": [
          "Cardboard boxes",
          "Packing tape",
          "Bubble wrap",
          "Shipping labels"
        ],
        "answer": 2,
        "explanation": "図表問題。音声の『通路5に8個』と図表を突き合わせると、Aisle 5・8 rolls は気泡緩衝材(Bubble wrap)。品名は音声で言わず、位置と数量で特定させるタイプ。"
      },
      {
        "q": "Why is the item being reordered?",
        "choices": [
          "Stock is low before a busy season.",
          "It was damaged.",
          "A customer complained.",
          "It was discontinued."
        ],
        "answer": 0,
        "explanation": "女性の That won't last through the holiday rush(年末の繁忙期はもたない)が根拠。繁忙期前の在庫不足が理由。"
      },
      {
        "q": "What does the woman ask the man to check?",
        "choices": [
          "The large boxes",
          "The packing tape",
          "The shipping labels",
          "The bubble wrap"
        ],
        "answer": 0,
        "explanation": "女性の double-check the large boxes in aisle four が根拠。再発注品(気泡緩衝材)と混同させるひっかけがあるが、確認を頼んだのは大きい箱。"
      }
    ]
  },
  {
    "id": "s4p3-09",
    "title": "会話 9(意図問題)",
    "audio": [
      {
        "speaker": "W",
        "text": "Ben, the printer needs the final magazine files by Friday to hit the delivery date."
      },
      {
        "speaker": "M",
        "text": "This Friday? The photo section still needs color correction."
      },
      {
        "speaker": "W",
        "text": "I know it's tight. The cover story also came in late from the writer."
      },
      {
        "speaker": "M",
        "text": "Let me prioritize the photos. If I finish them by Thursday, could you do the final proofread?"
      },
      {
        "speaker": "W",
        "text": "Of course. I'll set aside time for it."
      }
    ],
    "translation": "女性:ベン、印刷所が納品日に間に合わせるために、雑誌の最終ファイルを金曜までに必要としているの。\n男性:今週の金曜? 写真セクションはまだ色補正が必要なんだけど。\n女性:きついのは分かってる。カバーストーリーもライターから遅れて届いたのよ。\n男性:じゃあ写真を優先させて。木曜までに終えられたら、最終校正をやってもらえる?\n女性:もちろん。そのために時間を空けておくわ。",
    "questions": [
      {
        "q": "What are the speakers preparing?",
        "choices": [
          "A magazine issue",
          "A brochure",
          "A newspaper",
          "A textbook"
        ],
        "answer": 0,
        "explanation": "女性の the final magazine files が根拠。printer(印刷所)や cover story から雑誌の号の準備とわかる。"
      },
      {
        "q": "What does the man imply when he says, \"This Friday\"?",
        "choices": [
          "He forgot about the deadline.",
          "He prefers a different printer.",
          "He is worried there is little time.",
          "He wants to change the cover."
        ],
        "answer": 2,
        "explanation": "意図問題。まだ色補正が残る状況で『今週の金曜?』と聞き返すのは、締切までの時間が足りないことへの懸念。文字通りの曜日確認ではない。"
      },
      {
        "q": "What does the man agree to do first?",
        "choices": [
          "Proofread the text",
          "Correct the photos",
          "Contact the printer",
          "Write the cover story"
        ],
        "answer": 1,
        "explanation": "男性の Let me prioritize the photos が根拠。最終校正は女性の担当なので、男性がまず行うのは写真の色補正。"
      }
    ]
  },
  {
    "id": "s4p3-10",
    "title": "会話 10",
    "audio": [
      {
        "speaker": "W",
        "text": "Welcome to Birchgate Residences. You're here to see the two-bedroom unit, right?"
      },
      {
        "speaker": "M",
        "text": "Yes. I'm moving here for work next month, so I need something available by the first."
      },
      {
        "speaker": "W",
        "text": "The unit on the fourth floor is move-in ready. It has a balcony and comes with a reserved parking spot."
      },
      {
        "speaker": "M",
        "text": "That sounds ideal. What's included in the monthly rent?"
      },
      {
        "speaker": "W",
        "text": "Rent covers water and building maintenance. Electricity and internet are separate. Would you like to see it now?"
      },
      {
        "speaker": "M",
        "text": "Yes, please. And could you e-mail me the lease terms afterward?"
      }
    ],
    "translation": "女性:バーチゲート・レジデンスへようこそ。2ベッドルームの部屋をご覧になりたいんですよね?\n男性:はい。来月、仕事の都合でこちらに引っ越すので、1日までに入居できる物件が必要なんです。\n女性:4階の部屋なら即入居可能です。バルコニー付きで、専用駐車スペースも付いています。\n男性:理想的ですね。月々の家賃には何が含まれますか?\n女性:家賃には水道代と建物の維持管理費が含まれます。電気とインターネットは別です。今ご覧になりますか?\n男性:はい、お願いします。それと、後で賃貸条件をメールで送ってもらえますか?",
    "questions": [
      {
        "q": "Why is the man looking for an apartment?",
        "choices": [
          "His current lease ended.",
          "He is starting school.",
          "He wants a bigger home.",
          "He is moving for a job."
        ],
        "answer": 3,
        "explanation": "男性の I'm moving here for work next month が根拠。仕事の都合での転居。就学や契約満了、広さ目的はひっかけ。"
      },
      {
        "q": "What is included in the monthly rent?",
        "choices": [
          "Electricity and internet",
          "All utilities",
          "Water and building maintenance",
          "Parking and furniture"
        ],
        "answer": 2,
        "explanation": "女性の Rent covers water and building maintenance が根拠。電気・ネットは別と明言しているので(A)(D)は誤り。"
      },
      {
        "q": "What does the man ask the woman to e-mail?",
        "choices": [
          "A floor plan",
          "A price comparison",
          "The lease terms",
          "A parking permit"
        ],
        "answer": 2,
        "explanation": "男性の could you e-mail me the lease terms afterward? が根拠。間取り図や駐車許可証はひっかけ。"
      }
    ]
  },
  {
    "id": "s4p3-11",
    "title": "会話 11",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, I'm calling about renewing my home insurance policy. It expires at the end of the month."
      },
      {
        "speaker": "M",
        "text": "I can help with that. I have your current policy here. Would you like to keep the same coverage, or make changes?"
      },
      {
        "speaker": "W",
        "text": "I recently finished a kitchen renovation, so I'd like to increase the coverage on the property."
      },
      {
        "speaker": "M",
        "text": "Good idea. I'll update the rebuild value. That will raise your premium slightly, about fifteen dollars a month."
      },
      {
        "speaker": "W",
        "text": "That's fine. When will the new policy take effect?"
      },
      {
        "speaker": "M",
        "text": "As soon as you sign the updated agreement. I'll e-mail it today, and it'll be active from the first."
      }
    ],
    "translation": "女性:もしもし、住宅保険の契約更新の件でお電話しました。今月末で満期になります。\n男性:承ります。こちらに現在のご契約があります。同じ補償内容を継続されますか、それとも変更されますか?\n女性:最近キッチンのリフォームを終えたので、建物の補償額を増やしたいんです。\n男性:良いお考えです。再建築評価額を更新します。それにより保険料が少し上がり、月におよそ15ドルほどになります。\n女性:それで構いません。新しい契約はいつ有効になりますか?\n男性:更新後の契約書に署名いただき次第です。本日メールでお送りし、1日から有効になります。",
    "questions": [
      {
        "q": "Why is the woman calling?",
        "choices": [
          "To report a new address",
          "To cancel coverage",
          "To file a claim",
          "To renew a policy"
        ],
        "answer": 3,
        "explanation": "冒頭の renewing my home insurance policy が根拠。請求(claim)や解約、住所変更はひっかけ。"
      },
      {
        "q": "Why does the woman want to increase her coverage?",
        "choices": [
          "She moved to a new house.",
          "She started a business.",
          "She renovated her kitchen.",
          "She bought a new car."
        ],
        "answer": 2,
        "explanation": "女性の I recently finished a kitchen renovation が根拠。リフォームで建物価値が上がったため補償を増やす。転居や開業ではない。"
      },
      {
        "q": "When will the new policy take effect?",
        "choices": [
          "On the first of the month",
          "In ten business days",
          "At the end of the year",
          "Immediately"
        ],
        "answer": 0,
        "explanation": "男性の it'll be active from the first(1日から有効)が根拠。署名後すぐ書類は送るが、有効になるのは1日から。"
      }
    ]
  },
  {
    "id": "s4p3-12",
    "graphicKind": "schedule",
    "title": "会話 12(図表問題)",
    "graphic": "Production Schedule — Line B (Thursday)\n1. 6:00–10:00 — Product A (Team 1)\n2. 10:00–14:00 — Product C (Team 2)\n3. 14:00–18:00 — Product B (Team 1)\n4. 18:00–22:00 — Cleaning & Maintenance",
    "audio": [
      {
        "speaker": "M",
        "text": "We just got a rush order for five hundred units of Product B. Can we fit it into Thursday's run on Line B?"
      },
      {
        "speaker": "W",
        "text": "Let me look at the schedule. Product B is already slotted in the afternoon block, so we don't need to change anything."
      },
      {
        "speaker": "M",
        "text": "Great. Which team is on that shift? I want to give them a heads-up."
      },
      {
        "speaker": "W",
        "text": "Let me check the roster and confirm. I'll get back to you shortly."
      }
    ],
    "translation": "【図表】生産スケジュール ラインB(木曜)/1. 6:00–10:00 製品A(チーム1)/2. 10:00–14:00 製品C(チーム2)/3. 14:00–18:00 製品B(チーム1)/4. 18:00–22:00 清掃・保守\n男性:製品Bの500個の急ぎの注文が入ったんだ。木曜のラインBの稼働に組み込めるかな?\n女性:スケジュールを見てみるわ。製品Bはもう午後の枠に入っているから、何も変える必要はないわね。\n男性:よかった。そのシフトはどのチームだっけ? 事前に伝えておきたいんだ。\n女性:担当表を確認して知らせるわ。すぐに折り返すわね。",
    "questions": [
      {
        "q": "Look at the graphic. Which team will handle the rush order?",
        "choices": [
          "An outside contractor",
          "Team 1",
          "A temporary team",
          "Team 2"
        ],
        "answer": 1,
        "explanation": "図表問題。急ぎの注文は製品B。図表で製品Bは午後(14:00–18:00)にチーム1が担当。音声はチーム名を言わず、製品と時間帯から特定させる。"
      },
      {
        "q": "What is the rush order for?",
        "choices": [
          "Product C",
          "Product A",
          "Cleaning supplies",
          "Product B"
        ],
        "answer": 3,
        "explanation": "男性の a rush order for five hundred units of Product B が根拠。他の製品や清掃はひっかけ。"
      },
      {
        "q": "What does the woman say she will do?",
        "choices": [
          "Add an extra shift",
          "Check the roster",
          "Cancel the maintenance block",
          "Change the schedule"
        ],
        "answer": 1,
        "explanation": "女性の Let me check the roster and confirm が根拠。スケジュールは変更不要と述べており、担当表を確認するだけ。"
      }
    ]
  },
  {
    "id": "s4p3-13",
    "title": "会話 13",
    "audio": [
      {
        "speaker": "W",
        "text": "Hi, I'm Maya. I just joined the food-packing team today. Where do I get the gear I need for the floor?"
      },
      {
        "speaker": "M",
        "text": "Welcome, Maya. You'll need a hairnet, gloves, and a clean apron before entering the production area. They're in the supply room by the entrance."
      },
      {
        "speaker": "W",
        "text": "Got it. Is there anything else I should know before my first shift?"
      },
      {
        "speaker": "M",
        "text": "Yes. Everyone washes their hands at the station by the door and logs in on the tablet there. Your supervisor will walk you through the line after that."
      },
      {
        "speaker": "W",
        "text": "Thanks. I'll head to the supply room now."
      }
    ],
    "translation": "女性:こんにちは、マヤです。今日から食品包装チームに入りました。作業フロアに必要な装備はどこで受け取れますか?\n男性:ようこそ、マヤさん。生産エリアに入る前に、ヘアネット、手袋、清潔なエプロンが必要です。入口横の備品室にありますよ。\n女性:分かりました。初めてのシフトの前に、他に知っておくべきことはありますか?\n男性:ええ。全員、ドア横のステーションで手を洗い、そこのタブレットでログインします。その後、監督者がラインを案内してくれます。\n女性:ありがとうございます。今から備品室に向かいます。",
    "questions": [
      {
        "q": "Who most likely is the woman?",
        "choices": [
          "A safety inspector",
          "A delivery driver",
          "A visitor",
          "A new employee"
        ],
        "answer": 3,
        "explanation": "女性の I just joined the food-packing team today が根拠。今日入ったばかりの新入社員。検査官や配達員、来訪者はひっかけ。"
      },
      {
        "q": "What does the man say the woman needs before entering the production area?",
        "choices": [
          "A parking pass",
          "A visitor badge",
          "Hygiene gear",
          "A training certificate"
        ],
        "answer": 2,
        "explanation": "男性の a hairnet, gloves, and a clean apron(ヘアネット・手袋・エプロン)が根拠。これらは衛生用装備(hygiene gear)への言い換え。"
      },
      {
        "q": "What will the woman do next?",
        "choices": [
          "Go to the supply room",
          "Meet her supervisor",
          "Wash her hands",
          "Log in on the tablet"
        ],
        "answer": 0,
        "explanation": "女性の最後の I'll head to the supply room now が根拠。手洗いやタブレットのログインはその後の手順でひっかけ。"
      }
    ]
  }
];
