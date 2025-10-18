import React from "react";
import close from "../assets/x-close.svg";
import ProfileStatus from "./ProfileStatus";
import settings from "../assets/settings-02.svg";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileTaskInfo from "./ProfileTaskInfo";
import { useTaskStore } from "../stores/taskStore";
import { useModal } from "../stores/useModal";
import { X } from "lucide-react";

import usePerUSerStore from "../stores/usePerUserStore";

const ProfileMobile = () => {
  const { user } = usePerUSerStore((u) => u);
  const { tasks } = useTaskStore((s) => s);

  return (
    <div
      className=" dark:bg-black dark:text-white w-full p-2 gap-6 flex flex-col "
    >
      <div className="flex justify-between">
        <ProfileStatus user={user} />
        <button className="flex gap-3 bg-primary-50 px-4 py-2.5 items-center rounded-full  ">
          <img src={settings} alt="" />
          <span className="body-small-medium text-primary-500">Settings</span>
        </button>
      </div>
      {/* <div className="flex gap-10 pb-6 border-b border-neutral-500">
            <ProfileUserInfo title="Title" body="Manager" />
            <ProfileUserInfo title="Email" body={user.email} />
            <ProfileUserInfo title="Local Time" body="07:15" />
          </div> */}
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
  );
};

export default ProfileMobile;
