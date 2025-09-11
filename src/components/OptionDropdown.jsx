import { useRef, useState } from "react";
import { ChevronUp, ChevronDown, Calendar } from "lucide-react";
import TextInput from "./Input";

const Dropdown = ({ 
  className, 
  leftIcon, 
  items = [] , 
  onChange, 
  perPage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]); // Default selected item
  const [openUp, setOpenUp] = useState(false)
  const containerRef = useRef(null)

  const handleIsopen = () => {
    if(!isOpen && containerRef.current){
      // Function for a smart drop down to prevent user from scrolling down when there's space down
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Check if ther's space down
      if(spaceBelow < 200 && spaceAbove > spaceBelow) {
        setOpenUp(true);
      } else {
        setOpenUp(false);
      }
    }
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    onChange(item)
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <div onClick={handleIsopen} className="cursor-pointer">
        <TextInput
          className={className}
          InputClassName="bg-neutral-black-2 dark:bg-background"
          value={perPage}
          rightIcon={<ChevronDown size={18} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} />}
          leftIcon={leftIcon}
        />
      </div>

      {isOpen && (
        <div className={`absolute w-full bg-white dark:text-white dark:bg-black dark:border-neutral-800 rounded-lg z-[100] flex gap-2.5 flex-col border border-neutral-black-4 drop-shadow-lg p-4 cursor-pointer ${
          openUp ? 'bottom-full mb-2' : 'top-full mt-2'
        }`}>
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
