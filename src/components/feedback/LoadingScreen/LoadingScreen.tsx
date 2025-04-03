import { forwardRef, useEffect, useState } from "react";

type LoadingScreenProps = {
  message?: string;
  doc?: Document;
};

export const LoadingScreen = forwardRef<HTMLDivElement, LoadingScreenProps>(
  ({ message = "Loading...", doc = document }, ref) => {
    const [, setIsLoading] = useState(true);

    useEffect(() => {
      const handleLoad = () => {
        setIsLoading(false);
      };

      if (doc.readyState === "complete") {
        handleLoad();
      } else {
        doc.addEventListener("load", handleLoad);
        return () => doc.removeEventListener("load", handleLoad);
      }
    }, [doc]);

    return (
      <div
        ref={ref}
        className="fixed inset-0 flex items-center justify-center bg-brand-navy z-[9999]"
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-brand-lavender/30 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-brand-lavender border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="mt-6 text-brand-lavender font-medium text-lg">
            {message}
          </p>
        </div>
      </div>
    );
  }
);

LoadingScreen.displayName = "LoadingScreen";
