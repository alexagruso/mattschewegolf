import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        accessors: true,
    },
    kit: {
        adapter: adapter(),
        alias: {
            "@components": "./src/components",
            "@lib/*": "./src/lib/*",
            "@schemas/*": "./src/lib/server/schemas/*",
            "@scss/*": "./src/scss/*",
            "@server/*": "./src/lib/server/*",
        },
        csrf: {
            checkOrigin: false,
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
            prependData: `@import "${process.cwd()}/src/scss/_global";`,
        },
    }),
};

export default config;
