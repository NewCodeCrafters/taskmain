import React from "react";
import TaskTop from "./TaskTop";

const TaskCompleted = () => {
  return (
    <div className="w-full">
      <TaskTop
        taskStatus="Completed"
        className="border-success-300"
        taskQuantity="3"
      />
    </div>
  );
};

export default TaskCompleted;
