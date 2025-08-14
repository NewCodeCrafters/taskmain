import React from "react";
import ProfileLink from "./ProfileLink";
import { logout } from "../utils/api";
import { useModal } from "../stores/useModal";
import { useNavigate } from "react-router";

const ProfileDropDown = () => {
  const { setModalProfile } = useModal((s) => s);
  const navigate = useNavigate();

  return (
    <>
      <div className="-bottom-80 right-0 absolute mt-2 md:mt-4  mr-5 w-full md:max-w-[276px] max-w-[220px] p-2 bg-white rounded-xl flex flex-col gap-2 transition-all ease-in-out duration-500 z-1000">
        <div className="flex flex-col gap-2 border-b pb-2 border-neutral-black-5">
          <ProfileLink
            leftIcon={<img src="/images/users-01.svg" />}
            linkDesc="Profile"
            rightIcon={<img src="/images/chevron-right.svg" />}
            onClick={setModalProfile}
          />

          <ProfileLink
            onClick={() => navigate("/profileSettings")}
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
            onClick={() => logout()}
            leftIcon={<img src="/images/log-out-01.svg" />}
            linkDesc="Logout"
            rightIcon={<img src="/images/chevron-right-red.svg" />}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileDropDown;
