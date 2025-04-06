import { forwardRef, useEffect, useState } from "react";

type LoadingScreenProps = {
  message?: string;
  forceLoading?: boolean;
};

export const LoadingScreen = forwardRef<HTMLDivElement, LoadingScreenProps>(
  ({ message, forceLoading = false }, ref) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const handleLoad = () => setIsLoading(false);

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    }, []);

    if (!isLoading && !forceLoading) return null;

    return (
      <div
        ref={ref}
        className="ui:fixed ui:inset-0 ui:flex ui:items-center ui:justify-center ui:bg-brand-navy ui:z-[9999]"
      >
        <div className="ui:flex ui:flex-col ui:items-center">
          <div className="ui:relative">
            <div className="ui:w-16 ui:h-16 ui:border-4 ui:border-brand-lavender/30 ui:rounded-full"></div>
            <div className="ui:w-16 ui:h-16 ui:border-4 ui:border-brand-lavender ui:border-t-transparent ui:rounded-full ui:animate-spin ui:absolute ui:top-0 ui:left-0"></div>
          </div>
          {message && (
            <p className="ui:mt-6 ui:text-brand-lavender ui:font-medium ui:text-lg">
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }
);
