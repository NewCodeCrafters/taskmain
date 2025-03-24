import Checkbox from "./Checkbox";
import ProgressBar from "./ProgressBar";
import { useTaskStore } from "../stores/taskStore";
import threeDotIcon from "../assets/dots-vertical.svg";

const ListView = () => {
  const { tasks } = useTaskStore((s) => s);
  const getDueDateColor = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = (due - today) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) return "text-error-100";
    if (diffDays <= 3) return "text-warning-200";
    return "text-gray-600";
  };
  return (
    <div className="overflow-x-auto bg-white w-[1092px]">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-neutral-black-5 body-small-semibold border-collapse border border-gray-300 text-left">
            <th className="p-3">
              <Checkbox />
            </th>
            <th className="p-3 border border-gray-300">Task Name</th>
            <th className="p-3  border border-gray-300">Project</th>
            <th className="p-3  border border-gray-300">Assignee</th>
            <th className="p-3  border border-gray-300">Due Date</th>
            <th className="p-3  border border-gray-300">Staus</th>
            <th className="p-3  border border-gray-300">Progress</th>
            <th className="p-3  border border-gray-300"></th>
            {/* <th className="p-3">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border border-gray-300">
              <td className="p-3 border border-gray-300">
                <Checkbox checked={task.checked} />
              </td>

              {/* Styled Task Column */}
              <td className="p-3 body-small-medium border border-gray-300 text-black">
                {task.title}
              </td>

              <td className="p-3 border body-small-medium border-gray-300">
                {task.project}
              </td>

              {/* Assignee Column with Given Avatar */}
              <td className="p-3 flex">
                {task.assignees.map((task) => (
                  <img
                    src={task.avatar}
                    className="w-8 h-8 rounded-full"
                    alt="Assignee"
                  />
                ))}
              </td>
              <td
                className={`p-2 border border-gray-300 body-small-medium ${getDueDateColor(
                  task.dueDate
                )}`}
              >
                {task.dueDate}
              </td>

              <td className="p-3 border border-gray-300 text-black">
                <span
                  className={` px-2 py-1 rounded-md body-small-medium ${
                    task.status === "Completed"
                      ? "bg-success-100"
                      : task.status === "In Progress"
                      ? "bg-secondary-100 "
                      : "bg-primary-100 "
                  }`}
                >
                  {task.status}
                </span>
              </td>

              <td className="p-5 body-small-medium flex gap-2">
                <div className="flex items-center gap-2 w-full">
                  <span className="body-small-medium">{task.progress}%</span>
                  <ProgressBar progress={task.progress} />
                </div>
              </td>

              <td className="p-3 border border-gray-300">
                <img
                  src={threeDotIcon}
                  className="w-6 h-6 cursor-pointer"
                  alt="Options"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
