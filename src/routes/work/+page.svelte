<script lang="ts">
	import data from '$lib/json/sitedata.json';
	import Bottomnav from '$lib/UI/nav/bottomnav.svelte';
	interface Post {
		id: number;
		title: string;
		description: string;
		image: string;
		link: string;
	}

	import Header from '$lib/UI/nav/Header.svelte';
	let pdata: Post[] = data;
</script>

<svelte:head>
	<title>Work:Code Manch</title>
	<meta name="description" content="Created with love by ikrarun" />
</svelte:head>
<!-- Work Section -->
<div id="root" class="min-h-screen flex flex-col justify-between relative">
	<main
		id="work"
		class=" relative w-screen text-black dark:text-white dark:bg-black bg-white items-center justify-center"
	>
		<Header fix={true} />
		<div class="flex flex-col mt-12 space-y-2 items-start justify-center">
			<!-- Headings -->
			<div class="relative max-w-[900px] mx-auto sm:p-4 w-full">
				<h3 class="sm:text-3xl text-xl text-center sm:text-left font-bold">
					From Lines of Code to Digital Marvels
				</h3>
				<h3
					class="text-xs sm:text-sm text-center sm:text-left text-gray-600 dark:text-gray-400 font-bold"
				>
					A Showcase of My Web Projects and Innovations
				</h3>
			</div>

			<!-- Projects -->
			<div class="container max-w-[900px] w-full mx-auto p-4">
				<div
					class="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 grid-cols-1 w-4/5  gap-4 sm:w-full max-h-full mx-auto overflow-visible"
				>
					{#each pdata as item (item.id)}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							on:keydown={() => {}}
							on:click|preventDefault={() => {
								window.open(item.link, '_self');
							}}
							class=" border-black/20 grow dark:border-white/40 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer select-text break-inside-avoid-column w-full  border flex flex-col items-start justify-start rounded-md p-1"
						>
							<img class="rounded-md mb-1" height="100%" width="100%" src={item.image} alt="" />
							<h1 class="text-xl px-1 text-blue dark:text-gray-200 font-semibold">{item.title}</h1>
							<h1 class="text-xs text-gray-700/80 dark:text-gray-200/80 px-1 font-extralight">
								{item.description}
							</h1>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</main>
	<Bottomnav />
</div>

<style>
	h3 {
		font-family: 'Raleway', sans-serif;
		/* font-family: 'Skyscapers', sans-serif; */
	}
	main {
		font-family: 'Poppins', sans-serif;
	}
</style>
