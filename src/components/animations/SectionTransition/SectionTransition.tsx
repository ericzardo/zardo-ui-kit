import { cn } from "@/utils";
import { FC, ReactNode, useEffect, useRef } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  threshold?: number;
}

export const SectionTransition: FC<SectionTransitionProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove(
                "translate-y-10",
                "-translate-x-10",
                "translate-x-10",
                "scale-95",
                "opacity-0"
              );
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "opacity-0 transition-all duration-[700ms] ease-out will-change-transform",
        direction === "up" && "translate-y-10",
        direction === "down" && "-translate-y-10",
        direction === "left" && "-translate-x-10",
        direction === "right" && "translate-x-10",
        direction === "scale" && "scale-95",
        direction === "fade" && "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};
