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
        {
          src: "src/styles/theme.css",
          dest: "styles"
        }
      ],
    }),
  ],
  build: {
    assetsDir: "assets",
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        components: path.resolve(__dirname, "src/components/index.ts"),
        animations: path.resolve(
          __dirname,
          "src/components/animations/index.ts"
        ),
        layout: path.resolve(__dirname, "src/components/layout/index.ts"),
        feedback: path.resolve(__dirname, "src/components/feedback/index.ts"),
        logos: path.resolve(__dirname, "src/assets/logos/index.ts"),
      },
      fileName: (format, entry) => {
        if (entry === "index") {
          return `ui.${format}.js`;
        }
        return `${entry}.${format}.js`;
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        manualChunks: () => "bundle",
      },
    },
  },
  assetsInclude: ["**/*.png", "**/*.ico", "**/*.svg", "**/*.webp"],
});
