import React from "react";
// import plusDark from "../assets/plus.svg";
import TaskColumn from "../components/TaskColumn";

const BoardView = () => {
  return (
    <section className="flex gap-6">
      <TaskColumn status="To Do" className="border-neutral-black-5" />
      <TaskColumn status="In Progress" className="border-primary-500" />
      <TaskColumn status="Completed" className="border-success-300" />
      {/* <figure className="w-full max-w-[102px] h-[50px] border rounded-[100px] border-neutral-black-7 grid place-items-center ">
        <img src={plusDark} alt="" />
      </figure> */}
    </section>
  );
};

export default BoardView;
