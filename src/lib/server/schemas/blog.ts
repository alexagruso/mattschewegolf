import { Model, Schema, model } from "mongoose";

export interface BlogEntry {
    title: string;
    content: string;
    contentLink: string;
    date: Date;
}

export const isBlogEntry = (value: unknown): value is BlogEntry => {
    return (
        value !== null &&
        typeof value === "object" &&
        "title" in value &&
        "content" in value &&
        "contentLink" in value &&
        "date" in value
    );
};

const blogEntrySchema = new Schema<BlogEntry>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    contentLink: { type: String, required: true },
    date: { type: Date, required: true },
});

let blogEntries: Model<BlogEntry>;

try {
    blogEntries = model<BlogEntry>("blog-entries");
} catch (_) {
    try {
        blogEntries = model<BlogEntry>("blog-entries", blogEntrySchema);
    } catch (error) {
        console.error(error);
        console.error("ERROR: failed to initialize model");
    }
}

export { blogEntries };
