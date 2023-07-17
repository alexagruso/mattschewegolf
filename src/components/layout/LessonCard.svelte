<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
</script>

<section class="card">
    <div class="col text center">
        <h1 class="title">30 years of excellence in every lesson</h1>
        <h2 class="subtitle">
            As a 30+ year member of the PGA and top five teacher in Southern Texas, Matt brings decades of experience to
            each and every lesson. Schedule one today!
        </h2>
        <ButtonLink href="/lessons">View Lesson Rates</ButtonLink>
    </div>
    <div class="image">
        <img src="images/matt/lessonsection.png" alt="matt schewe during a lesson" />
    </div>
</section>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: row-reverse;

        margin: 0rem 14rem;
        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);
        height: 34rem;

        background-color: $primary-6;
    }

    .text {
        gap: 2rem;

        padding: 0rem 4rem 0rem 6.5rem;
    }

    .title {
        font-size: $header-3;
        text-align: center;
        text-transform: uppercase;
        color: $primary-1;
    }

    .subtitle {
        width: 90%;

        font-size: $paragraph;
        font-weight: 400;
        text-align: center;
        color: $primary-3;
    }

    .image {
        display: flow-root;
        position: relative;
        min-width: 35%;

        background-color: $accent-2;

        img {
            position: absolute;
            top: 2rem;
            left: 3rem;
        }
    }
</style>
