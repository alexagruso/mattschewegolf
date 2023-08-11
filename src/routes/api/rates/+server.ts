import { guardEndpoint } from "@lib/server/authentication/guards";
import { rates } from "@lib/server/schemas/rate";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    try {
        const data = await rates.find();
        return json(data);
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to get lesson rates");

        return new Response("Failed to get lesson rates", { status: 500 });
    }
};

export const POST: RequestHandler = async (event) => {
    try {
        if (!(await guardEndpoint(event))) {
            return new Response("Not authorized to access this endpoint", { status: 401 });
        }

        const newRate = await event.request.json();
        await rates.insertMany(newRate);

        return new Response("Successfully created new lesson rate");
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to create new lesson rate");

        return new Response("Failed to create new lesson rate", { status: 500 });
    }
};

export const DELETE: RequestHandler = async (event) => {
    try {
        if (!(await guardEndpoint(event))) {
            return new Response("Not authorized to access this endpoint", { status: 401 });
        }

        const { id } = await event.request.json();
        await rates.deleteOne({ _id: id });

        return new Response("Successfully deleted lesson rate");
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to delete lesson rate");

        return new Response("Failed to delete lesson rate", { status: 500 });
    }
};
