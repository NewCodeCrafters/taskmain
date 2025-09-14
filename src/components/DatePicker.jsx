import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{ maxWidth: "200px" }}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd MMMM, yyyy" // 12 August, 2025
        placeholderText="Empty" // Empty placeholder
        className="custom-date-input body-medium-semibold focus:outline-0 placeholder:text-gray-400"
      />
    </div>
  );
}
