<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
</script>

<section class="card">
    <div class="col text">
        <h1 class="title">30 years of excellence<br />in every lesson</h1>
        <h2 class="subtitle">
            As a 30+ year member of the PGA and top five teacher in Southern Texas, Matt brings decades of experience to
            each and every lesson. Schedule one today!
        </h2>
        <ButtonLink href="/lessons">View Lesson Rates</ButtonLink>
    </div>
    <div class="col image">
        <img src="images/matt/lessons.webp" alt="matt schewe during a lesson" />
    </div>
</section>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: row-reverse;

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
        display: block;

        object-fit: scale-down;
        max-height: 35rem;

        @include tablet-portrait-and-below {
            max-height: 30rem;
        }

        @include tablet-and-below {
            max-height: 25rem;
        }
    }
</style>
