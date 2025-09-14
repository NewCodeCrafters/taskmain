import { create } from "zustand";
import { ACCESS_TOKEN_KEY } from "../utils/constant";
import { addProjectsApi, fetchProjectsApi } from "../utils/api";
// import projects from "../data/projects";

// /spaces...post and get
// /space/id...get replace with the actual space id
// When you create a space you'll get the space id
// /space/id/invite ...post
// /task  And  get- POST
// With\-id_too

export const useProjectStore = create((set) => ({
  projectes: [],
  loading: false,
  error: null,
  currentProjectId: null,
  projectName: "",
  projectId: "",
  setProjectName: (newProject) => set({ projectName: newProject }),
  setProjectId: (newId) => set({ projectId: newId }),

  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetchProjectsApi();
      console.log(res);
      set({ projectes: res, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addProject: async (project) => {
    set({ loading: true });
    try {
      await addProjectsApi(project);
      const res = await fetchProjectsApi();

      set(() => ({
        projectes: res,
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
        projectes: state.projects.map((p) =>
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
        projectes: state.projects.filter((p) => p.id !== projectId),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  setCurrentProjectId: (id) => set({ currentProjectId: id }),
}));
