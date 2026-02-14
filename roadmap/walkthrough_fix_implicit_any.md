# 作業ログ

## 実施した変更
- [x] `src/components/NotFoundAnimation.astro` の `shuffleText` 関数に型注釈を追加
  - `target` パラメータに `string` 型を指定
  - `progress` パラメータに `number` 型を指定

## 検証結果
- [x] ビルドエラーの解消を確認
  - `npm run build` が正常に終了しました。
- [x] 動作確認
  - ビルドプロセス中に型チェックエラーが発生しなかったことから、implicit any エラーは解消されています。
