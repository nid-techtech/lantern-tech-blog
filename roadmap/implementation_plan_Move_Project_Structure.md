# Implementation Plan - Move Project Structure

Move all files and directories into `astroprojects/` except for `astroprojects/` itself and `roadmap/`.

## User Review Required
> [!WARNING]
> This operation will move the project root into a subdirectory. The currently running `npm run dev` server will stop working and must be restarted from the new `astroprojects` directory.

## Proposed Changes

### Project Root
#### [MOVE]
files:
- .DS_Store
- .astro/
- .git/
- .gitignore
- .vscode/
- README.md
- astro.config.mjs
- dist/
- lantech_fav_2.webp
- lantech_icon_alphawhite.webp
- node_modules/
- package-lock.json
- package.json
- public/
- src/
- tsconfig.json

destination: `astroprojects/`

## Verification Plan

### Automated Tests
- Run `ls -R` to verify file structure.
- Check if `npm run dev` can be started from the new location (if user approves or allows).
