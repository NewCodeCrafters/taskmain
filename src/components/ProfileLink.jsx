import React from "react";

const ProfileLink = ({ leftIcon, linkDesc, LinkTo, rightIcon = null }) => {
  return (
    <div>
      <Link to={LinkTo || null} className="">
        <button className="flex py-3 px-4 hover:cursor-pointer rounded-4  items-center w-full gap-3">
          <div className="flex items-center gap-3 w-full">
            {leftIcon}
            <span>{linkDesc}</span>
          </div>
          {rightIcon}
        </button>
      </Link>
    </div>
  );
};

export default ProfileLink;
