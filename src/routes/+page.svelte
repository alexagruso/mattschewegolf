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
    <div class="image">
        <img src="images/matt/hero.webp" alt="matt schewe standing with his clubs" />
    </div>
</section>

<section class="row rtl card">
    <div class="col text">
        <h1 class="title">30 years of excellence in every lesson</h1>
        <h2 class="subtitle">
            As a 30+ year member of the PGA and top five teacher in Southern Texas, Matt brings decades of experience to
            each and every lesson. Schedule one today!
        </h2>
        <ButtonLink href="/lessons">See Our Lesson Rates</ButtonLink>
    </div>
    <div class="image">
        <img src="images/matt/lessons.webp" alt="matt schewe during a lesson" />
    </div>
</section>

<section class="row card">
    <div class="col text">
        <h1 class="title">Stay up to date with the latest news</h1>
        <h2 class="subtitle">
            All of the latest information about Matt, including awards, celebrity shout outs, and more, are posted on
            our blog. You can also find links to content on our other social media platforms.
        </h2>
        <ButtonLink href="/blog">Visit Matt's Blog</ButtonLink>
    </div>
    <div class="image">
        <img src="images/matt/blog.webp" alt="matt's golf clubs" />
    </div>
</section>

<style lang="scss">
    .card {
        align-items: center;

        max-width: 64rem;

        // right to left
        &.rtl {
            flex-direction: row-reverse;
        }

        @include card-shadow;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;

        padding: 2rem;

        h1 {
            max-width: 85%; // janky but I don't want to surround with a div

            @include card-title;
        }

        h2 {
            max-width: 80%; // janky but I don't want to surround with a div

            color: $primary-2;

            @include card-subtitle;
        }
    }

    .image {
        img {
            max-height: clamp(480px, 50vw, 560px);
        }
    }
</style>
