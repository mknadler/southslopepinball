export type TextObject = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    type?: string;
    href?: string;
    children?: TextObject[];
}

export type TextBlockObject = {
    children: TextObject[],
    type?: string // e.g. 'paragraph', 'heading'
}

export const mockTextObjectShort = {
    text: 'Lorem ipsum sic dolor amet.'
}

export const mockTextObjectLong = {
    text: "On the other hand, we denounce with righteous indignation and dislike men " +
    "who are so beguiled and demoralized by the charms of pleasure of the moment, so " +
    "blinded by desire, that they cannot foresee the pain and trouble that are bound to " +
    "ensue; and equal blame belongs to those who fail in their duty through weakness of "+
    "will, which is the same as saying through shrinking from toil and pain."
}

export const mockTextBlockObjectShort = {
    children: [mockTextObjectShort]
}
export const mockTextBlockObjectLong = {
    children: [mockTextObjectShort, mockTextObjectLong, mockTextObjectShort],
    type: 'paragraph'
}
