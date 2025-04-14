import { ChevronDown, Mail } from "lucide-react";
import { ReactElement } from "react";

type SocialLink = {
  label: string;
  url: string;
  icon: ReactElement;
};

type FooterProps = {
  onScrollToTop: () => void;
  email: string;
  socialLinks: SocialLink[];
  backToTopLabel: string;
};

export const Footer = ({
  onScrollToTop,
  email,
  socialLinks,
  backToTopLabel,
}: FooterProps) => {
  return (
    <footer className="ui:relative ui:py-12 ui:bg-brand-navy ui:text-white ui:w-full">
      <div className="ui-container ui:mx-auto ui:px-4">
        <div className="ui:flex ui:md:flex-row ui:flex-col ui:gap-5 ui:justify-between ui:items-center">
          {/* Social Links */}
          <div className="ui:flex ui:items-center ui:gap-4">
            {socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ui:flex ui:items-center ui:justify-center ui:text-white/60 ui:hover:scale-90 ui:hover:text-white/80 ui:transition-all ui:duration-200 ui:ease-out"
                aria-label={socialLink.label}
              >
                {socialLink.icon}
              </a>
            ))}
            {/* Mail */}
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ui:flex ui:items-center ui:justify-center ui:text-white/60 ui:hover:scale-90 ui:hover:text-white/80 ui:transition-all ui:duration-200 ui:ease-out"
              aria-label={`Send an email to ${email}`}
              title={`Send email to ${email}`}
            >
              <Mail strokeWidth={2} className="ui:size-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="ui:relative sm:ui:absolute sm:ui:left-1/2 sm:ui:-translate-x-1/2 ui:text-white/70">
            2025 © zardo. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={onScrollToTop}
            className="ui:text-white/70 ui:flex ui:gap-2 ui:items-center ui:transition-all ui:cursor-pointer ui:hover:scale-90 ui:hover:text-white/80 ui:duration-200 ui:ease-out ui:group"
            aria-label="Back to top"
          >
            <ChevronDown className="ui:group-hover:rotate-180 ui:transition-transform ui:duration-300 ui:rotate-180 ui:mdrotate-0" />
            {backToTopLabel}
          </button>
        </div>
      </div>
    </footer>
  );
};
