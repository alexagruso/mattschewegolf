<script lang="ts">
    import InlineLink from "@components/interactive/InlineLink.svelte";
    import { Style } from "@lib/configuration/styles";
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
            <InlineLink href="/about" style={Style.Light}>Read More About Matt</InlineLink>
            <InlineLink href="/contact" style={Style.Light}>Get in Contact</InlineLink>
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
            <InlineLink href="/lessons" style={Style.Light}>View Lesson Rates</InlineLink>
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
            <InlineLink href="/blog" style={Style.Light}>Visit Matt's Blog</InlineLink>
        </div>
    </div>
    <img src="images/matt/blog.webp" alt="Matt Schewe's golf clubs" />
</section>

<style lang="scss">
    .card {
        border: 1px solid black;
        max-width: 64rem;

        .text {
            flex-grow: 1;
            justify-content: center;
            gap: 1.25rem;

            padding: 0 2rem;
        }

        h1,
        h2 {
            font-size: 3rem;
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
</style>
