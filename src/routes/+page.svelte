<script lang="ts">
    import Navbar from "@components/Navbar.svelte";
</script>

<section class="col title">
    <h1>Matt Schewe School Of Golf</h1>
    <div class="row subtitle">
        <span>Lessons</span>
        <div class="separator" />
        <span>Tips</span>
        <div class="separator" />
        <span>Videos</span>
    </div>
</section>
<Navbar />

<style lang="scss">
    .title {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100vh;

        background-color: $black; // TODO find background image

        h1 {
            font-size: clamp(3rem, 5vw, 5rem);
            font-family: "Sofia Sans", sans-serif;
            font-weight: 900;
            text-align: center;
            text-transform: uppercase;
            color: $white;
        }

        .subtitle {
            align-items: center;
            gap: 1rem;
        }

        span {
            font-size: clamp(1rem, 2vw, 3rem);
            font-family: "Sofia Sans", sans-serif;
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            color: $white;
        }

        .separator {
            border-radius: 50%;
            width: 0.5rem;
            height: 0.5rem;

            background-color: $white;
        }
    }
</style>
