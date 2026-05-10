"use client";

import React, { useEffect, useRef, useState } from "react";

export type DropdownOption = {
  value: string;
  label: string;
};

export function CustomDropDown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const selectedLabel =
    options.find((option) => option.value === value)?.label || "Select";

  return (
    <div className="py-3" ref={wrapperRef}>
      <p className="mb-2 text-sm font-medium">{label}</p>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100"
      >
        <span>{selectedLabel}</span>
        <span
          className={`text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="mt-2 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-3 text-left text-sm transition-colors ${
                option.value === value
                  ? "bg-amber-50 text-amber-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
