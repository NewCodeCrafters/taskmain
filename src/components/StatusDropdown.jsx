import React, { useState } from "react";
import chevronDown from "../assets/chevron-down.svg";

const options = [
  { label: "Completed", color: "#4CAF50" }, // green
  { label: "In Progress", color: "#FFC107" }, // amber
  { label: "To Do", color: "#F44336" }, // red
];

export default function StatusDropdown() {
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
            selected?.label === "Completed"
              ? "bg-success-300 "
              : selected?.label === "In Progress"
              ? "bg-warning-300 "
              : selected?.label === "To Do"
              ? "bg-gray-400 "
              : ""
          } text-white body-medium-medium px-3 py-1 rounded flex gap-2.5 items-center`}
        >
          {selected?.label || "Empty"}
          <img src={chevronDown} alt="" />
        </span>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          {options.map((option) => (
            <div
              key={option.label}
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              //   style={{ color: option.color, background: option.color }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
