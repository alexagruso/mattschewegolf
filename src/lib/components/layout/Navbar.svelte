<script lang="ts">
</script>

<nav class="col">
    <div class="row content">
        <div class="row logo">
            <img src="images/navbar/pga.webp" alt="PGA Logo" />
            <div class="col text">
                <h1>Matt Schewe</h1>
                <p class="row">
                    School of Golf<span class="sep" />(713) 291-8861<span class="sep" />matt@mattschewegolf.com
                </p>
            </div>
        </div>
        <div class="row links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/lessons">Lessons</a>
            <a href="/blog">Blog</a>
        </div>
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

    a {
        transition: background-color 150ms;

        border-radius: 0.75rem;
        padding: 0.5rem 2rem;

        text-transform: lowercase;
        color: $primary-6;

        @include navbar-link;

        &:hover {
            background-color: rgba($accent-4, 50%);
        }
    }

    .content {
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        align-items: center;
        gap: 1rem;

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

    .links {
        gap: 1rem;
    }

    span.sep {
        display: block;

        margin: 0rem 0.5rem;
        border-radius: 50%;
        width: 0.375rem;
        height: 0.375rem;

        background-color: $primary-6;
    }
</style>
