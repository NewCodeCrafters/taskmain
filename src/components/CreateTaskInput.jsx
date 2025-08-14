import React from "react";

const CreateTaskInput = ({ image, Title, inputProps, type }) => {
  return (
    <section className="w-full flex items-center justify-between max-w-[400px]">
      <div className="flex gap-2.5 items-center">
        {image}
        <span className="text-gray-400 body-medium-medium">{Title}</span>
      </div>
      <input
        type="text"
        placeholder="Empty"
        className="body-medium-semibold focus:outline-0 placeholder:text-gray-400"
        {...inputProps}
      />
    </section>
  );
};

export default CreateTaskInput;
