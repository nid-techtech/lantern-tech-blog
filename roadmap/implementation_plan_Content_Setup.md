# コンテンツ管理システム実装計画

## ゴール
ユーザーがMarkdown/MDXファイルを使用してコンテンツ（ブログ、ニュースリリース、Notes）を管理できるようにします。
現在はハードコードされたプレースホルダーが表示されていますが、**Astro Content Collections** を導入してコンテンツとコードを分離します。
最も重要な点として、**言語ごとに個別のコンテンツファイル**（JP, EN, ZH）を持つ構成にし、各言語版で異なる画像、リンク、テキスト構成を使用したいという要件を満たします。

## ユーザーレビューが必要な事項
> [!IMPORTANT]
> **コンテンツの同期**: Markdownファイルのファイル名（例: `integrate.md`）に使用するスラッグは、`src/data/navigation.ts` で定義されている `slug` と一致している必要があります。
> メニュータイトルは `navigation.ts` から取得されますが、Markdownのフロントマター（`title: ...`）にタイトルが定義されている場合は、ページヘッダーにはそちらが優先的に表示されるようにします。

## 提案する変更

### 設定
#### [NEW] [config.ts](file:///Users/ofuchirin/code/lantern-tech-blog/src/content/config.ts)
- `blog`、`newsrelease`、`notes` の3つのコレクションを定義します。
- スキーマ（データ構造）には以下を含めます：
    - `title` (任意, 文字列)
    - `description` (任意, 文字列)
    - `coverImage` (任意, 画像)
    - `draft` (下書きフラグ, 真偽値, デフォルトfalse)

### コンテンツディレクトリ構造
#### [NEW] コンテンツディレクトリ
- `src/content/blog/jp/`
- `src/content/blog/en/`
- `src/content/blog/zh/`
- (`newsrelease` と `notes` についても同様)

### ページロジックコンポーネント
#### [MODIFY] [blog/[slug].astro](file:///Users/ofuchirin/code/lantern-tech-blog/src/pages/[lang]/blog/[slug].astro)
- `getStaticPaths` を更新し、引き続き `navigation.ts` を基にパスを生成しますが（メニュー項目の存在保証のため）、同時にコレクションからコンテンツを取得するようにします。
- エラーハンドリング: 特定のスラッグ/言語に対応するMarkdownファイルが存在しない場合でも、ビルドが落ちないように適切に処理します（404表示やフォールバックなど）。
- コレクションエントリから `<Content />` コンポーネントをレンダリングします。

#### [MODIFY] [newsrelease/[slug].astro](file:///Users/ofuchirin/code/lantern-tech-blog/src/pages/[lang]/newsrelease/[slug].astro)
- ブログと同様のロジックを適用します。

#### [MODIFY] [notes/[slug].astro](file:///Users/ofuchirin/code/lantern-tech-blog/src/pages/[lang]/notes/[slug].astro)
- ブログと同様のロジックを適用します。

## 検証計画

### 自動テスト
- なし（コンテンツの表示は目視確認を行います）。

### 手動検証
1. **セットアップ**: `src/content/blog/jp/integrate.md` と `src/content/blog/en/integrate.md` を作成し、それぞれ**異なる内容**（例: 異なるサンプル画像やテキスト）を記述します。
2. **JP版確認**: `http://localhost:4321/jp/blog/integrate` を開き、日本語版の内容が表示されることを確認します。
3. **EN版確認**: `http://localhost:4321/en/blog/integrate` を開き、英語版の内容が表示されることを確認します。
4. **ZH版確認**: `http://localhost:4321/zh/blog/integrate` を開き、ファイルがない場合の挙動を確認します。
