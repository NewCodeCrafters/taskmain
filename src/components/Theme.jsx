import React from "react";
import { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");
  function handleTheme(selectedTheme) {
    setTheme(selectedTheme);
  }

  return (
    <section className="bg-neutral-black-4 flex gap-3 p-1 rounded-xl justify-center items-center w-full">
      <button
        onClick={() => handleTheme("light")}
        className={`flex justify-center items-center rounded-lg gap-2 px-2.5 py-2 w-full max-w-[120px] transitin-all duration-300 ease-in-out ${
          theme === "light" ? " bg-white font-semibold text-black" : ""
        } `}
      >
        <img src="/images/sun.svg" alt="" />
        <span className="text-paragraph body-xsmall-semibold">Light</span>
      </button>
      <button
        onClick={() => handleTheme("dark")}
        className={`flex justify-center items-center rounded-lg gap-2 px-2.5 py-2 w-full max-w-[120px]
          transitin-all duration-300 ease-in-out
        ${theme === "dark" ? "bg-white font-semibold text-black" : ""} `}
      >
        <img src="/images/moon.svg" alt="" />
        <span className="text-paragraph body-xsmall-semibold">Dark</span>
      </button>
    </section>
  );
};

export default Theme;
