<script>
	import { page } from '$app/stores';
</script>

<header>
	<div
		class="w-fit p-2 text-white fixed left-0 top-0 sm:top-1/3 flex pointer-events-auto text-xl items-center flex-col mt-1"
	>
		<ul class="list-disc flex-col flex space-y-2 text-lg font-normal">
			<a href={'/'} class={$page.url.pathname !== '/' ? 'rounded hover:text-3xl flex ' : 'hidden'}>
				{`> Home`}
			</a>
			<a href={'/about'} class={$page.url.pathname !== '/about' ? 'rounded hover:text-3xl flex ' : 'hidden'}>
				{`> About`}
			</a>
			<a
				href={'/projects'}
				class={$page.url.pathname !== '/projects' ? 'rounded hover:text-3xl flex ' : 'hidden'}
			>
				{`> Projects`}
			</a>

			<a href={'/skills'} class={$page.url.pathname !== '/skills' ? 'rounded hover:text-3xl flex ' : 'hidden'}>
				{`> Skills`}
			</a>
		</ul>
	</div>
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono&display=swap');
	header {
		font-family: 'Spline Sans Mono', monospace;
	}
</style>