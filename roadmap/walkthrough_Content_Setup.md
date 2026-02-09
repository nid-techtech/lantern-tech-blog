# コンテンツ追加・管理ガイド

Astro Content Collections を導入し、各言語ごとに独立したコンテンツ管理が可能になりました。

## ディレクトリ構造

`src/content/` 配下に以下のディレクトリが作成されています。

- `blog/`
  - `jp/` (日本語記事)
  - `en/` (英語記事)
  - `zh/` (中国語記事)
- `newsrelease/` (同様の構成)
- `notes/` (同様の構成)

## 新しい記事の追加方法

1. **`src/data/navigation.ts` にスラッグを追加**
   - 既存のロジック通り、メニューやページ生成の基準はこのファイルです。まずここでページ定義を行ってください。
   - 例: `slug: "my-new-post"`

2. **Markdownファイルの作成**
   - 対応する言語フォルダ（例: `src/content/blog/jp/`）に、`slug` と同名のMarkdownファイルを作成します。
   - 例: `src/content/blog/jp/my-new-post.md`

3. **Frontmatterの記述**
   - ファイルの先頭にメタデータを記述します。

\`\`\`markdown
---
title: 記事のタイトル
description: 記事の概要
coverImage: /path/to/image.jpg
draft: false
---

ここに本文を記述します。
画像やリンクは標準的なMarkdown記法で記述可能です。
\`\`\`

## 注意点

- **ファイル名とスラッグの一致**: Markdownのファイル名は `navigation.ts` の `slug` と完全に一致させてください。
- **言語ごとの独立性**: 言語ごとにファイルが分かれているため、言語版によって全く異なる画像を使ったり、段落構成を変えることが可能です。
- **ファイルがない場合**: 特定の言語のファイルを作成しなかった場合、そのページは「Generating content...」というプレースホルダーが表示されます（または空になります）。
