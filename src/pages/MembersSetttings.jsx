import React from "react";
import ProfileDropDown from "../components/ProfileDropDown";
import mailIcon from "../assets/mail-01.svg";

import "../index.css";
import TextInput from "../components/Input";
import Button from "../components/Button";
import TeamMember from "../components/TeamMember";
import { useTaskStore } from "../stores/taskStore";

const MembersSetttings = () => {
  const { tasks } = useTaskStore((s) => s);

  // const tasksUse = tasks.assignees[0];\
  console.log(tasks);
  const taskUse = tasks.assignees;
  console.log(taskUse);
  const me = taskUse.flatMap((s) => s.name);
  console.log(me);
  return (
    <section className="flex flex-col gap-6 bg-white p-6 w-full">
      <div className="flex flex-col gap-4 border-b border-b-neutral-black-5 pb-6">
        <div className="flex flex-col gap-3">
          <h1 className="heading-4">Team Members</h1>
          <p>If you’re owner you can manage all your member</p>
        </div>
        <div className="flex items-center w-full gap-3">
          <TextInput
            className="w-full"
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
