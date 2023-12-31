<script lang="ts">
    import { Style } from "@lib/configuration/styles";

    export let current = false;
    export let href: string;
    export let style: Style = Style.Light;
</script>

<div class="inline-block">
    <a {href} class:current class:light={style === Style.Light} class:dark={style === Style.Dark}>
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

        @include tablet {
            &::before {
                content: "";

                position: absolute;
                bottom: -2px;
                left: 50%;

                transition: left $link-underline $link-underline-curve, width $link-underline $link-underline-curve;

                width: 0;
                height: 2px;
            }

            &:hover::before {
                left: 0;

                width: 100%;
            }
        }

        &.dark {
            color: $primary-6;

            &::before {
                background-color: $primary-6;
            }
        }

        &.light {
            color: $primary-1;

            &::before {
                background-color: $primary-1;
            }
        }
    }
</style>
