import nodemailer from "nodemailer";
import { NODEMAILER_ADDRESS, NODEMAILER_HOST, NODEMAILER_PASSWORD } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";

export const POST = (async ({ request }) => {
    const { name, content, phone, email } = await request.json();

    if (!name || !content || !phone || !email) {
        console.error("User input was invalid...");
        return new Response("Invalid input, missing fields.", { status: 400 }); // Bad Request
    }

    const messageHtml = `<b>From:</b> ${name}<br>
                         <b>Email:</b> ${email}<br>
                         <b>Phone:</b> ${phone}<br>
                         <br><br>${content}`;

    const transporter = nodemailer.createTransport({
        host: NODEMAILER_HOST,
        port: 465,
        secure: true,
        auth: {
            user: NODEMAILER_ADDRESS,
            pass: NODEMAILER_PASSWORD,
        },
    });

    return await transporter
        .sendMail({
            from: "alex@alexagruso.dev",
            to: "alex@alexagruso.dev",
            subject: `Website Email`,
            html: messageHtml,
        })
        .then(() => {
            return new Response("Email successfully sent.", { status: 200 });
        })
        .catch((error) => {
            console.error("Failed to send email...");
            return new Response(error, { status: 503 }); // Service unavailable
        });
}) satisfies RequestHandler;
