<script lang="ts">
</script>

<section class="card col">
    <header class="col">
        <h2>Lesson Rates</h2>
        <p>Matt offers several lesson packages, as well as discounts for youth lessons.</p>
        <p><span class="emphasize">Note: Lessons are non-refundable.</span></p>
    </header>
    <div class="rates col">
        <header class="row">
            <div class="package-cell row">
                <h3>Lesson Package</h3>
            </div>
            <div class="price-cell row">
                <h3>Youth Price</h3>
            </div>
            <div class="price-cell row">
                <h3>Adult Price</h3>
            </div>
        </header>
        {#each [1, 2, 3, 4, 5, 6, 7] as _}
            <section class="rate row">
                <div class="package-cell row">
                    <h3>1 Half Hour Lesson</h3>
                </div>
                <div class="price-cell row">
                    <h4>$60</h4>
                </div>
                <div class="price-cell row">
                    <h4>$70</h4>
                </div>
            </section>
        {/each}
    </div>
</section>

<style lang="scss">
    .card {
        box-shadow: 0 0 0.25rem $primary-1;
        max-width: 48rem;
        width: 100%;

        @include tablet-and-below {
            border-left: none;
            border-right: none;
        }
    }

    .card > header {
        gap: 0.5rem;

        padding: clamp(1.2rem, 5vw, 2rem);

        background-color: $accent-1;

        h2 {
            font-family: "Raleway";
            font-size: 3rem;
            font-weight: 700;
            text-transform: capitalize;
            color: $primary-6;
        }

        p {
            font-size: 1.1rem;
            font-weight: 400;
            color: $primary-6;
        }

        span.emphasize {
            font-weight: 700;
            text-decoration: underline;
            color: $primary-6;
        }
    }

    .rates {
        padding: 2rem;
        width: 100%;

        @include tablet-and-below {
            padding: 2rem 0;
        }
    }

    .rates > header {
        div {
            flex-basis: 0;

            background-color: $primary-2;
        }

        div:not(:first-of-type) {
            justify-content: center;

            @include tablet-and-below {
                justify-content: start;
            }
        }

        div:first-of-type {
            border-radius: 1rem 0 0 0;

            h3 {
                margin-left: 1rem;
            }

            @include tablet-and-below {
                border-radius: 0;
            }
        }

        div:last-of-type {
            border-radius: 0 1rem 0 0;

            @include tablet-and-below {
                border-radius: 0;
            }
        }

        h3 {
            margin: 0.5rem 0;

            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            color: $primary-6;

            @include tablet-and-below {
                margin-right: 0.5rem;
            }
        }
    }

    .rates > section.rate {
        div {
            flex-basis: 0;
            align-items: center;
        }

        div:not(:first-of-type) {
            justify-content: center;

            @include tablet-and-below {
                justify-content: start;
            }
        }

        h3 {
            margin: 0.5rem 1rem;
            margin-right: 2rem;
        }
    }

    .package-cell {
        flex-grow: 2;
        align-items: center;
    }

    .price-cell {
        flex-grow: 1;
        align-items: center;
    }

    :is(.rates > section):nth-of-type(2n + 1) {
        background-color: lighten($primary-5, 50%);
    }

    :is(.rates > section):last-of-type {
        border-radius: 0 0 1rem 1rem;
    }
</style>
