# タスクリスト: 中国語版フォント設定の更新

- [x] Google FontsのCSSを調査し、LINE Seed JPのURLを取得する
- [x] `src/styles/global.css` を更新・修正する
    - [x] `:lang(zh) code, :lang(zh) pre` ルールを追加し、コードブロックのフォントを修正する
    - [x] `unicode-range` を使用したラテン文字専用の `@font-face` を定義する（LINE Seed JP ベース）
    - [x] `--font-zh` 変数を更新し、ラテン文字用フォントを優先させる
- [x] ローカルで変更を検証する
