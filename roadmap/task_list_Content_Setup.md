# タスクリスト

- [x] Content Collections の初期化 <!-- id: 1 -->
    - [x] `src/content/config.ts` の作成（スキーマ定義）
    - [x] ディレクトリ作成: `blog`, `newsrelease`, `notes` (それぞれ jp, en, zh フォルダ)
- [x] コンポーネントロジックの移行 <!-- id: 2 -->
    - [x] `src/pages/[lang]/blog/[slug].astro` の更新
    - [x] `src/pages/[lang]/newsrelease/[slug].astro` の更新
    - [x] `src/pages/[lang]/notes/[slug].astro` の更新
- [x] コンテンツ表示の検証 <!-- id: 3 -->
    - [x] `integrate` (blog) 用のサンプルMarkdownファイルを全言語で作成
    - [x] ブラウザでの表示確認（言語ごとの違いが反映されているか）
