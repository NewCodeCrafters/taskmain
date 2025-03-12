import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router";
import ProfileDropDown from "./ProfileDropDown";
import CollapsedNav from "./CollapsedNav";

const Layout = () => {
  const [sideBar, setSideBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  function handleSideBar() {
    setSideBar((bar) => !bar);
  }

  function handleDropDown() {
    setDropDown((drop) => !drop);
  }

  return (
    <div className="flex min-h-screen relative">
      <div className="sticky overflow-y-auto border-r border-neutral-black-5">
        {sideBar ? (
          <CollapsedNav handleSidebar={handleSideBar} />
        ) : (
          <Navbar handleSideBar={handleSideBar} />
        )}
      </div>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className=" sticky top-0 z-50 bg-white">
          <Header
            handleSideBar={handleSideBar}
            sideBar={sideBar}
            handleDropDown={handleDropDown}
            dropDown={dropDown}
          />
        </div>
        <div className="flex-1 bg-neutral-black-4 overflow-y-auto relative">
          <Outlet />
          {dropDown ? <ProfileDropDown /> : ""}
        </div>
      </main>
    </div>
  );
};

export default Layout;
