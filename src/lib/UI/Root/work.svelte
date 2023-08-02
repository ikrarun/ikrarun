<script>
	var project = [{ id: 23123 }, { id: 2313123 }];
</script>

<!-- Work Section -->
<section
	id="work"
	class="fscreen relative flex space-y-14 flex-col w-full text-black bg-white items-center justify-center"
>
	<!-- Headings -->
	<div class="relative">
		<h1 class="text-3xl font-bold">Project's</h1>
		<h1 class="absolute text-base font-semibold -bottom-3 -rotate-6 -right-3/4 text-blue-700/80">
			Created By Me.
		</h1>
	</div>

	<!-- Projects -->
	<div class="grid grid-rows-1 grid-flow-col">
		{#each project as item (item.id)}
			<div
				class=" border-black/95 border flex flex-col items-start justify-start rounded-md h-72 w-64 m-2 p-4"
			>
				<h1 class="">Name</h1>
				<h1 class="">Desc</h1>
			</div>
		{/each}
	</div>
	<h1 id="scdown" class="z-[100] text-blue-700 rotate-90 absolute -right-5 bottom-12">
		Scroll Down -
	</h1>
</section>

<style>
	section {
		font-family: 'Inter', sans-serif;
	}
</style>
