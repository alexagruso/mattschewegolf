<script lang="ts">
    export let dark = false;
    export let href: string;
</script>

<div class="inline-block">
    <a {href} class:dark>
        <slot />
    </a>
</div>

<style lang="scss">
    div {
        width: fit-content;
    }

    a {
        position: relative;

        display: block;
        transition: color 150ms;

        font-weight: 400;
        text-transform: lowercase;
        color: $primary-6;

        @include tablet {
            &::before {
                content: "";

                position: absolute;
                bottom: -2px;
                left: 50%;

                transition: left $link-underline, width $link-underline;

                width: 0;
                height: 2px;

                background-color: $primary-6;
            }

            &:hover::before {
                left: 0;

                width: 100%;
            }
        }
    }
</style>
