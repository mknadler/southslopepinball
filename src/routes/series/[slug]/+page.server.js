import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = true;

export async function load({ params }) {
	const series = await reader.collections.series.read(params.slug, { resolveLinkedFiles: true });
	const locations = await reader.collections.locations.all({ resolveLinkedFiles: true})
	const allEvents = await reader.collections.events.all({ resolveLinkedFiles: true});
	let eventsInSeries;
	if (allEvents) {
		eventsInSeries = allEvents.filter(event => {
			return event.entry.series === params.slug
		})
	}
	console.log('EIS', eventsInSeries)
	if (series && eventsInSeries && locations) {
		return { series, eventsInSeries, locations };
	}

	error(404, 'Not found');
}
