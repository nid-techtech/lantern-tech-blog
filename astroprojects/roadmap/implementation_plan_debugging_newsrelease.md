# Bug Fix: Newsrelease Content Not Appearing

## Goal Description
Investigate and resolve why the new file `src/content/newsrelease/jp/matching.md` is not appearing in the development server.

## Proposed Changes
### Configuration Check
- Verify `src/content/config.ts` includes `newsrelease` collection. (Already done, it exists)

### Routing Check
- Check for `src/pages/[lang]/newsrelease/[...slug].astro` or similar dynamic route handler.
- If missing, implementation is needed.

### File Verification
- Ensure frontmatter is valid and parsed correctly.

## Verification Plan
### Manual Verification
- Access the expected URL (likely `/jp/newsrelease/matching`) and confirm content renders.
