<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<div id="root" class="w-full static bg-center bg-cover screen">
		<div class="flex h-full w-full bg-black/10">
			<div
				class="max-w-[900px] px-6 mx-auto flex-col text-white flex h-full w-full sm:items-center justify-center"
			>
				<h1 class="text-9xl font-black">Code Manch</h1>
				<h1 class="font-medium text-xl pl-4">Learn to Code in Easy Manner</h1>
				<div
					class="mt-2 flex-wrap space-x-1 space-y-1 [&>*]:text-white items-center justify-start sm:justify-center w-full flex bg-transparent p-2 [&>*]:rounded-lg [&>*]:bg-black/40 [&>*]:px-2 [&>*]:py-1"
				>
					<h1>Web Developent</h1>
					<h1>Android Studio</h1>
					<h1>iOS Apps</h1>
					<h1>Desktop</h1>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	#root {
		background-image: url($lib/images/back.svg);
	}
</style>
