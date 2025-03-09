import React from "react";

const TextInput = ({
  label,
  leftIcon,
  rightIcon,
  hint,
  error,
  ...inputProps
}) => {
  return (
    <div>
      {label && (
        <label className="body-small-medium text-neutral-black-13">
          {label}
        </label>
      )}
      <div
        className="px-3 py-2 rounded-full border border-neutral-black-5   focus-within:inset-shadow-custom-sm focus-within:drop-shadow-sm w-fit min-w-[300px] flex"
        tabIndex={0}
      >
        <input type="text" className="focus-within:outline-0 flex" />
      </div>
    </div>
  );
};

export default TextInput;
