import axios from "axios";
export const api = axios.create({
  baseURL: "https://ncc-task-management-backend.onrender.com",
});
