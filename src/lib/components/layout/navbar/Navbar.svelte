<script lang="ts">
    import Hamburger from "@components/interactive/Hamburger.svelte";
    import SideMenu from "@components/layout/navbar/SideMenu.svelte";

    let hamburger: Hamburger;
    let menu: SideMenu;
</script>

<nav class="row" data-sveltekit-reload>
    <div class="row content">
        <div class="row logo">
            <div class="image">
                <a href="https://www.pga.com" target="_blank">
                    <img src="images/navbar/pga.webp" alt="PGA Logo" />
                </a>
            </div>
            <div class="col text">
                <h1>Matt Schewe</h1>
                <div class="row subtitle">
                    <h2>School of Golf</h2>
                    <span class="sep" />
                    <h2>(713) 291-8861</h2>
                    <span class="sep" />
                    <h2>matt@mattschewegolf.com</h2>
                </div>
            </div>
        </div>
        <div class="row links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/lessons">Lessons</a>
            <a href="/blog">Blog</a>
        </div>
        <div class="side-menu">
            <Hamburger bind:this={hamburger} on:toggle={menu.toggle} />
            <SideMenu bind:this={menu} on:close={hamburger.close} />
        </div>
    </div>
</nav>

<style lang="scss">
    nav {
        position: sticky;
        top: 0rem;
        left: 0rem;

        justify-content: center;
        align-items: center;

        max-height: 7rem;

        background-color: $accent-2;

        @include navbar-shadow;
    }

    .content {
        justify-content: space-between;
        align-items: center;

        padding: 0.5rem;
        width: 90rem;
    }

    .logo {
        align-items: center;
        gap: 0.5rem;

        // background-color: blue;

        .image {
            border-radius: 0.75rem;
            padding: 0.25rem;

            background-color: white;
        }

        img {
            object-fit: scale-down;

            max-height: 4.5rem;
        }

        .subtitle {
            align-items: center;
            gap: 0.5rem;

            @include tablet-portrait-and-below {
                flex-direction: column;
                align-items: start;
                gap: 0.25rem;
            }

            @include phone {
                display: none;
            }
        }

        h1 {
            color: $primary-6;

            @include navbar-title;

            @include tablet-portrait-and-below {
                display: none;
            }
        }

        h2 {
            color: $primary-6;

            @include navbar-subtitle;
        }

        .sep {
            border-radius: 50%;
            width: 0.35rem;
            height: 0.35rem;

            background-color: $primary-6;

            @include tablet-portrait-and-below {
                display: none;
            }
        }
    }

    .links {
        gap: 0.25rem;

        @include tablet-and-below {
            display: none;
        }

        a {
            transition: background-color 200ms;

            border-radius: 1rem;
            padding: 0.5rem 1.25rem;

            color: $primary-6;

            @include navbar-link;

            &:hover {
                background-color: $accent-3;
            }
        }
    }

    .side-menu {
        display: none;

        @include tablet-and-below {
            display: block;
        }
    }
</style>
