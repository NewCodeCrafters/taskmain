import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAddTaskStore from "../stores/useAddTaskStore";

export default function CustomDatePicker() {
  const { dueDate, setDueDate } = useAddTaskStore((s) => s);

  return (
    <div style={{ maxWidth: "250px" }}>
      <DatePicker
        selected={dueDate ? new Date(dueDate) : null} // convert ISO back to Date
        onChange={(date) => setDueDate(date ? date.toISOString() : "")} // save ISO
        dateFormat="dd MMMM, yyyy" // show normal format in the input
        placeholderText="Empty"
        className="custom-date-input body-medium-semibold focus:outline-0 placeholder:text-gray-400"
      />
    </div>
  );
}
