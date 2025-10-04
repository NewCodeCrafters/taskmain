import { create } from "zustand";
import { chats } from "../data/chats";

const chatsStore = create((set, get) => ({
  chatId: null,
  selectedChat: () => {
    const { chatId } = get();
    return chats.find((c) => c.id === chatId) || null;
  },
  setChatId: (chat) => set({ chatId: chat }),
}));

export default chatsStore;
