# Implementation Plan - Fix Code Block Background

The user wants the code block background to be strictly `#000000`. Currently, it might be appearing lighter due to Shiki's default theme styling which is often applied inline or via specific classes.

## Proposed Changes

### Global CSS
`src/styles/global.css`

-   Update `pre` selector to override any potential theme defaults.
    -   Use `background-color: #000000 !important;` to ensure it takes precedence over inline styles from Shiki.
    -   Target `.astro-code` if necessary.

### Astro Config (Optional)
`astro.config.mjs`

-   Check if a specific theme is loaded. If it's a "soft" distinct dark theme, it might not be pure black. We can stick to CSS overrides for simplicity unless changing the theme is better.

## Verification Plan

### Manual Verification
1.  Open development server.
2.  Inspect code block background color.
3.  Ensure it is `#000000`.
