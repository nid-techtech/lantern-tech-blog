# Implementation Plan - Optional Two-Column Layout

## User Review Required
> [!NOTE]
> The two-column layout will now be **OPT-IN**. Only markdown files with `twoColumn: true` in their frontmatter will be processed by the layout plugin. Existing files without this flag will revert to the standard single-column layout.

## Proposed Changes

### [Content Schema]

#### [MODIFY] [src/content/config.ts](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/content/config.ts)
- Add `twoColumn: z.boolean().default(false)` to the content schema.

### [Rehype Plugin]

#### [MODIFY] [src/plugins/rehype-content-grouping.mjs](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/plugins/rehype-content-grouping.mjs)
- Condition the execution of the plugin logic on `file.data.astro.frontmatter.twoColumn === true`.
- If false or undefined, return early (leaving the AST unchanged).

### [Content Updates by User]

#### [MODIFY] [src/content/blog/jp/integrate.md](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/content/blog/jp/integrate.md)
- Add `twoColumn: true` to frontmatter to maintain the layout for this specific post.

## Verification Plan

### Manual Verification
1.  **Check `integrate.md`**: Should maintain 2-col layout (after adding flag).
2.  **Check other posts**: Should revert to standard 1-col layout (since they lack the flag).
