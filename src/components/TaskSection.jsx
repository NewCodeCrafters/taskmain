import React, { useEffect, useState } from "react";
import { useLocation } from "react-router"
const TaskSection = () => {
  const locationName = useLocation().pathname;
  const [pageName, setPageName] = useState('Development Stuff')
  // const { pageName, setPageName } = pageTitleStore((s) => s)
  // setPageName(locationName)
  console.log(locationName)
  useEffect(() => {
    if(locationName.includes('memberssettings')) {
      setPageName('Member Settings')
    } else if(locationName.includes('messages')) {
      setPageName('Messages')
    } else if(locationName.includes('favourites')) {
      setPageName('Favourites')
    }else if(locationName.includes('profileSettings')){
      setPageName('Profile Settings')
    } else {
      setPageName('Development Stuff')
    }
  }, [locationName])
  
  return (
    <div className="flex gap-2 w-auto">
      <span className={`${
        pageName === 'Development Stuff' ? 'text-paragraph' : 'text-black'
      } hidden lg:grid heading-4 md:heading-5 dark:text-white`}>
        { pageName }
      </span>
      {
        pageName === 'Development Stuff' && (
          <>
            <span className="hidden lg:grid heading-5">/</span>
            <span className="hidden lg:grid heading-5">Team daily Task</span>
          </>
        ) 
      }
    </div>
  );
};

export default TaskSection;
