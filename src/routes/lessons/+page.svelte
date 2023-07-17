<div class="row card">
    <div class="col intro">
        <h1 class="title">Lesson<br />Rates</h1>
        <p class="subtitle">
            Matt offers several lesson packages, as well as discounts for youth lessons. To schedule a lesson, contact
            Matt directly or fill out the contact form below.
        </p>
    </div>
    <div class="col content">
        <table>
            <thead class="col">
                <tr class="row">
                    <th class="package">Lesson Package</th>
                    <th class="youth-price">Youth Price</th>
                    <th class="adult-price">Adult Price</th>
                </tr>
            </thead>
            <tbody class="col">
                <tr class="row">
                    <td class="package">1 Half Hour Lesson</td>
                    <td class="youth-price">$60</td>
                    <td class="adult-price">$70</td>
                </tr>
                <tr class="row">
                    <td class="package">1 Full Hour Lesson</td>
                    <td class="youth-price">$100</td>
                    <td class="adult-price">$120</td>
                </tr>
                <tr class="row">
                    <td class="package">3 Half Hour Lessons</td>
                    <td class="youth-price">$170</td>
                    <td class="adult-price">$200</td>
                </tr>
                <tr class="row">
                    <td class="package">3 Full Hour Lessons</td>
                    <td class="youth-price">--</td>
                    <td class="adult-price">$340</td>
                </tr>
                <tr class="row">
                    <td class="package">6 Half Hour Lessons</td>
                    <td class="youth-price">$325</td>
                    <td class="adult-price">$375</td>
                </tr>
                <tr class="row">
                    <td class="package">6 Full Hour Lessons</td>
                    <td class="youth-price">--</td>
                    <td class="adult-price">$650</td>
                </tr>
                <tr class="row">
                    <td class="package">12 Full Hour Lesson</td>
                    <td class="youth-price">--</td>
                    <td class="adult-price">$1,300</td>
                </tr>
            </tbody>
        </table>
        <h3 class="disclaimer">
            -- Indicates a lesson package that is unavailable. Lesson packages are non-refundable.
        </h3>
    </div>
</div>
<div class="row card contact">
    <div class="col content">
        <form class="col">
            <input type="text" id="name" placeholder="Full Name *" />
            <div class="row sender-contact">
                <input type="text" id="email" placeholder="Email *" />
                <input type="text" id="phone" placeholder="Phone *" />
            </div>
            <textarea id="message" placeholder="Message *" />
        </form>
        <button type="submit">Send Message</button>
    </div>
    <div class="col intro">
        <h2 class="title">Contact</h2>
        <p class="subtitle">
            Matt can be contacted through email at <span class="highlight">matt@mattschewegolf.com</span> or by phone at
            <span class="highlight">(713) 291-8861</span>. Alternatively, he can be contacted by filling out and
            submitting the contact form.
        </p>
    </div>
</div>

<style lang="scss">
    .card {
        margin: 0rem 10rem;
        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);
        max-height: 80vh;

        color: $primary-1;
    }

    .intro {
        gap: 2rem;

        padding: 2rem;
        width: 30%;

        background-color: $accent-2;

        color: $primary-6;
    }

    .title {
        font-size: $header-2;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: $paragraph;
        font-weight: 400;
        text-align: justify;
    }

    .content {
        gap: 0.5rem;

        padding: 4rem;

        width: 70%;
    }

    thead,
    tbody {
        box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(black, 0.25);
    }

    thead tr {
        color: $primary-6;

        background-color: $primary-2;
    }

    th {
        padding: 0.5rem;

        font-size: $header-5;
        text-align: center;
        text-transform: uppercase;
    }

    td {
        font-size: $header-4;

        padding: 1rem;

        text-align: left;
    }

    tbody tr:nth-child(2n-1) {
        background-color: mix($primary-5, white, 50%);
    }

    tr {
        .package {
            flex-grow: 1;
            width: 40%;
        }

        .youth-price {
            flex-grow: 1;
            width: 30%;
        }

        .adult-price {
            flex-grow: 1;
            width: 30%;
        }
    }

    .disclaimer {
        font-size: $header-5;
    }

    .highlight {
        font-weight: 700;
        text-decoration: underline;
    }

    .contact .intro {
        // HACK: eww... this gets the line breaks just right for the text
        width: 31%;
    }

    form {
        gap: 0.5rem;
    }

    .sender-contact {
        gap: 0.5rem;

        input {
            flex-grow: 1;
        }
    }

    input,
    textarea {
        transition: all 100ms;

        border: 0.1875rem solid $accent-2;
        border-radius: 1.125rem;
        padding: 0.75rem 2rem;

        background-color: $primary-6;
        outline: none;

        font-size: $header-5;
        color: $accent-2;

        &:focus {
            // border-color: $accent-6;

            background-color: mix($primary-6, $accent-6, 75%);
        }

        &::placeholder {
            font-size: $header-5;
            color: $accent-2;
        }
    }

    textarea {
        min-height: 40vh;
        resize: vertical;
    }

    button {
        align-self: flex-start;

        transition: all 100ms;

        border: 0.1875rem solid $accent-2;
        border-radius: 1.125rem;
        padding: 0.75rem 2rem;

        background-color: $primary-6;

        font-size: $header-5;
        color: $accent-2;

        &:hover {
            background-color: $accent-2;
            cursor: pointer;

            color: $primary-6;
        }
    }
</style>
