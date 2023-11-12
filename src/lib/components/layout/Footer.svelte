<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";

    import { page } from "$app/stores";
</script>

<footer class="col">
    <div class="row content">
        <div class="col title">
            <span>Matt Schewe - Director of Instruction</span>
            <span>Pearland Golf Club</span>
            <span>3123 Flower Field Lane</span>
            <span>Pearland, Texas</span>
        </div>
        <div class="col contact">
            <span>(713) 291-8861</span>
            <span>matt@mattschewegolf.com</span>
            <div class="row social">
                <a href="https://twitter.com/mattschewegolf?lang=en" target="_blank">
                    <img src="images/footer/twitter.webp" alt="twitter" />
                </a>
                <a href="https://www.facebook.com/matt.schewe.1" target="_blank">
                    <img src="images/footer/facebook.webp" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/golfpromattschewepga/" target="_blank">
                    <img src="images/footer/instagram.webp" alt="instagram" />
                </a>
                <a href="https://www.youtube.com/channel/UCLMlW7yX0chNKrdTu3hC5NA" target="_blank">
                    <img src="images/footer/youtube.webp" alt="youtube" />
                </a>
            </div>
            <ButtonLink dark href="/lessons">Schedule A Lesson</ButtonLink>
        </div>
    </div>
    <hr />
    <div class="col bottom">
        <div class="row admin">
            <div class="row credit">
                <span>Website Created by</span>
                <ButtonLink dark href="https://alexagruso.dev">Alex Agruso</ButtonLink>
            </div>
            {#if $page.data.currentSession}
                <ButtonLink dark href="/dashboard">Dashboard</ButtonLink>
            {:else}
                <ButtonLink dark href="/login">Admin Login</ButtonLink>
            {/if}
        </div>
        <span>Copyright &copy; 2023 Matt Schewe. All Rights Reserved.</span>
    </div>
</footer>

<style lang="scss">
    footer {
        align-items: center;

        margin: 0 auto;
        width: 100%;

        background-color: $accent-2;

        color: $primary-6;
    }

    hr {
        height: 1px;
        width: 100%;
        background-color: white;
    }

    .content {
        justify-content: space-between;
        align-items: center;

        padding: 1rem 0;
        width: clamp(0rem, 95vw, 64rem);
    }

    .title {
        gap: 0.25rem;
    }

    .contact {
        align-items: end;

        gap: 0.5rem;
    }

    .social {
        gap: 0.5rem;
    }

    .bottom {
        align-items: center;
        gap: 0.75rem;

        padding: 1rem 0;
    }

    .admin {
        align-items: center;
        gap: 2.5rem;
    }

    .credit {
        align-items: center;
        gap: 0.75rem;
    }
</style>
