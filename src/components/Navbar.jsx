import React from "react";
import RouteLink from "./RouteLink";
import Logo from "./Logo";
import MainNav from "./MainNav";
import SubNav from "./SubNav";
import Theme from "./Theme";
import ProfileDropDown from "./ProfileDropDown";
import TextInput from "./Input";

const Navbar = ({ handleSideBar, className, onClick, handleSetMobileBar }) => {
  return (
    <div
      className={`md:flex flex-col p-5  gap-4  border-r border-neutral-black-5  w-[300px] h-screen relative bg-white ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between pt-1 top-0 left-0 z-100 bg-white">
        <Logo />
        <button onClick={handleSideBar}>
          <img src="/images/Closebar.svg" alt="" />
        </button>
      </div>
      <TextInput
        placeholder="Search"
        leftIcon={<img src="images/search-lg.svg" />}
      />
      <MainNav />
      <SubNav />
      <Theme />
    </div>
  );
};

export default Navbar;
