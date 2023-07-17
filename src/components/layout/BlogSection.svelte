<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
</script>

<section class="row card hero">
    <div class="col text center">
        <h1 class="title">STAY UP TO DATE WITH THE LATEST NEWS</h1>
        <h2 class="subtitle">
            All of the latest information about Matt, including awards, celebrity shout outs, and more, are posted on
            our blog.
        </h2>
        <ButtonLink href="/blog">Visit Matt's Blog</ButtonLink>
    </div>
    <div class="image">
        <img src="images/matt/blogsection.png" alt="matt's golf clubs" />
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
            font-size: $header-3;
            text-align: center;
            text-transform: uppercase;
            color: $primary-1;
        }

        .subtitle {
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
