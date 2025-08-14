import { create } from "zustand";

export const useSpaces = create((set) => ({
  spaces: [],
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
            route: `/spaces/${newId}/team-daily-task`,
          },
          {
            id: `${newId}-settings`,
            name: "Member Settings",
            route: `/spaces/${newId}/member-settings`,
          },
        ],
      };
      return { spaces: [...state.spaces, newSpace] };
    }),
}));
