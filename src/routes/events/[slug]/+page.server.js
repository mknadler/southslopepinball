import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

// export const prerender = true;

export async function load({ params }) {
	const event = await reader.collections.events.read(params.slug, { resolveLinkedFiles: true });

	if (event) {
		return event;
	}

	error(404, 'Not found');
}
