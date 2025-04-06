import { cn } from "@/utils";

interface PatternBackgroundProps {
  variant?: "two-blobs" | "three-blobs" | "corner-blobs";
  className?: string;
}

export const PatternBackground = ({
  variant = "two-blobs",
  className,
}: PatternBackgroundProps) => {
  return (
    <div className={cn("ui:absolute ui:inset-0 ui:-z-10", className)}>
      {variant === "two-blobs" && (
        <>
          <div className="ui:absolute ui:top-1/4 ui:-left-10 ui:w-64 ui:h-64 ui:bg-brand-purple/10 ui:rounded-full ui:blur-3xl" />
          <div className="ui:absolute ui:bottom-1/4 ui:-right-10 ui:w-72 ui:h-72 ui:bg-brand-purpleDark/10 ui:rounded-full ui:blur-3xl" />
        </>
      )}

      {variant === "three-blobs" && (
        <>
          <div className="ui:absolute ui:top-1/4 ui:left-1/4 ui:w-52 ui:h-52 ui:bg-brand-purple/10 ui:rounded-full ui:blur-2xl" />
          <div className="ui:absolute ui:top-3/6 ui:right-8 ui:w-64 ui:h-64 ui:bg-brand-purpleDark/10 ui:rounded-full ui:blur-3xl" />
          <div className="ui:absolute ui:bottom-10 ui:left-10 ui:w-40 ui:h-40 ui:bg-brand-purple/10 ui:rounded-full ui:blur-2xl" />
        </>
      )}

      {variant === "corner-blobs" && (
        <>
          <div className="ui:absolute ui:-top-12 ui:-left-12 ui:w-56 ui:h-56 ui:bg-brand-purple/10 ui:rounded-full ui:blur-3xl" />
          <div className="ui:absolute ui:-bottom-12 ui:-right-12 ui:w-56 ui:h-56 ui:bg-brand-purpleDark/10 ui:rounded-full ui:blur-3xl" />
        </>
      )}
    </div>
  );
};
