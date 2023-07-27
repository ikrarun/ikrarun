<script lang="ts">
	import { allsections } from '$lib/store/postion';
	import Indicatorbuttons from './indicatorbuttons.svelte';
	const sectionsValue = allsections();
</script>

<div
	class="w-fit space-y-1 p-2 flex flex-col items-center justify-center h-full top-0 left-0 fixed"
>
	{#each sectionsValue as data}
		<Indicatorbuttons id={data} />
	{/each}
</div>
