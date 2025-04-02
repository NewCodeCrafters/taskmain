import React from "react";
import ActionDropdown from "./Dropdown";
import chevron from "../assets/chevron-selector-vertical.svg";

const SortBy = () => {
  return (
    <ActionDropdown
      className=""
      action={
        <figure className="w-10 h-10 border border-paragraph rounded-full grid place-items-center">
          <img src={chevron} alt="" />
        </figure>
      }
    >
      gdvghgsfvgfghvfeg
    </ActionDropdown>
  );
};

export default SortBy;
