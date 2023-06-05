<script lang="ts">
    import { goto } from "$app/navigation";

    let username: string;
    let password: string;

    const login = async () => {
        await goto("/");
    };
</script>

<div class="col card">
    <h1>Admin Login</h1>
    <form class="col form" on:submit|preventDefault={login}>
        <input
            class="input"
            bind:value={username}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
        />
        <input
            class="input"
            bind:value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
        />
        <button class="submit" type="submit">Log In</button>
    </form>
</div>

<style lang="scss">
    .card {
        justify-content: center;
        align-items: center;
        gap: 1rem;

        min-height: 50vh;
    }

    .form {
        align-items: center;
        gap: 1rem;
    }

    .input {
        padding: 1rem;
        outline: none;
        border: 1px solid black;
    }

    .submit {
        padding: 1rem;

        font-size: 1.25rem;
        font-weight: 500;
    }
</style>
