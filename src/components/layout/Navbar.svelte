<nav class="row">
    <div class="row logo" />
    <div class="row links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/lessons">Lessons</a>
        <a href="/blog">Blog</a>
    </div>
</nav>

<style lang="scss">
    nav {
        justify-content: space-between;
        align-items: center;

        padding: 1rem 12rem;

        background-color: $accent-2;
    }

    .links {
        gap: 1rem;
    }

    a {
        transition: all 100ms;

        border-radius: 1rem;
        padding: 0.5rem 1rem;

        font-size: $navbar-link;
        text-transform: lowercase;
        color: $primary-6;

        &:hover {
            background-color: $accent-3;
        }
    }
</style>
