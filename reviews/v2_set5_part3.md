VERDICT: ISSUES(8)

# set5 Part 3 校閲所見(v2)

対象: `/workspace/toeic_test/data/set5/part3.js`(ファイルは未変更・監査のみ)

## 形式チェック(観点 e / f)— すべて適合
- 13会話 × 3問 = 39問。id は `s5p3-01`〜`s5p3-13` で一意。`node --check` 通過。
- audio 発言数は 4〜6 の範囲内(4発言×5、5発言×3、6発言×5)。
- 図表2:`s5p3-08`(graphicKind: list / フロア案内)、`s5p3-12`(graphicKind: invoice)。いずれも `graphic` を持ち、設問に `Look at the graphic.` が1つずつ(計2箇所)。
- 3人会話2:`s5p3-05`(W/M/W2=女性2+男性1)、`s5p3-07`(W/M/M2=男性2+女性1)。いずれも設問で発言者の特定を問うている。
- 意図問題1:`s5p3-09` Q2(`What does the woman imply when she says, "..."?`)。ファイル全体で `imply when` は1箇所のみ。
- 正解位置:A=10 / B=10 / C=10 / D=9。偏りなし。
- 選択肢はすべて4つ。Markdownの `**` は不使用(全文検索で0件)、強調は『』。
- 政治/宗教/事故など不適切題材なし(観点 g)。

## 正解キーの検証(観点 b)— 計算・事実は一致
- `s5p3-12`:図表の合計 40+55+180+35=310 で整合。剪定は $90×2 のうち1本分過剰 → 返金 $90(選択肢C)で一意に決まる。$180 は2本分のひっかけとして機能。
- `s5p3-09`:小論文90枚、男性が「半分=後半45枚」= 90/2 で数字が整合。
- `s5p3-08`:図表は1〜4階の4フロア構成で、音声の "Imaging is on the top floor" と『4階=Radiology(X線・画像診断)』が一致。
- `s5p3-02`:水曜のライブ授業+「2日後くらい」→「金曜午後まで」で整合。
- 上記以外の設問も、根拠発話が明確で他選択肢は明確に不正解。**唯一 `s5p3-04` Q1 のみ複数正解の懸念あり(下記 ISSUE-06)。**

---

## 指摘事項(重大〜中程度:8件)

### ISSUE-01 【観点d 答えの漏れ】s5p3-02 Q2 の設問文が Q1 の正解をそのまま与えている
Q1 `What is the woman asking about?` の正解は C `When a lecture recording will be available`。
一方 Q2 の設問文が `When will this week's recording be available?` で、Q1 の正解選択肢とほぼ逐語一致。音声を聞かずに Q2 の設問文を読むだけで Q1 が確定する。
修正案:Q1 を `What does the woman ask the man about?` のままにするなら、Q2 を `According to the man, when will the material be ready?` のように主題語を伏せる。または Q1 を「今週の授業日はいつか」等、別観点の設問に差し替える。

### ISSUE-02 【観点d】s5p3-05 Q1(主題)が他設問の選択肢の "video" で解ける
Q1 `What are the speakers planning?` の正解は A `A recruitment video shoot`。他3つは press conference / holiday party / training seminar。
しかし Q2 の選択肢 A に `Edit the final video`、Q3 の選択肢 C に `Film the interviews` があり、「映像制作の話」と分かる。Q1 で "video" を含む選択肢は正解の1つだけなので、聞かずに確定できる。
修正案:Q2 の distractor を `Edit the final version` → さらに `Approve the budget` 等、映像を連想させない語に変更。Q3 の `Film the interviews` は `Attend the shoot`(または `Book the studio` のみ残す)に置き換える。

### ISSUE-03 【観点d】s5p3-09 Q1(主題)が他設問の選択肢の "grading / essays" で解ける
Q1 `What are the speakers mainly discussing?` の正解は D `Grading student essays`。
Q2 の選択肢に `She has already finished grading.` `She needs more essays.`、Q3 の正解に `Grade half of the essays` があり、"grading" と "essays" が二重に露出。Q1 で該当する選択肢は正解のみ。
修正案:Q2 の distractor を `She has already completed the task.` `She needs more time.` に、Q3 の正解を `Take on half of the work` に言い換え、Q1 の選択肢側に主題語を残す形にする。

### ISSUE-04 【観点d】s5p3-10 Q2 の設問文が Q1 の正解を与えている
Q1 `What is the man looking for?` の正解は B `Plants for a shady area`(他は Garden tools / Outdoor furniture / A watering system)。
Q2 の設問文が `What does the woman say about the plants she recommends?` で「植物を探している」ことが確定してしまい、Q1 で植物に該当する選択肢は正解のみ。さらに Q3 の選択肢 A `Order the plants online` でも "plants" が露出。
修正案:Q2 を `What does the woman say about her recommendations?`、Q3 の distractor を `Order some items online` に変更する。

