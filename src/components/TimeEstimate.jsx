import React, { useState } from "react";
import chevronDown from "../assets/chevron-down.svg";

const options = ["3 days", "1 week", "2 weeks", "1 month", "3 months"];

export default function TimeEstimate() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-52">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" cursor-pointer px-3 py-1 flex gap-2.5"
      >
        <span
          className={`${
            selected
              ? "body-medium-semibold"
              : "body-medium-medium text-gray-400"
          }`}
        >
          {selected || "Empty"}
        </span>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
