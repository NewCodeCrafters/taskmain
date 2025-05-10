import React from "react";
import ProfileUserInfo from "./ProfileUserInfo";
import Button from "./Button";
import avatar from "../assets/avatar.svg";
import user from "../assets/users-01.svg";
import mail from "../assets/mail-02.svg";
import globe from "../assets/globe-01.svg";
import TextInput from "./Input";
import markerPin from "../assets/marker-pin-04.svg";
import lock from "../assets/lock-03.svg";
import logOut from "../assets/log-out-01.svg";
import userX from "../assets/user-x-01.svg";

const ProfileSettings = () => {
  return (
    <div className="p-6 bg-white rounded-lg flex gap-6 w-full flex-col">
      <div className="grid grid-cols-3 gap-10 w-full border-b border-neutral-black-5 pb-6 ">
        <ProfileUserInfo
          title="Profile"
          body="Your personal information and account 
                security settings."
          className="w-full"
        />
        <div className="flex gap-5 flex-col w-full col-span-2">
          <ProfileUserInfo title="Avatar" body={<img src={avatar} />} />
          <div className="flex gap-2 w-full">
            <TextInput
              placeholder="Fajar Gunawan"
              className="w-full"
              label="Full Name"
              disabled
              leftIcon={<img src={user} />}
            />
            <TextInput
              className="w-full"
              label="Email"
              placeholder="fajar123@gmail.com"
              disabled
              leftIcon={<img src={mail} />}
            />
          </div>
          <TextInput
            label="Password"
            placeholder="Enter new password"
            leftIcon={<img src={lock} />}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 w-full border-b border-neutral-black-5 pb-6">
        <ProfileUserInfo
          title="Language & Region"
          body="Customize your language and region."
          className="w-full"
        />
        <div className="w-full flex gap-2 col-span-2">
          <TextInput
            className="w-full"
            label="Email"
            placeholder="English"
            disabled
            leftIcon={<img src={globe} />}
          />
          <TextInput
            className="w-full"
            label="Time Zone"
            placeholder=""
            disabled
            leftIcon={<img src={markerPin} />}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <ProfileUserInfo title="Danger zone" body="Proceed with Caution" />
        <div className="flex gap-5 col-span-2">
          <Button variant="stroke" leftIcon={<img src={logOut} />}>
            Logout of all sessions
          </Button>
          <Button variant="red" leftIcon={<img src={userX} />}>
            Delete account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
