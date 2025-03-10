import React, { Children } from "react";

const TextInput = ({
  label,
  leftIcon = null,
  rightIcon = null,
  hint,
  error,
  // eslint-disable-next-line no-unused-vars
  ...inputProps
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="body-small-medium text-neutral-black-13 ">
          {label}
        </label>
      )}
      <div
        className="px-3 py-2 rounded-full border border-neutral-black-5 focus-within:inset-shadow-custom-sm focus-within:drop-shadow-sm w-fit flex"
        tabIndex={0}
      >
        <figure>{leftIcon}</figure>
        <input type="text" className="focus-within:outline-0 flex" />
        <figure>{rightIcon}</figure>
      </div>
      <div>
        <p className="body-small-regular text-neutral-black-9 ">{hint}</p>
        <div>
          <img src="" alt="" />
          <p className="body-small-regular ">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
