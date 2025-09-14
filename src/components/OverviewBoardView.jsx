import  { useState, useEffect } from "react";
import { useTaskStore } from "../stores/taskStore";
import MobileBoardView from "./MobileBoardView";
import TaskColumn from "./TaskColumn";
import { useUserStore } from "../stores/useUserStore";

  // For the mobile view
  
// import plusDark from "../assets/plus.svg";


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

  const ToDoAssignees = ToDo.map((task) => task.assignees);
  const InProgessAssignes = InProgress.map((task) => task.assignees);
  const InProgessAssignees = InProgessAssignes.map((t) => t);
  const CompletedAssignees = Completed.map((task) => task.assignees);

  // const usersId = users.map((user) => user.id);

  const ImageInProgress = users.find((user) => user.id === InProgessAssignees);
  console.log(ImageInProgress);
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

        className="border-neutral-black-5"
        filteredTask={ToDo}
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
