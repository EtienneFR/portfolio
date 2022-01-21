<script lang="ts">
	import Animate from '$lib/Animate.svelte';
	import { formatterDate } from '$lib/formatterDate';
	import type { Post } from '$lib/types';

	export let posts: Post[];

	let formatterPosts: Post[];

	$: formatterPosts = posts.map((post: Post) => ({
		...post,
		datetime: formatterDate(post.datetime)
	}));
</script>

<Animate>
	<div slot="animation-content">
		<ul class="grid gap-y-14 grid-cols-1">
			{#each formatterPosts as { title, description, datetime, slug }}
				<li class="flex flex-col max-w-prose">
					<a href={`/blog/${slug}`} sveltekit:prefetch>
						<h2 class="text-2xl text-blue-900 dark:text-blue-300 font-semibold hover:underline">
							{title}
						</h2>
					</a>

					<time {datetime} class="text-gray-800 dark:text-blue-100 italic text-sm">{datetime}</time>

					<p class="mt-4 text-gray-900 dark:text-white">{description}</p>
				</li>
			{/each}
		</ul>
	</div>
</Animate>
