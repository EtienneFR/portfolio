<script lang="ts">
	import { getContext } from 'svelte';
	import { MenuIcon } from '$lib/Icons';
	import Popup from '$lib/Nav/Popup/Popup.svelte';
	import ClosePopupButton from '$lib/Nav/Popup/ClosePopupButton.svelte';
	import type { Link } from '$lib/types';

	const { open }: any = getContext('simple-modal');

	export let links: Link[];

	const showPopup = () =>
		open(
			Popup,
			{ links },
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
