import React from "react";
import { Link } from "react-router";

const RouteLink = ({ src, linkDesc, LinkTo, IconSrc }) => {
  return (
    <Link to={LinkTo || null} className="">
      <button className="flex py-3 px-4 hover:cursor-pointer rounded-4  items-center w-full gap-3">
        <div className="flex items-center gap-3 w-full">
          <img src={src || null} alt="" />
          <span>{linkDesc}</span>
        </div>
        <figure>
          <img src={IconSrc || null} alt="" />
        </figure>
      </button>
    </Link>
  );
};

export default RouteLink;
