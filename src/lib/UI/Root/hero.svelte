<script>
	import back from '$lib/images/back.webp';
</script>

<!-- Hero Section -->
<section
	id="hero"
	class="fscreen relative w-full flex bg-center bg-cover bg-no-repeat flex-col items-center justify-center"
>
	<div class="static">
		<div class="z-20 flex flex-col items-center justify-center absolute h-full top-0 right-0">
			<img class="z-0 h-3/4" src={back} alt="" />
		</div>

		<div class="grid w-full absolute top-0 left-0 right-0 z-50 fscreen grid-rows-2">
			<div class="bg-transparent px-10 py-3 flex flex-col items-start justify-end">
				<h1 class="text-xl pl-1 font-semibold">Kumar Arun</h1>
				<h1 class="text-6xl font-bold">Self-taught Full Stack Developer,</h1>
			</div>
			<div class="bg-transparent px-10 py-3 flex flex-col items-start justify-start space-y-1">
				<h1 class="text-6xl font-bold">School-taught Mathematicians</h1>
				<h1 class="text-lg pl-1 tracking-wide font-bold">
					I built Web and Android Apps with a focus on responsive design and accessibility.
				</h1>
			</div>
		</div>

		<div class="grid w-full absolute top-0 left-0 right-0 z-10 fscreen grid-rows-2">
			<div class="bg-blue-700 px-10 py-3 flex flex-col items-start justify-end" />
			<div class="bg-blue-600 px-10 py-3 flex flex-col items-start justify-start space-y-1" />
		</div>
	</div>
</section>
