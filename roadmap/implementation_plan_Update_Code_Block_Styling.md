# Implementation Plan - Update Code Block Styling

The goal is to unify code block styling across the site with a black background and white text, while adding specific spacing to code fences (multi-line blocks) and keeping inline code compact.

## Proposed Changes

### Global CSS
`src/styles/global.css`

-   Update `pre` and `code` styles:
    -   Set `background-color: #000;` (or distinct dark color)
    -   Set `color: #fff;`
    -   Set `font-family: var(--font-code);`
-   Specific styling for `pre` (Code Fences):
    -   Add `padding`;
    -   Add `margin` (vertical spacing between blocks and other content);
    -   Ensure `overflow-x: auto;` for long lines.
    -   `border-radius` for easier reading.
-   Specific styling for `code` (Inline):
    -   Ensure `padding` is minimal or distinct from `pre`.
    -   Ensure `margin` is 0.

## Verification Plan

### Automated Tests
- None available for visual styling.

### Manual Verification
1.  Open the development server (`npm run dev` is already running).
2.  Navigate to a page with code blocks (e.g., `src/pages/[lang]/index.astro` or a blog post).
3.  Check that multi-line code blocks have:
    -   Black background, White text.
    -   Margins around the block.
    -   Proper padding inside.
4.  Check that inline code items:
    -   Have Black background, White text.
    -   Do NOT have broad margins.
