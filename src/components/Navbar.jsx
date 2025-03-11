import React from "react";
import RouteLink from "./RouteLink";

const Navbar = () => {
  return (
    <div className="flex flex-col max-w-[300px] p-5 gap-4  border-r min-h-screen border-neutral-black-5">
      <div className="flex items-center justify-between">
        <article className="flex items-center gap-[10px]">
          <img src="/images/logo.svg" alt="" />
          <span className="text-primary-500 heading-5">TaskTonic</span>
        </article>
        <figure>
          <img src="/images/Closebar.svg" alt="" />
        </figure>
      </div>
      {/* ///////////// */}
      <div>
        <h1>INPUT HERE</h1>
      </div>
      {/* /////////////// */}
      <section>
        <div className="flex flex-col gap-3 border-b border-neutral-black-5 pb-4">
          <span className="text-neutral-black-8">General</span>
          <RouteLink src="/images/pie-chart-02.svg" linkDesc="Overview" />
          <RouteLink src="/images/users-01.svg" linkDesc="Member settings" />
          <RouteLink src="/images/star-01.svg" linkDesc="Favourites" />
          <RouteLink
            src="/images/message-text-circle-02.svg"
            linkDesc="Messages"
          />
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-neutral-black-8">Spaces</span>
          <div className="flex gap-3">
            <button>
              <img src="/images/add.svg" alt="" />
            </button>
            <button>
              <img src="/images/chevron-down.svg" alt="" />
            </button>
          </div>
        </div>
        <RouteLink src="/images/users-plus.svg" linkDesc="Human Resources" />
        <RouteLink src="/images/building-06.svg" linkDesc="Agency branding" />
        <RouteLink
          src="/images/layers-two-02.svg"
          linkDesc="Development stuff"
        />
        <div className="flex gap-2">
          <figure className="pl-6">
            <img src="/images/line.svg" alt="" />
          </figure>
          <div className="flex flex-col gap-1">
            <RouteLink linkDesc="Team Daily Task" />
            <RouteLink linkDesc="Documentation" />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-neutral-black-3">
          <article className="flex flex-col gap-1">
            <h1 className="heading-5">Upgrade to Pro</h1>
            <span className="body-xsmall-regular text-neutral-black-8">
              Unlock all features on Pixelcraft
            </span>
          </article>
          {/* ///////////// */}
          <button>Button here</button>
          {/* ///////////////// */}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
