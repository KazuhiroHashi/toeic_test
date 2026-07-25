// Part 6: 長文穴埋め問題
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part6 = [
  {
    id: "p6-01",
    title: "文書 1(Eメール)",
    docType: "E-mail",
    passage: "To: All Building A Staff\nFrom: Facilities Management\nSubject: Elevator service on Saturday, June 14\nDate: June 2\n\nDear Colleagues,\n\nBoth of the main elevators in Building A will be shut down on Saturday, June 14, so that their annual safety [1] can be carried out. The technicians expect to start at 7:00 A.M. and to finish by three o'clock that afternoon.\n\nUntil the work is complete, please use the stairs or the service elevator at the east end of the lobby. [2] , the service elevator is much smaller than the two it is replacing, so waiting times are likely to be longer than usual.\n\nAnyone who [3] to move heavy equipment between floors on that day should let our office know by June 10 so that we can reserve the service elevator. [4] \n\nWe apologize for the disruption and thank you for your patience.\n\nFacilities Management",
    translation: "宛先:A棟の全スタッフ\n差出人:施設管理部\n件名:6月14日(土)のエレベーター作業\n日付:6月2日\n\n各位\n\n6月14日(土)、A棟のメインエレベーター2基は、年次の安全点検を実施するため運転を停止します。技術者は午前7時に作業を開始し、同日午後3時までに終える見込みです。\n\n作業が終わるまでは、階段またはロビー東端の業務用エレベーターをご利用ください。ただし、業務用エレベーターは代わりを務める2基よりかなり小さいため、待ち時間が通常より長くなる見込みです。\n\n当日、階をまたいで重量物を運ぶ必要がある方は、業務用エレベーターを確保できるよう、6月10日までに当部までご連絡ください。その日以降のご依頼はお受けできない場合があります。\n\nご迷惑をおかけしますが、ご協力に感謝いたします。\n\n施設管理部",
    questions: [
      {
        num: 1,
        choices: ["expansion", "installation", "relocation", "inspection"],
        answer: 3,
        explanation: "語彙問題。エレベーターを一日止めて技術者が行う annual safety 〜 なので『年次の安全点検』を表す (D) inspection が正解。(A) expansion(拡張)、(B) installation(設置)、(C) relocation(移転)はいずれも safety と結びつかず、8時間で終わる作業でもない。"
      },
      {
        num: 2,
        choices: ["Therefore", "Meanwhile", "However", "For instance"],
        answer: 2,
        explanation: "接続副詞。空所の前は『階段か業務用エレベーターを使ってください』という指示、後ろは『その業務用エレベーターは小さく待ち時間が長い』という但し書き。指示に対して注意を付け加える流れなので逆接の (C) However。(A) Therefore は因果関係、(B) Meanwhile は同時進行、(D) For instance は例示で、いずれも前後関係に合わない。空所を含む文だけでは決まらず、前の文を読む必要がある。"
      },
      {
        num: 3,
        choices: ["need", "needs", "needing", "to need"],
        answer: 1,
        explanation: "関係代名詞 who の後ろに入る動詞。先行詞は Anyone で単数扱いなので (B) needs。(A) need は複数主語用。(C) needing、(D) to need は関係詞節の述語動詞になれない。文全体の動詞は後ろの should let なので、空所は関係詞節の中だと見抜くことがポイント。"
      },
      {
        num: 4,
        choices: [
          "Requests made after that date cannot be guaranteed.",
          "The stairwell will also be closed for repainting that weekend.",
          "The main elevators were replaced two years ago and require no servicing.",
          "Parking in the north lot will be free on weekends."
        ],
        answer: 0,
        explanation: "文挿入問題。直前が『6月10日までにご連絡を』という締切の依頼なので、その期限を補足する (A)『その日以降の依頼は確約できません』が自然。that date が June 10 を指す。(B) は『階段を使ってください』という前段の指示と矛盾する。(C) は点検を行うという文書全体の前提と矛盾する。(D) は話題が無関係。"
      }
    ]
  },
  {
    id: "p6-02",
    title: "文書 2(お知らせ)",
    docType: "Notice",
    passage: "Greenfield Public Library\nNew Online Reservation Service\n\nBeginning October 1, members will be able to reserve books and meeting rooms through the library's Web site. [1] , such requests could be made only at the front desk or by telephone during opening hours.\n\nTo get started, log in with the number printed on your library card and choose a password. Meeting rooms may be booked up to thirty days [2] , and a booking can be cancelled at any time before the day itself.\n\n[3] As soon as one of them is returned, the member who has waited longest receives an e-mail, and the item is kept at the front desk for seven days.\n\nThe library hopes that the service will make its collection far more [4] to residents who cannot come in during the day.",
    translation: "グリーンフィールド公立図書館\n新オンライン予約サービス\n\n10月1日より、会員は当館ウェブサイトから書籍と会議室を予約できるようになります。これまでは、こうした申し込みは開館時間中にカウンターまたは電話でしか行えませんでした。\n\n利用を始めるには、図書館カードに印字された番号でログインし、パスワードを設定してください。会議室は30日先まで予約でき、予約は当日前ならいつでも取り消せます。\n\nすでに貸出中の資料についても、予約待ちリストに加わることができるようになります。そのうちの1点が返却され次第、最も長く待っている会員にEメールが届き、その資料はカウンターで7日間取り置かれます。\n\n当館は、このサービスによって、日中に来館できない地域の方々にとって蔵書がはるかに利用しやすくなることを期待しています。",
    questions: [
      {
        num: 1,
        choices: ["Nevertheless", "Likewise", "Previously", "As a result"],
        answer: 2,
        explanation: "接続副詞。前の文は『10月1日からウェブで予約できるようになる』という未来の話、空所の後ろは could be made という過去形で『カウンターか電話でしかできなかった』。新旧の対比なので (C) Previously(これまでは)。(A) Nevertheless は逆接だが新旧の時間差を表せない。(B) Likewise は同様、(D) As a result は結果で、いずれも文脈に合わない。動詞の時制が手がかりになる。"
      },
      {
        num: 2,
        choices: ["at once", "in person", "on time", "in advance"],
        answer: 3,
        explanation: "イディオム。up to thirty days in advance で『30日前から(30日先まで)』。予約の文脈での定番表現なので (D)。(A) at once(直ちに)、(B) in person(直接出向いて)、(C) on time(時間どおりに)はいずれも thirty days と結びつかない。"
      },
      {
        num: 3,
        choices: [
          "Members will also be able to join the waiting list for titles that are already checked out.",
          "The system will also suggest new arrivals based on your borrowing history.",
          "Meeting rooms may be reserved for a maximum of two hours a day.",
          "Library cards issued before 2015 must be replaced at the front desk."
        ],
        answer: 0,
        explanation: "文挿入問題(難問)。決め手は直後の文の one of them と the member who has waited longest。them は『返却され得るもの=すでに貸出中の資料』の複数でなければならず、しかも『最も長く待っている会員』が成立するには待ちの順番、つまり waiting list が先に出ている必要がある。両方を満たすのは (A) だけ。(B) の new arrivals も複数の資料だが待機列がないため who has waited longest が宙に浮く。(C) の会議室は returned(返却)されない。(D) のカードは replaced であって returned ではない。指示語の対応で1つに絞るタイプ。"
      },
      {
        num: 4,
        choices: ["access", "accessible", "accessibly", "accessing"],
        answer: 1,
        explanation: "make + 目的語(its collection)+ 補語 の第5文型。補語には形容詞が入るので (B) accessible。直前の far more は形容詞・副詞の比較級を強める語で、ここでは補語の形容詞を修飾している。(A) は名詞、(C) は副詞、(D) は動名詞・現在分詞で補語にならない。"
      }
    ]
  },
  {
    id: "p6-03",
    title: "文書 3(記事)",
    docType: "Article",
    passage: "Local Bakery to Open Second Shop\n\nRIVERTON (May 3) — Sunrise Bakery, the family-run shop that has stood on Main Street for ten years, [1] a second branch at the Riverton Shopping Plaza next month.\n\nOwner Maria Gonzalez credits her grandfather, [2] recipes she still follows, with much of the shop's success. She opened the original store by herself in a rented room barely large enough for one oven. \"Customers on the west side of town kept asking us to come to them,\" she said. \"This spring we finally found a place big enough to say yes.\"\n\nThe second shop will be nearly twice the size of the first and will include a seating area for coffee and pastries. [3] \n\nFifteen employees will be hired before the opening. [4] interested in applying should visit the bakery's Web site.",
    translation: "地元のベーカリー、2号店を出店へ\n\nリバートン(5月3日)——メインストリートで10年続く家族経営店サンライズ・ベーカリーが、来月リバートン・ショッピング・プラザに2号店を開く。\n\nオーナーのマリア・ゴンザレスさんは、店の成功の多くを祖父のおかげだと語る。今も祖父のレシピを使っているという。最初の店は、オーブン1台がやっと入る借り部屋で、彼女が1人で開いた。『町の西側のお客様から、こちらにも来てほしいと言われ続けていました』と彼女は言う。『この春、ようやくそれに応えられる広さの場所が見つかったんです』\n\n2号店は1号店のほぼ2倍の広さで、コーヒーとペイストリーを楽しめる座席スペースも設ける。メインストリートの店はこれまでどおりの営業時間で続ける。\n\n開店までに15名を新たに雇用する予定だ。応募に関心のある人は同店のウェブサイトを見てほしい。",
    questions: [
      {
        num: 1,
        choices: ["opened", "had opened", "has opened", "will open"],
        answer: 3,
        explanation: "時制問題。文末の next month(来月)が手がかりで、まだ開店していないので未来を表す (D) will open。主語 Sunrise Bakery と動詞の間に the family-run shop that has stood on Main Street for ten years という長い同格＋関係詞節が挟まっており、そこにある has stood につられて (C) has opened を選ばせるのが狙い。挟まれた部分を外して主語と動詞をつなぐ。"
      },
      {
        num: 2,
        choices: ["who", "which", "whose", "whom"],
        answer: 2,
        explanation: "関係詞の問題(難問)。空所の後ろは recipes she still follows で、名詞 recipes に冠詞や所有格が付いていない。『祖父のレシピ』という所有関係を表す所有格の関係代名詞 (C) whose が正解。her grandfather, whose recipes she still follows, で『今も彼女が使っているレシピを残した祖父』となる。(A) who は主格なので直後に動詞が必要、(B) which は先行詞が人なので不可、(D) whom は目的格で後ろに名詞を従えられない。"
      },
      {
        num: 3,
        choices: [
          "The Main Street shop will stay open and keep its current hours.",
          "The Main Street shop will close as soon as the move is finished.",
          "Ms. Gonzalez intends to sell the business within the year.",
          "Bread prices will rise by ten percent in June."
        ],
        answer: 0,
        explanation: "文挿入問題。記事の趣旨は a second branch(2号店)の出店であって移転ではない。読者が当然抱く『元の店はどうなるのか』に答える (A) が自然。(B) は move(移転)を前提にしており第1段落の second branch と矛盾する。(C) の売却、(D) の値上げは記事のどこにも根拠がなく、拡大という流れにも合わない。"
      },
      {
        num: 4,
        choices: ["They", "Those", "Whoever", "Each"],
        answer: 1,
        explanation: "Those (who are) interested in 〜 で『〜に関心のある人々』。空所が主語で、後ろに過去分詞・形容詞句 interested in applying が続き、述語は should visit なので (B) Those。(A) They は後ろに形容詞句を直接続けられない。(C) Whoever は節を導くので Whoever is interested の形が必要。(D) Each は単数扱いで、やはり Each who is interested のような形が要る。"
      }
    ]
  },
  {
    id: "p6-04",
    title: "文書 4(社内連絡)",
    docType: "Memo",
    passage: "To: All Employees\nFrom: Operations Department\nSubject: Building-Wide Recycling Program\nDate: April 22\n\nOn May 1, GreenWorks Consulting will join the recycling program that the other tenants of the Hartley Building [1] since January. Color-coded bins will be placed beside the elevators on every floor: blue for paper, yellow for plastic, and green for cans and bottles.\n\n[2] , paper that carries client information may not simply be dropped into the blue bin; it has to be shredded first. Shredders are available in the copy room on each floor.\n\nThe building's contractor sorts nothing by hand, so anything placed in the wrong bin is sent to the landfill untreated. [3] \n\nPosters explaining the rules will go up in the break rooms next week. We appreciate your [4] in making the program a success.",
    translation: "宛先:全従業員\n差出人:業務部\n件名:ビル全体のリサイクルプログラム\n日付:4月22日\n\n5月1日より、グリーンワークス・コンサルティングは、ハートリービルの他のテナントが1月から実施しているリサイクルプログラムに参加します。色分けされた回収ボックスを各階のエレベーター横に設置します:青は紙、黄はプラスチック、緑は缶とボトルです。\n\nただし、顧客情報を含む紙は青いボックスにそのまま入れてはいけません。先にシュレッダーにかける必要があります。シュレッダーは各階のコピー室にあります。\n\nビルの委託業者は手作業での分別を一切行わないため、誤ったボックスに入れられたものは未処理のまま埋立地に送られます。したがって、たった1点の入れ間違いが1回分すべてを台無しにしかねません。捨てる前に表示を確認してください。\n\n分別ルールを説明するポスターを、来週すべての休憩室に掲示します。本プログラムの成功に向けたご協力に感謝いたします。",
    questions: [
      {
        num: 1,
        choices: ["follow", "followed", "have followed", "will follow"],
        answer: 2,
        explanation: "時制問題。since January(1月以来)があるので、過去から現在まで続いていることを表す現在完了 (C) have followed。主語は the other tenants で複数なので has ではなく have。自社の参加は will join と未来だが、他のテナントはすでに実施中である点を読み分ける必要がある。(D) will follow を選ぶと since January と矛盾する。"
      },
      {
        num: 2,
        choices: ["Otherwise", "However", "For instance", "As a result"],
        answer: 1,
        explanation: "接続副詞。直前で『青は紙』と分別ルールを示した後、空所の後ろでは『顧客情報を含む紙は青いボックスにそのまま入れてはいけない』と例外を述べている。原則に対する例外なので逆接の (B) However。(C) For instance は『紙の例』ではなく例外なので不可。(A) Otherwise は条件、(D) As a result は結果で、いずれも論理関係が合わない。前の文まで戻らないと決まらない。"
      },
      {
        num: 3,
        choices: [
          "The cafeteria will begin composting food waste later this year.",
          "Since the sorting is done off-site, staff need not separate their waste.",
          "The bins were removed from the ground floor last spring.",
          "A single misplaced item can therefore spoil an entire load, so please check the label before you drop anything in."
        ],
        answer: 3,
        explanation: "文挿入問題。直前の『委託業者は手作業で分別しないので、入れ間違いは未処理のまま埋立地行きになる』を受けて、therefore でその帰結を示し注意を促す (D) が自然につながる。(B) は『分別は業者がやるので社員は分けなくてよい』という内容で、直前の sorts nothing by hand と正面から矛盾する。(A)(C) はリサイクルの話題ではあるが、前後のつながりがない。"
      },
      {
        num: 4,
        choices: ["cooperation", "competition", "permission", "hesitation"],
        answer: 0,
        explanation: "語彙問題。appreciate your cooperation は依頼文書の締めの定番で (A) が正解。(B) competition(競争)、(C) permission(許可)、(D) hesitation(ためらい)はいずれも社内の協力を求める文脈に合わない。"
      }
    ]
  }
];
