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

            await rates.updateOne(
                { _id: data.id },
                {
                    name: data.name,
                    youthPrice: data["youth-price"],
                    adultPrice: data["adult-price"],
                },
            );
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to edit lesson rate");
        }
    },

    delete: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData());

            await axios.delete(`${HOST}/api/rates`, { data: { id: data.id } });
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to delete lesson rate");
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
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to create lesson rate");
        }
    },

    email: async (event) => {
        try {
            const data = Object.fromEntries(await event.request.formData());
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to send email");
        }
    },
};
