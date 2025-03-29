import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "./src/index.tsx"),
            name: "@zardo/ui-kit",
            formats: ["es", "cjs"],
            fileName: function (format) { return "ui-kit.".concat(format, ".js"); },
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths(),
        dts({
            rollupTypes: true,
            outDir: "dist/types",
            insertTypesEntry: true,
        }),
        copy({
            targets: [
                { src: "src/styles/index.css", dest: "dist", rename: "styles.css" },
            ],
            hook: "writeBundle",
        }),
    ],
});
