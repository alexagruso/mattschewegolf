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
        <h1 class="title">30 years of excellence<br />in every lesson</h1>
        <h2 class="subtitle">
            As a 30+ year member of the PGA and top five teacher in Southern Texas, Matt brings decades of experience to
            each and every lesson. Schedule one today!
        </h2>
        <ButtonLink href="/lessons">View Lesson Rates</ButtonLink>
    </div>
    <div class="image">
        <img src="images/matt/lessons.webp" alt="matt schewe during a lesson" />
    </div>
</section>

<section class="row card">
    <div class="col text">
        <h1 class="title">STAY UP TO DATE<br />WITH THE LATEST NEWS</h1>
        <h2 class="subtitle">
            All of the latest information about Matt, including awards, celebrity shout outs, and more, are posted on
            our blog.
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
        gap: 2rem;

        padding: 3.5rem;

        h1 {
            @include card-title;
        }

        h2 {
            color: $primary-2;

            @include card-subtitle;
        }
    }

    .image {
        img {
            max-height: clamp(400px, 45vw, 560px);
        }
    }
</style>
