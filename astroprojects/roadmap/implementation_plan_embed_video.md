# 実装計画 - 動画埋め込みサポート

この計画では、`![alt](url)` 構文を使用したMarkdownコンテンツ内のYouTube、Vimeo、Bilibiliリンクの自動動画埋め込みの実装について詳述します。

## ユーザーレビュー必須事項

> [!NOTE]
> この実装は、URLが動画プロバイダーのパターンに一致する場合、画像構文 `![alt](url)` を乗っ取ります。これが意図した動作であることを確認してください（リクエストからはそのように見受けられます）。

## 提案される変更

### 設定

#### [MODIFY] [astro.config.mjs](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/astro.config.mjs)
- 新しい `rehypeVideoEmbed` プラグインをインポートします。
- `markdown` 設定の `rehypePlugins` 配列に `rehypeVideoEmbed` を追加します。

### プラグイン

#### [NEW] [src/plugins/rehype-video-embed.mjs](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/plugins/rehype-video-embed.mjs)
- `img` ノードを走査する新しいRehypeプラグインを作成します。
- YouTube、Vimeo、Bilibiliへの呼び出しを検出します。
- `img` ノードを `iframe` を含む `div` に変換します。

## 検証計画

### 手動検証
1.  以下内容の一時的なテストファイル `src/content/newsrelease/jp/test-video-embed.md` を作成します：
    ```markdown
    ---
    title: "Video Embed Test"
    description: "Testing video embeds"
    pubDate: "2024-01-01"
    updatedDate: "2024-01-01"
    heroImage: "/lantech_icon_alphawhite.webp"
    category: "news"
    ---

    ## YouTube
    ![YouTube Test](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

    ## Vimeo
    ![Vimeo Test](https://vimeo.com/76979871)

    ## Bilibili
    ![Bilibili Test](https://www.bilibili.com/video/BV1GJ411x7h7)
    ```
2.  開発サーバーを起動します：`npm run dev`
3.  新しいページにアクセスします（例：`http://localhost:4321/jp/newsrelease/test-video-embed`）。
4.  3つの動画すべてがiframeとしてレンダリングされ、再生可能であることを確認します。
5.  DOMを検査し、`video-embed` クラスが適用されていることを確認します。
