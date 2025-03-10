import React from "react";
import icon from "../assets/icon.svg";

const AuthLayout = () => {
  return (
    <div className="bg-black min-h-screen w-full h-full grid  grid-cols-2 p-5  ">
      <section className=" text-white flex flex-col justify-between h-full ">
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
      <section className="bg-white rounded-3xl"></section>
    </div>
  );
};

export default AuthLayout;
