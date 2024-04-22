import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = true;

export async function load() {
	const events = await reader.collections.events.all({ resolveLinkedFiles: true });

	if (events) {
		return { events };
	}

	error(404, 'Not found');
}
