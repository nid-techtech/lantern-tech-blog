
export function rehypeContentGrouping() {
    return (tree, file) => {
        // Check for 'twoColumn' flag in frontmatter
        const frontmatter = file.data.astro?.frontmatter;
        const isTwoColumn = frontmatter?.twoColumn === true;

        if (!isTwoColumn) {
            return;
        }

        const newChildren = [];

        // Initial section
        let currentSection = createSection();

        // Iterate over original children
        for (const node of tree.children) {
            // Check for Heading or HR to start new section
            if (node.type === 'element' && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr'].includes(node.tagName)) {
                pushSection(newChildren, currentSection);
                currentSection = createSection();

                // Add the heading/hr to the text column of the new section
                currentSection.children[0].children.push(node);
            } else {
                // Processing other nodes
                if (node.type === 'element' && node.tagName === 'p') {
                    const images = [];
                    const otherNodes = [];

                    // Inspect children of the paragraph
                    if (node.children) {
                        for (const child of node.children) {
                            if (child.type === 'element' && child.tagName === 'img') {
                                images.push(child);
                            } else {
                                otherNodes.push(child);
                            }
                        }
                    }

                    // If we found images, move them to image column
                    if (images.length > 0) {
                        images.forEach(img => {
                            currentSection.children[1].children.push({
                                type: 'element',
                                tagName: 'div',
                                properties: { className: ['image-wrapper'] },
                                children: [img]
                            });
                        });

                        // Check if there is remaining text content
                        const hasContent = otherNodes.some(n =>
                            (n.type === 'text' && n.value.trim() !== '') || n.type !== 'text'
                        );

                        if (hasContent) {
                            const textNode = { ...node, children: otherNodes };
                            currentSection.children[0].children.push(textNode);
                        }
                    } else {
                        // No images, just add to text column
                        currentSection.children[0].children.push(node);
                    }
                } else {
                    // Non-paragraph node
                    currentSection.children[0].children.push(node);
                }
            }
        }

        // Push the final section
        pushSection(newChildren, currentSection);

        tree.children = newChildren;
    };
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
    // Only push if there is actual content
    if (textCol.children.length > 0 || imgCol.children.length > 0) {
        parentArray.push(section);
    }
}
