# リスニング音声の作り方(edge-tts)

> このページは iPhone でも読めます。実際のコマンド実行は Mac のターミナルで行います。
> コードブロックの右上にコピーボタンが出るので、押してそのまま貼り付けられます。

## なぜやるのか

いまはスマホの読み上げ機能で音を作っているため、声が機械的で聞き取りにくい。
Mac で高品質な音声ファイル(mp3)を作ってアプリに入れると、**iPhone でも Android でも PC でも全員が同じきれいな音声**で聞けるようになります。

使うのは **edge-tts**(Microsoft のニューラル音声)。**完全無料・APIキー不要・課金設定なし**です。ChatGPT の契約や OpenAI API とは無関係なので、追加料金は一切かかりません。

## 手順

ターミナルを開く(Command+スペース →「ターミナル」→ Enter)。

### 1. 準備(初回だけ)

```bash
pip3 install edge-tts
```

### 2. データを取得(初回だけ)

```bash
cd ~/Desktop && git clone https://github.com/KazuhiroHashi/toeic_test.git && cd toeic_test
```

すでに持っている場合は、代わりにこちら:

```bash
cd ~/Desktop/toeic_test && git pull
```

### 3. 音声を作る(メインの作業)

```bash
python3 tools/generate_audio.py
```

- 全 1925 クリップを順に生成します。目安は **30〜60分**。
- 途中で止めても、もう一度同じコマンドを実行すれば **続きから** 再開します。
- 放置しておけば終わるので、この間に Part 1 の写真作りを進めるのが効率的です。

### 4. GitHub に反映(これで全端末に反映)

```bash
git add assets/audio && git commit -m "リスニング音声を追加" && git push
```

完了です。アプリは音声ファイルがあればそれを再生し、無ければ従来どおり端末の合成音声を使います。

## 使われる声(本番と同じ4カ国)

- `en-AU-NatashaNeural`
- `en-AU-WilliamNeural`
- `en-CA-ClaraNeural`
- `en-CA-LiamNeural`
- `en-GB-RyanNeural`
- `en-GB-SoniaNeural`
- `en-US-AriaNeural`
- `en-US-GuyNeural`
- `en-US-JennyNeural`

米・英・豪・加をローテーションし、問題ごとに違う話者が当たります。ナレーター(導入文・設問読み上げ)は別の声です。

## 収録される内容(本番と同じ形式)

- **Part 1**: 「Look at the picture marked number N in your test book.」+ A.〜D. の4文
- **Part 2**: 「Number N.」+ 質問 + A.〜C. の3応答
- **Part 3/4**: 「Questions X through Y refer to the following ...」+ 会話/トーク + 設問読み上げ(各8秒ポーズ)

## 困ったとき

| 症状 | 対処 |
|---|---|
| `pip3: command not found` | Mac に Python が未導入。`brew install python3` を実行、または python.org からインストール |
| 途中でエラーが出た | もう一度 `python3 tools/generate_audio.py` を実行すれば続きから再開する |
| 音声を作り直したい | `rm -rf assets/audio` で消してから再実行 |
