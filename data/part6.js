// Part 6: 長文穴埋め問題
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part6 = [
  {
    id: "p6-01",
    title: "文書 1(Eメール)",
    docType: "E-mail",
    passage: "To: All Staff\nFrom: Facilities Management\nSubject: Elevator Maintenance\n\nDear Colleagues,\n\nPlease be advised that the main elevators in Building A will be out of service on Saturday, June 14, for their annual [1] . The work is expected to take approximately eight hours, beginning at 7:00 A.M.\n\n[2] this time, please use the stairs or the service elevator located at the east end of the building. The service elevator is smaller than the main ones, so waiting times may be [3] than usual.\n\nWe apologize for any inconvenience. [4] \n\nFacilities Management",
    translation: "宛先:全スタッフ\n差出人:施設管理部\n件名:エレベーターの保守点検\n\n各位\n\n6月14日(土)、A棟のメインエレベーターは年次保守点検のため運転を休止しますのでお知らせします。作業は午前7時に開始し、約8時間かかる見込みです。\n\nこの間は、階段または建物東端にある業務用エレベーターをご利用ください。業務用エレベーターはメインのものより小さいため、待ち時間が通常より長くなる可能性があります。\n\nご不便をおかけして申し訳ありません。ご理解とご協力に感謝いたします。\n\n施設管理部",
    questions: [
      {
        num: 1,
        choices: ["inspection", "celebration", "renovation", "reservation"],
        answer: 0,
        explanation: "語彙問題。annual inspection(年次点検)。エレベーターの保守作業なので inspection(点検)が適切。renovation(改装)は8時間では大げさ。"
      },
      {
        num: 2,
        choices: ["Among", "During", "Between", "Inside"],
        answer: 1,
        explanation: "During this time(この間は)。期間を表す前置詞 During が正解。"
      },
      {
        num: 3,
        choices: ["long", "longer", "longest", "length"],
        answer: 1,
        explanation: "直後に than usual(通常より)があるので比較級 longer。thanを見たら比較級を選ぶ。"
      },
      {
        num: 4,
        choices: [
          "Thank you for your understanding and cooperation.",
          "The new building will open next spring.",
          "Please submit your expense report by Friday.",
          "The elevator music will be changed soon."
        ],
        answer: 0,
        explanation: "文挿入問題。直前の『ご不便をおかけして申し訳ありません』に続く締めの文として、『ご理解とご協力に感謝します』が自然。他の選択肢は文脈と無関係。"
      }
    ]
  },
  {
    id: "p6-02",
    title: "文書 2(お知らせ)",
    docType: "Notice",
    passage: "Greenfield Public Library — New Online Reservation System\n\nStarting October 1, library members will be able to reserve books and meeting rooms through our new online system. [1] , reservations could only be made in person or by phone.\n\nTo use the system, simply log in with your library card number and create a password. Reservations can be made up to thirty days [2] .\n\n[3] Members who reserve a book will receive an e-mail notification when it becomes available. Items will be held at the front desk for seven days.\n\nWe believe this system will make our services more [4] to everyone in the community.",
    translation: "グリーンフィールド公立図書館——新オンライン予約システム\n\n10月1日より、図書館会員は新しいオンラインシステムで書籍と会議室を予約できるようになります。これまでは、予約は来館か電話でのみ可能でした。\n\nシステムを使うには、図書館カード番号でログインし、パスワードを作成するだけです。予約は30日先まで可能です。\n\nさらに、複数の館の蔵書を同時に検索することもできます。書籍を予約した会員には、貸出可能になった時点でEメール通知が届きます。取り置きはフロントデスクにて7日間です。\n\nこのシステムにより、当館のサービスが地域の皆様にとってより利用しやすいものになると考えています。",
    questions: [
      {
        num: 1,
        choices: ["Previously", "Therefore", "Similarly", "Instead"],
        answer: 0,
        explanation: "接続副詞の問題。『10月から新システム開始』→『これまでは来館か電話のみ』という対比なので Previously(以前は)。過去形 could が使われている点もヒント。"
      },
      {
        num: 2,
        choices: ["in advance", "at once", "so far", "on time"],
        answer: 0,
        explanation: "thirty days in advance(30日前もって)。予約の文脈では in advance(事前に)が定番。"
      },
      {
        num: 3,
        choices: [
          "In addition, you can search the collections of multiple branches at once.",
          "The library will be closed for the entire month of October.",
          "Unfortunately, the system has been discontinued.",
          "Meeting rooms are no longer available to members."
        ],
        answer: 0,
        explanation: "文挿入問題。新システムの利便性を列挙する流れの中なので、機能を追加で紹介する(A)が自然。(B)(C)(D)は『新システム開始』という文書全体の趣旨と矛盾する。"
      },
      {
        num: 4,
        choices: ["access", "accessible", "accessibly", "accessing"],
        answer: 1,
        explanation: "make + 目的語(our services)+ 補語 の形。補語には形容詞 accessible(利用しやすい)が入る。"
      }
    ]
  },
  {
    id: "p6-03",
    title: "文書 3(記事)",
    docType: "Article",
    passage: "Local Bakery Expands to Second Location\n\nRIVERTON (May 3) — Sunrise Bakery, a popular family-owned business on Main Street, [1] its second location next month at the Riverton Shopping Plaza.\n\nOwner Maria Gonzalez opened the original bakery ten years ago. Since then, the shop has attracted a loyal following, [2] for its handmade sourdough bread. \"Our customers kept asking us to open a store on the west side of town,\" Ms. Gonzalez said. \"We finally found the perfect space.\"\n\n[3] The new location will also offer a seating area where customers can enjoy coffee and pastries.\n\nSunrise Bakery plans to hire fifteen additional employees for the new store. [4] interested in applying should visit the bakery's Web site.",
    translation: "地元のベーカリー、2号店に拡大\n\nリバートン(5月3日)——メインストリートの人気家族経営店サンライズ・ベーカリーが、来月リバートン・ショッピング・プラザに2号店をオープンする。\n\nオーナーのマリア・ゴンザレスさんが最初の店を開いたのは10年前。以来、手作りのサワードウブレッドで特に知られ、固定客を集めてきた。『お客様から町の西側にも店を出してほしいと言われ続けていました』とゴンザレスさんは語る。『ついに完璧な場所が見つかったんです』\n\n新店舗は旧店舗のほぼ2倍の広さになる。また、コーヒーとペイストリーを楽しめる座席エリアも設けられる予定だ。\n\nサンライズ・ベーカリーは新店舗のために15名の従業員を追加採用する計画だ。応募に興味のある人は同店のウェブサイトを見てほしい。",
    questions: [
      {
        num: 1,
        choices: ["opened", "will open", "has opened", "opening"],
        answer: 1,
        explanation: "時制問題。next month(来月)とあるので未来形 will open。空所の近くだけでなく時を表す語句を必ず探す。"
      },
      {
        num: 2,
        choices: ["particular", "particularly", "particularity", "particulars"],
        answer: 1,
        explanation: "known for 〜 を修飾する副詞 particularly(特に)。過去分詞・形容詞を修飾するのは副詞。"
      },
      {
        num: 3,
        choices: [
          "The new store will be nearly twice the size of the original.",
          "The bakery closed permanently last week.",
          "Ms. Gonzalez has decided to sell the business.",
          "Bread prices will double starting next month."
        ],
        answer: 0,
        explanation: "文挿入問題。直後の The new location will also offer 〜(〜『も』設ける)の also につながるのは、新店舗の特徴を述べた(A)。閉店や売却は記事の趣旨(拡大)と矛盾。"
      },
      {
        num: 4,
        choices: ["Those", "This", "Whoever", "Each"],
        answer: 0,
        explanation: "Those (who are) interested in 〜(〜に興味のある人々)。Those + 過去分詞/形容詞句は『〜な人々』を表す頻出形。"
      }
    ]
  }
];
