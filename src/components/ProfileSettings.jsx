import React from "react";
import ProfileUserInfo from "./ProfileUserInfo";
import avatar from "../assets/avatar.svg";
import TextInput from "./Input";

const ProfileSettings = () => {
  return (
    <div className="p-6 bg-white flex gap-6 w-full  ">
      <div className="flex gap-10 w-full">
        <ProfileUserInfo
          title="Profile"
          body="Your personal information and account 
                security settings."
        />
        <div className="flex gap-5 flex-col">
          <ProfileUserInfo title="Avatar" body={<img src={avatar} />} />
          <div className="flex gap-2">
            <TextInput placeholder="Fajar Gunawan" className="" />
            <TextInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
