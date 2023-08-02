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
		class="p-1 px-3 rounded-l-full rounded-e-full space-x-1"
		on:click={(e) => {
			e.preventDefault();
			DoScroll(id);
		}}>{text}</button
	>
{:else}
	<button
		class={currpos === id
			? 'bg-white/10 text-white p-1 px-3 rounded-l-full rounded-e-full space-x-1'
			: 'hover:bg-white/10 p-1 px-3 rounded-l-full rounded-e-full space-x-1'}
		on:click={(e) => {
			e.preventDefault();
			DoScroll(id);
		}}>{text}</button
	>
{/if}
