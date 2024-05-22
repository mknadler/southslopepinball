import {mockTextBlockObjectLong, type TextBlockObject } from '$lib/types/TextObjectTypes';

export interface SeriesEntry {
  seriesSlug?: string, // TODO: Rename to seriesName
  url?: string,
  description?: TextBlockObject[], // TODO: Rename to body?
  image?: string | null
}

export interface SeriesObject {
  entry?: SeriesEntry,
  slug?: string
}

export const mockSeriesEntry = {
  seriesSlug: 'Mock Series',
  url: 'http://mockseries.com',
  description: [mockTextBlockObjectLong]
}

export const mockSeriesObject = {
  entry: mockSeriesEntry,
  slug: 'mock-series'
}