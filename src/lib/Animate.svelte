<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	const INTERVAL = 50;
	let loaded = false;

	onMount(() => {
		loaded = true;
	});
	function animationEnd({ target: { classList } }) {
		classList.remove('fadeIn');
	}
</script>

<div
	class={loaded ? 'fadeIn' : 'opacity-0'}
	style="animation-delay: {INTERVAL}ms"
	on:animationend={animationEnd}
>
	<slot name="animation-content">
		<span class="missing">No content</span>
	</slot>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-15px);
		}
		to {
			opacity: 1;
		}
	}
	.fadeIn {
		opacity: 0;
		animation-name: fadeIn;
		animation-duration: 600ms;
		animation-fill-mode: forwards;
	}
</style>
