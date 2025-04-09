"use client";

import Lottie from "lottie-react";
import { forwardRef } from "react";

import NotFoundIllustration from "@/assets/illustrations/404.json";

type NotFoundScreenProps = {
  backHref?: string;
};

export const NotFoundScreen = forwardRef<HTMLDivElement, NotFoundScreenProps>(
  ({ backHref = "/" }, ref) => {
    return (
      <main
        ref={ref}
        className="ui:min-h-screen ui:flex ui:items-center ui:justify-center ui:bg-brand-lavender"
      >
        <div className="ui:bg-brand-navy ui:rounded-2xl ui:shadow-lg ui:max-w-2xl ui:w-full ui:flex ui:flex-col ui:md:flex-row ui:overflow-hidden">
          {/* Coluna de texto */}
          <article className="ui:flex ui:flex-col ui:items-end ui:justify-center ui:gap-16 ui:p-8 ui:md:w-1/2 ui:text-center">
            <div className="ui:flex ui:flex-col ui:items-end ui:justify-between">
              <h1 className="ui:text-brand-offwhite ui:text-4xl ui:font-bold ui:mb-4">
                Error /404
              </h1>
              <p className="ui:text-xl ui:text-brand-lavender/70 ui:mb-4">
                Oops! Page not found
              </p>
            </div>
            <a
              href={backHref}
              className="ui:text-brand-purple ui:hover:text-brand-offwhite ui:underline ui:transition-all ui:ease-out ui:duration-200"
              aria-label="Return to homepage"
            >
              Return to Home
            </a>
          </article>

          {/* Coluna da animação */}
          <div className="ui:flex ui:items-center ui:justify-center ui:p-4 ui:md:w-1/2 ui:bg-brand-navy">
            <div className="ui:relative">
              <Lottie
                animationData={NotFoundIllustration}
                loop
                className="ui:w-full ui:h-full ui:max-w-72"
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
);

export default NotFoundScreen;
