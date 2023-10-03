<script lang="ts">
    let showDropdown = false;
</script>

<nav class="row">
    <div class="row content">
        <div class="row logo">
            <img src="images/navbar/pga.webp" alt="PGA Logo" />
            <div class="col">
                <h1>Matt Schewe</h1>
                <p class="row">
                    School of Golf<span class="sep" />(713) 291-8861<span class="sep" />matt@mattschewegolf.com
                </p>
            </div>
        </div>
        <div class:active={showDropdown} class="row links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/lessons">Lessons</a>
            <a href="/blog">Blog</a>
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
        }

        p,
        span {
            align-items: center;

            color: $primary-6;

            @include navbar-subtitle;
        }

        img {
            border-radius: 0.5rem;
            padding: 0.25rem;
            max-height: 5rem;

            // to accommodate pga image
            background-color: white;
        }
    }

    span.sep {
        display: block;

        margin: 0rem 0.5rem;
        border-radius: 50%;
        width: 0.375rem;
        height: 0.375rem;

        background-color: $primary-6;
    }

    .links {
        align-items: center;
        gap: 0.5rem;

        @include tablet-portrait-and-below {
            position: absolute;
            top: -100vh;
            right: 0;
            flex-direction: column;
            align-items: center;

            display: flex;

            opacity: 0;
            transition: opacity 100ms, top 200ms;

            width: 100%;

            background-color: rgba($accent-2, 50%);

            &.active {
                top: 0rem;

                opacity: 1;
            }
        }
    }

    a {
        transition: background-color 100ms, color 100ms;

        border-radius: 1rem;
        padding: 0.5rem 1.5rem;

        text-align: center;
        text-transform: lowercase;
        color: $primary-6;

        @include navbar-link;

        &:hover {
            background-color: rgba($accent-4, 50%);
        }
    }

    .active a {
        width: 100%;
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
