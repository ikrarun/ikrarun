<script lang="ts">
	import Icon from 'svelte-awesome';
	import moonO from 'svelte-awesome/icons/moonO';
	import sunO from 'svelte-awesome/icons/sunO';
	import warning from 'svelte-awesome/icons/warning';

	import { onMount } from 'svelte';
	var dark: boolean;
	function darkmodeswitch() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			console.log('white');
			dark = false;
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		} else {
			console.log('dark');
			dark = true;
			localStorage.theme = 'dark';

			document.documentElement.classList.add('dark');
		}
	}

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<div class="w-full h-fit bg-sky-500/10 dark:bg-white/5 mt-20 text-black dark:text-white/70 text-xs">
	<div
		class="max-w-[900px] h-fit p-1 pl-10 flex flex-row justify-between w-full mx-auto items-center"
	>
		<a href="https://forms.gle/5dijSo4zbkeh2DDt6" target="_blank"
			><Icon data={warning} />
			Report</a
		>
		<button
			on:click|preventDefault={() => {
				darkmodeswitch();
			}}
			>{#if !dark}
				<h1 class="px-2 py-1 bg-black/20 hover:bg-black/50 text-center rounded-md text-white">
					<Icon data={moonO} />
				</h1>
			{:else}
				<h1 class="px-2 py-1 bg-white/5 hover:bg-white/20 text-center rounded-md text-white">
					<Icon data={sunO} />
				</h1>{/if}</button
		>
	</div>
</div>
