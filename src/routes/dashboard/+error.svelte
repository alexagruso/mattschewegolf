<script lang="ts">
    import { page } from "$app/stores";
</script>

<h1>Error: Status {$page.status}</h1>
<h2>{$page.error?.message}</h2>

<style lang="scss">
    h1,
    h2 {
        align-self: center;

        color: $primary-1;
    }
</style>
