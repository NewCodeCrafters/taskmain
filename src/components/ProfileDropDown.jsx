import React, { useRef, useEffect } from "react";
import ProfileLink from "./ProfileLink";

import { logout } from "../utils/api";

import ProfileSettings from "./ProfileSettings";
import { useModal } from "../stores/useModal";
import { ChevronRight, Moon, Settings, Trash2, Users } from "lucide-react";
import ToggleSwitch from "../assets/ToggleSwitch";
import { useThemeStore } from "../stores/useThemeStore";

const ProfileDropDown = () => {
  const { setModalProfile } = useModal((s) => s);
  const { theme, toggleTheme } = useThemeStore((s) => s);
  const darkMode = theme === "dark" ? true : false;

  return (
    <>
      <div className="-bottom-80 right-0 absolute mt-2 md:mt-4  mr-5 w-full md:max-w-[276px] max-w-[220px] p-2 bg-white dark:bg-black dark:text-white rounded-xl flex flex-col gap-2 transition-all ease-in-out duration-500 z-50">
        <div className="flex flex-col gap-2 border-b pb-2 border-neutral-black-5 dark:border-neutral-800">
          <ProfileLink
            leftIcon={<Users />}
            linkDesc="Profile"
            rightIcon={<ChevronRight />}
            onClick={() => setModalProfile(true)}
            LinkTo="/profile"
          />

          <ProfileLink
            LinkTo="/profileSettings"
            leftIcon={<Settings />}
            linkDesc="Settings"
            rightIcon={<ChevronRight />}
          />
          <ProfileLink
            leftIcon={<Moon />}
            linkDesc="Dark Mode"
            onClick={toggleTheme}
            rightIcon={<ToggleSwitch isOn={darkMode} />}
          />
          <ProfileLink
            leftIcon={<Trash2 />}
            linkDesc="Trash"
            rightIcon={<ChevronRight />}
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
