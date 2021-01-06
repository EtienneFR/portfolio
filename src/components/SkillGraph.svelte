<script>
    import Animate from '../components/Animate.svelte';
    let className = '';
    export { className as class };

    export let id;
    export let src;
    export let alt;
    export let title;
    export let level;
</script>

<Animate>
    <div slot="animation-content" {id} class="{className} px-8 py-4">
        <div class="flex">
            <img {src} {alt} class="object-scale-down h-16 p-2" />
            <span class="flex items-center text-gray-600">{title}</span>
        </div>
        <div
            class="h-2 text-center bg-teal-200 rounded-full shadow-lg dark:bg-gray-800">
            <div
                class="bg-teal-400 dark:bg-black {level} text-left rounded-full
                h-2" />
        </div>
    </div>
</Animate>
