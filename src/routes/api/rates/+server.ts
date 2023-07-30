import { rates } from "@lib/server/schemas/rate";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    try {
        const data = await rates.find();
        return json(data);
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to get lesson rates");

        return new Response("Failed to acquire lesson rates", { status: 500 });
    }
};

export const POST: RequestHandler = async ({ request }) => {
    try {
        const newRate = await request.json();
        await rates.insertMany(newRate);

        return new Response("Successfully created new lesson rate");
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to delete lesson rate");

        return new Response("Failed to create new lesson rate", { status: 500 });
    }
};

export const DELETE: RequestHandler = async ({ request }) => {
    try {
        const { id } = await request.json();
        await rates.deleteOne({ _id: id });

        return new Response("Successfully deleted lesson rate");
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to delete lesson rate");

        return new Response("Failed to delete lesson rate", { status: 500 });
    }
};
