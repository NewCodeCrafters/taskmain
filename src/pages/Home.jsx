import React from "react";
import HomeLink from "../components/HomeLink";
import grid from "../assets/grid-white.svg";
import gridBlue from "../assets/grid-blue.svg";
import calendar from "../assets/calendar.svg";
import calendarBlue from "../assets/calendar-blue.svg";
import rows from "../assets/rows-01.svg";
import rowsBlue from "../assets/rows-blue.svg";
// import plus from "../assets/plus-white.svg";
// import plusDark from "../assets/plus.svg";
import Button from "../components/Button";
import { useTaskStore } from "../stores/taskStore";
// import tasks from "../data/task";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import HomeLinkMobile from "../components/HomeLinkMobile";
import Dropdown from "../components/Dropdown";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";
import DatePick from "../components/DatePicker";
import CreateTaskModal from "../components/CreateTaskModal";
import CreateSpace from "../components/createSpace";
import OverviewListView from "../components/OverviewListView";
import OverViewBoardView from "../components/OverviewBoardView";
import OverviewCalendarView from "../components/OverviewCalendarView";
import { useUserStore } from "../stores/useUserStore";

const Home = () => {
  const { fetchTasks, tasks } = useTaskStore((s) => s);
  // const { fetchProjects } = useProjectStore((s) => s);

  const [viewParams, setViewParams] = useSearchParams();

  const view = viewParams.get("view") || "board";
  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const assigneesId = tasks.map((t) => t.assignees);

  console.log(assigneesId);

  return (
    <div className="relative flex flex-col gap-6 ">
      <section className="flex justify-between">
        <div className="md:hidden flex">
          <HomeLinkMobile 
          view={view} 
          onChange={setViewParams}
          />
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

          {/* <img src={plusDark} alt="" className="ml-5" /> */}
        </div>
        <div className="flex gap-3">
          <Filter />
          <SortBy />
          {/* <Button leftIcon={<img src={plus} />} className="hidden md:flex ml-2">
            Add Task
          </Button> */}
        </div>
      </section>
      <div className="">
        {view === "board" && <OverViewBoardView />}
        {view === "list" && <OverviewListView />}
        {view === "calendar" && <OverviewCalendarView />}
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Home;
