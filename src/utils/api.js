import axios from "axios";
export const api = axios.create({
  baseURL: "https://ncc-task-management-backend.onrender.com",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const signup = async (userData) => {
  try {
    console.log(userData);
    const res = await api.post("/signup", userData);
    console.log("Signup Response:", res.data);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed";
  }
};

export const logIn = async (credentials) => {
  try {
    const res = await api.post("/login", credentials);
    const { token } = res.data;
    localStorage.setItem("token", token);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

export const getUserProfile = async () => {
  try {
    const res = await api.get("/user");
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Unauthorized";
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
