<script>
    import DarkButtonLink from "@components/interactive/DarkButtonLink.svelte";
</script>

<footer>
    <div class="col">
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
                        <img src="images/footer/twitter.png" alt="twitter" />
                    </a>
                    <a href="https://www.facebook.com/matt.schewe.1" target="_blank">
                        <img src="images/footer/facebook.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/golfpromattschewepga/" target="_blank">
                        <img src="images/footer/instagram.png" alt="instagram" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCLMlW7yX0chNKrdTu3hC5NA" target="_blank">
                        <img src="images/footer/youtube.png" alt="youtube" />
                    </a>
                </div>
                <DarkButtonLink href="/lessons">Schedule A Lesson</DarkButtonLink>
            </div>
        </div>
        <div class="row center copyright">
            <span>Copyright © 2023 Matt Schewe. All Rights Reserved.</span>
            <!-- <DarkButtonLink href="/login">Admin Login</DarkButtonLink> -->
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        justify-content: space-between;
        align-items: center;

        padding: 0rem 12rem;

        background-color: $accent-2;

        color: $primary-6;
    }

    .content {
        justify-content: space-between;

        padding: 1rem 0rem;
    }

    .title {
        justify-content: center;
        align-items: start;
        gap: 0.25rem;
    }

    .contact {
        justify-content: center;
        align-items: end;
        gap: 0.5rem;
    }

    .phone-email {
        align-items: end;
    }

    .social {
        gap: 0.5rem;
    }

    .copyright {
        gap: 3rem;

        border-top: 1px solid $primary-6;
        padding: 1rem;

        font-size: $header-5;
        color: $primary-6;
    }
</style>
