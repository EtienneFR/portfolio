<script>
    import Animate from '$lib/Animate.svelte';

    let className = '';
    export { className as class };

    export let id;
    export let title;
    export let content;
</script>

<Animate>
    <div
        slot="animation-content"
        {id}
        class="{className} block w-4/5 sm:max-w-sm rounded overflow-hidden
        shadow-lg transition duration-200 ease-in-out bg-gray-200
        dark:bg-gray-800 hover:bg-gray-100 dark-hover:bg-gray-700 transform
        hover:-translate-y-1 hover:scale-110 m-8">

        <slot name="clickable" />
        <slot name="image" />

        <div class="px-3 py-2">
            <div class="mb-2 text-xl font-bold dark:text-blue-200 text-blue-800">{title}</div>
            <p class="text-justify text-gray-900 dark:text-white">
                {@html content}
            </p>
        </div>
    </div>
</Animate>
