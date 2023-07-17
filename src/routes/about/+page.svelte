<div class="row card biography">
    <div class="image">
        <img src="images/matt/about.png" alt="matt schewe during a lesson" />
    </div>
    <div class="col content">
        <div class="header">
            <h1 class="title">Biography</h1>
            <h2 class="subtitle">About matt</h2>
        </div>
        <div class="text">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    .card {
        margin: 0rem 16rem;
        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);

        color: $primary-1;
    }

    .image {
        display: flow-root;
        position: relative;
        min-width: 23.5%;

        background-color: $accent-2;

        img {
            position: absolute;
            top: 2rem;
            left: 2rem;
        }
    }

    .content {
        gap: 2rem;

        padding: 2rem 4rem;
    }

    .title {
        font-size: $header-1;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: $header-3;
        text-transform: lowercase;
        color: $primary-1;
    }

    .text {
        color: $primary-3;
    }
</style>
