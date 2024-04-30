import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = true;

export async function load({ params }) {
	const event = await reader.collections.events.read(params.slug, { resolveLinkedFiles: true });
	const location = await reader.collections.locations.read(event.location, { resolveLinkedFiles: true});
	const serie = await reader.collections.series.read(event.series, { resolveLinkedFiles: true });
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
