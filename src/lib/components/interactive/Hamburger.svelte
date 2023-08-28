<script lang="ts">
    export let active = false;
</script>

<button
    class="col icon"
    on:click={() => {
        active = !active;
    }}>
    <div class:active id="one" />
    <div class:active id="two" />
    <div class:active id="three" />
</button>

<style lang="scss">
    .icon {
        gap: 0.3rem;

        background-color: $accent-2;
    }

    .icon {
        div {
            border-radius: 1rem;
            width: 1.75rem;
            height: 0.25rem;

            transition: all 250ms;

            background-color: $primary-6;
        }

        div#one.active {
            transform: translateY(0.55rem) rotateZ(-45deg);
        }

        div#two.active {
            opacity: 0;
        }

        div#three.active {
            transform: translateY(-0.55rem) rotateZ(45deg);
        }
    }
</style>
