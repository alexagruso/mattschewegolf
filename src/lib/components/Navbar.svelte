<script lang="ts">
    import Hamburger from "@components/interactive/Hamburger.svelte";
    import NavbarLink from "@components/interactive/NavbarLink.svelte";

    let active: boolean;
</script>

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
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/lessons">Lessons</NavbarLink>
            <NavbarLink href="/contact">Contact</NavbarLink>
            <NavbarLink href="/blog">Blog</NavbarLink>
        </div>
        <div class="hamburger">
            <Hamburger bind:active />
        </div>
        <button
            class="dim"
            class:active
            on:click={() => {
                active = !active;
            }} />
    </nav>
</header>

<style lang="scss">
    header {
        z-index: 1;
        position: sticky;
        top: 0;

        justify-content: center;

        box-shadow: 0 0rem 0.25rem $primary-1;

        background-color: $accent-1;
    }

    nav {
        position: relative;

        justify-content: space-between;
        align-items: center;
        max-width: 64rem;
        width: 100%;

        padding: 0.25rem 1rem 0.25rem 0.25rem;

        @include tablet-and-above {
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
        z-index: 2;
        position: absolute;
        top: 100%;
        left: -100%;

        align-items: center;
        gap: 1.5rem;

        transition: left 250ms;

        box-shadow: 0 0.1rem 0.1rem $primary-1;
        border-top: 2px solid $primary-2;
        padding: 1rem;
        width: 100%;

        background-color: $accent-1;

        &.active {
            left: 0;

            display: flex;
        }

        @include tablet-and-above {
            position: relative;
            top: unset;
            left: unset;

            display: flex;
            flex-direction: row;
            gap: clamp(2rem, 5vw, 3rem);

            box-shadow: none;
            border: none;
            width: unset;

            background-color: unset;
        }
    }

    .hamburger {
        @include tablet-and-above {
            display: none;
        }
    }

    .dim {
        z-index: 1;
        position: absolute;
        top: 100%;
        left: 0;

        opacity: 0;
        visibility: hidden;

        transition: opacity 150ms, visibility 150ms;

        width: 100%;
        height: calc(100vh - 100%);
        background-color: rgba($primary-1, 50%);

        &.active {
            opacity: 1;
            visibility: visible;
        }

        @include tablet-and-above {
            display: none;
        }
    }
</style>
