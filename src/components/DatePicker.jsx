import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      className="block text-base md:text-sm bg-white border border-gray-300 rounded shadow-sm max-w-[500px] p-2"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      forceShowMonthNavigation
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="flex justify-between items-center px-2 py-1">
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className="p-1"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-medium text-sm">
            {date.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className="p-1"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    />
  );
};

export default DatePick;
