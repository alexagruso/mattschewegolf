import adapter from "@sveltejs/adapter-auto";
import path from "path";
import { fileURLToPath } from "url";

const scssPath = `${path.dirname(fileURLToPath(import.meta.url))}/src/scss`;

const ignoreErrors = ["css-unused-selector"];

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: {
        scss: {
            prependData: `@import "${scssPath}/_global";`,
        },
    },
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

        if (ignoreErrors.includes(code)) {
            return;
        }

        return handler(warning);
    },
};

export default config;
