import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to transform image links to video embeds for YouTube, Vimeo, and Bilibili.
 * Usage in Markdown: ![Alt Text](Video URL)
 */

export function rehypeVideoEmbed() {
    return (tree) => {
        visit(tree, 'element', (node, index, parent) => {
            if (node.tagName === 'img' && node.properties && node.properties.src) {
                // console.log('[VideoEmbed] Found image:', node.properties.src);
                const url = node.properties.src;
                let embedUrl = null;
                let type = null;

                // YouTube
                // Matches: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
                const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
                if (ytMatch) {
                    embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
                    type = 'youtube';
                }

                // Vimeo
                // Matches: vimeo.com/ID
                const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
                if (vimeoMatch && !embedUrl) {
                    embedUrl = `https://player.vimeo.com/video/${vimeoMatch[1]}`;
                    type = 'vimeo';
                }

                // Bilibili
                // Matches: bilibili.com/video/BV...
                const biliMatch = url.match(/bilibili\.com\/video\/(BV[a-zA-Z0-9]+)/);
                if (biliMatch && !embedUrl) {
                    embedUrl = `https://player.bilibili.com/player.html?bvid=${biliMatch[1]}&high_quality=1&danmaku=0`;
                    type = 'bilibili';
                }

                if (embedUrl) {
                    // Create iframe node
                    const iframeNode = {
                        type: 'element',
                        tagName: 'iframe',
                        properties: {
                            src: embedUrl,
                            title: node.properties.alt || 'Video player',
                            frameBorder: '0',
                            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                            allowFullScreen: true,
                            style: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;',
                        },
                        children: [],
                    };

                    // Replace img with a wrapper div containing the iframe
                    // Wrapper maintains aspect ratio (16:9)
                    const wrapperNode = {
                        type: 'element',
                        tagName: 'div',
                        properties: {
                            className: ['video-embed', `video-embed-${type}`],
                            style: 'position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 1.5rem;',
                        },
                        children: [iframeNode],
                    };

                    parent.children[index] = wrapperNode;
                }
            }
        });
    };
}
