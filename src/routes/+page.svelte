<script lang="ts">
    import InlineLink from "@components/interactive/InlineLink.svelte";
    import { Style } from "@lib/configuration/styles";
</script>

<div class="card row">
    <div class="text col">
        <h1>Matt Schewe:<br />Your Next Golf Coach</h1>
        <p>
            Matt Schewe, winner of the STPGA Eastern Chapter Teacher of the Year Award, is a Houston based golf
            instructor with over 30 years of teaching experience. Matt teaches an "effortless golf swing that is
            repeatable and easy to learn."
        </p>
        <div class="links row">
            <InlineLink href="/about" style={Style.Light}>Read More About Matt</InlineLink>
            <InlineLink href="/contact" style={Style.Light}>Get in Contact</InlineLink>
        </div>
    </div>
    <img src="images/matt/hero.webp" alt="Awd" />
</div>

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

        h1 {
            font-size: 3rem;
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
