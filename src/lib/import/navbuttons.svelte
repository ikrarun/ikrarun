<script lang="ts">
	import position, { DoScroll } from '$lib/store/postion';
	import { onMount } from 'svelte';
	export let text: string, id: string;
	var currpos: string;
	onMount(() => {
		position.subscribe((data) => {
			currpos = data;
		});
	});
</script>

{#if id === 'hero'}
	<button
		class="text-xl p-2 px-4 rounded-l-full rounded-e-full space-x-1"
		on:click={(e) => {
			e.preventDefault();
			DoScroll(id);
		}}>{text}</button
	>
{/if}
{#if id !== 'hero'}
	<button
		class={currpos === id
			? 'text-xl  bg-white text-black p-2 px-4 rounded-l-full rounded-e-full space-x-1'
			: 'text-xl hover:bg-white/10 p-2 px-4 rounded-l-full rounded-e-full space-x-1'}
		on:click={(e) => {
			e.preventDefault();
			DoScroll(id);
		}}>{text}</button
	>
{/if}
