<script lang="ts">
    import InlineLink from "@components/interactive/InlineLink.svelte";
    import { Style } from "@lib/configuration/styles";
</script>

<footer class="col">
    <section class="info col">
        <section class="job col">
            <p>
                <span class="inline-block">Matt Schewe,</span>
                <span class="inline-block">Director of Instruction</span>
            </p>
            <p>Pearland Golf Club</p>
            <p>3123 Flower Field Lane</p>
            <p>Pearland, Texas</p>
        </section>
        <section class="contact col">
            <p>(713) 291-8861</p>
            <p>matt@mattschewegolf.com</p>
            <div class="links row">
                <a href="https://twitter.com/mattschewegolf?lang=en" target="_blank">
                    <img src="images/footer/twitter.webp" alt="Twitter Logo" />
                </a>
                <a href="https://www.facebook.com/matt.schewe.1" target="_blank">
                    <img src="images/footer/facebook.webp" alt="Facebook Logo" />
                </a>
                <a href="https://www.instagram.com/golfpromattschewepga/" target="_blank">
                    <img src="images/footer/instagram.webp" alt="Instagram Logo" />
                </a>
                <a href="https://www.youtube.com/channel/UCLMlW7yX0chNKrdTu3hC5NA" target="_blank">
                    <img src="images/footer/youtube.webp" alt="Youtube Logo" />
                </a>
            </div>
            <p>
                <InlineLink href="/contact" style={Style.Dark}>Contact Matt</InlineLink>
            </p>
        </section>
    </section>
    <section class="admin col">
        <p>
            <span class="inline-block">Copyright &copy; {new Date().getFullYear()} Matt Schewe.</span>
            <span class="inline-block">All Rights Reserved.</span>
        </p>
        <p>
            <span class="inline-block">Website Created by</span>
            <InlineLink href="https://alexagruso.dev" style={Style.Dark}>Alex Agruso</InlineLink>
        </p>
        <p><InlineLink href="/login" style={Style.Dark}>Admin Login</InlineLink></p>
    </section>
</footer>

<style lang="scss">
    footer {
        padding: 1rem;

        background-color: $accent-1;
    }

    section {
        gap: 0.25rem;
    }

    .info,
    .job {
        border-bottom: 1px solid $primary-6;
        padding-bottom: 0.5rem;
    }

    .contact,
    .admin {
        padding-top: 0.5rem;
    }

    .info {
        @include tablet {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            padding-bottom: 1rem;

            section {
                padding: 0;
                border-bottom: none;
            }

            .contact {
                align-items: end;
            }
        }
    }

    .admin {
        @include tablet {
            flex-direction: row;
            justify-content: center;
            gap: 2rem;

            padding-top: 1rem;
        }
    }

    .links {
        gap: 0.5rem;
    }

    p,
    span {
        color: $primary-6;

        font-size: clamp(0.9rem, 1vw, 1rem);
    }
</style>
