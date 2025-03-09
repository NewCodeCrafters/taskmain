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
        className="px-3 py-2 rounded-full border border-neutral-black-5  shadow-sm shadow-[#1678F2]  drop-shadow-sm  "
        tabIndex={0}
      >
        <input type="text" />
      </div>
    </div>
  );
};

export default TextInput;
