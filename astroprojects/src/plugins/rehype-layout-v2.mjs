export function rehypeContentGrouping() {
    return (tree, file) => {
        const frontmatter = file.data.astro?.frontmatter;
        console.log(`DEBUG PLUGIN: Processing ${file.path}, twoColumn=${frontmatter?.twoColumn}`);
        return;
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
