import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router";
import ProfileDropDown from "./ProfileDropDown";
import CollapsedNav from "./CollapsedNav";
import MobileNavbar from "./MobileNavbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ProfileModal from "./ProfileModal";
import { useModal } from "../stores/useModal";
import CreateSpace from "./createSpace";
import TaskSucessModal from "./TaskSucessModal";

const Layout = () => {
  const [sideBar, setSideBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [mobileBar, setMobileBar] = useState(false);
  const { modalProfile } = useModal((s) => s);
  const { taskSuccessModal, setTaskSuccessModal } = useModal((s) => s);

  function handleSideBar() {
    setSideBar((prev) => !prev);
    if (sideBar) setMobileBar(false);
  }

  function handleDropDown() {
    if (dropDown === false) setDropDown(true);
    if (dropDown === true) setDropDown(false);
  }

  function handleSetMobileBar() {
    setMobileBar((prev) => !prev);
    if (!mobileBar) setSideBar(false);
  }

  return (
    <div className="flex h-screen relative">
      <div className="sticky border-r h-screen dark:border-neutral-700 border-neutral-black-5 overflow-y-scroll scrollBar dark:bg-black">
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
      <main className="flex flex-1 h-screen flex-col overflow-y-auto scrollBar">
        <div className=" sticky top-0 z-50 bg-white">
          <Header
            handleSideBar={handleSideBar}
            sideBar={sideBar}
            handleDropDown={handleDropDown}
            dropDown={dropDown}
            setDropDown={setDropDown}
            handleSetMobileBar={handleSetMobileBar}
          />
        </div>
        <div className="flex-1 bg-neutral-black-4 dark:bg-neutral-black-12  relative py-5 px-6 h-screen overflow-y-auto scrollBar">
          <DndProvider backend={HTML5Backend}>
            <Outlet />
          </DndProvider>
        </div>
        {mobileBar && <MobileNavbar handleSetMobileBar={handleSetMobileBar} />}
        {modalProfile && <ProfileModal />}
      </main>
      <CreateSpace />
      {taskSuccessModal && (
        <TaskSucessModal
          isOpen={taskSuccessModal}
          onClose={() => setTaskSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default Layout;
