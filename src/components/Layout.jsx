import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router";
import ProfileDropDown from "./ProfileDropDown";
import CollapsedNav from "./CollapsedNav";
import MobileNavbar from "./MobileNavbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Layout = () => {
  const [sideBar, setSideBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [mobileBar, setMobileBar] = useState(false);

  function handleSideBar() {
    setSideBar((prev) => !prev);
    if (sideBar) setMobileBar(false);
  }

  function handleDropDown() {
    setDropDown((drop) => !drop);
  }

  function handleSetMobileBar() {
    setMobileBar((prev) => !prev);
    if (!mobileBar) setSideBar(false);
  }

  return (
    <div className="flex min-h-screen relative ">
      <div className="sticky overflow-y-auto border-r border-neutral-black-5">
        {sideBar ? (
          <CollapsedNav handleSidebar={handleSideBar} />
        ) : (
          <Navbar
            handleSideBar={handleSideBar}
            handleSetMobileBar={handleSetMobileBar}
            className="hidden md:flex"
          />
        )}
      </div>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className=" sticky top-0 z-50 bg-white">
          <Header
            handleSideBar={handleSideBar}
            sideBar={sideBar}
            handleDropDown={handleDropDown}
            dropDown={dropDown}
            handleSetMobileBar={handleSetMobileBar}
          />
        </div>
<<<<<<< HEAD
        <div className="flex-1 bg-neutral-black-4 relative py-5 px-6">
=======
        <div className="flex-1 bg-neutral-black-4 relative py-5 px-6 overflow-y-auto">
>>>>>>> 37d2d279865469d2c8a5eee73ff878a27383c8a2
          <DndProvider backend={HTML5Backend}>
            <Outlet />
          </DndProvider>
          {dropDown && <ProfileDropDown />}
        </div>
        {mobileBar && <MobileNavbar handleSetMobileBar={handleSetMobileBar} />}
      </main>
    </div>
  );
};

export default Layout;
