import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

import path from "path";
import { fileURLToPath } from "url";

const scssPath = `${path.dirname(fileURLToPath(import.meta.url))}/src/scss`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            "@components/*": "./src/components/*",
            "@scss/*": "./src/scss/*",
            "@lib/*": "./src/lib/*",
        },
    },
    onwarn: (warning, handler) => {
        const { code } = warning;

        if (code === "css-unused-selector") {
            return;
        }

        handler(warning);
    },
    preprocess: preprocess({
        scss: {
            prependData: `@import "${scssPath}/_global";`,
        },
    }),
};

export default config;
