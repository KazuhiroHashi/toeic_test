// セット7 part6(上級:文脈依存の空所を厚くし、指示語で決まる文挿入を2問配置)
window.TOEIC_DATA_7 = window.TOEIC_DATA_7 || {};
window.TOEIC_DATA_7.part6 = [
  {
    id: "s7p6-01",
    title: "文書 1(Eメール)",
    docType: "E-mail",
    passage: "To: Marguerite Oyelaran, Nordholm Instruments\nFrom: Devon Achebe, Lexara Language Services\nSubject: A change to the way we quote urgent work\nDate: 4 February\n\nDear Ms. Oyelaran,\n\nUntil now, files uploaded to your account portal [1] on the following morning. From 1 March, you will have a figure within four business hours.\n\nWhat that figure covers has not changed, [2] . It confirms the cost and the word count; it is not an agreement to the deadline you have proposed.\n\nMost of the delays reported to us last year came not from translation itself but from the review stage, [3] our editors cannot carry out until a subject-matter specialist is free. [4] \n\nTo reserve one of them, tick the box marked \"Priority review\" before you upload a file. We will tell you the same day whether the date you want can be met, and if it cannot, we will name the earliest one that can.\n\nSincerely,\n\nDevon Achebe\nClient Services",
    translation: "宛先:マルグリット・オイェララン(ノードホルム・インスツルメンツ)\n差出人:デヴォン・アチェベ(レクサラ・ランゲージ・サービシズ)\n件名:急ぎのご依頼の見積もり方法の変更\n日付:2月4日\n\nオイェララン様\n\nこれまで、お客様のアカウントポータルにアップロードされたファイルは、翌朝に価格をお出ししてきました。3月1日からは、4営業時間以内に金額をお伝えします。\n\nただし、その金額が示す範囲はこれまでと変わりません。確定するのは費用と語数だけで、ご提示いただいた納期をお引き受けするものではありません。\n\n昨年お客様からご報告いただいた遅延の多くは、翻訳そのものではなくレビュー工程で生じたものでした。この工程は、分野専門の担当者の手が空くまで、当社の編集者だけでは進められません。こうした専門担当者は全拠点で共有されており、科学機器を扱える者はごく少数です。\n\nそのうちの1人を確保するには、ファイルをアップロードする前に『Priority review』のチェックボックスを選んでください。ご希望の日程で対応できるかどうかは当日中にお知らせし、難しい場合は対応可能な最も早い日をご提案します。\n\n敬具\n\nデヴォン・アチェベ\nクライアントサービス",
    questions: [
      {
        num: 1,
        choices: ["are priced", "were priced", "have been priced", "will be priced"],
        answer: 2,
        explanation: "時制問題。冒頭の Until now(これまでは)と、次の文の From 1 March(3月1日から)が手がかり。『翌朝に値付けする』やり方は今も続いており、変わるのはこれからなので、過去から現在まで継続していることを表す現在完了の受動態 (C) have been priced が正解。(B) were priced にすると既に終わったやり方になり、変更がまだ先だという次の文と矛盾する。(A) are priced は単なる現在の習慣で until now と結びつかない。(D) will be priced は3月1日以降の新しい扱い(4営業時間以内)と食い違う。空所を含む文だけでは決まらず、次の文まで読む必要がある。"
      },
      {
        num: 2,
        choices: ["though", "otherwise", "instead", "moreover"],
        answer: 0,
        explanation: "接続語。前の段落は『見積もりが早くなる』という改善、この文は『見積もりの中身は変わっていない』という但し書きで、逆接の関係になる。文末に置ける譲歩の副詞 (A) though が正解。(B) otherwise(さもなければ)、(C) instead(その代わりに)、(D) moreover(さらに)は、この文末の位置に置けないか、前後の論理関係に合わない。前の段落まで戻らないと決まらない。"
      },
      {
        num: 3,
        choices: ["where", "which", "when", "whereby"],
        answer: 1,
        explanation: "関係詞の問題(難問)。空所の後ろは our editors cannot carry out until ... で、他動詞 carry out の目的語が欠けている。目的語の働きをする関係代名詞 (B) which が正解で、先行詞は the review stage。(A) where と (C) when は関係副詞なので、後ろには欠けのない完全な節が必要。(D) whereby は『それによって』の意味で、やはり欠けた目的語を補えない。stage(段階)という名詞につられて where を選ばせるのが狙い。"
      },
      {
        num: 4,
        choices: [
          "That stage was removed from our workflow at the end of last year.",
          "The review queue is cleared every Friday afternoon.",
          "Our rates for urgent work will rise slightly in March.",
          "Such specialists are shared among all of our offices, and only a handful work on scientific instruments."
        ],
        answer: 3,
        explanation: "文挿入問題(難問)。決め手は直後の To reserve one of them(そのうちの1人を確保するには)。them は『確保できる人』の複数でなければならないが、前の文にあるのは a subject-matter specialist と単数。複数の専門担当者を新たに示す (D) だけが them の受け皿になる。(A) は『その工程を昨年やめた』となり、直前の記述と矛盾する。(B) の queue(待ち行列)、(C) の rates(料金)はいずれも人ではないので them では受けられない。4つとも英文としては成立するが、指示語の対応で1つに絞るタイプ。"
      }
    ]
  },
  {
    id: "s7p6-02",
    title: "文書 2(お知らせ)",
    docType: "Notice",
    passage: "Halloran Conference Centre\nNotice to Event Organizers: Audiovisual Equipment\n\nFrom 15 September, the projector, the microphones and the lighting in each of our six meeting rooms are operated from a single touch panel beside the door. Organizers may run the equipment themselves, and a technician no longer has to stand at the back of the room. [1] \n\nThe panel accepts the four-digit code printed on your booking confirmation. The code becomes active thirty minutes before your reservation begins and stops working when it ends. [2] you need the room earlier than that — for a rehearsal, say — please tell the events office at least a day beforehand.\n\nRooms 4 and 5 are separated by a movable partition. [3] it is open, the two rooms count as one booking and are run from the Room 4 panel alone; the panel in Room 5 stays dark until the partition is closed again.\n\nWritten instructions are posted beside every panel. [4] , anyone who has not used the system before can ask the front desk for a demonstration.",
    translation: "ハロラン・カンファレンスセンター\nイベント主催者の皆様へ:視聴覚機器についてのお知らせ\n\n9月15日より、当センターの6つの会議室では、プロジェクター、マイク、照明を、扉の横にある1つのタッチパネルから操作していただきます。主催者ご自身で機器を操作でき、技術者が室内後方に待機する必要はなくなります。不具合をご連絡いただいた場合には、これまでどおり技術者が伺います。\n\nパネルには、予約確認書に印字された4桁のコードを入力してください。コードは予約開始の30分前に有効になり、予約終了時に使えなくなります。万一それより早く部屋が必要な場合(リハーサルなど)は、遅くとも前日までにイベント事務局までお知らせください。\n\n4号室と5号室は可動式の間仕切りで仕切られています。間仕切りが開いているときは、2つの部屋を1件の予約として扱い、4号室のパネルだけで操作します。5号室のパネルは、間仕切りが再び閉められるまで消灯したままになります。\n\n各パネルの横には説明書きを掲示しています。あるいは、システムを使ったことのない方は、フロントに実演をお申しつけいただくこともできます。",
    questions: [
      {
        num: 1,
        choices: [
          "They must be booked separately through the events office at least a week ahead.",
          "One will still be sent to your room if you report a fault during an event.",
          "This fee appears on the final invoice for your event.",
          "It is stored in the cabinet under the projection screen."
        ],
        answer: 1,
        explanation: "文挿入問題(難問)。直前の文には a technician(技術者)が単数の可算名詞で出ている。これを受ける代名詞 One を使い『不具合を知らせれば技術者は今でも来る』と補足する (B) が正解。(A) の They は複数を受けるが、機器は主催者が自分で操作してよいとされており、別途予約が必要という内容は直前と矛盾する。(C) の This fee は本文に料金の話が一切なく、指すものがない。(D) の It も何を指すのか特定できない。指示語の対応で決まるタイプ。"
      },
      {
        num: 2,
        choices: ["Should", "Were", "Had", "Did"],
        answer: 0,
        explanation: "仮定法の倒置。Should you need 〜 は If you should need 〜(万一〜が必要なら)の if を省いた倒置形で、(A) が正解。(B) Were は Were you to need の形なら成立するが、直後が you need なので不可。(C) Had は過去完了の倒置に使い、(D) Did は疑問文の語順で、いずれも後ろの you need とつながらない。"
      },
      {
        num: 3,
        choices: ["Even if", "In case", "Whenever", "Now that"],
        answer: 2,
        explanation: "接続詞。直前の文で『4号室と5号室は可動式の間仕切りで仕切られている』と述べており、この文の it はその間仕切りを指す。『開いているときはいつでも2部屋を1件の予約として扱う』という運用の説明なので (C) Whenever が正解。(A) Even if は譲歩で意味が通らない。(B) In case は『〜の場合に備えて』で、開いている状態での運用を述べるここには合わない。(D) Now that は『今や〜なので』と恒常的な状態を前提にするが、文末の until the partition is closed again(再び閉められるまで)と矛盾する。前の文の内容を読まないと it が何かも決まらない。"
      },
      {
        num: 4,
        choices: ["Consequently", "Meanwhile", "Instead", "Alternatively"],
        answer: 3,
        explanation: "接続副詞。前の文は『各パネルの横に説明書きがある』、この文は『フロントに実演を頼める』で、同じ目的に対する2つ目の手段を示している。選択肢を示す (D) Alternatively が正解。(A) Consequently は因果関係、(B) Meanwhile は同時進行で合わない。(C) Instead は前の手段を否定して置き換える語だが、説明書きの掲示が取りやめになるわけではないので不可。前の文まで戻る必要がある。"
      }
    ]
  },
  {
    id: "s7p6-03",
    title: "文書 3(記事)",
    docType: "Article",
    passage: "Bellamy Optics Names New Chief Executive\n\nKEELWORTH (9 June) — Bellamy Optics, the lens maker [1] the region's telescope factories have relied for three decades, announced on Monday that Rosalind Achterberg will become its chief executive in October.\n\nMs. Achterberg joined the firm eleven years ago as a production supervisor and has headed its export division since 2019. Under her direction, sales outside the country have risen from a tenth of turnover to almost a third. [2] \n\nShe succeeds Colin Marchetti, who is retiring after twenty-two years. Mr. Marchetti will keep a seat on the board until next spring, [3] the handover should be complete.\n\nAsked about her plans, Ms. Achterberg pointed to the Keelworth plant, where a second polishing line was ordered in March. Installation [4] until the autumn, and until then the firm will go on turning away orders it has no capacity to fill.",
    translation: "ベラミー・オプティクス、新最高経営責任者を発表\n\nキールワース(6月9日)——この地域の望遠鏡工場が30年にわたって頼ってきたレンズメーカー、ベラミー・オプティクスは月曜、ロザリンド・アクターバーグ氏が10月付で最高経営責任者に就任すると発表した。\n\nアクターバーグ氏は11年前に製造主任として同社に入り、2019年から輸出部門を率いてきた。同氏の指揮の下、海外売上は売上高の10分の1から3分の1近くまで伸びた。この成長は、海外拠点を1つも開かずに達成されたものだ。\n\n同氏は、22年勤めて退任するコリン・マルケッティ氏の後任となる。マルケッティ氏は来春まで取締役にとどまる予定で、その頃には引き継ぎが完了している見込みだ。\n\n今後の計画を問われたアクターバーグ氏は、3月に2本目の研磨ラインを発注したキールワース工場を挙げた。据え付けが始まるのは秋以降で、それまで同社は、生産能力の足りない受注を断り続けることになる。",
    questions: [
      {
        num: 1,
        choices: ["on which", "which", "on that", "where"],
        answer: 0,
        explanation: "関係詞の問題(難問)。rely on 〜(〜に頼る)の on が必要で、先行詞 the lens maker は組織なので『前置詞+関係代名詞』の (A) on which が正解。元の形は the region's telescope factories have relied on the lens maker。(B) which だけでは rely の後ろの on が欠けて文が成立しない。(C) on that は前置詞の直後に that を置けないため不可。(D) where は関係副詞で、後ろに欠けのない完全な節が必要。主語 Bellamy Optics と述語動詞 announced の間に同格と関係詞節が長く挟まっている点も読みにくさの狙い。"
      },
      {
        num: 2,
        choices: [
          "The division was closed in 2019 after several unprofitable years.",
          "Turnover has fallen in each of the last three years.",
          "Mr. Marchetti founded the company with two colleagues in 1978.",
          "That growth was achieved without opening a single office abroad."
        ],
        answer: 3,
        explanation: "文挿入問題。直前は『彼女の指揮の下で海外売上が売上高の10分の1から3分の1近くに伸びた』。その成果を補足する (D) が自然で、That growth が直前の内容を受ける。(A) は『輸出部門は2019年に閉鎖された』となり、彼女が2019年から同部門を率いているという直前の記述と矛盾する。(B) は売上減で、直前の増加と正面から食い違う。(C) の人物は次の段落で初めて紹介されるため、ここで既知のように扱うと記事の情報の順序が崩れる。"
      },
      {
        num: 3,
        choices: ["at which", "by which time", "for which", "of which"],
        answer: 1,
        explanation: "関係詞の問題(難問)。until next spring を受けて『その頃までには引き継ぎが終わっているはずだ』とつなぐので、(B) by which time が正解。which の先行詞は next spring。(A) at which は point や time などの名詞を伴わないとこの意味にならない。(C) for which、(D) of which は、後ろの the handover should be complete という欠けのない節を導けず、意味も通らない。"
      },
      {
        num: 4,
        choices: ["did not begin", "has not begun", "will not begin", "would not begin"],
        answer: 2,
        explanation: "時制問題。記事の日付は6月9日で、autumn(秋)はこれから来る時期。『据え付けは秋まで始まらない』という未来の話なので (C) will not begin が正解。後半の the firm will go on turning away orders も未来形である点が裏づけになる。(A) did not begin は過去の話になり、6月時点の記事と合わない。(B) has not begun は現在完了で、until the autumn という未来の時点と結びつかない。(D) would not begin は過去の時点から見た未来で、基準となる過去時制がない。空所の文だけでなく記事冒頭の日付まで確認する必要がある。"
      }
    ]
  },
  {
    id: "s7p6-04",
    title: "文書 4(社内連絡)",
    docType: "Memo",
    passage: "To: All Project Leads\nFrom: Contracts Office\nSubject: Electronic signing of client agreements\nDate: 11 October\n\nFrom 1 November, client agreements will be signed in Signadex instead of being printed, signed by hand and scanned. The system sends each party a link, records the time at which every signature is added, and files the finished document in the client folder. [1] \n\nThere is one difference project leads must watch. A paper contract took effect on the date typed on its first page. An electronic one takes effect the instant the last signature is recorded. [2] is often several days later than the date you typed on the draft, and every deadline measured from the start date moves back with it.\n\nFor that reason, leave the start date blank if you expect a client to take a while to sign. The contracts office will [3] the date once the final signature is in.\n\nAgreements already circulating on paper on 1 November [4] in that form; there is no need to begin them again.",
    translation: "宛先:全プロジェクトリーダー\n差出人:契約事務局\n件名:顧客契約書の電子署名について\n日付:10月11日\n\n11月1日より、顧客との契約書は、印刷して署名しスキャンする方式ではなく、Signadex 上で署名します。同システムは各当事者にリンクを送り、署名が加えられた時刻を1件ずつ記録し、完成した文書を顧客フォルダーに自動で保管します。承認の流れはこれ以外に変わる点はありません。これまでと同じ管理職が、同じ順序で草案を確認してから送付します。\n\nプロジェクトリーダーが注意すべき違いが1つあります。紙の契約書は1ページ目に入力した日付で発効しました。電子契約書は、最後の署名が記録された瞬間に発効します。その瞬間は、草案に入力した日付より数日遅れることが多く、開始日から数える期限もすべてその分だけ後ろにずれます。\n\nそのため、顧客の署名に時間がかかりそうな場合は、開始日を空欄のままにしておいてください。最後の署名が入り次第、契約事務局が日付を記入します。\n\n11月1日の時点で既に紙で回付中の契約書は、そのままの形で完了させて構いません。作り直す必要はありません。",
    questions: [
      {
        num: 1,
        choices: [
          "Nothing else about the approval chain changes: the same managers review a draft, in the same order, before it goes out.",
          "Paper copies must still be posted to the client within five working days.",
          "Project leads may continue to send agreements as e-mail attachments.",
          "The system will be unavailable every Friday evening for maintenance."
        ],
        answer: 0,
        explanation: "文挿入問題。直後の文が There is one difference project leads must watch(注意すべき違いが1つある)なので、その前には『それ以外は変わらない』という一般化が来ると自然につながる。(A) が正解。(B) は『紙のコピーを郵送する必要がある』となり、印刷・署名・スキャンをやめるという冒頭と矛盾する。(C) はEメール添付での送付を認める内容で、Signadex 上で署名するという方針に反する。(D) の保守時間は本文に根拠がなく、前後のどちらともつながらない。"
      },
      {
        num: 2,
        choices: ["Those dates", "That moment", "Each of them", "Neither of them"],
        answer: 1,
        explanation: "指示語の問題(難問)。直前の文の takes effect the instant the last signature is recorded を受け、その『瞬間』を単数で指す (B) That moment が正解。後半で the date you typed on the draft と対比されている点も手がかりになる。(A) Those dates は複数で、直前で問題になっているのは日付ではなく署名が記録される時点なので合わない。(C) Each of them、(D) Neither of them は受けるべき複数の名詞が前になく、指すものが決まらない。"
      },
      {
        num: 3,
        choices: ["hand out", "put off", "fill in", "look up"],
        answer: 2,
        explanation: "句動詞の語彙問題。前の文で『開始日は空欄のままにしておく』と指示しているので、後から契約事務局が日付を『記入する』(C) fill in が正解。(A) hand out(配る)、(B) put off(延期する)、(D) look up(調べる)はいずれも空欄を埋める動作にならない。前の文の leave the start date blank を読まないと決まらない。"
      },
      {
        num: 4,
        choices: ["must be recreated", "should be cancelled", "will be rejected", "may be completed"],
        answer: 3,
        explanation: "文脈による動詞の選択。セミコロンの後ろに there is no need to begin them again(やり直す必要はない)とあるので、紙のまま完了させてよいという内容になる (D) may be completed が正解。(A) must be recreated(作り直さねばならない)、(B) should be cancelled(取り消すべきだ)、(C) will be rejected(受理されない)はいずれも直後の記述と矛盾する。"
      }
    ]
  }
];
