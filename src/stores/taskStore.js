import { create } from "zustand";
import { addTaskApi, fetchTaskApi, updateTaskApi } from "../utils/api";
// import tasks from "../data/task";

export const useTaskStore = create((set) => ({
  tasks: [],
  loading: false,
  error: null,
  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetchTaskApi();

      const resData = res.data.tasks;
      set({ tasks: resData, loading: false });
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
      return res;
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

  // Alternative: Separate editTask function
  editTask: async (taskId, updatedData) => {
    set({ loading: true, error: null });

    // const previousTasks = get().tasks;

    try {
      // Optimistic update with all fields
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t._id === taskId ? { ...t, ...updatedData } : t
        ),
      }));

      // Send all updated fields to API
      const res = await updateTaskApi(taskId, updatedData);
      console.log(res);

      // Validate response
      if (!res || !res.task) {
        throw new Error("Invalid response from server");
      }

      // Update with server data
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t._id === taskId ? { ...t, ...res.task } : t
        ),
        loading: false,
      }));

      return res;
    } catch (err) {
      set({ loading: false, error: err.message });
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
