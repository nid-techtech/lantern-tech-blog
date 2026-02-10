import { defineConfig } from 'astro/config';
console.log('ASTRO CONFIG LOADED');
import { rehypeContentGrouping } from './src/plugins/rehype-layout-v3.mjs';

// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [rehypeContentGrouping],
    },
});
