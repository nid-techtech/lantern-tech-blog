# Walkthrough - Updated Code Block Styling

I have updated the global CSS to standardize code block styling across the site.

## Changes

### `src/styles/global.css`

I modified the `pre` and `code` selectors to apply the following styles:

-   **Background Color**: `#000` (Black)
-   **Text Color**: `#fff` (White)
-   **Font Family**: `var(--font-code)` ("JetBrains Mono")

I also added specific styling to distinguish between code fences (`pre`) and inline code (`code`):

-   **Code Fences (`pre`)**:
    -   Added `padding: 1rem;` for internal spacing.
    -   Added `margin: 1.5rem 0;` for vertical separation from other content.
    -   Added `overflow-x: auto;` to handle long lines gracefully.
    -   Added `border-radius: 4px;` for rounded corners.

-   **Inline Code (`code`)**:
    -   Added `padding: 0.2em 0.4em;` for internal spacing.
    -   Added `border-radius: 2px;` for rounded corners.
    -   **Crucially**, I did *not* add `display: block` or large margins, preserving inline flow.

## Verification Results

### Manual Verification
-   [x] **Code Fences**: Display with black background, white text, and proper margins.
-   [x] **Inline Code**: Display with black background, white text, and flow within text without disrupting layout.
