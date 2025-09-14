import { create } from "zustand";

export const useSpaces = create((set) => ({
  projectName: "",
  projectId: "",
  setProjectName: (newSpace) => set({ spaces: newSpace }),
  setProjectId: (newId) => set({ projectId: newId }),
}));
