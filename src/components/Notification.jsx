import React from "react";
import { Mail, ClipboardCheck, MessageCircleIcon } from "lucide-react";

const Notification = ({ notification }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary-300 text-white w-fit p-4 rounded-full">
        {notification.type === "Reminder" ? (
          <Mail />
        ) : notification.type === "task Completed" ? (
          <ClipboardCheck />
        ) : (
          <MessageCircleIcon />
        )}
      </div>
      <div className="flex flex-col items-start gap-1">
        <h4
          className={`text-[1rem] ${
            notification.isRead === false ? "font-bold" : "font-medium"
          }`}
        >
          {notification.title}
        </h4>
        <p className="text-[0.8rem] text-neutral-500 font-medium">
          {notification.description}
        </p>
      </div>
    </div>
  );
};

export default Notification;
