<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let show = false;

    const dispatch = createEventDispatcher();

    const toggle = () => {
        dispatch("toggle");
        show = !show;
    };

    export const close = () => {
        show = false;
    };
</script>

<button class:show class="col" on:click={toggle}>
    <div class="bar" id="a" />
    <div class="bar" id="b" />
    <div class="bar" id="c" />
</button>

<style lang="scss">
    button {
        z-index: 1;
        position: relative;

        gap: 0.5rem;

        margin-right: 1.5rem;

        background-color: unset;
    }

    .bar {
        transition: all 150ms ease-in-out;

        border-radius: 0.5rem;
        height: 0.25rem;
        width: 2.25rem;

        background-color: $primary-6;
    }

    .show #a {
        transform: translateY(0.75rem) rotateZ(45deg);
    }

    .show #b {
        opacity: 0%;
    }

    .show #c {
        transform: translateY(-0.75rem) rotateZ(-45deg);
    }
</style>
