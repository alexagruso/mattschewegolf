<script lang="ts">
    import InlineLink from "@components/interactive/InlineLink.svelte";
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
                <InlineLink href="/contact" dark>Contact Matt</InlineLink>
            </p>
        </section>
    </section>
    <section class="admin col">
        <p>
            <span class="inline-block">Copyright &copy; {new Date().getFullYear()} Matt Schewe.</span>
            <span class="inline-block">All Rights Reserved.</span>
        </p>
        <p>
            Website Created by
            <InlineLink href="https://alexagruso.dev" dark>Alex Agruso</InlineLink>
        </p>
        <p>
            <InlineLink href="/login" dark>Admin Login</InlineLink>
        </p>
        <p>
            <InlineLink href="/test" dark>Test Page</InlineLink>
        </p>
    </section>
</footer>

<style lang="scss">
    footer {
        box-shadow: 0 0 0.25rem $primary-1;
        padding: 1rem;

        background-color: $accent-1;
    }

    section {
        gap: 0.5rem;
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
        @include tablet-and-above {
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
        @include tablet-and-above {
            flex-direction: row;
            justify-content: center;
            align-items: center;
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

        font-size: 0.9rem;
    }
</style>
