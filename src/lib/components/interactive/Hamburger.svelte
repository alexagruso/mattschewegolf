<script lang="ts">
    export let active = false;
</script>

<button
    class="col"
    on:click={() => {
        active = !active;
    }}>
    <div class="bar" class:active id="a" />
    <div class="bar" class:active id="b" />
    <div class="bar" class:active id="c" />
</button>

<style lang="scss">
    button {
        gap: 0.5rem;
    }

    .bar {
        border-radius: 1rem;
        width: 2.25rem;
        height: 0.25rem;

        transition: 200ms;

        background-color: $primary-6;
    }

    .active {
        &#a {
            transform: translateY(0.75rem) rotateZ(45deg);
        }

        &#b {
            opacity: 0;
        }

        &#c {
            transform: translateY(-0.75rem) rotateZ(-45deg);
        }
    }
</style>
