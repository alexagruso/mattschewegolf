<nav class="row">
    <div class="row links">
        <a href="#about">About Matt</a>
        <a href="#prices">Prices</a>
        <a href="#contact">Contact</a>
    </div>
    <div class="login">
        <a href="/login">Admin</a>
    </div>
</nav>

<style lang="scss">
    nav {
        position: sticky;
        top: 0rem;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid black;
        padding: 1.25rem 1rem;
        width: 99vw;
        font-size: clamp(0.75rem, 2.5vw, 1.25rem);

        background-color: white;
    }

    .links {
        gap: 1rem;
    }

    a {
        transition: all 150ms;

        padding: 0.5rem 1rem;

        border-radius: 2rem;

        color: darkslategray;
        font-weight: 500;
        letter-spacing: 0.125rem;

        &:hover {
            color: white;
            background-color: darkslategray;
        }
    }

    @media (max-width: 520px) {
        nav {
            justify-content: center;
        }

        .login {
            display: none;
        }
    }
</style>
