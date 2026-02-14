# Implementation Plan - Display Author Below Description

This plan outlines the changes to display the blog post author below the description.

## Proposed Changes

### [Content Configuration]
#### [MODIFY] [config.ts](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/content/config.ts)
- Add `author: z.string().optional()` to the `blog` collection schema.

### [Blog Content]
#### [MODIFY] [integrate.md](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/content/blog/jp/integrate.md)
- Add `author: "Lantern-TECH Team"` to the frontmatter for verification.

### [Blog Post Template]
#### [MODIFY] [slug.astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/blog/[slug].astro)
- Update the `<header>` section to render `entry.data.author` inside a `<p>` tag if it exists.
- Position it below the description.
- Add CSS styling for the new `.author` class.

## Verification Plan

### Manual Verification
1.  Run the development server (`npm run dev`).
2.  Navigate to a blog post that has an `author` in its frontmatter (e.g., `/jp/blog/integrate`).
3.  Verify that the author name appears below the description.
4.  Check the styling of the author text.
