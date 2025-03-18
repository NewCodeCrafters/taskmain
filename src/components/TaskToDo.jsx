import React from "react";
import TaskTop from "../components/TaskTop";
import calendar from "../assets/calendar.svg";
import dots from "../assets/dots-horizontal.svg";

const TaskToDo = () => {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[300px]">
      <TaskTop
        taskStatus="To Do"
        className="border-neutral-black-5"
        taskQuantity="4"
      />
      <div className="flex flex-col gap-3 px-5 py-4 bg-white rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <figure>
              <img src={calendar} alt="" />
            </figure>
            <span className="text-paragraph body-small-medium">Today</span>
          </div>
          <figure>
            <img src={dots} alt="" />
          </figure>
        </div>
        <h1 className="heading-4">Slicing Landing Page</h1>
      </div>
    </div>
  );
};

export default TaskToDo;
