<script>
	import { DoScroll } from '$lib/store/postion';
</script>

<!-- Work Section -->
<section
	id="work"
	class="fscreen relative flex space-y-14 flex-col w-full bg-blue-700 items-center justify-center"
>
	<h1 class="text-8xl text-center font-bold">Work Section</h1>
	<button
		id="exw"
		class="text-base w-fit absolute bottom-9 left-[48.7%] z-10 text-black overflow-clip hover:scale-110 uppercase hover:text-white rounded-e-full rounded-l-full duration-150 flex items-center justify-center text-center font-normal tracking-wide px-2 p-2 border border-white"
		on:click={(e) => {
			e.preventDefault();
			DoScroll('contact');
		}}
		><i class="fa fa-chevron-down" aria-hidden="true" />
	</button>
</section>
