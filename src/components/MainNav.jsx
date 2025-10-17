import React from "react";
import RouteLink from "./RouteLink";
import picChart01 from "/images/pie-chart-01.svg";
import picChart02 from "/images/pie-chart-02.svg";
import { Link } from "react-router";
import { MessageCircleMore, Star, Users } from "lucide-react";
import PieChart from "../assets/PieChart";

const MainNav = ({ onClickMain }) => {
  return (
    <div>
      {" "}
      <section>
        <div className="flex flex-col gap-3 border-b dark:border-neutral-700 border-neutral-black-5 pb-4">
          <span className="text-neutral-black-8">General</span>
          <RouteLink
            leftIcon={<PieChart />}
            linkDesc="Overview"
            LinkTo="/"
            onClick={onClickMain}
          />

          <RouteLink
            leftIcon={<Star />}
            linkDesc="Favourites"
            LinkTo="/favourites"
            onClick={onClickMain}
          />

          <RouteLink
            leftIcon={<MessageCircleMore />}
            linkDesc="Messages"
            LinkTo="/messages"
            onClick={onClickMain}
          />
        </div>
      </section>
    </div>
  );
};

export default MainNav;
