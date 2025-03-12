import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const RouteLink = ({ leftIcon, linkDesc, LinkTo, rightIcon = null }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(LinkTo, currentPath);

  const isActive = LinkTo === currentPath;

  return (
    <Link
      to={LinkTo || "#"}
      className={
        isActive
          ? "bg-primary-50 py-3 px-4 rounded-xl flex w-full gap-3 relative"
          : "flex py-3 px-4 hover:cursor-pointer rounded-4  items-center w-full gap-3 "
      }
    >
      {isActive && (
        <div className="absolute  h-full w-[10px] bg-primary-500 left-[-25px] top-1/2 -translate-y-1/2 rounded-r-full"></div>
      )}
      <div className="flex items-center gap-3 w-full">
        {leftIcon}
        <span>{linkDesc}</span>
      </div>
      {rightIcon}
    </Link>
  );
};

export default RouteLink;
