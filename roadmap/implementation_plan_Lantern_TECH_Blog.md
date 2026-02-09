# Lantern-TECH Blog Implementation Plan

## Goal
Build a static, multilingual (JP, EN, ZH) tech blog using Astro.

## Proposed Changes
### Project Structure
- Initialize Astro project.
- Directory structure:
  - `src/pages/[lang]/`: Root for localized pages.
  - `src/components/`: Reusable components (Header, Footer, etc.).
  - `src/layouts/`: Page layouts.
  - `src/styles/`: Global CSS.

### Design System
- **Colors**:
  - Background: `#ffffff`
  - Primary: `#01406d` (Headers, button outlines)
  - Accent: `#ee542b` (Accents)
  - Text: `#000000` (Body)
- **Fonts**:
  - Default: LINE Seed JP
  - Code: HackGen
  - Chinese: Noto Sans CJK SC (for ZH content)
- **CSS**: Vanilla CSS with CSS variables.

### Components
- **Header**:
  - Desktop: Ribbon menu.
  - Mobile: Hamburger menu.
- **Footer**:
  - Sitemap, External links, Copyright, Custom message.
- **Language Switcher**:
  - Links to the same page in other languages.
- **Media**:
  - `Imgur`: Wrapper for Imgur images.
  - `VideoEmbed`: Support for YouTube, Vimeo, Bilibili.

### Pages & Routing
- Structure:
  - `/[lang]/index`
  - `/[lang]/blog/integrate`
  - `/[lang]/blog/character`
  - `/[lang]/blog/vendor`
  - `/[lang]/blog/conveyor`
  - `/[lang]/blog/software`
  - `/[lang]/newsrelease/matching`
  - `/[lang]/newsrelease/middle`
  - `/[lang]/newsrelease/movie`
  - `/[lang]/newsrelease/caption`
  - `/[lang]/newsrelease/promotion`
  - `/[lang]/notes/precedent`
  - `/[lang]/notes/pickup`

## Verification Plan
- Build the site (`npm run build`).
- Preview (`npm run preview`).
- Check all routes manually.
- Verify responsive design on various viewport sizes.
- Verify language switching works correctly.
