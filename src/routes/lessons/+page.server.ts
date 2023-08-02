import axios from "axios";
import { HOST } from "$env/static/private";
import { rates, type Rate } from "@lib/server/schemas/rate";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {
        const { data } = await axios.get(`${HOST}/api/rates`);

        return { rates: data as Array<Rate> };
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to load page data");

        return {};
    }
};

export const actions: Actions = {
    edit: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData());
            const id = event.url.searchParams.get("id");

            await rates.updateOne(
                { _id: id },
                {
                    name: data.name,
                    youthPrice: data["youth-price"],
                    adultPrice: data["adult-price"],
                },
            );

            return { editSuccess: true };
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to edit lesson rate");

            return { editSuccess: false };
        }
    },

    delete: async (event) => {
        try {
            const id = event.url.searchParams.get("id");
            await axios.delete(`${HOST}/api/rates`, { data: { id } });

            return { deleteSuccess: true };
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to delete lesson rate");

            return { deleteSuccess: false };
        }
    },

    create: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData());

            await axios.post(`${HOST}/api/rates`, {
                name: data.name,
                youthPrice: data["youth-price"],
                adultPrice: data["adult-price"],
            });

            return { createSuccess: true, createMessage: "Successfully created new lesson package" };
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to create lesson rate");

            let message = "Failed to create new lesson package, try again later";

            if (typeof error === "object" && (error as { code: number }).code === 11000) {
                message = "Cannot create packages with duplicate names";
            }

            return { createSuccess: false, createMessage: message };
        }
    },

    email: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData());

            await axios.post(`${HOST}/api/email`, data);

            return { emailSuccess: true };
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to send email");

            return { createSuccess: false };
        }
    },
};
