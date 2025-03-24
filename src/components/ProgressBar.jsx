import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-29.5 bg-gray-200 rounded-full h-2 relative">
      <div
        className="bg-success-300 h-2 rounded-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
