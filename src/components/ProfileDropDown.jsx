import React from "react";
import ProfileLink from "./ProfileLink";

const ProfileDropDown = () => {
  return (
    <section>
      <div className="top-0 right-0 absolute mt-4 mr-5 w-full max-w-[276px] p-2 bg-white rounded-xl flex flex-col gap-2 ">
        <ProfileLink
          leftIcon="/images/users-01.svg"
          linkDesc="Profile"
          rightIcon="/images/chevron-right.svg"
        />
        <ProfileLink
          leftIcon="/images/settings-02.svg"
          linkDesc="Settings"
          rightIcon="/images/chevron-right.svg"
        />
        <ProfileLink
          leftIcon="/images/moon.svg"
          linkDesc="Dark Mode"
          rightIcon="/images/chevron-right.svg"
        />
        <ProfileLink
          leftIcon="/images/trash-01.svg"
          linkDesc="Trash"
          rightIcon="/images/chevron-right.svg"
        />
        <div>
          <ProfileLink
            leftIcon="/images/logout-01.svg"
            linkDesc="Logout"
            rightIcon="/images/chevron-right.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileDropDown;
