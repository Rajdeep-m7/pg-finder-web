"use client";
import React, { useEffect, useRef, useState } from "react";

type DropdownOption = {
  value: string;
  label: string;
};

const CustomDropdown = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
}) => {
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
};

const OwnerForm = () => {
  const [step, setStep] = useState<number>(1);
  const [gender, setGender] = useState("male");
  const [occupation, setOccupation] = useState("single");

  return (
    <div>
        <div className={`bg-white rounded-lg p-5 shadow-md my-5 ${step === 1 ? "block" : "hidden"}`}>
          <h1 className="text-lg font-bold">Property Basics</h1>
          <form className="p-4">
            <p className="text-sm font-medium py-3">Property Name</p>
            <input
              className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
              type="text"
              placeholder="Enter Property Name"
            />
            <p className="text-sm font-medium py-3">Property Address</p>
            <input
              className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
              type="text"
              placeholder="Enter Property Address"
            />
            <p className="text-sm font-medium py-3">Property City</p>
            <input
              className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
              type="text"
              placeholder="Enter Property City"
            />
          </form>
        </div>
        <div className={`bg-white rounded-lg p-5 shadow-md my-5 ${step === 2 ? "block" : "hidden"}`}>
          <h1 className="text-lg font-bold">Property Details</h1>
          <form className="p-4">
            <CustomDropdown
              label="Gender"
              value={gender}
              onChange={setGender}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "unisex", label: "Unisex" },
              ]}
            />
            <CustomDropdown
              label="Default Occupation"
              value={occupation}
              onChange={setOccupation}
              options={[
                { value: "single", label: "Single" },
                { value: "double", label: "Double" },
                { value: "triple", label: "Triple" },
              ]}
            />
            <p className="text-sm font-medium py-3">Number of Rooms</p>
            <input
              className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
              type="number"
              placeholder="Enter Number of Rooms"
            />
            <p className="text-sm font-medium py-3">Property Description</p>
            <textarea
              className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
              placeholder="Enter Property Description"
            />
          </form>
        </div>
        <div className={`flex justify-between w-full ${step === 1 ? "justify-end" : "justify-between"}`}>
          <button onClick={() => setStep(step - 1)} className={`text-black px-4 py-2 rounded-md border border-gray-400 ${step === 1 ? "hidden" : "block"}`}>Previous</button>
          <button onClick={() => setStep(step + 1)} className="bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-500 ">
            {step === 4 ? "Submit" : "Continue"}
          </button>
        </div>
    </div>
  );
};
export default OwnerForm;
