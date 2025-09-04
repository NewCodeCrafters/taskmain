import { useState, useEffect, useRef } from "react";

const ActionDropdown = ({ className, children, action, actionClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown open/close
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-30" ref={dropdownRef}>
      {/* Button to toggle dropdown */}
      <button onClick={toggleDropdown} className={actionClass || (isOpen ? 'text-primary-300' : '')}>
        {action}
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className={`absolute ${className}  mt-2.5 right-0 bg-white z-50 `}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;
