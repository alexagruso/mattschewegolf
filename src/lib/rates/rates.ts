import axios from "axios";
import type { LessonRate } from "@lib/server/schemas/lessonrate.schema";

export const createLessonRate = async (rate: LessonRate) => {
    return await axios.post("/api/rates", rate);
};
