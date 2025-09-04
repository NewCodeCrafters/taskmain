import React from "react";
import ProfileDropDown from "../components/ProfileDropDown";
import mailIcon from "../assets/mail-01.svg";

import "../index.css";
import TextInput from "../components/Input";
import Button from "../components/Button";
import TeamMember from "../components/TeamMember";
import { useTaskStore } from "../stores/taskStore";
import { CircleAlert } from "lucide-react";

const MembersSetttings = () => {
  const { tasks } = useTaskStore((s) => s);

  return (
    <section className="flex flex-col gap-6 dark:bg-black dark:text-white    bg-white p-6 w-full">
      <div className="flex flex-col gap-4 border-b dark:border-b-neutral-700 border-b-neutral-black-5 pb-6">
        <div className="flex flex-col gap-3">
          <h1 className="heading-4">Team Members</h1>
          <p className="flex items-center gap-2">If you’re owner you can manage all your member <CircleAlert /></p>
        </div>
        <div className="flex items-center w-full gap-3">
          <TextInput
            className="flex-1"
            leftIcon={<img src={mailIcon} />}
            placeholder="Enter email address"
          />
          <Button className="flex">Invite member</Button>
        </div>
      </div>
      <h1 className="heading-5">Members</h1>
      <div className="">
        {/* {tasksUse.map((task) => {
          <TeamMember
            key={task.id}
            memberName={task.name}
            memberEmail={task.id}
            memberImg={<img src={task.avatar} />}
          />;
        })} */}
      </div>
    </section>
  );
};

export default MembersSetttings;
