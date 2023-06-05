<script lang="ts">
    import Navbar from "@lib/components/Navbar.svelte";

    let name: string;
    let phone: string;
    let sender: string;
    let subject: string;
    let content: string;

    const sendEmail = async () => {};
</script>

<Navbar />
<div class="col card">
    <div class="col center">
        <h1>Matt Schewe</h1>
        <span>School of Golf</span>
    </div>
</div>

<section class="col content" id="about">
    <h2>About Matt</h2>
    <div class="row card">
        <div class="col intro">
            <h3>
                "An Effortless Golf Swing that is Repeatable and Easy to Learn"
            </h3>
            <p>
                Matt Schewe, director of instruction at the Pearland Golf Club
                in Pearland, Texas, strives to help all of his students become
                better golfers. From beginners to pros, he has something to
                offer for everyone.
            </p>
            <p>
                Matt has been nominated for several awards, including the South
                Texas PGA teacher of the year award for the past 3 years. In
                addition, he has taught many notable sports figures including
                Penny Hardaway, Sam Cassell, and Vernon Maxwell, as well as NFL
                player Lemuel Stinson. He has also taught famous actors like
                Kurt Russel and Sally Field, and even the famous rapper
                Scarface.
            </p>
        </div>
    </div>
</section>
<section class="col content" id="prices">
    <h2>Prices</h2>
    <table>
        <tr>
            <th>Lesson Packages</th>
            <th>Junior Pricing</th>
            <th>Adult Pricing</th>
        </tr>
        <tr>
            <td>Half Hour Lesson</td>
            <td>$60</td>
            <td>$70</td>
        </tr>
        <tr>
            <td>Full Hour Lesson</td>
            <td>$100</td>
            <td>$120</td>
        </tr>
        <tr>
            <td>3 Half Hour Lessons</td>
            <td>$170</td>
            <td>$200</td>
        </tr>
        <tr>
            <td>3 Full Hour Lessons</td>
            <td>--</td>
            <td>$340</td>
        </tr>
        <tr>
            <td>6 Half Hour Lessons</td>
            <td>$325</td>
            <td>$375</td>
        </tr>
        <tr>
            <td>6 Full Hour Lessons</td>
            <td>--</td>
            <td>$650</td>
        </tr>
        <tr>
            <td>12 Full Hour Lessons</td>
            <td>--</td>
            <td>$1200</td>
        </tr>
    </table>
    <span>* Lesson packages are non-refundable</span>
</section>
<section class="col content" id="contact">
    <h2>Contact</h2>
    <div class="col contact">
        <h3>Matt Schewe</h3>
        <h3>Director of Instruction, Pearland Golf Club</h3>
        <h3>3123 Flower Field Lane, Pearland, Texas</h3>
        <hr />
        <h3>Email: <span class="mono">matt@mattschewegolf.com</span></h3>
        <h3>Phone: <span class="mono">(713) 291-8861</span></h3>
        <div class="row">
            <a href="https://www.facebook.com/matt.schewe.1" target="_blank"
                ><img src="facebookicon.webp" alt="facebook icon" /></a
            >
            <a href="https://twitter.com/mattschewegolf?lang=en" target="_blank"
                ><img src="twittericon.webp" alt="facebook icon" /></a
            >
            <!-- <a
                href="https://www.instagram.com/golfpromattschewepga/"
                target="_blank"
                ><img src="instaicon.webp" alt="facebook icon" /></a
            > -->
            <a
                href="https://www.youtube.com/channel/UCLMlW7yX0chNKrdTu3hC5NA"
                target="_blank"
                ><img src="youtubeicon.webp" alt="facebook icon" /></a
            >
        </div>
        <h2>Send Me an Email!</h2>
        <form on:submit|preventDefault={sendEmail}>
            <div class="col">
                <input
                    class="input"
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                />
                <input
                    class="input"
                    placeholder="Phone Number"
                    type="text"
                    name="phone"
                    id="phone"
                />
                <input
                    class="input"
                    placeholder="Sender Email"
                    type="text"
                    name="sender"
                    id="sender"
                />
                <input
                    class="input"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    id="subject"
                />
                <textarea
                    class="input"
                    name="content"
                    id="content"
                    placeholder="Content"
                />
                <button class="submit" type="submit">Send Email</button>
            </div>
        </form>
    </div>
</section>

<style lang="scss">
    .card {
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 7.5rem;
        }

        span {
            font-size: 3rem;
            font-weight: 500;
        }
    }

    .center {
        min-height: 85vh;
        min-width: 60vw;

        justify-content: center;

        flex-grow: 1;
        gap: 0.75rem;

        min-width: 20vw;
    }

    .content {
        justify-content: center;
        align-items: center;
        gap: 1.5rem;

        margin-bottom: 5rem;

        div {
            gap: 1rem;

            max-width: 40vw;
        }

        h2 {
            padding-top: 5rem;

            font-size: 2.5rem;
        }
    }

    .intro {
        max-width: 20vw;
    }

    th,
    td {
        padding: 1rem;
        border: 1px solid black;
    }

    th {
        background-color: lightgray;
    }

    .contact {
        min-width: 40vw;
    }

    .mono {
        font-family: monospace;
        font-weight: 500;
    }

    .input {
        padding: 1rem;
        outline: none;
        border: 1px solid black;
    }

    textarea.input {
        height: 20vh;
        resize: none;
    }

    .submit {
        width: 10vw;
        padding: 1rem;

        font-size: 1.25rem;
        font-weight: 500;
    }
</style>
