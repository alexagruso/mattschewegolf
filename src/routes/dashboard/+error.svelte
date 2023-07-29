<script lang="ts">
    import { page } from "$app/stores";
</script>

<h1>Error: Status {$page.status}</h1>
<h2>{$page.error?.message}</h2>
