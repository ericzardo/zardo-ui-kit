import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-full",
    "font-medium",
    "cursor-pointer",
    "transition-transform",
    "duration-200",
    "ease-out",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "hover:scale-90",
  ],
  {
    variants: {
      variant: {
        solid:
          "bg-gradient-to-r from-brand-purple to-brand-purpleDark text-white shadow-md",
        outline:
          "bg-transparent border border-brand-purple text-brand-purple hover:bg-brand-purple/10 shadow-md",
        ghost: "bg-transparent text-brand-purple hover:bg-brand-navy/10",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "px-6 py-3",
        lg: "text-lg px-8 py-4",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        size: "sm",
      },
      {
        variant: "outline",
        size: "sm",
      },
      {
        variant: "ghost",
        size: "sm",
      },
      {
        variant: "solid",
        size: "md",
      },
      {
        variant: "outline",
        size: "md",
      },
      {
        variant: "ghost",
        size: "md",
      },
      {
        variant: "solid",
        size: "lg",
      },
      {
        variant: "outline",
        size: "lg",
      },
      {
        variant: "ghost",
        size: "lg",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

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
