import React from "react";
import file from "../assets/file-05.svg";
import { FileText } from "lucide-react";

const ProfileTaskInfo = ({ title, status, project, time }) => {
  return (
    <div className="py-3 px-4 flex items-center gap-5">
      <div>
        <FileText />
      </div>
      <div className="flex gap-2 flex-col text-heading-5">
        <h1>{title}</h1>
        <div className="flex gap-4 text-paragraph body-small-medium">
          <span>{status}</span>
          <span>.</span>
          <span>{project}</span>
          <span>.</span>
          <span>{time} ago</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileTaskInfo;
