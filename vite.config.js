var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";
import { peerDependencies } from "./package.json";
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
            insertTypesEntry: true,
            tsconfigPath: "./tsconfig.json",
            copyDtsFiles: true,
        }),
        tsconfigPaths(),
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    src: "src/assets/logos/*.{png,ico,webp,svg}",
                    dest: "assets/logos",
                },
            ],
        }),
    ],
    build: {
        lib: {
            entry: {
                index: path.resolve(__dirname, "src/index.ts"),
                components: path.resolve(__dirname, "src/components/index.ts"),
                animations: path.resolve(__dirname, "src/components/animations/index.ts"),
                layout: path.resolve(__dirname, "src/components/layout/index.ts"),
                feedback: path.resolve(__dirname, "src/components/feedback/index.ts"),
            },
            fileName: function (format, entry) {
                if (entry === "index") {
                    return "ui.".concat(format, ".js");
                }
                return "".concat(entry, ".").concat(format, ".js");
            },
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: __spreadArray(__spreadArray([], Object.keys(peerDependencies), true), ["react/jsx-runtime"], false),
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
                manualChunks: function () { return "bundle"; },
                assetFileNames: function (assetInfo) {
                    var _a;
                    if ((_a = assetInfo.name) === null || _a === void 0 ? void 0 : _a.endsWith(".css")) {
                        return "styles.css";
                    }
                    return assetInfo.name;
                },
            },
        },
    },
    assetsInclude: ["**/*.png", "**/*.ico", "**/*.svg", "**/*.webp"],
});
