import React from "react";
import TaskTop from "../components/TaskTop";

const TaskInProgress = () => {
  return (
    <div className="w-full">
      {" "}
      <TaskTop
        taskStatus="In Progress"
        className="border-primary-500"
        taskQuantity="7"
      />
    </div>
  );
};

export default TaskInProgress;
