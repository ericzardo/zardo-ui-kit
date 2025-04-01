import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Desktop: Story = {
  args: {
    logo: "zardo",
    navItems: [
      { label: "Home", href: "#" },
      { label: "Services", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
    ctaLabel: "Get Started",
    ctaOnClick: () => alert("Clicked Get Started!"),
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Mobile: Story = {
  args: {
    logo: "zardo",
    navItems: [
      { label: "Home", href: "#" },
      { label: "Services", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
    ctaLabel: "Get Started",
    ctaOnClick: () => alert("Clicked Get Started!"),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
