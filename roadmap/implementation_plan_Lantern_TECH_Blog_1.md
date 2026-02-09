# Lantern-TECH Blog 実装計画

## 目標
Astroを使用して、静的で多言語対応（日・英・中）の技術ブログを構築する。

## 提案される変更
### プロジェクト構造
- Astroプロジェクトの初期化。
- ディレクトリ構造:
  - `src/pages/[lang]/`: ローカライズされたページのルート。
  - `src/components/`: 再利用可能なコンポーネント（ヘッダー、フッターなど）。
  - `src/layouts/`: ページレイアウト。
  - `src/styles/`: グローバルCSS。

### デザインシステム
- **カラー**:
  - 背景: `#ffffff`
  - プライマリ: `#01406d` (見出し、ボタンの輪郭線)
  - アクセント: `#ee542b` (アクセント)
  - テキスト: `#000000` (本文)
- **フォント**:
  - デフォルト: LINE Seed JP
  - コード: HackGen
  - 中国語: Noto Sans CJK SC (中国語コンテンツ用)
- **CSS**: CSS変数を使用したVanilla CSS。

### コンポーネント
- **ヘッダー**:
  - デスクトップ: リボンメニュー。
  - モバイル: ハンバーガーメニュー。
- **フッター**:
  - サイトマップ、外部リンク、著作権表示、カスタムメッセージ。
- **言語切り替えスイッチ**:
  - 同じページの他言語版へのリンク。
- **メディア**:
  - `Imgur`: Imgur画像のラッパー。
  - `VideoEmbed`: YouTube, Vimeo, Bilibiliのサポート。

### ページとルーティング
- 構造:
  - `/[lang]/index`
  - `/[lang]/blog/integrate`
  - `/[lang]/blog/character`
  - `/[lang]/blog/vendor`
  - `/[lang]/blog/conveyor`
  - `/[lang]/blog/software`
  - `/[lang]/newsrelease/matching`
  - `/[lang]/newsrelease/middle`
  - `/[lang]/newsrelease/movie`
  - `/[lang]/newsrelease/caption`
  - `/[lang]/newsrelease/promotion`
  - `/[lang]/notes/precedent`
  - `/[lang]/notes/pickup`

## 検証計画
- サイトのビルド (`npm run build`)。
- プレビュー (`npm run preview`)。
- すべてのルートを手動で確認。
- 様々なビューポートサイズでのレスポンシブデザインの検証。
- 言語切り替えが正しく機能することの検証。
