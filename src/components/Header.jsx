
import React, { useEffect, useState, useRef } from "react";

import Button from "./Button";
// import { getUserProfile } from "../utils/api";
import TaskSection from "./TaskSection";
import ProfileDropDown from "./ProfileDropDown";
import ProfileModal from "./ProfileModal";
import { useModal } from "../stores/useModal";
import ShareSpace from "./ShareSpace"
import Modal from "./modal";
import NotificationModal from "./NotificationModal";
import { notifications } from "../data/notifications";
import { Bell, ChevronDown, LayoutGrid } from "lucide-react";
import usePerUSerStore from "../stores/usePerUserStore";
import { getUserProfile } from "../utils/api";



const Header = ({
  handleSideBar,
  sideBar,
  handleDropDown,
  dropDown,
  handleSetMobileBar,
  setDropDown,
}) => {
  // const [user, setUser] = useState(null);
  // console.log(user);
  const { user, setUser } = usePerUSerStore((u) => u);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await getUserProfile();
        console.log("Logged in user:", users);
        setUser(users);
      } catch (err) {
        console.log(err.message);
        console.error("Not logged in or token invalid");
      }
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(user);
  const { setShareSpaceModal } = useModal((s) => s);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="px-3 md:px-6 flex justify-between items-center border- border-neutral-black-5 dark:bg-black dark:texts-white h-[76px] top-0  sticky z-50 ">
      <div className="flex gap-3 items-center heading-5 dark:text-white lg:items-end">
        <button onClick={handleSetMobileBar} className="block md:hidden">
          <LayoutGrid />
        </button>
        <button onClick={handleSideBar} className="hidden md:block">
          {sideBar ? <img src="/images/Closebar.svg" alt="" /> : null}
        </button>
        <TaskSection />
      </div>
      <section className="flex md:gap-10 gap-[20px]">
        <div className="flex gap-4 items-center">
          <div className="hidden md:hidden lg:flex items-center gap-1">
            <img src="/images/clock.svg" alt="" />
            <span className="text-paragraph">Last edited 10 minutes ago </span>
          </div>
          <Button variant="black" onClick={() => setShareSpaceModal(true)}>
            Share
          </Button>
          <div className="relative">
            <div
              className={`flex cursor-pointer`}
              onClick={() => {
                setShowNotificationModal((prev) => !prev);
              }}
            >
              <div
                className={`w-10 h-10 border z-50 border-neutral-black-5 grid place-items-center rounded-full ${
                  showNotificationModal && "bg-white/20"
                }`}
              >
                {/* <img src="/images/bell-03.svg" alt="" /> */}
                <Bell
                  className={`dark:text-white z-50 ${
                    showNotificationModal ? "dark:text-black" : ""
                  }`}
                />
              </div>
              {notifications.filter(
                (notification) => notification.isRead === false
              ).length > 0 && (
                <div className=" w-6 h-6 z-50 bg-error-50 md:grid md:place-items-center rounded-full flex justify-center items-center -my-[9px] -mx-4 ">
                  <span className="text-white">
                    {notifications.filter(
                      (notification) => notification.isRead === false
                    ).length > 0
                      ? notifications.filter(
                          (notification) => notification.isRead === false
                        ).length
                      : null}
                  </span>
                </div>
              )}
            </div>
            {showNotificationModal && (
              <NotificationModal
                onClose={() => setShowNotificationModal(false)}
                showFunction={setShowNotificationModal}
              />
            )}
          </div>
        </div>
        <div
          onClick={handleDropDown}
          ref={dropdownRef}
          className="py-1 pl-1 pr-3 bg-neutral-black-3 dark:bg-neutral-black-12 md:gap-3 gap-1 rounded-full flex items-center hover:cursor-pointer"
        >
          <figure>
            <img src="/images/avatar.svg" alt="" />
          </figure>
          <div className="lg:flex flex-col md:flex hidden">
            <div className="flex gap-1">
              <span className="body-small-medium">{user.firstname}</span>
              <span className="body-small-medium">{user.lastname}</span>
            </div>
            <span className="body-xsmall-medium text-paragraph">
              {user.email}
            </span>
          </div>
          <figure>
            <ChevronDown
              className={`transition-all dark:text-white duration-300 ${
                dropDown ? "rotate-180" : "rotate-0"
              }`}
            />
          </figure>
      {dropDown && <ProfileDropDown />}
        </div>
      </section>

      <ShareSpace />
    </div>
  );
};

export default Header;
