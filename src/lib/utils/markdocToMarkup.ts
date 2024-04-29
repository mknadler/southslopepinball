
export const markdocToMarkup = (contents) => {
    console.log(contents);
    const contentsArray = contents.map(contentObject => {
        if (contentObject.type === 'paragraph') {
            let innerContent = '';
            contentObject.children.forEach(childContent => {
                if (childContent.text && childContent.bold && childContent.italic) {
                    innerContent += `<span class="bold italic">${childContent.text}</span>`
                }
                else if (childContent.text && childContent.bold) {
                    innerContent += `<span class="bold">${childContent.text}</span>`
                }
                else if (childContent.text && childContent.italic) {
                    innerContent += `<span class="italic">${childContent.text}</span>`
                }
                else if (childContent.text) {
                    innerContent += childContent.text
                }
            });
            return `<p>${innerContent}</p>`
        }
        if (contentObject.type === 'unordered-list') {
            let innerContent = '';
            contentObject.children.forEach(childContent => {
                let listItemText = '';
                if (childContent.type === 'list-item') {
                    childContent.children.forEach(listItem => {
                        listItem.children.forEach(listItemContent => {
                            listItemText += listItemContent.text
                        });
                    })
                }
                innerContent += `<li>${listItemText}</li>`
            });
            return `<ul>${innerContent}</ul>`
        }
        if (contentObject.type === 'ordered-list') {
            let innerContent = '';
            contentObject.children.forEach(childContent => {
                let listItemText = '';
                if (childContent.type === 'list-item') {
                    childContent.children.forEach(listItem => {
                        listItem.children.forEach(listItemContent => {
                            listItemText += listItemContent.text
                        });
                    })
                }
                innerContent += `<li>${listItemText}</li>`
            });
            return `<ol>${innerContent}</ol>`
        }
    })
    return contentsArray.join('')
}