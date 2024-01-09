<script lang="ts">
    import Testimonial from "@components/Testimonial.svelte";
    import Hamburger from "@components/interactive/Hamburger.svelte";
    import InlineLink from "@components/interactive/InlineLink.svelte";
</script>

<section class="card col">
    <div class="image row">
        <h2>Matt Schewe: Your Next Golf Coach</h2>
        <img src="/images/matt/hero.webp" alt="Matt standing with his clubs" />
    </div>
    <div class="text col">
        <h2>Matt Schewe: Your Next Golf Coach</h2>
        <p>
            Matt Schewe, winner of the 2023 STPGA Eastern Chapter Teacher of the Year Award, is a Houston based golf
            instructor. He teaches an effortless swing that is repeatable and easy to learn. Find out more about what
            makes him a uniquely qualified instructor:
        </p>
        <div class="links col">
            <InlineLink href="/about">Learn More</InlineLink>
            <InlineLink href="/contact">Get in Contact</InlineLink>
        </div>
    </div>
</section>
<section class="card col">
    <div class="image row rev">
        <h2 class="top">30 Years of Excellence in Every Lesson</h2>
        <img src="/images/matt/lessons.webp" alt="Matt during a lesson" />
    </div>
    <div class="text col">
        <h2 class="top">30 Years of Excellence in Every Lesson</h2>
        <p>
            As a 30+ year member of the PGA, Matt brings decades of experience to each and every lesson. Check out
            Matt's lesson pricing:
        </p>
        <div class="links col">
            <InlineLink href="/lessons">View Lesson Rates</InlineLink>
        </div>
    </div>
</section>
<section class="card col">
    <div class="image row">
        <h2 class="top">The Latest About Matt</h2>
        <img src="/images/matt/blog.webp" alt="Matt's clubs" />
    </div>
    <div class="text col">
        <h2 class="top">The Latest About Matt</h2>
        <p>
            All of the latest information about Matt, including awards, celebrity shout-outs, and more, are posted on
            his blog. Stay up date by visiting below:
        </p>
        <div class="links col">
            <InlineLink href="/blog">View Matt's Blog</InlineLink>
        </div>
    </div>
</section>

<style lang="scss">
    .card {
        box-shadow: 0 0 0.25rem $primary-1;

        @include wide-mobile-and-above {
            flex-direction: row-reverse;

            max-width: 48rem;
            width: 100%;
        }
    }

    .card:nth-of-type(2) {
        @include wide-mobile-and-above {
            flex-direction: row;
        }
    }

    .text {
        gap: 1rem;

        padding: 1rem;

        p {
            font-size: clamp(0.85rem, 2vw, 1rem);
        }

        @include wide-mobile-and-above {
            justify-content: center;

            padding: 2rem;
        }
    }

    .image {
        z-index: 0;
        position: relative;
    }

    .links {
        gap: 0.75rem;
    }

    img {
        width: clamp(16rem, 35vw, 20rem);

        @include wide-mobile-and-below {
            width: 100%;
        }
    }

    .image {
        @include mobile-and-above {
            flex-direction: row;
        }
    }

    .image > h2 {
        position: absolute;
        bottom: 0;
        left: 0;

        padding: 1.5rem;
        width: 100%;

        background-color: rgba($primary-1, 90%);

        font-size: clamp(1.75rem, 1vw, 3rem);
        color: $primary-6;

        &.top {
            top: 0;
            bottom: unset;
        }

        @include mobile-and-above {
            display: none;
        }

        @include wide-mobile-and-above {
            display: none;
        }
    }

    .text > h2 {
        display: none;

        @include wide-mobile-and-above {
            display: block;

            font-size: clamp(1.5rem, 1vw, 2.5rem);
        }
    }
</style>
