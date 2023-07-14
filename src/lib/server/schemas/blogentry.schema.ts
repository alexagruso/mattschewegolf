import mongoose, { Model, Schema } from "mongoose";

interface IBlogEntry {
    title: string;
    content: string;
}

const blogEntrySchema: Schema<IBlogEntry> = new mongoose.Schema<IBlogEntry>({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

let BlogEntry: Model<IBlogEntry>;

try {
    BlogEntry = mongoose.model<IBlogEntry>("blogentries");
} catch (error) {
    BlogEntry = mongoose.model<IBlogEntry>("blogentries", blogEntrySchema);
}

export { BlogEntry };
