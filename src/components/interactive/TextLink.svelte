<script lang="ts">
    export let href: string;
</script>

<div>
    <a {href}><span><slot /></span></a>
</div>

<style lang="scss">
    a {
        transition: all 100ms;

        border-radius: 1rem;
        padding: 0.5rem 1rem;

        font-size: $navbar-link;
        font-weight: 400;
        text-transform: lowercase;

        span {
            color: $primary-6;
        }

        &:hover {
            background-color: $accent-3;
        }
    }
</style>
