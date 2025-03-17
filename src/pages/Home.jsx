import React from "react";
import ProfileDropDown from "../components/ProfileDropDown";
import HomeLink from "../components/HomeLink";
import grid from "../assets/grid.svg";
import calendar from "../assets/calendar.svg";
import rows from "../assets/rows-01.svg";
import filter from "../assets/filter-lines.svg";
import plus from "../assets/plus-white.svg";
import plusDark from "../assets/plus.svg";
import chevron from "../assets/chevron-selector-vertical.svg";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="relative w-full flex flex-col gap-6 ">
      <span className="heading-4">Team Daily Task</span>
      <section className="flex justify-between">
        <div className="flex gap-1 items-start">
          <HomeLink text="Board View" icon={<img src={grid} />} />
          <HomeLink text="List View" icon={<img src={rows} />} />
          <HomeLink text="Calender" icon={<img src={calendar} />} />
          <img src={plusDark} alt="" className="ml-5" />
        </div>
        <div className="flex gap-3">
          <figure className="w-10 h-10 border border-paragraph rounded-full grid place-items-center">
            <img src={filter} alt="" />
          </figure>
          <figure className="w-10 h-10 border border-paragraph rounded-full grid place-items-center">
            <img src={chevron} alt="" />
          </figure>
          <Button leftIcon={<img src={plus} />} className="ml-2">
            Add Task
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
