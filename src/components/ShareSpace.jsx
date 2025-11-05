import React, { useState } from "react";
import { useModal } from "../stores/useModal";
import Modal from "./Modal";
import TextInput from "./Input";
import mail from "../assets/mail-01.svg";
import Button from "./Button";
import { X } from "lucide-react";
import { useProjectStore } from "../stores/useProjectStore";
import { addMemberApi } from "../utils/api";

const ShareSpace = () => {
  const { currentProjectId } = useProjectStore((s) => s);
  const [shareSpace, setShareSpace] = useState("");
  const { shareSpaceModal, setShareSpaceModal } = useModal((s) => s);
  const [isLoading, setIsLoading] = useState(false); // ✅ fixed

  const data = {
    email: shareSpace,
    role: "member",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await addMemberApi(currentProjectId, data); // ✅ use dynamic ID
    setIsLoading(false);
    setShareSpaceModal(false);
    setShareSpace("");
  };

  return (
    <Modal
      isOpen={shareSpaceModal}
      onClick={(e) => e.stopPropagation()}
      Class="flex gap-5 flex-col p-6"
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
        <Button onClick={handleSubmit} isLoading={isLoading}>
          Share
        </Button>
      </div>
    </Modal>
  );
};

export default ShareSpace;
