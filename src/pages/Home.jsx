import React from "react";
import ProfileDropDown from "../components/ProfileDropDown";
import HomeLink from "../components/HomeLink";

const Home = () => {
  return (
    <div className="relative w-full flex flex-col gap-6 ">
      <span className="heading-4">Team Daily Task</span>
      <section>
        <HomeLink text="Board View" />
        <HomeLink text="List View" />
        <HomeLink text="Calender" />
        <HomeLink text="Timeline" />
      </section>
    </div>
  );
};

export default Home;
