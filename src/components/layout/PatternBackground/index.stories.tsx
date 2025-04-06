import type { Meta, StoryObj } from "@storybook/react";
import { PatternBackgroundBlobs } from ".";

const meta: Meta<typeof PatternBackgroundBlobs> = {
  title: "Layout/PatternBackground",
  component: PatternBackgroundBlobs,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof PatternBackgroundBlobs>;

export const TwoBlobs: Story = {
  args: {
    variant: "two-blobs",
  },
};

export const ThreeBlobs: Story = {
  args: {
    variant: "three-blobs",
  },
};

export const CornerBlobs: Story = {
  args: {
    variant: "corner-blobs",
  },
};
