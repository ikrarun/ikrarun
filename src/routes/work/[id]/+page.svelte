<script lang="ts">
	interface Post {
		id: number;
		title: string;
		description: string;
		price: number;
		discountPercentage: number;
		rating: number;
		stock: number;
		brand: string;
		category: string;
		thumbnail: string;
		images: string[];
	}
	import Header from '$lib/UI/nav/Header.svelte';
	export let data: Post;
</script>

<main class=" flex flex-col">
	<Header fix={true} />
	<div
		class="max-w-xs sm:max-w-sm md:max-w-md border-black flex my-3 w-fit mx-auto select-text break-inside-avoid-column border flex-col items-start justify-start rounded-md p-4"
	>
		<div
			id="img"
			class="aspect-square rounded-lg overflow-clip w-full bg-cover bg-black"
			style={`background-image:url('${data.thumbnail}')`}
		/>
		<h1 class="text-xl flex-grow-0 mb-2 font-semibold">{data.title}</h1>
		<h1 class="text-base flex-grow-0 font-extralight">{data.description}</h1>
	</div>
</main>
