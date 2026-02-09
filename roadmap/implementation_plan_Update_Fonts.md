# 実装計画 - フォント更新

Webサイトのフォント構成を更新し、メインフォントとしてLINE Seed JP、コードブロックにJetBrains Mono、中国語ページにNoto Sans SC (英数字はLINE Seed JP) を使用するようにします。これらは全てGoogle Fontsから取得します。

## 変更案

### 設定
#### [MODIFY] [global.css](file:///Users/ofuchirin/code/lantern-tech-blog/src/styles/global.css)
- `--font-base` を "LINE Seed JP" に更新。
- `--font-code` を "JetBrains Mono" に更新。
- `--font-zh` を "Noto Sans SC", "LINE Seed JP" に更新。
- 古い `@font-face` ルールを削除。

### レイアウト
#### [MODIFY] [BaseLayout.astro](file:///Users/ofuchirin/code/lantern-tech-blog/src/layouts/BaseLayout.astro)
- Google Fonts の `<link>` タグを更新し、以下のフォントを読み込む:
    - `LINE Seed JP` (weight: 400, 700)
    - `Noto Sans SC` (weight: 400, 700)
    - `JetBrains Mono` (weight: 400)

## 検証計画

### 手動検証
- **メインフォント**: ページを確認し、`LINE Seed JP` が適用されていることを検証。
- **コードブロック**: コードスニペットを確認し、`JetBrains Mono` が適用されていることを検証。
- **中国語ページ**: 中国語ページを確認し、漢字以外も適切に表示されるか検証。
