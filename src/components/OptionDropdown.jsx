import { useState } from "react";
import { ChevronUp, ChevronDown, Calendar } from "lucide-react";
import TextInput from "./Input";

const Dropdown = ({ className, leftIcon, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]); // Default selected item

  const handleIsopen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div onClick={handleIsopen}>
        <TextInput
          className={className}
          InputClassName="bg-neutral-black-2"
          value={selectedItem}
          rightIcon={
            isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />
          }
          leftIcon={leftIcon}
        />
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-lg z-[100] flex gap-2.5 flex-col border border-neutral-black-4 drop-shadow-lg p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-3 flex py-1 body-medium-medium w-full"
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
