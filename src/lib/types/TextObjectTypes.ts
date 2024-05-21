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
    type: string // e.g. 'paragraph', 'heading'
}