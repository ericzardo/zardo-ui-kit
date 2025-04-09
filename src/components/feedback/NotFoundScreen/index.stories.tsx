import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundScreen } from ".";

const meta: Meta<typeof NotFoundScreen> = {
  title: "Feedback/NotFoundScreen",
  component: NotFoundScreen,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof NotFoundScreen>;

export const Desktop: Story = {
  args: {
    backHref: "#",
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Mobile: Story = {
  args: {
    backHref: "#",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
