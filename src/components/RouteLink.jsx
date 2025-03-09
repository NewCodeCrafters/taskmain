import React from "react";

const RouteLink = ({ src, linkDesc }) => {
  return (
    <button className="flex gap-3 py-3 px-4 hover:cursor-pointer rounded-4">
      <img src={src || null} alt="" />
      <span>{linkDesc}</span>
    </button>
  );
};

export default RouteLink;
