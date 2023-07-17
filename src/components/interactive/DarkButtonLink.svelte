<script lang="ts">
    export let href: string;
</script>

<div class="button">
    <a {href}><slot /></a>
</div>

<style lang="scss">
    a {
        display: block;

        transition: all 100ms;

        border: 0.1875rem solid $primary-6;
        border-radius: 1.125rem;
        padding: 0.5rem 2.5rem;

        background-color: $accent-2;

        color: $primary-6;

        &:hover {
            background-color: $primary-6;
            cursor: pointer;

            color: $accent-2;
        }
    }
</style>
