import React from "react";
import { Star, Trash } from "lucide-react";

const ListViewActions = () => {
  return (
    <div className="flex items-center gap-2.5 w-52">
      <ul className="flex flex-col items-start gap-3">
        <li className="flex items-center gap-4 text-lg ">
          <Star className="text-amber-400" /> Add to favourites
        </li>
        <li className="flex items-center text-error-100 gap-4 text-lg">
          <Trash className="text-error-100 " /> Add to trash
        </li>
      </ul>
    </div>
  );
};

export default ListViewActions;
