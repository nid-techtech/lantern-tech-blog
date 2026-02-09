# Refactor Language Switcher

The goal is to update the language switcher to use abbreviated labels (JP/EN/ZH) for space efficiency and to move it inside the hamburger menu on mobile devices.

## Proposed Changes

### Components

#### [MODIFY] `src/components/LanguageSwitcher.astro`
- Update the `languages` object to map language codes to abbreviations:
    - `jp`: 'JP'
    - `en`: 'EN'
    - `zh`: 'ZH'
- No logical changes needed for path generation.
- Ensure styling supports the shorter labels.

#### [MODIFY] `src/components/Header.astro`
- Currently, `<LanguageSwitcher />` is in the `.controls` div.
- I will modify the layout so that:
    - On **Desktop**: The Language Switcher remains in the `.controls` area.
    - On **Mobile**: The Language Switcher is hidden from the `.controls` area and instead displayed inside the `#mobile-nav`.
- This can be achieved by rendering the component twice (one for desktop, one for mobile) and using CSS media queries to toggle visibility, or by moving it with JavaScript. Rendering twice is simpler and cleaner for SSG/MPA architecture like Astro.

## Verification Plan

### Automated Verification
- Detailed browser verification:
  - Check desktop view: Verify "JP", "EN", "ZH" are visible in the header controls.
  - Check mobile view (resize window): Verify "JP", "EN", "ZH" are NOT identifying the header controls.
  - Open hamburger menu: Verify "JP", "EN", "ZH" ARE visible inside the mobile menu.

### Manual Verification
1.  Run `npm run dev`.
2.  Open `localhost:4322`.
3.  Observe that the language switcher now says "JP / EN / ZH".
4.  Resize the browser to mobile width (< 768px).
5.  Verify the language switcher disappears from the top bar.
6.  Click the hamburger menu.
7.  Verify the language switcher appears inside the menu.
