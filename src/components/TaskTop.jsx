import React, { useState } from "react";
import dots from "../assets/dots-horizontal.svg";
import plusSign from "../assets/plus.svg";
import { Plus } from "lucide-react";

const TaskTop = ({ 
  className, 
  taskQuantity, 
  taskStatus,
  onChange,
  show
 }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      className={`flex md:w-[300px]  dark:text-white justify-between py-3 px-5 md:bg-white md:border-x-transparent md:border-b-transparent md:border-t-4 border-2 rounded-full w-fit md:rounded-xl  md:rounded-b-xl md:dark:bg-black ${
        show === taskStatus ? 'bg-primary-300 border-none' : 'bg-transparent border-neutral-500'
      }  ${className}`}
      onClick={() => {
        setIsActive(prev => !prev)
        onChange(prev => prev = taskStatus)
      }}
    >
      <div className="flex items-center gap-3 whitespace-nowrap">
        <h1 className="heading-5">{taskStatus}</h1>
        <div className="md:w-2.5 md:h-2.5 hidden md:bg-neutral-black-5 md:rounded-full"></div>
        <div className="w-[30px] h-[30px] dark:text-black bg-neutral-black-5 grid place-items-center rounded-full">
          {taskQuantity}
        </div>
      </div>
      <div className="md:flex gap-3 hidden">
        <img src={dots} alt="" />
        <Plus size={30} />
      </div>
    </div>
  );
};

export default TaskTop;
