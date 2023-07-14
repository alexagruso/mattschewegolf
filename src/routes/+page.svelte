<script lang="ts">
    import axios from "axios";

    let sender: string;
    let message: string;

    const sendEmail = async () => {
        axios
            .post("/api/email", {
                sender: sender,
                message: message,
            })
            .catch((error) => {
                console.error(error);
            });
    };
</script>

<h1>Email form test</h1>
<form on:submit={sendEmail}>
    <input type="text" bind:value={sender} id="sender" placeholder="sender" />
    <input type="text" bind:value={message} id="message" placeholder="message" />
    <button type="submit">Send</button>
</form>

<style lang="scss">
    form * {
        border: 1px solid black;
    }
</style>
