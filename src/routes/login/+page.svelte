<script lang="ts">
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import type { ActionData } from "./$types";

    onMount(async () => {
        try {
            if ($page.data.currentSession) {
                await goto("/");
            }
        } catch (error) {
            console.error(error);
        }
    });

    export let form: ActionData;
</script>

<div class="card col">
    <h1>Login page</h1>
    <section>
        <form class="col" action="?/login" method="post" use:enhance>
            <div class="col group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" required />
            </div>

            <div class="col group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" required />
            </div>

            <div class="col group">
                <button type="submit">Login</button>
            </div>
        </form>
    </section>
    {#if form?.error}
        <h3>{form.error}</h3>
    {/if}
</div>

<style lang="scss">
    .card {
        align-self: center;
        align-items: center;
        gap: 2rem;
    }

    .group {
        align-items: center;
        gap: 1rem;
    }

    form {
        align-items: center;
        gap: 2rem;
    }

    h1,
    h3 {
        color: $primary-1;
    }

    label {
        color: $accent-2;
    }

    input,
    textarea {
        transition: all 100ms;

        border: 0.1875rem solid $accent-2;
        border-radius: 1.125rem;
        padding: 0.75rem 2rem;

        background-color: $primary-6;
        outline: none;

        font-size: $header-5;
        color: $accent-2;

        &:focus {
            background-color: mix($primary-6, $accent-6, 75%);
        }

        &::placeholder {
            font-size: $header-5;
            color: rgba($accent-2, 75%);
        }
    }

    button {
        align-self: flex-start;

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
