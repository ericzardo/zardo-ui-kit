import type { Meta, StoryObj } from "@storybook/react";
import { PatternBackground } from ".";

const meta: Meta<typeof PatternBackground> = {
  title: "Layout/PatternBackground",
  component: PatternBackground,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof PatternBackground>;

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
