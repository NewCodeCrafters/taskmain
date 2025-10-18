import React, { useEffect } from "react";
import Modal from "./modal";
import TaskSection from "./TaskSection";
import edit from "../assets/edit-05.svg";
import star from "../assets/star-01.svg";
import expand from "../assets/expand-01.svg";
import loading from "../assets/loading-02.svg";
import close from "../assets/x-close.svg";
import user from "../assets/user-01.svg";
import calendar from "../assets/calendar.svg";
import flag from "../assets/flag-03.svg";
import hourglass from "../assets/hourglass-03.svg";
import Button from "./Button";
import TaskListItem from "./TaskListItems";
import ImageFile from "./ImageFile";
import { useModal } from "../stores/useModal";
import { X } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useProjectStore } from "../stores/useProjectStore";
import useAddTaskStore from "../stores/useAddTaskStore";
import { useTaskStore } from "../stores/taskStore";
// import { useAddTaskStore } from "../stores/useAddTaskStore";

const TaskInfoModal = () => {
  const { tasks } = useTaskStore((s) => s);
  console.log(tasks);
  // const { projectName } = useProjectStore((s) => s);
  const { modal, setModal, taskId, setEditTaskModal, editTaskModal } = useModal(
    (s) => s
  );
  const { users } = useUserStore((s) => s);
  const { dateCreated } = useAddTaskStore((s) => s);
  const task = tasks.find((task) => task?._id === taskId);
  console.log(taskId);

  if (!task) {
    return null; // prevents "task.title is undefined" error
  }
  // const taskAssignees = task.assignees;
  // // useEffect(()=> {

  // // })
  // const tasksFilter = users?.filter((user) => taskAssignees?.includes(user.id));
  const projectName = task.projectId.name;
  const handleEditModal = () => {
    setEditTaskModal(true);
    console.log("My name is Samuel");
    setModal(false);
  };
  return (
    <div className="">
      <Modal
        isOpen={modal}
        onClick={(e) => e.stopPropagation()}
        Class="flex flex-col gap-6 w-full max-w-[1000px] overflow-y-auto md:max-h-4/5 max-h-35/36"
      >
        <div className="flex items-center justify-between border-b border-neutral-black-5 pb-6 mb-6 ">
          <h1 className="heading-4 md:heading-5 text-black">{projectName}</h1>
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-1">
              <span className="hidden md:flex body-small-regular text-paragraph">
                {dateCreated}
              </span>
            </div>
            <Button variant="black " className="hidden md:flex">
              Share
            </Button>
            <img src={star} alt="" />
            <button className="hover:cursor-pointer" onClick={handleEditModal}>
              <img src={edit} alt="" />
            </button>
            <img
              className="cursor-pointer"
              src={expand}
              alt="" // className="absolute top-0 right-0"
            />
            <X className="cursor-pointer" onClick={() => setModal(false)} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="heading-4">{task.title}</h1>
          <div className="flex flex-col gap-3 md:flex-row md:gap-[150px] border-b border-neutral-black-5 dark:border-neutral-600 pb-6 mb-6">
            <div className="flex flex-col gap-3 w-full">
              <TaskListItem
                icon={loading}
                title="Status"
                taskListInfo={task.status}
                className={`py-1 px-3 ${
                  task.status === "Completed" && "bg-success-300"
                }  ${task.status === "In Progress" && "bg-secondary-300"}
                ${task.status === "To Do" && "bg-primary-200"} rounded-lg`}
              />
              <TaskListItem
                icon={calendar}
                title="Due date"
                taskListInfo={task.dueDate}
              />
              <TaskListItem
                icon={hourglass}
                title="Time Estimate  "
                taskListInfo={task.timeEstimate}
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              {/* <TaskListItem
                icon={user}
                title="Assignees"
                taskListInfo={tasksFilter?.map((task) => (
                  <figure className="w-8 h-8 rounded-full border border-white shadow-2xl">
                    <img
                      src={task.avatar}
                      key={task.id}
                      className=" rounded-full"
                    />
                  </figure>
                ))} 
              /> */}
              <TaskListItem
                icon={calendar}
                title="Project"
                taskListInfo={projectName}
                className="px-3 py-1 bg-neutral-black-5 rounded-lg"
              />
              <TaskListItem
                icon={flag}
                title="Priority"
                taskListInfo={task.priority}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <h1 className="heading-5">Detail</h1>

          <p className="body-medium-medium w-full max-w-[962px]">
            {task.description || "No detail"}
          </p>
        </div>
        {/* {task.image && (
          <div className="flex flex-col gap-4">
            <h1 className="heading-5">Attachments</h1>
            <div className="flex gap-5 flex-wrap">
              {task.image.map((task) => (
                <ImageFile task={task} key={task.id} />
              ))}
            </div>
          </div>
        )} */}
      </Modal>
    </div>
  );
};

export default TaskInfoModal;
