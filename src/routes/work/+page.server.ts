import type { PageServerLoad } from './$types';



export const load = (async ({ fetch }) => {
	const res = await fetch('https://dummyjson.com/products');
	const rres: any[string] = await res.json();
	return rres;
}) satisfies PageServerLoad;
