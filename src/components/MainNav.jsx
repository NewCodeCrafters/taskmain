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
          <RouteLink
            leftIcon={<img src="/images/pie-chart-02.svg" />}
            linkDesc="Overview"
            LinkTo="/"
          />

          <RouteLink
            leftIcon={<img src="/images/users-01.svg" />}
            linkDesc="Member settings"
            LinkTo="/membersettings"
          />

          <RouteLink
            leftIcon={<img src="/images/star-01.svg" />}
            linkDesc="Favourites"
            LinkTo="/favourites"
          />

          <RouteLink
            leftIcon={<img src="/images/message-text-circle-02.svg" />}
            linkDesc="Messages"
            LinkTo="/messages"
          />
        </div>
      </section>
    </div>
  );
};

export default MainNav;
