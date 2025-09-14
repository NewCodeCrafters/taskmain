import React from "react";
import calendar from "../assets/calendar.svg";
import dots from "../assets/dots-horizontal.svg";
import plus from "../assets/plus.svg";
import messages from "../assets/message-text-square-01.svg";
import { useDrag } from "react-dnd";
import TaskInfoModal from "./taskInfoModal";
import { useModal } from "../stores/useModal";

const TaskCard = ({ task }) => {
  const { setModal, setTaskId } = useModal((s) => s);
  const handleTaskId = (id) => {
    setTaskId(id);
    setModal(true);
  };

  // console.log(modal);
  // console.log(task);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={`flex flex-col gap-3 px-5 py-4 dark:bg-black dark:text-white bg-white rounded-xl ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
      ref={drag}
      onClick={() => handleTaskId(task.id)}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <figure>
            <img src={calendar} alt="" />
          </figure>
          <span className="text-paragraph body-small-medium">
            {task.dueDate}
          </span>
        </div>
        <figure>
          <img src={dots} alt="" />
        </figure>
      </div>
      <h1 className="heading-4">{task.title}</h1>
      {task.image && (
        <img
          src={task.image}
          className="h-[200px] w-full rounded-lg object-cover"
        />
      )}
      <div className="flex items-center gap-2.5">
        {/* {task.tags.map((tag, index) => (
          <span
            key={index}
            className="body-small-medium text-primary-500 py-1 px-3 bg-primary-50 rounded-full"
          >
            {tag}
          </span>
        ))} */}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex">
            {/* {task.assignees.map((user) => (
              <figure className="w-full max-w-12 max-h-12 rounded-full overflow-hidden ">
                <img src={user.avatar} alt={user.name} key={user.id} />
              </figure>
            ))} */}
          </div>
          <button>
            <img src={plus} alt="" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <img src={messages} alt="" />
          <span className="body-small-medium text-paragraph">7</span>
        </div>
        <TaskInfoModal />
      </div>
    </div>
  );
};

export default TaskCard;
