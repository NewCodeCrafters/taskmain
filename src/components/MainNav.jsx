import React from "react";
import RouteLink from "./RouteLink";
import { Link } from "react-router";

const MainNav = () => {
  return (
    <div>
      {" "}
      <section>
        <div className="flex flex-col gap-3 border-b border-neutral-black-5 pb-4">
          <span className="text-neutral-black-8">General</span>
          <Link to="/">
            <RouteLink src="/images/pie-chart-02.svg" linkDesc="Overview" />
          </Link>
          <Link to="/memberssettings">
            <RouteLink src="/images/users-01.svg" linkDesc="Member settings" />
          </Link>
          <Link to="/favourites">
            <RouteLink src="/images/star-01.svg" linkDesc="Favourites" />
          </Link>
          <Link to="/messages">
            <RouteLink
              src="/images/message-text-circle-02.svg"
              linkDesc="Messages"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainNav;
