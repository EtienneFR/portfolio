<script>
    import Card from './Card.svelte';

    let className;
    export { className as class };

    export let id;
    export let href;
    export let src;
    export let alt;
    export let title;
    export let content;
</script>

<Card bind:id bind:title bind:content>
    <div slot="clickable">
        <a sveltekit:prefetch {href}>
            <img class={className} {src} {alt} />
            <div class="px-3 py-2">
                <div class="mb-2 text-xl font-bold dark:text-blue-200 text-blue-800">{title}</div>
                <p class="text-justify text-gray-900 dark:text-white">
                    {@html content}
                </p>
            </div>
        </a>
    </div>
</Card>
