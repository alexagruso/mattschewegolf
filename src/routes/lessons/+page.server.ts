import axios from "axios";
import { rates, type Rate } from "@lib/server/schemas/rate";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {
        const { data } = await axios.get("http://localhost:8080/api/rates");

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

            await rates.updateOne({ _id: data.id }, data);
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to edit lesson rate");
        }
    },
};
