<script>
    import Footer from "@lib/components/Footer.svelte";
</script>

<main class="col">
    <slot />
    <Footer />
</main>

<style lang="scss">
    main {
        justify-content: space-between;
        align-items: center;

        min-height: 100vh;
    }
</style>
