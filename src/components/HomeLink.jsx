import React from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";

const HomeLink = ({ icon, text, LinkTo, activeIcon, className, rightIcon }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = LinkTo === currentPath;
  return (
    <Link
      to={LinkTo || "#"}
      className={`flex gap-2.5 items-center px-3 pb-[10px] text-paragraph body-medium-medium ${className} ${
        isActive ? "text-primary-500 border-b-2 border-primary-500 " : ""
      }`}
    >
      {isActive ? activeIcon : icon}
      <span>{text}</span>
      {rightIcon}
    </Link>
  );
};

export default HomeLink;
