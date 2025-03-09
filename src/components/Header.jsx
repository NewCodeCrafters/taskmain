import React from "react";

const Header = () => {
  return (
    <div className="px-6 flex justify-between items-center border- border-neutral-black-5  h-[76px] top-0  sticky z-50">
      <div className="flex gap-3 heading-5 bg-white">
        <span className=" text-paragraph">Development Stuff</span>
        <span>/</span>
        <span>Team daily Task</span>
      </div>
      <section className="flex gap-10">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-1">
            <img src="/images/clock.svg" alt="" />
            <span className="text-paragraph">Last edited 10 minutes ago </span>
          </div>
          <button>Button here</button>
          <div className="flex">
            <div className="w-10 h-10 border border-neutral-black-5 grid place-items-center rounded-full">
              <img src="/images/bell-03.svg" alt="" />
            </div>
            <div className="w-6 h-6 bg-error-50 grid place-items-center rounded-full -my-[9px] -mx-4">
              <span className="text-white">7</span>
            </div>
          </div>
        </div>
        <div className="py-1 pl-1 pr-3 bg-neutral-black-3 gap-3 rounded-full flex items-center">
          <figure>
            <img src="/images/avatar.svg" alt="" />
          </figure>
          <div className="flex flex-col">
            <span className="body-small-medium">Fajar Roberto</span>
            <span className="body-xsmall-medium text-paragraph">@fajar123</span>
          </div>
          <figure>
            <img src="/images/chevron-down.svg" alt="" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Header;
