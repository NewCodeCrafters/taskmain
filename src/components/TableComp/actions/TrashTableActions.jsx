import { RotateCw } from "lucide-react";
import React from "react";

const TrashTableActions = () => {
  return (
    <div className="flex items-center gap-2.5 w-52">
      <ul className="flex flex-col items-start gap-3">
        <li className="flex items-center gap-4 text-lg ">
          <RotateCw className="" /> Restore
        </li>
        <li className="flex items-center gap-4 text-lg">
          <Trash className="text-error-100 " />
          Delete
        </li>
      </ul>
    </div>
  );
};

export default TrashTableActions;
