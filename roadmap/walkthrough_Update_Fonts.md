# 検証結果 - フォント更新

フォント構成を更新し、Google Fontsを使用するように変更しました。また、ナビゲーションロゴのウェイトをExtraBoldに調整しました。

## 変更内容

- **メインフォント**: `LINE Seed JP` (Google Fonts)
- **コードフォント**: `JetBrains Mono` (Google Fonts)
- **中国語フォント**: `Noto Sans SC` (Google Fonts)
- **ナビゲーションロゴ**: `LINE Seed JP` weight 800 (ExtraBold)

## 検証手順

1. サイトを開き、デベロッパーツールで`body`のフォントファミリーが`"LINE Seed JP"`になっていることを確認。
2. ナビゲーションバーのロゴテキストを検査し、`font-weight` が `800` になっていることを確認。
3. コードブロック要素 (`pre`, `code`) を検査し、フォントファミリーが`"JetBrains Mono"`になっていることを確認。
4. 中国語ページ (`/zh/`) にアクセスし、漢字が`Noto Sans SC`で表示され、英数字が`LINE Seed JP`で表示されることを確認。

## スクリーンショット

(スクリーンショットは手動確認が必要です)
