// Part 4: 説明文問題(トークを聞いて設問に答える)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part4 = [
  {
    id: "p4-01",
    title: "トーク 1(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hello, this message is for Mr. Nakamura. This is Lisa from Downtown Dental Clinic. I'm calling to remind you of your appointment tomorrow at two P.M. Please note that our clinic has moved to a new location on Fifth Avenue, just across from the central library. Parking is available behind the building. If you need to reschedule, please call us back before six o'clock today. Thank you, and we look forward to seeing you." }
    ],
    translation: "もしもし、こちらはナカムラ様への伝言です。ダウンタウン歯科クリニックのリサと申します。明日午後2時のご予約の確認のためお電話しました。当クリニックは5番街の新しい場所、中央図書館の真向かいに移転しましたのでご注意ください。駐車場は建物の裏にございます。予約を変更される場合は、本日6時までにお電話ください。それでは、ご来院をお待ちしております。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To confirm an appointment",
          "To announce a new service",
          "To request a payment",
          "To cancel a reservation"
        ],
        answer: 0,
        explanation: "I'm calling to remind you of your appointment(予約のリマインドで電話しています)が根拠。電話の目的は冒頭近くで述べられるのが定石。"
      },
      {
        q: "What does the speaker say about the clinic?",
        choices: [
          "It has extended its hours.",
          "It has moved to a new location.",
          "It is closed tomorrow.",
          "It has hired a new dentist."
        ],
        answer: 1,
        explanation: "our clinic has moved to a new location on Fifth Avenue と明言している。"
      },
      {
        q: "What should the listener do if he needs to make a change?",
        choices: [
          "Visit the clinic in person",
          "Send an e-mail",
          "Call back by 6 P.M. today",
          "Fill out an online form"
        ],
        answer: 2,
        explanation: "If you need to reschedule, please call us back before six o'clock today が根拠。reschedule(予約を変更する)が設問では change the appointment に言い換えられている。"
      }
    ]
  },
  {
    id: "p4-02",
    title: "トーク 2(社内アナウンス)",
    audio: [
      { speaker: "M", text: "Attention, all staff. As you know, we'll be switching to the new expense management system on August first. To help everyone get familiar with it, the IT department will hold three training sessions next week — Tuesday, Wednesday, and Thursday, all at four P.M. in Meeting Room B. Each session covers the same content, so you only need to attend one. Please sign up on the company intranet by this Friday. If you can't make any of the sessions, a recorded version will be posted on the intranet afterward." }
    ],
    translation: "全社員にお知らせします。ご存じの通り、8月1日から新しい経費管理システムに切り替わります。皆さんに慣れていただくため、IT部門が来週3回の研修を実施します——火曜・水曜・木曜、いずれも午後4時、会議室Bです。各回の内容は同じですので、参加は1回で構いません。今週金曜日までに社内イントラネットで申し込んでください。どの回にも参加できない場合は、録画版が後日イントラネットに掲載されます。",
    questions: [
      {
        q: "According to the speaker, what will happen on August 1?",
        choices: [
          "A new expense system will be introduced.",
          "A branch office will open.",
          "A holiday schedule will begin.",
          "A department will be reorganized."
        ],
        answer: 0,
        explanation: "冒頭の we'll be switching to the new expense management system on August first が根拠。switching to(切り替える)が introduced(導入される)に言い換えられている。"
      },
      {
        q: "How many sessions does an employee need to attend?",
        choices: [
          "One",
          "Two",
          "Three",
          "None"
        ],
        answer: 0,
        explanation: "Each session covers the same content, so you only need to attend one(内容は同じなので1回だけでよい)が根拠。『3回開催』とのひっかけに注意。"
      },
      {
        q: "According to the speaker, what will be available on the intranet?",
        choices: [
          "A list of expenses",
          "A sign-up sheet for overtime",
          "A recording of the session",
          "A new employee handbook"
        ],
        answer: 2,
        explanation: "a recorded version will be posted on the intranet(録画版がイントラネットに掲載される)が根拠。"
      }
    ]
  },
  {
    id: "p4-03",
    title: "トーク 3(ラジオ広告)",
    audio: [
      { speaker: "W", text: "Are you tired of spending your weekends cleaning? Let Sparkle Home Services take care of it! Our trained staff will clean your entire home using only environmentally friendly products. And now, for the month of October only, first-time customers receive twenty percent off any cleaning package. Booking is easy — just visit sparklehome dot com and choose a time that works for you. Slots fill up quickly, so don't wait. Sparkle Home Services — because your weekend belongs to you." }
    ],
    translation: "週末の掃除にうんざりしていませんか? スパークル・ホーム・サービスにお任せください! 訓練を受けたスタッフが、環境にやさしい製品だけを使ってご自宅全体を清掃します。しかも今なら10月限定で、初回のお客様はどの清掃パッケージも20パーセント引き。ご予約は簡単——sparklehome.com にアクセスして、ご都合のよい時間を選ぶだけ。枠はすぐ埋まりますので、お早めに。スパークル・ホーム・サービス——あなたの週末はあなたのものだから。",
    questions: [
      {
        q: "What type of business is being advertised?",
        choices: [
          "A laundry service",
          "A home cleaning service",
          "A gardening company",
          "A home renovation firm"
        ],
        answer: 1,
        explanation: "Sparkle Home Services が家全体の清掃(clean your entire home)を行うと述べている。"
      },
      {
        q: "What is offered in October?",
        choices: [
          "A free trial service",
          "A gift for all customers",
          "A discount for new customers",
          "Extended service hours"
        ],
        answer: 2,
        explanation: "first-time customers receive twenty percent off(初回客は20%引き)が根拠。first-time customers が new customers に言い換えられている。"
      },
      {
        q: "How can listeners make a booking?",
        choices: [
          "By calling the office",
          "By visiting a Web site",
          "By sending a text message",
          "By visiting the store"
        ],
        answer: 1,
        explanation: "just visit sparklehome dot com(ウェブサイトにアクセス)が根拠。"
      }
    ]
  },
  {
    id: "p4-04",
    title: "トーク 4(会議の抜粋)",
    audio: [
      { speaker: "M", text: "Before we wrap up, let me share some good news. Our customer satisfaction survey results came in yesterday, and our overall score improved from three point eight to four point three out of five. The biggest jump was in delivery speed, thanks to the new distribution center we opened in March. However, the survey also showed that customers find our return process complicated. So next quarter, our top priority will be simplifying returns. Maria will lead that project, and she'll present a detailed plan at our meeting next month." }
    ],
    translation: "締めくくる前に、良い知らせを共有させてください。昨日、顧客満足度調査の結果が届き、総合スコアが5点満点中3.8から4.3に向上しました。最も伸びたのは配送スピードで、3月に開設した新しい物流センターのおかげです。ただし、調査では返品手続きが複雑だと感じている顧客が多いことも分かりました。そこで来四半期は、返品の簡素化を最優先課題とします。そのプロジェクトはマリアが率い、来月の会議で詳細な計画を発表します。",
    questions: [
      {
        q: "What is the speaker mainly discussing?",
        choices: [
          "Results of a customer survey",
          "The opening of a new store",
          "A change in company leadership",
          "Quarterly sales figures"
        ],
        answer: 0,
        explanation: "customer satisfaction survey results(顧客満足度調査の結果)についての報告が話の中心。"
      },
      {
        q: "According to the speaker, why did delivery speed improve?",
        choices: [
          "More drivers were hired.",
          "A new distribution center opened.",
          "A new delivery company was contracted.",
          "Packaging was redesigned."
        ],
        answer: 1,
        explanation: "thanks to the new distribution center we opened in March(3月に開設した新物流センターのおかげ)が根拠。"
      },
      {
        q: "What will Maria do next month?",
        choices: [
          "Train new employees",
          "Open a distribution center",
          "Present a plan",
          "Visit a customer"
        ],
        answer: 2,
        explanation: "she'll present a detailed plan at our meeting next month(来月の会議で詳細な計画を発表する)が根拠。"
      }
    ]
  }
];
