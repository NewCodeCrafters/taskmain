import Checkbox from '../Checkbox'
import ProgressBar from '../ProgressBar';
import { useModal } from '../../stores/useModal';
import TaskInfoModal from '../taskInfoModal';
import Interactions from './Interactions';
import { useTaskStore } from './store/useTableTaskStore';
import SeeActions from './SeeActions';



const ListTable = ({ data, action }) => {
   const {
    checkedTasks,
    toggle,
    toggleAll,
    currentData,
    getDueDateColor,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    rowLength,
    locale,
    options
  } = useTaskStore();

  const { setModal, setTaskId } = useModal((s) => s);

  const handleTaskId = (id) => {
    setTaskId(id);
    setModal(true);
  };

  const allChecked = data.length > 0 && data.every((t) => checkedTasks[t.id]);

  const formattedDate = (dueDate) =>
    new Intl.DateTimeFormat(locale, options).format(new Date(dueDate));

  return (
    <div className='scrollBar'>
        <table className="min-w-full border-collapse bg-white " >
            <thead>
            <tr className="bg-neutral-black-5 dark:bg-background dark:text-white body-small-semibold border-collapse border dark:border-neutral-600 border-gray-300 text-left">
                <th className="p-3">
                <div onClick={() => toggleAll(data, allChecked)}>
                    <Checkbox 
                    checked={allChecked}
                    onChange={() => toggleAll(data, allChecked)} />
                </div>
                </th>
                <th className="p-3 border dark:border-neutral-600 border-gray-300">Task Name</th>
                <th className="p-3  border dark:border-neutral-600 border-gray-300">Project</th>
                <th className="p-3  border dark:border-neutral-600 border-gray-300">Assignee</th>
                <th className="p-3  border dark:border-neutral-600 border-gray-300">Due Date</th>
                <th className="p-3  border dark:border-neutral-600 border-gray-300">Status</th>
                <th className="p-3  border dark:border-neutral-600 border-gray-300">Progress</th>
                <th className="p-3"></th>
            </tr>
            </thead>
        <tbody>
          {currentData(data).map((task) =>{ 

            // Format the dates to look like 12 Aug,2025
                // Dates seprated into parts before formatting to add a comma
            const parts = new Intl.DateTimeFormat(
                    locale,
                    options
                ).formatToParts(new Date(task.dueDate))
            const formattedDate = `${parts.find(part => part.type === 'day').value} ${parts.find(part => part.type === 'weekday').value}, ${parts.find(part => part.type === 'year').value}`
          return ( 
            <tr 
            key={task.id} 
            className="border hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer border-gray-300 dark:border-neutral-700 dark:hover:bg-background dark:bg-black dark:text-white"
            onClick={() => handleTaskId(task.id)}>
              <td 
              className="p-3 border dark:border-neutral-700 border-gray-300"
              onClick={(e) => e.stopPropagation()}>
                <Checkbox checked={!!checkedTasks[task.id]} onChange={() => toggle(task.id)} />
              </td>

              {/* Styled Task Column */}
              <td className="p-3 body-small-medium border dark:border-neutral-700 border-gray-300 dark:text-white text-black">
                {task.title}
              </td>

              {/*  */}
              <td className="p-5">
                <p>H</p>
              </td>

              <td className="p-5 border dark:border-neutral-700 border-gray-300 text-black" >
                <p>VDM</p>
              </td>

              {/* Assignee Column with Given Avatar */}
              {/* <td className="p-3 flex">
                {task.assignees.map((task) => (
                  <img
                    src={task.avatar}
                    className="w-8 h-8 rounded-full"
                    alt="Assignee"
                  />
                ))}
              </td> */}
              <td
                className={`p-2 border dark:border-neutral-700 border-gray-300 body-small-medium ${getDueDateColor(
                  task.dueDate
                )}`}
              >
                {formattedDate}
              </td>

              
              <td className="p-3 border dark:border-neutral-700 border-gray-300 text-black">
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

                {/* Dots container */}
              <td 
              className='p-3 border dark:border-neutral-700 border-gray-300 text-black'
              onClick={(e) => e.stopPropagation()}>
                <div className='relative'>
                    <SeeActions action={action} />
                </div>
              </td>
                    
            </tr>
            )})
            }
        </tbody>
        <TaskInfoModal />
      </table>

        {/* User table interactions to include the current page and the number of pages, the control(pagination) and the dropdown to increase the number of pages */}
        <Interactions
        data = {data}
        itemsPerPage = {itemsPerPage}
        page = { page }
        rowLength = { rowLength }
        setItemsPerPage = { setItemsPerPage }
        setPage = { setPage }
        />
    </div>
  )
}

export default ListTable