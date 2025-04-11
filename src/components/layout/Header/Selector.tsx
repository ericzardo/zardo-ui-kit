import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface SelectorOption {
  value: string;
  label?: string;
  icon?: string;
}

interface SelectorProps {
  options: SelectorOption[];
  current: string;
  onSelect?: (value: string) => void;
  className?: string;
}

export const Selector = ({
  options,
  current,
  onSelect,
  className = "",
}: SelectorProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = options.find((opt) => opt.value === current);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`ui:relative ui:inline-block ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="ui:flex ui:items-center ui:justify-center ui:gap-1 ui:border ui:rounded ui:text-sm ui:cursor-pointer ui:border-none ui:hover:scale-95 ui:transition-all ui:ease-out ui:duration-200 ui:hover:border-brand-purple"
      >
        {currentOption?.icon && <span>{currentOption.icon}</span>}
        {currentOption?.label && (
          <span className="ui:hidden sm:ui:inline">{currentOption.label}</span>
        )}
        <ChevronDown className="ui:w-4 ui:h-4" />
      </button>

      {open && (
        <div className="ui:absolute ui:mt-2 ui:bg-white ui:rounded ui:shadow-md ui:border ui:border-brand-lavender ui:z-50 ui:min-w-[150px] ui:w-max">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setOpen(false);
                onSelect?.(opt.value);
              }}
              className="ui:flex ui:items-center ui:gap-2 ui:px-3 ui:py-2 ui:w-full ui:text-left ui:hover:bg-brand-lavender/30 ui:text-sm ui:cursor-pointer ui:transition-all ui:duration-200 ui:ease-out"
            >
              {opt.icon && <span className="ui:text-lg">{opt.icon}</span>}
              {opt.label && <span className="ui:text-sm">{opt.label}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
