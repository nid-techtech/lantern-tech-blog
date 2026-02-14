# Implementation Plan - Display Description Below Title

This plan outlines the changes to display the blog post description below the title.

## Proposed Changes

### [Blog Post Template]
#### [MODIFY] [slug.astro](file:///Users/ofuchirin/code/lantern-tech-blog/astroprojects/src/pages/[lang]/blog/[slug].astro)
- Update the `<header>` section to render `entry.data.description` inside a `<p>` tag if it exists.
- Add CSS styling for the new `.description` class.
- The description will be displayed immediately after the `<h1>` title.

## Verification Plan

### Manual Verification
1.  Run the development server (`npm run dev`).
2.  Navigate to a blog post that has a `description` in its frontmatter (e.g., `/jp/blog/integrate`).
3.  Verify that the description text appears below the title.
4.  Navigate to a blog post without a description (if any) to ensure no empty element is rendered.
5.  Check the styling of the description text.
