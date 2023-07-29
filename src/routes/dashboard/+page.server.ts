import { guardPage } from "@lib/server/authentication/guards";
import { redirect } from "@sveltejs/kit";
import { sessions } from "@lib/server/schemas/session";
import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = {
    logout: async (event) => {
        const currentSession = JSON.parse(event.cookies.get("Session") ?? "{}");

        try {
            await sessions.deleteOne(currentSession);
            event.cookies.delete("Session");
        } catch (error) {
            console.error(error);
            console.error("ERROR: failed to log out");
        }

        throw redirect(302, "/");
    },
};

export const load: PageServerLoad = async (event) => {
    const currentSession = guardPage(event);

    return { currentSession };
};
