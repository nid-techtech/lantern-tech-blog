# 実装計画 - ブログ記事のセクションベース2カラムレイアウト

## ユーザーレビューが必要な事項
> [!NOTE]
> この変更により、ブログ記事のDOM構造が大きく変わります。見出し（H1-H6）や水平線（HR）がセクションの区切りとして扱われ、それらの間のコンテンツが「テキストカラム」と「画像カラム」に自動的に振り分けられます。

## 提案される変更

### [プラグイン]

#### [新規] [src/plugins/rehype-content-grouping.mjs](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/plugins/rehype-content-grouping.mjs)
- MarkdownのAST（抽象構文木）を変換する新しいプラグインを作成します。
- **ロジック**:
    - ルート要素の子ノードを走査します。
    - 見出し (`h1`-`h6`) または 水平線 (`hr`) を検出すると、新しい「セクショングループ」を開始します。
    - 各グループ内で、画像のみを含む段落 (`p > img`) を「画像グループ」に、それ以外を「テキストグループ」に分類します。
    - グループごとに `<div class="content-section"><div class="text-col">...</div><div class="image-col">...</div></div>` のような構造にラップして置換します。
    - 見出し自体は「テキストグループ」の先頭に配置します（これにより画像と見出しがトップで揃います）。

#### [削除] [src/plugins/rehype-image-class.mjs](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/plugins/rehype-image-class.mjs)
- 前回の単純なクラス付与プラグインは不要になるため削除または除外します。

### [Astro設定]

#### [変更] [astro.config.mjs](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/astro.config.mjs)
- `rehypeImageClass` を `rehypeContentGrouping` に置き換えます。

### [ブログ記事レイアウト]

#### [変更] [src/pages/[lang]/blog/[slug].astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/blog/[slug].astro)
- CSSを更新し、新しい構造に対応させます。
- `.content-section`: デスクトップでは `display: flex` または `grid` を使用して横並びにします。
- `.text-col`: 幅 60-65% 程度。
- `.image-col`: 幅 30-35% 程度。Sticky positioning (`position: sticky; top: 1rem;`) を適用すると、縦に長いテキストの横で画像が追従して良い感じになるかもしれません（オプション）。
- モバイルでは `display: block` で縦積みに戻します。

## 検証計画

### 手動検証
- `npm run dev` でプレビュー。
- デスクトップ表示で、H2見出し等の開始位置に合わせて画像が右側に表示されることを確認。
- 複数の画像がある場合、画像カラム内で縦に並ぶことを確認。
- テキストが長い場合、画像の下に空白ができる（正常）ことを確認。
- モバイル表示で崩れがないことを確認。
