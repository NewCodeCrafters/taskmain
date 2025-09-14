import { create } from "zustand";

const useAddTaskStore = create((set) => ({
  taskName: "",
  Status: "",
  timeEstimate: "",
  priority: "low",
  dueDate: "",
  assignees: [],
  description: "",
  selectedUsers: [],

  setTaskName: (newTaskName) => set({ taskName: newTaskName }),
  setStatus: (newStatus) => set({ Status: newStatus }),
  setTimeEstimate: (newTimeEstimate) => set({ timeEstimate: newTimeEstimate }),
  setPriority: (newPrority) => set({ priority: newPrority }),
  setDueDate: (newDueDate) => set({ dueDate: newDueDate }),
  setAssignees: (newAssignees) => set({ assignees: newAssignees }),
  setDescription: (newDescription) => set({ description: newDescription }),
  setSelectedUsers: (newSelectedUser) =>
    set({ selectedUsers: newSelectedUser }),

  resetForm: () =>
    set({
      taskName: "",
      description: "",
      Status: "",
      timeEstimate: "",
      priority: "",
      dueDate: null,
      assignees: [],
    }),
}));

export default useAddTaskStore;
