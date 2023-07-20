import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

const env = loadEnv("", process.cwd(), "");

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        port: parseInt(env.PORT ?? "5000"),
    },
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
});
