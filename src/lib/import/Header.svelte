<script>
	import { setSections } from '$lib/store/postion';
	import Indicator from './indicator.svelte';
	import Navbuttons from './navbuttons.svelte';
	var data = ['hero', 'about', 'work', 'contact'];
	setSections(data);
</script>

<header class="sticky top-0 z-10">
	<div class="flex-col bg-black/70 backdrop-blur-lg flex w-full items-center">
		<div
			id="head"
			class="w-full max-w-[900px] uppercase text-xl inline-flex
	p-2 justify-between"
		>
			<div class="inline-flex items-center justify-between space-x-2">
				<Navbuttons id={'hero'} text="Code Manch" />
			</div>
			<nav class="inline-flex topline text-base space-x-2">
				<Navbuttons id={'about'} text="About" />
				<Navbuttons id={'work'} text="Work" />
				<Navbuttons id={'contact'} text="Contact" />
			</nav>
		</div>
	</div>
	<Indicator />
</header>

<style>
	header {
		font-family: Raleway;
	}
</style>
