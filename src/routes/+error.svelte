<script lang="ts">
    import { page } from "$app/stores";
</script>

<section class="col card">
    <h1>Error: {$page.status}</h1>
    <h2>{$page.error?.message}</h2>
</section>

<style lang="scss">
    .card {
        align-items: center;
        gap: 2rem;

        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);
        border-top: 1rem solid $accent-2;
        padding: 2rem;

        background-color: $primary-6;

        color: $primary-1;
    }

    h1 {
        font-size: $header-2;
    }

    h2 {
        font-size: $header-3;
    }
</style>
