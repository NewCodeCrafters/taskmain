import React, { useState } from "react";
import tick from "../assets/tick.svg";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked((check) => !check);
  }
  return (
    <div
      onClick={handleChecked}
      className={`w-5 h-5 flex items-center justify-center rounded-lg transition-all 
          ${checked ? "bg-primary-500" : "bg-neutral-black-3"}
        `}
    >
      {checked && <img src={tick} alt="tick" />}
    </div>
  );
};

export default Checkbox;
