// import React, { useState } from "react";
import Modal from "./Modal";
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
// import attachImg from "../assets/attachment-01.svg";
import { useModal } from "../stores/useModal";
import Button from "./Button";
import useAddTaskStore from "../stores/useAddTaskStore";
import { useTaskStore } from "../stores/taskStore";
import { useProjectStore } from "../stores/useProjectStore";
import AddAssignees from "./AddAssignees";
import { useEffect, useState } from "react";
import { useUserStore } from "../stores/useUserStore";
// import usePerUSerStore from "../stores/usePerUserStore";
import toast from "react-hot-toast";
import TaskSucessModal from "./TaskSucessModal";
// import { preview } from "vite";

const CreateTaskModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setTaskSuccessModal } = useModal((s) => s);
  const { taskName, setTaskName, description, setDescription } =
    useAddTaskStore((s) => s);
  // const { user } = usePerUSerStore((s) => s);
  const { currentProjectId, projects, fetchProjects, setProjectName } =
    useProjectStore();
  useEffect(() => {
    setProjectName(projectNameFound);
    fetchUsers();
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findProject = projects?.find(
    (p) => String(currentProjectId) === String(p.id)
  );
  const projectNameFound = findProject?.name;
  const { addTask, fetchTasks } = useTaskStore((s) => s);
  const { fetchUsers } = useUserStore((s) => s);

  const { setModalAddTask, modalAddTask } = useModal((s) => s);
  const {
    Status,
    timeEstimate,
    priority,
    dueDate,
    resetForm,
    // selectedUsers,
    // image,
    // setImage,
  } = useAddTaskStore((s) => s);
  // const now = new Date();
  // const date = now.toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });
  // const assignees = selectedUsers.map((user) => user.id);
  // const handleImageChange = (e) => {
  //   const selected = e.target.files[0];
  //   if (selected) {
  //     // setFile(selected);
  //     setImage(URL.createObjectURL(selected));
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation check
    if (
      !taskName.trim() ||
      !description.trim() ||
      !currentProjectId ||
      !dueDate ||
      !priority ||
      !timeEstimate ||
      !Status
    ) {
      toast.error("Please fill in all required fields before submitting.");
      return; // stop form submission
    }
    setIsLoading(true);
    const Task = {
      title: taskName,
      description: description,
      projectId: currentProjectId,
      assignees: [""],
      dueDate: dueDate,
      priority: priority,
      timeEstimate: timeEstimate,
      image: "https://example.com/homepage.png",
      status: Status,
      progress: 0,
    };
    try {
      const result = await addTask(Task);
      console.log(result);
      console.log(result.data);
      if (result.status === 201) {
        console.log("Message:", result.data.message);
        console.log("Created Task:", result.data.task);
        resetForm();
        setModalAddTask(false);
        setTaskSuccessModal(true);
        await fetchTasks();
      } else {
        toast.error("Failed to create task, try again");
      }
    } catch (err) {
      console.error("Error Creating Task", err);
    } finally {
      setIsLoading(false);
    }
  };
  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     handleSubmit();
  //   }
  // };

  return (
    <Modal
      isOpen={modalAddTask}
      Class=" h-full max-h-[90.0vh] overflow-y-auto rounded-2xl"
    >
      <form onSubmit={handleSubmit} className="w-full flex flex-col md:gap-6">
        <div className=" flex items-center justify-between border-b border-neutral-black-5 pb-6 mb-6">
          <div className="flex gap-3">
            <img src={filePlus} alt="filePlus" />
            <p className="heading-5">Create New Task</p>
          </div>
          <div className="flex gap-4 items-center">
            <button>
              <img src={expand} alt="" />
            </button>
            <button onClick={() => setModalAddTask(false)}>
              <img src={CloseIcon} alt="" />
            </button>
          </div>
        </div>
        <input
          type="text"
          className="bg-none border-0 heading-3 focus:outline-0  placeholder:text-gray-400 mb-3
          "
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <div className="md:grid md:grid-cols-2 md:grid-rows-4 flex flex-col gap-3 border-b border-neutral-black-5 pb-6 mb-6 w-full">
          <section className="w-full flex items-center justify-between ">
            <div className="flex gap-2.5 items-center">
              <img src={loadingImg} />
              <span className="text-gray-400 body-medium-medium">Status</span>
            </div>
            <StatusDropdown />
          </section>
          <section className="w-full flex items-center justify-between ">
            <div className="flex gap-2.5 items-center">
              <img src={calendarImg} />
              <span className="text-gray-400 body-medium-medium">Due Date</span>
            </div>
            <DatePick />
          </section>
          <section className="w-full flex items-center justify-between ">
            <div className="flex gap-2.5 items-center">
              <img src={hourGlass} />
              <span className="text-gray-400 body-medium-medium">
                Time Estimate
              </span>
            </div>
            <TimeEstimate />
          </section>

          <section className="w-full flex items-center justify-between">
            <div className="flex gap-8 items-center ">
              <img src={userImg} />
              <span className="text-gray-400 body-medium-medium">
                Assignees
              </span>
              {/* <AddAssignees
                projectId={currentProjectId}
                users={users}
                projects={projects}
              /> */}
            </div>
          </section>

          <section className="w-full flex items-center justify-between">
            <div className="flex gap-2.5 items-center">
              <img src={PriorityImg} />
              <span className="text-gray-400 body-medium-medium">Priority</span>
            </div>
            <Priority />
          </section>
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <span className="body-small-medium">Add Description</span>
          <input
            type="text"
            className="h-[120px] w-full focus:outline-0 bg-neutral-black-2 px-3 py-2.5"
            placeholder="Placeholder"
            // maxLength={"200"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 w-full justify-end">
          {/* <input
            type="file"
            className="rounded-full"
            accept="image/*"
            onChange={handleImageChange}
          /> */}
          {/* <input type="file" /> */}
          {/* <img src={attachImg} alt="" />
          </input> */}
          <Button className="w-[150px]" isLoading={isLoading} type="submit">
            Create Task
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateTaskModal;
