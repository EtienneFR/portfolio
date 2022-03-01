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
		<ul class="grid grid-cols-1 gap-y-14">
			{#each formatterPosts as { title, description, datetime, slug }}
				<li class="flex max-w-prose flex-col ">
					<a href={`/blog/${slug}`} sveltekit:prefetch>
						<h2 class="text-2xl font-semibold text-blue-900 hover:underline dark:text-blue-300">
							{title}
						</h2>
					</a>

					<time {datetime} class="text-sm italic text-gray-800 dark:text-blue-100">{datetime}</time>

					<p class="mt-4 text-gray-900 dark:text-white">{description}</p>
				</li>
			{/each}
		</ul>
	</div>
</Animate>
