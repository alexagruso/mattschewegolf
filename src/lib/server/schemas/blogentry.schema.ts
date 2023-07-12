import mongoose, { Model } from "mongoose";

interface BlogEntry {
    title: string;
    content: string;
}

const blogEntrySchema = new mongoose.Schema<BlogEntry>({
    title: String,
    content: String,
});

let BlogEntry: Model<BlogEntry>;

try {
    BlogEntry = mongoose.model<BlogEntry>("blogentries");
} catch (error) {
    BlogEntry = mongoose.model<BlogEntry>("blogentries", blogEntrySchema);
}

export { BlogEntry };
