<script lang="ts">
	import { goto } from '$app/navigation';
	import { DoScroll } from '$lib/store/postion';
	export let text: string, id: string, link: string;
</script>

{#if link && link.length > 0}
	<button
		class="hover:bg-white/10 p-1 px-3 rounded-l-full rounded-e-full space-x-1"
		on:click={(e) => {
			e.preventDefault();
			goto(link,{})
		}}>{text}</button
	>
{:else}
	<button
		class="hover:bg-white/10 p-1 px-3 rounded-l-full rounded-e-full space-x-1"
		on:click={(e) => {
			e.preventDefault();
			DoScroll(id);
		}}>{text}</button
	>
{/if}
