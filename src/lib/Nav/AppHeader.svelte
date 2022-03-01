<script>
	import NavLink from './NavLink.svelte';
	import Theme from '$lib/Theme.svelte';
	import { Github, Mail } from '$lib/Icons';
	import Modal from 'svelte-simple-modal';
	import NavPopupContent from '$lib/Nav/Popup/NavPopupContent.svelte';

	export let segment;

	const links = [
		{
			text: 'Home',
			link: '/'
		},
		{
			text: 'Skills',
			link: '/skills'
		},
		{
			text: 'Projects',
			link: '/projects'
		},
		{
			text: 'Blog',
			link: '/blog'
		}
	];

	const contact = [
		{
			href: 'mailto:contact@etienne-dayre.fr',
			name: 'Mail icon',
			icon: Mail
		},
		{
			href: 'https://github.com/EtienneFR/',
			name: 'Github icon',
			icon: Github
		}
	];
</script>

<nav class="mb-3 flex flex-row-reverse flex-wrap items-center justify-between px-4 py-3">
	<div class="block md:hidden">
		<Modal ariaLabel="menu-modal">
			<NavPopupContent {links} />
		</Modal>
	</div>

	<!-- Display when the screen is over 768px -->
	<div class="hidden w-full flex-row justify-between md:flex">
		<ul class="flex w-min flex-row">
			{#each links as { text, link }}
				<NavLink {link} isCurrentPage={segment === link}>{text}</NavLink>
			{/each}
		</ul>

		<div class="hidden flex-row-reverse items-center md:flex">
			<Theme class="" />
			<div class="mr-2 flex flex-row">
				{#each contact as { href, name, icon }}
					<a
						{href}
						class="mr-2 text-gray-700 hover:text-gray-400 dark:text-gray-400
						dark:hover:text-gray-100"
						target="_blank"
						rel="noopener"
					>
						<span class="sr-only">{name}</span>
						<svelte:component this={icon} class="h-5 w-5" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>
