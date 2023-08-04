import type { PageServerLoad } from './$types';
export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://dummyjson.com/products/${params.id}`);
	const rres = await res.json();
	return rres;
}) satisfies PageServerLoad;
