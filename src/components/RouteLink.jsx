import React from "react";
import { Link } from "react-router";
import { useState } from "react";

const RouteLink = ({ leftIcon, linkDesc, LinkTo, rightIcon = null }) => {
  const [selectedLink, setSelectedLink] = useState(false);

  function handleSelectedLink() {
    setSelectedLink((link) => !link);
  }
  return (
    <Link
      to={LinkTo || "#"}
      onClick={handleSelectedLink}
      className={
        selectedLink ? "bg-primary-50 rounded-xl border-l border-l-black" : ""
      }
    >
      <button className="flex py-3 px-4 hover:cursor-pointer rounded-4  items-center w-full gap-3">
        <div className="flex items-center gap-3 w-full">
          {leftIcon}
          <span>{linkDesc}</span>
        </div>
        {rightIcon}
      </button>
    </Link>
  );
};

export default RouteLink;
