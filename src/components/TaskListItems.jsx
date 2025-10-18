import React from "react";

const TaskListItems = ({ icon, title, taskListInfo, className }) => {
  return (
    <div className="flex gap-6">
      <div className="flex gap-2.5 items-center w-[150px]">
        <img src={icon} alt="" />
        <span className="body-medium-medium dark:text-neutral-400 text-paragraph">{title}</span>
      </div>
      <section className={`flex text-body-medium-semibold ${className}`}>
        {taskListInfo}
      </section>
    </div>
  );
};

export default TaskListItems;
