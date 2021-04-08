<script>
    import Animate from '../components/Animate.svelte';
    let className = '';
    export { className as class };

    export let src;
    export let alt;
    export let title;
    export let level;

    let levelClass = `w-${level}/4`;
</script>

<Animate>
    <div slot="animation-content" class="{className} px-8 py-4">
        <div class="flex">
            <img {src} {alt} class="object-scale-down h-16 p-2" />
            <span class="flex items-center text-gray-600">{title}</span>
        </div>
        <div
            class="h-2 text-center bg-gray-400 rounded-full shadow-lg dark:bg-gray-700">
            <div
                class="bg-teal-500 dark:bg-teal-400 {levelClass} text-left
                rounded-full h-2" />
        </div>
    </div>
</Animate>
