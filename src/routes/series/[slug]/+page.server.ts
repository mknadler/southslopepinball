import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

import type { EventObject } from '$lib/types/EventObject';
import type { LocationObject } from '$lib/types/LocationObject';
import type { SeriesEntry, SeriesObject } from '$lib/types/SeriesObject';
import { prefixHTTP } from '$lib/utils/prefixHttp';

export const prerender = true;

export async function load({ params }) {
	const series: SeriesEntry = await reader.collections.series.read(params.slug, { resolveLinkedFiles: true });
	let locations: LocationObject[] = await reader.collections.locations.all({ resolveLinkedFiles: true})
	let allEvents: EventObject[] = await reader.collections.events.all({ resolveLinkedFiles: true});
	let eventsInSeries;
	if (allEvents) {
		eventsInSeries = allEvents.filter(event => {
			return event.entry.series === params.slug
		})
	}
    
    eventsInSeries.forEach(eventInSeries => {
        if (eventInSeries.entry.matchplayURL) {
            eventInSeries.entry.matchplayURL = prefixHTTP(eventInSeries.entry.matchplayURL);
        }
    })
    locations.forEach(location => {
        if (location.entry.url) {
            location.entry.url = prefixHTTP(location.entry.url);
        }
    })

    
	if (series && eventsInSeries && locations) {
		return { series, eventsInSeries, locations };
	}

	error(404, 'Not found');
}
