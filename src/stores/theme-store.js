import { create } from "zustand";
export const Themes = {
  light: "LIGHT",
  dark: "DARk",
};
export const useTheme = create((set) => ({
  theme: Themes.light,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === Themes.light ? Themes.dark : Themes.light,
    })),
}));
