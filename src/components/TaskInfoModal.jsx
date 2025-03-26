import React from "react";
import Modal from "./modal";
import TaskSection from "./TaskSection";
import edit from "../assets/edit-05.svg";
import star from "../assets/star-01.svg";
import expand from "../assets/expand-01.svg";
import loading from "../assets/loading-02.svg";
import close from "../assets/x-close.svg";
import Button from "./Button";
import TaskListItem from "./TaskListItems";

const TaskInfoModal = () => {
  return (
    <div className="">
      <Modal isOpen Class="flex flex-col gap-6 w-full max-w-[1000px]">
        <div className="flex items-center justify-between">
          <TaskSection />
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-1">
              <img src={edit} alt="" />
              <span className="body-small-regular text-paragraph">
                Created on 2 March, 2024
              </span>
            </div>
            <Button variant="black">Share</Button>
            <img src={star} alt="" />
            <img src={edit} alt="" />
            <img src={expand} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <h1 className="heading-4">Create UI E-Commerce</h1>
        </div>
        <div className="flex gap-[150px] w-full">
          <div className="flex flex-col gap-3 w-full">
            <TaskListItem icon={loading} title="Status" taskListInfo="empty" />
            <TaskListItem icon={loading} title="Status" taskListInfo="empty" />
            <TaskListItem icon={loading} title="Status" taskListInfo="empty" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <TaskListItem icon={loading} title="Status" taskListInfo="empty" />
            <TaskListItem icon={loading} title="Status" taskListInfo="empty" />
            <TaskListItem icon={loading} title="Status" taskListInfo="empty" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaskInfoModal;
