import React from "react";
import TaskTop from "./TaskTop";
import TaskCard from "./TaskCard";
import { useTaskStore } from "../stores/taskStore";
import { useDrop } from "react-dnd";

const TaskColumn = ({ status, className, filteredTask }) => {
  const { updateTaskStatus } = useTaskStore((s) => s);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => updateTaskStatus(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  return (
    <div
      className={`flex flex-col gap-5 w-full max-w-[300px] ${
        isOver ? "bg-gray-100" : ""
      }`}
      ref={drop}
    >
      <TaskTop
        taskStatus={status}
        className={className}
        taskQuantity={filteredTask.length}
      />
      {filteredTask.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
