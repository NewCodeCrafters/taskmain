import { useTaskStore } from "../stores/taskStore";
import ListTable from "./TableComp/ListTable";
import ListViewActions from "./TableComp/actions/ListViewActions";


const OverviewListView = () => {
  const { tasks } = useTaskStore((s) => s);
  
  return (
    <div className=" w-[1092px]">
      <ListTable 
      data={tasks}
      action={<ListViewActions />} />
    </div>
  );
};

export default OverviewListView;
