<script lang="ts">
	import { goto } from '$app/navigation';
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
	import Header from '$lib/import/Header.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	let pdata: [Post] = data.products;
</script>

<!-- Work Section -->
<div id="root" class="container relative">
	<main id="work" class=" relative w-screen text-black bg-white items-center justify-center">
		<Header fix={true} />
		<!-- Headings -->
		<div class="flex flex-col mt-12 space-y-12 items-center justify-center">
			<div class="relative">
				<h3 class="text-3xl text-center font-bold">My Project's</h3>
				<h3 class="text-sm text-center text-gray-400 font-bold">
					These are all project's create by me.
				</h3>
			</div>

			<!-- Projects -->
			<div class="container mx-auto p-4">
				<div
				role="row"
					class="sm:columns-2 md:columns-3 2xl:columns-4 columns-1 space-y-4 gap-4 w-full max-w-[900px] max-h-full mx-auto overflow-visible"
				>
					{#each pdata as item (item.id)}
						<div role="gridcell" tabindex="0" on:keydown={()=>{}} on:click|preventDefault={()=>{goto(`/work/${item.id}`)}}
							class=" border-black select-text break-inside-avoid-column w-full h-fit border flex flex-col items-start justify-start rounded-md p-4"
						>
							<img class="rounded-xl mb-5" loading="lazy" src={item.thumbnail} alt="" />
							<h1 class="text-xl mb-5 font-semibold">{item.title}</h1>
							<h1 class="text-base font-extralight">{item.description}</h1>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	h3 {
		font-family: 'Raleway', sans-serif;
	}
	main {
		font-family: 'Poppins', sans-serif;
	}
</style>
