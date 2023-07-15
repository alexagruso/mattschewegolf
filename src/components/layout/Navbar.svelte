<script>
    import TextLink from "@components/interactive/TextLink.svelte";
</script>

<nav class="row">
    <div class="row logo" />
    <div class="row links">
        <TextLink href="/">Home</TextLink>
        <TextLink href="/about">About</TextLink>
        <TextLink href="/lessons">Lessons</TextLink>
        <TextLink href="/blog">Blog</TextLink>
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
</style>
