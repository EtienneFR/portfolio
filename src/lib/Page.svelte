<script>
	import { fade } from 'svelte/transition';

	let className = '';
	export { className as class };

	const TRANSITION_DURATION = 300;
</script>

<div
	in:fade={{ delay: TRANSITION_DURATION, duration: TRANSITION_DURATION }}
	out:fade={{ duration: TRANSITION_DURATION }}
	class="absolute w-full {className}">
	<slot />
</div>
