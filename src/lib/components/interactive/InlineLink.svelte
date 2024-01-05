<script lang="ts">
    export let href: string;
    export let dark = false;
</script>

<a {href} class:dark><slot /></a>

<style lang="scss">
    a {
        display: inline-block;
        transition: background-color 150ms, transform 150ms linear, border-color 150ms;

        border-radius: 0.5rem;
        padding: 0.15rem 0.5rem;

        background-color: $primary-1;

        font-weight: 400;
        color: $primary-6;

        &:hover {
            background-color: lighten($primary-1, 10%);
        }

        &:active {
            transform: translateY(0.25rem);
        }

        &.dark {
            background-color: $accent-2;

            color: $primary-6;

            &:hover {
                background-color: $accent-3;
            }
        }
    }
</style>
