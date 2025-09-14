import React from "react";
// import plusDark from "../assets/plus.svg";
import TaskColumn from "./TaskColumn";

const DailytaskBoardView = ({ filteredTask }) => {
  return (
    <section className="flex gap-6">
      <TaskColumn
        status="To Do"
        className="border-neutral-black-5"
        filteredTask={filteredTask.filter((t) => t.status === "To Do")}
      />
      <TaskColumn
        status="In Progress"
        className="border-primary-500"
        filteredTask={filteredTask.filter((t) => t.status === "In Progress")}
      />
      <TaskColumn
        status="Completed"
        className="border-success-300"
        filteredTask={filteredTask.filter((t) => t.status === "Completed")}
      />
      {/* <figure className="w-full max-w-[102px] h-[50px] border rounded-[100px] border-neutral-black-7 grid place-items-center ">
        <img src={plusDark} alt="" />
      </figure> */}
    </section>
  );
};

export default DailytaskBoardView;
