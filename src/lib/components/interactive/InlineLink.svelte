<script lang="ts">
    import { Style } from "@lib/configuration/styles";

    export let href: string;
    export let style: Style = Style.Light;
</script>

<div class="inline-block">
    <a {href} class:light={style === Style.Light} class:dark={style === Style.Dark}><slot /></a>
</div>

<style lang="scss">
    div {
        width: fit-content;
    }

    a {
        position: relative;

        display: block;
        transition: background-color 150ms, transform 150ms linear, border-color 150ms;

        border-radius: 0.5rem;
        padding: 0.15rem 0.5rem;

        font-weight: 400;

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

        &.light {
            background-color: $primary-1;

            color: $primary-6;

            &:hover {
                background-color: lighten($primary-1, 10%);
            }
        }
    }
</style>
