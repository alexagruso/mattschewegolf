<script lang="ts">
</script>

<section class="col">
    <h1>Dashboard</h1>
    <form class="col" action="?/logout" method="post">
        <button type="submit">Logout</button>
    </form>
</section>

<style lang="scss">
    h1 {
        color: $primary-1;
        font-size: $header-2;
    }

    section.col {
        align-self: center;
        gap: 2rem;
    }

    button {
        transition: all 100ms;

        border: 0.1875rem solid $accent-2;
        border-radius: 1.125rem;
        padding: 0.75rem 2rem;

        background-color: $primary-6;

        font-size: $header-5;
        color: $accent-2;

        &:hover {
            background-color: $accent-2;
            cursor: pointer;

            color: $primary-6;
        }
    }
</style>
