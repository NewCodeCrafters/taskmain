import React from "react";
import RouteLink from "./RouteLink";

const ProfileDropDown = () => {
  return (
    <div className="top-0 right-0 absolute mt-4 mr-5">
      <RouteLink src="/images/users-01.svg" linkDesc="Profile" />
    </div>
  );
};

export default ProfileDropDown;
