import React, { useState } from "react";
import useAddTaskStore from "../stores/useAddTaskStore";

const options = ["High", "Mid", "Low"];

export default function Priority() {
  const { priority, setPriority } = useAddTaskStore((s) => s);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setPriority(option);
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
            priority === "High"
              ? "bg-success-300 text-white"
              : priority === "Mid "
              ? "bg-warning-300  text-white"
              : priority === "Low"
              ? "bg-gray-400  text-white"
              : ""
          } text-gray-400 body-medium-medium px-3 py-1 rounded flex gap-2.5 items-center`}
        >
          {priority || "Empty"}
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
