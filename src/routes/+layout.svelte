<script lang="ts">
    import Footer from "@components/Footer.svelte";
    import Navbar from "@components/Navbar.svelte";

    import "@lib/scss/reset.scss";
</script>

<Navbar />
<main>
    <slot />
</main>
<Footer />

<style lang="scss">
    main {
        flex-grow: 1;
    }
</style>
