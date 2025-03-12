import React from "react";
import { Link } from "react-router";
import CollapsedNavLink from "./CollapsedNavLink";

const CollapsedNav = () => {
  return (
    <div className="lg:flex flex-col p-5 gap-4  border-r border-neutral-black-5  w-[95px]  h-screen md:flex hidden bg-white">
      {/* <div className="flex flex-col items-center justify-between pt-1 top-0 left-0 z-100 bg-white "> */}
      <figure>
        <Link to="/home">
          <img src="/images/logo.svg" alt="" className="p-[12px] m-auto " />
        </Link>
        <img src="/images/search-lg.svg" alt="" className="max-w-15 p-[12px]" />
      </figure>
      <section className="">
        <div className="flex flex-col gap-3 border-b border-neutral-black-5 pb-4 justify-center w-fit m-auto">
          <span className="text-neutral-black-8 ">General</span>
          <CollapsedNavLink
            LinkTo="/"
            image={
              <img
                src="/images/pie-chart-02.svg"
                className="max-w-15 p-[12px]"
              />
            }
          />

          <CollapsedNavLink
            LinkTo="/membersettings"
            image={
              <img src="/images/users-01.svg" className="max-w-15 p-[12px]" />
            }
          />
          <CollapsedNavLink
            LinkTo="/favourites"
            image={
              <img src="/images/star-01.svg" className="max-w-15 p-[12px]" />
            }
          />
          <CollapsedNavLink
            LinkTo="/messages"
            image={
              <img
                src="/images/message-text-circle-02.svg"
                className="max-w-15 p-[12px]"
              />
            }
          />
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <span className="text-neutral-black-8">Spaces</span>
        <img src="/images/users-plus.svg" className="max-w-15 p-[12px]" />
        <img src="/images/building-06.svg" className="max-w-15 p-[12px]" />
        <img src="/images/layers-two-02.svg" className="max-w-15 p-[12px]" />
      </section>
      <section className="flex flex-col bg-neutral-black-4 rounded-xl p-1 gap-3 mt-6">
        <button className="px-4 py-2 rounded-lg bg-white ">
          <img src="/images/sun.svg" alt="" />
        </button>
        <button className="px-4 py-2 rounded-lg ">
          <img src="/images/moon.svg" alt="" />
        </button>
      </section>
    </div>
  );
};

export default CollapsedNav;
