import type { Meta, StoryObj } from "@storybook/react";
import { Slogan } from ".";

const meta: Meta<typeof Slogan> = {
  title: "Layout/Slogan",
  component: Slogan,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    borderRadius: {
      control: "select",
      options: ["top", "bottom", "none"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slogan>;

export const Desktop: Story = {
  args: {
    title: "Innovative Digital Solutions",
    description:
      "Combining creativity and cutting-edge technology to craft unique experiences that transform your business.",
    borderRadius: "top",
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Mobile: Story = {
  args: {
    title: "Innovative Digital Solutions",
    description:
      "Combining creativity and cutting-edge technology to craft unique experiences that transform your business.",
    borderRadius: "top",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
