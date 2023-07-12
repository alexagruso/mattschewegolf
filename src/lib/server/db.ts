import mongoose from "mongoose";
import { MONGODB_URI } from "$env/static/private";

export const connectToDatabase = async () => {
    await mongoose.connect(MONGODB_URI).catch((error: unknown) => {
        console.error(error);
    });
};
