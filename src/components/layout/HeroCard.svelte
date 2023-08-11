<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
</script>

<section class="row card">
    <div class="col text">
        <h1 class="title">Matt Schewe:<br />Your Next<br />Golf Coach</h1>
        <h2 class="subtitle">
            Matt Schewe is a Houston based golf instructor with over 30 years of teaching experience. He teaches an
            effortless golf swing that is repeatable and easy to learn. Find out more about what makes him uniquely
            qualified:
        </h2>
        <ButtonLink href="/about">Learn More About Matt</ButtonLink>
    </div>
    <div class="col image">
        <img src="images/matt/hero.webp" alt="matt schewe standing with his clubs" />
    </div>
</section>

<style lang="scss">
    .card {
        margin: 0rem 4rem;
        max-width: 70rem;

        @include card-box-shadow;

        @include tablet-portrait-and-below {
            margin: 0rem;
        }

        @include tablet-and-below {
            flex-direction: column;
        }
    }

    .text {
        justify-content: center;
        align-items: center;
        gap: 2rem;

        padding: 1rem 2rem;

        h1 {
            text-align: center;

            @include card-title;
        }

        h2 {
            max-width: 90%;

            text-align: center;

            @include card-subtitle;

            @include tablet-and-below {
                max-width: 80%;

                text-align: justify;
            }
        }

        @include tablet-and-below {
            padding: 2rem;
        }

        @include phone {
            padding: 2rem 0rem;
        }
    }

    .image {
        @include tablet-and-below {
            background-color: $accent-2;
        }
    }

    img {
        object-fit: scale-down;
        height: 35rem;

        @include tablet-portrait-and-below {
            height: 30rem;
        }

        @include tablet-and-below {
            height: 25rem;
        }
    }
</style>
