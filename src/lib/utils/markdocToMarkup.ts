
export const markdocToMarkup = (contents) => {
    console.log(contents);
    const contentsArray = contents.map(contentObject => {
        if (contentObject.type === 'paragraph') {
            let innerContent = '';
            contentObject.children.forEach(childContent => {
                let classList = [];
                if (childContent.text && childContent.bold) {
                    classList.push('bold');
                }
                if (childContent.text && childContent.italic) {
                    classList.push('italic')
                }
                if (childContent.text) {
                    innerContent += `<span class="${classList.join(' ')}">${childContent.text}</span>`
                }
                if (childContent.type && childContent.type === 'link') {
                    let linkMarkup = `<a href="${childContent.href}">${childContent.children[0].text}</a>`
                    let linkClasses = [];
                    if (childContent.children[0].bold) { linkClasses.push('bold') }
                    if (childContent.children[0].italic) { linkClasses.push('italic') }
                    if (linkClasses.length >= 1) { 
                        innerContent += `<span class="${linkClasses.join(' ')}">${linkMarkup}</span>`
                    } else {
                        innerContent += linkMarkup;
                    }
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