# ウォークスルー - ロゴとファビコンの更新

ナビゲーションロゴとサイトのファビコンを更新しました。また、ロゴ画像の横にテキストを追加しました。

## 変更点

### 1. アセット
以下の画像を `public/` に移動しました:
- `lantech_icon_alphawhite.webp` (ロゴ)
- `lantech_fav_2.webp` (ファビコン)

### 2. レイアウト
`src/layouts/BaseLayout.astro` を更新して新しいファビコンを使用するようにしました。

```astro
<link rel="icon" type="image/webp" href="/lantech_fav_2.webp" />
```

### 3. ヘッダー
`src/components/Header.astro` を更新して画像ロゴとテキストを使用し、CSSを調整しました。

```astro
<div class="logo">
    <a href={`/${lang}/`}>
        <img src="/lantech_icon_alphawhite.webp" alt="Lantern-TECH Blog" />
        <span>Lantern-TECH Blog</span>
    </a>
</div>
```

**CSSの更:**
- `.logo a` に `display: flex` と `align-items: center` を追加。
- `img` の高さを調整。
- `span` にフォントスタイルとマージンを追加。

## 検証結果

### 自動テスト
- `npm run dev` を実行し、エラーが報告されないことを確認しました。

### 手動検証
- ファビコンとロゴがコード内で正しく参照されていることを確認しました。
- ロゴ画像の右側に「Lantern-TECH Blog」というテキストが表示され、適切にスタイルされていることを確認しました。
