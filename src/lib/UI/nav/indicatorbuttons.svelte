<script lang="ts">
	import position from '$lib/store/postion';
	let blank = 'rounded-full h-2 w-2 bg-black';
	let fill = 'rounded-full h-2 w-2 blue';
	export let id: string;
</script>

<div class={$position == id ? fill : blank} />
