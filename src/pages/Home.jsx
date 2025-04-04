import React from "react";
import HomeLink from "../components/HomeLink";
import grid from "../assets/grid-white.svg";
import gridBlue from "../assets/grid-blue.svg";
import calendar from "../assets/calendar.svg";
import calendarBlue from "../assets/calendar-blue.svg";
import rows from "../assets/rows-01.svg";
import rowsBlue from "../assets/rows-blue.svg";
import plus from "../assets/plus-white.svg";
import plusDark from "../assets/plus.svg";
import Button from "../components/Button";
import { useTaskStore } from "../stores/taskStore";
import tasks from "../data/task";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import HomeLinkMobile from "../components/HomeLinkMobile";
import TaskColumn from "../components/TaskColumn";
import BoardView from "../components/BoardView";
import ListView from "../components/ListView";
import Calendar from "../components/Calendar";
import Dropdown from "../components/Dropdown";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";

const Home = () => {
  const { setTask } = useTaskStore((s) => s);

  const [viewParams, setViewParams] = useSearchParams();

  const view = viewParams.get("view") || "board";
  useEffect(() => {
    setTask(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex flex-col gap-6 ">
      <span className="heading-4">Team Daily Task</span>
      <section className="flex justify-between">
        <div className="md:hidden flex">
          <HomeLinkMobile />
        </div>
        <div className="hidden md:flex gap-1 items-start">
          <HomeLink
            onClick={() => setViewParams({ view: "board" })}
            text="Board View"
            icon={<img src={grid} />}
            activeIcon={<img src={gridBlue} />}
            LinkTo={`/?view=board`}
            isActive={view === "board"}
          />
          <HomeLink
            onClick={() => setViewParams({ view: "list" })}
            text="List View"
            icon={<img src={rows} />}
            activeIcon={<img src={rowsBlue} />}
            LinkTo={`/?view=list`}
            isActive={view === "list"}
          />
          <HomeLink
            onClick={() => setViewParams({ view: "calendar" })}
            text="Calendar"
            icon={<img src={calendar} />}
            activeIcon={<img src={calendarBlue} />}
            LinkTo={`/?view=calendar`}
            isActive={view === "calendar"}
          />

          <img src={plusDark} alt="" className="ml-5" />
        </div>
        <div className="flex gap-3">
          <Filter />
          <SortBy />
          <Button leftIcon={<img src={plus} />} className="hidden md:flex ml-2">
            Add Task
          </Button>
        </div>
      </section>
      <div className="overflow-y-auto">
        {view === "board" && <BoardView />}
        {view === "list" && <ListView />}
        {view === "calendar" && <Calendar />}
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Home;
