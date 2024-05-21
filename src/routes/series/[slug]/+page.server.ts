import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

import type { EventObject } from '$lib/types/EventObject';
import type { LocationObject } from '$lib/types/LocationObject';
import type { SeriesObject } from '$lib/types/SeriesObject';

export const prerender = true;

export async function load({ params }) {
	const series: SeriesObject = await reader.collections.series.read(params.slug, { resolveLinkedFiles: true });
	const locations: LocationObject[] = await reader.collections.locations.all({ resolveLinkedFiles: true})
	const allEvents: EventObject[] = await reader.collections.events.all({ resolveLinkedFiles: true});
	let eventsInSeries;
	if (allEvents) {
		eventsInSeries = allEvents.filter(event => {
			return event.entry.series === params.slug
		})
	}
	if (series && eventsInSeries && locations) {
		return { series, eventsInSeries, locations };
	}

	error(404, 'Not found');
}
