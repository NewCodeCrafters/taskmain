import React from "react";
import avatar from "../assets/avatar.svg";

const ProfileStatus = () => {
  return (
    <div className="flex gap-4 items-center">
      <figure>
        <img src={avatar} alt="" />
      </figure>
      <div className="flex gap-1 flex-col">
        <span className="body-medium-semibold">Fajar Gunawan</span>
        <span className="body-small-medium text-success-300">Online</span>
      </div>
    </div>
  );
};

export default ProfileStatus;
