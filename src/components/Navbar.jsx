import React from "react";
import RouteLink from "./RouteLink";
import Logo from "./Logo";
import MainNav from "./MainNav";
import SubNav from "./SubNav";
import Theme from "./Theme";
import ProfileDropDown from "./ProfileDropDown";
import TextInput from "./Input";
import { SearchIcon } from "lucide-react";

const Navbar = ({ handleSideBar, className, onClick, handleSetMobileBar }) => {
  return (
    <div
      className={`md:flex flex-col p-5  gap-4  border-r dark:border-neutral-900 border-neutral-black-5  w-[300px] h-screen relative bg-white dark:bg-black ${className} `}
      onClick={onClick}
    >
      <div className="flex items-center justify-between pt-1 top-0 left-0 z-100 dark:bg-black bg-white">
        <Logo />
        <button onClick={handleSideBar}>
          <img src="/images/Closebar.svg" alt="" />
        </button>
      </div>
      <TextInput
        InputClassName="bg-neutral-black-2"
        placeholder="Search"
        leftIcon={<SearchIcon />}
      />
      <MainNav />
      <SubNav />
      <Theme />
    </div>
  );
};

export default Navbar;
