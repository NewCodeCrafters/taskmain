import axios from "axios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./constant";
export const api = axios.create({
  baseURL: "https://ncc-task-management-backend.onrender.com",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const signup = async (userData) => {
  try {
    const res = await api.post("/accounts/signup/", userData);

    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed";
  }
};

export const logIn = async (credentials) => {
  try {
    const res = await api.post("/accounts/login/", credentials);
    const { refresh_token, access_token } = res.data;
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

export const getUserProfile = async () => {
  try {
    const res = await api.get("/user/");
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Unauthorized";
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
