<script lang="ts">
	import About from '$lib/UI/Root/about.svelte';
	import Contact from '$lib/UI/Root/contact.svelte';
	import Hero from '$lib/UI/Root/hero.svelte';
	import Header from '$lib/UI/nav/Header.svelte';
</script>

<div id="root" class="flex flex-col w-full relative">
	<Hero />
	<Header fix={false}/>
	<About />
	<Contact />
</div>

<svelte:head>
	<title>Kumar Arun</title>
	<meta name="description" content="Created with love by ikrarun" />
</svelte:head>

<style>
</style>
