import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

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
        transparent:
          "bg-transparent border border-brand-purple text-brand-purple hover:bg-brand-purple/10 shadow-md",
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
        variant: "transparent",
        size: "sm",
      },
      {
        variant: "solid",
        size: "md",
      },
      {
        variant: "transparent",
        size: "md",
      },
      {
        variant: "solid",
        size: "lg",
      },
      {
        variant: "transparent",
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

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;
