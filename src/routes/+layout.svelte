<script>
    import Footer from "@components/layout/Footer.svelte";
    import Navbar from "@components/layout/Navbar.svelte";
</script>

<Navbar />
<main class="col">
    <slot />
</main>
<Footer />

<style lang="scss">
    main {
        flex-grow: 1;
        gap: 4rem;

        margin: 4rem 12rem;
    }
</style>
