# Refactor Mobile Menu

The goal is to improve the mobile menu usability by:
1.  Hiding sub-menu items by default.
2.  Adding a "down arrow" button next to parent items (Blog, News Release, Notes).
3.  Expanding sub-menus only when the button is clicked (accordion behavior).
4.  Increasing the size of menu items for better tapability.

## Proposed Changes

### Components

#### [MODIFY] `src/components/Header.astro`

-   **HTML Structure**:
    -   In the `#mobile-nav` loop, check if an item has `children`.
    -   If it does, render a `<button class="submenu-toggle">▼</button>` next to the anchor tag.
    -   Wrap the anchor and the button in a container to position them side-by-side.
    -   Ensure the sub-menu `<ul>` initially has a class or style to hide it (e.g., `display: none` or `max-height: 0`).

-   **CSS**:
    -   Style `.mobile-nav li` to utilize flexbox for row alignment of link and toggle button.
    -   Increase padding and font size for `.mobile-nav a` and `.submenu-toggle` to meet the "larger size" requirement (e.g., min-height 44px).
    -   Style the `.submenu-toggle` to look clickable (transparent bg, border, arrow icon).
    -   Add a class `.submenu-open` that changes the sub-menu display to block/flex.

-   **JavaScript**:
    -   Add event listeners to all `.submenu-toggle` buttons.
    -   On click, find the sibling (or next element) `<ul>` (the sub-menu) and toggle its visibility class (`submenu-open` or similar).
    -   Toggle the button rotation (arrow up/down) for visual feedback.

## Verification Plan

### Automated Verification
-   Browser test:
    -   Open mobile view.
    -   Open hamburger menu.
    -   Verify only top-level items are visible.
    -   Verify "▼" buttons exist for items with children.
    -   Click "▼" for "Blog".
    -   Verify "Blog" sub-menu appears.
    -   Verify clicking "▼" again hides it.
    -   Verify links are larger/easier to click (can check computed style padding/height).

### Manual Verification
1.  Open `localhost:4322` on mobile width.
2.  Open menu.
3.  Tap the arrow next to "Blog".
4.  Confirm sub-menu opens.
5.  Tap a sub-menu link to confirm navigation works.
