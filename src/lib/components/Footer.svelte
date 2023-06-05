<script lang="ts">
    const getCurrentYear = (): number => {
        return new Date().getFullYear();
    };
</script>

<footer class="row">
    <div class="col info">
        <h3>
            &copy; Copyright {getCurrentYear()} Matt Schewe. All Rights Reserved.
        </h3>
        <h3>
            Site by
            <a href="https://alexagruso.dev" target="_blank"> Alex Agruso </a>
        </h3>
    </div>
</footer>

<style lang="scss">
    footer {
        justify-content: center;
        align-items: center;

        border-top: 1px solid black;
        padding: 0.5rem;
        min-width: 99vw;
    }

    .empty {
        width: 1rem;
    }

    .info {
        justify-content: space-around;
        align-items: center;
        gap: 0.5rem;
    }

    h3 {
        font-weight: 400;
    }

    a {
        color: hsl(0, 80%, 50%);

        text-decoration: underline;
        text-underline-offset: 0.25rem;
    }
</style>
