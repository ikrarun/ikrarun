<script lang="ts">
	var state = 'idle';
	let email = '';
	function emailverficator(input: string) {
		let pass = true;
		const error = <HTMLHeadingElement>document.querySelector('#errortext');
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		pass = pattern.test(input);
		if (!pass) {
			error.classList.remove('opacity-0');
			error.classList.add('opacity-100');
			return pass;
		} else {
			error.classList.remove('opacity-100');
			error.classList.add('opacity-0');
			return pass;
		}
	}

	import contact from '$lib/images/contact.gif';
	import Navbuttons from '$lib/UI/nav/navbuttons.svelte';
	import { onMount } from 'svelte';

	async function sendEmail(mail: string) {
		state = 'processing';

		const ff = emailverficator(mail);
		try {
			if (!ff) {
				state = 'done';

				return;
			}
			await fetch('api/subscribe', {
				method: 'POST',
				headers: {
					email: mail
				}
			});
			state = 'done';
			email = '';
			setTimeout(function () {
				state = 'idle';
			}, 2000);
		} catch (e) {
			console.log(e);
			state = 'idle';
		}
	}

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
	<div class="grid grid-cols-1 sm:grid-cols-2 w-full px-6 sm:p-0 h-full">
		<div class="max-h-min flex">
			<div
				class="relative object-fill p-10 overflow-clip sm:w-auto max-h-44 mx-auto sm:max-h-80 h-full rounded-2xl"
			>
				<img alt="" class=" w-full h-full left-0 right-0 bottom-0" src={contact} />
			</div>
		</div>

		<div class="flex max-w-md sm:pr-28 flex-col-reverse sm:flex-col w-full justify-center mx-auto">
			<div
				class="sm:mt-0 flex flex-col items-center sm:items-start justify-center sm:justify-start mt-6 pb-4"
			>
				<h1 class="sm:text-2xl text-base text-black">Got A Problem to Solve?</h1>
				<h1 class="sm:text-sm text-xs text-center sm:text-left text-gray-700">
					Get your space suit ready and tell me your ideas to develop your dream website.
				</h1>
				<div class="sm:text-sm text-xs inline-flex items-center">
					<a
						href="mailto:wowdeveloper@protonmail.com"
						class="underline sm:text-sm text-xs underline-offset-4 text-blue"
						><i
							class="fa sm:text-sm text-xs fa-envelope mr-2"
							aria-hidden="true"
						/>wowdeveloper@protonmail.com</a
					>
				</div>
			</div>
			<form
				autocomplete="off"
				class="rounded-md relative w-full border text-sm sm:text-base border-[#1876b4]"
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
					{#if state === 'idle'}
						<button
							id="sub_btn"
							on:click|preventDefault={() => {
								sendEmail(email);
							}}
							class="blue outline-none ring-0 border-none p-1 text-white rounded-b-sm"
							>Subscribe to Newsletter</button
						>
					{:else if state === 'processing'}
						<button
							id="sub_btn"
							on:click|preventDefault={() => {
								return;
							}}
							class="bg-gray-700 animate-pulse duration-200 outline-none ring-0 border-none p-1 text-white rounded-b-sm"
							>Wait....</button
						>
					{:else if state === 'done'}
						<button
							id="sub_btn"
							on:click|preventDefault={() => {
								return;
							}}
							class="bg-green-700 outline-none ring-0 border-none p-1 text-white rounded-b-sm"
							>Thanks for Subscribing</button
						>
					{/if}
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
	<div class="w-full bg-sky-500/10 mt-20 text-black text-xs">
		<div class="max-w-[900px] p-1 pl-10 flex w-full mx-auto items-start justify-start">
			<a href="https://forms.office.com/r/aGBT5ie8Lg" target="_blank" ><i class="fa fa-exclamation-triangle mr-1" aria-hidden="true"/>Report</a>
		</div>
	</div>
</section>

<style>
	section {
		font-family: 'Poppins', sans-serif;
	}
</style>
