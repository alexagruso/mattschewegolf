<script lang="ts">
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

        margin: clamp(3rem, 1vh, 4rem) 2rem;

        @include tablet-and-below {
            margin: clamp(3rem, 1vh, 4rem) 0rem;
        }

        @include desktop {
            margin: clamp(3rem, 1vh, 4rem) 15vw;
        }
    }
</style>
