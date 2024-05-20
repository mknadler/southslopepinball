import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

import type { EventObject } from '$lib/types/EventObject.ts';

export const prerender = true;

export async function load() {
	const events: EventObject[] = await reader.collections.events.all({ resolveLinkedFiles: true });
	const locations = await reader.collections.locations.all({ resolveLinkedFiles: true});
	const machines = await reader.collections.machines.all({ resolveLinkedFiles: true});
	const series = await reader.collections.series.all({ resolveLinkedFiles: true});
	if (events && locations && machines && series) {
		return { events, locations, machines, series };
	}

	error(404, 'Not found');
}
