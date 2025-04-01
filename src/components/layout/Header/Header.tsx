"use client";

import { Button } from "@/components/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface HeaderProps {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaOnClick?: () => void;
  className?: string;
}

export const Header = ({
  logo = "zardo",
  navItems = [],
  ctaLabel = "Get Started",
  ctaOnClick,
  className,
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-5 bg-gradient-to-b from-white/80 from-80% to-transparent"
          : "py-7 bg-white shadow-sm"
      } ${className}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gradient">
          {logo}
        </a>

        {/* Navigation Desktop */}
        {navItems.length > 0 && (
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map(({ label, onClick }) => (
              <button
                key={label}
                onClick={onClick}
                className="text-brand-navy font-medium hover:text-brand-purple transition-colors capitalize cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>
        )}

        {/* Action Button Desktop */}
        {ctaOnClick && (
          <div className="hidden md:flex">
            <Button variant="solid" size="sm" onClick={ctaOnClick}>
              {ctaLabel}
            </Button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-brand-navy" />
          ) : (
            <Menu className="w-6 h-6 text-brand-navy" />
          )}
        </button>
      </div>

      {/* Navigation Mobile */}
      {navItems.length > 0 && (
        <div
          className={`fixed inset-0 top-[60px] z-40 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="container mx-auto px-4 py-8 flex flex-col gap-6 items-center">
            {navItems.map(({ label, onClick }) => (
              <button
                key={label}
                onClick={onClick}
                className="text-lg text-brand-navy py-3 border-b border-brand-lavender/50 font-medium capitalize w-full text-center"
              >
                {label}
              </button>
            ))}
            {ctaOnClick && (
              <Button
                variant="solid"
                size="sm"
                className="mt-4"
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
