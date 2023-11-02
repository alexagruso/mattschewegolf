<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
</script>

<section class="row card">
    <div class="col text center">
        <h1 class="title">Matt Schewe:<br />Your Next<br />Golf Coach</h1>
        <h2 class="subtitle">
            Matt Schewe, STPGA Teacher of the Year Award winner, is a Houston based golf instructor with over 30 years
            of teaching experience. He teaches an effortless golf swing that is repeatable and easy to learn. Find out
            more about what makes him uniquely qualified:
        </h2>
        <ButtonLink href="/about">Learn More About Matt</ButtonLink>
    </div>
    <div class="col image">
        <img src="images/matt/herosection.png" alt="matt schewe standing with his clubs" />
    </div>
</section>

<style lang="scss">
    .card {
        margin: 0rem;
        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);

        background-color: $primary-6;

        @include tablet-portrait-and-below {
            flex-direction: column;
        }
    }

    .text {
        flex-grow: 1;
        flex-basis: 1rem;
        gap: 2rem;

        padding: 4rem 0rem;
    }

    .title {
        font-size: $header-2;
        text-align: center;
        text-transform: uppercase;
        color: $primary-1;
    }

    .subtitle {
        max-width: 70%;

        font-size: $paragraph;
        font-weight: 400;
        text-align: center;
        color: $primary-3;
    }

    .image {
        flex-grow: 0.5;
        flex-basis: 1rem;
        justify-content: center;

        background-color: $accent-2;
    }

    img {
        object-fit: contain;

        @include tablet-portrait-and-below {
            max-height: 30vh;
        }
    }
</style>
