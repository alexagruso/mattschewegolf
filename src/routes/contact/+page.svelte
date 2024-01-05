<script lang="ts">
    import TextInput from "@components/interactive/TextInput.svelte";
</script>

<section class="card col">
    <header class="col">
        <h1>Contact</h1>
        <p>
            Matt can be contacted through email at <span class="inline-block emphasize">matt@mattschewegolf.com</span>
            or by phone at <span class="inline-block emphasize">&lpar;713&rpar; 291-8861</span>. You can also contact
            him by filling out the message form below.
        </p>
    </header>
    <form class="col">
        <TextInput name="name" label="name" placeholder="Name" />
        <div class="return-inputs col">
            <TextInput name="email" label="email" placeholder="name@example.com" />
            <TextInput name="phone" label="phone" placeholder="(123) 456-7890" />
        </div>
        <TextInput name="message" label="message" placeholder="Message" />
        <button type="submit">Send Message</button>
    </form>
</section>

<style lang="scss">
    .card {
        border: 1px solid $accent-1;

        max-width: 64rem;
        width: 100%;

        @include portrait-and-below {
            border-left: none;
            border-right: none;
        }
    }

    header {
        gap: 0.5rem;

        padding: clamp(1.2rem, 5vw, 2rem);

        background-color: $accent-1;

        h1 {
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

    form {
        gap: 1.5rem;

        padding: 2rem;
    }

    .return-inputs {
        justify-content: space-between;
        gap: 1.5rem;

        @include tablet {
            flex-direction: row;
            gap: 2rem;
        }
    }

    button {
        transition: background-color 100ms, transform 100ms;

        border-radius: 0.5rem;
        padding: 0.75rem 2rem;
        width: fit-content;

        background-color: $accent-1;

        font-weight: 700;
        text-transform: uppercase;
        color: $primary-6;

        &:hover {
            background-color: $accent-2;
        }

        &:active {
            transform: translateY(0.25rem);
        }
    }
</style>
