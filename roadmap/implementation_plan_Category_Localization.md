# メニューカテゴリの日本語化

目標は、現在の言語設定に基づいて、トップレベルのメニューカテゴリ名（Top, Blog, News Release, Notes）を日本語と中国語に翻訳して表示することです。英語はそのまま表示します。

## 提案される変更

### データ層

#### [変更] `src/data/navigation.ts`
- `categoryNames` 定数をエクスポートします。
- `top`、`blog`、`newsrelease`、`notes` のローカライズされた文字列を定義します。
  - **JP**: トップ, ブログ, 発表資料, 参考文献
  - **ZH**: 首页, 博客, 发布资料, 参考文献
  - **EN**: Top, Blog, News Release, Notes

### コンポーネント

#### [変更] `src/components/Header.astro`
- `src/data/navigation.ts` から `categoryNames` をインポートします。
- 現在の `lang` を使用して `categoryNames` からラベルを取得するように `navItems` の定義を更新します。
- `catgegoryNames` に `lang` でアクセスする際の型安全性を確保します。

## 検証計画

### 自動検証
- ブラウザテスト:
  - `/jp/` にアクセス:
    - メニューが「トップ, ブログ, 発表資料, 参考文献」となっていることを確認。
  - `/zh/` にアクセス:
    - メニューが「首页, 博客, 发布资料, 参考文献」となっていることを確認。
  - `/en/` にアクセス:
    - メニューが「Top, Blog, News Release, Notes」となっていることを確認。
  - モバイルメニュー（ハンバーガーメニュー）も同様に正しいラベルが表示されるか確認します。

### 手動検証
1.  `npm run dev` を実行。
2.  `localhost:4322/jp/` を開く。
3.  ヘッダーを確認。
4.  モバイルメニューを開いて確認。
5.  `/zh/` と `/en/` についても同様に確認。
