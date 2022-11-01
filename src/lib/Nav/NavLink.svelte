<script lang="ts">
	export let link: string;
	export let isCurrentPage: boolean;

	let classes: string;

	$: classes = `${
		isCurrentPage
			? 'border-blue-900 dark:border-blue-300'
			: 'flex flex-row hover:border-blue-400 dark:hover:border-blue-100 border-transparent'
	} inline-block border-b-2 md:px-2 py-1 transition-colors
        duration-100`;
</script>

<li class="md:mr-3">
	<a data-sveltekit:prefetch href={link} class={classes}>
		<slot />
	</a>
</li>
