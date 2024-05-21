import { type TextBlockObject } from '$lib/types/TextObjectTypes';

export interface LocationEntry {
    locationName?: string,
    address?: TextBlockObject[],
    machines?: [],
    private?: boolean,
    url?: string
}

export interface LocationObject {
    entry?: LocationEntry,
    slug?: string
}