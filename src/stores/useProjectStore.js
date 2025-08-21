import { create } from "zustand";
import projects from "../data/projects";

export const useProjectStore = create((set) => ({
  projects: [],
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      await new Promise((res) => setTimeout(res, 500));
      set({ projects: projects, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addProject: async (project) => {
    set({ loading: true });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state) => ({
        projects: [...state.projects, project],
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  updateProject: async (projectId, updates) => {
    set({ loading: true });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state) => ({
        projects: state.projects.map((p) =>
          p.id === projectId ? { ...p, ...updates } : p
        ),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  deleteProject: async (projectId) => {
    set({ loading: true });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state) => ({
        projects: state.projects.filter((p) => p.id !== projectId),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
