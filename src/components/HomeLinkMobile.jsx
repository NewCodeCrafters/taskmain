import React, { useRef, useState, useEffect } from "react";
import gridBlue from "../assets/grid-blue.svg";
import grid from "../assets/grid-white.svg";
import rowsBlue from "../assets/rows-blue.svg";
import switchIcon from "../assets/switch-vertical-01.svg";
import HomeLink from "./HomeLink";
import Dropdown from "./OptionDropdown";
import { Link } from "react-router";


const HomeLinkMobile = ({ view, onChange }) => {
  const [text, setText] = useState('Board view')
  const isActive = true
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const views = ['Board view', 'List view']

  function handleSelect(view) {
    let newLinkTo = view === 'Board view' ? 'board' : 'list'

    setText(view)
    onChange({ view: newLinkTo })
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <div>
      <HomeLink
        text={text}
        icon={<img src={grid} />}
        onClick={() => {
          setOpen(!open)
        }}
        isActive={isActive}
        activeIcon={view === 'board' ? <img src={gridBlue} /> : <img src={rowsBlue} />}
        className={`border-2 pt-3 rounded-full ${ view === text.split(' ').at(0).toLowerCase() ? 'border-primary-300 text-primary-300' : '' }`}
        rightIcon={<img src={switchIcon} />}
      />
      {
        open && (
          
          <div 
          className={`absolute bg-white/70 rounded-lg z-[100] flex gap-2.5 flex-col border border-neutral-black-4 drop-shadow-lg p-4 cursor-pointer mt-2 glass`}
          ref={dropdownRef}>
          {views.map((view, index) => {
            const newLinkTo = view === 'Board view' ? 'board' : 'list';
          return (
            <Link
              key={index}
              className="px-3 flex py-1 body-medium-medium w-full"
              to={`/?view=${newLinkTo}`}
              onClick={() => handleSelect(view)}
            >
              {view}
            </Link>
          )})}
        </div>
        )
      }
    </div>
  );
};

export default HomeLinkMobile;
