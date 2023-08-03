<script lang="ts">
	let email = '';
	function emailverficator(input: string) {
		let pass = true;
		const error = <HTMLHeadingElement>document.querySelector('#errortext');
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		pass = pattern.test(input);
		if (!pass) {
			error.classList.remove('opacity-0');
			error.classList.add('opacity-100');
		} else {
			error.classList.remove('opacity-100');
			error.classList.add('opacity-0');
			return;
		}
	}

	import contact from '$lib/images/contact.png';
	import { onMount } from 'svelte';

	onMount(() => {
		const input = <HTMLInputElement>document.querySelector('#inputemail');
		input.addEventListener('input', (e) => {
			if (email.length > 0) {
				return;
			} else {
				emailverficator('k@g.com');
			}
		});
	});
</script>

<!-- Work Section -->
<section id="contact" class="relative h-fit flex flex-col w-full items-center justify-center">
	<div class="grid grid-cols-2 max-w-[900px] h-fit py-28 w-full">
		<div class="max-h-min hidden sm:flex">
			<div
				class="relative object-fill p-10 overflow-clip w-auto mx-auto max-h-80 h-full rounded-2xl"
			>
				<img alt="" class=" w-full h-full left-0 right-0 bottom-0" src={contact} />
			</div>
		</div>

		<div class="flex flex-col w-full justify-center items-start">
			<h1 class="text-sm text-gray-600">Contact Me</h1>
			<h1 class="text-2xl text-black">Got A Problem to Solve?</h1>
			<h1 class="text-sm text-gray-700">
				Get your space suit ready and tell me your ideas to develop your dream website.
			</h1>
			<div class="text-sm inline-flex items-center">
				<a
					href="mailto:wowdeveloper@protonmail.com"
					class="underline underline-offset-4 text-blue-700"
					><i class="fa fa-envelope mr-2" aria-hidden="true" />wowdeveloper@protonmail.com</a
				>
			</div>
			<form
				autocomplete="off"
				class="rounded-md mt-12 relative w-full border text-base border-blue-700"
			>
				<div class="flex flex-col-reverse p-2">
					<input
						type="email"
						class="bg-transparent px-1 outline-none ring-transparent peerplaceholder:text-gray-700 text-black caret-black"
						aria-autocomplete="none"
						placeholder="email@domain.com"
						id="inputemail"
						required
						name="email"
						bind:value={email}
					/>
					<label class="ml-1 text-gray-900 text-xs" for="email">Email</label>
				</div>
				<div class="flex flex-col">
					<button
						id="sub_btn"
						on:click={(e) => {
							e.preventDefault();
							emailverficator(email);
						}}
						class="bg-blue-700 outline-none ring-0 border-none p-1 text-white rounded-b-sm"
						>Subscribe to Newsletter</button
					>
				</div>
				<h1
					class="self-start absolute text-xs text-red-600 -bottom-7 transition-all duration-200 opacity-0 mt-2"
					id="errortext"
				>
					Invalid Email Address.
				</h1>
			</form>
		</div>
	</div>
</section>

<style>
	section {
		font-family: 'Poppins', sans-serif;
	}
</style>
