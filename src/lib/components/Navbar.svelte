<script lang="ts">
    import Hamburger from "@components/Hamburger.svelte";

    let active: boolean;
</script>

<button
    class="dim"
    class:active
    on:click={() => {
        active = !active;
    }} />
<header class="row">
    <nav class="row">
        <div class="logo row">
            <a href="https://pga.com">
                <img src="images/navbar/pga.webp" alt="PGA Logo" class="pga" />
            </a>
            <div class="title col">
                <h1>Matt Schewe</h1>
                <h2>School of Golf</h2>
            </div>
        </div>
        <div class="links col" class:active>
            <a data-sveltekit-reload href="/">Home</a>
            <a data-sveltekit-reload href="/about">About</a>
            <a data-sveltekit-reload href="/lessons">Lessons</a>
            <a data-sveltekit-reload href="/contact">Contact</a>
            <a data-sveltekit-reload href="/blog">Blog</a>
        </div>
        <div class="hamburger">
            <Hamburger bind:active />
        </div>
    </nav>
</header>

<style lang="scss">
    header {
        position: sticky;
        top: 0;

        justify-content: center;

        background-color: $accent-2;
    }

    nav {
        position: relative;

        justify-content: space-between;
        align-items: center;

        max-width: 64rem;
        width: 100%;

        padding: 0.25rem 1rem 0.25rem 0.25rem;

        @include tablet {
            padding-right: 1.5rem;
        }
    }

    .logo {
        align-items: center;
        gap: 0.3rem;
    }

    .pga {
        border-radius: 0.5rem;
        padding: 0.1rem;
        max-width: 3rem;

        background-color: $primary-6;
    }

    .title {
        gap: 0.5rem;

        h1 {
            font-size: clamp(1.25rem, 7vw, 2rem);
            text-transform: uppercase;
        }

        h2 {
            font-size: 1rem;
            font-style: italic;
            text-transform: lowercase;
        }

        h1,
        h2 {
            font-family: Raleway;
            font-weight: 600;
            line-height: 1cap;
            color: $primary-6;
        }
    }

    .links {
        position: absolute;
        top: 100%;
        left: -100%;

        align-items: center;

        transition: left 250ms;

        box-shadow: 0 0.5rem 1rem -0.5rem $primary-1;
        border-top: 1px solid $primary-2;
        width: 100%;

        background-color: $accent-2;

        a {
            position: relative;

            transition: color 150ms;

            padding: 1rem;

            font-weight: 400;
            text-transform: lowercase;
            color: $primary-6;

            &::before {
                content: "";

                position: absolute;
                bottom: -2px;
                left: 50%;

                transition: all 250ms;

                width: 0;
                height: 2px;

                background-color: $primary-6;
            }

            &:hover::before {
                left: 0;

                width: 100%;
            }

            @include tablet {
                padding: 0;
            }
        }

        &.active {
            left: 0;

            display: flex;
        }

        @include tablet {
            position: relative;
            top: unset;
            left: unset;

            display: flex;
            flex-direction: row;
            gap: clamp(2rem, 5vw, 3rem);

            box-shadow: none;
            border-top: none;
            width: unset;

            background-color: unset;
        }
    }

    .dim {
        position: fixed;
        top: 0;
        left: 0;

        opacity: 0;
        visibility: hidden;

        transition: opacity 250ms, visibility 250ms;

        width: 100vw;
        height: 100vh;

        background-color: black;

        &.active {
            opacity: 0.5;
            visibility: visible;
        }
    }

    .dim,
    .hamburger {
        @include tablet {
            display: none;
        }
    }
</style>
