import React from "react";
import CloseIcon from "../assets/x-close.svg";
import Button from "./Button";

const Modal = ({
  isOpen,
  onClose,
  icon,
  title,
  children,
  buttonText,
  buttonAction,
  extraClass = "",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white rounded-lg p-6 max-w-sm w-full shadow-lg relative ${extraClass}`}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <img
            src={CloseIcon}
            alt="Close"
            className="w-5 h-5 hover:opacity-80"
          />
        </button>

        {icon && (
          <div className="flex justify-center">
            <img src={icon} alt="Modal Icon" className="w-16 h-16" />
          </div>
        )}

        {title && (
          <h2 className="text-center text-lg font-semibold mt-4">{title}</h2>
        )}

        <div className="text-center text-gray-600 mt-2">{children}</div>

        {buttonText && (
          <div className="mt-6">
            <Button
              variant="primary"
              className="w-full"
              onClick={buttonAction || onClose}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
