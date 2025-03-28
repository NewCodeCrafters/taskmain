import { create } from "zustand";
// import { task } from "../data/Task";

export const useModal = create((set) => ({
  modal: false,
  taskId: null,
  setModal: (newModal) => set({ modal: newModal }),
  setTaskId: (task) => set({ taskId: task }),
}));
