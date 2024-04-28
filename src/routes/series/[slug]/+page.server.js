import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = false;

export async function load({ params }) {
	const series = await reader.collections.series.read(params.slug, { resolveLinkedFiles: true });

	if (series) {
		return series;
	}

	error(404, 'Not found');
}
