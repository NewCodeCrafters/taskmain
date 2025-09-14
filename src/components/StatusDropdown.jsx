import React, { useState } from "react";
import chevronDown from "../assets/chevron-down.svg";
import useAddTaskStore from "../stores/useAddTaskStore";

const options = ["Completed", "In Progress", "To Do"];

export default function StatusDropdown() {
  const { status, setStatus } = useAddTaskStore((s) => s);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setStatus(option);
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
            status === "Completed"
              ? "bg-success-300 "
              : status === "In Progress"
              ? "bg-warning-300 "
              : status === "To Do"
              ? "bg-gray-400 "
              : ""
          } text-white body-medium-medium px-3 py-1 rounded flex gap-2.5 items-center`}
        >
          {status || "Empty"}
          <img src={chevronDown} alt="" />
        </span>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              //   style={{ color: option.color, background: option.color }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
