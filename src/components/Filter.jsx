import React from "react";
import ActionDropdown from "./Dropdown";
import filter from "../assets/filter-lines.svg";
import OptionDropdown from "./OptionDropdown";
import calendar from "../assets/calendar.svg";
import { ListFilter } from "lucide-react";

const items = ["Status", "Due date", "Created by", "Time estimate"];
const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
const time = ["1s", "2s", "3s", "4s", "5s"];

const Filter = () => {
  return (
    <ActionDropdown
      className="p-4 flex gap-4 flex-col rounded-lg"
      action={
        <figure className="w-10 h-10 border border-paragraph rounded-full grid place-items-center hover:cursor-pointer dark:text-white">
          <ListFilter />
        </figure>
      }
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="heading-5">Filters</span>
          <img src="" alt="" />
        </div>
        <button className="text-error-50 body-small-semibold hover:cursor-pointer">
          Clear All
        </button>
      </div>
      <div className="flex items-center gap-2.5">
        <OptionDropdown
          leftIcon={<img src={calendar} />}
          className="w-[130px] lg:w-[219px]"
          items={items}
        />
        <OptionDropdown items={time} className="w-[80px]" />
        <OptionDropdown items={weeks} className="w-[130px] lg:w-[219px]" />
        {/* <CreateTaskModal /> */}
      </div>
    </ActionDropdown>
  );
};

export default Filter;
