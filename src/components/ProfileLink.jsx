import React from "react";
import { Link } from "react-router";

const ProfileLink = ({
  leftIcon,
  linkDesc,
  LinkTo,
  rightIcon = null,
  onClick,
}) => {
  return (
    <div>
      <Link to={LinkTo || null} className="" onClick={onClick}>
        <button className="flex py-3 px-4 hover:cursor-pointer rounded-4  items-center w-full gap-3">
          <div className="flex items-center gap-3 w-full">
            {leftIcon}
            {linkDesc}
          </div>
          {rightIcon}
        </button>
      </Link>
    </div>
  );
};

export default ProfileLink;
