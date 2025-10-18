import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import editIcon from "../assets/edit-05.svg";
import expand from "../assets/expand-01.svg";
import CloseIcon from "../assets/x-close.svg";
import loadingImg from "../assets/loading-02.svg";
import calendarImg from "../assets/calendar.svg";
import PriorityImg from "../assets/flag-03.svg";
import hourGlass from "../assets/hourglass-03.svg";
import userImg from "../assets/user-01.svg";
import StatusDropdown from "./StatusDropdown";
import DatePick from "./DatePicker";
import TimeEstimate from "./TimeEstimate";
import Priority from "./Priority";
import Button from "./Button";
import toast from "react-hot-toast";

import { useModal } from "../stores/useModal";
import { useTaskStore } from "../stores/taskStore";
import { useUserStore } from "../stores/useUserStore";
import { useProjectStore } from "../stores/useProjectStore";

const EditTaskModal = () => {
  const { editTaskModal, setEditTaskModal, taskId, setModal } = useModal(
    (s) => s
  );
  const { tasks, editTask } = useTaskStore((s) => s);
  const { users, fetchUsers } = useUserStore((s) => s);
  const { projects, fetchProjects } = useProjectStore((s) => s);

  const task = tasks.find((t) => String(t._id) === String(taskId));
  const [isLoading, setIsLoading] = useState(false);

  // local state for editable fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [timeEstimate, setTimeEstimate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignees, setAssignees] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Populate form when task is loaded
  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setStatus(task.status || "");
      setPriority(task.priority || "");
      setTimeEstimate(task.timeEstimate || "");
      setDueDate(task.dueDate || "");
      setAssignees(task.assignees || []);
    }
  }, [task]);

  if (!editTaskModal || !task) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const updatedTask = {
        title,
        description,
        status,
        priority,
        timeEstimate,
        dueDate,
        assignees,
      };

      await editTask(task._id, updatedTask);
      toast.success("Task updated successfully!");
      setEditTaskModal(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update task. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={editTaskModal}
      Class="flex flex-col gap-6 w-full max-w-[1000px] overflow-y-auto md:max-h-4/5 max-h-35/36"
    >
      <form
        onSubmit={handleSubmit}
        // className="flex flex-col gap-6 w-full max-w-[1000px] md:max-h-4/5 overflow-y-auto"
      >
        {/* HEADER */}
        <div className="w-full flex items-center justify-between border-b border-neutral-black-5 pb-6 mb-6">
          <div className="flex gap-3 items-center">
            <img src={editIcon} alt="Edit" />
            <p className="heading-5">Edit Task</p>
          </div>
          <div className="flex gap-4 items-center">
            <button type="button">
              <img src={expand} alt="Expand" />
            </button>
            <button type="button" onClick={() => setEditTaskModal(false)}>
              <img src={CloseIcon} alt="Close" />
            </button>
          </div>
        </div>

        {/* TITLE */}
        <input
          type="text"
          className="bg-none border-0 heading-3 focus:outline-0 placeholder:text-gray-400 mb-3"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* GRID FIELDS */}
        <div className="md:grid md:grid-cols-2 md:grid-rows-4 flex flex-col border-b border-neutral-black-5 pb-6 mb-6">
          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={loadingImg} alt="" />
              <span className="text-gray-400 body-medium-medium">Status</span>
            </div>
            <StatusDropdown selected={status} onSelect={setStatus} />
          </section>

          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={calendarImg} alt="" />
              <span className="text-gray-400 body-medium-medium">Due Date</span>
            </div>
            <DatePick value={dueDate} onChange={setDueDate} />
          </section>

          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={hourGlass} alt="" />
              <span className="text-gray-400 body-medium-medium">
                Time Estimate
              </span>
            </div>
            <TimeEstimate value={timeEstimate} onChange={setTimeEstimate} />
          </section>

          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={userImg} alt="" />
              <span className="text-gray-400 body-medium-medium">
                Assignees
              </span>
            </div>
            {/* <select
              multiple
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
              value={assignees}
              onChange={(e) =>
                setAssignees(
                  Array.from(e.target.selectedOptions, (opt) => opt.value)
                )
              }
            >
              {users?.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select> */}
          </section>

          <section className="w-full flex items-center justify-between max-w-[400px]">
            <div className="flex gap-2.5 items-center">
              <img src={PriorityImg} alt="" />
              <span className="text-gray-400 body-medium-medium">Priority</span>
            </div>
            <Priority selected={priority} onSelect={setPriority} />
          </section>
        </div>

        {/* DESCRIPTION */}
        <div className="mb-6">
          <span className="body-small-medium">Edit Description</span>
          <textarea
            className="w-full h-[120px] focus:outline-0 bg-neutral-black-2 px-3 py-2.5"
            placeholder="Describe your task..."
            maxLength="300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* ACTION BUTTON */}
        <div className="flex justify-end">
          <Button className="w-[150px]" isLoading={isLoading} type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTaskModal;
