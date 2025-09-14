import React, { useState } from "react";

const options = ["High", "Mid", "Low"];

export default function Priority() {
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
            selected === "High"
              ? "bg-success-300 "
              : selected === "Mid"
              ? "bg-warning-300 "
              : selected === "Low"
              ? "bg-gray-400"
              : "text-gray-400 px-0 py-0"
          } text-white body-medium-medium px-3 py-1 rounded flex gap-2.5 items-center`}
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
