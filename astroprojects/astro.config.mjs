import { defineConfig } from 'astro/config';
import { rehypeContentGrouping } from './src/plugins/rehype-content-grouping.mjs';

// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [rehypeContentGrouping],
    },
});
