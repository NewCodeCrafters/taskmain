import React from "react";
import RouteLink from "./RouteLink";

const ProfileDropDown = () => {
  return (
    <div className="top-0 right-0 absolute mt-4 mr-5 w-full max-w-[276px] p-2 bg-white rounded-xl flex flex-col gap-2 ">
      <RouteLink
        src="/images/users-01.svg"
        linkDesc="Profile"
        IconSrc="/images/chevron-right.svg"
      />
      <RouteLink
        src="/images/settings-02.svg"
        linkDesc="Settings"
        IconSrc="/images/chevron-right.svg"
      />
      <RouteLink
        src="/images/moon.svg"
        linkDesc="Dark Mode"
        IconSrc="/images/chevron-right.svg"
      />
      <RouteLink
        src="/images/trash-01.svg"
        linkDesc="Trash"
        IconSrc="/images/chevron-right.svg"
      />
    </div>
  );
};

export default ProfileDropDown;
