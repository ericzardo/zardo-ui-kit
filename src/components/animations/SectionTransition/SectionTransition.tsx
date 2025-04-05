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
              entry.target.classList.add("ui:opacity-100");
              entry.target.classList.remove(
                "ui:translate-y-10",
                "ui:-translate-x-10",
                "ui:translate-x-10",
                "ui:scale-95",
                "ui:opacity-0"
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
        "ui:opacity-0 ui:transition-all ui:duration-[700ms] ui:ease-out ui:will-change-transform",
        direction === "up" && "ui:translate-y-10",
        direction === "down" && "ui:-translate-y-10",
        direction === "left" && "ui:-translate-x-10",
        direction === "right" && "ui:translate-x-10",
        direction === "scale" && "ui:scale-95",
        direction === "fade" && "ui:opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};
