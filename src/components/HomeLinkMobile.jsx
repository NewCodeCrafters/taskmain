import React from "react";
import gridBlue from "../assets/grid-blue.svg";
import grid from "../assets/grid-white.svg";
import switchIcon from "../assets/switch-vertical-01.svg";
import HomeLink from "./HomeLink";

const HomeLinkMobile = () => {
  return (
    <div>
      <HomeLink
        text="Board View"
        icon={<img src={grid} />}
        LinkTo="/"
        activeIcon={<img src={gridBlue} />}
        className="border-2 pt-3 rounded-full"
        rightIcon={<img src={switchIcon} />}
      />
    </div>
  );
};

export default HomeLinkMobile;
