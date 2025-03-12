import React from "react";
import ProfileLink from "./ProfileLink";

const ProfileDropDown = () => {
  return (
    <section>
      <div className="top-0 right-0 absolute mt-4 mr-5 w-full max-w-[276px] p-2 bg-white rounded-xl flex flex-col gap-2 transition-all ease-in-out duration-500">
        <div className="flex flex-col gap-2 border-b pb-2 border-neutral-black-5">
          <ProfileLink
            leftIcon={<img src="/images/users-01.svg" />}
            linkDesc="Profile"
            rightIcon={<img src="/images/chevron-right.svg" />}
          />
          <ProfileLink
            leftIcon={<img src="/images/settings-02.svg" />}
            linkDesc="Settings"
            rightIcon={<img src="/images/chevron-right.svg" />}
          />
          <ProfileLink
            leftIcon={<img src="/images/moon.svg" />}
            linkDesc="Dark Mode"
            rightIcon={<img src="/images/Toggle.svg" />}
          />
          <ProfileLink
            leftIcon={<img src="/images/trash-01.svg" />}
            linkDesc="Trash"
            rightIcon={<img src="/images/chevron-right.svg" />}
          />
        </div>

        <div>
          <ProfileLink
            leftIcon={<img src="/images/log-out-01.svg" />}
            linkDesc="Logout"
            rightIcon={<img src="/images/chevron-right-red.svg" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileDropDown;
