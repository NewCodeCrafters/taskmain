import React from "react";

const Building = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5 11H6.7C5.57989 11 5.01984 11 4.59202 11.218C4.21569 11.4097 3.90973 11.7157 3.71799 12.092C3.5 12.5198 3.5 13.0799 3.5 14.2V21M21.5 21V6.2C21.5 5.0799 21.5 4.51984 21.282 4.09202C21.0903 3.71569 20.7843 3.40973 20.408 3.21799C19.9802 3 19.4201 3 18.3 3H14.7C13.5799 3 13.0198 3 12.592 3.21799C12.2157 3.40973 11.9097 3.71569 11.718 4.09202C11.5 4.51984 11.5 5.0799 11.5 6.2V21M22.5 21H2.5M15 7H18M15 11H18M15 15H18"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Building;
