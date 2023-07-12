import { BlogEntry } from "@schemas/blogentry.schema";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET = (async ({ url }) => {
    const id = url.searchParams.get("_id") ?? null;

    const response = await BlogEntry.find(id != null ? { _id: id } : {}).catch((error) => {
        console.error(error);
    });

    return json(response);
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
    const { content } = await request.json();
    const result = await BlogEntry.insertMany({ content: content }).catch((error) => {
        console.error(error);
    });

    return json(result);
}) satisfies RequestHandler;

export const DELETE = (async () => {
    const result = await BlogEntry.deleteMany({}).catch((error) => {
        console.error(error);
    });

    return json(result);
}) satisfies RequestHandler;
