# ウォークスルー - 中国語版フォント設定の更新

中国語版ページにおいて、コードブロックとラテン文字のフォント表示を修正しました。

## 変更点

### `src/styles/global.css`

1.  **ラテン文字用サブセットの定義**:
    -   `@font-face` を追加し、`LINE Seed JP Latin` を定義しました。
    -   `unicode-range: U+0000-00FF;` を指定し、英数字のみに適用されるようにしました。

2.  **中国語フォントスタックの更新**:
    -   `:lang(zh)` の `font-family` を `"LINE Seed JP Latin", var(--font-zh)` に変更しました。
    -   これにより、英数字は LINE Seed JP、漢字は Noto Sans SC が適用されます。

3.  **コードブロックフォントの修正**:
    -   `:lang(zh) code`, `:lang(zh) pre` を追加し、`var(--font-code)` (`JetBrains Mono`) を強制的に適用するようにしました。

## 検証結果

### 手動検証
-   [x] **中国語ページ**:
    -   英数字: LINE Seed JP で表示される。
    -   漢字: Noto Sans SC で表示される。
    -   コードブロック: JetBrains Mono で正しく表示される。
