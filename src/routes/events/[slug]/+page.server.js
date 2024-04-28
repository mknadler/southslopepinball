import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';
import { compile } from 'mdsvex';

export const prerender = true;

export async function load({ params }) {
	const event = await reader.collections.events.read(params.slug, { resolveLinkedFiles: true });
	let compiledDescription = await compile(event.description);
	// @ts-ignore
	event.description = { content: compiledDescription?.code };
	
	const location = await reader.collections.locations.read(event.location, { resolveLinkedFiles: true});
	if (event) {
		return {event, location};
	}

	error(404, 'Not found');
}
