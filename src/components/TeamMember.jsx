import React from "react";
import chevronDown from "../assets/chevron-down-2.svg";
import trashImg from "../assets/trash.svg";

const TeamMember = ({ memberImg, memberName, memberEmail, position }) => {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-b-neutral-black-5">
      <div className="flex items-center gap-4">
        <figure className="w-12 h-12 rounded-full ">{memberImg}</figure>
        <div className="flex flex-col gap-1">
          <span className="body-medium-semibold">{memberName}</span>
          <span className="body-small-medium">{memberEmail}</span>
        </div>
      </div>
      {position === "Owner" ? (
        <span className="body-small-medium">Owner</span>
      ) : (
        <div className="flex gap-1 items-center">
          <span className="body-small-medium">{position}</span>
          <button className="hover:cursor-pointer">
            <img src={chevronDown} alt="" />
          </button>
          <button className="hover:cursor-pointer">
            <img src={trashImg} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamMember;
