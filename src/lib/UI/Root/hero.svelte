<script lang="ts">
	import back from '$lib/images/back.webp';
	import position from '$lib/store/postion';
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
		position.subscribe((data) => {
			if (data === undefined || data === 'hero' || data === null || data === '') {
				disname = '';
				disline1 = '';
				disline2 = '';
				distagline = '';
				currentIndex = 0;
				animateText();
			}
		});
	});
</script>

<!-- Hero Section -->
<section
	id="hero"
	class="fscreen relative w-full flex bg-center bg-cover bg-no-repeat flex-col items-center justify-center"
>
	<div class="static">
		<div class="z-20 flex flex-col items-center justify-center absolute h-full top-0 right-0">
			<img class="z-0 h-1/4 sm:h-2/4 md:3/4" src={back} alt="" />
		</div>

		<div class="grid w-full absolute top-0 left-0 right-0 z-50 fscreen grid-rows-2">
			<div class="bg-transparent px-10 py-3 flex flex-col items-start justify-end">
				<h1 class="text-xl pl-1 text-white font-semibold">{disname}</h1>
				<h1 class="text-6xl text-white font-bold">{disline1}</h1>
			</div>
			<div class="bg-transparent px-10 py-3 flex flex-col items-start justify-start space-y-1">
				<h1 class="text-6xl font-bold">{disline2}</h1>
				<h1 class="text-lg pl-1 tracking-wide font-bold">
					{distagline}
				</h1>
			</div>
		</div>

		<div class="grid w-full absolute top-0 left-0 right-0 z-10 fscreen grid-rows-2">
			<div class="bg-blue-700/95 px-10 py-3 flex flex-col items-start justify-end" />
			<div class="bg-white px-10 py-3 flex flex-col items-start justify-start space-y-1" />
		</div>
	</div>
	<h1 id="scdown" class="z-[100] rotate-90 absolute -right-5 bottom-12">Scroll Down -</h1>
</section>

<style>
	section {
		font-family: 'Josefin Sans', sans-serif;
	}
	#scdown{
		font-family: 'Inter', sans-serif;
	}
</style>
