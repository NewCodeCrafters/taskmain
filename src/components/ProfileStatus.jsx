import React from "react";
import avatar from "../assets/avatar.svg";

const ProfileStatus = ({ user }) => {
  return (
    <div className="flex gap-4 items-center">
      <figure>
        <img src={avatar} alt="" />
      </figure>
      <div className="flex gap-1 flex-col">
        <div className="flex gap-1">
          <span className="body-small-medium">{user.firstname}</span>
          <span className="body-small-medium">{user.lastname}</span>
        </div>
        <span className="body-small-medium text-success-300">Online</span>
      </div>
    </div>
  );
};

export default ProfileStatus;
