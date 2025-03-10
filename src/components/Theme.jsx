import React from "react";

const Theme = () => {
  return (
    <section className="bg-neutral-black-4 flex gap-3 p-1 rounded-xl justify-center items-center w-full">
      <button className="flex justify-center items-center rounded-lg gap-2 px-2.5 py-2 w-full max-w-[120px] bg-white ">
        <img src="/images/sun.svg" alt="" />
        <span className="text-paragraph body-xsmall-semibold">Light</span>
      </button>
      <button className="flex justify-center items-center rounded-lg gap-2 px-2.5 py-2 w-full max-w-[120px] ">
        <img src="/images/moon.svg" alt="" />
        <span className="text-paragraph body-xsmall-semibold">Dark</span>
      </button>
    </section>
  );
};

export default Theme;
