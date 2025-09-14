import { HandHeart } from "lucide-react";
import { create } from "zustand";

const usePerUSerStore = create((set) => ({
  user: [],

  setUser: (user) => {
    set({
      user: user,
    });
  },

  clearAuth: () => {
    set({ user: null });
  },
}));

export default usePerUSerStore;
