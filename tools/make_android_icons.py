#!/usr/bin/env python3
"""Android のアプリアイコンを assets/appicon/icon-1024.png から作る。

    python3 tools/make_android_icons.py

Capacitor の雛形には緑のプレースホルダのアイコンが入っている。そのまま出すと
Play の審査でもストアの見た目でも確実に困るので、必ず実物に置き換える。

作るもの:

  android/app/src/main/res/mipmap-*/ic_launcher.png            … 昔ながらの四角いアイコン
  android/app/src/main/res/mipmap-*/ic_launcher_round.png      … 丸く切り抜いたもの
  android/app/src/main/res/mipmap-*/ic_launcher_foreground.png … 新しい形式の前景
  android/app/src/main/res/values/ic_launcher_background.xml   … 同じく背景の色
  build/play-512.png                                           … ストア掲載用(512×512)

ストア用の 512×512 は Play Console の画面に手で上げるもので、アプリの中には
入らない。だから assets/ ではなく build/ に置く(git には入れない)。

新しい形式(Android 8 以降のアダプティブアイコン)は、端末が好きな形に
切り抜く。切り抜かれても消えないのは中央の 66% だけなので、絵はそこに収める。
外側は原画の隅から取った色で埋める。

必要なもの: Pillow(pip install pillow)
"""

import os
import sys

try:
    from PIL import Image, ImageDraw
except ImportError:
    sys.exit("Pillow がありません。pip install pillow を実行してください。")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "assets", "appicon", "icon-1024.png")
RES = os.path.join(ROOT, "android", "app", "src", "main", "res")

# 密度ごとの大きさ。48dp(通常のアイコン)と 108dp(アダプティブの前景)。
DENSITIES = {
    "mdpi": (48, 108),
    "hdpi": (72, 162),
    "xhdpi": (96, 216),
    "xxhdpi": (144, 324),
    "xxxhdpi": (192, 432),
}

# アダプティブアイコンで必ず見える範囲は中央の 66%。絵をそこに収める。
SAFE_RATIO = 72.0 / 108.0


def main():
    if not os.path.exists(SRC):
        sys.exit("NG: アイコンの原本がありません: " + SRC)
    if not os.path.isdir(RES):
        sys.exit("NG: android/ がありません。先に npx cap add android を実行してください。")

    src = Image.open(SRC).convert("RGBA")

    # 背景色は原画の左上の色。全面が青の絵なので、これで外側までなじむ。
    bg = src.getpixel((8, 8))[:3]
    bg_hex = "#%02X%02X%02X" % bg

    written = 0
    for name, (legacy, adaptive) in DENSITIES.items():
        d = os.path.join(RES, "mipmap-" + name)
        os.makedirs(d, exist_ok=True)

        # 1. 四角いアイコン(そのまま縮小)
        sq = src.resize((legacy, legacy), Image.LANCZOS)
        sq.save(os.path.join(d, "ic_launcher.png"))

        # 2. 丸いアイコン(円で切り抜く)
        mask = Image.new("L", (legacy * 4, legacy * 4), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, legacy * 4 - 1, legacy * 4 - 1), fill=255)
        mask = mask.resize((legacy, legacy), Image.LANCZOS)
        rd = sq.copy()
        rd.putalpha(mask)
        rd.save(os.path.join(d, "ic_launcher_round.png"))

        # 3. アダプティブの前景(中央 66% に絵を置き、外は透明)
        inner = int(round(adaptive * SAFE_RATIO))
        fg = Image.new("RGBA", (adaptive, adaptive), (0, 0, 0, 0))
        art = src.resize((inner, inner), Image.LANCZOS)
        off = (adaptive - inner) // 2
        fg.paste(art, (off, off), art)
        fg.save(os.path.join(d, "ic_launcher_foreground.png"))

        written += 3

    # 4. アダプティブの背景色
    with open(os.path.join(RES, "values", "ic_launcher_background.xml"), "w", encoding="utf-8") as f:
        f.write(
            '<?xml version="1.0" encoding="utf-8"?>\n'
            "<resources>\n"
            '    <color name="ic_launcher_background">%s</color>\n'
            "</resources>\n" % bg_hex
        )

    # 5. ストア掲載用の 512×512(Play Console に手で上げる。AAB には入らない)
    out = os.path.join(ROOT, "build")
    os.makedirs(out, exist_ok=True)
    play = os.path.join(out, "play-512.png")
    src.resize((512, 512), Image.LANCZOS).save(play)

    print("背景色: " + bg_hex)
    print("書き出し: mipmap %d 個 + 背景色 + ストア用 512×512" % written)
    print("ストア用: " + os.path.relpath(play, ROOT))


if __name__ == "__main__":
    main()
