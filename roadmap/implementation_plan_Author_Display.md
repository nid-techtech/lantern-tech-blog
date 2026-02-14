# 実装計画 - 説明文の下に著者を表示する

この計画では、ブログ記事の説明文の下に著者を表示するための変更の概要を説明します。

## 提案される変更

### [コンテンツ設定]
#### [変更] [config.ts](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/content/config.ts)
- `blog` コレクションスキーマに `author: z.string().optional()` を追加します。

### [ブログコンテンツ]
#### [変更] [integrate.md](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/content/blog/jp/integrate.md)
- 検証用にフロントマターに `author: "Lantern-TECH Team"` を追加します。

### [ブログ投稿テンプレート]
#### [変更] [slug.astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/blog/[slug].astro)
- `<header>` セクションを更新し、`entry.data.author` が存在する場合に `<p>` タグ内にレンダリングするようにします。
- 説明文の下に配置します。
- 新しい `.author` クラスのCSSスタイルを追加します。

## 検証計画

### 手動検証
1.  開発サーバーを起動します (`npm run dev`)。
2.  フロントマターに `author` があるブログ記事（例: `/jp/blog/integrate`）に移動します。
3.  著者名が説明文の下に表示されていることを確認します。
4.  著者テキストのスタイルを確認します。
