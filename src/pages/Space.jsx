import { useParams, useSearchParams } from "react-router";
import { useSpaces } from "../stores/useSpaces";
import HomeLink from "../components/HomeLink";
import BoardView from "../components/BoardView";
import ListView from "../components/ListView";
import { Calendar } from "lucide-react";
import plus from "../assets/plus-white.svg";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";
import Button from "../components/Button";
import CreateTaskModal from "../components/CreateTaskModal";
import { useModal } from "../stores/useModal";
import { useEffect } from "react";
// import tasks from "../data/task";

const Space = () => {
  const { spaceId } = useParams(); // ✅ get spaceId from URL
  const { fetchProjects, spaces } = useSpaces((s) => s);
  const { setModalAddTask } = useModal((s) => s);

  const currentSpace = spaces.find((s) => String(s.id) === spaceId);

  const [viewParams, setViewParams] = useSearchParams();
  const view = viewParams.get("view") || "board";

  if (!currentSpace) {
    return <div className="p-6">Space not found</div>;
  }

  return (
    <div className="relative flex flex-col gap-6 ">
      <section className="flex justify-between">
        <div className="hidden md:flex gap-1 items-start">
          <HomeLink
            onClick={() => setViewParams({ view: "board" })}
            text="Board View"
            LinkTo={`/space/${spaceId}/teamdailytask?view=board`}
            isActive={view === "board"}
          />
          <HomeLink
            onClick={() => setViewParams({ view: "list" })}
            text="List View"
            LinkTo={`/space/${spaceId}/teamdailytask?view=list`}
            isActive={view === "list"}
          />
          <HomeLink
            onClick={() => setViewParams({ view: "calendar" })}
            text="Calendar"
            LinkTo={`/space/${spaceId}/teamdailytask?view=calendar`}
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
        {view === "board" && <BoardView />}
        {view === "list" && <ListView />}
        {view === "calendar" && <Calendar />}
      </div>
      <CreateTaskModal />
    </div>
  );
};

export default Space;
