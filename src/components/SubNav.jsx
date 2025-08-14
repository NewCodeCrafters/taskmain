import React, { useState } from "react";
import RouteLink from "./RouteLink";
import Button from "./Button";
import { useModal } from "../stores/useModal";
import { useSpaces } from "../stores/useSpaces";
import { Link } from "react-router";

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
              <button
                onClick={() =>
                  setExpanded(expanded === space.id ? null : space.id)
                }
              >
                {space.name}
              </button>
              {expanded === space.id && (
                <ul>
                  {space.items.map((item) => (
                    <li key={item.id}>
                      <Link to={item.route}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
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
    </div>
  );
};

export default SubNav;
