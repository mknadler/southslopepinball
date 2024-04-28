import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = true;

export async function load() {
	console.log('reader')
	const readz = await reader.collections?.events?.all({resolveLinkedFiles: true});
	console.log('readz is', readz);
	const desc = readz[0]?.entry?.description;
	console.log('desc', desc)

	readz.forEach(event => {
		// @ts-ignore
		event.entry.description = JSON.stringify(event.entry.description)
	})

/*
	const events = await reader.collections.events.all({ resolveLinkedFiles: true });
	const locations = await reader.collections.locations.all({ resolveLinkedFiles: true});
	const machines = await reader.collections.machines.all({ resolveLinkedFiles: true});

	if (events && locations && machines) {
		return { locations, machines };
	}
*/
	if (readz && readz[0]) {
		return {readz}
	}
	error(404, 'Not found');
}
