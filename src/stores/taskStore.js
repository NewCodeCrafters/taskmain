import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],

  setTask: (newTask) => set({ tasks: newTask }),

  // handleShowModal: (taskId) => set((state) => ({})),
  // showTaskModal: tas,

  updateTaskStatus: (taskId, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        taskId === task.id ? { ...task, status: newStatus } : task
      ),
    })),
}));
