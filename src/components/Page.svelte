<script>
    import { fade } from 'svelte/transition';
    import Footer from '../components/Footer.svelte';

    let className = '';
    export { className as class };

    const TRANSITION_DURATION = 300;
</script>

<div
    in:fade={{ delay: TRANSITION_DURATION, duration: TRANSITION_DURATION }}
    out:fade={{ duration: TRANSITION_DURATION }}
    class="absolute top-0 w-full {className}">
    <slot />
    <Footer />
</div>
