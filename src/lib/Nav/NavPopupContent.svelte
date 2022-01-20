<script>
	import { getContext } from 'svelte';

	import { MenuIcon } from '$lib/Icons';
	import Popup from '$lib/Nav/Popup.svelte';
	import ClosePopupButton from '$lib/Nav/ClosePopupButton.svelte';

	const { open } = getContext('simple-modal');

	const showPopup = () =>
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
					margin: 'unset'
				},
				styleContent: {
					padding: 'unset'
				}
			}
		);
</script>

<p>
	<button on:click={showPopup} aria-label="Right Align">
		<span class="sr-only">Phone menu</span>
		<svelte:component this={MenuIcon} class="h-10 w-10" />
	</button>
</p>
