# 実装計画 - 全セクションへの説明・著者表示の適用

この計画では、ブログ記事だけでなく、「発表資料 (News Release)」と「参考文献 (Notes)」のセクションでも説明文と著者を表示するための変更の概要を説明します。

## 提案される変更

### [発表資料テンプレート]
#### [変更] [newsrelease/[slug].astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/newsrelease/[slug].astro)
- `<header>` セクションを更新し、`entry.data.description` と `entry.data.author` を表示するようにします。
- ブログテンプレート (`blog/[slug].astro`) と同様のHTML構造とCSSクラス (`.description`, `.author`) を使用します。

### [参考文献テンプレート]
#### [変更] [notes/[slug].astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/notes/[slug].astro)
- `<header>` セクションを更新し、`entry.data.description` と `entry.data.author` を表示するようにします。
- ブログテンプレート (`blog/[slug].astro`) と同様のHTML構造とCSSクラス (`.description`, `.author`) を使用します。

## 検証計画

### 手動検証
1.  開発サーバーを起動します (`npm run dev`)。
2.  発表資料ページ（例: `/jp/newsrelease/matching`）に移動し、説明文と著者が表示されているか確認します。
3.  参考文献ページ（例: `/jp/notes/pickup`）に移動し、説明文と著者が表示されているか確認します。
