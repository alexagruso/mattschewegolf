<script lang="ts">
    import Testimonial from "@components/Testimonial.svelte";
    import Hamburger from "@components/interactive/Hamburger.svelte";
    import InlineLink from "@components/interactive/InlineLink.svelte";
</script>

<section class="card row">
    <div class="text col">
        <h2>Matt Schewe:<br />Your Next Golf Coach</h2>
        <p>
            Matt Schewe, winner of the STPGA Eastern Chapter Teacher of the Year Award, is a Houston based golf
            instructor with over 30 years of teaching experience. He teaches an "effortless golf swing that is
            repeatable and easy to learn."
        </p>
        <div class="links row">
            <InlineLink href="/about">Read More About Matt</InlineLink>
            <InlineLink href="/contact">Get in Contact</InlineLink>
        </div>
    </div>
    <img src="images/matt/hero.webp" alt="Matt Schewe standing with his clubs" />
</section>
<section class="card row rev">
    <div class="text col">
        <h2>30 Years of Excellence in Every Lesson</h2>
        <p>
            As a 30+ year member of the PGA, Matt brings decades of experience to each and every lesson. Schedule one
            today!
        </p>
        <div class="links row">
            <InlineLink href="/lessons">View Lesson Rates</InlineLink>
        </div>
    </div>
    <img src="images/matt/lessons.webp" alt="Matt Schewe teaching one of his students" />
</section>
<section class="card row">
    <div class="text col">
        <h2>Stay up to Date With the Latest News About Matt</h2>
        <p>
            All of the latest information about Matt, including awards, celebrity shout outs, and more, are posted on
            our blog.
        </p>
        <div class="links row">
            <InlineLink href="/blog">Visit Matt's Blog</InlineLink>
        </div>
    </div>
    <img src="images/matt/blog.webp" alt="Matt Schewe's golf clubs" />
</section>

<style lang="scss">
    .card {
        align-items: center;

        box-shadow: 0 0 0.25rem $primary-1;
        max-width: 64rem;
        width: 100%;
        height: 28rem;

        @include mobile-and-below {
            flex-direction: column !important;
        }
    }

    .text {
        gap: 1rem;

        padding: 3rem;

        h2 {
            font-size: clamp(1.5rem, 5vw, 3rem);
        }

        p {
            font-size: clamp(0.8rem, 1vw, 1rem);
        }

        @include tablet-and-below {
            padding: 1rem;
        }
    }

    .links {
        gap: 1rem;

        font-size: clamp(0.8rem, 1vw, 1rem);

        @include portrait-and-below {
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    img {
        max-width: 50%;
        // height: 100%;

        border: 1px solid red;

        @include tablet-and-below {
            background-color: $accent-1;
        }

        @include mobile-and-below {
            max-width: 100%;
        }
    }
</style>
