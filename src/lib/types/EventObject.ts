  export type TextObject = {
    text: string;
  }

  export type TextBlockObject = {
    children: TextObject[],
    type: string
  }

  export interface EventEntry {
    eventName?: string,
    unlisted?: boolean
    dek?: TextBlockObject[],
    description?: TextBlockObject[],
    doorstime?: string | Date,
    starttime?: string | Date,
    image?: string,
    location?: string,
    matchplayURL?: string,
    series?: string
  }

  export interface EventObject {
    entry: EventEntry,
    slug: string
  }