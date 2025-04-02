import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
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
      entry: "./src/index.ts",
      name: "ui",
      fileName: (format) => `ui.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "styles.css";
          }
          return assetInfo.name;
        },
      },
    },
  },
});
