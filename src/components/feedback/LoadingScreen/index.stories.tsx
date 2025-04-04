import type { Meta, StoryObj } from "@storybook/react";
import { LoadingScreen } from ".";

const meta: Meta<typeof LoadingScreen> = {
  title: "Feedback/LoadingScreen",
  component: LoadingScreen,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof LoadingScreen>;

export const Desktop: Story = {
  args: {
    message: "Loading...",
    forceLoading: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Mobile: Story = {
  args: {
    message: "Loading...",
    forceLoading: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
