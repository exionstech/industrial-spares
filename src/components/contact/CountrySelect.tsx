"use client";

import { Check, ChevronDown } from "lucide-react";
import type React from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

interface CountrySelectProps {
  options: readonly string[];
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  id?: string;
  labelledBy?: string;
}

/*
 * Single-select styled like CategoryMultiSelect, so the RFQ form no longer drops
 * to the browser's native dropdown. The list runs to ~250 countries, so the panel
 * carries a filter - typing to jump through a native select is not available once
 * the options are ours to render.
 */
export const CountrySelect: React.FC<CountrySelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select country...",
  id,
  labelledBy,
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
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

  /* Opening lands the caret in the filter, so a country can be typed straight away. */
  useEffect(() => {
    if (open) {
      searchRef.current?.focus();
    } else {
      setQuery("");
    }
  }, [open]);

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle ? options.filter((option) => option.toLowerCase().includes(needle)) : options;
  }, [options, query]);

  const choose = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-controls={listId}
        aria-expanded={open}
        aria-labelledby={labelledBy}
        className="flex h-11 w-full items-center justify-between gap-2 border border-brand-line bg-white px-4 text-left text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
        id={id}
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className={value ? "text-brand-dark" : "text-[#9ca3af]"}>{value || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-brand-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-full border border-brand-line bg-white shadow-lg">
          <div className="border-brand-line border-b p-2">
            <input
              aria-label="Search countries"
              className="h-9 w-full border border-brand-line px-3 text-brand-dark text-sm placeholder:text-[#9ca3af] focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search country..."
              ref={searchRef}
              type="text"
              value={query}
            />
          </div>

          <ul className="max-h-60 overflow-y-auto" id={listId}>
            {matches.map((option) => {
              const isSelected = option === value;
              return (
                <li key={option}>
                  <button
                    aria-pressed={isSelected}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-bg-light ${
                      isSelected ? "text-brand-red" : "text-brand-dark"
                    }`}
                    onClick={() => choose(option)}
                    type="button"
                  >
                    {option}
                    {isSelected && <Check className="h-4 w-4 flex-shrink-0" />}
                  </button>
                </li>
              );
            })}

            {matches.length === 0 && (
              <li className="px-4 py-2.5 text-brand-muted text-sm">No country matches that.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
