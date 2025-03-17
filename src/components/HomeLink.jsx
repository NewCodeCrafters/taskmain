import React from "react";

const HomeLink = ({ icon, text }) => {
  return (
    <div className="flex gap-2.5 items-center">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default HomeLink;
