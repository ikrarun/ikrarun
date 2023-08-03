<script>
	import About from '$lib/UI/Root/about.svelte';
	import Contact from '$lib/UI/Root/contact.svelte';
	import Hero from '$lib/UI/Root/hero.svelte';
	import Work from '$lib/UI/Root/work.svelte';
	import Header from '$lib/import/Header.svelte';
</script>

<main class="flex flex-col w-full">
	<Hero />
	<Header />
	<About />
	<!-- <Work /> -->
	<Contact />
</main>

<svelte:head>
	<title>Code Manch</title>
	<meta name="description" content="Created with love by ikrarun" />
</svelte:head>

<style>
	
</style>