<script lang="ts">
    export let href: string;

    export let dark = false;
</script>

<div class="col link">
    <a {href} class:dark><slot /></a>
</div>

<style lang="scss">
    .link {
        align-items: center;
    }

    a {
        transition: background-color ease-in-out 150ms, color ease-in-out 150ms;

        border: 3px solid $accent-2;
        border-radius: 10rem;
        padding: 0.5rem 2rem;

        background-color: $primary-6;

        color: $accent-2;

        &.dark {
            border-color: $primary-6;

            background-color: $accent-2;

            color: $primary-6;

            &:hover {
                background-color: $primary-6;

                color: $accent-2;
            }
        }

        &:hover {
            background-color: $accent-2;

            color: $primary-6;
        }
    }
</style>
