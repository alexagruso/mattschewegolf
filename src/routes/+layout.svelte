<script lang="ts">
    import "@lib/scss/reset.scss";

    import Footer from "@components/Footer.svelte";
    import Navbar from "@components/Navbar.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        // document.body.style.visibility = "visible";
    });
</script>

<Navbar />
<main class="col">
    <slot />
</main>
<Footer />

<style lang="scss">
    main {
        flex-grow: 1;
        align-items: center;
        gap: 2rem;

        padding: 2rem 0;
    }
</style>
