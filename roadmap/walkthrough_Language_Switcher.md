# Language Switcher Refactor Walkthrough

I have updated the language switcher to use abbreviated labels (JP/EN/ZH) and moved it inside the hamburger menu for mobile devices.

## Changes

### Language Switcher Component

Updated `src/components/LanguageSwitcher.astro` to use abbreviations:
- `jp` -> `JP`
- `en` -> `EN`
- `zh` -> `ZH`

### Header Component

Updated `src/components/Header.astro` to handle responsive placement:
- Added a `desktop-lang-switcher` wrapper for the desktop view.
- Added a `mobile-lang-switcher` wrapper inside the `#mobile-nav` for the mobile view.
- Added CSS media queries to:
    - Hide `desktop-lang-switcher` on screens narrower than 768px.
    - Show `mobile-lang-switcher` only inside the open mobile menu.

## Verification Results

### Automated Verification using Browser

I verified the changes using a browser subagent on the local development server (`http://localhost:4322`).

#### Video Proof
![Browser Verification](/Users/ofuchirin/.gemini/antigravity/brain/4cedda61-2080-4010-869a-64cf3cc27a41/verify_lang_switcher_mobile_retry_1770616044209.webp)

#### Key Findings

1.  **Abbreviated Labels**: The desktop header now displays "JP", "EN", "ZH".
2.  **Mobile Behavior**: When the screen width is reduced (tested at 400px), the language switcher disappears from the main header.
3.  **Mobile Menu**: Opening the hamburger menu reveals the language switcher inside the menu, ensuring it is accessible on mobile devices without cluttering the header.
