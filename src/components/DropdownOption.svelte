<script>
    import Dropdown from '../components/Dropdown.svelte';

    export let src;
    export let title;
    export let content;
</script>

<Dropdown bind:title>
    <div
        slot="option"
        class="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu">
        <a
            href={src}
            class="block px-4 py-2 text-sm dark:text-white"
            role="menuitem">
            {content}
        </a>
    </div>
</Dropdown>
