import React, { useState } from "react";
import RouteLink from "./RouteLink";
import Button from "./Button";
import { useModal } from "../stores/useModal";
import { useSpaces } from "../stores/useSpaces";
import { Link } from "react-router";
import lineImg from "../assets/line.svg";

const SubNav = () => {
  const { setCreateSpaceModal } = useModal((s) => s);
  const spaces = useSpaces((state) => state.spaces);
  const handleCrateSpaceModal = () => {
    setCreateSpaceModal(true);
  };
  const [expanded, setExpanded] = useState(null);

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
          {spaces.map((space) => (
            <div key={space.id}>
              <Link
                to={`/space/${space.id}`}
                className="flex py-3 px-4 hover:cursor-pointer rounded-4  items-center w-full gap-3 "
              >
                <img src="/images/star-01.svg" alt="" />
                <button
                  onClick={() =>
                    setExpanded(expanded === space.id ? null : space.id)
                  }
                >
                  <span className="body-medium-semibold">{space.name}</span>
                </button>
              </Link>
              <ul className="">
                {expanded === space.id && (
                  <div className="flex gap-2 pl-6">
                    <img src={lineImg} alt="" />
                    <div className="flex gap-1 flex-col">
                      {space.items.map((item) => (
                        <li key={item.id} className="flex flex-col">
                          <Link
                            to={item.route}
                            className="py-3 px-4   hover:cursor-pointer
                        rounded-4 w-full"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                )}
              </ul>
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
    </div>
  );
};

export default SubNav;
