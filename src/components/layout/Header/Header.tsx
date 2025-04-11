"use client";

import { Button } from "@/components/components/Button";
import { Menu, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Selector } from "./Selector";

interface NavItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface HeaderProps {
  logo?: ReactNode;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaOnClick?: () => void;
  logoHref?: string;
  className?: string;
  onLogoClick?: () => void;
  selector?: {
    options: { value: string; label: string; icon?: string }[];
    current: string;
    onSelect: (value: string) => void;
  };  
}

export const Header = ({
  logo = "zardo",
  navItems = [],
  ctaLabel = "Get Started",
  ctaOnClick,
  logoHref = "/",
  className,
  onLogoClick,
  selector,
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`ui:fixed ui:top-0 ui:left-0 ui:right-0 ui:z-50 ui:transition-all ui:duration-300 ${
        isScrolled
          ? "ui:py-5 ui:bg-gradient-to-b ui:from-white/80 ui:from-80% ui:to-transparent"
          : "ui:py-7 ui:bg-white ui:shadow-sm"
      } ${className}`}
    >
      <div className="ui-container ui:mx-auto ui:px-4 ui:flex ui:items-center ui:justify-between ui:relative">
        {/* Logo */}
        <div
          onClick={onLogoClick || (() => (window.location.href = logoHref))}
          className="ui:text-2xl ui:font-bold ui-text-gradient ui:cursor-pointer"
        >
          {logo}
        </div>

        {/* Navigation Desktop */}
        {navItems.length > 0 && (
          <nav className="ui:hidden ui:md:flex ui:items-center ui:gap-8 ui:absolute ui:left-1/2 ui:transform ui:-translate-x-1/2">
            {navItems.map(({ label, onClick }) => (
              <button
                key={label}
                onClick={onClick}
                className="ui:text-brand-navy ui:font-medium ui:hover:text-brand-purple ui:transition-colors ui:capitalize ui:cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>
        )}

        {/* Action Button Desktop */}
        <div className="ui:hidden ui:md:flex ui:gap-2 ui:md:gap-4 ui:items-center ui:justify-center">
          {selector && (
            <Selector
              options={selector.options}
              current={selector.current}
              onSelect={selector.onSelect}
            />     
          )}
          {ctaOnClick && (
            <Button variant="solid" size="sm" onClick={ctaOnClick}>
              {ctaLabel}
            </Button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="ui:md:hidden ui:focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="ui:w-6 ui:h-6 ui:text-brand-navy" />
          ) : (
            <Menu className="ui:w-6 ui:h-6 ui:text-brand-navy" />
          )}
        </button>
      </div>

      {/* Navigation Mobile */}
      {navItems.length > 0 && (
        <div
          className={`ui:fixed ui:inset-0 ui:top-[60px] ui:z-40 ui:bg-white/95 ui:backdrop-blur-lg ui:transform ui:transition-transform ui:duration-300 ui:ease-in-out ui:md:hidden ui:flex ui:flex-col ui:items-center ${
            isMobileMenuOpen ? "ui:translate-x-0" : "ui:translate-x-full"
          }`}
        >
          <div className="ui-container ui:mx-auto ui:px-4 ui:py-8 ui:flex ui:flex-col ui:gap-6 ui:items-center">
            {navItems.map(({ label, onClick }) => (
              <button
                key={label}
                onClick={() => {
                  onClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="ui:text-lg ui:text-brand-navy ui:py-3 ui:border-b ui:border-brand-lavender/50 ui:font-medium ui:capitalize ui:w-full ui:text-center"
              >
                {label}
              </button>
            ))}

            {selector && (
              <Selector
                options={selector.options}
                current={selector.current}
                onSelect={(val) => {
                  selector.onSelect(val);
                  setIsMobileMenuOpen(false);
                }}
              />
            )}

            {ctaOnClick && (
              <Button
                variant="solid"
                size="sm"
                className="ui:mt-4"
                onClick={ctaOnClick}
              >
                {ctaLabel}
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
