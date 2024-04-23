import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = true;

export async function load({ params }) {
	const venue = await reader.collections.venues.read(params.slug, { resolveLinkedFiles: true });

	if (venue) {
		return venue;
	}

	error(404, 'Not found');
}
