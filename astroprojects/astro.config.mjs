import { defineConfig } from 'astro/config';
console.log('ASTRO CONFIG LOADED');
import { rehypeContentGrouping } from './src/plugins/layout.mjs';
import { rehypeVideoEmbed } from './src/plugins/rehype-video-embed.mjs';

// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [rehypeVideoEmbed, rehypeContentGrouping],
    },
});
