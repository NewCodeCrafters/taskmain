import React from "react";

const Logo = () => {
  return (
    <div>
      <article className="flex items-center gap-[10px]">
        <img src="/images/logo.svg" alt="" />
        <span className="text-primary-500 heading-5">TaskTonic</span>
      </article>
    </div>
  );
};

export default Logo;
