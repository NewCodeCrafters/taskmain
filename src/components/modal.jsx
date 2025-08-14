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
  onClick,
  Class = "",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 grid place-items-center bg-background/50 z-50 p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`bg-white rounded-lg p-6  ${Class}`} onClick={onClick}>
        {/* <button onClick={onClose} className="absolute top-4 right-4">
          <img
            src={CloseIcon}
            alt="Close"
            className="w-5 h-5 hover:opacity-80"
          />
        </button> */}

        {icon && (
          <div className="flex justify-center">
            <img src={icon} alt="Modal Icon" className="w-16 h-16" />
          </div>
        )}

        {title && (
          <h2 className="text-center text-lg font-semibold mt-4">{title}</h2>
        )}

        <div>{children}</div>

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
