import React from "react";
import TextInput from "../components/Input";
import { Image, Link, PlaneIcon, Send, Share } from "lucide-react";
import Button from "./Button";

const emojis = ["👍", "❤️", "😂", "😮", "😢", "👏", "🔥"];

const ChatMain = () => {
  return (
    <div className="flex p-5 flex-col w-full h-full gap-5 ">
      {/* Recipient message */}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-3 w-full max-w-2/3">
          <span className="body-medium-medium bg-neutral-black-2 px-3 py-4 rounded-xl dark:bg-neutral-black-12">
            Yes, I'll share some initial concepts in the task notes. Let's
            discuss them tomorrow.
          </span>
          <button className="">
            <Share />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="body-xsmall-regular">03:20 AM</span>
          <div className="flex items-center">
            <figure className="flex gap-1 items-center">
              {emojis.map((s) => (
                <figure className="bg-neutral-black-2 p-1 rounded-full dark:bg-neutral-black-12">
                  {s}
                </figure>
              ))}
            </figure>
          </div>
        </div>
      </div>

      {/* Sender Message */}

      <div className="flex gap-3 items-center self-end">
        <button className="">
          <Share />
        </button>
        <span className="bg-primary-300 body-medium-medium px-3 py-4 rounded-xl text-white w-2/3 ">
          Sure, I'll start working on it today and update the progress. Do you
          have any specific ideas for the campaign?
        </span>
      </div>
      {/* Chat Input here */}
      <div
        className="px-3 py-2 gap-2 rounded-full  focus-within:inset-shadow-custom-sm focus-within:drop-shadow-sm dark:border-neutral-600 flex w-full dark:text-white dark:bg-background bg-neutral-black-2 self-end"
        tabIndex={0}
      >
        <input
          type="text"
          className="focus-within:outline-0 flex w-full"
          placeholder="Type a message"
        />
        <div className="flex gap-3 items-center">
          <button className="hover:cursor-pointer">
            <Image size={18} />
          </button>
          <button className="hover:cursor-pointer">
            <Link size={18} />
          </button>
        </div>
        <Button className="hover:cursor-pointer">
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default ChatMain;
