<script lang="ts">
	import { setSections } from '$lib/store/postion';
	import { onMount } from 'svelte';
	import Indicator from './indicator.svelte';
	import Navbuttons from './navbuttons.svelte';
	var visible: boolean = false;
	var data = [
		'hero',
		'about',
		//  'work',
		'contact'
	];
	setSections(data);
	const changevisibilty = () => {
		if (window.scrollY > window.innerHeight * (1 / 2)) {
			visible = true;
		} else visible = false;
	};

	onMount(() => {
		changevisibilty();

		window.addEventListener('scroll', () => {
			changevisibilty();
		});

		return () => {
			window.removeEventListener;
		};
	});
</script>

<header
	class={visible
		? 'fixed w-full bg-blue-700/95 text-white transition-all duration-150 ease-in-out  top-0 -mt-[1px] z-[100]'
		: 'fixed -top-96 bg-blue-700/95 text-white transition-all duration-150 ease-in-out w-full z-[100]'}
>
	<div class="flex-col flex w-full items-center">
		<div id="head" class="w-full max-w-[900px] p-3 uppercase text-sm inline-flex justify-between">
			<div class="inline-flex items-center justify-between">
				<Navbuttons id={'hero'} text="Code Manch" />
			</div>
			<nav class="inline-flex topline space-x-2">
				<Navbuttons id={'about'} text="About" />
				<Navbuttons id={'contact'} text="Contact" />
			</nav>
		</div>
	</div>
	<Indicator />
</header>

<style>
	header {
		font-family: 'Josefin Sans', sans-serif;
	}
</style>
