<script lang="ts">
    import axios from "axios";
    import { enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    import { page } from "$app/stores";
    import { sendEmail } from "@lib/email/email";
    import type { PageServerData } from "./$types";

    enum InputStatus {
        Empty,
        Valid,
        Invalid,
    }

    // HACK: gross, fix this eventually
    let name: string;
    let content: string;
    let email: string;
    let phone: string;

    let nameStatus: InputStatus = InputStatus.Empty;
    let contentStatus: InputStatus = InputStatus.Empty;
    let emailStatus: InputStatus = InputStatus.Empty;
    let phoneStatus: InputStatus = InputStatus.Empty;

    let rateName: string;
    let rateYouthPrice: number;
    let rateAdultPrice: number;

    let rateNameStatus: InputStatus = InputStatus.Empty;
    let rateYouthPriceStatus: InputStatus = InputStatus.Empty;
    let rateAdultPriceStatus: InputStatus = InputStatus.Empty;

    let rateStatusActive = false;
    let rateStatus = "status inactive";

    let statusActive = false;
    let status = "status inactive";

    let allowSubmission = true;

    let editID: string;

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

    const deleteRate = async (id: string) => {
        try {
            await axios.delete("http://localhost:8080/api/rates", { data: { id } });
            await invalidateAll();
        } catch (error) {
            console.log(error);
        }
    };

    const validateNewRate = async () => {
        let badInput = false;
        rateStatusActive = true;

        rateStatus = "Creating new rate...";

        if (!rateName) {
            rateNameStatus = InputStatus.Invalid;
            badInput = true;
        } else {
            rateNameStatus = InputStatus.Valid;
        }

        if (!rateAdultPrice) {
            rateAdultPriceStatus = InputStatus.Invalid;
            badInput = true;
        } else {
            rateAdultPriceStatus = InputStatus.Valid;
        }

        if (badInput) {
            rateStatus = "Some input is still required...";
            return;
        }

        try {
            await axios.post("http://localhost:8080/api/rates", {
                name: rateName,
                youthPrice: rateYouthPrice,
                adultPrice: rateAdultPrice,
            });

            await invalidateAll();

            rateStatus = "Successfully created new rate.";
        } catch (error) {
            rateStatus = "An error occured, please try again later.";
        }
    };

    export let data: PageServerData;
</script>

<!-- TODO: convert these forms to sveltekit form actions. -->

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
                {#if data.rates}
                    {#each data.rates as rate}
                        <div class="entry col">
                            <tr class="row">
                                <td class="package">{rate.name}</td>
                                <td class="youth-price">{rate.youthPrice ? `$${rate.youthPrice}` : "--"}</td>
                                <td class="adult-price">${rate.adultPrice}</td>
                            </tr>
                            {#if $page.data.currentSession}
                                <div class="col">
                                    <div class="actions row">
                                        <button on:click={async () => await deleteRate(rate._id)}>Delete</button>
                                        <button on:click={() => (editID = rate._id)}>Edit</button>
                                    </div>
                                    {#if editID === rate._id}
                                        <form
                                            class="rate col"
                                            action="?/edit"
                                            method="post"
                                            use:enhance
                                            on:submit={() => {
                                                editID = "";
                                            }}>
                                            <input type="text" name="name" placeholder="Package name" required />
                                            <input type="number" name="youthPrice" placeholder="Youth Price" />
                                            <input type="text" name="adultPrice" placeholder="Adult Price" required />
                                            <!-- HACK: to get rate._id into form action -->
                                            <input
                                                class="form-id"
                                                type="text"
                                                name="id"
                                                bind:value={rate._id}
                                                required />
                                            <button type="submit">Confirm</button>
                                        </form>
                                    {/if}
                                </div>
                            {/if}
                        </div>
                    {/each}
                {:else}
                    <h2>Failed to load rates, please check back later.</h2>
                {/if}
            </tbody>
        </table>
        <h3 class="disclaimer">
            -- Indicates a lesson package that is unavailable. Lesson packages are non-refundable.
        </h3>
        <!-- BUG: likewise here, the "onsubmit" attribute is causing an annoying error. -->
        {#if $page.data.currentSession}
            <form class="rate col" on:submit={async () => await validateNewRate()} onsubmit="return false;">
                <input
                    bind:value={rateName}
                    class:invalid-input={rateNameStatus === InputStatus.Invalid}
                    type="text"
                    id="name"
                    placeholder="e.g. 1 Hour Lesson" />
                <input
                    bind:value={rateYouthPrice}
                    class:invalid-input={rateYouthPriceStatus === InputStatus.Invalid}
                    type="number"
                    id="name"
                    placeholder="e.g. $100" />
                <input
                    bind:value={rateAdultPrice}
                    class:invalid-input={rateAdultPriceStatus === InputStatus.Invalid}
                    type="text"
                    id="name"
                    placeholder="e.g. $100" />
                <button type="submit">Create New Lesson Rate</button>
                <h3 class="form-status" class:inactive={!rateStatusActive}>{rateStatus}</h3>
            </form>
        {/if}
    </div>
</section>
<section class="col card contact">
    <div class="col content">
        <!-- BUG: for some reason, this form element won't accept the "onsubmit" attribute, yet including it achieves the
            goal of preventing form submission from reloading html. Linter bug maybe? Potential fix: convert to form action -->
        <!-- FIX: converting to form action and adding "use:enhance" removes the need for "onsubmit" -->
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

    tbody .entry:nth-child(2n-1) {
        background-color: mix($primary-5, white, 50%);
    }

    tr {
        .package {
            flex-grow: 1;
            width: 40%;

            text-transform: capitalize;
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

    .actions {
        padding: 0.5rem;
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
            color: rgba($accent-2, 75%);
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

    .actions {
        gap: 0.5rem;
    }

    .rate {
        gap: 0.5rem;

        padding: 0.5rem;
    }

    .form-id {
        display: none;
    }
</style>