### ISSUE-05 【観点d】s5p3-03 Q2 と Q3 が相互に答えを教えている
Q2 の正解 D `Signs above the bins` と Q3 の正解 D `Design some signs` が同じ「掲示」を指し、しかも Q2 で sign を含む選択肢・Q3 で sign を含む選択肢はそれぞれ正解の1つだけ。片方が分かればもう片方が確定する(正解位置も両方Dで揃っている)。
加えて Q2 の選択肢に "bins" があるため、Q1 の正解 C `Setting up recycling stations` も推測しやすくなっている。
修正案:Q3 の正解を `Prepare some notices`(音声側は signs のまま=言い換えで対応)にし、Q2 の distractor に `A water dispenser` 以外の bin を含まない語を配置する。

### ISSUE-06 【観点b 正解キー】s5p3-04 Q1 は場所が音声から一意に決まらない
`Where most likely are the speakers?` の正解は B `At the man's home` だが、音声に「今その場所にいる」ことを示す手がかりがない。発話は "you'd like to redo the front garden" / "The lawn needs so much watering in summer" / "I'll e-mail you a design and a cost estimate by Tuesday" のみで、園芸店や設計事務所のカウンターでの相談でも成立する。A `At a garden center` を選ぶ受験者を排除できない(同セット内に園芸店の会話 `s5p3-10` が存在するため、なおさら紛らわしい)。
修正案:女性の発話に現場性を足す。例:"Now that I've had a look around your yard, I'd recommend drought-tolerant plants..." や "Thanks for having me out to the house today." を入れれば B が一意に決まる。

### ISSUE-07 【AGENT_SPEC「場面を多様に」違反】題材クラスタの偏り(13会話中7会話が3テーマに集中)
- 医療系3:`s5p3-01`(理学療法クリニックの予約変更)、`s5p3-06`(歯科の初診受付)、`s5p3-08`(医療センターのフロア案内・X線)
- 園芸/植物2:`s5p3-04`(前庭のリフォーム相談)、`s5p3-10`(園芸店で日陰向きの植物)——どちらも「水やりの量・頻度」が話題になる点まで重複
- リサイクル2:`s5p3-03`(オフィスのリサイクルステーション)、`s5p3-13`(市の電子機器リサイクルの日)

本番のPart 3は13会話が概ね別業種に散る。有料品質としては、上記のうち2〜3本を交通(空港/鉄道)、宿泊、求人・面接、社内IT、配送トラブル等に差し替えるのが望ましい。

### ISSUE-08 【観点c 訳の正確さ】s5p3-07 の日本語訳が音声にない名前を追加している
英語音声で女性の名前は一度も呼ばれていない(呼ばれるのは Tom と Raj のみ)。にもかかわらず translation は「ローラ(女性)」「ローラ:」と実在しない名前を与えている。`s5p3-05` は音声中に "How long will the shoot take, Grace?" があるため「グレース」は妥当だが、`s5p3-07` は根拠がない。
修正案:訳の話者ラベルを「女性:」に統一する。あるいは音声側に "Thanks, Tom. Laura here will handle..." のような形ではなく、冒頭を "Tom, Raj — it's Laura." 等にして名前を実際に出す(ただし設問は名前を問わないので、訳の修正だけで足りる)。

---

## 軽微な指摘(修正必須ではない)
- `s5p3-06`:Q3 の選択肢 A `Call the dentist`、Q2 の正解 `A medical history form` により歯科であることが露出し、Q1 の正解 B `To have his teeth cleaned` が推測しやすい。設問文が既に "at the clinic" と場所を明かしているので致命的ではないが、`Call the dentist` は `Call a colleague` 等に置き換える余地がある。
- `s5p3-13`:Q2 の選択肢 A `Recycling large refrigerators` に "Recycling" が露出し、Q1 の正解 C `To ask about recycling old electronics` を後押しする。ただし Q2 には `A home collection service` `Repairing small appliances` もあり Q1 の他選択肢と対応するため、一意には決まらない。軽微。
- `s5p3-03`:"ask a shop to laminate them" は意味は通るが、`a print shop` とすると自然さが増す。
- `s5p3-08`:図表が『3階=Physical Therapy』を含み、`s5p3-01` の理学療法クリニックと題材が近い。ISSUE-07 を直す際に併せて調整すると良い。
- 英語そのものの誤り(文法・語法・スペル・事実矛盾)は全39問・13会話で検出されなかった。"drought-tolerant plants like lavender and ornamental grasses"、"ferns and hostas do really well in shade"、"the hygienist will call you in" などいずれも自然かつ事実として正しい。
