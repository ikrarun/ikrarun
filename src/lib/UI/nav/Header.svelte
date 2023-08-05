<script lang="ts">
	import { setSections } from '$lib/store/postion';
	import { onMount } from 'svelte';
	var togglenav: boolean = false;
	import navicon from 'svelte-awesome/icons/navicon';

	import Navbuttons from './navbuttons.svelte';
	import { Icon } from 'svelte-awesome';
	export let fix: boolean;
	var visible: boolean = false;
	let style: string;
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
				'sticky w-full bg-white text-white transition-all duration-150 ease-in-out  top-[-1px] -mt-[1px] z-[100]';
		}
		if (!fix) {
			style =
				'fixed w-full bg-white text-white transition-all duration-150 ease-in-out  top-[-1px] -mt-[1px] z-[100]';
		}

		window.addEventListener('scroll', () => {
			changevisibilty();
		});

		window.addEventListener('resize', () => {
			togglenav = false;
		});
	});
</script>

<header
	class={visible
		? style
		: 'fixed sm:hidden sm:-top-96  sm:bg-white sm:text-white transition-all duration-150 ease-in-out w-full z-[100]'}
>
	<div
		class="flex-col flex w-full blue text-white dark:bg-black dark:border-b dark:border-b-gray-400/80 items-center"
	>
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
				<button
					on:click|preventDefault={() => {
						togglenav = !togglenav;
					}}
					class="flex sm:hidden z-50 topline px-2 py-1 rounded-sm hover:dark:bg-white/40 hover:bg-black/20 self-center"
				>
					<Icon data={navicon} />
				</button>
				<div
					class={togglenav
						? 'fixed items-center justify-center flex flex-col space-y-4 sm:hidden top-0 right-0 left-0 h-full w-full dark:bg-black text-black bg-gray-200 dark:text-white z-40'
						: 'hidden'}
				>
					<Navbuttons link="" id={'about'} text="About" />
					<Navbuttons link="" id={'contact'} text="Contact" />
					<Navbuttons link="/work" id={'work'} text="Work" />
				</div>
			{:else}
				<div class="inline-flex items-center justify-between">
					<Navbuttons link="/" id={'hero'} text="Code Manch" />
				</div>
			{/if}
		</div>
	</div>
</header>

<style>
	header {
		font-family: 'Raleway', sans-serif;
	}
</style>
