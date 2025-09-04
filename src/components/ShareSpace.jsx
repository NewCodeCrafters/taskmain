import React, { useState } from "react";
import { useModal } from "../stores/useModal";
import Modal from "./modal";
import closeIcon from "../assets/x-close.svg";
import TextInput from "./Input";
import mail from "../assets/mail-01.svg";
import Button from "./Button";
import { X } from "lucide-react";

const ShareSpace = () => {
  const [shareSpace, setShareSpace] = useState("");
  const { shareSpaceModal, setShareSpaceModal } = useModal((s) => s);
  return (
    <Modal
      isOpen={shareSpaceModal}
      onClick={(e) => e.stopPropagation()}
      Class="flex gap-5 flex-col p-6 "
    >
      <div className="border-b border-neutral-black-5 pb-6 mb-6 flex items-center justify-between">
        <h1 className="body-medium-semibold">Share this space</h1>
        <button
          className="hover:cursor-pointer"
          onClick={() => setShareSpaceModal(false)}
        >
          <X />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <TextInput
          leftIcon={<img src={mail} />}
          placeholder="Invite by name or email"
          value={shareSpace}
          onChange={(e) => setShareSpace(e.target.value)}
        />
        <Button>Share</Button>
      </div>
    </Modal>
  );
};

export default ShareSpace;
