import React from "react";
import TaskTop from "./TaskTop";
import TaskCard from "./TaskCard";
import { useTaskStore } from "../stores/taskStore";
import { useDrop } from "react-dnd";

const TaskColumn = ({ status, className, filteredTask, image }) => {
  const { editTask } = useTaskStore((s) => s);
  const updateStatus = {
    status: status,
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => editTask(item.id, updateStatus),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  console.log(
    "Column:",
    status,
    filteredTask.map((t) => ({ id: t._id, status: t.status }))
  );

  return (
    <div
      className={`flex flex-col gap-5 w-full max-w-[300px] ${
        isOver ? "bg-gray-100 dark:bg-neutral-black-10/10" : ""
      }`}
      ref={drop}
    >
      <TaskTop
        taskStatus={status}
        className={className}
        taskQuantity={filteredTask.length}
      />

      {filteredTask.map((task) => (
        <TaskCard key={task._id} task={task} image={image} />
      ))}
    </div>
  );
};

export default TaskColumn;
