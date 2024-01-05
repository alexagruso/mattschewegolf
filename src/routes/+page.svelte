<script lang="ts">
    import Testimonial from "@components/Testimonial.svelte";
    import Hamburger from "@components/interactive/Hamburger.svelte";
    import InlineLink from "@components/interactive/InlineLink.svelte";
</script>

<section class="card row">
    <div class="text col">
        <h1>Matt Schewe:<br />Your Next Golf Coach</h1>
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
        <h2>30 Years of Excellence in<br /> Every Lesson</h2>
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
        <h2>Stay up to Date With the<br />Latest News About Matt</h2>
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
<section class="testimonials col">
    <Testimonial name="awd"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus, sed nisi repellendus itaque
        aliquam ullam sunt iusto quia minima natus provident consequuntur fuga ad placeat modi sint. Natus deleniti illo
        veritatis excepturi sequi mollitia exercitationem, maxime nam? Laborum, blanditiis. Reprehenderit, tempora rerum
        quia dolorem sint ex nulla natus architecto?</Testimonial>
    <Testimonial name="awd"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus, sed nisi repellendus itaque
        aliquam ullam sunt iusto quia minima natus provident consequuntur fuga ad placeat modi sint. Natus deleniti illo
        veritatis excepturi sequi mollitia exercitationem, maxime nam? Laborum, blanditiis. Reprehenderit, tempora rerum
        quia dolorem sint ex nulla natus architecto?</Testimonial>
    <Testimonial name="awd"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus, sed nisi repellendus itaque
        aliquam ullam sunt iusto quia minima natus provident consequuntur fuga ad placeat modi sint. Natus deleniti illo
        veritatis excepturi sequi mollitia exercitationem, maxime nam? Laborum, blanditiis. Reprehenderit, tempora rerum
        quia dolorem sint ex nulla natus architecto?</Testimonial>
</section>

<style lang="scss">
    .card {
        border: 1px solid $accent-1;
        max-width: 64rem;

        .text {
            flex-grow: 1;
            justify-content: center;
            gap: 1.25rem;

            padding: 0 2rem;
        }

        h1,
        h2 {
            font-family: "Raleway";
            font-size: 3rem;
            font-weight: 700;
            text-transform: capitalize;
        }

        p {
            font-size: 1.2rem;
        }

        .links {
            gap: 1.25rem;
        }

        img {
            max-width: 30%;
            flex-grow: 2;
        }
    }

    .testimonials {
        gap: 2rem;

        max-width: 64rem;
        width: 100%;

        @include tablet {
            flex-direction: row;
        }
    }
</style>
