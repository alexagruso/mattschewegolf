<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
</script>

<section class="row card hero">
    <div class="col text center">
        <h1 class="title">Matt Schewe:<br />Your Next<br />Golf Coach</h1>
        <h2 class="subtitle">
            Matt Schewe is a Houston based golf instructor with over 30 years of teaching experience. Find out more
            about what makes him uniquely qualified:
        </h2>
        <ButtonLink href="/about">Learn More About Matt</ButtonLink>
    </div>
    <div class="image">
        <img src="images/matt/herosection.png" alt="matt schewe standing with his clubs" />
    </div>
</section>

<style lang="scss">
    .card {
        margin: 0rem 14rem;
        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);
        height: 34rem;

        background-color: $primary-6;
    }

    .hero {
        .text {
            gap: 2rem;

            padding: 0rem 8rem 0rem 4rem;
        }

        .title {
            font-size: $header-2;
            text-align: center;
            text-transform: uppercase;
            color: $primary-1;
        }

        .subtitle {
            width: 85%;

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
                right: 3rem;
            }
        }
    }
</style>
