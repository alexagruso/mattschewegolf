<script lang="ts">
    export let name: string;
</script>

<section class="col">
    <p><slot /></p>
    <h3>- {name}</h3>
</section>

<style lang="scss">
    section {
        margin: 0 2rem;

        flex-basis: 0;
        flex-grow: 1;
        justify-content: space-between;

        border: 1px solid black;
        padding: calc(sqrt(2) * 1rem);

        @include tablet {
            margin: 0;
        }
    }

    h3 {
        align-self: flex-end;
    }
</style>
