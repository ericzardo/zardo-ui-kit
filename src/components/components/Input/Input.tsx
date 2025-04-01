import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  "w-full rounded-lg border focus:outline-none focus:border-brand-purple transition-colors placeholder:text-brand-navy/50 text-brand-navy border-brand-lavender/50",
  {
    variants: {
      variant: {
        solid: "bg-white/70",
        glass: "bg-white shadow-md backdrop-blur-sm",
      },
      error: {
        true: "border-red-500",
        false: "",
      },
      size: {
        sm: "text-sm px-3 py-2 placeholder:text-sm",
        md: "px-4 py-3 placeholder:text-base",
        lg: "text-lg px-6 py-3 placeholder:text-lg",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        size: "sm",
      },
      {
        variant: "solid",
        size: "sm",
        error: true,
      },
      {
        variant: "glass",
        size: "sm",
      },
      {
        variant: "glass",
        size: "sm",
        error: true,
      },
      {
        variant: "solid",
        size: "md",
      },
      {
        variant: "solid",
        size: "md",
        error: true,
      },
      {
        variant: "glass",
        size: "md",
      },
      {
        variant: "glass",
        size: "md",
        error: true,
      },
      {
        variant: "solid",
        size: "lg",
      },
      {
        variant: "solid",
        size: "lg",
        error: true,
      },
      {
        variant: "glass",
        size: "lg",
      },
      {
        variant: "glass",
        size: "lg",
        error: true,
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      error: false,
    },
  }
);

const messageStyles = cva("font-medium", {
  variants: {
    size: {
      sm: "mt-0.5 text-[10px]",
      md: "mt-1 text-xs",
      lg: "mt-1 text-sm",
    },
    error: {
      true: "text-red-500",
      false: "text-brand-navy/50",
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
      <div className="w-full">
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
