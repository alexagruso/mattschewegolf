import nodemailer from "nodemailer";
import { NODEMAILER_PASSWORD } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";

export const POST = (async ({ request }) => {
    const { name, content, phone, email } = await request.json();

    let messageHtml = `<b>From:</b> ${name}<br>`;

    if (phone) {
        messageHtml += `<b>Phone:</b> ${phone}<br>`;
    }

    if (email) {
        messageHtml += `<b>Email:</b> ${email}<br>`;
    }

    messageHtml += `<br><br>${content}`;

    const transporter = nodemailer.createTransport({
        host: "smtp.privateemail.com",
        port: 465,
        secure: true,
        auth: {
            user: "alex@alexagruso.dev",
            pass: NODEMAILER_PASSWORD,
        },
    });

    await transporter
        .sendMail({
            from: "alex@alexagruso.dev>",
            to: "alex@alexagruso.dev",
            subject: `Website Email`,
            html: messageHtml,
        })
        .catch((error) => {
            console.error(error);
        });

    return new Response("Email successfully sent");
}) satisfies RequestHandler;
