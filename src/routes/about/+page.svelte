<script>
	import tten from '$lib/images/tten.svg';
	import image from '$lib/images/back.svg';
</script>

<main class="rounded-xl flex max-w-[900px] sm:py-16 overflow-clip mx-auto w-full screen">
	<div
		class="grid bg-transparent  overflow-clip shadow-sm grid-cols-1 sm:grid-cols-3 rounded-xl max-w-[900px] w-full h-full"
		style="background-image: url({image})"
	>
		<div
			class="flex flex-col bg-transparent gap-4 px-8 pb-10 text-lg justify-center sm:justify-end col-span-2 h-full"
		>
			<h1 class="font-bold text-white text-5xl">About</h1>
			<h1 class="font-medium text-gray-200 text-base">
				🚀 Welcome to Code Manch! Unraveling the mysteries of web development. HTML, CSS,
				JavaScript, React, Node.js & more. Join our coding adventure! 💻🌐 <br /> 🤝 Let's connect,
				learn, and support each other in the vibrant coding community of Code Manch. Stay updated
				with the latest web technologies, design principles, and user experience insights.<br />🌟
				Unlock the power of code and unleash your creativity in this dynamic digital landscape.
				Click the follow button and let's embark on this coding journey together! 💻🚀
			</h1>
		</div>
		<div
			class=" sm:flex relative object-fill col-span-1 hidden flex-col items-center justify-center h-full"
		>
			<img src={tten} alt="" />
		</div>
	</div>
</main>

<style>
	img {
		width: 100%;
		height: 100%;
        object-fit: cover;
	}
</style>
