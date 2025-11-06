import React, { useState } from "react";
import Modal from "./Modal";
import closeIcon from "../assets/x-close.svg";
import TextInput from "./Input";
import mail from "../assets/mail-01.svg";
import Button from "./Button";
import { useModal } from "../stores/useModal";
import { useSpaces } from "../stores/useSpaces";
import { X } from "lucide-react";
import { useProjectStore } from "../stores/useProjectStore";
import { ACCESS_TOKEN_KEY } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CreateSpace = () => {
  const navigate = useNavigate();
  const { setCreateSpaceModal, createSpaceModal } = useModal((c) => c);
  const { addProject } = useProjectStore((s) => s);
  const [spaceName, setSpaceName] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleCreateSpace = async () => {
    if (!spaceName.trim()) {
      toast.error("Space name is required");
      return;
    }

    setIsloading(true);

    const project = {
      name: spaceName,
      description: "A pro",
      // members: ["u1", "u2"],
    };
    try {
      //  Send and await response
      const response = await addProject(project);
      console.log(response);
      if (response && response.status == 201) {
        const spaceData = response.data.space;
        const spaceId = spaceData._id;
        setSpaceName("");
        setCreateSpaceModal(false);
        toast.success("Space Created Successfully");
        // Navigate to the SpaceUrl
        navigate(`/${spaceName}/${spaceId}/teamdailytask`);
      }
    } catch (err) {
      console.error("Error Creating Project:", err);
    } finally {
      setIsloading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateSpace();
    }
  };
  // id: "p1",
  //   name: "Website Redesign",
  //   description: "Revamp the company website with a modern design",
  //   createdAt: "2025-08-01",
  //   members: ["u1", "u2", "u3"],

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
          onKeyPress={handleKeyPress}
        />
        <Button
          className="w-[85px]"
          onClick={handleCreateSpace}
          isLoading={isLoading}
        >
          Create
        </Button>
      </div>
    </Modal>
  );
};

export default CreateSpace;
