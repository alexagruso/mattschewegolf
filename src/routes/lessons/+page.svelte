<script lang="ts">
    import { sendEmail } from "@lib/email/email";

    enum InputStatus {
        Empty,
        Valid,
        Invalid,
    }

    let name: string;
    let content: string;
    let email: string;
    let phone: string;

    let nameStatus: InputStatus = InputStatus.Empty;
    let contentStatus: InputStatus = InputStatus.Empty;
    let emailStatus: InputStatus = InputStatus.Empty;
    let phoneStatus: InputStatus = InputStatus.Empty;

    let statusActive = false;
    let status = "status inactive";

    let allowSubmission = true;

    const validateForm = async () => {
        let badInput = false;
        statusActive = true;

        status = "Sending email...";

        if (!name) {
            nameStatus = InputStatus.Invalid;
            badInput = true;
        } else {
            nameStatus = InputStatus.Valid;
        }

        if (!content) {
            contentStatus = InputStatus.Invalid;
            badInput = true;
        } else {
            contentStatus = InputStatus.Valid;
        }

        if (!email) {
            emailStatus = InputStatus.Invalid;
            badInput = true;
        } else {
            emailStatus = InputStatus.Valid;
        }

        if (!phone) {
            phoneStatus = InputStatus.Invalid;
            badInput = true;
        } else {
            phoneStatus = InputStatus.Valid;
        }

        if (badInput) {
            status = "Some input is still required...";
            return;
        }

        await sendEmail({ name, content, email, phone })
            .then(() => {
                status = "Email sent successfully!";
                allowSubmission = false;
            })
            .catch((error) => {
                status = "An error occured, please try again later.";
                console.error(error);
            });
    };
</script>

<section class="col card">
    <div class="col intro">
        <h1 class="title">Lesson Rates</h1>
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
</section>
<section class="col card contact">
    <div class="col content">
        <!-- BUG: for some reason, this form element won't accept the "onsubmit" attribute, yet including it achieves the
            goal of preventing form submission from reloading html. Linter bug maybe? -->
        <form
            class="col"
            on:submit={allowSubmission
                ? async () => await validateForm()
                : () => {
                      status = "Email already sent, cannot send again.";
                  }}
            onsubmit="return false;">
            <input
                bind:value={name}
                class:invalid-input={nameStatus === InputStatus.Invalid}
                type="text"
                id="name"
                placeholder="Full Name *" />
            <div class="row sender-contact">
                <input
                    bind:value={email}
                    class:invalid-input={emailStatus === InputStatus.Invalid}
                    type="text"
                    id="email"
                    placeholder="Email *" />
                <input
                    bind:value={phone}
                    class:invalid-input={phoneStatus === InputStatus.Invalid}
                    type="text"
                    id="phone"
                    placeholder="Phone *" />
            </div>
            <textarea
                bind:value={content}
                class:invalid-input={contentStatus === InputStatus.Invalid}
                id="content"
                placeholder="Message *" />
            <button type="submit" class:submission-disabled={!allowSubmission}>Send Message</button>
        </form>
        <h3 class="form-status" class:inactive={!statusActive}>{status}</h3>
    </div>
    <div class="col intro">
        <h2 class="title">Contact</h2>
        <p class="subtitle">
            Matt can be contacted through email at <span class="highlight">matt@mattschewegolf.com</span> or by phone at
            <span class="highlight">(713) 291-8861</span>. Alternatively, he can be contacted by filling out and
            submitting the contact form.
        </p>
    </div>
</section>

<style lang="scss">
    .card {
        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);

        color: $primary-1;
        margin: 0rem;

        &.contact {
            flex-direction: column-reverse;
        }
    }

    .intro {
        gap: 2rem;

        padding: 2rem;
        width: 100%;

        background-color: $accent-2;

        color: $primary-6;

        @include tablet-and-below {
            width: 100%;
        }
    }

    .title {
        font-size: $header-2;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: $paragraph;
        font-weight: 400;

        @include desktop {
            max-width: 40%;
        }
    }

    .content {
        gap: 0.5rem;

        padding: 2rem;
        width: 100%;

        @include phone {
            padding: 2rem 0rem;
        }
    }

    .contact .content {
        @include phone {
            padding: 2rem;
        }
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

        @include phone {
            padding: 1rem;
        }
    }

    .highlight {
        font-weight: 700;
        text-decoration: underline;
    }

    form {
        gap: 0.5rem;
    }

    .sender-contact {
        flex-grow: 1;
        justify-content: center;
        gap: 0.5rem;

        input {
            flex-grow: 1;

            min-width: 0%;
        }

        @include tablet-portrait-and-below {
            flex-direction: column;
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

    .invalid-input {
        background-color: mix($primary-6, $accent-6, 75%);
    }

    .inactive {
        color: rgba($primary-6, 0);
    }
</style>
