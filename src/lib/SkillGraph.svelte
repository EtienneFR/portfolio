<script>
    import Animate from '$lib/Animate.svelte';
    let className = '';
    export { className as class };

    export let src;
    export let alt;
    export let title;
    export let level;

    const widths = ['', 'w-1/4', 'w-2/4', 'w-3/4', 'w-4/4'];
    const levelClass = widths[level];
</script>

<Animate>
    <div slot="animation-content" class="{className} px-8 py-4">
        <div class="flex">
            <img {src} {alt} class="object-scale-down h-16 p-2" />
            <span class="flex items-center text-gray-700 dark:text-white">
                {title}
            </span>
        </div>
        <div
            class="h-2 text-center bg-gray-300 rounded-full shadow-lg dark:bg-gray-600">
            <div
                class="bg-teal-400 dark:bg-teal-300 {levelClass} text-left
                rounded-full h-2" />
        </div>
    </div>
</Animate>
