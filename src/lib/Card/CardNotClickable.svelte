<script>
    import Card from './Card.svelte';

    export let id;
    export let src;
    export let alt;
    export let title;
    export let content;
</script>

<Card bind:id bind:title bind:content>
    <div slot="image">
        <img class="w-full" {src} {alt} />
    </div>
</Card>
