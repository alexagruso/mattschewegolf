import { error, type RequestEvent, type ServerLoadEvent } from "@sveltejs/kit";
import { isSession, sessions, type Session } from "../schemas/session";

export const guardPage = async (event: ServerLoadEvent): Promise<Session> => {
    const currentSession = JSON.parse(event.cookies.get("Session") ?? "{}") as Session;

    if (!isSession(currentSession)) {
        throw error(401, {
            message: "You must be logged in to view this page",
        });
    } else if (!(await sessions.findOne(currentSession))) {
        throw error(500, {
            message: "Current session not found",
        });
    }

    return currentSession;
};

export const guardEndpoint = async (event: RequestEvent): Promise<boolean> => {
    const currentSession = JSON.parse(event.cookies.get("Session") ?? "{}");

    if (!(await sessions.findOne(currentSession))) {
        return false;
    }

    return true;
};
