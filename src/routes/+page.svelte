<script lang="ts">
    import BlogSection from "@components/layout/BlogSection.svelte";
    import HeroCard from "@components/layout/HeroCard.svelte";
    import LessonCard from "@components/layout/LessonCard.svelte";
</script>

<HeroCard />
<LessonCard />
<BlogSection />
<h2>Testimonials</h2>
<div class="testimonials row">
    <div class="quote col">
        <p>
            I have worked with a number of golf instructors over the years, but Matt is hands down one of the best. I
            love his simple approach. I'm amazed how he can watch a few swings and know exactly what adjustments I need
            to do.
        </p>
        <h3>- Darrell D.</h3>
    </div>
    <div class="quote col">
        <p>
            Matt is a great instructor. He is patient and explains things in an easy to understand way. In a short
            amount of time, he coached me into a new and effortless swing. In my first 30 minute sesson, he was able to
            diagnose and help me correct what I was doing wrong.
        </p>
        <h3>- David Draper</h3>
    </div>
    <div class="quote col">
        <p>
            Matt has the ability to look at your swing and see all that needs improvement. Yet, he has the mastery of
            pinpointing the one or two small things to begin making the greatest improvements. Matt's teaching style and
            experience allows any level golfer to rapidly improve.
        </p>
        <h3>- Blake Gilson</h3>
    </div>
</div>

<style lang="scss">
    .testimonials {
        align-self: center;
        gap: 2rem;

        max-width: 64rem;
        width: 100%;

        @include tablet-and-below {
            flex-direction: column;
        }
    }

    .quote {
        justify-content: space-between;
        flex-grow: 1;
        flex-basis: 0;
        gap: 1.5rem;

        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);
        padding: 2rem;
    }

    p {
        color: $primary-1;
    }

    h2 {
        align-self: center;

        font-size: 2rem;
        color: $primary-1;
    }

    h3 {
        align-self: flex-end;

        color: $primary-1;
    }
</style>
