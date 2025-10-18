import React, { useEffect } from "react";
import { Link } from "react-router";
import CollapsedNavLink from "./CollapsedNavLink";
import { MessageCircleMore, Search, Star, User, Users } from "lucide-react";
import PieChart from "../assets/PieChart";
import { useThemeStore } from "../stores/useThemeStore";
import { useProjectStore } from "../stores/useProjectStore";

const CollapsedNav = () => {
  const { theme, setTheme } = useThemeStore((s) => s);
  const { projectes } = useProjectStore((s) => s);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <div className="lg:flex flex-col items-center p-5 gap-4 dark:bg-black dark:text-white dark:border-neutral-800  border-r border-neutral-black-5  w-[95px]  h-screen md:flex hidden bg-white ">
      {/* <div className="flex flex-col items-center justify-between pt-1 top-0 left-0 z-100 bg-white "> */}
      <figure>
        <Link to="/">
          <img
            src="/images/logo.svg"
            alt=""
            className="p-[12px] m-auto hidden md:grid "
          />
        </Link>
        <div className="max-w-15 p-[12px]">
          <Search />
        </div>
      </figure>
      <section className="">
        <div className="flex flex-col items-center gap-5 border-b dark:border-neutral-700 border-neutral-black-5 pb-4 justify-center w-fit m-auto">
          <span className="text-neutral-black-8 ">General</span>
          <CollapsedNavLink
            LinkTo="/"
            image={<PieChart className="w-7 h-7" />}
          />
          <CollapsedNavLink LinkTo="/favourites" image={<Star size={30} />} />
          <CollapsedNavLink
            LinkTo="/messages"
            image={<MessageCircleMore size={30} />}
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-5">
        <span className="text-neutral-black-8">Spaces</span>
      </section>
      <section
        className={`flex flex-col bg-neutral-black-4 dark:bg-neutral-black-10 rounded-xl p-1 gap-3 mt-6`}
      >
        <button
          className="px-4 py-2 rounded-lg bg-white dark:bg-transparent"
          onClick={() => setTheme("light")}
        >
          <img src="/images/sun.svg" alt="" />
        </button>
        <button
          className={`px-4 py-2 rounded-lg dark:bg-black`}
          onClick={() => setTheme("dark")}
        >
          <img src="/images/moon.svg" alt="" />
        </button>
      </section>
    </div>
  );
};

export default CollapsedNav;
