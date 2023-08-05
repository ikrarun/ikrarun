<script lang="ts">
	import './styles.css';
	import { onMount } from 'svelte';
	import shot from '$lib/images/shot.jpeg'
	onMount(() => {
		const contextMenu = <HTMLDivElement>document.getElementById('context-menu');
		const page = <HTMLDivElement>document.getElementById('root');
		page.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			// var posX = e.clientX + window.scrollX;
			// var posY = e.clientY + window.scrollY;
			// if (posY + contextMenu.clientHeight > page.clientHeight) {
			// 	posY = page.clientHeight - (contextMenu.clientHeight + 10);
			// }
			// contextMenu.style.left = `${posX}px`;
			// contextMenu.style.top = `${posY}px`;
			// contextMenu.style.display = 'flex';
		});

		window.addEventListener('scroll', () => {
			contextMenu.style.display = 'none';
		});
		window.addEventListener('click', () => {
			contextMenu.style.display = 'none';
		});
	});

	function clickcontext(context: string) {
		const contextMenu = <HTMLDivElement>document.getElementById('context-menu');
		contextMenu.style.display = 'none';

		if (context === 'youtube') {
			window.open('https://www.youtube.com/@codemanch', '_blank');
		}
		if (context === 'report') {
			window.open('https://github.com/codemanch/codemanch/issues', '_blank');
		}
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>

	<meta property="og:image"
		content='https://raw.githubusercontent.com/codemanch/codemanch/626463994d1b96e7f48acb9b9c0c73d66d286c1c/src/lib/images/shot.jpeg' />
	<meta property="og:title" content="Code Manch" />
	<meta property="og:url" content="https://codemanch.vercel.app/">
	<meta property="twitter:image"
		content='https://raw.githubusercontent.com/codemanch/codemanch/626463994d1b96e7f48acb9b9c0c73d66d286c1c/src/lib/images/shot.jpeg' />
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:title" content="Code Manch" />
		<meta property="twitter:description" content="Created with Love by Kr Arun">
		<meta property="og:description" content="Created with Love by Kr Arun">
	<meta property="og:url" content="https://codemanch.vercel.app/">
	
	
</svelte:head>

<div class="app w-full overflow-clip flex flex-col screen">
	<div
		class="custom-menu hidden flex-col justify-start items-start
	 absolute blue text-sm z-[6000] p-1 rounded-lg text-white [&>*]:text-start"
		id="context-menu"
	>
		<button
			class="hover:bg-black p-2 rounded-md"
			on:click|preventDefault={() => clickcontext('youtube')}
			><i class="fa sm:text-sm text-xs fa-video-camera mr-2" aria-hidden="true" />Watch Tutorials</button
		>
		<button
			class="hover:bg-black p-2 rounded-md w-full"
			on:click|preventDefault={() => clickcontext('report')}
			><i
				class="fa sm:text-sm text-xs fa-exclamation-triangle mr-2"
				aria-hidden="true"
			/>Report</button>
	</div>
	<main>
		<slot />
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Raleway&display=swap');
</style>
