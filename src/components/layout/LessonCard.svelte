<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
</script>

<section class="row card">
    <div class="col text center">
        <h1 class="title">30 years of excellence<br />in every lesson</h1>
        <h2 class="subtitle">
            As a 30+ year member of the PGA and top five teacher in Southern Texas, Matt brings decades of experience to
            each and every lesson. Schedule one today!
        </h2>
        <ButtonLink href="/lessons">View Lesson Rates</ButtonLink>
    </div>
    <div class="col image">
        <img src="images/matt/lessonsection.png" alt="matt schewe during a lesson" />
    </div>
</section>

<style lang="scss">
    .card {
        flex-direction: row-reverse;

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
