import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { peerDependencies } from "./package.json";
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
        }),
        tsconfigPaths(),
        tailwindcss(),
    ],
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "ui",
            fileName: function (format) { return "ui.".concat(format, ".js"); },
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            external: Object.keys(peerDependencies),
            output: {
                globals: { react: "React", "react-dom": "ReactDOM" },
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
});
