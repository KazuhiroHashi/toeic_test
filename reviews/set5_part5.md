VERDICT: ISSUES(1)

# セット5 Part 5 校閲所見

監査対象: `/workspace/toeic_test/data/set5/part5.js`(短文穴埋め・30問)

## 重大〜中程度の問題

- **s5p5-19(複数正解の疑い / 観点b)**
  問題文: "The contractor agreed to complete the renovation by June, ______ that the client provides access to the site."
  選択肢: provider / providing / provided / provision、正解キー=provided(index 2)。
  `provided that` と `providing that` はどちらも「〜という条件で(= if / on condition that)」を導く接続詞として文法的・慣用的に成立する。したがって "providing that the client provides access to the site" も正しい英文となり、正解が2つ存在してしまう。解説自身が「providing that も使えるが」と認めており、作問上の欠陥。
  修正案: 選択肢 `providing` を、接続詞になり得ない別語(例: `provide` の別活用や無関係な派生語、あるいは `to provide`)に差し替え、正解を provided に一本化する。

## 軽微な指摘(VERDICT には算入しない)

- **id 採番のずれ(観点f)**: 仕様は `<PREFIX>-01`〜`-30` の連番だが、本ファイルは `s5p5-01, e1, 03, 04, …, e2, 10, …` のように 02/09/15/18 を欠番とし、代わりに `s5p5-e1`〜`e5`(基礎5問)を使用。id は全て一意で重複はなく、問題数も 30 で要件を満たす。連番の見た目のみ非標準。
- 正解位置の分布は A=8, B=8, C=7, D=7 で良好に散っている。
- 語彙問題(scrutinize, comprehensive, pursuant, eligible, contrary to, reimburse, around the clock 等)は約3割を確保。難易度も基礎(e1〜e5)〜上級(Had it not been / whereby / pursuant / however+形容詞)まで適切にミックス。
- 強調は全て『』を使用し、Markdown の `**` は不使用。訳・解説の日本語は正確。

## 確認済みで問題なしと判断した主な項目

- s5p5-04 `Had it not been`(帰結節 would have reached との過去反実仮想の一致)正しい。`Were it not` は現在時制で不可、という区別も的確。
- s5p5-07 `to which`(aspire to + 先行詞 position、"for over a decade" は時間句)正しい。
- s5p5-e2 `receive`(主語 all attendees が複数、receives は単数で不可)正しい。
- s5p5-12 `did`(Not until 文頭倒置+原形 begin)正しい。
- s5p5-13 `thereby`(+ -ing で結果)/ s5p5-20 `prompting`(分詞構文)/ s5p5-29 `whereby` いずれも正しく、他選択肢は明確に不正解。
- s5p5-22 `if (they are) adopted`、s5p5-24 `however (they are) effective` の省略構文いずれも単一正解で妥当。
- 政治/宗教/事故等、TOEIC 世界観に不適切な題材は無し。`node --check` レベルの構文破綻を招く記述も本文中に見当たらず。
