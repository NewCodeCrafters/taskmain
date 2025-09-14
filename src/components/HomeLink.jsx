import React from "react";
import { Link } from "react-router";

const HomeLink = ({
  icon,
  text,
  LinkTo,
  activeIcon,
  className,
  rightIcon,
  onClick,
  isActive,
}) => {
  const Component = LinkTo ? Link : "button";
  return (
    <Component
      onClick={onClick}
      {...(LinkTo ? { to: LinkTo } : { type: "button" })}
      className={`flex gap-2.5 items-center px-3 pb-[10px] text-paragraph body-medium-medium ${className} ${
        isActive ? "text-primary-500 border-b-2 border-primary-500 " : ""
      }`}
    >
      {isActive ? activeIcon : icon}
      <span>{text}</span>
      {rightIcon}
    </Component>
  );
};

export default HomeLink;
