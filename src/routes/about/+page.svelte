<div class="row card biography">
    <div class="row image">
        <img src="images/matt/about.png" alt="matt schewe during a lesson" />
    </div>
    <div class="col content">
        <h1 class="title">Biography</h1>
        <h2 class="subtitle">About matt</h2>
        <div class="col text">
            <p>
                Matt Schewe has received the prestigious 2020, 2021, and 2022 Southern Texas PGA teacher of the year
                nomination, landing in the top 5 each year. Recently, Matt has become one of the most sought-after PGA
                instructors in the Houston/Pearland area. Throughout his career, Matt has worked with famous golf
                instructors Peter Kostis and Dr. Gary Wiren. Not long after graduating from the Professional Golf
                Management Program at Ferris State University, Matt was hired as the Head Golf Professional and Director
                of Instruction at Texas A & M University. Matt&apos;s success followed him to Pearland Golf Club where
                he continued The Matt Schewe School of Golf. The Houston Press named him 2009 Teacher of the Year. He
                has students as young as 4 years old. He has many high school players that have received golf
                scholarships to major colleges.
            </p>
            <p>
                Matt believes in an “effortless golf swing” that is smooth and easy. He can teach anyone from small
                children, to beginners, to advanced golfers to play and improve at the great game of golf. His teaching
                philosophy is to approach the game of golf and life with a positive attitude. He is always smiling and
                happy and if asked will tell you it is because he loves what he gets to do everyday! Over the years,
                Matt has taught many notable students such as basketball stars, Penny Hardaway, Sam Cassell and Vernon
                Maxwell and NFL star Lemuel Stinson. He has had the privilege of teaching actors Kurt Russell and Sally
                Field and the famous rapper, Scarface. He has also taught countless other celebrities and professional
                athletes.
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    .card {
        margin: 0rem min(12rem, 5vw);
        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);

        color: $primary-1;

        @include tablet-portrait-and-below {
            flex-direction: column;

            margin: 0rem;
        }
    }

    .image {
        position: relative;
        min-width: 20%;

        background-color: $accent-2;

        img {
            position: absolute;
            top: 2rem;
            left: 2rem;

            width: 100%;

            @include tablet-portrait-and-below {
                position: relative;
                top: 1rem;
                left: 1rem;

                align-items: center;

                width: unset;
                height: 100%;

                object-fit: scale-down;
            }
        }

        @include tablet-portrait-and-below {
            min-width: 5%;
        }
    }

    .content {
        gap: 2rem;

        padding: 4rem clamp(2rem, 9vw, 4rem) 2rem;
    }

    .title {
        font-size: clamp($header-4, 10vw, $header-1);
        text-transform: uppercase;

        @include tablet-portrait-and-below {
            text-align: center;
        }
    }

    .subtitle {
        font-size: $header-3;
        text-transform: lowercase;
        color: $primary-1;

        @include tablet-portrait-and-below {
            text-align: center;
        }
    }

    .text {
        gap: 1.5rem;

        // padding: 1rem;

        color: $primary-3;

        p {
            text-align: justify;
        }
    }
</style>
