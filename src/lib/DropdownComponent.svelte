<script>
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	import { ChevronDown, ChevronUp } from '$lib/Icons';

	export let option;
	export let label;

	let open;
	$: open = false;

	function toggle() {
		open = !open;
	}
</script>

<Listbox>
	<div class="relative mt-1">
		<ListboxButton
			class="relative w-min py-2 pl-3 pr-10 text-left bg-white dark:bg-gray-700 hover:bg-blue-100
			dark:hover:bg-blue-800 rounded-lg shadow-md cursor-default focus:outline-none
			focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white
			focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2
			focus-visible:border-indigo-500 sm:text-sm"
			let:open>
			<span class="block truncate">{label}</span>
			<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
				{#if open}
					<svelte:component this={ChevronUp} class="w-5 h-5 ml-2 -mr-1" />
				{:else}
					<svelte:component this={ChevronDown} class="w-5 h-5 ml-2 -mr-1" />
				{/if}
			</span>
		</ListboxButton>
		<Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
			<ListboxOptions
				class="lg:absolute w-max py-1 mt-1 overflow-auto text-base bg-white dark:bg-gray-700
				rounded-md shadow-lg max-h-60 ring-1 ring-black mx-auto ring-opacity-5 focus:outline-none
				sm:text-sm">
				{#each option as { label, src }}
					<ListboxOption
						class="text-gray-900 hover:bg-blue-100 dark:text-white dark:hover:bg-blue-800
						cursor-default select-none relative py-2 px-4">
						<a
							href={src}
							target="_blank"
							class="block px-2 py-1 text-lg dark:text-white"
							role="menuitem">
							{label}
						</a>
					</ListboxOption>
				{/each}
			</ListboxOptions>
		</Transition>
	</div>
</Listbox>
