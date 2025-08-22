/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import RouteLink from "./RouteLink";
import Button from "./Button";
import { useModal } from "../stores/useModal";
// import { useSpaces } from "../stores/useSpaces";
import { Link } from "react-router";
import lineImg from "../assets/line.svg";
import chevron from "../assets/chevron-down-2.svg";
import CreateSpace from "./createSpace";
import { useProjectStore } from "../stores/useProjectStore";

const SubNav = () => {
  const { setCreateSpaceModal } = useModal((s) => s);
  const { projects, fetchProjects } = useProjectStore((s) => s);
  useEffect(() => {
    fetchProjects();
  }, []);
  console.log(projects);
  const handleCrateSpaceModal = () => {
    setCreateSpaceModal(true);
  };
  const [expanded, setExpanded] = useState(null);
  // const handleExpand = () => {
  //   setExpanded((prev) => !prev);
  // };
  return (
    <div>
      <section className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-neutral-black-8">Spaces</span>
          <div className="flex gap-3">
            <button
              onClick={handleCrateSpaceModal}
              className="hover:cursor-pointer"
            >
              <img src="/images/add.svg" alt="" />
            </button>
            <button>
              <img src="/images/chevron-down.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          {projects.map((space) => (
            <div key={space.id}>
              <div
                // to={`/space/${space.id}`}
                className="flex py-3 px-4 hover:cursor-pointer rounded-4  items-center w-full gap-3 "
              >
                <img src="/images/star-01.svg" alt="" />
                <button
                  className="flex items-center justify-between w-full hover:cursor-pointer"
                  onClick={() => {
                    setExpanded(expanded === space.id ? null : space.id);
                  }}
                >
                  <span className="body-medium-semibold">{space.name}</span>
                  <img src={chevron} alt="" />
                </button>
              </div>

              {expanded === space.id && (
                <div className="flex gap-2 pl-6">
                  <img src={lineImg} alt="" />
                  <div className="flex gap-1 flex-col">
                    <li className="flex flex-col">
                      <Link
                        to={`/${space.name}/${space.id}/teamdailytask`}
                        className="py-3 px-4   hover:cursor-pointer
                        rounded-4 w-full"
                      >
                        Team Daily Task
                      </Link>
                      <Link
                        to={`/${space.name}/${space.id}/memberssettings`}
                        className="py-3 px-4   hover:cursor-pointer
                        rounded-4 w-full"
                      >
                        Member Settings
                      </Link>
                    </li>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 p-4 bg-neutral-black-3">
          <article className="flex flex-col gap-1">
            <h1 className="heading-5">Upgrade to Pro</h1>
            <span className="body-xsmall-regular text-neutral-black-8">
              Unlock all features on Pixelcraft
            </span>
          </article>
          <Button>Upgrade Here</Button>
        </div>
      </section>
      {/* <CreateSpace /> */}
    </div>
  );
};

export default SubNav;
