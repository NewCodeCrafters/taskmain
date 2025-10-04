import React from "react";
import TextInput from "../components/Input";
import { Search } from "lucide-react";
import { Pin } from "lucide-react";
// import avatar from "../assets/avatar-base.svg";
import { chats } from "../data/chats";
const ChatSidebar = () => {
  return (
    <div className="flex flex-col gap-6 pr-5 border-r-2 border-neutral-black-5 h-full dark:border-neutral-700">
      {/* Search Input */}
      <TextInput
        className="w-full"
        leftIcon={<Search />}
        placeholder="Search Chat"
      />

      {/* Pinned messages */}
      <section className="flex flex-col gap-5">
        <figure className="flex items-center gap-1">
          <span className="body-medium-semibold">Pinned</span>
          <Pin />
        </figure>
        {chats.map((chat) => (
          <div className="dark:bg-black bg-neutral-black-3 grid grid-cols-5 p-3 w-full rounded-xl place-items-center align-middle gap-5">
            <figure className="w-15 h-15 col-span-1 place-self-center rounded-full overflow-hidden">
              <img src={chat.avatar} alt="" />
            </figure>
            <div className="flex flex-col gap-1 w-full col-span-4">
              <div className="flex justify-between w-full">
                <span className="body-medium-semibold">{chat.name}</span>
                <span className="body-small-medium text-neutral-black-9">
                  12:30
                </span>
              </div>
              <div className="flex gap-2 items-center w-full justify-between">
                <span className="body-small-medium overflow-hidden whitespace-nowrap text-ellipsis">
                  {chat.lastMessage}
                </span>
                <span className="bg-blue-600 max-w-5 h-5 p-1 rounded-full flex items-center justify-center text-white w-full">
                  1
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="body-medium-semibold">All Messages</section>
    </div>
  );
};

export default ChatSidebar;
