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

<div class="app w-full flex flex-col screen text-blue-700">
	<main>
		<slot />
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Inter&family=Josefin+Sans&family=Quicksand&family=Roboto+Slab&family=Rokkitt&family=Sacramento&display=swap');
  </style>
