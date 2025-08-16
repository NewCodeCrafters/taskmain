import { useParams, useSearchParams } from "react-router";
import { useSpaces } from "../stores/useSpaces";
import HomeLink from "../components/HomeLink";
import BoardView from "../components/BoardView";
import ListView from "../components/ListView";
import { Calendar } from "lucide-react";

const Space = () => {
  const { spaceId } = useParams(); // ✅ get spaceId from URL
  const spaces = useSpaces((state) => state.spaces);

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
      </section>

      <div className="overflow-y-auto">
        {view === "board" && <BoardView />}
        {view === "list" && <ListView />}
        {view === "calendar" && <Calendar />}
      </div>
    </div>
  );
};

export default Space;
