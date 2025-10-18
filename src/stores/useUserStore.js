import { create } from "zustand";
import users from "../data/users";

export const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      await new Promise((res) => setTimeout(res, 500));
      set({ users: users, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addUser: async (user) => {
    set({ loading: true });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state) => ({ users: [...state.users, user], loading: false }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  updateUser: async (userId, updates) => {
    set({ loading: true });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state) => ({
        users: state.users.map((u) =>
          u.id === userId ? { ...u, ...updates } : u
        ),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  deleteUser: async (userId) => {
    set({ loading: true });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state) => ({
        users: state.users.filter((u) => u.id !== userId),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
