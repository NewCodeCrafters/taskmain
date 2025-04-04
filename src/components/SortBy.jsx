import React from "react";
import ActionDropdown from "./Dropdown";
import chevron from "../assets/chevron-selector-vertical.svg";
import DropdownLink from "./DropdownLink";

const SortBy = () => {
  return (
    <ActionDropdown
      className="bg-white w-[219px] rounded-xl flex flex-col gap-1 p-3 justify-start"
      action={
        <figure className="w-10 h-10 border border-paragraph rounded-full grid place-items-center hover:cursor-pointer">
          <img src={chevron} alt="" />
        </figure>
      }
    >
      <div className="px-3 pb-[14px] pt-1 text-paragraph body-Xsmall-medium border-b border-neutral-black-5">
        Sort by
      </div>
      <DropdownLink link="Status" />
      <DropdownLink link="Assignee" />
      <DropdownLink link="Priority" />
      <DropdownLink link="Due Date" />
      <DropdownLink link="Start Date" />
      <DropdownLink link="Duration" />
    </ActionDropdown>
  );
};

export default SortBy;
