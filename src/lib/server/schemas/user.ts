import { model, Schema, type Model } from "mongoose";

export interface User {
    username: string;
    password: string;
}

export const isUser = (value: unknown): value is User => {
    return value !== null && typeof value === "object" && "username" in value && "password" in value;
};

const userSchema = new Schema<User>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

let users: Model<User>;

try {
    users = model<User>("users");
} catch (_) {
    try {
        users = model<User>("users", userSchema);
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to initialize model");
    }
}

export { users };
