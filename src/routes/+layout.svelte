<script>
	import Header from '$lib/basic/Header.svelte';
	import '$lib/basic/styles.css';
</script>

<div class="app">
	<Header />
	<main class="min-h-screen bg-black snap-start mx-auto w-full">
		<slot />
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

	:root {
		font-family: 'Raleway', sans-serif;
	}
</style>
