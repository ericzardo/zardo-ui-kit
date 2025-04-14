import { Meta, StoryObj } from "@storybook/react";
import { Instagram, Linkedin } from "lucide-react";
import { Footer } from ".";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "bottom",
  },
  argTypes: {
    onScrollToTop: { action: "scroll to top" },
    email: { control: "text", defaultValue: "contact@zardo.tech" },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Desktop: Story = {
  args: {
    onScrollToTop: () => console.log("Scroll to top clicked"),
    email: "contact@zardo.dev",
    socialLinks: [
      {
        label: "Instagram Profile",
        icon: <Instagram strokeWidth={2} className="size-6 text-white/60" />,
        url: "#",
      },
      {
        label: "LinkedIn Profile",
        icon: <Linkedin strokeWidth={2} className="size-6 text-white/60" />,
        url: "#",
      },
    ],
    backToTopLabel: "Back to top",
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Mobile: Story = {
  args: {
    onScrollToTop: () => console.log("Scroll to top clicked"),
    email: "contact@zardo.dev",
    socialLinks: [
      {
        label: "Instagram Profile",
        icon: <Instagram strokeWidth={2} className="size-6 text-white/60" />,
        url: "#",
      },
      {
        label: "LinkedIn Profile",
        icon: <Linkedin strokeWidth={2} className="size-6 text-white/60" />,
        url: "#",
      },
    ],
    backToTopLabel: "Back to top",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
