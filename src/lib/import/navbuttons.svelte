<script lang="ts">
	import { DoScroll } from '$lib/store/postion';
	export let text: string, id: string;
</script>

<button
	class="text-xl hover:bg-white/10 p-2 px-4 rounded-l-full rounded-e-full space-x-1"
	on:click={(e) => {
		e.preventDefault();
		DoScroll(id);
	}}>{text}</button
>
