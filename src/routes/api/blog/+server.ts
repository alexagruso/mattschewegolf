import { blogEntries } from "@lib/server/schemas/blog";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { guardEndpoint } from "@lib/server/authentication/guards";

export const GET: RequestHandler = async () => {
    try {
        const data = await blogEntries.find();
        return json(data);
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to get blog entries");

        return new Response("Failed to get blog entries", { status: 500 });
    }
};

export const POST: RequestHandler = async (event) => {
    try {
        if (!(await guardEndpoint(event))) {
            return new Response("Not authorized to access this endpoint", { status: 401 });
        }

        const newBlogEntry = await event.request.json();
        await blogEntries.insertMany(newBlogEntry);

        return new Response("Successfully created new blog entry");
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to create new blog entry");

        return new Response("Failed to create new blog entry", { status: 500 });
    }
};

export const DELETE: RequestHandler = async (event) => {
    try {
        if (!(await guardEndpoint(event))) {
            return new Response("Not authorized to access this endpoint", { status: 401 });
        }

        const { id } = await event.request.json();
        await blogEntries.deleteOne({ _id: id });

        return new Response("Successfully deleted blog entry");
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to delete blog entry");

        return new Response("Failed to delete blog entry", { status: 500 });
    }
};
