# 実施計画 - タイトルのフォントウェイト調整

トップページ以外のページのタイトルフォントウェイトを `Bold` (700) に統一し、トップページのみ `ExtraBold` (800) とします。

## 提案される変更

### ページコンポーネント

以下のファイルにおいて、`h1` タグのスタイルを修正します。

#### カテゴリインデックスページ (変更: 800 -> 700)
- `src/pages/[lang]/blog/index.astro`
- `src/pages/[lang]/newsrelease/index.astro`
- `src/pages/[lang]/notes/index.astro`

```css
.page-header h1 {
    /* ... */
    font-weight: 700; /* 800から変更 */
}
```

#### 個別記事ページ (追加: font-weight: 700)
- `src/pages/[lang]/blog/[slug].astro`
- `src/pages/[lang]/newsrelease/[slug].astro`
- `src/pages/[lang]/notes/[slug].astro`

```css
h1 {
    /* ... */
    font-weight: 700; /* 明示的に追加 */
}
```

## 検証計画

### 手動検証
1.  **トップページ (`/jp`, `/en`, `/zh`)**: タイトルが極太 (800) であることを確認。
2.  **カテゴリトップ (`/jp/blog` 等)**: タイトルが太字 (700) であることを確認。
3.  **記事詳細 (`/jp/blog/vendor` 等)**: タイトルが太字 (700) であることを確認。
