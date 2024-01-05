<script lang="ts">
    export let name: string;
    export let placeholder = "Input Placeholder";
    export let label = "Input Label";
    export let value = "";
</script>

<div class="col">
    <label for={name}>{label}</label>
    <input type="text" {name} {placeholder} id={name} bind:value />
</div>

<style lang="scss">
    div {
        gap: 0.25rem;

        flex-grow: 1;
    }

    label {
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    input {
        border-bottom: 2px solid $primary-4;
        padding: 0.25rem;

        transition: border-color 75ms;

        &::placeholder {
            transition: color 75ms;

            color: $primary-4;
        }

        &:focus {
            border-color: $primary-2;

            &::placeholder {
                color: $primary-2;
            }
        }
    }
</style>
