# Update Header Menu with Page Titles

The goal is to update the header navigation menu to display actual page titles (e.g., "全体の状況") instead of URI-like labels (e.g., "Integrate"). Also, ensure that deep hierarchy items are hidden by default and shown on hover (dropdown behavior).

## User Review Required

> [!NOTE]
> I will centrally manage the navigation data in `src/data/navigation.ts` to avoid duplication between the Header and the individual page templates.
> I will use the `jp` title by default if `lang` is missing, but since the site is structured with `[lang]`, it should always be present.

## Proposed Changes

### Data Layer

#### [NEW] `src/data/navigation.ts`
- Create a new file to store the definitions of pages (slugs and localized titles) for Blog, News Release, and Notes.
- Export `blogPages`, `newsreleasePages`, `notesPages`.

### Pages

#### [MODIFY] `src/pages/[lang]/blog/[slug].astro`
#### [MODIFY] `src/pages/[lang]/newsrelease/[slug].astro`
#### [MODIFY] `src/pages/[lang]/notes/[slug].astro`
- Import page definitions from `src/data/navigation.ts` instead of defining them locally in `getStaticPaths`.

### Components

#### [MODIFY] `src/components/Header.astro`
- Import page definitions from `src/data/navigation.ts`.
- Dynamically generate `navItems` using the imported data.
- Map the labels to the correct title based on the current `lang`.
- Ensure CSS accurately handles the "show on hover" behavior for dropdowns.

## Verification Plan

### Automated Tests
- I will use the browser tool to visit the page.
- I will check if the menu items in the desktop header are displaying Japanese titles (e.g., "全体の状況") when visiting the `jp` version.
- I will check if the dropdowns appear on hover.

### Manual Verification
1.  Run `npm run dev`.
2.  Open the site (e.g., `localhost:4321/jp/`).
3.  Hover over "Blog" in the header.
4.  Verify that the dropdown appears and lists items like "全体の状況", "文字", etc. instead of English slugs.
5.  Switch language to English and verify titles change (e.g., "Overall Integration").
