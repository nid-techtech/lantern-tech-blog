# implicit any エラーの修正計画

## 概要
`src/components/NotFoundAnimation.astro` の `shuffleText` 関数における `target` パラメータが暗黙的に `any` 型になっている問題を修正します。

## 変更内容

### `src/components/NotFoundAnimation.astro`

- `shuffleText` 関数の引数に明示的な型注釈を追加します。
- JSDoc が正しく認識されていない可能性があるため、TypeScript の構文 (`target: string, progress: number`) を直接使用するか、JSDoc を修正します。

## 検証計画

### 自動テスト
- `npm run build` を実行し、型エラーが発生しないことを確認します。

### 手動確認
- 開発サーバー (`npm run dev`) で 404 ページにアクセスし、アニメーションが正常に動作することを確認します。
