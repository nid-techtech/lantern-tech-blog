# Walkthrough - Fix Code Block Background

I have fixed the code block background color to be pure black.

## Changes

### `src/styles/global.css`

-   Updated `pre` and `code` selector:
    -   Changed `background-color` to `#000000 !important;` to ensure it takes precedence over Shiki theme defaults.

## Verification Results

### Manual Verification
-   [x] **Background Color**: Verified that the CSS rule now forces `#000000` with high specificity.
