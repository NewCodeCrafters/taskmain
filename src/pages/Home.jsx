import React from "react";
import HomeLink from "../components/HomeLink";
import grid from "../assets/grid-white.svg";
import gridBlue from "../assets/grid-blue.svg";
import calendar from "../assets/calendar.svg";
import calendarBlue from "../assets/calendar-blue.svg";
import rows from "../assets/rows-01.svg";
import rowsBlue from "../assets/rows-blue.svg";
import filter from "../assets/filter-lines.svg";
import plus from "../assets/plus-white.svg";
import plusDark from "../assets/plus.svg";
import chevron from "../assets/chevron-selector-vertical.svg";
import Button from "../components/Button";
<<<<<<< HEAD
import { useTaskStore } from "../stores/taskStore";
import tasks from "../data/task";
import { useEffect } from "react";
import { Outlet } from "react-router";
import HomeLinkMobile from "../components/HomeLinkMobile";

const Home = () => {
  const { setTask } = useTaskStore((s) => s);

  useEffect(() => {
    setTask(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
=======
import TaskColumn from "../components/TaskColumn";
import { useTaskStore } from "../stores/taskStore";
import tasks from "../data/task";

const Home = () => {
  const { setTask } = useTaskStore((s) => s);
  setTask(tasks);
>>>>>>> 37d2d279865469d2c8a5eee73ff878a27383c8a2

  return (
    <div className="relative flex flex-col gap-6 ">
      <span className="heading-4">Team Daily Task</span>
      <section className="flex justify-between">
        <div className="md:hidden flex">
          <HomeLinkMobile />
        </div>
        <div className="hidden md:flex gap-1 items-start">
          <HomeLink
            text="Board View"
            icon={<img src={grid} />}
            LinkTo="/"
            activeIcon={<img src={gridBlue} />}
          />
          <HomeLink
            text="List View"
            icon={<img src={rows} />}
            LinkTo="/listview"
            activeIcon={<img src={rowsBlue} />}
          />
          <HomeLink
            text="Calendar"
            icon={<img src={calendar} />}
            LinkTo="/calendar"
            activeIcon={<img src={calendarBlue} />}
          />
          <img src={plusDark} alt="" className="ml-5" />
        </div>
        <div className="flex gap-3">
          <figure className="w-10 h-10 border border-paragraph rounded-full grid place-items-center">
            <img src={filter} alt="" />
          </figure>
          <figure className="w-10 h-10 border border-paragraph rounded-full grid place-items-center">
            <img src={chevron} alt="" />
          </figure>
          <Button leftIcon={<img src={plus} />} className="hidden md:flex ml-2">
            Add Task
          </Button>
        </div>
      </section>
<<<<<<< HEAD
      <div className="overflow-y-auto">
        <Outlet />
      </div>
=======
      <section className="flex gap-6">
        <TaskColumn status="To Do" className="border-neutral-black-5" />
        <TaskColumn status="In Progress" className="border-primary-500" />
        <TaskColumn status="Completed" className="border-success-300" />
        <figure className="w-full max-w-[102px] h-[50px] border rounded-[100px] border-neutral-black-7 grid place-items-center ">
          <img src={plusDark} alt="" />
        </figure>
      </section>
>>>>>>> 37d2d279865469d2c8a5eee73ff878a27383c8a2
    </div>
  );
};

export default Home;
