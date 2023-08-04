import axios from "axios";
import type { Actions, PageServerLoad } from "./$types";
import { HOST } from "$env/static/private";
import { blogEntries, type BlogEntry } from "@lib/server/schemas/blog";

export const load: PageServerLoad = async () => {
    try {
        const { data } = await axios.get(`${HOST}/api/blog`);

        return { blogEntries: (data as Array<BlogEntry>).reverse() };
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to load page data");
    }
};

export const actions: Actions = {
    edit: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData());
            const id = event.url.searchParams.get("id");

            await blogEntries.updateOne(
                { _id: id },
                {
                    title: data.title,
                    content: data.content,
                    contentLink: data["content-link"] ?? null,
                },
            );

            return { editSuccess: true };
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to edit blog entry");

            return { editSuccess: false };
        }
    },

    create: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData());

            await axios.post(`${HOST}/api/blog`, {
                title: data.title,
                content: data.content,
                contentLink: data["content-link"] ?? null,
                date: new Date().toLocaleDateString(),
            });

            return { createSuccess: true, createMessage: "Successfully created new blog entry" };
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to create new blog entry");

            return { createSuccess: false, createMessage: "Failed to create new blog entry, try again later" };
        }
    },

    delete: async (event) => {
        try {
            const id = event.url.searchParams.get("id");
            await axios.delete(`${HOST}/api/blog`, { data: { id } });

            return { deleteSuccess: true };
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to delete blog entry");

            return { deleteSuccess: false };
        }
    },
};
