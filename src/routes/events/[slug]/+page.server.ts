import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

import type { EventEntry } from '$lib/types/EventObject';
import type { LocationObject } from '$lib/types/LocationObject';
import type { SeriesObject } from '$lib/types/SeriesObject';

export const prerender = true;

export async function load({ params }) {
	const event: EventEntry = await reader.collections.events.read(params.slug, { resolveLinkedFiles: true });
	const location: LocationObject = await reader.collections.locations.read(event.location, { resolveLinkedFiles: true});
	const serie: SeriesObject = await reader.collections.series.read(event.series, { resolveLinkedFiles: true });
	if (!event.slug) {
		event.slug = params.slug
	}
	if (event && location && serie) {
		return { event, location, serie };
	} else if (event && location) {
		return { event, location }
	}

	error(404, 'Not found');
}
