import MobileBoardView from "./MobileBoardView";
import React, { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";
import { useTaskStore } from "../stores/taskStore";
import { useUserStore } from "../stores/useUserStore";

const OverViewBoardView = () => {
  const { tasks } = useTaskStore((s) => s);
  const { fetchUsers, users } = useUserStore((s) => s);
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(users);

  const ToDo = tasks.filter((t) => t.status === "To Do");
  const InProgress = tasks.filter((t) => t.status === "In Progress");
  const Completed = tasks.filter((t) => t.status === "Completed");
  return (
    <>
    <section className="md:flex hidden gap-6">
      <TaskColumn
        status="To Do"
        className="border-neutral-black-5"
        filteredTask={ToDo}
      />
      <TaskColumn
        status="In Progress"
        className="border-primary-500"
        filteredTask={InProgress}
      />
      <TaskColumn
        status="Completed"
        className="border-success-300"
        filteredTask={Completed}
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
