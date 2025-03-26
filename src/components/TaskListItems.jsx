import React from "react";

const TaskListItems = ({ icon, title, taskListInfo }) => {
  return (
    <div className="flex gap-2.5">
      <div className="flex gap-2.5 items-center w-[150px]">
        <img src={icon} alt="" />
        <span className="body-medium-medium text-paragraph">{title}</span>
      </div>
      <section>{taskListInfo}</section>
    </div>
  );
};

export default TaskListItems;
