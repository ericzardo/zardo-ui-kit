import { SectionTransition } from "@/components/animations/SectionTransition";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";

const sloganStyles = cva(
  [
    "relative",
    "py-12",
    "md:py-16",
    "w-full",
    "flex",
    "items-center",
    "bg-brand-navy",
    "text-brand-lavender",
  ],
  {
    variants: {
      borderRadius: {
        top: "rounded-t-[20px] md:rounded-t-[40px] lg:rounded-t-[60px]",
        bottom: "rounded-b-[20px] md:rounded-b-[40px] lg:rounded-b-[60px]",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      borderRadius: "top",
    },
  }
);

type SloganProps = {
  title: string;
  description: string;
  transitionDirection?: "up" | "down" | "left" | "right";
  borderRadius?: "top" | "bottom" | "none";
};

export const Slogan = ({
  title,
  description,
  transitionDirection = "up",
  borderRadius = "top",
}: SloganProps) => {
  return (
    <section className={cn(sloganStyles({ borderRadius }))}>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTransition direction={transitionDirection}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {title}
            </h2>
            <div className="w-full px-1 md:px-16 lg:px-20">
              <p className="text-lg md:text-xl text-white/70">{description}</p>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};
