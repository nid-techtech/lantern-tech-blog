# インデックスページのdescription更新

## ゴール
インデックスページのメタdescriptionタグを「ほおずきは真実を覆い隠す。我々は見えない真実を表現する。」に更新します。
現在、インデックスページの本文にはこのテキストが表示されていますが、メタdescriptionはデフォルトの「Tech Blog」になっています。

## 変更内容
### Pages
#### [MODIFY] [index.astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/index.astro)
- `<BaseLayout>` コンポーネントのプロパティに `description={t.description}` を追加します。

## 検証計画
### 手動検証
- `npm run dev` を実行します。
- ブラウザで `localhost:4321/jp` （または類似のURL）にアクセスします。
- 開発者ツールで `document.querySelector('meta[name="description"]').content` を確認し、想定通りの文字列になっていることを確認します。
