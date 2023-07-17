<script lang="ts">
    export let href: string;
</script>

<div>
    <a {href}><slot /></a>
</div>

<style lang="scss">
    a {
        display: block;

        transition: all 100ms;

        border-radius: 1rem;
        padding: 0.5rem 2rem;

        font-size: $navbar-link;
        font-weight: 400;
        text-transform: lowercase;

        span {
            color: inherit;
        }

        &:hover {
            background-color: $accent-3;
        }
    }
</style>
