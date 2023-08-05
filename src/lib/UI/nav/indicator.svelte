<script lang="ts">
	import { allsections } from '$lib/store/postion';
	import Indicatorbuttons from './indicatorbuttons.svelte';
	const sectionsValue = allsections();
</script>

<div
	class="w-fit hidden bg-black py-3 h-fit border border-black shadow-md shadow-black space-y-2 p-2  flex-col items-center justify-center bottom-5 left-1 rounded-2xl fixed"
>
	{#each sectionsValue as data}
		<Indicatorbuttons id={data} />
	{/each}
</div>
