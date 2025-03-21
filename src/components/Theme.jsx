import React from "react";
import { Themes, useTheme } from "../stores/theme-store";

const Theme = () => {
  const { theme, toggleTheme } = useTheme((s) => s);

  return (
    <section className="bg-neutral-black-4 flex gap-3 p-1 rounded-xl justify-center items-center w-full">
      <button
        onClick={() => {
          if (theme !== Themes.light) {
            toggleTheme();
          }
        }}
        className={`flex justify-center items-center rounded-lg gap-2 px-2.5 py-2 w-full max-w-[120px]
          transition-all duration-300 ease-in-out ${
            theme === Themes.light ? "bg-white" : ""
          }
       `}
      >
        <img src="/images/sun.svg" alt="" />
        <span
          className={`  ${
            theme === "light"
              ? " font-semibold text-black"
              : "text-paragraph body-xsmall-semibold"
          } `}
        >
          Light
        </span>
      </button>
      <button
        onClick={() => {
          if (theme !== Themes.dark) {
            toggleTheme();
          }
        }}
        className={`flex justify-center items-center rounded-lg gap-2 px-2.5 py-2 w-full max-w-[120px]
          transition-all duration-300 ease-in-out ${
            theme === Themes.dark ? "bg-white" : ""
          }
       `}
      >
        <img src="/images/moon.svg" alt="" />
        <span
          className={` ${
            theme === "dark"
              ? "bg-white font-semibold text-black"
              : "text-paragraph body-xsmall-semibold "
          } `}
        >
          Dark
        </span>
      </button>
    </section>
  );
};

export default Theme;
