<script>
	import { onMount } from 'svelte';
	import { getContext } from 'svelte';
	import theme from '$lib/stores/theme';

	import { Menu } from '$lib/Icons';
	import Popup from '$lib/Nav/Popup.svelte';
	import ClosePopupButton from '$lib/Nav/ClosePopupButton.svelte';

	const { open } = getContext('simple-modal');

	let showPopup;
	let backgroundResult;

	$: themeIsDark = $theme === 'dark';

	function backgroundClass() {
		if (localStorage.theme === 'dark') {
			return {
				color: 'rgb(255 255 255)',
				background: 'rgb(31 41 55)'
			};
		}
		return {
			color: 'rgb(0 0 0)',
			background: 'rgb(255 255 255)'
		};
	}

	onMount(() => {
		backgroundResult = backgroundClass();

		showPopup = () =>
			open(
				Popup,
				{},
				{
					closeButton: ClosePopupButton,
					styleWindowWrap: {
						right: '1rem',
						margin: 'unset',
						top: '1rem',
						position: 'fixed',
						width: '100%',
						'max-width': '20rem'
					},
					styleWindow: {
						background: backgroundResult.background,
						color: backgroundResult.color,
						margin: 'unset'
					}
				}
			);
	});
</script>

<p>
	<button on:click={showPopup} aria-label="Right Align">
		<span class="sr-only">Phone menu</span>
		<svelte:component this={Menu} class="h-10 w-10" />
	</button>
</p>
