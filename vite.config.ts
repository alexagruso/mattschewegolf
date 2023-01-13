import { sveltekit } from "@sveltejs/kit/vite";
import { loadEnv } from "vite";
import type { UserConfig } from "vite";

const env = loadEnv("", process.cwd(), "");

const config: UserConfig = {
    plugins: [sveltekit()],
    server: {
        port: parseInt(env.PORT),
    },
};

export default config;
