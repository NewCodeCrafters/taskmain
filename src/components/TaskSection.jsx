import React from "react";

const TaskSection = () => {
  return (
    <div className="flex gap-2 w-auto">
      <span className=" text-paragraph hidden lg:grid heading-5">
        Development Stuff
      </span>
      <span className="hidden lg:grid heading-5">/</span>
      <span className="hidden lg:grid heading-5">Team daily Task</span>
    </div>
  );
};

export default TaskSection;
