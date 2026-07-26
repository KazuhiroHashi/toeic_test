// セット8 Part 3: 会話問題(上級レベル・13会話39問)
window.TOEIC_DATA_8 = window.TOEIC_DATA_8 || {};
window.TOEIC_DATA_8.part3 = [
  {
    id: "s8p3-01",
    title: "会話 1",
    audio: [
      { speaker: "M", text: "Ms. Vance, I'm following up on the drawings we submitted for the riverfront walkway — sorry, for the pedestrian bridge. Has the review board looked at them yet?" },
      { speaker: "W", text: "They have. The structural section passed without a single comment. What held everything up was the lighting plan, which the board felt fell short of the new energy code." },
      { speaker: "M", text: "So we resubmit that portion only?" },
      { speaker: "W", text: "That portion only, yes. And you don't have to wait for the next full session — the board delegated lighting revisions to a single reviewer, so it can be signed off on any weekday." },
      { speaker: "M", text: "That's a relief. I'd been telling my team to plan on losing another month." }
    ],
    translation: "男性:ヴァンスさん、川沿いの遊歩道——失礼、歩道橋の件で提出した図面について確認したいのですが。審査委員会はもう目を通しましたか?\n女性:目を通しました。構造の部分は指摘ゼロで通っています。止まっていたのは照明計画で、委員会は新しい省エネ基準に届いていないと判断しました。\n男性:では、その部分だけ再提出すればよいのですね?\n女性:その部分だけです。しかも次の本会議を待つ必要はありません。照明の修正は委員1名に委任されているので、平日ならいつでも承認が下ります。\n男性:助かりました。チームにはまた1か月失う前提で動くよう言っていたところでした。",
    questions: [
      {
        q: "According to the woman, which part of the submission was approved without comment?",
        choices: [
          "The structural design",
          "The lighting plan",
          "The construction budget",
          "The completion date"
        ],
        answer: 0,
        explanation: "女性の The structural section passed without a single comment が根拠。『照明計画』は逆に差し戻された部分なので(B)はひっかけ。会話では良い知らせと悪い知らせが1文の中で切り替わるので、逆接 What held everything up was 〜 の前後を聞き分ける。"
      },
      {
        q: "What does the woman say about the resubmission?",
        choices: [
          "A new application fee is required.",
          "It can be approved without a full board meeting.",
          "It must wait for the next scheduled session.",
          "It has to be delivered in person."
        ],
        answer: 1,
        explanation: "you don't have to wait for the next full session / the board delegated lighting revisions to a single reviewer が根拠。『次の会期まで待つ』は否定された内容なので(C)は正反対のひっかけ。否定文の内容をそのまま選択肢にする典型的な誤答パターン。"
      },
      {
        q: "What had the man expected?",
        choices: [
          "That the drawings would be rejected outright",
          "That he would have to hire a consultant",
          "That the review fee would increase",
          "That the project would be held up for another month"
        ],
        answer: 3,
        explanation: "最後の I'd been telling my team to plan on losing another month(また1か月失う前提で動くよう言っていた)が根拠。losing another month を be held up for another month と言い換えている。過去完了進行形なので『実際にはそうならなかった予想』である点をつかむ必要がある。"
      }
    ]
  },
  {
    id: "s8p3-02",
    title: "会話 2",
    audio: [
      { speaker: "W", text: "Thanks for calling back. The conveyor in the south baggage hall stopped twice yesterday — no, three times, if you count the short one just after midnight." },
      { speaker: "M", text: "That matches what our remote diagnostics show. Every stop traces back to the same scanner at the transfer point, not to the belt motors, which is actually good news." },
      { speaker: "W", text: "Meaning what, exactly?" },
      { speaker: "M", text: "Meaning we swap one unit overnight instead of pulling the whole line apart. What I can't promise is the date. Our warehouse says Thursday, but they've said Thursday before." },
      { speaker: "W", text: "Then let's book the crew for Friday night, and we'll move it up only if the part actually leaves the warehouse on Thursday." }
    ],
    translation: "女性:折り返しありがとうございます。南側の手荷物ホールのコンベヤーが昨日2回止まりました——いえ、深夜過ぎの短い停止も数えれば3回です。\n男性:こちらの遠隔診断の結果とも一致します。どの停止も乗り継ぎ地点にある同じスキャナーが原因で、ベルトのモーターではありません。これは実はいい知らせです。\n女性:具体的にはどういう意味で?\n男性:ライン全体を分解せずに、1つのユニットを一晩で交換すれば済むということです。約束できないのは日付です。うちの倉庫は木曜と言っていますが、前にも木曜と言われましたから。\n女性:では作業班は金曜の夜で押さえて、木曜に部品が実際に倉庫を出た場合にだけ前倒ししましょう。",
    questions: [
      {
        q: "According to the man, what is causing the stoppages?",
        choices: [
          "A power failure in the hall",
          "Worn belt motors",
          "A malfunctioning scanner",
          "An incomplete software update"
        ],
        answer: 2,
        explanation: "Every stop traces back to the same scanner at the transfer point, not to the belt motors が根拠。not to 〜 で否定された『ベルトのモーター』を選ばせるのが(B)のねらい。原因を述べる文に否定が並列で付く形に注意。"
      },
      {
        q: "Why does the man call the finding good news?",
        choices: [
          "The equipment is still under warranty.",
          "The repair will be cheaper and quicker.",
          "The manufacturer will cover the cost.",
          "The hall can remain open during the work."
        ],
        answer: 1,
        explanation: "we swap one unit overnight instead of pulling the whole line apart(ライン全体を分解せず、一晩でユニット交換)から、費用も時間も抑えられると分かる。男性は cheap や fast という語を一度も使っておらず、作業内容から推測させる上級型。保証や営業継続の話は出ていない。"
      },
      {
        q: "What will determine whether the work is done earlier?",
        choices: [
          "Whether the crew is free on Thursday",
          "Whether the warehouse extends its hours",
          "Whether the diagnostics are run again",
          "Whether a part is dispatched on schedule"
        ],
        answer: 3,
        explanation: "女性の we'll move it up only if the part actually leaves the warehouse on Thursday が根拠。leaves the warehouse を is dispatched と言い換えている。only if 〜(〜の場合に限り)という条件の限定を聞き取れるかがポイント。"
      }
    ]
  },
  {
    id: "s8p3-03",
    title: "会話 3(3人の会話:男性2人+女性1人)",
    audio: [
      { speaker: "M", text: "Claire, Tomas — before we go any further. The supplier we've used since the plant opened is discontinuing the tall green bottle. They've given us until October." },
      { speaker: "W", text: "I've already asked two other glassworks for samples, Dev. The first one can match the shape, though their glass comes out a shade lighter." },
      { speaker: "M2", text: "A lighter green means the label has to be redrawn. The printer mixed that ink to sit against the bottle we use now. Not fatal, but not free either." },
      { speaker: "W", text: "The second one matches the color exactly. Their minimum order, though, is double what we normally buy." },
      { speaker: "M", text: "Then the question there is where we put it all. Tomas, could you find out whether we could take in an extra pallet run?" },
      { speaker: "M2", text: "I'll look at the floor plan today and tell you tomorrow." }
    ],
    translation: "デヴ(男性1):クレア、トーマス——先に進む前に。工場開設以来使ってきた仕入先が、あの背の高い緑の瓶を製造中止にする。猶予は10月までだ。\nクレア(女性):もう2社のガラス工場にサンプルを頼んであるわ、デヴ。1社目は形は合わせられるけれど、ガラスの色がわずかに薄く出るの。\nトーマス(男性2):緑が薄くなるということは、ラベルを描き直すことになる。印刷会社は今使っている瓶に合わせてあのインクを調色したからね。致命的ではないが、ただでもない。\nクレア:2社目は色まで完全に一致するわ。ただ、最低発注量が普段の倍なの。\nデヴ:そうなると、そちらの問題はどこに置くかだな。トーマス、パレット1回分を余分に受け入れられるか調べてくれるか?\nトーマス:今日フロア図を見て、明日伝えるよ。",
    questions: [
      {
        q: "What problem does Dev report?",
        choices: [
          "A shipment was damaged in transit.",
          "A container the company uses is being discontinued.",
          "A production line has broken down.",
          "A label was printed in the wrong color."
        ],
        answer: 1,
        explanation: "冒頭の the supplier ... is discontinuing the tall green bottle が根拠。bottle を container と一般化して言い換えている。ラベルの色は後半で出る別の論点なので(D)はひっかけ。3人の会話は冒頭で名前が呼ばれるので、誰の発言かをそこで固定する。"
      },
      {
        q: "What does Tomas point out about the first supplier's glass?",
        choices: [
          "It would arrive after the deadline.",
          "It costs more per unit.",
          "It failed a quality inspection.",
          "It would require the label artwork to be redone."
        ],
        answer: 3,
        explanation: "トーマス(2人目の男性)の A lighter green means the label has to be redrawn が根拠。redrawn を artwork to be redone と言い換えている。値段の話をしているのはクレアの『最低発注量』であって単価ではないので(B)は誤り。"
      },
      {
        q: "What is Tomas asked to check?",
        choices: [
          "Whether a third glassworks can supply the bottles",
          "Whether the minimum order can be reduced",
          "Whether extra stock can be stored on site",
          "Whether the current supplier will extend its deadline"
        ],
        answer: 2,
        explanation: "デヴの could you find out whether we could take in an extra pallet run? が根拠。直前の the question there is where we put it all(それを全部どこに置くか)と合わせて『保管できるか』の確認だと分かる。take in を be stored と言い換えている。minimum order は会話に出てくる語をそのまま使った誤答。"
      }
    ]
  },
  {
    id: "s8p3-04",
    title: "会話 4(図表問題)",
    graphicKind: "list",
    graphic: "Hall C — Remaining Booths\n1. Booth 12 — 9 sq m / corner, no storage\n2. Booth 18 — 18 sq m / corner, with storage room\n3. Booth 24 — 18 sq m / aisle, no storage\n4. Booth 31 — 36 sq m / corner, with storage room",
    audio: [
      { speaker: "W", text: "These are the four spaces still open in Hall C. I know you had your eye on the largest one, but thirty-six square meters is well past what marketing signed off on." },
      { speaker: "M", text: "Then we're choosing between the two eighteen-square-meter spaces. We're bringing the demonstration model, and it has to be locked away overnight." },
      { speaker: "W", text: "That decides it, then. And we get a corner as well, which we weren't counting on." },
      { speaker: "M", text: "Book it. One more thing — ask whether we can have a second power drop. Last year we ran everything off one outlet and kept tripping the breaker." }
    ],
    translation: "【図表】ホールC 残りブース/12番:9平方メートル・角・収納なし/18番:18平方メートル・角・収納室あり/24番:18平方メートル・通路側・収納なし/31番:36平方メートル・角・収納室あり\n女性:ホールCで空いているのはこの4区画です。一番大きいところを狙っていたのは分かっていますが、36平方メートルはマーケティングの承認額を大きく超えます。\n男性:では18平方メートルの2区画のどちらかだね。デモ機を持ち込むので、夜間は施錠して保管できないと困る。\n女性:それで決まりですね。しかも角地が取れます。当てにしていなかった分、得ですね。\n男性:押さえておいて。それともう一つ、電源をもう1系統もらえるか聞いてほしい。去年は全部を1つのコンセントから取って、何度もブレーカーを落としたからね。",
    questions: [
      {
        q: "Look at the graphic. Which booth will the speakers reserve?",
        choices: ["Booth 12", "Booth 18", "Booth 24", "Booth 31"],
        answer: 1,
        explanation: "図表問題。二段階の絞り込みが必要。まず36平方メートル(31番)は予算超過で除外、男性の『18平方メートルの2区画から選ぶ』で9平方メートルの12番も除外。残る18番と24番のうち、夜間施錠できる収納があるのは18番だけ。番号や広さは音声で直接言われない。"
      },
      {
        q: "What will the company bring to the trade show?",
        choices: [
          "A demonstration model",
          "Printed catalogs",
          "Product samples",
          "A video wall"
        ],
        answer: 0,
        explanation: "男性の We're bringing the demonstration model が根拠。展示会でありがちな他の持ち込み品を並べた誤答で、連想で選ばせないようにしている。"
      },
      {
        q: "What does the man ask the woman to inquire about?",
        choices: [
          "Overnight security for the booth",
          "A discount on the rental fee",
          "A larger display sign",
          "An additional electrical connection"
        ],
        answer: 3,
        explanation: "男性の ask whether we can have a second power drop が根拠。power drop(電源引き込み)を electrical connection と言い換えている。overnight は『施錠保管』の文脈で出た語で、警備を頼んではいないので(A)はひっかけ。"
      }
    ]
  },
  {
    id: "s8p3-05",
    title: "会話 5(意図問題)",
    audio: [
      { speaker: "M", text: "Priya, about the Korean installation manual — the client has just asked for it a week early. Is that realistic?" },
      { speaker: "W", text: "The translation itself was finished on Tuesday. It's still with the reviewer." },
      { speaker: "M", text: "Right. Who's on it — Min-jun?" },
      { speaker: "W", text: "No, he's tied up with the German set. It went to our new reviewer, and she's thorough, which is not something I want to rush. What I can do is release the first four chapters as a preview so they can start their own checks." },
      { speaker: "M", text: "That's a fair compromise. I'll write to them and explain the split delivery, and I'll leave the final date where it is." }
    ],
    translation: "男性:プリヤ、韓国語の設置マニュアルの件だけど、クライアントが1週間前倒しで欲しいと言ってきた。現実的かな?\n女性:翻訳自体は火曜に終わっているわ。まだレビュー担当のところよ。\n男性:なるほど。担当は誰? ミンジュン?\n女性:いいえ、彼はドイツ語一式で手一杯。新しいレビュー担当に回っていて、彼女は丁寧だから、そこは急かしたくないの。できるのは、最初の4章をプレビューとして先に出すこと。そうすれば先方も自分たちの確認を始められる。\n男性:妥当な妥協案だね。分割納品について僕からメールで説明するよ。最終期日はこのままにしておく。",
    questions: [
      {
        q: "What does the man ask about?",
        choices: [
          "Whether a deadline can be moved up",
          "Whether a translator is available",
          "Whether a price can be reduced",
          "Whether a manual needs illustrations"
        ],
        answer: 0,
        explanation: "冒頭の the client has just asked for it a week early. Is that realistic? が根拠。a week early を moved up(前倒し)と言い換えている。ミンジュンの話は後から出る枝葉なので(B)はひっかけ。"
      },
      {
        q: "What does the woman imply when she says, \"It's still with the reviewer\"?",
        choices: [
          "She has not begun the translation.",
          "The reviewer is unfamiliar with the subject.",
          "The document cannot be handed over yet.",
          "Another translator should be assigned."
        ],
        answer: 2,
        explanation: "意図問題。直前で『翻訳自体は終わっている』と言った上での still with the reviewer なので、『訳は済んだが、まだ人の手にあって出せる状態ではない』という含意。翻訳は完了しているので(A)は誤り、丁寧だと評価しているので(B)も誤り。"
      },
      {
        q: "What does the man say he will do?",
        choices: [
          "Send an explanatory e-mail to the client",
          "Assign the work to Min-jun",
          "Extend the review period",
          "Take over the checking himself"
        ],
        answer: 0,
        explanation: "最後の I'll write to them and explain ... が根拠。write to them の them は the client を指すので、指示語が誰を受けるかを追う必要がある。ミンジュンは別案件で手一杯だと否定されているので(B)は誤り。"
      }
    ]
  },
  {
    id: "s8p3-06",
    title: "会話 6",
    audio: [
      { speaker: "W", text: "Hello, I'm calling about Studio B for the last week of March. We record a four-person panel, so we need four microphones and a separate booth for the host." },
      { speaker: "M", text: "Studio B has the booth. The desk gives you three inputs — sorry, three plus a spare we normally keep for the phone line. If nobody's dialing in, we can free that one up." },
      { speaker: "W", text: "Nobody's dialing in. Everyone will be in the room." },
      { speaker: "M", text: "Then Studio B works. One thing you should know: that week our engineer is on leave Wednesday and Thursday, so those two days you'd be with a freelancer." },
      { speaker: "W", text: "That's acceptable as long as it's the same person on both days. Consistency matters more to me than experience does." }
    ],
    translation: "女性:もしもし、3月最終週のスタジオBの件でお電話しました。4人のパネル収録なので、マイクが4本と、司会者用の別ブースが必要です。\n男性:スタジオBにブースはあります。卓の入力は3系統——失礼、3系統に加えて、普段は電話回線用に取ってある予備が1つあります。電話参加の方がいなければ、そこを空けられます。\n女性:電話参加はありません。全員その部屋に入ります。\n男性:でしたらスタジオBで大丈夫です。1点だけ、その週は当社のエンジニアが水曜と木曜に休暇を取っていまして、その2日はフリーランスの担当になります。\n女性:2日とも同じ人であれば問題ありません。私にとっては経験より一貫性の方が大事なので。",
    questions: [
      {
        q: "Why is the woman calling?",
        choices: [
          "To ask about repairing some equipment",
          "To reserve a facility for a series of sessions",
          "To apply for a position as an engineer",
          "To complain about a past recording"
        ],
        answer: 1,
        explanation: "冒頭の I'm calling about Studio B for the last week of March(3月最終週のスタジオBの件)が根拠。『週単位で借りる=複数回の収録』と読み取る。エンジニアやフリーランスの話は後半の条件なので(C)は連想のひっかけ。"
      },
      {
        q: "What does the man say about the mixing desk?",
        choices: [
          "It has recently been replaced.",
          "It cannot handle four microphones under any circumstances.",
          "One of its channels is normally kept for incoming calls.",
          "It is installed inside the separate booth."
        ],
        answer: 2,
        explanation: "three plus a spare we normally keep for the phone line が根拠。phone line を incoming calls と言い換えている。予備を回せば4本使えるので(B)は言い過ぎの誤答。話者が数を言い直す(three — sorry, three plus a spare)ので、最初の数字だけ拾うと取り違える。"
      },
      {
        q: "What condition does the woman set?",
        choices: [
          "That the same person work on both days",
          "That the rate not be increased",
          "That the sessions be moved to a different week",
          "That the engineer have panel experience"
        ],
        answer: 0,
        explanation: "as long as it's the same person on both days が条件。最後に『経験より一貫性』と述べているので(D)は正反対。as long as 〜 が条件を示すことに気づけるかがポイント。"
      }
    ]
  },
  {
    id: "s8p3-07",
    title: "会話 7(3人の会話:女性2人+男性1人)",
    audio: [
      { speaker: "W", text: "Devon, Yumi — thanks for coming in early. Saturday's signing is going to be bigger than we planned for. Two hundred and forty people have registered." },
      { speaker: "M", text: "Two forty? Rosa, the reading area seats ninety. We could clear the whole front of the shop and still be short." },
      { speaker: "W2", text: "The author is happy to do two sittings back to back — she's done it before. That halves the crowd at any one time." },
      { speaker: "W", text: "That helps, but it doubles the staffing. Devon, could you find out who can come in for the afternoon?" },
      { speaker: "M", text: "I'll ask, though Saturday afternoons are hard. If I can't fill it, we may have to borrow someone from the stockroom." },
      { speaker: "W2", text: "And I'll let her agent know, so the travel arrangements still line up." }
    ],
    translation: "ローザ(女性1):デヴォン、ユミ——早くに来てくれてありがとう。土曜のサイン会、想定より規模が大きくなりそうなの。240人が登録済みよ。\nデヴォン(男性):240? ローザ、朗読スペースは90席だよ。店の前方を全部片づけても足りない。\nユミ(女性2):著者は2回続けてやるのは構わないと言っています。以前にもされていますし。そうすれば同時にいる人数は半分になります。\nローザ:それは助かるけれど、その分スタッフは倍必要になるわ。デヴォン、午後に入れる人がいないか調べてもらえる?\nデヴォン:聞いてみるよ。ただ土曜の午後は難しい。埋まらなければ、在庫室から誰か借りるしかないかもしれない。\nユミ:私は著者のエージェントに連絡します。移動の手配がずれないように。",
    questions: [
      {
        q: "What problem are the speakers discussing?",
        choices: [
          "An author has canceled an appearance.",
          "A shipment of books has not arrived.",
          "More people have signed up than the space can hold.",
          "A staff member has resigned."
        ],
        answer: 2,
        explanation: "240人の登録に対し the reading area seats ninety(90席)という対比が根拠。数字を2つ突き合わせて『収容できない』と判断する。著者は出席する前提で話が進むので(A)は誤り。"
      },
      {
        q: "What does Yumi say she will do?",
        choices: [
          "Notify the author's representative",
          "Reorganize the seating",
          "Recruit additional volunteers",
          "Update the shop's Web site"
        ],
        answer: 0,
        explanation: "ユミ(2人目の女性)の I'll let her agent know, so the travel arrangements still line up が根拠。agent を representative と言い換えている。3人の会話では冒頭の Devon, Yumi という呼びかけで声と名前を結び付けておく。"
      },
      {
        q: "What will Devon try to do?",
        choices: [
          "Rearrange the front of the shop",
          "Order additional copies of the book",
          "Confirm the author's travel plans",
          "Find out who can work an extra shift"
        ],
        answer: 3,
        explanation: "ローザの Devon, could you find out who can come in for the afternoon? に対し I'll ask と応じている。come in for the afternoon を work an extra shift と言い換えている。移動の手配はユミが引き受けているので(C)は役割の取り違えを狙ったひっかけ。"
      }
    ]
  },
  {
    id: "s8p3-08",
    title: "会話 8(図表問題)",
    graphicKind: "schedule",
    graphic: "Volunteer Guide Roster — Saturday\n1. 10:00-12:00  Harold Bui\n2. 12:00-14:00  Marisol Pena\n3. 14:00-16:00  Ken Ohara\n4. 16:00-18:00  Alice Grady",
    audio: [
      { speaker: "M", text: "Fatima, the guide on the shift just before Ken's wrote to me this morning. Her train doesn't get in until one, so she can't start on time." },
      { speaker: "W", text: "Could she take the second half of it?" },
      { speaker: "M", text: "She could, but a guide who turns up an hour late is worse than no guide at all — the groups form at the top of the hour." },
      { speaker: "W", text: "Then move her to the closing shift, and ask whoever has that one to swap forward. She lives ten minutes away, so an earlier start shouldn't trouble her." },
      { speaker: "M", text: "I'll write to both of them this afternoon, and I'll mark it on the roster before Saturday so the front desk isn't caught out." }
    ],
    translation: "【図表】土曜のボランティアガイド当番表/10:00-12:00 ハロルド・ブイ/12:00-14:00 マリソル・ペーニャ/14:00-16:00 ケン・オオハラ/16:00-18:00 アリス・グレイディ\n男性:ファティマ、ケンの1つ前のシフトのガイドから今朝連絡が来た。電車が1時までに着かないので、定刻に始められないそうだ。\n女性:後半だけ入ってもらうことはできない?\n男性:できなくはないけど、1時間遅れて来るガイドはいない方がましなんだ。団体は毎正時に集まるからね。\n女性:じゃあ彼女を最終シフトに移して、そこの担当に前へ入れ替わってもらいましょう。あの人は10分の距離に住んでいるから、早めの開始でも困らないはずよ。\n男性:今日の午後、2人ともに連絡しておく。それと土曜の前に当番表に反映して、受付が慌てないようにしておくよ。",
    questions: [
      {
        q: "Look at the graphic. Which guide will be asked to start earlier?",
        choices: ["Harold Bui", "Marisol Pena", "Ken Ohara", "Alice Grady"],
        answer: 3,
        explanation: "図表問題。三段階の照合が必要。『ケンの1つ前のシフト』=12:00-14:00のマリソル、その人を『最終シフト』=16:00-18:00へ移し、そこの担当に前倒しで入れ替わってもらう。つまり早い時間に動くのは16:00-18:00のアリス・グレイディ。名前も時刻も音声では言われない。"
      },
      {
        q: "Why does the man reject the woman's first suggestion?",
        choices: [
          "The museum closes early on Saturdays.",
          "Visitor groups gather at the start of each hour.",
          "Volunteers are paid by the hour.",
          "The front desk needs advance notice."
        ],
        answer: 1,
        explanation: "the groups form at the top of the hour(団体は毎正時に集まる)が理由。at the top of the hour を at the start of each hour と言い換えている。by the hour(時間給)は the hour という同じ語を使った音の連想のひっかけ。"
      },
      {
        q: "What does the man say he will do this afternoon?",
        choices: [
          "Meet a volunteer at the station",
          "Lead a tour himself",
          "Send messages to two people",
          "Post a notice for visitors"
        ],
        answer: 2,
        explanation: "I'll write to both of them this afternoon が根拠。write to を send messages to と言い換えている。当番表への記入は『土曜の前に』であって午後とは限らず、また来館者向けの掲示ではなく受付向けなので(D)は誤り。"
      }
    ]
  },
  {
    id: "s8p3-09",
    title: "会話 9(意図問題)",
    audio: [
      { speaker: "M", text: "Hana, the calibration certificate for the second balance expired back in April." },
      { speaker: "W", text: "April? I was sure we sent both of them out together in the spring." },
      { speaker: "M", text: "We sent the first one. The second was in use that week, so it stayed here." },
      { speaker: "W", text: "The auditors arrive Monday." },
      { speaker: "M", text: "I know. The service company can come out and do it on site Friday, but they charge a premium at that notice — about three hundred more." },
      { speaker: "W", text: "Pay it. One line in their report costs us far more than three hundred dollars once the follow-up paperwork starts." }
    ],
    translation: "男性:ハナ、2台目の天びんの校正証明書、4月の時点で期限が切れていました。\n女性:4月? 春に2台まとめて出したと思い込んでいたわ。\n男性:出したのは1台目です。2台目はその週使用中だったので、ここに残っていました。\n女性:監査は月曜に来るのよ。\n男性:分かっています。校正業者は金曜に現地で対応できますが、この時期の依頼だと割増になります。300ドルほど上乗せです。\n女性:払ってちょうだい。報告書に1行載る方が、その後の書類対応まで含めれば300ドルよりはるかに高くつくから。",
    questions: [
      {
        q: "What problem does the man report?",
        choices: [
          "A certificate is no longer valid.",
          "An instrument was damaged.",
          "A technician has resigned.",
          "A report was submitted late."
        ],
        answer: 0,
        explanation: "冒頭の the calibration certificate ... expired back in April が根拠。expired を no longer valid と言い換えている。機器が壊れたわけではないので(B)は誤り。"
      },
      {
        q: "What does the woman imply when she says, \"The auditors arrive Monday\"?",
        choices: [
          "She will be away next week.",
          "There is very little time left to act.",
          "The visit has been rescheduled.",
          "The man should speak to the auditors."
        ],
        answer: 1,
        explanation: "意図問題。直前に問題が判明した流れで『監査は月曜に来る』と言うのは、対応できる日数がほとんどないという含意。予定変更の話は出ていないので(C)は誤り、監査側に連絡する話でもないので(D)も誤り。"
      },
      {
        q: "Why does the woman approve the extra charge?",
        choices: [
          "The department has money left in its budget.",
          "The service company offered a discount.",
          "The instrument is used every day.",
          "A problem noted in the report would cost more."
        ],
        answer: 3,
        explanation: "One line in their report costs us far more than three hundred dollars(報告書に1行載る方がはるかに高くつく)という比較が根拠。割増料金なので(B)は正反対。金額を比べる発言の主語が何を指すかを追う必要がある。"
      }
    ]
  },
  {
    id: "s8p3-10",
    title: "会話 10",
    audio: [
      { speaker: "M", text: "I dropped a wheel off on Tuesday — the rear one, with the bent rim." },
      { speaker: "W", text: "Let me pull up the ticket. Here it is. We trued the rim, but once it was on the stand we found two spokes with hairline cracks. We left them, because replacing them changes the figure we quoted you." },
      { speaker: "M", text: "By how much?" },
      { speaker: "W", text: "Twenty-two dollars for the pair, and it adds a day. Though if you're riding this weekend, I'd rather you didn't leave them." },
      { speaker: "M", text: "I'm doing a hundred kilometers on Sunday, so no, I won't. And could you ring me when it's ready rather than send a message? The site I'm working on has no signal." }
    ],
    translation: "男性:火曜にホイールを預けた者です。リムが曲がった後輪の。\n女性:伝票を出しますね。ありました。振れは取りました。ただ、スタンドに載せたところでスポーク2本に細かいひびが見つかりまして。交換するとお出しした見積額が変わるので、そのままにしてあります。\n男性:いくら増えますか?\n女性:2本で22ドル、それと1日余分にかかります。ただ、今週末に乗られるなら、そのままにはしない方がいいと思います。\n男性:日曜に100キロ走るので、そのままにはしません。それと、仕上がったらメッセージではなく電話をもらえますか? 今の現場は電波が入らないので。",
    questions: [
      {
        q: "Why was part of the work left undone?",
        choices: [
          "A part was out of stock.",
          "The higher price had to be approved first.",
          "The mechanic was not available.",
          "The shop was about to close."
        ],
        answer: 1,
        explanation: "We left them, because replacing them changes the figure we quoted you(見積額が変わるので手を付けなかった)が根拠。figure は『数字=金額』の意味で、価格の承認が要るという含意。在庫の話は一切出ていない。"
      },
      {
        q: "What does the woman recommend?",
        choices: [
          "Buying a new wheel",
          "Postponing the ride",
          "Having the additional parts replaced",
          "Bringing the bicycle back next week"
        ],
        answer: 2,
        explanation: "I'd rather you didn't leave them(そのままにしない方がよい)という二重否定的な言い方が推奨。leave them=交換せず放置する、なので『交換すべき』の意味になる。乗るのをやめろとは言っていないので(B)は誤り。"
      },
      {
        q: "What does the man ask the woman to do?",
        choices: [
          "Deliver the wheel to a work site",
          "Provide a written estimate",
          "Reserve a rental bicycle",
          "Telephone him when the work is finished"
        ],
        answer: 3,
        explanation: "could you ring me when it's ready rather than send a message? が根拠。ring は『電話する』の意味。現場(site)は電波が入らない理由として出ただけで、そこへ届けてほしいとは言っていないので(A)はひっかけ。"
      }
    ]
  },
  {
    id: "s8p3-11",
    title: "会話 11",
    audio: [
      { speaker: "M", text: "Is it true the shuttle won't be stopping at the north gate anymore?" },
      { speaker: "W", text: "From the first of next month, yes. They're resurfacing the road, and the bus can't make the turn while that's going on. Everyone on that side will use the stop by the canteen instead." },
      { speaker: "M", text: "That's about eight minutes more on foot. For me it's nothing, but Elena walks with a cane." },
      { speaker: "W", text: "That's exactly what we need to hear about. There's a request form for assisted transport — anyone who files it gets collected at the door. Send her to me and I'll go through it with her." },
      { speaker: "M", text: "I'll tell her today. How long is the resurfacing meant to take?" },
      { speaker: "W", text: "Six weeks officially. I'd plan around eight." }
    ],
    translation: "男性:シャトルバスが北ゲートに止まらなくなるというのは本当ですか?\n女性:来月1日からね。道路を舗装し直すので、工事中はバスがあそこで曲がれないの。あちら側の人はみんな食堂横の停留所を使うことになるわ。\n男性:徒歩で8分ほど増えますね。僕は何ともないですが、エレナは杖を使っています。\n女性:まさにそういう話を聞かせてほしかったの。移動支援の申請書があって、出した人は入り口まで迎えに来てもらえるのよ。彼女をこちらに寄こしてくれれば、一緒に書き方を見るわ。\n男性:今日伝えます。舗装工事はどのくらいかかる予定ですか?\n女性:公式には6週間。私なら8週間で見ておくわ。",
    questions: [
      {
        q: "Why is the stop being moved?",
        choices: [
          "The route was taking too long.",
          "Roadwork prevents the bus from turning there.",
          "Too few employees were using it.",
          "A new canteen has opened."
        ],
        answer: 1,
        explanation: "They're resurfacing the road, and the bus can't make the turn while that's going on が根拠。canteen(食堂)は移転先の停留所の目印として出た語で、新設されたわけではないので(D)はひっかけ。"
      },
      {
        q: "What concern does the man raise?",
        choices: [
          "The buses will run less frequently.",
          "The fare will go up.",
          "A colleague may find the longer walk difficult.",
          "The canteen will become crowded."
        ],
        answer: 2,
        explanation: "For me it's nothing, but Elena walks with a cane(自分は平気だが、エレナは杖を使っている)が根拠。『自分ではなく他人のこと』を心配している点をつかむ。walks with a cane から歩行が負担になると推測させる。"
      },
      {
        q: "What does the woman say about the length of the work?",
        choices: [
          "It will probably run longer than announced.",
          "It has already been extended once.",
          "It will finish ahead of schedule.",
          "It depends on the weather."
        ],
        answer: 0,
        explanation: "Six weeks officially. I'd plan around eight.(公式には6週間だが、自分なら8週間で見る)が根拠。officially と I'd の対比で『公式発表より長くなりそう』という含意になる。数字だけ拾うと6週間と誤答しやすい。"
      }
    ]
  },
  {
    id: "s8p3-12",
    title: "会話 12",
    audio: [
      { speaker: "W", text: "I'm signing up for the data analysis certificate in the autumn. Does the reimbursement policy cover the exam, or only the course?" },
      { speaker: "M", text: "Both, provided you pass. If you don't, the company covers the course fee alone, and only for a first attempt." },
      { speaker: "W", text: "That's more generous than I expected. And the deadline for applying?" },
      { speaker: "M", text: "Three weeks before the course starts, which for the autumn term is the twenty-second. I'd send it sooner, though. The committee sits twice a month, and if you miss the first sitting you're waiting for the next." },
      { speaker: "W", text: "Then I'll put it in this week. Do I need my manager's signature?" },
      { speaker: "M", text: "Not a signature these days — just a note from her saying she's aware of it. We changed that last year, because the paper forms kept going missing." }
    ],
    translation: "女性:秋のデータ分析の資格講座に申し込むつもりです。補助制度は試験も対象ですか、それとも講座だけですか?\n男性:合格すれば両方です。不合格なら講座料のみ、しかも1回目の受験に限ります。\n女性:思っていたより手厚いですね。申請の締め切りは?\n男性:講座開始の3週間前で、秋学期なら22日です。ただ、もっと早く出すことをお勧めします。委員会は月2回しか開かれないので、1回目を逃すと次回まで待つことになります。\n女性:では今週中に出します。上司の署名は必要ですか?\n男性:今は署名ではなく、承知している旨のメモを本人からもらうだけです。紙の書類が紛失続きだったので、去年変更しました。",
    questions: [
      {
        q: "What does the woman ask about first?",
        choices: [
          "Which costs the policy covers",
          "How long the course lasts",
          "Where the examination is held",
          "Whether the course is offered online"
        ],
        answer: 0,
        explanation: "Does the reimbursement policy cover the exam, or only the course? が根拠。選択疑問文の形で『どこまでが対象か』を尋ねている。日程や場所は話題に出ていない。"
      },
      {
        q: "Why does the man advise submitting the application early?",
        choices: [
          "The course may fill up.",
          "The fee rises closer to the term.",
          "Applications are reviewed only at set intervals.",
          "The deadline may be brought forward."
        ],
        answer: 2,
        explanation: "The committee sits twice a month, and if you miss the first sitting you're waiting for the next(委員会は月2回、1回目を逃すと次回待ち)が根拠。sit は『会議を開く』の意味。締め切り自体が動くとは言っていないので(D)は誤り。"
      },
      {
        q: "What must the woman's manager provide?",
        choices: [
          "A signed paper form",
          "Attendance at a committee meeting",
          "A written performance review",
          "A message confirming that she knows about it"
        ],
        answer: 3,
        explanation: "Not a signature these days — just a note from her saying she's aware of it が根拠。『紙の書類・署名』はやめた旧方式なので(A)は本文の語をそのまま使った誤答。Not 〜 で否定された内容を選ばせるひっかけ。"
      }
    ]
  },
  {
    id: "s8p3-13",
    title: "会話 13",
    audio: [
      { speaker: "W", text: "We've finished drying the third floor. The moisture readings there are back where they should be, so your people can move in tomorrow." },
      { speaker: "M", text: "And the fourth? That's where the water came from." },
      { speaker: "W", text: "The fourth is dry too, but the ceiling panels along the east corridor have to come down. They're stained, and from below we can't tell whether the insulation behind them held up." },
      { speaker: "M", text: "How long once you start?" },
      { speaker: "W", text: "Two days for the panels. Where I'd hesitate is the carpet on the fourth floor. It looks fine, but carpet that's been wet more than forty-eight hours usually has to go, and yours sat over a long weekend." },
      { speaker: "M", text: "Then price both — replacing it now, and cleaning it and hoping. I'd rather put two numbers in front of my director than argue about one." }
    ],
    translation: "女性:3階の乾燥は完了しました。含水率も本来あるべき数値に戻っているので、明日から社員の方が入れます。\n男性:4階は? 水はそこから来たのですが。\n女性:4階も乾いています。ただ東側廊下の天井板は外さなければなりません。染みが出ていますし、下からでは裏の断熱材が無事かどうか分かりません。\n男性:着手してからどのくらいですか?\n女性:天井板は2日です。私が引っかかっているのは4階のカーペットの方です。見た目は問題ありませんが、48時間以上濡れていたカーペットはたいてい交換になります。御社のものは連休をまたいで放置されていました。\n男性:では両方の見積もりを出してください。今すぐ交換する場合と、洗浄して様子を見る場合と。1つの数字で言い争うより、部長に2つの数字を出したいので。",
    questions: [
      {
        q: "What does the woman report about the third floor?",
        choices: [
          "It needs further drying.",
          "It can be used again.",
          "Its carpet will be replaced.",
          "It was not affected at all."
        ],
        answer: 1,
        explanation: "your people can move in tomorrow(明日から人が入れる)が根拠。3階は乾燥完了なので(A)は誤り、カーペットの話は4階についてなので(C)も誤り。階ごとに情報が分かれているので、どの階の話かを追う必要がある。"
      },
      {
        q: "Why must the ceiling panels be taken down?",
        choices: [
          "To check the condition of the material behind them",
          "To install new lighting",
          "To satisfy a building regulation",
          "To reduce noise in the corridor"
        ],
        answer: 0,
        explanation: "from below we can't tell whether the insulation behind them held up(下からでは裏の断熱材が無事か分からない)が根拠。held up は『持ちこたえた』の意味。染みは外す理由の一つだが、目的は裏側の確認。"
      },
      {
        q: "What does the man ask the woman to prepare?",
        choices: [
          "A written safety certificate",
          "A schedule for the fourth floor",
          "A list of her technicians",
          "Estimates for two different approaches"
        ],
        answer: 3,
        explanation: "price both — replacing it now, and cleaning it and hoping(交換案と洗浄案の両方に値段を付けて)が根拠。price は動詞で『値付けする』。two numbers という言い方も二通りの見積もりを指す。"
      }
    ]
  }
];
