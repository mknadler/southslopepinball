import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = true;

export async function load({ params }) {
	const event = await reader.collections.events.read(params.slug, { resolveLinkedFiles: true });
	console.log('load', event);
	const location = await reader.collections.locations.read(event.location, { resolveLinkedFiles: true});
	console.log('location', location)
	if (event && location) {
		return {event, location};
	}

	error(404, 'Not found');
}
