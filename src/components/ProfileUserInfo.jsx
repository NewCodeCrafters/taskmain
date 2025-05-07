import React from "react";

const ProfileUserInfo = ({ title, body }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="body-medium-semibold">{title}</span>
      <span className="body-small-medium text-paragraph">{body}</span>
    </div>
  );
};

export default ProfileUserInfo;
