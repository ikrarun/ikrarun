<script>
	import abimg from '$lib/images/abimg.svg';
</script>

<section
	id="about"
	class="relative -mt-[1px] items-stretch w-full flex space-y-14 flex-col justify-center"
>
	<div class="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
		<div
			class="max-w-md h-fit text-sm text-black space-y-2 self-center transition-all duration-300 justify-self-center px-6 py-8 mt-9 rounded-lg"
		>
			<h1 class="text-2xl font-semibold ">Hello, I'm Kr. Arun</h1>
			<p>I'm an enthusiastic Full Stack Developer from Sultanpur, Uttar Pradesh, India.</p>
			<p>
				With expertise in both front-end and back-end development, I craft dynamic web applications
				that deliver top-notch user experiences.
			</p>
			<p>
				My passion for learning drives me to stay up-to-date with the latest industry trends and
				coding languages.
			</p>
			<p>Collaboration and teamwork are at the heart of my work philosophy.</p>
			<p>
				If you have an exciting project in mind or are looking for a dedicated and enthusiastic Full
				Stack Developer to join your team, I'd be thrilled to be a part of it.
			</p>
			<p>Don't hesitate to reach out to me</p>

			<a
				href="mailto:wowdeveloper@protonmail.com"
				class="text-blue-700 underline underline-offset-2"
			>
				@ wowdeveloper@protonmail.com</a
			>
			<p>Let's embark on an incredible journey of innovation and craftsmanship together! 😊</p>
		</div>

		<div id="img" class="h-full hidden sm:flex p-32">
			<div
				class="relative overflow-clip w-auto mx-auto max-h-80 h-full mt-9 object-cover rounded-2xl"
				id="nay"
			>
				<img alt="" class=" w-full h-full left-0 right-0 bottom-0" src={abimg} />
			</div>
		</div>
	</div>
</section>

<style>
	#img {
		object-fit: fill;
	}

	section {
		font-family: 'Poppins', sans-serif;
	}
</style>
