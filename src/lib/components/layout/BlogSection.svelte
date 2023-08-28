<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
</script>

<section class="row card">
    <div class="col text center">
        <h1 class="title">STAY UP TO DATE<br />WITH THE LATEST NEWS</h1>
        <h2 class="subtitle">
            All of the latest information about Matt, including awards, celebrity shout outs, and more, are posted on
            our blog.
        </h2>
        <ButtonLink href="/blog">Visit Matt's Blog</ButtonLink>
    </div>
    <div class="col image">
        <img src="images/matt/blog.webp" alt="matt's golf clubs" />
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
        object-fit: scale-down;
        height: 35rem;

        @include tablet-portrait-and-below {
            height: 30rem;
        }

        @include tablet-and-below {
            height: 25rem;
        }

        @include phone {
            height: 100%;
        }
    }
</style>
