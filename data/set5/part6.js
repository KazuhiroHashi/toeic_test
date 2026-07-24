// Part 6: 長文穴埋め問題
window.TOEIC_DATA_5 = window.TOEIC_DATA_5 || {};
window.TOEIC_DATA_5.part6 = [
  {
    id: "s5p6-01",
    title: "文書 1(Eメール)",
    docType: "E-mail",
    passage: "To: Renata Silva\nFrom: PrintCraft Studio\nSubject: Your Brochure Order — Confirmation\n\nDear Ms. Silva,\n\nThank you for choosing PrintCraft Studio for your printing needs. We are writing to confirm that we have received your order for 500 full-color brochures for the Riverside Business Expo. [1]\n\nBefore we begin printing, we will send you a digital proof for your approval. Please review it [2] and let us know of any changes. Printing will start only after we receive your written confirmation.\n\nYour order is [3] to be ready for pickup at our Oak Street location by Friday, May 22. If you would prefer delivery, we can arrange it for a small additional fee.\n\n[4] we look forward to helping make your event a success.\n\nSincerely,\nThe PrintCraft Team",
    translation: "宛先:レナータ・シルバ\n差出人:プリントクラフト・スタジオ\n件名:パンフレットご注文の確認\n\nシルバ様\n\nこのたびは印刷のご用命にプリントクラフト・スタジオをお選びいただきありがとうございます。リバーサイド・ビジネス博覧会向けのフルカラーパンフレット500部のご注文を承りましたことを確認いたします。税込みの合計金額は420ドルです。\n\n印刷を始める前に、ご確認用のデジタル校正刷りをお送りします。よくご確認のうえ、変更点があればお知らせください。印刷はお客様からの書面でのご確認をいただいてから開始いたします。\n\nご注文品は5月22日(金)までにオーク・ストリートの当店でお受け取りいただける見込みです。配達をご希望の場合は、少額の追加料金で手配いたします。\n\nそれまでの間、貴社のイベント成功のお手伝いができることを楽しみにしております。\n\n敬具\nプリントクラフト・スタジオ一同",
    questions: [
      {
        num: 1,
        choices: [
          "The total cost, including tax, comes to $420.",
          "Please return any damaged items within one week.",
          "The keynote speech will be held in the main hall.",
          "We are currently unable to accept credit cards."
        ],
        answer: 0,
        explanation: "文挿入問題。直前で『500部の注文を承った』と確認しているので、その注文に関する具体情報=合計金額を伝える(A)が自然。(B)返品、(C)基調講演、(D)カード不可はいずれも注文確認の流れと無関係。"
      },
      {
        num: 2,
        choices: ["care", "careful", "carefully", "caring"],
        answer: 2,
        explanation: "品詞問題。動詞 review(確認する)を修飾するのは副詞 carefully(注意深く)。care は名詞・動詞、careful は形容詞で動詞は修飾できない。"
      },
      {
        num: 3,
        choices: ["expects", "expected", "expecting", "expectation"],
        answer: 1,
        explanation: "態の問題。主語 Your order は『期待される』側なので be動詞+過去分詞の受動態 is expected to be(〜になる見込みである)。expecting だと『注文が期待している』となり不自然。"
      },
      {
        num: 4,
        choices: ["For example,", "On the contrary,", "Nevertheless,", "In the meantime,"],
        answer: 3,
        explanation: "接続副詞の問題。校正・受け取りまでの流れを述べた後の締めの一文なので In the meantime(それまでの間・さしあたり)。例示・逆接の関係ではない。"
      }
    ]
  },
  {
    id: "s5p6-02",
    title: "文書 2(お知らせ)",
    docType: "Notice",
    passage: "Maplewood Community Pool — Summer Schedule\n\nThe Maplewood Community Pool will open for the summer season on Saturday, June 6. This year, we are pleased to offer [1] hours, staying open until 8:00 P.M. on weekdays to give families more time to enjoy the water.\n\nSwimming lessons for children and adults will be available throughout the summer. Interested residents can register online or at the front office beginning May 25. Space is [2] , so we encourage you to sign up early.\n\n[3]\n\nFor everyone's safety, all swimmers must shower before entering the pool, and children under twelve must be [4] by an adult at all times. We look forward to seeing you at the pool this summer.",
    translation: "メープルウッド・コミュニティプール——夏季スケジュール\n\nメープルウッド・コミュニティプールは6月6日(土)より夏季営業を開始します。今年は営業時間を延長し、平日は午後8時まで開場して、ご家族が水遊びを楽しむ時間を増やせるようにいたします。\n\n子ども向け・大人向けの水泳教室を夏の間を通して開催します。ご関心のある地域の皆さまは、5月25日よりオンラインまたは受付にてお申し込みいただけます。定員に限りがありますので、お早めのお申し込みをおすすめします。\n\nこの夏は、浅いプールのそばに日よけ付きの休憩スペースも新設しました。\n\n安全のため、すべての利用者は入水前にシャワーを浴びてください。また、12歳未満のお子様は常に大人の付き添いが必要です。この夏、プールで皆さまにお会いできることを楽しみにしております。",
    questions: [
      {
        num: 1,
        choices: ["extend", "extended", "extension", "extensive"],
        answer: 1,
        explanation: "語彙・品詞問題。名詞 hours を修飾する形容詞で『延長された』を表すのは過去分詞形の extended hours(延長営業時間)。extensive(広範な)は意味が合わず、extend(動詞)・extension(名詞)は名詞を直接修飾できない。"
      },
      {
        num: 2,
        choices: ["limit", "limitless", "limited", "limiting"],
        answer: 2,
        explanation: "語法問題。Space is limited(定員・空きに限りがある)は定型表現で、早めの申し込みを促す理由になる。limitless(無限の)は逆の意味、limit は名詞・動詞。"
      },
      {
        num: 3,
        choices: [
          "The pool will remain closed for the entire summer season.",
          "Lifeguards will no longer be on duty at the pool.",
          "Annual memberships to the art museum are now on sale.",
          "This summer, we have also added a shaded seating area near the shallow end."
        ],
        answer: 3,
        explanation: "文挿入問題。直前が水泳教室の案内、直後が安全上の注意なので、施設の新設備を紹介する(D)が自然につながる。(A)通年休館・(B)監視員不在は施設案内と矛盾し、(C)美術館はこの文書と無関係。"
      },
      {
        num: 4,
        choices: ["accompanied", "attended", "gathered", "informed"],
        answer: 0,
        explanation: "語彙問題。be accompanied by an adult(大人に付き添われる)は子どもの同伴を表す定型。attended by は人の世話・出席、gathered(集められた)・informed(知らされた)は文意に合わない。"
      }
    ]
  },
  {
    id: "s5p6-03",
    title: "文書 3(記事)",
    docType: "Article",
    passage: "MetroLink to Introduce Electric Buses\n\nFAIRVIEW (April 2) — MetroLink, the regional bus operator serving Fairview and its suburbs, announced on Monday that it [1] twenty electric buses to its fleet by the end of the year.\n\nThe new vehicles will replace older diesel models on the city's busiest routes. According to the company, each electric bus produces no direct emissions and runs far more [2] than the diesel buses currently in use.\n\n\"Riders have told us they want cleaner, quieter transportation,\" said MetroLink spokesperson Helen Ward. [3] The company estimates that the switch will cut its annual fuel costs by nearly a third.\n\nCharging stations for the new buses [4] at the main depot on Grand Avenue over the summer. MetroLink expects the first electric buses to enter service in September.",
    translation: "メトロリンク、電気バスを導入へ\n\nフェアビュー(4月2日)——フェアビューとその近郊を運行する地域バス事業者メトロリンクは月曜日、年末までに20台の電気バスを車両に加えると発表した。\n\n新車両は、市内の最も混雑する路線で旧型のディーゼル車に取って代わる。同社によると、各電気バスは直接的な排出ガスを一切出さず、現在使われているディーゼルバスよりはるかに静かに走行するという。\n\n『利用者からは、よりクリーンで静かな交通機関を望む声が寄せられています』とメトロリンクの広報担当ヘレン・ウォード氏は語った。この転換は、二酸化炭素排出量を削減するという市のより広範な計画の一環である。同社は、この切り替えにより年間の燃料費が3分の1近く削減されると見込んでいる。\n\n新型バス用の充電ステーションは、この夏にグランド・アベニューの主要車庫に設置される予定だ。メトロリンクは、最初の電気バスが9月に運行を開始すると見込んでいる。",
    questions: [
      {
        num: 1,
        choices: ["added", "has added", "will add", "adding"],
        answer: 2,
        explanation: "時制問題。文末に by the end of the year(年末までに)という未来を表す語句があるので未来形 will add。過去形 added・現在完了 has added は時制が合わない。"
      },
      {
        num: 2,
        choices: ["quiet", "quietly", "quieter", "quietest"],
        answer: 1,
        explanation: "品詞問題。動詞 runs を修飾するのは副詞。直前の more と組み合わさり far more quietly(はるかに静かに)となる。quieter は比較級で more と重複するため不可、quiet は形容詞。"
      },
      {
        num: 3,
        choices: [
          "The transition is part of the city's broader plan to reduce carbon emissions.",
          "MetroLink has decided to end all bus service in the region.",
          "The older diesel buses will be repainted a brighter color.",
          "One-way ticket prices will triple starting next week."
        ],
        answer: 0,
        explanation: "文挿入問題。直前の『クリーンで静かな交通機関を望む声』という発言に続き、市の脱炭素計画の一環だと述べる(A)が文脈に合う。(B)全路線廃止・(D)運賃3倍は記事(導入拡大)と矛盾し、(C)塗装は無関係。"
      },
      {
        num: 4,
        choices: ["installing", "were installed", "have been installed", "will be installed"],
        answer: 3,
        explanation: "態と時制の問題。主語 Charging stations は設置される側なので受動態、かつ over the summer(この夏に)という未来なので will be installed。were installed・have been installed は過去・完了で時制が合わない。"
      }
    ]
  },
  {
    id: "s5p6-04",
    title: "文書 4(社内連絡)",
    docType: "Memo",
    passage: "To: All Staff\nFrom: Office of the Director\nSubject: New Hybrid Work Schedule\nDate: June 10\n\nBeginning July 1, Brightwater Consulting will adopt a hybrid work schedule for all office employees. Under the new arrangement, staff will work from the office three days a week and remotely for the [1] two.\n\nEach team may choose which days its members come into the office, [2] at least one of those days is a Monday or Friday. Managers should confirm their team's schedule with the Human Resources department by June 25.\n\n[3] Employees who need special arrangements, such as a fully remote schedule, should discuss their situation with their supervisor.\n\nWe believe this policy will improve work-life balance while [4] the collaboration that in-person meetings provide. Thank you for helping us make this transition smoothly.",
    translation: "宛先:全スタッフ\n差出人:所長室\n件名:新しいハイブリッド勤務スケジュール\n日付:6月10日\n\n7月1日より、ブライトウォーター・コンサルティングは全オフィス勤務従業員を対象にハイブリッド勤務スケジュールを導入します。新しい取り決めのもとでは、スタッフは週3日オフィスで、残り2日は在宅で勤務します。\n\n各チームはメンバーが出社する曜日を選べますが、そのうち少なくとも1日は月曜か金曜であることを条件とします。マネージャーは6月25日までに人事部へチームのスケジュールを確認してください。\n\nこの変化に慣れるには時間がかかることは承知しています。完全在宅など特別な対応が必要な従業員は、上司に相談してください。\n\nこの方針は、対面の会議がもたらす協働を維持しつつ、ワークライフバランスを改善するものと考えています。この移行を円滑に進めるためのご協力に感謝します。",
    questions: [
      {
        num: 1,
        choices: ["remain", "remained", "remaining", "remainder"],
        answer: 2,
        explanation: "品詞問題。名詞 two(残りの2日)を前から修飾するのは現在分詞 remaining(残りの)。remainder は名詞、remain・remained は名詞を直接修飾できない。"
      },
      {
        num: 2,
        choices: ["provided that", "in order to", "as well as", "rather than"],
        answer: 0,
        explanation: "接続表現の問題。後ろに主語+動詞の節(at least one of those days is …)が続き『〜という条件で』という意味になるので provided that(〜であれば)。in order to は不定詞、as well as・rather than は節を導けない。"
      },
      {
        num: 3,
        choices: [
          "The company will be closing all of its offices permanently.",
          "We understand that adjusting to a new routine may take time.",
          "All employees must now work from the office five days a week.",
          "The annual company picnic has been canceled."
        ],
        answer: 1,
        explanation: "文挿入問題。直後の『特別な対応が必要な人は上司に相談を』へ自然につながるのは、新制度への移行に理解を示す(B)。(A)全オフィス閉鎖・(C)週5出社はハイブリッド制と矛盾し、(D)ピクニック中止は無関係。"
      },
      {
        num: 4,
        choices: ["maintain", "maintains", "maintained", "maintaining"],
        answer: 3,
        explanation: "動詞の形の問題。接続詞 while の後で分詞構文となり、while (we are) maintaining … の形で maintaining(〜を維持しながら)。定形動詞 maintain・maintains・maintained は while の直後のこの形に合わない。"
      }
    ]
  }
];
