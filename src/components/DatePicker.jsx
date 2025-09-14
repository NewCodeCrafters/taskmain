import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAddTaskStore from "../stores/useAddTaskStore";

export default function CustomDatePicker() {
  function formatDate(date) {
    if (!date) return "";

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  const { dueDate, setDueDate } = useAddTaskStore((s) => s);

  return (
    <div style={{ maxWidth: "200px" }}>
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(formatDate(date))}
        dateFormat="dd MMMM, yyyy" // 12 August, 2025
        placeholderText="Empty" // Empty placeholder
        className="custom-date-input body-medium-semibold focus:outline-0 placeholder:text-gray-400"
      />
    </div>
  );
}
