<script>
    import HighlightLink from "@components/interactive/HighlightLink.svelte";
</script>

<nav class="row">
    <div class="row logo">
        <img src="images/navbar/pga.png" alt="pga logo" />
        <div class="col text">
            <span class="title">Matt Schewe</span>
            <span class="subtitle">School of Golf</span>
        </div>
    </div>
    <div class="row links">
        <HighlightLink href="/">Home</HighlightLink>
        <HighlightLink href="/about">About</HighlightLink>
        <HighlightLink href="/lessons">Lessons</HighlightLink>
        <HighlightLink href="/blog">Blog</HighlightLink>
    </div>
</nav>

<style lang="scss">
    nav {
        justify-content: space-between;
        align-items: center;

        padding: 0.5rem 12rem;

        background-color: $accent-2;

        color: $primary-6;
    }

    .logo {
        align-items: center;
        gap: 1rem;
    }

    .links {
        gap: 1rem;
    }

    .text {
        gap: 1rem;

        // HACK: this is a janky way to vertically center the text, please find a better way to do this
        padding-top: 0.5rem;

        line-height: 100%;
    }

    .title {
        font-size: $header-3;
        text-transform: uppercase;
    }
</style>
