import mongoose, { Model, Schema } from "mongoose";

interface BlogEntry {
    title: string;
    content: string;
}

const blogEntrySchema: Schema<BlogEntry> = new mongoose.Schema<BlogEntry>({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

let BlogEntry: Model<BlogEntry>;

try {
    BlogEntry = mongoose.model<BlogEntry>("blogentries");
} catch (error) {
    BlogEntry = mongoose.model<BlogEntry>("blogentries", blogEntrySchema);
}

export { BlogEntry };
