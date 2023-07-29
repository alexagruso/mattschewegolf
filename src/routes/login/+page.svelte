<script lang="ts">
    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";

    export let form: ActionData;
</script>

<h1>Login page</h1>
<section>
    <form action="?/login" method="post" use:enhance>
        <div class="group">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="username" required />
        </div>

        <div class="group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="password" required />
        </div>

        <div class="submit-container">
            <button type="submit">Login</button>
        </div>
    </form>
    {#if form?.error}
        <h3>{form.error}</h3>
    {/if}
</section>
