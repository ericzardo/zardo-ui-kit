import { SectionTransition } from "@/components/animations/SectionTransition";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";

const sloganStyles = cva(
  [
    "ui:relative",
    "ui:py-12",
    "ui:md:py-16",
    "ui:w-full",
    "ui:flex",
    "ui:items-center",
    "ui:bg-brand-navy",
    "ui:text-brand-lavender",
  ],
  {
    variants: {
      borderRadius: {
        top: "ui:rounded-t-[20px] ui:md:rounded-t-[40px] ui:lg:rounded-t-[60px]",
        bottom:
          "ui:rounded-b-[20px] ui:md:rounded-b-[40px] ui:lg:rounded-b-[60px]",
        none: "ui:rounded-none",
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
      <div className="ui-container ui:mx-auto ui:px-4 ui:relative ui:z-10">
        <SectionTransition direction={transitionDirection}>
          <div className="ui:max-w-4xl ui:mx-auto ui:text-center">
            <h2 className="ui:text-4xl ui:md:text-5xl ui:lg:text-6xl ui:font-bold ui:mb-6">
              {title}
            </h2>
            <div className="ui:w-full ui:px-1 ui:md:px-16 ui:lg:px-20">
              <p className="ui:text-lg ui:md:text-xl ui:text-white/70">
                {description}
              </p>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};
