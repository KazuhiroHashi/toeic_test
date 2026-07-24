VERDICT: PASS

# set5 Part 1 校閲所見

対象: `/workspace/toeic_test/data/set5/part1.js`(写真描写問題・6問)

注記: 写真本体(`assets/part1/s5-XX.png`)は監査対象外のため、解説文が描写する情景と選択肢・正解キー・訳の内部整合性を中心に点検した。

## 総評
重大〜中程度の問題なし。英語は全問自然で文法・語法とも正しい。日本語訳・解説は正確で、強調は『』を使用、Markdownの `**` は不使用。TOEICの世界観として適切(園芸・演奏・車の整備・会議室・塗装・理容)。

## 点検結果(観点別)
- (a) 英語: 全問自然。`watering some plants` / `examining the engine of a car` / `Chairs have been arranged around a table`(状態受動態)/ `A customer's hair is being cut`(進行受動態)など、Part 1 定番表現が正しく使えている。スペルミスなし。
- (b) 正解キー: 各問の解説が正解選択肢の情景を明確に支持し、他3択は動作・物の有無で明確に不正解。複数正解・正解なしは検出されず。
  - s5p1-01 → (A) watering。(C)putting on は動作進行で、解説の「はめ終えた状態」と区別され妥当。
  - s5p1-02 → (B) playing a guitar。写り込みのマイクスタンド・椅子で誘うひっかけ、整合。
  - s5p1-03 → (C) examining the engine。(D)closing the hood は逆動作で明確に不正解、良い。
  - s5p1-04 → (D) Chairs have been arranged。無人設定と(A)(B)(C)の人の動作描写の排除が一貫。
  - s5p1-05 → (A) rolling paint onto a wall。足元の缶を使った(D)ひっかけ、整合。
  - s5p1-06 → (C) hair is being cut。(D)鏡の存在を使ったひっかけ、整合。
- (c) 日本語解説・訳: 正確。強調はすべて『』。`**` の使用なし。
- (d) 答えの漏れ: Part 1 は1写真1設問のため該当なし。
- (f) 問題数・id・正解位置:
  - 問題数 6(現行TOEIC Part 1 の6問と一致)。
  - id は s5p1-01〜s5p1-06 で一意。
  - 正解位置 A=2, B=1, C=2, D=1。6問としては偏りなく良好。
- (g) 不適切な題材なし。

## 軽微な所見(修正必須ではない)
- 写真そのものを確認できないため、(b)の最終判定は「解説の描写が写真と一致している」前提。画像差し替え時は解説の情景(例: s5p1-06 で客がうつむき鏡をのぞいていない、s5p1-04 が無人)と写真の齟齬がないか要再確認。
