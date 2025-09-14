import React, { useState } from "react";
import Modal from "./modal";
import closeIcon from "../assets/x-close.svg";
import TextInput from "./Input";
import mail from "../assets/mail-01.svg";
import Button from "./Button";
import { useModal } from "../stores/useModal";
import { useSpaces } from "../stores/useSpaces";
import { X } from "lucide-react";

const CreateSpace = () => {
  const { setCreateSpaceModal, createSpaceModal } = useModal((c) => c);
  const addSpace = useSpaces((state) => state.addSpace);
  const [spaceName, setSpaceName] = useState("");
  const handleCreateSpace = () => {
    if (!spaceName.trim()) return;
    addSpace(spaceName.trim());
    setSpaceName("");
    setCreateSpaceModal(false);
  };
  return (
    <Modal
      isOpen={createSpaceModal}
      onClick={(e) => e.stopPropagation()}
      Class="flex gap-5 flex-col p-6 "
    >
      <div className="border-b border-neutral-black-5 pb-6 mb-6 flex items-center justify-between">
        <h1 className="body-medium-semibold">Create a Space</h1>
        <button
          className="hover:cursor-pointer"
          onClick={() => setCreateSpaceModal(false)}
        >
          <X />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <TextInput
          leftIcon={<img src={mail} />}
          placeholder="Input space name..."
          value={spaceName}
          onChange={(e) => setSpaceName(e.target.value)}
        />
        <Button onClick={handleCreateSpace}>Create</Button>
      </div>
    </Modal>
  );
};

export default CreateSpace;
