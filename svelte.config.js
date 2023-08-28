import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        accessors: true,
    },
    kit: {
        adapter: adapter(),
        alias: {
            "@components": "./src/lib/components",
            "@lib/*": "./src/lib/*",
            "@schemas/*": "./src/lib/server/schemas/*",
            "@server/*": "./src/lib/server/*",
        },
        csrf: {
            checkOrigin: false,
        },
    },
    // suppresses css warnings about unused selectors
    onwarn: (warning, handler) => {
        const { code } = warning;

        if (code === "css-unused-selector") {
            return;
        }

        handler(warning);
    },
    preprocess: vitePreprocess(),
};

export default config;
