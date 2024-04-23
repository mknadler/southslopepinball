import { error } from '@sveltejs/kit';
import { reader } from '$lib/reader';

export const prerender = true;

export async function load({ params }) {
	const machine = await reader.collections.machines.read(params.slug, { resolveLinkedFiles: true });

	if (machine) {
		return machine;
	}

	error(404, 'Not found');
}
