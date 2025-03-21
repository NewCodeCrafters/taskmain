import React from "react";
import Button from "./Button";
import TickIcon from "../assets/icon(3).svg";
import CloseIcon from "../assets/x-close.svg";
import AnimatedCheckmark from "./AnimatedCheckMark";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-[500px] w-full relative flex flex-col gap-5">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <img src={CloseIcon} alt="Close" />
        </button>

        {/* Success Icon */}
        <div className="place-self-center">
          <AnimatedCheckmark />
        </div>

        {/* Title & Description */}
        <h2 className="text-center heading-3">Congratulations, You're In</h2>
        <p className="text-center text-paragraph body-medium-medium">
          Get ready to organize, prioritize, and conquer your to-do list like
          never before. Let’s make every day productive!
        </p>

        {/* Get Started Button */}

        <Button variant="primary" onClick={onClose}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Modal;
