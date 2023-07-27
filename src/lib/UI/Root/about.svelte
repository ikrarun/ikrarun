<script>
	//@ts-ignore
	import arun from '$lib/images/arun.png?run';
	import Img from '@zerodevx/svelte-img';
</script>

<section
	id="about"
	class="fscreen relative items-stretch w-full flex space-y-14 flex-col justify-center"
>
	<div class="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
		<div
			class="max-w-md h-fit self-center justify-self-center px-6 py-8 mt-9 bg-white shadow-lg rounded-lg"
		>
			<h1 class="text-3xl font-bold text-gray-800">Hello, I'm Kr. Arun 😄</h1>
			<p class="mt-4 text-gray-600">
				I'm an enthusiastic Full Stack Developer from Sultanpur, Uttar Pradesh, India.
			</p>
			<p class="mt-2 text-gray-600">
				With expertise in both front-end and back-end development, I craft dynamic web applications
				that deliver top-notch user experiences.
			</p>
			<p class="mt-2 text-gray-600">
				My passion for learning drives me to stay up-to-date with the latest industry trends and
				coding languages.
			</p>
			<p class="mt-2 text-gray-600">
				Collaboration and teamwork are at the heart of my work philosophy.
			</p>
			<p class="mt-2 text-gray-600">
				If you have an exciting project in mind or are looking for a dedicated and enthusiastic Full
				Stack Developer to join your team, I'd be thrilled to be a part of it.
			</p>
			<p class="mt-2 text-gray-600">
				Don't hesitate to reach out to me at <a
					href="mailto:wowdeveloper@protonmail.com"
					class="text-blue-500">wowdeveloper@protonmail.com</a
				>. Let's embark on an incredible journey of innovation and craftsmanship together! 😊
			</p>
		</div>

		<div id="img" class="h-full hidden sm:flex p-32">
			<div class="rounded-full flex w-full object-center aspect-square overflow-clip">
				<div class="h-fit w-fit object-center">
					<Img class="h-fit w-fit" height={100}   src={arun} alt="Arun PIC" />
				</div>
			</div>
		</div>
	</div>
	<h1 class="z-[100] rotate-90 absolute -right-5 bottom-12">Scroll Down -</h1>

</section>

<style>
	#img {
		object-fit: fill;
	}
</style>
