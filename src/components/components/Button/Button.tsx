import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "ui:flex",
    "ui:items-center",
    "ui:justify-center",
    "ui:gap-2",
    "ui:rounded-full",
    "ui:font-medium",
    "ui:cursor-pointer",
    "ui:transition-transform",
    "ui:duration-200",
    "ui:ease-out",
    "ui:focus:outline-none",
    "ui:disabled:cursor-not-allowed",
    "ui:hover:scale-90",
  ],
  {
    variants: {
      variant: {
        solid:
          "ui:bg-gradient-to-r ui:from-brand-purple ui:to-brand-purpleDark ui:text-white ui:shadow-md",
        outline:
          "ui:bg-transparent ui:border ui:border-brand-purple ui:text-brand-purple ui:hover:bg-brand-purple/10 ui:shadow-md",
        ghost:
          "ui:bg-transparent ui:text-brand-purple ui:hover:bg-brand-navy/10",
      },
      size: {
        sm: "ui:text-sm ui:px-4 ui:py-2",
        md: "ui:px-6 ui:py-3",
        lg: "ui:text-lg ui:px-8 ui:py-4",
      },
    },
    compoundVariants: [
      { variant: "solid", size: "sm" },
      { variant: "outline", size: "sm" },
      { variant: "ghost", size: "sm" },
      { variant: "solid", size: "md" },
      { variant: "outline", size: "md" },
      { variant: "ghost", size: "md" },
      { variant: "solid", size: "lg" },
      { variant: "outline", size: "lg" },
      { variant: "ghost", size: "lg" },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, className }))}
        {...props}
      />
    );
  }
);
