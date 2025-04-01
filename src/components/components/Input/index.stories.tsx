import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "glass"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    error: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    size: "md",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const SolidError: Story = {
  args: {
    variant: "solid",
    size: "md",
    error: true,
    message: "Email is invalid",
    defaultValue: "test@example",
    type: "email",
  },
};

export const GlassError: Story = {
  args: {
    variant: "glass",
    size: "md",
    error: true,
    message: "Email is invalid",
    defaultValue: "test@example",
    type: "email",
  },
};

export const SolidWithValue: Story = {
  args: {
    variant: "solid",
    size: "md",
    defaultValue: "user@example.com",
    type: "email",
  },
};

export const GlassWithValue: Story = {
  args: {
    variant: "glass",
    size: "md",
    defaultValue: "user@example.com",
    type: "email",
  },
};
