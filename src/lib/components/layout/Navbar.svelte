<script lang="ts">
    let showDropdown = false;
</script>

<nav class="row" data-sveltekit-reload>
    <div class="row content">
        <div class="row logo">
            <img src="images/navbar/pga.webp" alt="PGA Logo" />
            <div class="col text">
                <h1>Matt Schewe</h1>
                <div class="row subtitle">
                    <span class="tablet-below">Matt Schewe School of Golf</span>
                    <span class="tablet-below-omit">School of Golf</span>
                    <span class="sep" />(713) 291-8861
                    <span class="sep" />matt@mattschewegolf.com
                </div>
            </div>
        </div>
        <div class:active={showDropdown} class="row links">
            <img src="images/navbar/pga.webp" alt="PGA Logo" />
            <hr />
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/lessons">Lessons</a>
            <a href="/blog">Blog</a>
            <hr />
            <div class="col menu-info bold">
                <span class="break">Matt Schewe</span>
                <span class="break">School of Golf</span>
            </div>
            <hr />
            <div class="col menu-info">
                <span class="break">(713) 291-8861</span>
            </div>
            <hr />
            <div class="menu-info">
                <span class="break">matt@</span>
                <span class="break">mattschewegolf</span>
                <span class="break">.com</span>
            </div>
        </div>
        <button
            class="col hamburger"
            on:click={() => {
                showDropdown = !showDropdown;
            }}>
            <div class:active={showDropdown} class="slice" id="a" />
            <div class:active={showDropdown} class="slice" id="b" />
            <div class:active={showDropdown} class="slice" id="c" />
        </button>
    </div>
</nav>

<style lang="scss">
    nav {
        position: sticky;
        top: 0rem;

        justify-content: center;
        align-items: center;

        padding: 0.5rem;

        background-color: $accent-2;

        @include navbar-shadow;
    }

    .content {
        justify-content: space-between;
        align-items: center;

        width: 95rem;
    }

    .logo {
        align-items: center;
        gap: 0.5rem;

        h1 {
            text-transform: uppercase;
            color: $primary-6;

            @include navbar-title;

            @include tablet-and-below {
                display: none;
            }
        }

        .subtitle {
            align-items: center;

            color: $primary-6;

            @include navbar-subtitle;

            @include tablet {
                flex-direction: column;
                align-items: start;
            }

            @include phone {
                display: none;
            }
        }
    }

    img {
        border-radius: 0.5rem;
        padding: 0.25rem;
        max-height: clamp(4rem, 20vw, 5rem);
        width: 4rem;

        object-fit: scale-down;

        // to accommodate pga image
        background-color: white;

        .links & {
            display: none;

            margin: 0.5rem 0 0 1.5rem;

            @include tablet-portrait-and-below {
                display: block;
            }
        }
    }

    .sep {
        align-items: center;

        display: block;

        margin: 0rem 0.5rem;
        border-radius: 50%;
        width: 0.375rem;
        height: 0.375rem;

        background-color: $primary-6;

        color: $primary-6;

        @include tablet-and-below {
            width: 0;
        }
    }

    .tablet-below {
        @include desktop {
            display: none;
        }

        @include tablet-portrait {
            display: none;
        }
    }

    .tablet-below-omit {
        @include tablet-and-below {
            display: none;
        }
    }

    .links {
        gap: 0.5rem;

        padding: 0.5rem;

        @include tablet-portrait-and-below {
            position: absolute;
            top: 0;
            left: -100vw;
            flex-direction: column;
            display: flex;

            opacity: 0;
            transition: opacity 300ms step-end, left 300ms ease-in-out;

            // 68% works just right for 280px
            width: max(10rem, 68%);
            height: 100vh;

            background-color: mix($accent-1, $accent-2, 50%);

            @include navbar-shadow;

            &.active {
                left: 0rem;

                opacity: 1;

                transition: opacity 100ms, left 300ms;
            }
        }

        hr {
            margin: 0.75rem;
            height: 1px;

            background-color: $primary-6;
        }
    }

    .menu-info {
        display: none;

        padding: 0 1.25rem;

        color: $primary-6;

        @include navbar-link;

        @include tablet-portrait-and-below {
            display: flex;
        }

        .break {
            display: inline-block;

            @include navbar-link;
        }
    }

    a {
        transition: background-color 100ms, color 100ms;

        border-radius: 1rem;
        padding: 0.5rem 1.5rem;

        text-transform: lowercase;
        color: $primary-6;

        @include navbar-link;

        &:hover {
            background-color: rgba($accent-4, 50%);
        }
    }

    .hamburger {
        display: none;

        margin-right: 1rem;

        @include tablet-portrait-and-below {
            display: flex;
            gap: 0.5rem;

            background-color: $accent-2;
        }
    }

    .slice {
        transition: transform 200ms, opacity 100ms;

        border-radius: 1rem;
        width: 2.75rem;
        height: 0.375rem;

        background-color: $primary-6;
    }

    #a.active {
        transform: translateY(0.875rem) rotateZ(43deg);
    }

    #b.active {
        opacity: 0;
    }

    #c.active {
        transform: translateY(-0.875rem) rotateZ(-43deg);
    }
</style>
