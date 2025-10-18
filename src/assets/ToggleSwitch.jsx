import React from "react";

const ToggleSwitch = ({ isOn, onToggle }) => {
  return (
    <svg
      width="44"
      height="25"
      viewBox="0 0 44 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onToggle}
      className="cursor-pointer"
    >
      <g clipPath="url(#clip0)">
        {/* Track */}
        <rect
          y="0.5"
          width="44"
          height="24"
          rx="12"
          fill={isOn ? "#4F46E5" : "#ECEFF3"} // purple when on, gray when off
        />
        {/* Knob with drop shadow */}
        <g filter="url(#filter0_dd)">
          <circle
            cx={isOn ? 32 : 12} // moves knob left (12) or right (32)
            cy="12.5"
            r="10"
            fill="#F8FAFB"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="-1"
          y="0.5"
          width="46"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <rect y="0.5" width="44" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ToggleSwitch;
