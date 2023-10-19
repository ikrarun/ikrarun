<script lang="ts">
	import './styles.css';
	import { onMount } from 'svelte';
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
			window.open('https://github.com/ikrarun/ikrarun/issues', '_blank');
		}
	}
</script>

<svelte:head>
	<meta
		property="og:image"
		content="https://raw.githubusercontent.com/ikrarun/ikrarun/main/src/lib/images/shot.jpeg"
	/>
	<meta property="og:title" content="Kumar Arun" />
	<meta property="og:url" content="https://kumararun.vercel.app/" />
	<meta
		property="twitter:image"
		content="https://raw.githubusercontent.com/ikrarun/ikrarun/main/src/lib/images/shot.jpeg"
	/>
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Kumar Arun" />
	<meta property="twitter:description" content="Created with Love by Kr Arun" />
	<meta property="og:description" content="Created with Love by Kr Arun" />
	<meta property="og:url" content="https://kumararun.vercel.app/" />
</svelte:head>

<div class="app w-full overflow-clip bg-white dark:bg-black flex flex-col screen">
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
			/>Report</button
		>
	</div>
	<main>
		<slot />
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Raleway&family=Yatra+One&display=swap');
</style>
