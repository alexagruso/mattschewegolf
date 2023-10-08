<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let show = false;

    const dispatch = createEventDispatcher();

    export const toggle = () => {
        show = !show;
    };

    const close = () => {
        dispatch("close");
        show = false;
    };
</script>

<aside class:show class="col">
    <div class="col logo">
        <h1>Matt Schewe</h1>
        <h2>School of Golf</h2>
    </div>
    <hr />
    <div class="col links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/lessons">Lessons</a>
        <a href="/blog">Blog</a>
    </div>
    <hr />
    <div class="col info">
        <span class="break">(713) 291-8861</span>
        <div class="email">
            <span class="break">matt@</span>
            <span class="break">mattschewegolf</span>
            <span class="break">.com</span>
        </div>
    </div>
    <hr />
    <div class="image">
        <a href="https://www.pga.com" target="_blank">
            <img src="images/navbar/pga.webp" alt="PGA Logo" />
        </a>
    </div>
</aside>
<button class:show class="cover" on:click={close} />

<style lang="scss">
    aside {
        z-index: 4;
        position: fixed;
        top: 0;
        left: -200vw;

        align-items: start;
        gap: 1.5rem;

        transition: left $side-menu-animation-duration ease-in-out;

        padding: 1rem;
        width: max(10rem, 65vw);

        background-color: mix($accent-1, $accent-2, 50%);

        @include navbar-shadow;

        &.show {
            left: 0;
        }
    }

    .links {
        gap: 1rem;
    }

    a {
        @include menu-link;
        color: $primary-6;
    }

    .info {
        gap: 0.5rem;

        span {
            color: $primary-6;

            @include menu-subtitle;
        }
    }

    .image {
        border-radius: 0.75rem;
        padding: 0.25rem;

        background-color: white;
    }

    img {
        object-fit: scale-down;

        max-height: 4.5rem;
    }

    h1 {
        color: $primary-6;

        @include menu-title;
    }

    h2 {
        color: $primary-6;

        @include menu-subtitle;
    }

    hr {
        width: 100%;
        height: 1px;

        background-color: $primary-6;
    }

    .cover {
        position: fixed;
        top: 0;
        left: 0;

        opacity: 0%;
        visibility: hidden;

        transition: opacity $side-menu-animation-duration ease-in-out;

        width: 100vw;
        height: 100vh;

        background-color: rgba($primary-1, 50%);

        &.show {
            opacity: 100%;
            visibility: visible;
        }
    }
</style>
