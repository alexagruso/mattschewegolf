import { type Model, Schema, model } from "mongoose";

export interface Rate {
    _id: string;
    name: string;
    youthPrice?: number;
    adultPrice: number;
}

export const isRate = (value: unknown): value is Rate => {
    return (
        value !== null && typeof value === "object" && "name" in value && "youthPrice" in value && "adultPrice" in value
    );
};

const rateSchema = new Schema<Rate>({
    name: { type: String, required: true, unique: true },
    youthPrice: { type: Number },
    adultPrice: { type: Number, required: true },
});

let rates: Model<Rate>;

try {
    rates = model<Rate>("rates");
} catch (_) {
    try {
        rates = model<Rate>("rates", rateSchema);
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to initialize model");
    }
}

export { rates };
