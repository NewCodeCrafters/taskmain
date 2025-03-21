import React from "react";
import dots from "../assets/dots-horizontal.svg";
import plusSign from "../assets/plus.svg";

const TaskTop = ({ className, taskQuantity, taskStatus }) => {
  return (
    <div
      className={`flex w-full max-w-[300px] justify-between py-3 px-5 bg-white border-t-4 rounded-xl rounded-b-xl ${className}`}
    >
      <div className=" flex gap-3 items-center">
        <h1 className="heading-5">{taskStatus}</h1>
        <div className="w-2.5 h-2.5 bg-neutral-black-5 rounded-full"></div>
        <div className="w-[30px] h-[30px] bg-neutral-black-5 grid place-items-center rounded-full">
          {taskQuantity}
        </div>
      </div>
      <div className="flex gap-3">
        <img src={dots} alt="" />
        <img src={plusSign} alt="" />
      </div>
    </div>
  );
};

export default TaskTop;
