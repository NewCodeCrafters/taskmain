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
  setModalAddTask: (newModal) => set({ modalAddTask: newModal }),
  profileSetting: true,
  setProfileSetting: (showSetting) => set({ settings: showSetting }),
  createSpaceModal: false,
  setCreateSpaceModal: (showCreateSpace) =>
    set({ createSpaceModal: showCreateSpace }),
  shareSpaceModal: false,
  setShareSpaceModal: (showCreateSpace) =>
    set({ shareSpaceModal: showCreateSpace }),
  editTaskModal: false,
  setEditTaskModal: (edit) => set({ editTaskModal: edit }),
  taskSuccessModal: false,
  setTaskSuccessModal: (success) => set({ taskSuccessModal: success }),
}));
