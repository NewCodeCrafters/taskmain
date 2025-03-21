import React from "react";
import RouteLink from "./RouteLink";
import Button from "./Button";

const SubNav = () => {
  return (
    <div>
      <section className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-neutral-black-8">Spaces</span>
          <div className="flex gap-3">
            <button>
              <img src="/images/add.svg" alt="" />
            </button>
            <button>
              <img src="/images/chevron-down.svg" alt="" />
            </button>
          </div>
        </div>
        <RouteLink
          leftIcon={<img src="/images/users-plus.svg" />}
          linkDesc="Human Resources"
        />
        <RouteLink
          leftIcon={<img src="/images/building-06.svg" />}
          linkDesc="Agency branding"
        />
        <RouteLink
          leftIcon={<img src="/images/layers-two-02.svg" />}
          linkDesc="Development stuff"
          IconSrc="images/chevron-down.svg"
        />
        <div className="flex gap-2">
          <figure className="pl-6">
            <img src="/images/line.svg" alt="" />
          </figure>
          <div className="flex flex-col gap-1">
            <RouteLink linkDesc="Team Daily Task" />
            <RouteLink linkDesc="Documentation" />
          </div>
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
