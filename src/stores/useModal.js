import { create } from "zustand";
// import { task } from "../data/Task";

export const useModal = create((set) => ({
  modal: false,
  taskId: null,
  setModal: (newModal) => set({ modal: newModal }),
  setTaskId: (task) => set({ taskId: task }),
  modalProfile: false,
  setModalProfile: (newModal) => set({ modalProfile: newModal }),
  modalAddTask: false,
  setModalAddTask: (newModal) => set({ modalProfile: newModal }),
  profileSettings: false,
  setProfileSettings: (showSetting) => set({ settings: showSetting }),
  createSpaceModal: false,
  setCreateSpaceModal: (showCreateSpace) =>
    set({ createSpaceModal: showCreateSpace }),
}));
