import mongoose, { Model, Schema } from "mongoose";

const lessonRateSchema: Schema<LessonRate> = new mongoose.Schema<LessonRate>({
    packageTitle: { type: String, required: true },
    adultPrice: { type: Number, required: true },
    youthPrice: Number,
});

let LessonRates: Model<LessonRate>;

try {
    LessonRates = mongoose.model<LessonRate>("lessonrates");
} catch (error) {
    console.log("Model not created, compiling for first time...");
    LessonRates = mongoose.model<LessonRate>("lessonrates", lessonRateSchema);
}

export interface LessonRate {
    packageTitle: string;
    adultPrice: number;
    youthPrice?: number;
}

export { LessonRates };
