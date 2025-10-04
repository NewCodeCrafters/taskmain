import React from "react";
import avatar from "../assets/avatar-base.svg";
import { EllipsisVerticalIcon, Phone, Video } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="w-full flex justify-between items-center pb-5 border-b-2 border-neutral-black-5 dark:border-neutral-700">
      <div className="flex gap-3 items-center">
        <figure>
          <img src={avatar} alt="avatar" />
        </figure>
        <div className="flex flex-col gap-1">
          <span className="body-medium-semibold">Sarah</span>
          <span className="text-success-300 body-medium-semibold">Online</span>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <button className="w-[50px] h-[50px] bg-neutral-black-5 rounded-full hover:cursor-pointer grid place-items-center dark:bg-neutral-black-12">
          <Video />
        </button>
        <button className="w-[50px] h-[50px] bg-neutral-black-5 rounded-full hover:cursor-pointer grid place-items-center dark:bg-neutral-black-12">
          <Phone />
        </button>
        <button className="w-[50px] h-[50px] bg-neutral-black-5 rounded-full hover:cursor-pointer grid place-items-center dark:bg-neutral-black-12">
          <EllipsisVerticalIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
