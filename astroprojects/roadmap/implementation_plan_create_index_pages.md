# インデックスページ作成の実装計画

## 目標の説明
「ブログ」、「発表資料」（ニュースリリース）、「参考文献」（ノート）の各カテゴリのインデックスページを作成します。各ページには、そのカテゴリの記事がサムネイル、タイトル、著者、説明文とともに一覧表示されます。

## 提案される変更

### コンポーネント

#### [NEW] [ArticleCard.astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/components/ArticleCard.astro)
- 記事の概要を表示するための新しいコンポーネント。
- プロパティ: `title`, `description`, `author`, `slug`, `ogImage`, `lang`.
- 使用法: インデックスページで記事を一覧表示するために使用されます。

### ページ

#### [NEW] [src/pages/[lang]/blog/index.astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/blog/index.astro)
- `blog` コレクションの記事を一覧表示します。
- 必要に応じて `getStaticPaths` を使用し、`jp`, `en`, `zh` 用に生成します。
- レイアウト: `BaseLayout` または同様のものを使用します。

#### [NEW] [src/pages/[lang]/newsrelease/index.astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/newsrelease/index.astro)
- `newsrelease` コレクションの記事を一覧表示します。

#### [NEW] [src/pages/[lang]/notes/index.astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/notes/index.astro)
- `notes` コレクションの記事を一覧表示します。

## 検証計画

### 手動検証
- 開発サーバーを起動します (`npm run dev`)。
- `/jp/blog`, `/jp/newsrelease`, `/jp/notes` にアクセスします。
- 具体的なチェック項目:
    - 全ての記事が一覧表示されているか？
    - サムネイルが表示されているか？
    - レスポンシブにレイアウトされているか？
    - リンクは機能しているか？
