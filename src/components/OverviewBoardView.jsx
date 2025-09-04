import React, { useState } from "react";
// import plusDark from "../assets/plus.svg";
import TaskColumn from "./TaskColumn";
import { useTaskStore } from "../stores/taskStore";
import MobileBoardView from "./MobileBoardView";

const OverViewBoardView = () => {
  const { tasks } = useTaskStore((s) => s);
  // For the mobile view
  
  return (
    <>
    <section className="md:flex hidden gap-6">
      <TaskColumn
        status="To Do"
        className="md:border-neutral-black-5"
        filteredTask={tasks.filter((t) => t.status === "To Do")}
      />
      <TaskColumn
        status="In Progress"
        className="md:border-primary-500"
        filteredTask={tasks.filter((t) => t.status === "In Progress")}
      />
      <TaskColumn
        status="Completed"
        className="md:border-success-300"
        filteredTask={tasks.filter((t) => t.status === "To Do")}
      />
      {/* <figure className="w-full max-w-[102px] h-[50px] border rounded-[100px] border-neutral-black-7 grid place-items-center ">
        <img src={plusDark} alt="" />
      </figure> */}
    </section>

    <section>
      <MobileBoardView />
    </section>
    </>
  );
};

export default OverViewBoardView;
