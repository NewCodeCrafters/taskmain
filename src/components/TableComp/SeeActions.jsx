import { useState } from "react";
import ActionDropdown from "../Dropdown";
import dotsVertical from "../../assets/dots-vertical.svg";
import { EllipsisVertical } from "lucide-react";

const SeeActions = ({ action }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ActionDropdown
      className="p-4 flex gap-4 flex-col rounded-lg "
      action={
        <figure className="w-10 h-10 grid place-items-center hover:cursor-pointer dark:text-white">
          {/* <img src={dotsVertical} alt="" /> */}
          <EllipsisVertical className="" />
        </figure>
      }
    >
      {action}
    </ActionDropdown>
  );
};

export default SeeActions;
