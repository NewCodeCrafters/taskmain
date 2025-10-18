import React from "react";
import imageIcon from "../assets/image-03.svg";
import trash from "../assets/trash-01.svg";
const ImageFile = ({ task }) => {
  return (
    <div className="flex gap-[62px] p-4 border rounded-xl border-neutral-black-5">
      <div className="flex gap-3 items-center">
        <figure>
          <img src={imageIcon} alt="" />
        </figure>
        <div className="flex flex-col gap-1 ">
          <span className="body-small-semibold">Home Page 1.png</span>
          <span className="text-neutral-black-8">2MB</span>
        </div>
      </div>
      <figure>
        <img src={trash} alt="" />
      </figure>
    </div>
  );
};

export default ImageFile;
