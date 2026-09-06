"use client";

import { Check, ChevronDown, X } from "lucide-react";
import type React from "react";
import { useEffect, useId, useRef, useState } from "react";

interface CategoryMultiSelectProps {
  options: readonly string[];
  selected: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  labelledBy?: string;
}

/*
 * Multi-select that shows each choice as a removable badge inside the field
 * itself. The badges and the open/close trigger are separate buttons rather
 * than nested ones, so both stay keyboard reachable.
 */
export const CategoryMultiSelect: React.FC<CategoryMultiSelectProps> = ({
  options,
  selected,
  onChange,
  placeholder = "Select categories...",
  labelledBy,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const toggle = (option: string) =>
    onChange(
      selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option],
    );

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex min-h-11 w-full flex-wrap items-center gap-1.5 border border-brand-line bg-white px-3 py-2 focus-within:border-brand-red focus-within:ring-1 focus-within:ring-brand-red">
        {selected.map((option) => (
          <span
            className="flex items-center gap-1.5 border border-brand-red bg-brand-red/10 py-0.5 pr-1 pl-2 text-brand-red text-sm"
            key={option}
          >
            {option}
            <button
              aria-label={`Remove ${option}`}
              className="flex h-4 w-4 items-center justify-center transition-colors hover:text-brand-dark"
              onClick={() => toggle(option)}
              type="button"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}

        <button
          aria-controls={listId}
          aria-expanded={open}
          aria-labelledby={labelledBy}
          className="flex min-w-[120px] flex-1 items-center justify-between gap-2 text-left"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <span className="text-[#9ca3af] text-sm">
            {selected.length === 0 ? placeholder : "Add another..."}
          </span>
          <ChevronDown
            className={`h-4 w-4 flex-shrink-0 text-brand-muted transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <ul
          className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto border border-brand-line bg-white shadow-lg"
          id={listId}
        >
          {options.map((option) => {
            const isSelected = selected.includes(option);
            return (
              <li key={option}>
                <button
                  aria-pressed={isSelected}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-bg-light ${
                    isSelected ? "text-brand-red" : "text-brand-dark"
                  }`}
                  onClick={() => toggle(option)}
                  type="button"
                >
                  {option}
                  {isSelected && <Check className="h-4 w-4 flex-shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
