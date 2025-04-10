import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { fileURLToPath } from "url";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.ts",
    "../src/**/*.stories.jsx",
    "../src/**/*.stories.js",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../.storybook/**/*.mdx",
    "../.storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    config.plugins?.push(
      tsconfigPaths({
        projects: [path.resolve(__dirname, "tsconfig.json")],
      })
    );

    return config;
  },
};
export default config;
