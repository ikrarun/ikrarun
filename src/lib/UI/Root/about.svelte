<script>
	import { DoScroll } from '$lib/store/postion';
</script>

<section
	id="about"
	class="fscreen relative items-stretch w-full flex space-y-14 flex-col justify-center"
>
	<div class="grid fscreen grid-cols-2 w-full h-full">
		<div class="w-full bg-gray-950 h-full flex flex-col items-start justify-end">
			<div class="px-20 pb-10 flex flex-col">
				<h1 class="text-sm text-gray-300 uppercase">About</h1>
				<h1 class="text-7xl mt-2">Code Manch</h1>
				<h1 class="text-base mt-4 text-gray-400">
					🚀 Welcome to Code Manch! Unraveling the mysteries of web development. HTML, CSS,
					JavaScript, React, Node.js & more. Join our coding adventure! 💻🌐<br /><br />🤝 Let’s
					connect, learn, and support each other in the vibrant coding community of Code Manch. Stay
					updated with the latest web technologies, design principles, and user experience insights.<br
					/><br />🌟 Unlock the power of code and unleash your creativity in this dynamic digital
					landscape. Click the follow button and let’s embark on this coding journey together! 💻🚀
				</h1>
			</div>
		</div>
		<div
			style="background-image: url(https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);"
			class="w-full bg-no-repeat bg-cover h-full flex flex-col items-center justify-center bg-purple-700"
		/>
	</div>

	<button
		id="exw"
		class="text-base w-fit absolute bottom-9 left-[48.7%] z-10 text-black overflow-clip hover:scale-110 uppercase hover:text-white rounded-e-full rounded-l-full duration-150 flex items-center justify-center text-center font-normal tracking-wide px-2 p-2 border border-white"
		on:click={(e) => {
			e.preventDefault();
			DoScroll('work');
		}}
		><i class="fa fa-chevron-down" aria-hidden="true" />
	</button>
</section>
