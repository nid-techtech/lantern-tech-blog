# Implementation Plan - Underline Links

The goal is to ensure that all text links have an underline by default to improve visibility and usability.

## Proposed Changes

### Global CSS
`src/styles/global.css`

-   Update `a` selector:
    -   Change `text-decoration: none;` to `text-decoration: underline;`.

## Verification Plan

### Manual Verification
1.  Open the development server.
2.  Navigate to any page with links (e.g., Footer, Header, Blog posts).
3.  Confirm that links now have a visible underline without hovering.
