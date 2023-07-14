import nodemailer from "nodemailer";
import type { RequestHandler } from "@sveltejs/kit";

export const POST = (async ({ request }) => {
    const { sender, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.privateemail.com",
        port: 465,
        secure: true,
        auth: {
            user: "alex@alexagruso.dev",
            pass: "Testpassword1234",
        },
    });

    await transporter
        .sendMail({
            from: "alex@alexagruso.dev>",
            to: "alex@alexagruso.dev",
            subject: `Email from ${sender}`,
            text: `${message}`,
        })
        .catch((error) => {
            console.error(error);
        });

    return new Response("awd");
}) satisfies RequestHandler;
