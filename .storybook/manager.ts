import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "zardo brand kit",
    brandUrl: "https://zardo.dev",
    brandTarget: "_self",
  }),
});
