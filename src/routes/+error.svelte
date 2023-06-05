<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="col error">
    <h1>Error: {$page.status}</h1>
</div>

<style lang="scss">
    .error {
        justify-content: center;
    }
</style>
