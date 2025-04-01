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
};

export const Footer = ({ onScrollToTop, email, socialLinks }: FooterProps) => {
  return (
    <footer className="relative py-12 bg-brand-navy text-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white/60 hover:scale-90 hover:text-white/80 transition-all duration-200 ease-out"
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
              className="flex items-center justify-center text-white/60 hover:scale-90 hover:text-white/80 transition-all duration-200 ease-out"
              aria-label={`Send an email to ${email}`}
              title={`Send email to ${email}`}
            >
              <Mail strokeWidth={2} className="size-6 text-white/60" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/70">2025 © zardo. All rights reserved.</p>

          {/* Scroll to Top */}
          <button
            onClick={onScrollToTop}
            className="text-white/70 flex gap-2 items-center transition-all cursor-pointer hover:scale-90 hover:text-white/80 duration-200 ease-out group"
            aria-label="Back to top"
          >
            <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
