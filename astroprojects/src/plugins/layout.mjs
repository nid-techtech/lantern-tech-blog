
import fs from 'node:fs';

export function rehypeContentGrouping() {
    return (tree, file) => {
        const frontmatter = file.data.astro?.frontmatter;
        const isTwoColumn = frontmatter?.twoColumn === true;

        if (frontmatter) {
            // console.log(`[DEBUG] Handling file: ${file.history[0]} | twoColumn: ${isTwoColumn}`);
        }

        if (!isTwoColumn) return;

        // console.log('[DEBUG] Starting two-column processing');

        const newChildren = [];
        let currentSection = createSection();

        for (const node of tree.children) {
            // console.log(`[DEBUG] Node type: ${node.type}, tagName: ${node.tagName}`);
            // Section break on Headings or HR
            if (node.type === 'element' && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr'].includes(node.tagName)) {
                pushSection(newChildren, currentSection);

                if (node.tagName === 'hr') {
                    // console.log('DEBUG: Processed HR tag, pushing outside section');
                    node.properties = node.properties || {};
                    const classes = node.properties.className || [];
                    node.properties.className = Array.isArray(classes) ? [...classes, 'full-width-hr'] : [classes, 'full-width-hr'];
                    newChildren.push(node); // Push HR outside of section
                    currentSection = createSection();
                } else {
                    currentSection = createSection();
                    // Headings go to text column of new section
                    currentSection.children[0].children.push(node);
                }
            } else {
                // Check top-level media
                if (isMediaNode(node)) {
                    wrapAndPushToImageColumn(currentSection, node);
                    continue;
                }

                // Check paragraphs
                if (node.type === 'element' && node.tagName === 'p') {
                    const mediaNodes = [];
                    const textNodes = [];

                    if (node.children) {
                        for (const child of node.children) {
                            if (isMediaNode(child)) {
                                mediaNodes.push(child);
                            } else if (child.tagName === 'a' && containsOnlyMedia(child)) {
                                mediaNodes.push(child);
                            } else {
                                textNodes.push(child);
                            }
                        }
                    }

                    if (mediaNodes.length > 0) {
                        mediaNodes.forEach(media => {
                            wrapAndPushToImageColumn(currentSection, media);
                        });

                        // Check if sufficient text content remains
                        const hasContent = textNodes.some(n =>
                            (n.type === 'text' && n.value.trim() !== '') || n.type !== 'text'
                        );

                        if (hasContent) {
                            const textNode = { ...node, children: textNodes };
                            currentSection.children[0].children.push(textNode);
                        }
                    } else {
                        // Regular paragraph
                        currentSection.children[0].children.push(node);
                    }
                } else {
                    // Other nodes (ul, blockquote, etc) go to text column
                    currentSection.children[0].children.push(node);
                }
            }
        }

        pushSection(newChildren, currentSection);
        tree.children = newChildren;
    };
}

function injectDebugInfo(node) {
    if (node.type !== 'element') return;
    node.properties = node.properties || {};
    node.properties['data-layout-debug'] = 'scanned';
    node.properties['data-layout-tag'] = node.tagName;
    if (node.properties.className) {
        node.properties['data-layout-class'] = String(node.properties.className);
    }
}

function createSection() {
    return {
        type: 'element',
        tagName: 'div',
        properties: { className: ['content-section'] },
        children: [
            {
                type: 'element',
                tagName: 'div',
                properties: { className: ['text-column'] },
                children: []
            },
            {
                type: 'element',
                tagName: 'div',
                properties: { className: ['image-column'] },
                children: []
            }
        ]
    };
}

function pushSection(parentArray, section) {
    const textCol = section.children[0];
    const imgCol = section.children[1];
    // Only push if there is content in either column
    if (textCol.children.length > 0 || imgCol.children.length > 0) {
        parentArray.push(section);
    }
}

function wrapAndPushToImageColumn(section, node) {
    section.children[1].children.push({
        type: 'element',
        tagName: 'div',
        properties: { className: ['image-wrapper'] },
        children: [node]
    });
}

function isMediaNode(node) {
    if (node.type !== 'element') return false;

    // Explicit <img> tag
    if (node.tagName === 'img') return true;

    // Explicit <iframe> tag
    if (node.tagName === 'iframe') return true;

    // div.video-embed (created by rehype-video-embed)
    // Class can be string "video-embed video-embed-youtube" or array ['video-embed', 'video-embed-youtube']
    if (node.tagName === 'div' && hasClass(node, 'video-embed')) return true;

    return false;
}

function containsOnlyMedia(node) {
    if (!node.children || node.children.length === 0) return false;
    // Allow whitespace text nodes, but otherwise all children must be media
    return node.children.every(child => {
        if (child.type === 'text' && child.value.trim() === '') return true;
        return isMediaNode(child);
    });
}

function hasClass(node, className) {
    if (!node.properties || !node.properties.className) return false;
    // className can be string or array
    const cls = node.properties.className;
    if (Array.isArray(cls)) {
        return cls.includes(className);
    }
    return String(cls).includes(className);
}
