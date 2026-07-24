VERDICT: ISSUES(1)

# Set4 Part4 校閲所見

対象: `/workspace/toeic_test/data/set4/part4.js`
仕様: Part 4 = 10トーク×3問=30問・各トークに kind・図表問題2つ。

## 構成チェック(合格)
- トーク数 10(s4p4-01〜10)、各3問=30問。id 一意。○
- kind 付与済み・多様: telephone message×2 / advertisement / tour information / broadcast / excerpt from a meeting / announcement×2 / speech / talk。重複は各2までで許容範囲。○
- 図表問題2つ: s4p4-05(graphicKind:"schedule"・Look at the graphic.)、s4p4-09(graphicKind:"list"・Look at the graphic.)。○
- 正解位置の分布: A=7 / B=8 / C=8 / D=7。均等。○
- 日本語解説・訳の強調は全て『』。Markdown `**` の使用なし。○
- 英語は全トーク自然・文法/スペル問題なし。TOEIC世界観として不適切な題材なし。○
- 各正解キーは本文根拠と一致し最適。他選択肢は明確に不正解。複数正解・正解なしは見当たらず。○

## 中程度の問題(n=1)

### [1] s4p4-05 図表問題 Q1 の答えが Q2 から推測できる(観点d)
- Q1(図表)「Which phase will be delayed?」正解=Marketing campaign。音声は日付『July』としか言わないため、本来は図表で July→Marketing campaign を突き合わせる必要がある(=図表必須の設計)。
- しかし同トーク Q2「Why will the phase be delayed?」の正解が『The advertising agency needs more time』であり、音声も "advertising agency ... finalize the visuals"。advertising/visuals は Marketing campaign と直結するため、受験者は図表を見なくても Q2 の情報だけで Q1 を「Marketing campaign」と特定できてしまう。
- 図表依存を意図した設問の独立性が損なわれている。修正案: Q2 の遅延理由を図表フェーズ名を連想させない内容にする(例: "a key supplier's shipment is delayed" / "final safety certification is still pending" 等)、あるいは Q2 を別観点(遅延の影響・再開月など)に差し替える。

## 軽微な指摘(n には算入せず)
- s4p4-02 Q2 の誤答選択肢 "A free gym bag" が業種問題 Q1(正解=A health club)を弱く示唆する。ただし health club は本文冒頭で明言され、gym bag は一般的な小物のため実害は小さい。気になるなら "A free water bottle" 等、業種を連想させない語に変更可。
- s4p4-07 Q2: "a gymnasium, an art studio, and a public computer lab that anyone ... is welcome to use free of charge." 関係節は直近の computer lab を修飾する自然な読みで正解=computer lab で妥当。曖昧さはほぼないが、より明確にするなら "a public computer lab, which anyone ... can use free of charge" とコンマを入れると誤読の余地が消える(任意)。
