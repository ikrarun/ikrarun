<script lang="ts">
	import position from '$lib/store/postion';
	let blank = 'rounded-full border bg-transparent h-2 w-2 border-white';
	let fill = 'rounded-full border bg-white h-2 w-2 border-white';
	console.log(position)
	export let id: string;
	
</script>

<div class={$position == id ? fill : blank} />
