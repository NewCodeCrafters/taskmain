import { create } from "zustand";

export const useSpaces = create((set) => ({
  spaces: [],
  setSpaces: (newSpace) => set({ spaces: newSpace }),
  addSpace: (name) =>
    set((state) => {
      const newId = Date.now();
      const newSpace = {
        id: newId,
        name,
        items: [
          {
            id: `${newId}-tasks`,
            name: "Team Daily Task",
            route: `/space/${newId}/teamdailytask`,
          },
          {
            id: `${newId}-settings`,
            name: "Member Settings",
            route: `/space/${newId}/memberssetting`,
          },
        ],
      };
      return { spaces: [...state.spaces, newSpace] };
    }),
}));
