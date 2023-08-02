import { model, Schema, type Model } from "mongoose";
import { SESSION_LENGTH } from "$env/static/private";
import { v4 as uuidv4 } from "uuid";

export interface Session {
    sessionID: string;
    user: string;
    createdAt: Date;
    expiresAt: Date;
}

export const isSession = (value: object): value is Session => {
    return (
        value &&
        typeof value === "object" &&
        "sessionID" in value &&
        "user" in value &&
        "createdAt" in value &&
        "expiresAt" in value
    );
};

export const createSession = (user: string): Session => {
    return {
        sessionID: uuidv4(),
        user,
        createdAt: new Date(),
        expiresAt: new Date(
            new Date().getTime() + parseInt(SESSION_LENGTH) * 1000, // from milliseconds
        ),
    };
};

const sessionSchema = new Schema<Session>({
    sessionID: { type: String, required: true },
    user: { type: String, required: true },
    createdAt: { type: Date, required: true },
    expiresAt: {
        type: Date,
        required: true,
        expires: parseInt(SESSION_LENGTH),
        index: true,
    },
});

let sessions: Model<Session>;

try {
    sessions = model<Session>("sessions");
} catch (_) {
    try {
        sessions = model<Session>("sessions", sessionSchema);
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to initialize model");
    }
}

export { sessions };
