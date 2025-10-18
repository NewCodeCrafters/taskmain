import { XIcon } from "lucide-react";
import React from "react";
import AnimatedCheckmark from "./AnimatedCheckMark";
import Button from "./Button";

const TaskSucessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-[500px] w-full relative flex flex-col gap-5 mx-5">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <XIcon />
        </button>

        {/* Success Icon */}
        <div className="place-self-center">
          <AnimatedCheckmark />
        </div>

        {/* Title & Description */}
        <h2 className="text-center heading-4 md:heading-3">
          Task Created Succesfully
        </h2>
        {/* Get Started Button */}

        <Button variant="primary" onClick={onClose}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default TaskSucessModal;
