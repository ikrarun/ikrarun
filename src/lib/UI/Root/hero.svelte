<script lang="ts">
	import hero from '$lib/images/hero.gif';
	import { onMount } from 'svelte';
	const name = 'Kumar Arun';
	const line1 = 'Self-taught Full Stack Developer,';
	const line2 = 'School-taught Mathematician';
	const tagline =
		'I built Web and Android Apps with a focus on responsive design and accessibility.';

	let disname = '';
	let disline1 = '';
	let disline2 = '';
	let distagline = '';
	let currentIndex = 0;

	const animateText = () => {
		if (currentIndex < name.length) {
			disname = name.slice(0, currentIndex + 1);
			currentIndex++;
			setTimeout(animateText, 20); // Adjust the delay (in milliseconds) between each character here
		} else if (currentIndex < name.length + line1.length) {
			disline1 = line1.slice(0, currentIndex - name.length + 1);
			currentIndex++;
			setTimeout(animateText, 20);
		} else if (currentIndex < name.length + line1.length + line2.length) {
			disline2 = line2.slice(0, currentIndex - name.length - line1.length + 1);
			currentIndex++;
			setTimeout(animateText, 20);
		} else if (currentIndex < name.length + line1.length + line2.length + tagline.length) {
			distagline = tagline.slice(0, currentIndex - name.length - line1.length - line2.length + 1);
			currentIndex++;
			setTimeout(animateText, 8);
		}
	};

	onMount(() => {
		animateText();
	});
</script>

<section id="hero" class=" w-full">
	<!-- image -->
	<div class="z-20 w-full sm:w-3/4 md:w-fit absolute right-0 flex h-screen">
		<img src={hero} class="sm:my-auto w-2/3 sm:w-auto mx-auto h-fit" alt="hero" />
	</div>

	<!-- Content -->
	<div class="grid w-full fscreen grid-rows-2">
		<div class="text-blue-hero bg-white px-10 py-3 flex flex-col items-start justify-end">
			<h1 class="text-sm z-30 sm:text-xl pl-1 mb-2 font-semibold">{disname}</h1>
			<h1 class=" text-xl z-30 sm:text-6xl font-bold">{disline1}</h1>
		</div>
		<div class="blue px-10 py-3 flex flex-col items-start justify-start space-y-1">
			<h1 class="text-xl sm:text-6xl z-30 text-white font-bold">{disline2}</h1>
			<h1 class="text-xs sm:text-lg z-30 text-white pl-1 font-bold">
				{distagline}
			</h1>
		</div>
	</div>
</section>

<style>
	section {
		font-family: 'Poppins', sans-serif;
	}
</style>
