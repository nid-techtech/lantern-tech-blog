# 実施計画 - 中国語版フォント設定の更新

中国語版ページにおいて、コードブロックのフォントを修正し、一般テキストではラテン文字（1バイト文字）に「LINE Seed JP」、それ以外（漢字など）に「Noto Sans SC」を適用するようにします。

## 提案される変更

### Global CSS
`src/styles/global.css`

1.  **ラテン文字用サブセットの定義**:
    -   `@font-face` を使用して、`LINE Seed JP` のラテン文字範囲 (`U+0000-00FF`) のみを対象としたフォントファミリ `LINE Seed JP Latin` を定義します。
    -   ソース URL は Google Fonts から取得したものを使用します。

2.  **中国語フォント変数の更新**:
    -   `--font-zh` の定義を変更し、先頭に `LINE Seed JP Latin` を追加します。
    -   順序: `"LINE Seed JP Latin", "Noto Sans SC", ...`

3.  **コードブロックのフォント指定の修正**:
    -   `:lang(zh) code`, `:lang(zh) pre` セレクタを追加し、明示的に `var(--font-code)` (`JetBrains Mono`) を適用します。これにより、`:lang(zh)` によるフォント上書きを防ぎます。

## 検証計画

### 手動検証
1.  開発サーバーを開く。
2.  中国語版ページ（例: `/zh/blog/...`）にアクセスする。
3.  **コードブロック**: `JetBrains Mono` が適用されていることを確認する（特有の `0` や `l` の形状で確認）。
4.  **一般テキスト**:
    -   英数字が `LINE Seed JP` で表示されていることを確認する。
    -   漢字が `Noto Sans SC` で表示されていることを確認する。
