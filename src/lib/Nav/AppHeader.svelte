<script>
	import NavLink from './NavLink.svelte';
	import Theme from '$lib/Theme.svelte';
	import { Github, Mail } from '$lib/Icons';
	import Modal from 'svelte-simple-modal';
	import NavPopupContent from './NavPopupContent.svelte';

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

	let classes;

	$: classes = `md:flex items-start flex-col md:flex-row md:justify-between`;
</script>

<nav class="flex flex-wrap items-center justify-between px-4 py-3 mb-3">
	<div class="flex" />
	<div class="block md:hidden">
		<Modal ariaLabel="menu-modal">
			<NavPopupContent />
		</Modal>
	</div>
	<div class="md:flex flex-col justify-between w-full hidden md:flex-row">
		<ul class="w-min {classes}">
			{#each links as { text, link }}
				<NavLink {link} isCurrentPage={segment === link}>{text}</NavLink>
			{/each}
		</ul>

		<!-- Display when the screen is over 768px -->
		<div class="hidden md:flex flex-row-reverse items-center justify-center">
			<Theme class="" />
			<div class="flex flex-row mr-2">
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
