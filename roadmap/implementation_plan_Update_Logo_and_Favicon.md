# ロゴとファビコンの更新

## 目標
ウェブサイトのナビゲーションロゴとファビコンを更新し、ロゴ画像の右側にテキスト「Lantern-TECH Blog」を表示します。

## 変更内容

### コンポーネント

#### [MODIFY] [Header.astro](file:///Users/ofuchirin/code/lantern-tech-blog/src/components/Header.astro)
- ロゴの `<a>` タグ内にテキスト「Lantern-TECH Blog」を追加します。
- 画像とテキストが横並びになり、適切に配置されるようにCSSを更新します。

## 検証計画

### 手動検証
- 開発サーバー (`npm run dev`) で確認。
- ロゴ画像の右側に「Lantern-TECH Blog」というテキストが表示されていることを確認。
- レスポンシブ表示（モバイルなど）でも崩れていないか確認。
