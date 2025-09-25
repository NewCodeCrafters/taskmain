import { create } from "zustand";
import { addTaskApi } from "../utils/api";
// import tasks from "../data/task";

export const useTaskStore = create((set) => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      // const res = await fetchTaskApi();
      set({ tasks: res, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addTask: async (task) => {
    set({ loading: true });
    try {
      const res = await addTaskApi(task);
      console.log(res);
      set((state) => ({ tasks: [...state.tasks, res], loading: false }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  updateTaskStatus: async (taskId, newStatus) => {
    set({ loading: true });
    try {
      await new Promise((res) => setTimeout(res, 500));
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === taskId ? { ...t, status: newStatus } : t
        ),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  deleteTask: async (taskId) => {
    set({ loading: true });
    try {
      await new Promise((res) => setTimeout(res, 500));
      set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== taskId),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
