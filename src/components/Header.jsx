import React, { useEffect, useState } from "react";
import Button from "./Button";
import { getUserProfile } from "../utils/api";

const Header = ({
  handleSideBar,
  sideBar,
  handleDropDown,
  dropDown,
  handleSetMobileBar,
}) => {
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
        console.log(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className="px-3 md:px-6 flex justify-between items-center border- border-neutral-black-5  h-[76px] top-0  sticky z-50 ">
      <div className="flex gap-3 heading-5 bg-white lg:items-end">
        <button onClick={handleSetMobileBar} className="block md:hidden">
          <img src="images/grid-01.svg" alt="" />
        </button>
        <button onClick={handleSideBar} className="hidden md:block">
          {sideBar ? <img src="/images/Closebar.svg" alt="" /> : null}
        </button>

        <span className=" text-paragraph hidden lg:grid">
          Development Stuff
        </span>
        <span className="hidden lg:grid">/</span>
        <span className="hidden lg:grid">Team daily Task</span>
      </div>
      <section className="flex md:gap-10 gap-[20px]">
        <div className="flex gap-4 items-center">
          <div className="hidden md:hidden lg:flex items-center gap-1">
            <img src="/images/clock.svg" alt="" />
            <span className="text-paragraph">Last edited 10 minutes ago </span>
          </div>
          <Button variant="black">Share</Button>
          <div className="flex">
            <div className=" w-10 h-10 border border-neutral-black-5 grid place-items-center rounded-full">
              <img src="/images/bell-03.svg" alt="" />
            </div>
            <div className=" w-6 h-6 bg-error-50 md:grid md:place-items-center rounded-full flex justify-center items-center -my-[9px] -mx-4 ">
              <span className="text-white">7</span>
            </div>
          </div>
        </div>
        <div
          onClick={handleDropDown}
          className="py-1 pl-1 pr-3 bg-neutral-black-3 md:gap-3 gap-1 rounded-full flex items-center hover:cursor-pointer"
        >
          <figure>
            <img src="/images/avatar.svg" alt="" />
          </figure>
          <div className="lg:flex flex-col md:flex hidden">
            <span className="body-small-medium">{user}</span>
            <span className="body-xsmall-medium text-paragraph">@fajar123</span>
          </div>
          <figure>
            {dropDown ? (
              <img
                src="images/chevron-up.svg"
                className="transition-all duration-300 "
              />
            ) : (
              <img src="images/chevron-down.svg" />
            )}
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Header;
