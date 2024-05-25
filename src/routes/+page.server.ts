import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

import type { EventObject } from '$lib/types/EventObject';
import type { LocationObject } from '$lib/types/LocationObject';
import type { SeriesObject } from '$lib/types/SeriesObject';

import { prefixHTTP } from '$lib/utils/prefixHttp';

export const prerender = true;

export async function load() {
	const events: EventObject[] = await reader.collections.events.all({ resolveLinkedFiles: true });
	const locations: LocationObject[] = await reader.collections.locations.all({ resolveLinkedFiles: true});
	const machines = await reader.collections.machines.all({ resolveLinkedFiles: true});
	const series: SeriesObject[] = await reader.collections.series.all({ resolveLinkedFiles: true});

  events.forEach(eventObject => {
      if (eventObject.entry.matchplayURL) {
          eventObject.entry.matchplayURL = prefixHTTP(eventObject.entry.matchplayURL);
      }
  })
  locations.forEach(location => {
      if (location.entry.url) {
          location.entry.url = prefixHTTP(location.entry.url);
      }
  })

	if (events && locations && machines && series) {
		return { events, locations, machines, series };
	}

	error(404, 'Not found');
}
