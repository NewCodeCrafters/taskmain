/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import RouteLink from "./RouteLink";
import Button from "./Button";
import { useModal } from "../stores/useModal";
// import { useSpaces } from "../stores/useSpaces";
import { Link } from "react-router";
import lineImg from "../assets/line.svg";
import CreateSpace from "./createSpace";
import { useProjectStore } from "../stores/useProjectStore";
import { ChevronDown, Star } from "lucide-react";

const SubNav = ({ onClickMain }) => {
  const { setCreateSpaceModal } = useModal((s) => s);
  const { projectes, fetchProjects } = useProjectStore((s) => s);
  useEffect(() => {
    fetchProjects();
  }, []);
  // console.log(projects);
  const handleCrateSpaceModal = () => {
    setCreateSpaceModal(true);
    onClickMain();
  };
  const [expanded, setExpanded] = useState(null);
  const projects = projectes?.data;

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
              <ChevronDown className="dark:text-white" />
            </button>
          </div>
        </div>
        <div>
          {projects?.map((space) => (
            <div key={space._id}>
              <div
                // to={`/space/${space.id}`}
                className="flex py-3 px-4 dark:text-white hover:cursor-pointer rounded-4  items-center w-full gap-3 "
              >
                <Star />
                <button
                  className="flex items-center justify-between w-full hover:cursor-pointer"
                  onClick={() => {
                    setExpanded(expanded === space._id ? null : space._id);
                  }}
                >
                  <span className="body-medium-semibold">{space.name}</span>
                  <ChevronDown
                    className={` transition-transform duration-500 ease-in-out ${
                      expanded === space._id ? "rotate-180 " : "rotate-0"
                    }`}
                    alt=""
                  />
                </button>
              </div>

              {expanded === space._id && (
                <div className="flex dark:text-white gap-2 pl-6">
                  <img src={lineImg} alt="" />
                  <div className="flex gap-1 flex-col">
                    <li className="flex flex-col">
                      <Link
                        to={`/${space.name}/${space._id}/teamdailytask`}
                        className="py-3 px-4   hover:cursor-pointer
                        rounded-4 w-full"
                        onClick={onClickMain}
                      >
                        Team Daily Task
                      </Link>
                      <Link
                        to={`/${space.name}/${space._id}/memberssettings`}
                        className="py-3 px-4   hover:cursor-pointer
                        rounded-4 w-full"
                        onClick={onClickMain}
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

        <div className="flex flex-col gap-4 p-4 dark:bg-background dark:text-white rounded-lg dark:border-neutral-700 bg-neutral-black-3 dark:border">
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
