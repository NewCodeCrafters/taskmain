import React from "react";
// import icon from "../assets/icon.svg";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-black dark:bg-background min-h-screen w-full h-full grid place-items-center md:place-items-stretch lg:grid-cols-2 md:grid-cols-2 p-5  ">
      <section className=" text-white lg:flex flex-col justify-between h-full md:flex hidden ">
        <div className="text-white flex gap-2 items-center">
          <figure>
            <img className="" src={icon} alt="" />
          </figure>
          <div className="heading-5">TaskTonic</div>
        </div>
        <div className="flex flex-col max-w-[572px] gap-[17px] mb-8">
          <p className="heading-3 ">
            Supercharge your productivity, one task at a time
          </p>
          <p className="body-medium-regular">
            Ready to take control of your to do list? TaskTonic helps you stay
            organized, focused, and ahead of your goals. Lets get started!{" "}
          </p>
        </div>
      </section>
      <section className="bg-white dark:text-white dark:bg-black h-fit md:h-full  rounded-3xl flex items-center justify-center p-8 ">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
