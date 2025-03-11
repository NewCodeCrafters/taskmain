import React from "react";
import RouteLink from "./RouteLink";
import Logo from "./Logo";
import MainNav from "./MainNav";
import SubNav from "./SubNav";
import Theme from "./Theme";
import ProfileDropDown from "./ProfileDropDown";

const Navbar = ({ handleSideBar }) => {
  return (
    <div className="flex flex-col p-5 gap-4  border-r border-neutral-black-5  w-[300px]  h-screen  bg-white relative">
      <div className="flex items-center justify-between pt-1 top-0 left-0 z-100 bg-white ">
        <Logo />
        <button onClick={handleSideBar}>
          <img src="/images/Closebar.svg" alt="" />
        </button>
      </div>
      {/* ///////////// */}
      <div>
        <h1>INPUT HERE</h1>
      </div>
      {/* /////////////// */}
      <MainNav />
      <SubNav />
      <Theme />
    </div>
  );
};

export default Navbar;
