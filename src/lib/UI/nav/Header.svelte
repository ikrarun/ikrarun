<script lang="ts">
	import { setSections } from '$lib/store/postion';
	import { onMount } from 'svelte';
	import Indicator from './indicator.svelte';
	import Navbuttons from './navbuttons.svelte';
	export let fix: boolean;
	var visible: boolean = false;
	let style:string;
	var data = ['hero', 'about', 'contact'];
	setSections(data);
	const changevisibilty = () => {
		if (fix) {
			visible = true;
		} else if (window.scrollY > window.innerHeight * (1 / 2)) {
			visible = true;
		} else visible = false;
	};

	onMount(() => {
		changevisibilty();

		if (fix) {
			style =
				'sticky w-full bg-white  text-white transition-all duration-150 ease-in-out  top-0 -mt-[1px] z-[100]';
		}
		if (!fix) {
			style =
				'fixed w-full bg-white  text-white transition-all duration-150 ease-in-out  top-0 -mt-[1px] z-[100]';
		}

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
		? style
		: 'fixed -top-96 bg-white text-white transition-all duration-150 ease-in-out w-full z-[100]'}
>
	<div class="flex-col flex w-full blue items-center">
		<div id="head" class="w-full max-w-[900px] p-3 uppercase text-sm inline-flex justify-between">
			{#if !fix}
				<div class="inline-flex items-center justify-between">
					<Navbuttons link="" id={'hero'} text="Code Manch" />
				</div>
				<nav class=" hidden sm:inline-flex topline space-x-2">
					<Navbuttons link="" id={'about'} text="About" />
					<Navbuttons link="" id={'contact'} text="Contact" />
					<Navbuttons link="/work" id={'work'} text="Work" />
				</nav>
			{:else}
				<div class="inline-flex items-center justify-between">
					<Navbuttons link="/" id={'hero'} text="Code Manch" />
				</div>
			{/if}
		</div>
	</div>
	<Indicator />
</header>

<style>
	header {
		font-family: 'Josefin Sans', sans-serif;
	}
</style>
