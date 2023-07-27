<script>
	import { DoScroll } from '$lib/store/postion';
</script>

<!-- Work Section -->
<section
	id="contact"
	class="fscreen relative flex space-y-14 flex-col w-full bg-gray-950 items-center justify-center"
>
	<div class="grid grid-cols-2 max-w-[900px] w-full fscreen">
		<div class="flex flex-col w-full space-y-2 fscreen justify-center items-start">
			<h1 class="text-2xl text-gray-600">Contact Me</h1>
			<h1 class="text-4xl text-gray-200">Got A Problem to Solve?</h1>
			<h1 class="text-xl text-gray-400">
				Get your space suit ready and tell me your ideas to develop your dream website.
			</h1>
			<div class="text-xl inline-flex items-center text-gray-50">
				<i class="fa fa-envelope mr-2" aria-hidden="true" />
				<h1>wowdeveloper@protonmail.com</h1>
			</div>
		</div>

		<div class="flex items-center justify-center fscreen w-full">
			<form class="rounded-lg p-4 border-2 broder-white">
				<div class="flex flex-col">
					<label class="text-sm" for="email">Name</label>
					<input type="email" class="bg-transparent text-xl" id="email" name="" />
				</div>
			</form>
		</div>
	</div>
	<button
		id="exw"
		class="text-base w-fit absolute bottom-9 left-[48.7%] z-10 text-black overflow-clip hover:scale-110 uppercase hover:text-white rounded-e-full rounded-l-full duration-150 flex items-center justify-center text-center font-normal tracking-wide px-2 p-2 border border-white"
		on:click={(e) => {
			e.preventDefault();
			DoScroll('hero');
		}}
		><i class="fa fa-chevron-up" aria-hidden="true" />
	</button>
</section>
