import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  "ui:w-full ui:rounded-lg ui:border ui:focus:outline-none ui:focus:border-brand-purple ui:transition-colors ui:placeholder:text-brand-navy/50 ui:text-brand-navy ui:border-brand-lavender/50",
  {
    variants: {
      variant: {
        solid: "ui:bg-white/70",
        glass: "ui:bg-white ui:shadow-md ui:backdrop-blur-sm",
      },
      error: {
        true: "ui:border-red-500",
        false: "",
      },
      size: {
        sm: "ui:text-sm ui:px-3 ui:py-2 ui:placeholder:text-sm",
        md: "ui:px-4 ui:py-3 ui:placeholder:text-base",
        lg: "ui:text-lg ui:px-6 ui:py-3 ui:placeholder:text-lg",
      },
    },
    compoundVariants: [
      { variant: "solid", size: "sm" },
      { variant: "solid", size: "sm", error: true },
      { variant: "glass", size: "sm" },
      { variant: "glass", size: "sm", error: true },
      { variant: "solid", size: "md" },
      { variant: "solid", size: "md", error: true },
      { variant: "glass", size: "md" },
      { variant: "glass", size: "md", error: true },
      { variant: "solid", size: "lg" },
      { variant: "solid", size: "lg", error: true },
      { variant: "glass", size: "lg" },
      { variant: "glass", size: "lg", error: true },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      error: false,
    },
  }
);

const messageStyles = cva("ui:font-medium", {
  variants: {
    size: {
      sm: "ui:mt-0.5 ui:text-[10px]",
      md: "ui:mt-1 ui:text-xs",
      lg: "ui:mt-1 ui:text-sm",
    },
    error: {
      true: "ui:text-red-500",
      false: "ui:text-brand-navy/50",
    },
  },
  defaultVariants: {
    size: "md",
    error: false,
  },
});

type InputProps = ComponentProps<"input"> & {
  variant?: "solid" | "glass";
  size?: "sm" | "md" | "lg";
  error?: boolean;
  message?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, size, error, message, className, ...props }, ref) => {
    return (
      <div className="ui:w-full">
        <input
          ref={ref}
          className={cn(inputStyles({ variant, size, error }), className)}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${message}-error` : undefined}
          autoComplete="off"
          {...props}
        />
        {error && message && (
          <p
            id={`${message}-error`}
            className={cn(messageStyles({ size, error }))}
            role="alert"
          >
            {message}
          </p>
        )}
      </div>
    );
  }
);
