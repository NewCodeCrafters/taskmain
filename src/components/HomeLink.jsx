import React from "react";

const HomeLink = ({ icon, text }) => {
  return (
    <div className="flex gap-2.5 items-center px-3 pb-[10px] text-paragraph">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default HomeLink;
