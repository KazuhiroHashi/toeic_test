// セット4 part7(重複差し替え・正解位置均等化済み)
window.TOEIC_DATA_4 = window.TOEIC_DATA_4 || {};
window.TOEIC_DATA_4.part7 = [
  {
    "id": "s4p7-01",
    "title": "シングル 1(お知らせ)",
    "passages": [
      {
        "docType": "Notice",
        "text": "RIVERSTONE OFFICE PLAZA — TENANT NOTICE\n\nPlease be advised that the water supply to the entire building will be shut off on Wednesday, May 14, from 8:00 A.M. to 1:00 P.M., so that our contractors can replace a section of aging pipe on the third floor.\n\nDuring this time, restrooms and kitchen facilities on all floors will be unavailable. We recommend that tenants store drinking water in advance if needed. The nearest public restrooms are in the lobby of the neighboring Carlton Center, which our tenants are welcome to use.\n\nElevators and electricity will not be affected, and the building management office will remain open.\n\nWe apologize for the inconvenience. Questions may be directed to the management office at extension 200."
      }
    ],
    "translation": "リバーストーン・オフィスプラザ——テナント向けお知らせ\n\n3階の老朽化した配管の一部を業者が交換するため、5月14日(水)午前8時から午後1時まで、建物全体の給水を停止しますのでお知らせします。\n\nこの間、全フロアのトイレと給湯設備が使用できなくなります。必要に応じて飲料水を事前に備えておくことをお勧めします。最寄りの公共トイレは隣接するカールトン・センターのロビーにあり、当ビルのテナントはご利用いただけます。\n\nエレベーターと電気には影響がなく、ビル管理事務所も通常通り開いています。\n\nご不便をおかけし申し訳ありません。ご質問は管理事務所(内線200)まで。",
    "questions": [
      {
        "q": "Where in the building will the contractors work?",
        "choices": [
          "In the lobby",
          "In the basement",
          "On the third floor",
          "On the roof"
        ],
        "answer": 2,
        "explanation": "replace a section of aging pipe on the third floor(3階の老朽化した配管の一部を交換する)が根拠。ロビーは隣のカールトン・センターのトイレの話で出てくるだけなので(A)はひっかけ。"
      },
      {
        "q": "What are tenants advised to do?",
        "choices": [
          "Report leaks to Carlton Center",
          "Keep some drinking water on hand",
          "Leave the building during the work",
          "Use the stairs instead of elevators"
        ],
        "answer": 1,
        "explanation": "We recommend that tenants store drinking water in advance(飲料水を事前に備える)が根拠。"
      }
    ]
  },
  {
    "id": "s4p7-02",
    "title": "シングル 2(テキストメッセージのやり取り)",
    "passages": [
      {
        "docType": "Text-message chain",
        "text": "Derek Olsson (7:42 A.M.)\nHi Yuki, the produce truck from Greenfield Farms just pulled up at Dock 3, but we weren't scheduled to receive them until 9.\n\nYuki Tanaka (7:44 A.M.)\nEarly again. The trouble is Dock 3 is still loading the outbound order for Melbourne. Can the driver wait?\n\nDerek Olsson (7:45 A.M.)\nHe says he has three more stops and can't wait long. And the crates are refrigerated, so they shouldn't sit in the sun.\n\nYuki Tanaka (7:46 A.M.)\nMove them to Dock 1. It's open, and the cold-storage entrance is right there.\n\nDerek Olsson (7:47 A.M.)\nGood call. I'll redirect him now."
      }
    ],
    "translation": "デレク・オルソン(午前7:42):やあユキ、グリーンフィールド農園の青果トラックが今ドック3に着いたんだけど、受け入れ予定は9時だったよね。\nユキ・タナカ(午前7:44):また早いのね。問題は、ドック3ではまだメルボルン向けの出荷分を積み込み中だってこと。運転手さん、待てる?\nデレク・オルソン(午前7:45):あと3か所回るから長くは待てないって。それにクレートは冷蔵品だから、日なたに置いておけないんだ。\nユキ・タナカ(午前7:46):ドック1に回して。空いてるし、冷蔵庫の入口もすぐそこよ。\nデレク・オルソン(午前7:47):なるほど。今すぐ誘導するよ。",
    "questions": [
      {
        "q": "What is causing a problem at Dock 3?",
        "choices": [
          "The refrigeration unit has failed.",
          "A worker did not report for a shift.",
          "A truck has broken down.",
          "An outbound order is still being loaded."
        ],
        "answer": 3,
        "explanation": "ユキの Dock 3 is still loading the outbound order for Melbourne(ドック3ではまだ出荷分を積み込み中)が根拠。青果トラックを受け入れられない原因。"
      },
      {
        "q": "At 7:46 A.M., what does Ms. Tanaka most likely mean when she writes, \"Move them to Dock 1\"?",
        "choices": [
          "She will drive the truck to another site.",
          "She wants the outbound order canceled.",
          "She is offering a different place to unload the truck.",
          "She needs the crates returned to the farm."
        ],
        "answer": 2,
        "explanation": "意図問題。直後に『空いていて冷蔵庫の入口もすぐそこ』と続くので、荷降ろしの代わりの場所を指示している。them は青果のクレートを指す。"
      }
    ]
  },
  {
    "id": "s4p7-03",
    "title": "シングル 3(求人広告)",
    "passages": [
      {
        "docType": "Job advertisement",
        "text": "MAINTENANCE TECHNICIAN — Larkfield Bottling Plant\n\nLarkfield Beverages is hiring a full-time maintenance technician for its bottling plant in Danby. The successful applicant will service conveyor systems and filling machines, carry out weekly safety checks, and keep a written record of all repairs.\n\nRequirements:\n1. At least three years of experience with industrial machinery\n2. A recognized electrical or mechanical qualification\n3. Willingness to work one weekend shift per month\n\nWe offer a starting salary of $52,000, twenty days of paid leave, and a company pension.\n\nTo apply, send a résumé and a short cover letter to careers@larkfieldbev.com by August 22. Interviews will take place during the first week of September, and candidates who are selected at interview will be asked to complete a practical assessment at the plant."
      }
    ],
    "translation": "保守技術者募集——ラークフィールド瓶詰工場\n\nラークフィールド飲料は、ダンビーの瓶詰工場で常勤の保守技術者を募集しています。採用者はコンベヤー設備と充填機の保守、毎週の安全点検、全ての修理の記録作成を担当します。\n\n応募条件:\n1. 産業機械の実務経験3年以上\n2. 電気または機械の公認資格\n3. 月1回の週末シフト勤務が可能なこと\n\n初任給52,000ドル、有給休暇20日、企業年金をご用意しています。\n\n応募は8月22日までに、履歴書と短いカバーレターを careers@larkfieldbev.com までお送りください。面接は9月の第1週に行い、面接で選ばれた候補者には工場での実技試験を受けていただきます。",
    "questions": [
      {
        "q": "For whom is the advertisement most likely intended?",
        "choices": [
          "Suppliers of bottling equipment",
          "Students seeking a summer internship",
          "Experienced machinery technicians",
          "Drivers with a delivery license"
        ],
        "answer": 2,
        "explanation": "産業機械の経験3年以上と電気・機械の資格を求める常勤職の募集なので、経験を積んだ機械技術者向け。短期の学生インターンではないので(B)はひっかけ。"
      },
      {
        "q": "What will selected candidates be asked to do?",
        "choices": [
          "Provide three references",
          "Attend a second interview by video",
          "Submit samples of past repair records",
          "Complete a practical assessment"
        ],
        "answer": 3,
        "explanation": "candidates who are selected at interview will be asked to complete a practical assessment at the plant(面接で選ばれた候補者は工場で実技試験を受ける)が根拠。"
      }
    ]
  },
  {
    "id": "s4p7-04",
    "title": "シングル 4(社内メモ)",
    "passages": [
      {
        "docType": "Memo",
        "text": "MEMO\nTo: All Warehouse Staff\nFrom: Nadia Cortez, Operations Manager\nDate: October 6\nRe: Annual inventory count\n\nOur annual physical inventory count will take place on Saturday, October 25. Because every item in the warehouse must be counted, all outbound shipping will be suspended that day. Please inform any clients expecting Saturday deliveries.\n\nStaff assignments will be posted on the break-room board by October 20; each team will be responsible for a specific zone. Handheld scanners will be distributed at 7:30 A.M., and counting begins at 8:00 A.M. sharp.\n\nAnyone unable to work that Saturday must notify their supervisor by October 15 so we can arrange coverage.\n\nNadia"
      }
    ],
    "translation": "メモ\n宛先:倉庫スタッフ全員\n差出人:ナディア・コルテス(オペレーションマネージャー)\n日付:10月6日\n件名:年次棚卸し\n\n年次の実地棚卸しを10月25日(土)に行います。倉庫の全品目を数える必要があるため、その日は出荷業務をすべて停止します。土曜配送を予定しているお客様にはお知らせください。\n\n担当割りは10月20日までに休憩室の掲示板に貼り出します。各チームが特定のゾーンを担当します。ハンディスキャナーは午前7時30分に配布し、カウントは午前8時ちょうどに開始します。\n\nその土曜に勤務できない方は、代替を手配できるよう、10月15日までに上司に連絡してください。\n\nナディア",
    "questions": [
      {
        "q": "What will happen on October 25?",
        "choices": [
          "A new scanner system will be launched.",
          "Outbound shipping will be suspended.",
          "The warehouse will close permanently.",
          "New staff will be trained."
        ],
        "answer": 1,
        "explanation": "all outbound shipping will be suspended that day(その日は出荷を全面停止)が根拠。棚卸しのため。"
      },
      {
        "q": "What must staff do by October 15?",
        "choices": [
          "Notify a supervisor of any absence",
          "Choose their own work zone",
          "Return their handheld scanners",
          "Check the break-room board for assignments"
        ],
        "answer": 0,
        "explanation": "Anyone unable to work that Saturday must notify their supervisor by October 15(勤務できない人は10月15日までに上司へ連絡)が根拠。担当割りの掲示は10月20日までなので(D)は時期が合わないひっかけ。"
      }
    ]
  },
  {
    "id": "s4p7-05",
    "title": "シングル 5(記事)",
    "passages": [
      {
        "docType": "Article",
        "text": "GREENBELT (April 5) — A cooperative of twelve family farms in the Greenbelt Valley opened a shared packing facility on Monday, allowing members to wash, sort, and box their produce under one roof for the first time.\n\nPreviously, each farm handled packing on its own, and smaller growers often struggled to meet the volume that large grocery chains require. By pooling their harvests, the cooperative can now fill orders that no single member could manage alone.\n\n\"A grocery buyer wants one truckload of uniform carrots, not ten small batches,\" said co-op director Louisa Fenn. \"Now we can deliver that.\" The facility is expected to handle about 40 tons of vegetables per week during peak season.\n\nThe project was funded partly by a regional agricultural grant. Ms. Fenn said the co-op hopes to add a cold-storage unit next year, which would let members hold crops for sale during the winter months."
      }
    ],
    "translation": "グリーンベルト(4月5日)——グリーンベルト渓谷の12の家族経営農場からなる協同組合が月曜、共同の梱包施設を開設し、組合員が初めて一つ屋根の下で農産物の洗浄・選別・箱詰めを行えるようになった。\n\nこれまで各農場は自前で梱包しており、小規模生産者は大手食料品チェーンが求める数量に応えるのに苦労することが多かった。収穫を持ち寄ることで、協同組合は今や単独の組合員では扱えなかった注文にも応じられる。\n\n『バイヤーが欲しいのは、規格のそろったニンジンのトラック1台分であって、小口10バッチではありません』と組合ディレクターのルイーザ・フェン氏。『今ならそれを届けられます』。同施設は最盛期に週約40トンの野菜を扱う見込みだ。\n\n事業は地域の農業助成金の一部で賄われた。フェン氏によれば、組合は来年、冷蔵保管設備の増設を望んでおり、それにより組合員は冬の間、作物を保管して販売できるようになるという。",
    "questions": [
      {
        "q": "What is the article mainly about?",
        "choices": [
          "A change in government farming rules",
          "A recent rise in vegetable prices",
          "A new grocery store chain",
          "A shared packing facility for farms"
        ],
        "answer": 3,
        "explanation": "第1段落の『12農場の協同組合が共同梱包施設を開設した』が記事全体の主題。"
      },
      {
        "q": "According to the article, what problem did small farms face before?",
        "choices": [
          "They could not meet buyers' volume needs.",
          "They could not find enough workers.",
          "Their crops were of poor quality.",
          "Their delivery trucks were too small."
        ],
        "answer": 0,
        "explanation": "struggled to meet the volume that large grocery chains require(大手が求める数量に応えられなかった)が根拠。バイヤーは規格のそろった1台分を欲しがるという発言とも一致。"
      },
      {
        "q": "What does the cooperative hope to do next year?",
        "choices": [
          "Open a retail store",
          "Buy additional farmland",
          "Add a cold-storage unit",
          "Double its membership"
        ],
        "answer": 2,
        "explanation": "the co-op hopes to add a cold-storage unit next year(来年、冷蔵設備を増設したい)が根拠。"
      }
    ]
  },
  {
    "id": "s4p7-06",
    "title": "シングル 6(Eメール)",
    "passages": [
      {
        "docType": "E-mail",
        "text": "From: Gordon Pyke, Northbridge Freight Services\nTo: Sandra Iqbal\nSubject: Your shipping agreement — annual review\nDate: June 3\n\nDear Ms. Iqbal,\n\nYour shipping agreement (account no. NF-77302) for the Fairlight Bakery is due for its annual review on July 1. I am writing to go over your service level before that date.\n\nThis year we recommend one change. Since you began supplying two new hotel clients in March, your shipments have exceeded your weekly allowance of 80 parcels in nine of the past twelve weeks, and every parcel above the allowance is billed separately at a higher rate. We suggest raising the allowance to 110 parcels. This would add $240 to your monthly charge but would remove those extra fees.\n\nYour pickup times and packaging conditions would stay the same. If you agree to the higher allowance, simply reply to this e-mail and I will amend the agreement. If I do not hear from you by June 24, your current terms will stay in effect.\n\nI am also happy to arrange a call to discuss other options, such as adding a Saturday pickup.\n\nBest regards,\nGordon Pyke"
      }
    ],
    "translation": "差出人:ゴードン・パイク(ノースブリッジ運送)\n宛先:サンドラ・イクバル\n件名:あなたの配送契約——年次見直しについて\n日付:6月3日\n\nイクバル様\n\nフェアライト・ベーカリーの配送契約(アカウント番号NF-77302)は7月1日に年次見直しを迎えます。その前にサービス内容を確認したくご連絡します。\n\n今年は1点変更をお勧めします。3月に新たなホテル2社への納品を始められて以降、直近12週のうち9週で週80個の上限を超えており、上限を超えた分は1個ごとに割高な料金で別途請求されています。上限を110個に引き上げることをご提案します。これにより月額が240ドル上がりますが、超過分の追加料金はなくなります。\n\n集荷時間と梱包条件は変わりません。上限の引き上げに同意される場合は、本メールにご返信いただければ契約を変更します。6月24日までにご連絡がない場合は、現在の条件がそのまま続きます。\n\n土曜集荷の追加など、他の選択肢についてお電話でご相談することも可能です。\n\nよろしくお願いいたします。\nゴードン・パイク",
    "questions": [
      {
        "q": "Why did Mr. Pyke write the e-mail?",
        "choices": [
          "To report on a shipment that was lost",
          "To request an overdue payment",
          "To sell a new packaging product",
          "To go over a client's service level"
        ],
        "answer": 3,
        "explanation": "I am writing to go over your service level before that date(年次見直しの前にサービス内容を確認する)が主目的。荷物の紛失報告でも支払いの督促でもない。"
      },
      {
        "q": "What change does Mr. Pyke recommend?",
        "choices": [
          "Lowering the monthly charge",
          "Raising the weekly parcel allowance",
          "Switching to a different carrier",
          "Reducing the number of pickups"
        ],
        "answer": 1,
        "explanation": "We suggest raising the allowance to 110 parcels(週の上限を110個へ引き上げる)が根拠。月額は240ドル『上がる』ので(A)は誤り。"
      },
      {
        "q": "What will happen if Ms. Iqbal does not reply by June 24?",
        "choices": [
          "Her current terms will stay in effect.",
          "Her monthly charge will double.",
          "A phone call will be scheduled automatically.",
          "Her account will be closed."
        ],
        "answer": 0,
        "explanation": "If I do not hear from you by June 24, your current terms will stay in effect(6月24日までに連絡がなければ現在の条件がそのまま続く)が根拠。電話は『希望すれば手配する』もので自動ではないので(C)はひっかけ。"
      }
    ]
  },
  {
    "id": "s4p7-07",
    "title": "シングル 7(Eメール)",
    "passages": [
      {
        "docType": "E-mail",
        "text": "From: Helena Barsky, Procurement Manager, Aldervale Appliances\nTo: Raj Menon, Sales, Torrance Components\nSubject: Delivery schedule for aluminum brackets\nDate: February 9\n\nDear Mr. Menon,\n\nThank you for the updated quote on the aluminum mounting brackets (part AB-14). We would like to proceed with the order of 5,000 units.\n\nHowever, our assembly line will switch to a new dishwasher model in mid-March, and we will need the brackets before then. Your quote lists a six-week lead time, which would put delivery in late March — too late for us.\n\nCould you confirm whether a partial shipment is possible? If you could send 2,000 units within three weeks and the remaining 3,000 by the end of March, that would allow us to begin production on schedule.\n\nPlease also let me know if a faster timeline would affect the unit price. We would rather adjust our budget than delay the line.\n\nBest regards,\nHelena Barsky"
      }
    ],
    "translation": "差出人:ヘレナ・バースキー(アルダーヴェイル家電 調達マネージャー)\n宛先:ラジ・メノン(トーランス・コンポーネンツ 営業)\n件名:アルミブラケットの納期について\n日付:2月9日\n\nメノン様\n\nアルミ製取付ブラケット(部品AB-14)の更新見積もり、ありがとうございました。5,000個の注文を進めたいと思います。\n\nただ、当社の組立ラインは3月中旬に新しい食洗機モデルへ切り替わり、それまでにブラケットが必要です。ご提示のリードタイムは6週間で、これでは納品が3月下旬になり、当社には遅すぎます。\n\n分割出荷が可能かご確認いただけますか? 2,000個を3週間以内に、残り3,000個を3月末までに送っていただければ、予定通り生産を始められます。\n\nまた、納期を早めると単価に影響するかもお知らせください。ライン停止を招くより、予算を調整したいと考えています。\n\nよろしくお願いいたします。\nヘレナ・バースキー",
    "questions": [
      {
        "q": "Why is Ms. Barsky writing?",
        "choices": [
          "To ask about adjusting a delivery timeline",
          "To file a complaint about defective parts",
          "To apply for a new supplier account",
          "To cancel an existing order"
        ],
        "answer": 0,
        "explanation": "6週間では遅すぎるとし、分割出荷や納期短縮を打診している。納期の調整依頼が主目的。"
      },
      {
        "q": "What is suggested about Aldervale Appliances?",
        "choices": [
          "It is opening a second factory.",
          "It manufactures aluminum brackets itself.",
          "It is reducing its workforce.",
          "It will start producing a new model soon."
        ],
        "answer": 3,
        "explanation": "our assembly line will switch to a new dishwasher model in mid-March(3月中旬に新モデルへ切替)から、まもなく新製品の生産を始めると分かる。ブラケットはトーランス社が作るので(B)は誤り。"
      },
      {
        "q": "What does Ms. Barsky indicate she is willing to do?",
        "choices": [
          "Reduce the order quantity",
          "Accept a higher unit price",
          "Extend the assembly deadline",
          "Change to a different supplier"
        ],
        "answer": 1,
        "explanation": "We would rather adjust our budget than delay the line(ライン停止より予算調整を望む)から、単価が上がっても受け入れる姿勢が読み取れる。"
      }
    ]
  },
  {
    "id": "s4p7-08",
    "title": "シングル 8(ウェブページ)",
    "passages": [
      {
        "docType": "Web page",
        "text": "RIDGEWAY EQUIPMENT RENTALS\nServing builders, warehouses, and event crews across the county since 2004.\n\nWhat we offer:\n1. A fleet of forklifts, scissor lifts, and portable generators, each serviced after every rental\n2. Same-day collection from our depot, or delivery to your site for a flat fee of $35\n3. Daily, weekly, and monthly rates — rent for a full week and pay for only four days\n\nOpening an account: register online and upload a valid business license. Approved account holders may reserve equipment up to three months in advance and receive one itemized statement each month instead of paying for each rental separately.\n\nHours and returns: our depot is open Monday through Saturday, 6:30 A.M. to 5:00 P.M. Equipment must be returned with a full fuel tank; otherwise a refueling charge is added to your final bill.\n\nDamage waiver: for an additional 8 percent of the rental cost, you may add a waiver that covers accidental damage during normal use. It does not cover loss, theft, or damage caused by untrained operation.\n\nNew this year: two electric scissor lifts have joined the fleet for indoor jobs where exhaust fumes are a concern. Reserve these early, as demand has been high since they arrived.\n\nPlease note: we rent to registered businesses only and cannot rent to private individuals. A refundable deposit is required on every generator rental. Operators are not supplied; customers must provide their own trained staff."
      }
    ],
    "translation": "リッジウェイ機材レンタル\n2004年以来、郡内の建設業者・倉庫・イベント業者にご利用いただいています。\n\nサービス内容:\n1. フォークリフト、シザーリフト、可搬型発電機を保有。いずれもレンタルのたびに整備しています\n2. 当社車庫での即日引き取り、または一律35ドルで現場までお届け\n3. 日極め・週極め・月極めの料金——1週間お借りいただくと4日分の料金で済みます\n\nアカウント開設:オンラインで登録し、有効な事業許可証をアップロードしてください。承認されたアカウント保有者は最大3か月先まで機材を予約でき、レンタルごとのお支払いに代えて毎月1通の明細書を受け取れます。\n\n営業時間と返却:当社車庫の営業は月曜から土曜、午前6時30分から午後5時までです。機材は燃料を満タンにしてご返却ください。満タンでない場合は給油料金が最終請求額に加算されます。\n\n損害補償:レンタル料金の8%を追加でお支払いいただくと、通常使用中の偶発的な損害を補償するウェイバーを付けられます。紛失・盗難、訓練を受けていない操作による損害は対象外です。\n\n今年の新着:排気ガスが気になる屋内作業向けに、電動シザーリフト2台が加わりました。入荷以来ご要望が多いため、お早めにご予約ください。\n\nご注意:登録事業者のみへの貸出で、個人のお客様にはお貸しできません。発電機のレンタルには、返還される保証金が必要です。オペレーターは付きません。訓練を受けた作業員はお客様でご用意ください。",
    "questions": [
      {
        "q": "What is indicated about Ridgeway Equipment Rentals?",
        "choices": [
          "It manufactures its own machines.",
          "It opened last year.",
          "It rents only to registered businesses.",
          "It has three depots in the county."
        ],
        "answer": 2,
        "explanation": "we rent to registered businesses only and cannot rent to private individuals(登録事業者のみで個人には貸さない)が根拠。2004年創業なので(B)は誤り。3か月先までの予約を『3か所の車庫』と取り違えないこと。"
      },
      {
        "q": "What is NOT mentioned as something the company offers?",
        "choices": [
          "Delivery to a work site",
          "A monthly itemized statement",
          "Advance reservations",
          "Trained operators for the equipment"
        ],
        "answer": 3,
        "explanation": "NOT問題。現場への配送、月1通の明細書、3か月先までの予約はいずれも記載がある。オペレーターは付かない(Operators are not supplied)と明記されているので、これだけが提供されないもの。"
      },
      {
        "q": "What is required when a generator is rented?",
        "choices": [
          "An extra delivery charge",
          "A refundable deposit",
          "A monthly contract",
          "Proof of insurance"
        ],
        "answer": 1,
        "explanation": "A refundable deposit is required on every generator rental(発電機のレンタルには返還される保証金が必要)が根拠。35ドルは発電機に限らず現場配送を頼んだ場合の料金なので(A)はひっかけ。"
      },
      {
        "q": "What is indicated about returning equipment?",
        "choices": [
          "A charge applies if the fuel tank is not full.",
          "Equipment may be returned to any depot in the county.",
          "Returns are accepted only on weekdays.",
          "Equipment may be dropped off after 5:00 P.M."
        ],
        "answer": 0,
        "explanation": "Equipment must be returned with a full fuel tank; otherwise a refueling charge is added(満タンでなければ給油料金が加算される)が根拠。営業は月曜から土曜なので(C)は誤り。車庫は午後5時までなので(D)も誤り。"
      }
    ]
  },
  {
    "id": "s4p7-09",
    "title": "シングル 9(オンラインチャット)",
    "passages": [
      {
        "docType": "Online chat",
        "text": "Ravi Deshmukh (4:31 P.M.)\nColin, are the galley proofs for the spring issue back from the printer yet?\n\nColin Whitaker (4:33 P.M.)\nThey just landed on my desk. Why — is there a problem?\n\nRavi Deshmukh (4:34 P.M.)\nThe lead author found two errors in her article this morning. We need them fixed before it goes to print tomorrow.\n\nColin Whitaker (4:35 P.M.)\nHow major? If they're just typos I can slot them in tonight.\n\nRavi Deshmukh (4:36 P.M.)\nOne's a wrong figure in a chart, the other's a misspelled name. Both small.\n\nColin Whitaker (4:37 P.M.)\nI'm on it.\n\nRavi Deshmukh (4:38 P.M.)\nYou're saving the whole issue.\n\nColin Whitaker (4:39 P.M.)\nOne thing about the chart, though. I can see that the number is wrong, but I don't know what it should be.\n\nRavi Deshmukh (4:41 P.M.)\nI don't have it in front of me either. I'll e-mail the author tonight and pass the correct figure on to you as soon as she replies.\n\nColin Whitaker (4:42 P.M.)\nPlease do. Until then I can only fix the name.\n\nRavi Deshmukh (4:43 P.M.)\nUnderstood. What time do the proofs have to be back at the printer?\n\nColin Whitaker (4:44 P.M.)\nNine in the morning. Any later and we lose our slot on the press, which would push the issue back a week.\n\nRavi Deshmukh (4:45 P.M.)\nThen I'll mark my message urgent. Once you've made both changes, send me a PDF of the two pages so I can check them before they go back.\n\nColin Whitaker (4:46 P.M.)\nWill do. It should be in your inbox by eight."
      }
    ],
    "translation": "ラヴィ・デシュムク(午後4:31):コリン、春号のゲラは印刷所からもう戻ってきた?\nコリン・ウィテカー(午後4:33):今ちょうど机に届いたところ。どうかした?——何か問題?\nラヴィ・デシュムク(午後4:34):筆頭著者が今朝、自分の記事に誤りを2つ見つけた。明日印刷に回る前に直さないと。\nコリン・ウィテカー(午後4:35):どのくらい大きい? ただの誤字なら今夜差し込めるよ。\nラヴィ・デシュムク(午後4:36):1つはグラフの数値の間違い、もう1つは名前のスペルミス。どちらも小さい。\nコリン・ウィテカー(午後4:37):任せて。\nラヴィ・デシュムク(午後4:38):君のおかげで号全体が助かる。\nコリン・ウィテカー(午後4:39):ただ、グラフについて1点。数値が違うのは分かるけど、正しい数値が分からない。\nラヴィ・デシュムク(午後4:41):こちらも手元にない。今夜著者にメールして、返事が来次第、正しい数値を伝えるよ。\nコリン・ウィテカー(午後4:42):お願い。それまでは名前しか直せない。\nラヴィ・デシュムク(午後4:43):了解。ゲラは何時までに印刷所へ戻す必要がある?\nコリン・ウィテカー(午後4:44):朝9時。それより遅れると印刷機の枠を失って、号が1週間遅れることになる。\nラヴィ・デシュムク(午後4:45):では至急扱いで送る。2か所とも直したら、戻す前に確認できるよう、その2ページのPDFを送って。\nコリン・ウィテカー(午後4:46):了解。8時までには受信箱に入れておく。",
    "questions": [
      {
        "q": "At 4:37 P.M., what does Mr. Whitaker most likely mean when he writes, \"I'm on it\"?",
        "choices": [
          "He will take care of the corrections.",
          "He has already sent the issue to print.",
          "He is standing on the proofs.",
          "He disagrees with the author's changes."
        ],
        "answer": 0,
        "explanation": "意図問題。直前でラヴィが誤り2点の内容を説明した流れなので、『自分が(修正を)引き受ける』の意味。"
      },
      {
        "q": "What is indicated about the spring issue?",
        "choices": [
          "It contains no charts.",
          "It is a week behind schedule.",
          "It has been cancelled.",
          "It will be printed the following day."
        ],
        "answer": 3,
        "explanation": "before it goes to print tomorrow(明日印刷に回る前に)から、翌日に印刷予定と分かる。グラフの数値ミスの話があるので(A)は誤り。"
      },
      {
        "q": "What does Mr. Deshmukh offer to do?",
        "choices": [
          "Proofread the whole article again",
          "Contact the author for the correct figure",
          "Fix the misspelled name himself",
          "Deliver the proofs to the printer"
        ],
        "answer": 1,
        "explanation": "I'll e-mail the author tonight and pass the correct figure on to you(今夜著者にメールして正しい数値を伝える)が根拠。名前の修正はウィテカー氏の担当なので(C)は誤り。"
      },
      {
        "q": "What does Mr. Deshmukh ask Mr. Whitaker to send him?",
        "choices": [
          "The original galley proofs",
          "The author's e-mail address",
          "A PDF of the corrected pages",
          "A list of the typos he found"
        ],
        "answer": 2,
        "explanation": "send me a PDF of the two pages so I can check them before they go back(戻す前に確認できるよう2ページ分のPDFを送って)が根拠。(A)の galley proofs は本文の語をそのまま使ったひっかけ。"
      }
    ]
  },
  {
    "id": "s4p7-10",
    "title": "シングル 10(手紙)",
    "passages": [
      {
        "docType": "Letter",
        "text": "Dear Valued Customer,\n\nWe are writing regarding the Cascade portable air pump (model AP-9) that you registered with us. Our quality team has identified a fault in a small number of units produced between January and March: under heavy use, the plastic hose connector may weaken and leak air.\n\nAlthough the issue poses no safety risk, it can reduce the pump's performance. As a precaution, we are offering all affected customers a free replacement connector, which is simple to fit yourself using the enclosed instructions. No tools are required.\n\nTo request your free connector, visit cascade-tools.com/AP9 and enter the serial number printed on the base of your pump. Replacements will be dispatched within five business days at no cost to you.\n\nYou can also check your own unit before ordering. The production month is printed beside the serial number on the base of the pump. Units made after March use a redesigned metal connector and are not affected, so their owners need to do nothing.\n\nOur support line is open from 8 A.M. to 6 P.M. on weekdays. Please have the serial number ready when you call, as our staff will need it to look up your record.\n\nIf you would prefer to return the entire pump for a full inspection, please call our support line and we will arrange free collection.\n\nWe regret any inconvenience and thank you for your understanding.\n\nSincerely,\nMartin Feld\nCascade Tools"
      }
    ],
    "translation": "お客様各位\n\nお客様にご登録いただいたカスケード・ポータブル空気ポンプ(モデルAP-9)についてご連絡します。当社の品質チームが、1月から3月に製造された一部の製品に不具合を確認しました。過度の使用により、プラスチック製ホースコネクターが弱くなり空気が漏れる場合があります。\n\nこの問題に安全上のリスクはありませんが、ポンプの性能を低下させることがあります。念のため、対象のお客様全員に交換用コネクターを無償で提供します。同封の説明書を使えばご自身で簡単に取り付けられ、工具は不要です。\n\n無償コネクターのご請求は、cascade-tools.com/AP9 にアクセスし、ポンプ底面に印字されたシリアル番号を入力してください。交換品は5営業日以内に無料で発送します。\n\nご注文の前にご自身で確認することもできます。製造月はポンプ底面のシリアル番号の横に印字されています。3月より後に製造された製品は再設計された金属製コネクターを使用しており対象外ですので、所有者の方は何もする必要はありません。\n\nサポート窓口は平日午前8時から午後6時まで受け付けています。お電話の際は、担当者が記録を確認するためシリアル番号をお手元にご用意ください。\n\nポンプ本体の全体点検をご希望の場合は、サポート窓口までお電話ください。無料で引き取りを手配します。\n\nご不便をおかけしお詫び申し上げるとともに、ご理解に感謝いたします。\n\n敬具\nマーティン・フェルド\nカスケード・ツールズ",
    "questions": [
      {
        "q": "What is the main purpose of the letter?",
        "choices": [
          "To inform customers about a product defect",
          "To announce a price reduction",
          "To request a product review",
          "To advertise a new pump model"
        ],
        "answer": 0,
        "explanation": "一部製品のコネクター不具合(fault)を知らせ、無償交換を案内している。製品の欠陥の通知が主目的。"
      },
      {
        "q": "What is indicated about the fault?",
        "choices": [
          "It cannot be fixed by the customer.",
          "It affects every unit that was sold.",
          "It requires professional repair.",
          "It is not a safety concern."
        ],
        "answer": 3,
        "explanation": "the issue poses no safety risk(安全上のリスクはない)が根拠。自分で簡単に取り付けられるとあるので(A)(C)は誤り。"
      },
      {
        "q": "The word \"dispatched\" in paragraph 3 is closest in meaning to",
        "choices": [
          "replaced",
          "delayed",
          "sent",
          "returned"
        ],
        "answer": 2,
        "explanation": "語彙問題。dispatched(発送された)= sent(C)。交換品を5営業日以内に送るという文脈から判断できる。"
      },
      {
        "q": "What is indicated about pumps made after March?",
        "choices": [
          "They still use a plastic hose connector.",
          "They do not need the replacement part.",
          "They come with a longer warranty.",
          "They are sold only in stores."
        ],
        "answer": 1,
        "explanation": "Units made after March use a redesigned metal connector and are not affected(3月より後の製造品は再設計された金属製コネクターで対象外)が根拠。(A)は本文の plastic hose connector をそのまま使ったひっかけで、対象となった1〜3月製造分の話。"
      }
    ]
  },
  {
    "id": "s4p7-11",
    "title": "ダブル 1(お知らせ+Eメール)",
    "passages": [
      {
        "docType": "Notice",
        "text": "BROOKFIELD COMMONS — Retail Units for Lease\nManaged by Halverson Property Group\n\nThree ground-floor retail units are available at Brookfield Commons, a busy shopping plaza on Maple Avenue.\n\n1. Unit 1 — 60 m² — $2,000/month\n2. Unit 2 — 90 m² — $2,900/month\n3. Unit 3 — 120 m² — $3,600/month\n\nAll leases require a security deposit equal to one month's rent, refundable at the end of the lease. A monthly common-area maintenance (CAM) charge of $300 applies to every unit, covering shared parking, exterior lighting, and landscaping.\n\nTenants who sign a three-year lease receive a 10% discount on their monthly rent (the CAM charge is not discounted). To arrange a viewing, contact Diane Halverson at leasing@halversonpg.com."
      },
      {
        "docType": "E-mail",
        "text": "From: Owen Brislin\nTo: leasing@halversonpg.com\nSubject: Unit inquiry — Brookfield Commons\nDate: August 12\n\nDear Ms. Halverson,\n\nI run a growing stationery and gift shop and am looking to open a second location at Brookfield Commons. I would need at least 100 m² to display my full range, so the largest unit looks like the best fit.\n\nI am prepared to commit to a three-year lease to take advantage of the discount you advertise. Before I arrange a viewing, could you confirm two things?\n\nFirst, is the shared parking well lit in the evenings? My current shop gets much of its trade after 6 P.M.\n\nSecond, are tenants permitted to install their own exterior signage?\n\nI look forward to hearing from you.\n\nBest regards,\nOwen Brislin"
      }
    ],
    "translation": "【お知らせ】ブルックフィールド・コモンズ——小売ユニット賃貸\nハルバーソン不動産グループ管理\n\nメープル通りの賑わうショッピングプラザ、ブルックフィールド・コモンズに1階の小売ユニットが3区画あります。\n\n1. ユニット1——60m²——月2,000ドル\n2. ユニット2——90m²——月2,900ドル\n3. ユニット3——120m²——月3,600ドル\n\n全ての賃貸契約に家賃1か月分の敷金(契約満了時に返還)が必要です。共用部維持管理費(CAM)月300ドルが全ユニットに適用され、共用駐車場・外部照明・造園を賄います。\n\n3年契約を結んだテナントは月家賃が10%割引になります(CAMは割引対象外)。内見のご予約はダイアン・ハルバーソン(leasing@halversonpg.com)まで。\n\n【Eメール】\n差出人:オーウェン・ブリスリン\n宛先:leasing@halversonpg.com\n件名:ユニットについての問い合わせ——ブルックフィールド・コモンズ\n日付:8月12日\n\nハルバーソン様\n\n成長中の文具・ギフト店を営んでおり、ブルックフィールド・コモンズに2号店を出したいと考えています。品ぞろえをすべて陳列するには最低100m²が必要で、一番広いユニットが最適に見えます。\n\n広告にある割引を利用するため、3年契約を結ぶ用意があります。内見を予約する前に2点確認させてください。\n\n1点目、共用駐車場は夜間よく照らされていますか? 現在の店は午後6時以降の来客が多いのです。\n\n2点目、テナントは自前の外部看板を設置できますか?\n\nご返信をお待ちしています。\n\nよろしくお願いいたします。\nオーウェン・ブリスリン",
    "questions": [
      {
        "q": "What does the notice indicate about all of the units?",
        "choices": [
          "They were recently renovated.",
          "They come with furniture included.",
          "They are located on the second floor.",
          "Each carries a monthly maintenance charge."
        ],
        "answer": 3,
        "explanation": "A monthly common-area maintenance (CAM) charge of $300 applies to every unit(全ユニットに月300ドルの維持管理費)が根拠。"
      },
      {
        "q": "Which unit will Mr. Brislin most likely lease?",
        "choices": [
          "Unit 1",
          "Unit 2",
          "Unit 3",
          "He will not lease any unit."
        ],
        "answer": 2,
        "explanation": "クロスリファレンス問題。メールの『最低100m²必要』とお知らせの区画一覧(120m²はユニット3のみ)を突き合わせると、条件を満たすのはユニット3。"
      },
      {
        "q": "How much will Mr. Brislin most likely pay in monthly rent, not counting the CAM charge?",
        "choices": [
          "$3,240",
          "$2,610",
          "$1,800",
          "$3,600"
        ],
        "answer": 0,
        "explanation": "クロスリファレンス(計算型)。ユニット3は月3,600ドル。彼は3年契約を結ぶので家賃が10%割引=3,600×0.9=3,240ドル。CAMは割引対象外だが設問は家賃のみを問うている。2,610ドルはユニット2、1,800ドルはユニット1を10%割引した額、3,600ドルは割引前の額で、いずれもひっかけ。"
      },
      {
        "q": "What is one thing Mr. Brislin asks about?",
        "choices": [
          "Whether the lease can be shortened",
          "Whether he may install his own signage",
          "Whether the parking is free of charge",
          "Whether he can reduce the deposit"
        ],
        "answer": 1,
        "explanation": "メール末尾の are tenants permitted to install their own exterior signage(自前の看板を設置できるか)が根拠。彼が尋ねたのは駐車場の照明であって料金ではないので(C)はひっかけ。"
      },
      {
        "q": "What is suggested about Mr. Brislin's business?",
        "choices": [
          "It sells food products.",
          "It has ten locations.",
          "It is about to close its first shop.",
          "It is busiest in the evening."
        ],
        "answer": 3,
        "explanation": "My current shop gets much of its trade after 6 P.M.(現店は午後6時以降の来客が多い)から、夕方に最も忙しいと分かる。"
      }
    ]
  },
  {
    "id": "s4p7-12",
    "title": "ダブル 2(広告+Eメール)",
    "passages": [
      {
        "docType": "Advertisement",
        "text": "THE HARBOR LEDGER — Print Advertising Rates\n\nReach over 40,000 readers across the Harbor region. Rates below are per insertion (one printed issue).\n\n1. Quarter page — $200\n2. Half page — $350\n3. Full page — $600\n\nDiscounts:\n- Book the same ad in four or more consecutive issues and save 15% on each insertion.\n- Non-profit organizations receive 10% off (not combinable with the multi-issue discount).\n\nAll ads must be submitted, print-ready, by the Wednesday before the Saturday edition. Our design team can create your ad for a one-time fee of $80. Contact ads@harborledger.com."
      },
      {
        "docType": "E-mail",
        "text": "From: Grace Lieu, Lieu Family Orchards\nTo: ads@harborledger.com\nSubject: Advertising our autumn harvest\nDate: September 1\n\nHello,\n\nWe run a fruit orchard and farm store and would like to advertise our autumn apple season in The Harbor Ledger. We're thinking of a half-page ad, and we'd like it to run for four consecutive Saturdays in October to cover the whole season.\n\nWe don't have a designer, so we would need your team to create the ad for us. Could you confirm the total cost, including design?\n\nAlso, do we need to send you our text and photos the same week the ad runs, or earlier?\n\nThanks,\nGrace Lieu"
      }
    ],
    "translation": "【広告】ザ・ハーバー・レジャー——紙面広告料金\n\nハーバー地域の4万人超の読者に届きます。以下の料金は1回の掲載(1号分)あたりです。\n\n1. 4分の1ページ——200ドル\n2. 2分の1ページ——350ドル\n3. 1ページ全面——600ドル\n\n割引:\n・同じ広告を4号以上連続で掲載すると、1回あたり15%割引。\n・非営利団体は10%割引(連続掲載割引との併用不可)。\n\n全ての広告は印刷可能な状態で、土曜版の前の水曜までにご提出ください。デザインチームによる広告作成は一律80ドルで承ります。お問い合わせは ads@harborledger.com。\n\n【Eメール】\n差出人:グレース・リュー(リュー家の果樹園)\n宛先:ads@harborledger.com\n件名:秋の収穫の宣伝\n日付:9月1日\n\nこんにちは。\n\n果樹園と農産物直売店を営んでおり、秋のリンゴのシーズンをザ・ハーバー・レジャーで宣伝したいと思っています。2分の1ページの広告を考えており、シーズン全体をカバーするため10月の4回連続の土曜に掲載したいです。\n\nデザイナーがいないので、御社のチームに広告を作成してもらう必要があります。デザイン込みの総額を確認いただけますか?\n\nまた、原稿と写真は掲載と同じ週に送ればよいですか、それとも早めですか?\n\nよろしくお願いします。\nグレース・リュー",
    "questions": [
      {
        "q": "What is indicated about The Harbor Ledger?",
        "choices": [
          "It offers only online advertising.",
          "It is published on Saturdays.",
          "It employs 40,000 people.",
          "It is a monthly magazine."
        ],
        "answer": 1,
        "explanation": "the Saturday edition(土曜版)や per insertion (one printed issue) から、土曜発行の新聞と分かる。40,000は読者数であり従業員数ではないので(C)はひっかけ。"
      },
      {
        "q": "In the advertisement, the word \"insertion\" is closest in meaning to",
        "choices": [
          "addition",
          "introduction",
          "placement",
          "repair"
        ],
        "answer": 2,
        "explanation": "語彙問題。per insertion (one printed issue) の insertion は『1回の掲載=placement(掲載・配置)』の意味。文字通りの『挿入・追加(addition)』ではない。"
      },
      {
        "q": "Which discount does Ms. Lieu's order qualify for?",
        "choices": [
          "The multi-issue discount",
          "The non-profit discount",
          "Both discounts",
          "No discount"
        ],
        "answer": 0,
        "explanation": "クロスリファレンス問題。広告の『4号以上連続で15%割引』と、メールの『10月の4回連続の土曜に掲載』を突き合わせる。果樹園は非営利ではないので連続掲載割引のみ。"
      },
      {
        "q": "What is the total cost of Ms. Lieu's advertising, including design?",
        "choices": [
          "$1,480",
          "$1,400",
          "$1,270",
          "$1,190"
        ],
        "answer": 2,
        "explanation": "クロスリファレンス(計算型)。2分の1ページ350ドルに15%割引=297.50ドル、それを4回で1,190ドル。デザイン料80ドル(一律)を足して1,270ドル。"
      },
      {
        "q": "What does Ms. Lieu ask about besides the cost?",
        "choices": [
          "The refund policy",
          "The deadline for submitting materials",
          "The size of the readership",
          "The paper's delivery area"
        ],
        "answer": 1,
        "explanation": "メール末尾の『原稿と写真は掲載と同じ週か、早めに送るのか』という質問が根拠。提出期限を尋ねている。"
      }
    ]
  },
  {
    "id": "s4p7-13",
    "title": "トリプル 1(作業指示書+Eメール+Eメール)",
    "passages": [
      {
        "docType": "Work order",
        "text": "HALLORAN INDUSTRIAL SERVICE — Work Order #WO-4412\nCustomer: Pinehurst Cabinet Works\nSite visit: March 18\nMachine: Trestle-9 panel saw (serial TR-2201)\nTechnician: Dana Ruiz\n\nWork performed: replaced a worn drive belt, realigned the blade carriage, and cleaned the dust extraction unit.\nLabor recorded: 6 hours\nParts used:\n1. Drive belt — list price $120\n2. Bearing kit — list price $80\n\nNote: customer holds a Gold service contract, renewed January 4. Invoice to follow."
      },
      {
        "docType": "E-mail 1",
        "text": "From: Colette Ivers, Pinehurst Cabinet Works\nTo: billing@halloranservice.com\nDate: March 19\n\nHello,\n\nThank you for sending Ms. Ruiz out at short notice. The panel saw has run without a single fault since her visit, and we were able to finish an order that was already behind.\n\nBefore your invoice arrives, I would like to understand the charges. Our Gold contract was renewed in January, but I have misplaced the summary of what it covers. Could you explain how the labor hours and the parts listed on work order #WO-4412 will be billed?\n\nOne other thing: our second saw has begun making a similar noise. Would you advise booking a visit for it now, or can it wait until our quiet period in the summer?\n\nRegards,\nColette Ivers"
      },
      {
        "docType": "E-mail 2",
        "text": "From: Halloran Industrial Service\nTo: Colette Ivers\nDate: March 19\n\nDear Ms. Ivers,\n\nI am glad the machine is running well. Here is how your Gold contract works: the first four labor hours of each site visit are included at no charge, and any hours beyond that are billed at $95 per hour. Parts are supplied at 10 percent off the list price, and travel to your site is free.\n\nThe technician recorded six hours on work order #WO-4412, so your invoice will show only the hours above the four that are included, together with the discounted parts.\n\nAs for your second saw, I would arrange a visit soon rather than wait. Our labor rate rises on April 1, and a small fault that spreads to the motor becomes far more expensive to put right.\n\nRegards,\nHalloran Industrial Service"
      }
    ],
    "translation": "【作業指示書】ハロラン工業サービス——作業指示書#WO-4412\n顧客:パインハースト・キャビネット工房\n訪問日:3月18日\n機械:トレッスル9型パネルソー(製造番号TR-2201)\n技術者:ダナ・ルイス\n\n実施作業:摩耗した駆動ベルトの交換、ブレードキャリッジの再調整、集塵ユニットの清掃。\n記録した作業時間:6時間\n使用部品:\n1. 駆動ベルト——定価120ドル\n2. ベアリングキット——定価80ドル\n\n備考:顧客はゴールド保守契約(1月4日更新)を保有。請求書は後日送付。\n\n【Eメール1】(3月19日、アイヴァース→ハロラン)\nこんにちは。急なお願いにルイスさんを派遣いただきありがとうございました。訪問以来、パネルソーは一度も不具合なく動いており、遅れていた注文も仕上げられました。請求書が届く前に、料金の内訳を理解しておきたいと思います。ゴールド契約は1月に更新しましたが、契約内容の要約を紛失してしまいました。作業指示書#WO-4412の作業時間と部品がどのように請求されるか、ご説明いただけますか? もう1点、2台目のソーが似た音を出し始めました。今すぐ訪問を予約したほうがよいでしょうか、それとも夏の閑散期まで待てますか? よろしくお願いします。コレット・アイヴァース。\n\n【Eメール2】(3月19日、ハロラン→アイヴァース)\nアイヴァース様、機械が順調とのことで何よりです。ゴールド契約の仕組みは次のとおりです。各訪問の最初の4時間分の作業は無料で含まれ、それを超える時間は1時間95ドルで請求します。部品は定価から10%引きでご提供し、現場までの出張は無料です。作業指示書#WO-4412では技術者が6時間を記録しているので、請求書には含まれる4時間を超えた分と、割引後の部品代のみが載ります。2台目のソーについては、待たずに早めの訪問予約をお勧めします。4月1日から当社の作業料金が上がりますし、小さな不具合がモーターに広がれば、直す費用ははるかに高くつきます。ハロラン工業サービス。",
    "questions": [
      {
        "q": "What is indicated about the March 18 visit?",
        "choices": [
          "Two technicians were sent.",
          "A replacement machine was delivered.",
          "It continued over two days.",
          "The dust extraction unit was cleaned."
        ],
        "answer": 3,
        "explanation": "作業指示書の Work performed に cleaned the dust extraction unit(集塵ユニットの清掃)とある。技術者はダナ・ルイス1名、作業は6時間なので他は誤り。"
      },
      {
        "q": "What does Ms. Ivers say about the panel saw?",
        "choices": [
          "It has worked without trouble since the visit.",
          "It is due to be replaced next year.",
          "It is still too noisy to use.",
          "It was repaired by her own staff."
        ],
        "answer": 0,
        "explanation": "The panel saw has run without a single fault since her visit(訪問以来一度も不具合がない)が根拠。似た音がするのは『2台目』のソーの話なので(C)はひっかけ。"
      },
      {
        "q": "How many labor hours will appear on the invoice for the March 18 visit?",
        "choices": [
          "None",
          "Two",
          "Four",
          "Six"
        ],
        "answer": 1,
        "explanation": "クロスリファレンス問題。作業指示書の『記録した作業時間6時間』と、Eメール2の『各訪問の最初の4時間は無料で含まれる』を突き合わせる。請求されるのは6−4=2時間分。"
      },
      {
        "q": "What does Halloran Industrial Service recommend about the second saw?",
        "choices": [
          "Replacing it with a newer model",
          "Having it checked by in-house staff",
          "Arranging a service visit soon",
          "Waiting until the summer"
        ],
        "answer": 2,
        "explanation": "Eメール2の I would arrange a visit soon rather than wait(待たずに早めに訪問を手配するほうがよい)が根拠。4月1日の値上げと、放置による修理費の増大が理由。"
      },
      {
        "q": "How much will Pinehurst Cabinet Works most likely be charged for the March 18 visit?",
        "choices": [
          "$370",
          "$390",
          "$570",
          "$180"
        ],
        "answer": 0,
        "explanation": "クロスリファレンス(計算型)。超過分2時間×95ドル=190ドル。部品は定価120+80=200ドルの10%引きで180ドル。出張は無料なので合計370ドル。部品割引を忘れると390ドル、無料の4時間を見落として6時間分を計算すると570ドルになる。"
      }
    ]
  },
  {
    "id": "s4p7-14",
    "title": "トリプル 2(価格表+Eメール+Eメール)",
    "passages": [
      {
        "docType": "Price list",
        "text": "VALLEY HARVEST WHOLESALE — Weekly Price List (Week of June 9)\nPrices are per case. Minimum for free delivery: 10 cases.\n\n1. Tomatoes — $18/case\n2. Bell peppers — $22/case\n3. Romaine lettuce — $14/case\n4. Cucumbers — $12/case\n5. Strawberries — $30/case\n\nOrders placed by 4 P.M. are delivered the next morning. Deliveries under 10 cases incur a $20 delivery fee. Prices are held for the full week regardless of market changes."
      },
      {
        "docType": "E-mail 1",
        "text": "From: Amara Sène, Birch & Ember Restaurant\nTo: sales@valleyharvest.com\nDate: June 10\n\nHello,\n\nPlease prepare our weekly order:\n- 4 cases of tomatoes\n- 3 cases of bell peppers\n- 3 cases of romaine lettuce\n\nThat comes to 10 cases, so I understand delivery is free. We'd like it tomorrow morning if possible — I'm sending this at 2 P.M. today.\n\nOne question: are your strawberries local this week? If so, please add 2 cases and let me know the new total.\n\nThanks,\nAmara Sène"
      },
      {
        "docType": "E-mail 2",
        "text": "From: Valley Harvest Wholesale\nTo: Amara Sène\nDate: June 10\n\nDear Ms. Sène,\n\nThank you for your order. As it arrived before 4 P.M., it will be delivered tomorrow morning.\n\nGood news on the strawberries: yes, they are from Dellwood Farm just outside town this week, so I have added the 2 cases you requested. Your order now totals 12 cases, which keeps your delivery free.\n\nOne note: romaine lettuce sold out this morning. With your approval, I can substitute green-leaf lettuce at the same price, or simply remove it from the order. Please let me know which you prefer.\n\nBest,\nValley Harvest Wholesale"
      }
    ],
    "translation": "【価格表】バレー・ハーベスト卸売——週間価格表(6月9日の週)\n価格はケース単位。無料配送の最低数:10ケース。\n\n1. トマト——1ケース18ドル\n2. ピーマン——1ケース22ドル\n3. ロメインレタス——1ケース14ドル\n4. きゅうり——1ケース12ドル\n5. いちご——1ケース30ドル\n\n午後4時までの注文は翌朝配送。10ケース未満の配送には20ドルの配送料がかかります。価格は市況にかかわらず1週間据え置きます。\n\n【Eメール1】(6月10日、セネ→バレー・ハーベスト)\nこんにちは。週次の注文をお願いします:トマト4ケース、ピーマン3ケース、ロメインレタス3ケース。合計10ケースなので配送は無料と理解しています。可能なら明日の朝に。本日午後2時に送っています。1点質問:今週のいちごは地元産ですか? そうなら2ケース追加して、新しい合計を教えてください。よろしく、アマラ・セネ。\n\n【Eメール2】(6月10日、バレー・ハーベスト→セネ)\nセネ様、ご注文ありがとうございます。午後4時より前に届いたので、明日の朝に配送します。いちごについて朗報です。はい、今週は町外れのデルウッド農園産なので、ご希望の2ケースを追加しました。ご注文は合計12ケースとなり、配送は引き続き無料です。1点、ロメインレタスは今朝売り切れました。ご承認いただければ同価格でグリーンリーフレタスに差し替えるか、注文から外すこともできます。どちらがよいかお知らせください。バレー・ハーベスト卸売。",
    "questions": [
      {
        "q": "What is indicated about the price list?",
        "choices": [
          "Prices exclude sales tax.",
          "Prices already include a delivery fee.",
          "Prices are fixed for the week.",
          "Prices change every day."
        ],
        "answer": 2,
        "explanation": "Prices are held for the full week regardless of market changes(市況に関わらず1週間据え置き)が根拠。"
      },
      {
        "q": "Why does Ms. Sène expect free delivery?",
        "choices": [
          "She placed the order early in the day.",
          "Her order reaches the free-delivery minimum.",
          "She applied a discount coupon.",
          "Her restaurant is a regular customer."
        ],
        "answer": 1,
        "explanation": "クロスリファレンス問題。価格表『無料配送は10ケースから』と、メールの『合計10ケースなので無料と理解』を突き合わせる。"
      },
      {
        "q": "Based on Ms. Sène's original request plus the strawberries, what is the total cost of the order?",
        "choices": [
          "$260",
          "$180",
          "$240",
          "$300"
        ],
        "answer": 2,
        "explanation": "クロスリファレンス(計算型)。トマト4×18=72、ピーマン3×22=66、レタス3×14=42、いちご2×30=60。合計240ドル。差し替えは同価格、12ケースで配送料もなし。"
      },
      {
        "q": "What problem does Valley Harvest mention?",
        "choices": [
          "An item is out of stock.",
          "A delivery will be delayed.",
          "Prices have gone up.",
          "The minimum order was not met."
        ],
        "answer": 0,
        "explanation": "romaine lettuce sold out this morning(ロメインレタスが売り切れ)が根拠。在庫切れの品がある。"
      },
      {
        "q": "What is suggested about the strawberries?",
        "choices": [
          "They are imported from abroad.",
          "They are locally grown.",
          "They are no longer available.",
          "They cost $20 per case."
        ],
        "answer": 1,
        "explanation": "they are from Dellwood Farm just outside town(町外れのデルウッド農園産)から、地元産と分かる。メールの『local?』への肯定の返答。"
      }
    ]
  },
  {
    "id": "s4p7-15",
    "title": "トリプル 3(プラン一覧+Eメール+Eメール)",
    "passages": [
      {
        "docType": "Information sheet",
        "text": "KEYSTONE INSURANCE — Small Business Plans (Annual Premiums)\n\n1. Basic — $600/year — property damage up to $50,000\n2. Standard — $960/year — property damage up to $100,000, plus business-interruption cover\n3. Premium — $1,500/year — property damage up to $200,000, business-interruption cover, plus equipment-breakdown cover\n\nAll plans include public-liability cover. Businesses that install an approved alarm system qualify for a 15% discount on the annual premium. Pay annually rather than monthly to avoid a 5% installment surcharge."
      },
      {
        "docType": "E-mail 1",
        "text": "From: Nils Ostberg, Ostberg Woodworks\nTo: quotes@keystoneinsurance.com\nDate: November 2\n\nHello,\n\nI run a small furniture workshop and am comparing your plans. My main concern is that if a fire or flood shut my workshop for a few weeks, I'd lose income while I recovered. I also rely on several expensive machines that would be costly to repair.\n\nWhich plan covers both of those situations? I have a monitored alarm system installed, and I would pay for the year up front.\n\nThanks,\nNils Ostberg"
      },
      {
        "docType": "E-mail 2",
        "text": "From: Keystone Insurance\nTo: Nils Ostberg\nDate: November 3\n\nDear Mr. Ostberg,\n\nBased on your needs — cover for lost income during a closure and for machine repairs — the Premium plan is the right fit, as it is the only plan that includes equipment-breakdown cover.\n\nSince you have a monitored alarm and will pay annually, the 15% alarm discount applies and you avoid the installment surcharge. I have applied the discount to your quote and will e-mail the policy documents once you confirm.\n\nPlease let me know if you would like to proceed.\n\nBest regards,\nKeystone Insurance"
      }
    ],
    "translation": "【プラン一覧】キーストーン保険——小規模事業者向けプラン(年間保険料)\n\n1. ベーシック——年600ドル——物損補償5万ドルまで\n2. スタンダード——年960ドル——物損補償10万ドルまで、加えて事業中断補償\n3. プレミアム——年1,500ドル——物損補償20万ドルまで、事業中断補償、加えて設備故障補償\n\n全プランに賠償責任補償が含まれます。承認済みの警報システムを設置した事業者は、年間保険料が15%割引になります。月払いでなく年払いにすると5%の分割割増を回避できます。\n\n【Eメール1】(11月2日、オストベリ→キーストーン)\nこんにちは。小さな家具工房を営んでおり、プランを比較しています。一番の心配は、火事や洪水で工房が数週間閉まった場合、復旧の間に収入を失うことです。また、修理費のかさむ高価な機械を何台も使っています。両方に対応するのはどのプランですか? 監視付きの警報システムを設置しており、年払いにするつもりです。よろしく、ニルス・オストベリ。\n\n【Eメール2】(11月3日、キーストーン→オストベリ)\nオストベリ様、ご要望——閉鎖中の逸失収入と機械修理の補償——を踏まえると、プレミアムプランが最適です。設備故障補償を含むのはこのプランだけだからです。監視付き警報があり年払いなさるので、15%の警報割引が適用され、分割割増も回避できます。お見積りに割引を反映しました。ご確認いただき次第、証券書類をメールします。お進めになるかお知らせください。キーストーン保険。",
    "questions": [
      {
        "q": "What do all of the plans include?",
        "choices": [
          "Public-liability cover",
          "A free alarm system",
          "Business-interruption cover",
          "Equipment-breakdown cover"
        ],
        "answer": 0,
        "explanation": "All plans include public-liability cover(全プランに賠償責任補償)が根拠。設備故障や事業中断は上位プランのみ。"
      },
      {
        "q": "Which plan will Mr. Ostberg most likely choose?",
        "choices": [
          "Basic",
          "Premium",
          "Standard",
          "None of them"
        ],
        "answer": 1,
        "explanation": "クロスリファレンス問題。メールの『逸失収入と機械修理の両方』という要望と、一覧の『設備故障補償を含むのはプレミアムのみ』を突き合わせると、プレミアムが該当。"
      },
      {
        "q": "How much will Mr. Ostberg most likely pay for the year?",
        "choices": [
          "$816",
          "$960",
          "$1,275",
          "$1,500"
        ],
        "answer": 2,
        "explanation": "クロスリファレンス(計算型)。プレミアム1,500ドルに、警報割引15%を適用=1,500×0.85=1,275ドル。年払いなので分割割増はかからない。816ドルはスタンダードを15%割引した額、960ドルは割引前のスタンダード、1,500ドルは割引前のプレミアムで、いずれもひっかけ。"
      },
      {
        "q": "What is one reason Mr. Ostberg avoids an extra charge?",
        "choices": [
          "He chose the cheapest plan.",
          "He is a returning customer.",
          "He runs his business from home.",
          "He will pay for the full year at once."
        ],
        "answer": 3,
        "explanation": "Pay annually ... to avoid a 5% installment surcharge(年払いで分割割増を回避)と、メールの『年払いにする』を組み合わせる。"
      },
      {
        "q": "What does Keystone Insurance ask Mr. Ostberg to do?",
        "choices": [
          "Visit the office in person",
          "Confirm before receiving the documents",
          "Switch to monthly payments",
          "Install an alarm system"
        ],
        "answer": 1,
        "explanation": "will e-mail the policy documents once you confirm ... let me know if you would like to proceed(確認・承諾の返信を求めている)が根拠。警報はすでに設置済みなので(D)は誤り。"
      }
    ]
  }
];
