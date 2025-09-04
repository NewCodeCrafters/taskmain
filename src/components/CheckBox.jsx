import React, { useState } from "react";
import tick from "../assets/tick.svg";

const Checkbox = ({checked, onChange}) => {
  // FORMER SOLUTION
  // const [checked, setChecked] = useState(false);
  // function handleChecked() {
  //   setChecked((check) => !check);
  // }
  // console.log(checked && !allChecked && allChecked)
  return (
    <div
      onClick={onChange}
      className={`w-5 h-5 cursor-pointer flex items-center justify-center rounded-lg transition-all 
          ${checked ? "bg-primary-500" : "bg-neutral-black-3 dark:bg-background" }
        `}
    >
      {checked ? <img src={tick} alt="tick" /> : null}
    </div>
  );
};

export default Checkbox;
