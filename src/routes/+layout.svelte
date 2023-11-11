<script lang="ts">
    import Footer from "@components/layout/Footer.svelte";
    import Navbar from "@components/layout/navbar/Navbar.svelte";
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
        gap: 4rem;

        padding: 4rem 0rem;
    }
</style>
