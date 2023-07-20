import { LessonRates } from "@lib/server/schemas/lessonrate.schema";
import { json, type RequestHandler } from "@sveltejs/kit";

export const POST = (async ({ request }) => {
    const { packageTitle, adultPrice, youthPrice } = await request.json();

    const response = await LessonRates.insertMany({ packageTitle, adultPrice, youthPrice }).catch((error) => {
        console.error(error);
        return new Response("Invalid input", { status: 400 });
    });

    return json(response);
}) satisfies RequestHandler;
