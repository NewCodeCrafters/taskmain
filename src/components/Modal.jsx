import React from "react";
import Button from "./Button";
import TickIcon from "../assets/icon(3).svg";
import CloseIcon from "../assets/x-close.svg";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-index-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <img
            src={CloseIcon}
            alt="Close"
            className="w-5 h-5 text-gray-600 hover:text-gray-800"
          />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center">
          <img
            src={TickIcon}
            alt="Success"
            className="w-16 h-16 text-green-500"
          />
        </div>

        {/* Title & Description */}
        <h2 className="text-center text-lg font-semibold mt-4">Success!</h2>
        <p className="text-center text-gray-600 mt-2">
          Your account has been successfully created.
        </p>

        {/* Get Started Button */}
        <div className="mt-6">
          <Button variant="primary" className="w-full" onClick={onClose}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
