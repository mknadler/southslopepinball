import {type TextBlockObject } from '$lib/types/TextObjectTypes';
import { mockTextBlockObjectLong, mockTextBlockObjectShort } from '$lib/types/TextObjectTypes';

export interface EventEntry {
  eventName?: string,
  unlisted?: boolean
  dek?: TextBlockObject[], // short description for feeds
  description?: TextBlockObject[], // long description for event pages (probably rename this to 'body')
  doorstime?: string | Date,
  starttime?: string | Date,
  image?: string, // e.g. 'cat.png', not the encoded image or anything silly like that
  matchplayURL?: string,
  location?: string,
  series?: string,
  slug?: string
}

// Because "Event" is taken, which, fair!
export interface EventObject {
  entry?: EventEntry,
  slug?: string
}

export const mockEventEntry = {
  eventName: 'Test event',
  unlisted: false,
  dek: [mockTextBlockObjectShort],
  description: [mockTextBlockObjectLong],
  doorstime: "2024-05-09T20:47",
  starttime: "2024-05-08T20:47",
  matchplayURL: "http://www.test.com",
  location: 'mockbar',
  series: 'mock-series',
  slug: 'my-mock-slug'
}

export const mockEventObject = {
  entry: mockEventEntry,
  slug: 'testEvent'
}