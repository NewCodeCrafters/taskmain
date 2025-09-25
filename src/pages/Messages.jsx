import React from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatHeader from "../components/ChatHeader";
import ChatMain from "../components/ChatMain";

const Messages = () => {
  return (
    <div className="bg-white w-full grid grid-cols-6 rounded-xl p-5 gap-5 h-full dark:bg-black dark:text-white">
      {/* Chat Sidebar */}
      <div className="w-full col-span-2 h-full">
        <ChatSidebar />
      </div>
      <section className="grid grid-rows-6 w-full col-span-4">
        {/* Chat Header */}
        <div className="row-span-1">
          <ChatHeader />
        </div>

        {/* main chat */}
        <div className="row-span-5">
          <ChatMain />
        </div>
      </section>
    </div>
  );
};

export default Messages;
