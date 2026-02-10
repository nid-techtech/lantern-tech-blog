# ウォークスルー - 動画埋め込みの自動化

標準的なMarkdownの画像構文 `![alt](url)` を使用した際に、YouTube、Vimeo、Bilibiliの動画を自動的に埋め込む機能を実装しました。

## 変更点

### 1. 新規Rehypeプラグイン
`src/plugins/rehype-video-embed.mjs` を作成しました。これは、サポートされている動画プロバイダーへの画像リンクを検出し、レスポンシブなiframe埋め込みに変換します。

### 2. 設定の更新
`astro.config.mjs` を更新し、Markdown設定に `rehypeVideoEmbed` プラグインを含めました。

## 検証結果

### 手動テスト
以下のリンクを含む一時的なテストページ `src/content/newsrelease/jp/test-video-embed.md` を作成しました。
- YouTube
- Vimeo
- Bilibili

以下を確認しました：
- 3つのリンクすべてが正しくiframeに変換されたこと。
- `video-embed` クラスがラッパーカラムに適用されたこと。
- 動画が再生可能であること。

テストページとナビゲーションエントリは検証後に削除しました。
