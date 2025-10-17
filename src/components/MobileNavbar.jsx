import React from "react";
import Navbar from "./Navbar";

const MobileNavbar = ({ handleSetMobileBar }) => {
  return (
    <div
      className="inset-0 fixed bg-black/50 md:hidden z-50  h-screen "
      onClick={handleSetMobileBar}
    >
      <Navbar
        className="flex bg-white flex-grow overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        onClicked={handleSetMobileBar}
        onClickMain={handleSetMobileBar}
      />
    </div>
  );
};

export default MobileNavbar;
