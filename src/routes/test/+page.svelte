<script lang="ts">
</script>

<h1>Test Page</h1>

<section class="grid">
    <div class="element" />
    <div class="yellow element" />
    <div class="element" />
    <div class="element" />
    <div class="element span-2" />
    <div class="red element span-2" />
    <div class="blue special element" />
    <div class="blue element span-2" />
    <div class="red element" />
    <div class="element span-2" />
</section>

<style lang="scss">
    div {
        margin: 1px;
        min-width: 2rem;
        min-height: 2rem;

        background-color: green;
    }

    section {
        grid-template-columns: repeat(5, 1fr);
    }

    .span-2 {
        grid-column: span 2;
    }

    .red {
        background-color: red;
    }

    .blue {
        background-color: blue;
    }

    .yellow {
        background-color: yellow;
    }

    .special {
        grid-column: 5;
        grid-row: span 2;
    }
</style>
