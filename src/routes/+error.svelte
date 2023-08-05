<script>
	import error from '$lib/images/404.webp';
	import Header from '$lib/UI/nav/Header.svelte';
	import Bottomnav from '$lib/UI/nav/bottomnav.svelte';
</script>

<div
	id="about"
	class=" bg-white dark:bg-black div items-stretch w-full flex flex-col justify-center"
>
	<Header fix={true} />
	<div
		class="sm:grid flex flex-col-reverse items-center justify-center grid-cols-1 sm:grid-cols-2 w-full"
	>
		<div
			class="max-w-md h-fit flex items-center sm:items-start flex-col text-sm text-black self-center justify-self-center px-6 py-8 mt-9 rounded-lg"
		>
			<h1 class="text-2xl text-black dark:text-white font-semibold">Invalid Request</h1>
			<h1 class="text-2xl text-black dark:text-white mt-2 font-semibold">404</h1>

			<p class="mt-10 text-black dark:text-white">Don't hesitate to reach out to me</p>

			<a
				href="mailto:wowdeveloper@protonmail.com"
				class="text-blue dark:text-white underline underline-offset-2"
			>
				@ wowdeveloper@protonmail.com</a
			>
		</div>

		<div id="img" class="h-fit flex sm:p-32">
			<div
				class="relative flex items-center justify-center overflow-clip w-auto mx-auto h-fit mt-9 object-cover rounded-2xl"
			>
				<img alt="" class=" w-2/3 sm:w-full h-auto left-0 right-0 bottom-0" src={error} />
			</div>
		</div>
	</div>
	<Bottomnav />
</div>

<style>
	#img {
		object-fit: fill;
	}

	div {
		font-family: 'Poppins', sans-serif;
	}
</style>
