import { create } from "zustand";



export const useTaskStore = create((set, get) => ({
  checkedTasks: {},
  page: 1,
  itemsPerPage: 10,
  rowLength: [5, 10, 15, 20, 30],

  // Toggle a single task
  toggle: (id) =>
    set((state) => ({
      checkedTasks: {
        ...state.checkedTasks,
        [id]: !state.checkedTasks[id],
      },
    })),

  // Toggle all tasks
  toggleAll: (data, allChecked) => {
    

    if (allChecked) {
      set({ checkedTasks: {} });
    } else {
      const newState = {};
      data.forEach((t) => {
        newState[t.id] = true;
      });
      set({ checkedTasks: newState });
    }
  },

  // Pagination
  setPage: (page) => set({ page }),
  setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),

  // Current slice of data
  currentData: (data) => {
    const { page, itemsPerPage } = get();
    const startIndex = (page - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  },

  // Date coloring
  getDueDateColor: (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = (due - today) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) return "text-error-100";
    if (diffDays <= 3) return "text-warning-300";
    return "text-gray-600";
  },

  // Date formatting
  locale: navigator.language,
  options: {
    year: "numeric",
    day: "numeric",
    weekday: "short",
  },
}));
