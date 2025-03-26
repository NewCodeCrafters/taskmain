import React from "react";

const TaskSection = () => {
  return (
    <div className="flex gap-2 w-auto">
      <span className=" text-paragraph hidden lg:grid">Development Stuff</span>
      <span className="hidden lg:grid">/</span>
      <span className="hidden lg:grid">Team daily Task</span>
    </div>
  );
};

export default TaskSection;
