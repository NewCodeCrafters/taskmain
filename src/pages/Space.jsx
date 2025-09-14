import { useParams, useSearchParams } from "react-router";
import HomeLink from "../components/HomeLink";
import plus from "../assets/plus-white.svg";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";
import Button from "../components/Button";
import CreateTaskModal from "../components/CreateTaskModal";
import { useModal } from "../stores/useModal";
import { useEffect } from "react";
import { useTaskStore } from "../stores/taskStore";
import DailyTaskBoardView from "../components/DailyTaskBoardView";
import DailyTaskListView from "../components/DailyTaskListView";
import DailyTaskCalenderView from "../components/DailyTaskCalenderView";
import { useProjectStore } from "../stores/useProjectStore";

// import tasks from "../data/task";

const Space = () => {
  const { id, name } = useParams();
  const { fetchTasks, tasks } = useTaskStore((s) => s);
  const { setCurrentProjectId } = useProjectStore();

  useEffect(() => {
    setCurrentProjectId(id);
  }, [id, setCurrentProjectId]);

  const filteredTasks = tasks.filter((t) => t.projectId === id);
  console.log(filteredTasks);

  const { setModalAddTask } = useModal((s) => s);

  const [viewParams, setViewParams] = useSearchParams();
  const view = viewParams.get("view") || "board";
  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex flex-col gap-6 ">
      <section className="flex justify-between">
        <div className="hidden md:flex gap-1 items-start">
          <HomeLink
            onClick={() => setViewParams({ view: "board" })}
            text="Board View"
            LinkTo={`/${name}/${id}/teamdailytask?view=board`}
            isActive={view === "board"}
          />
          <HomeLink
            onClick={() => setViewParams({ view: "list" })}
            text="List View"
            LinkTo={`/${name}/${id}/teamdailytask?view=list`}
            isActive={view === "list"}
          />
          <HomeLink
            onClick={() => setViewParams({ view: "calendar" })}
            text="Calendar"
            LinkTo={`/${name}/${id}/teamdailytask?view=calendar`}
            isActive={view === "calendar"}
          />
        </div>
        <div className="flex gap-3">
          <Filter />
          <SortBy />
          <Button
            leftIcon={<img src={plus} />}
            className="hidden md:flex ml-2 "
            onClick={() => setModalAddTask(true)}
          >
            Add Task
          </Button>
        </div>
      </section>

      <div className="overflow-y-auto">
        {view === "board" && (
          <DailyTaskBoardView filteredTask={filteredTasks} />
        )}
        {view === "list" && <DailyTaskListView />}
        {view === "calendar" && <DailyTaskCalenderView />}
      </div>
      <CreateTaskModal />
    </div>
  );
};

export default Space;
