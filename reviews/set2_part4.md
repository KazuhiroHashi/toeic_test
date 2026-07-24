VERDICT: ISSUES(3)

# セット2 Part 4 校閲所見

対象: `/workspace/toeic_test/data/set2/part4.js`(10トーク×3問=30問、id `s2p4-01`〜`-10`、全id一意)

## 総評
英語・正解キー・日本語訳/解説の内容は概ね良好。全設問の正解キーは根拠に一致しており、複数正解・正解なしは見当たらない。強調は『』で統一、Markdown `**` の混入なし。以下に、構造(必須フィールド)と正解位置の偏りに関する中程度の問題を挙げる。

## 重大〜中程度の問題

### ISSUE-1: 正解位置がA/Bに極端に偏り、Dが1問も正解になっていない(点検観点 f / AGENT_SPEC 規則6)
全30問の正解位置の分布:
- A(0)=11問 / B(1)=15問 / C(2)=4問 / D(3)=0問

全設問が4択(A〜D)であるにもかかわらず、Dが30問中一度も正解にならず、Cもわずか4問。A・Bに集中している。有料品質としては均等化が必要。
- 加えて `s2p4-10`(受賞スピーチ)は3問すべて正解がA(0,0,0)で、1トーク内でも偏りが目立つ。
- 修正案:各トーク内で正解位置を散らし、全体でA/B/C/Dが概ね均等(各7〜8問程度)になるよう、選択肢の並べ替え(答えのみ書き換え禁止のため、選択肢順を入れ替えてanswerを更新)を行う。特にDを正解にする問題を複数作る。

### ISSUE-2: 全10トークに必須フィールド `kind` が欠落(点検観点 e / Part 4仕様 line 47-48)
Part 4 仕様では各トークに `kind`(`telephone message`/`announcement`/`advertisement`/`broadcast`/`excerpt from a meeting`/`speech`/`tour information` 等)を付けることが必須だが、`s2p4-01`〜`-10` のいずれにも `kind` フィールドが存在しない(`title` に日本語で種別が入っているのみ)。
- 修正案:各オブジェクトに `kind` を追加。例 01=telephone message / 02=announcement / 03=announcement(store) / 04=excerpt from a meeting / 05=advertisement / 06=tour information / 07=telephone message / 08=broadcast / 09=talk / 10=speech。announcementの重複を避け多様化する。

### ISSUE-3: 図表トークに必須フィールド `graphicKind` が欠落(点検観点 e / Part 4仕様 line 49)
図表問題は2つ(`s2p4-04`・`s2p4-09`)あり `graphic` と `Look at the graphic.` は満たしているが、仕様が求める `graphicKind` が両方とも付いていない。
- 修正案:`s2p4-04` に `graphicKind:'list'`(または該当種別)、`s2p4-09` に `graphicKind:'agenda'` を追加。

## 軽微な指摘(参考・VERDICTには数えず)
- `s2p4-09`:Q1(移動したセッション=IT setup)とQ2(変更理由=IT team has an urgent update)が同じ「IT」を核にしており、Q2の正解からQ1を推測しやすい弱い連想が残る。TOEIC本番でも起こりうる範囲だが、Q2の選択肢文言をIT以外の一般表現に寄せるとより独立性が上がる。
- `s2p4-03`:業種を問うQ1(grocery store)に対し、Q2/Q3で produce・checkout 等の語が出るが、"grocery store" 自体は他選択肢に無く許容範囲。

## 確認できた良い点
- 図表2つの数値ロジックは正しい(04:East 450が最大でled、South 210が唯一未達=整合。09:11:00枠=IT setupが午後へ移動=整合)。
- ひっかけ設計が適切(05:無料点検は通常サービスで today-only の設置費無料が正解 / 06:tasting roomが終着でroasting roomは最初=ひっかけ)。
- 政治・宗教・事故等の不適切題材なし。英語は自然でスペルミス・文法誤りは検出されず。
