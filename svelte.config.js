import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

import path from "path";
import { fileURLToPath } from "url";

const scssPath = `${path.dirname(fileURLToPath(import.meta.url))}/src/scss`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        scss: {
            prependData: `@import "${scssPath}/_global";`,
        },
    }),
    kit: {
        adapter: adapter(),
        alias: {
            "@components/*": "./src/components/*",
            "@scss/*": "./src/scss/*",
            "@scripts/*": "./src/scripts/*",
        },
    },
    onwarn: (warning, handler) => {
        const { code } = warning;

        if (code === "css-unused-selector") {
            return;
        }

        return handler(warning);
    },
};

export default config;
