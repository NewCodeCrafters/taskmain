import React from "react";
import close from "../assets/x-close.svg";
import ProfileStatus from "./ProfileStatus";
import settings from "../assets/settings-02.svg";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileTaskInfo from "./ProfileTaskInfo";
import { useTaskStore } from "../stores/taskStore";
import { useModal } from "../stores/useModal";

const ProfileModal = () => {
  const { tasks } = useTaskStore((s) => s);
  const { setModalProfile } = useModal((s) => s);
  const handleProfileModal = () => {
    setModalProfile(false);
  };

  return (
    <div className="bg-background/50 absolute inset-0 z-200">
      <section className="absolute flex h-full gap-5 right-0">
        <button
          className="bg-white rounded-full w-[60px] h-[60px] p-[10px] grid place-items-center z-50 mt-3 cursor-pointer"
          onClick={handleProfileModal}
        >
          <img src={close} alt="close" />
        </button>
        <div
          className="bg-white 
       h-full w-[600px] p-6 gap-6 rounded-l-[20px] flex flex-col min-h-svh overflow-y-auto "
        >
          <div className="flex justify-between">
            <ProfileStatus />
            <button className="flex gap-3 bg-primary-50 px-4 py-2.5 items-center rounded-full  ">
              <img src={settings} alt="" />
              <span className="body-small-medium text-primary-500">
                Settings
              </span>
            </button>
          </div>
          <div className="flex gap-10 pb-6 border-b border-neutral-500">
            <ProfileUserInfo title="Title" body="Manager" />
            <ProfileUserInfo title="Email" body="fajar123@gmail.com" />
            <ProfileUserInfo title="Local Time" body="08:15" />
          </div>
          <span className="body-medium-semibold">My work</span>
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <ProfileTaskInfo
                key={task.id}
                title={task.title}
                status={task.status}
                project={task.project}
                time={task.timeEstimate}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileModal;
