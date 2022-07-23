<script>
	// @ts-nocheck
	import Animate from '$lib/Animate.svelte';
	import Page from '$lib/Page.svelte';
	import BackButton from '$lib/BackButton.svelte';

	export let title;
	export let description;
</script>

<svelte:head>
	<title>Etienne Dayre | {title}</title>
</svelte:head>

<Page>
	<Animate>
		<div slot="animation-content">
			<div class="container m-auto">
				<BackButton href="/blog" name="Blog" />
			</div>
			<article class="mx-auto max-w-prose px-3 md:w-2/3">
				<h2
					class="flex justify-center pt-5 text-2xl font-semibold text-blue-900 dark:text-blue-300"
				>
					{title}
				</h2>

				<p class="mt-4 font-semibold text-gray-800 dark:text-blue-100 ">{description}</p>

				<div
					class="prose prose-lg prose-indigo mx-auto mt-5 pb-10 text-gray-800
					prose-h4:italic dark:text-blue-100 dark:prose-h3:text-blue-100 dark:prose-h4:text-blue-100"
				>
					<slot />
				</div>
			</article>
		</div>
	</Animate>
</Page>
