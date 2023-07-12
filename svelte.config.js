import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        accessors: true,
    },
    onwarn: (warning, handler) => {
        const { code } = warning;

        if (code === "css-unused-selector") {
            return;
        }

        handler(warning);
    },
    kit: {
        adapter: adapter(),
        alias: {
            "@lib/*": "./src/lib/*",
            "@server/*": "./src/lib/server/*",
            "@schemas/*": "./src/lib/server/schemas/*",
        },
    },
    preprocess: preprocess({
        scss: {
            prependData: `@import "${process.cwd()}/src/scss/_global";`,
        },
    }),
};

export default config;
