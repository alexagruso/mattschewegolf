import axios from "axios";
import type { PageServerLoad } from "./$types";
import { HOST } from "$env/static/private";

export const load: PageServerLoad = async (event) => {
    try {
        const { data } = await axios.get(`${HOST}/api/blog`);
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to load page data");
    }
};
