import React from "react";
import { Link } from "react-router";

const CollapsedNav = () => {
  return (
    <div className="flex flex-col p-5 gap-4  border-r border-neutral-black-5  w-[95px]  h-screen  bg-white     ">
      {/* <div className="flex flex-col items-center justify-between pt-1 top-0 left-0 z-100 bg-white "> */}
      <figure>
        <Link to="/home">
          <img src="/images/logo.svg" alt="" className=" p-[12px] m-auto" />
        </Link>
      </figure>
      <section className="">
        <div className="flex flex-col gap-3 border-b border-neutral-black-5 pb-4 justify-center w-fit m-auto">
          <img
            src="/images/search-lg.svg"
            alt=""
            className="max-w-15 p-[12px]"
          />

          <span className="text-neutral-black-8 place-self-center">
            General
          </span>
          <Link to="/home">
            <img src="/images/pie-chart-02.svg" className="max-w-15 p-[12px]" />
          </Link>

          <Link to="/membersettings">
            <img src="/images/users-01.svg" className="max-w-15 p-[12px]" />
          </Link>

          <Link to="favourites">
            <img src="/images/star-01.svg" className="max-w-15 p-[12px]" />
          </Link>

          <Link to="/messages">
            <img
              src="/images/message-text-circle-02.svg"
              className="max-w-15 p-[12px]"
            />
          </Link>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <span className="text-neutral-black-8">Spaces</span>
        <img
          src="/images/users-plus.svg"
          className="max-w-15 p-[12px] bg-amber-300"
        />
        <img src="/images/building-06.svg" className="max-w-15 p-[12px]" />
        <img src="/images/layers-two-02.svg" className="max-w-15 p-[12px]" />
      </section>
      {/* <Theme /> */}
      {/* </div> */}
    </div>
  );
};

export default CollapsedNav;
