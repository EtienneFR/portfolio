<script lang="ts">
	// @ts-nocheck

	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	import { ChevronDown, ChevronUp } from '$lib/Icons';
	import type { Option } from '$lib/types';

	export let option: Option[];
	export let label: string;

	let buttonClassName = `relative w-min py-2 pl-3 pr-10 text-left bg-white dark:bg-gray-700 hover:bg-blue-100
			dark:hover:bg-blue-800 rounded-lg shadow-md cursor-default focus:outline-none
			focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white
			focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2
			focus-visible:border-indigo-500 sm:text-sm`;
</script>

<Listbox>
	<div class="relative mt-1">
		<ListboxButton class={buttonClassName} let:open>
			<span class="block truncate">{label}</span>
			<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
				{#if open}
					<svelte:component this={ChevronUp} class="ml-2 -mr-1 h-5 w-5" />
				{:else}
					<svelte:component this={ChevronDown} class="ml-2 -mr-1 h-5 w-5" />
				{/if}
			</span>
		</ListboxButton>
		<Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
			<ListboxOptions
				class="mx-auto mt-1 max-h-60 w-max overflow-auto rounded-md bg-white py-1
				text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 sm:text-sm
				lg:absolute"
			>
				{#each option as { label, src }}
					<ListboxOption
						class="relative cursor-default select-none py-2
						px-4 text-gray-900 hover:bg-blue-100 dark:text-white dark:hover:bg-blue-800"
					>
						<a
							href={src}
							target="_blank"
							class="block px-2 py-1 text-lg dark:text-white"
							role="menuitem"
							rel="noreferrer"
						>
							{label}
						</a>
					</ListboxOption>
				{/each}
			</ListboxOptions>
		</Transition>
	</div>
</Listbox>
