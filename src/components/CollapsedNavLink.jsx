import React from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";

const CollapsedNavLink = ({ LinkTo, image }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(LinkTo, currentPath);

  const isActive = LinkTo === currentPath;
  return (
    <div>
      <Link
        to={LinkTo || "#"}
        className={
          isActive
            ? "bg-primary-50 rounded-xl relative flex items-center justify-center"
            : ""
        }
      >
        {isActive && (
          <div className="absolute  h-full w-[10px] bg-primary-500 left-[-25px] top-1/2 -translate-y-1/2 rounded-r-full"></div>
        )}
        {image}
      </Link>
    </div>
  );
};

export default CollapsedNavLink;
