import React, { useState } from "react";
import Modal from "./modal";
import filePlus from "../assets/file-plus-03.svg";
import expand from "../assets/expand-01.svg";
import CloseIcon from "../assets/x-close.svg";
import CreateTaskInput from "./CreateTaskInput";
import loadingImg from "../assets/loading-02.svg";
import calendarImg from "../assets/calendar.svg";
import PriorityImg from "../assets/flag-03.svg";
import hourGlass from "../assets/hourglass-03.svg";
import userImg from "../assets/user-01.svg";
import ActionDropdown from "./Dropdown";
import DatePicker from "react-datepicker";
import DatePick from "./DatePicker";
import StatusDropdown from "./StatusDropdown";
import TimeEstimate from "./TimeEstimate";
import Priority from "./Priority";

// const status = ["Completed", "In Progress", "To Do"];

const CreateTaskModal = () => {
  const [close, setClose] = useState(false);
  const onClose = () => {
    setClose(!close);
  };
  return (
    <div>
      <Modal isOpen Class="flex flex-col gap-6 w-full max-w-[1000px]">
        <div className="w-full flex items-center justify-between border-b border-neutral-black-5 pb-6 mb-6">
          <div className="flex gap-3">
            <img src={filePlus} alt="filePlus" />
            <p className="heading-5">Create New Task</p>
          </div>
          <div className="flex gap-4 items-center">
            <button>
              <img src={expand} alt="" />
            </button>
            <button onClick={onClose}>
              <img src={CloseIcon} alt="" />
            </button>
          </div>
        </div>
        <input
          type="text"
          className="bg-none border-0 heading-3 focus:outline-0  placeholder:text-gray-400 mb-3
          "
          placeholder="Task Name"
        />
        <div className="md:grid md:grid-cols-2 md:grid-rows-4 flex flex-col gap-3 border-b border-neutral-black-5 pb-6 mb-6">
          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={loadingImg} />
              <span className="text-gray-400 body-medium-medium">Status</span>
            </div>
            <StatusDropdown />
          </section>
          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={calendarImg} />
              <span className="text-gray-400 body-medium-medium">Due Date</span>
            </div>
            <DatePick />
          </section>
          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={hourGlass} />
              <span className="text-gray-400 body-medium-medium">
                Time Estimate
              </span>
            </div>
            <TimeEstimate />
          </section>
          <CreateTaskInput Title="Assignees" image={<img src={userImg} />} />

          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={PriorityImg} />
              <span className="text-gray-400 body-medium-medium">Priority</span>
            </div>
            <Priority />
          </section>
        </div>
        <div>
          <span className="body-small-medium">Add Description</span>
          <input
            type="text"
            className="w-full h-[120px] focus:outline-0 bg-neutral-black-2 px-3 py-2.5"
            placeholder="Placeholder"
            maxLength={"200"}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreateTaskModal;
