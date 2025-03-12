import React from "react";

const Button = ({
  children,
  onClick,
  isLoading = false,
  isDisabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  variant = "primary", // Default to primary
  className = "",
}) => {
  // Function to return classes based on the variantsm
  const getVariantClasses = (variant) => {
    switch (variant) {
      case "secondary":
        return "bg-neutral-black-7 text-white hover:bg-neutral-black-9";
      case "stroke":
        return "border border-primary-400 text-primary-500 hover:bg-primary-100";
      case "ghost":
        return "bg-transparent text-primary-500 hover:bg-primary-50";
      case "black":
        return "bg-black text-white hover:bg-neutral-black-9";
      default:
        return "bg-primary-500 text-white hover:bg-primary-400";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading || isDisabled}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition hover:cursor-pointer
        ${
          isDisabled
            ? "bg-neutral-black-5 text-neutral-black-8 cursor-not-allowed"
            : getVariantClasses(variant)
        }
        ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
    >
      {isLoading ? (
        <span className="animate-spin border-2 border-neutral-black-2 border-t-transparent rounded-full w-4 h-4"></span>
      ) : (
        <>
          {LeftIcon && <LeftIcon className="w-5 h-5" />}
          {children}
          {RightIcon && <RightIcon className="w-5 h-5" />}
        </>
      )}
    </button>
  );
};

export default Button;
