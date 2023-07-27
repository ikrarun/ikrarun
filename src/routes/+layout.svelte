<script>
	import '$lib/import/styles.css';
	import { onMount } from 'svelte';

	// Function to check if the user agent indicates a mobile device
	function isMobileDevice() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);
	}

	onMount(() => {
		// Check if the user is on a mobile device
		if (isMobileDevice()) {
			// Redirect to the mobile version of the site or a specific URL
			window.location.href = 'https://codemanch.vercel.app';
			// Replace 'https://example.com/mobile' with the URL you want to redirect to.
		}
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<div class="app w-full flex flex-col screen bg-black text-white">
	<main>
		<slot />
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@200;400;600;700;900&display=swap');
	div {
		font-style: normal;
		font-family: Roboto Slab, serif;
	}
</style>
