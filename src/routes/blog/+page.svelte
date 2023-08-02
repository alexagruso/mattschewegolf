<script lang="ts">
    import ButtonLink from "@components/interactive/ButtonLink.svelte";
    import { enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    import { page } from "$app/stores";
    import type { ActionData, PageServerData } from "./$types";

    let editID: string;

    const resetEditForm = async () => {
        await invalidateAll();
        editID = "";
    };

    export let data: PageServerData;
    export let form: ActionData;
</script>

<!-- TODO: fix dates for blog entries -->

{#if $page.data.currentSession}
    <section class="col card">
        <div class="accent">
            <h1>Create new blog entry:</h1>
        </div>
        <form class="col create-form" action="?/create" method="post" use:enhance>
            <div class="input-group">
                <label for="name">Entry Title</label>
                <input type="text" name="title" id="title" placeholder="e.g. Matt wins award..." required />
            </div>
            <div class="input-group">
                <label for="name">Content Link</label>
                <input type="text" name="content-link" id="content-link" placeholder="e.g. https://example.com/..." />
            </div>
            <div class="input-group">
                <label for="name">Content</label>
                <textarea name="content" id="content" placeholder="e.g. Matt wins award..." required />
            </div>
            <button type="submit">Create New Blog Entry</button>
            {#if form?.createSuccess !== undefined}
                <h2>{form?.createMessage}</h2>
            {/if}
        </form>
    </section>
{:else}
    <h1>Latest</h1>
{/if}

{#if data?.blogEntries?.length === 0}
    <h2>Nothing posted yet...</h2>
{:else if data.blogEntries}
    {#each data.blogEntries as entry}
        <section class="col card entry">
            <div class="accent">
                <h2>{entry.title}</h2>
                <!-- <p>{formatDate(entry.date)}</p> -->
            </div>
            <div class="col content">
                <p>{entry.content}</p>
                {#if entry.contentLink}
                    <div class="link">
                        <ButtonLink href={entry.contentLink}>Check this out!</ButtonLink>
                    </div>
                {/if}
            </div>
            {#if $page.data.currentSession}
                <div class="row actions">
                    <form action="?/delete&id={entry._id}" method="post" use:enhance>
                        <button type="submit">Delete</button>
                    </form>
                    <button on:click={() => (editID === entry._id ? (editID = "") : (editID = entry._id))}>Edit</button>
                </div>
            {/if}
            {#if editID === entry._id}
                <form
                    class="rate col edit-form"
                    action="?/edit&id={entry._id}"
                    method="post"
                    on:submit={resetEditForm}
                    use:enhance>
                    <div class="input-group">
                        <label for="name">Entry Title</label>
                        <input type="text" name="title" id="title" placeholder="e.g. Matt wins award..." required />
                    </div>
                    <div class="input-group">
                        <label for="name">Content Link</label>
                        <input
                            type="text"
                            name="content-link"
                            id="content-link"
                            placeholder="e.g. https://example.com/..." />
                    </div>
                    <div class="input-group">
                        <label for="name">Content</label>
                        <textarea name="content" id="content" placeholder="e.g. Matt wins award..." required />
                    </div>
                    <button type="submit">Confirm Edit</button>
                </form>
            {/if}
        </section>
    {/each}
{:else}
    <h2>Failed to load blog entries...</h2>
{/if}

<style lang="scss">
    .edit-form {
        gap: 0.5rem;

        padding: 1rem;
    }

    .actions {
        gap: 0.5rem;

        padding: 1rem;
    }

    .content {
        align-items: start;
        gap: 2rem;

        padding: 2rem;

        p {
            font-size: $paragraph;
            font-weight: 500;
            text-align: justify;
            color: $primary-1;
        }

        @include tablet-and-below {
            .link {
                align-self: center;
            }
        }
    }

    .accent {
        padding: 2rem;

        background-color: $accent-2;

        h1,
        h2 {
            font-size: $header-2;
            text-transform: uppercase;
            color: $primary-6;
        }

        p {
            font-size: $paragraph;
            font-weight: 400;
            color: $primary-6;
        }
    }

    .card {
        gap: 0.5rem;

        box-shadow: 0rem 0.25rem 1rem 0.25rem rgba(black, 0.25);
    }

    .create-form {
        gap: 0.5rem;

        padding: 2rem;
    }

    h1 {
        align-self: center;

        color: $primary-1;
    }

    h2 {
        align-self: center;

        font-size: $header-5;
        color: $primary-3;
    }

    label {
        color: $accent-2;
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
        min-height: 30vh;
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

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
