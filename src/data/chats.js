export const chats = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Hey, how are you doing?",
    lastMessageTime: "2025-09-19T20:30:00",
    messages: [
      {
        id: "m1",
        sender: "John Doe",
        text: "Hey Samuel 👋",
        time: "2025-09-19T20:00:00",
        status: "seen", // sent | delivered | seen
      },
      {
        id: "m2",
        sender: "me",
        text: "Yo! I’m good, just coding right now.",
        time: "2025-09-19T20:05:00",
        status: "delivered",
      },
      {
        id: "m3",
        sender: "John Doe",
        text: "Nice 🔥, what project?",
        time: "2025-09-19T20:15:00",
        status: "seen",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Can you send me the notes?",
    lastMessageTime: "2025-09-19T18:45:00",
    messages: [
      {
        id: "m1",
        sender: "me",
        text: "Sure, I’ll forward them in a sec 📚",
        time: "2025-09-19T18:40:00",
        status: "delivered",
      },
      {
        id: "m2",
        sender: "Jane Smith",
        text: "Thanks a lot 🙏",
        time: "2025-09-19T18:45:00",
        status: "seen",
      },
    ],
  },
  {
    id: 3,
    name: "Dev Group",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Meeting at 9AM tomorrow.",
    lastMessageTime: "2025-09-19T17:00:00",
    messages: [
      {
        id: "m1",
        sender: "Alex",
        text: "Guys, check the repo update.",
        time: "2025-09-19T16:30:00",
        status: "seen",
      },
      {
        id: "m2",
        sender: "Samuel",
        text: "Got it, I’ll review it tonight 👨‍💻",
        time: "2025-09-19T16:35:00",
        status: "seen",
      },
      {
        id: "m3",
        sender: "Maria",
        text: "Meeting at 9AM tomorrow.",
        time: "2025-09-19T17:00:00",
        status: "delivered",
      },
    ],
  },
];
