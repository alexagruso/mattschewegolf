<div class="col card">
    <header class="row">
        <img src="images/matt/about.webp" alt="matt schewe during a lesson" />
        <div class="col label">
            <h1 class="title">Biography</h1>
            <h2 class="subtitle">About Matt</h2>
        </div>
    </header>
    <div class="col biography">
        <p>
            Matt Schewe has received the prestigious 2020, 2021, and 2022 Southern Texas PGA teacher of the year
            nomination, landing in the top 5 each year. Matt has become one of the most sought-after PGA instructors in
            the Houston/Pearland area. Throughout his career, Matt has worked with famous golf instructors Peter Kostis
            and Dr. Gary Wiren. Not long after graduating from the Professional Golf Management Program at Ferris State
            University, Matt was hired as the Head Golf Professional and Director of Instruction at Texas A & M
            University. Matt&apos;s success followed him to Pearland Golf Club where he continued The Matt Schewe School
            of Golf. The Houston Press named him 2009 Teacher of the Year. He has students as young as 4 years old. He
            has many high school players that have received golf scholarships to major colleges.
        </p>
        <p>
            Matt believes in an “effortless golf swing” that is smooth and easy. He can teach anyone from small
            children, to beginners, to advanced golfers to play and improve at the great game of golf. His teaching
            philosophy is to approach the game of golf and life with a positive attitude. He is always smiling and happy
            and if asked will tell you it is because he loves what he gets to do everyday! Over the years, Matt has
            taught many notable students such as basketball stars, Penny Hardaway, Sam Cassell and Vernon Maxwell and
            NFL star Lemuel Stinson. He has had the privilege of teaching actors Kurt Russell and Sally Field, as well
            as the famous rapper Scarface. He has also taught countless other celebrities and professional athletes.
        </p>
    </div>
</div>

<style lang="scss">
    .card {
        max-width: 50rem;

        @include card-box-shadow;

        @include phone {
            padding: 0rem;
        }
    }

    header {
        background-color: $accent-2;

        color: $primary-6;
    }

    img {
        width: 15rem;
        height: 15rem;

        @include tablet-and-below {
            display: none;
        }
    }

    .label {
        justify-content: center;

        padding: 2rem;

        h1 {
            @include header-title;
        }

        h2 {
            @include header-subtitle;
        }
    }

    .biography {
        gap: 2rem;

        padding: 3rem;

        color: $primary-2;

        p {
            @include paragraph;
        }

        @include tablet-and-below {
            padding: 2rem;
        }
    }
</style>
