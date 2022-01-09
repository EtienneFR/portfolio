<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';

	onMount(() => {
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on('init', user => {
				if (!user) {
					window.netlifyIdentity.on('login', () => {
						document.location.href = '/admin/';
					});
				}
			});
		}
	});

	import Page from '$lib/Page.svelte';
	import Dropdown from '$lib/Dropdown.svelte';

	const description = {
		text: `
            I'm a web developer based in Paris.
            I really appreciate web, sciences, innovation and technologies in general.
            I was integrated into the professional context and I was able to grasp the challenges of an IT project
            during block apprenticeship in a banking company.
            `
	};
</script>

<svelte:head>
	<title>Etienne Dayre</title>
	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js">

	</script>
</svelte:head>

<Page>
	<div class="container m-auto w-3/4">
		<div class="flex flex-wrap mt-8 lg:space-x-10">
			<div class="w-full text-center lg:flex-1 lg:text-left">
				<h1 class="text-3xl text-blue-900 dark:text-blue-300">Etienne Dayre</h1>
				<h2 class="text-2xl">Full Stack Web Developer</h2>
			</div>
			<div class="px-2 m-2 mt-10 text-center lg:flex-1 sm:w-full lg:text-right">
				{description.text}
			</div>
		</div>
		<div class="w-full mt-2 text-center lg:text-left">
			<Dropdown class="relative inline-block text-left" />
		</div>
	</div>
	<Footer />
</Page>
