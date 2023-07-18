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
        gap: clamp(3rem, 1vh, 4rem);

        margin: clamp(3rem, 1vh, 4rem) clamp(2rem, 10vw, 12rem);
    }
</style>
