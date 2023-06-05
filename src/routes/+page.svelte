<script lang="ts">
    import Navbar from "@lib/components/Navbar.svelte";
</script>

<Navbar />
<div class="col card">
    <div class="row center">
        <h1>Matt Schewe</h1>
        <span>School of Golf</span>
    </div>
</div>

<section class="content" id="about">
    <h2>About Me</h2>
</section>
<section class="content" id="prices">
    <h2>Prices</h2>
</section>
<section class="content" id="contact">
    <h2>Contact</h2>
</section>

<style lang="scss">
    .card {
        justify-content: center;
        align-items: center;
        min-height: 85vh;

        h1 {
            font-size: 7.5rem;
        }

        span {
            font-size: 3rem;
            font-weight: 500;
        }
    }

    .center {
        min-height: 40vh;
        min-width: 60vw;

        justify-content: center;
        align-items: center;
    }

    .content {
        min-height: 100vh;

        h2 {
            padding-top: 5rem;

            font-size: 2.5rem;
        }
    }
</style>
