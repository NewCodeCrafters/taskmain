// Endpoints available
// http://localhost:8000/api/signup same for sign in and out
// http://localhost:8000/api/auth/forgot_password
// To get the user info
// http://localhost:8000/auth/me
// To get a new access token if it's expired
// http://localhost:8000/auth/refresh
// for google auth - /auth/google

import axios from "axios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, routes } from "./constant";
import { Toaster, toast } from "react-hot-toast";
import { Navigate } from "react-router";

export const api = axios.create({
  baseURL: "https://tasktonic-backend.onrender.com",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log(api.interceptors.response, api.interceptors.request);
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 403) {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
      console.log(refreshToken);
      if (!refreshToken) {
        logout();
        return Promise.reject(error);
      }
      try {
        const res = await axios.post(
          "https://tasktonic-backend.onrender.com/auth/refresh",
          {
            refreshToken: refreshToken,
          }
        );
        console.log(res);
        const newAccessToken = res.data.accessToken;
        console.log(newAccessToken);
        localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(error.config);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
export const signup = async (userData) => {
  try {
    const res = await api.post("/api/signup", userData);
    const { accessToken, refreshToken } = res.data;
    console.log(res);

    // usePerUSerStore.getState().setUser(user);

    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

    return res.data;

    // Navigate(/)
  } catch (error) {
    console.error("Full Error Object:", error);
    if (!error.response) {
      toast.error("Network error, please check your internet connection");
      throw new Error("Network error");
    }
    const errorData = error.response.data;
    const firstKey = Object.keys(errorData)[0];
    const errorMessage = Array.isArray(errorData[firstKey])
      ? errorData[firstKey][0]
      : errorData[firstKey];

    toast.error(errorMessage || "Login failed");
    throw new Error(errorMessage || "Login failed");
  }
};

export const logIn = async (credentials) => {
  try {
    const res = await api.post("/api/signin", credentials);

    // ✅ log response (for debugging only)
    console.log("Login response:", res);

    // ✅ correct keys from backend
    const { accessToken, refreshToken } = res.data;
    console.log(accessToken, refreshToken);
    // ✅ save tokens
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

    // ✅ save user in your store
    // usePerUSerStore.getState().setUser(user);

    return res.data;
  } catch (error) {
    if (!error.response) {
      // network / server unreachable
      toast.error("Network error, please check your connection.");
      throw new Error("Network error");
    }

    // backend responded with error
    const errorData = error.response.data;

    // pick first error message if it exists
    const firstKey = Object.keys(errorData)[0];
    const errorMessage = Array.isArray(errorData[firstKey])
      ? errorData[firstKey][0]
      : errorData[firstKey];

    toast.error(errorMessage || "Login failed");
    throw new Error(errorMessage || "Login failed");
  }
};

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    console.log(token);
    const res = await api.get("/auth/me");
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Unauthorized";
  }
};

export const googleLogin = async (idToken) => {
  try {
    const res = await api.post("/auth/google", { id_token: idToken });
    return res.data; // token, user info, etc.
  } catch (err) {
    throw err.response?.data || err;
  }
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.location.href = routes.login;
};

export const forgotPassword = async (userEmail) => {
  try {
    const res = await api.post("/forgot_password/request", {
      email: userEmail.email,
    });
    console.log(res.data);
    toast.success("Reset Instructions has been sent via email");
    return res.data;
  } catch (err) {
    console.error(err);
    if (!err.response) {
      toast.error("Network error. Please try again");
      throw new Error("Network error");
    }

    const errorData = err.response?.data;

    const firstKey = Object.keys(errorData)[0];
    const errorMessage = Array.isArray(errorData[firstKey])
      ? errorData[firstKey][0]
      : errorData[firstKey];

    toast.error(errorMessage || "Failed to send reset email");
    throw new Error(errorMessage || "Failed to send reset email");
  }
};

export const resetPassword = async ({ email, otp, newPassword }) => {
  try {
    const res = await api.post("/forgot_password/reset", {
      email,
      otp,
      newPassword: newPassword,
    });

    toast.success("Password Reset successful");
    return res.data;
  } catch (err) {
    console.error(err);
    if (!err.response) {
      toast.error("Network error. Please try again");
      throw new Error("Network error");
    }

    const errorData = err.response?.data;

    const firstKey = Object.keys(errorData)[0];
    const errorMessage = Array.isArray(errorData[firstKey])
      ? errorData[firstKey][0]
      : errorData[firstKey];

    toast.error(errorMessage || "Failed to reset password");
    throw new Error(errorMessage || "Failed to reset password");
  }
};

//Api for projects
export const fetchProjectsApi = () => api.get("/api/space");
export const addProjectsApi = (space) => api.post("/api/space", space);
export const updateProjectApi = (id, updates) =>
  api.put(`api/space/${id}`, updates);
export const deleteProjectApi = (id) => api.delete(`/api/space/${id}`);

//Api for task
export const fetchTaskApi = () => api.get("api/task/overview/all");
export const addMemberApi = (id, data) =>
  api.post(`api/space/${id}/invite`, data);
export const addTaskApi = (task) => api.post("api/task", task);
export const updateTaskApi = (id, updates) =>
  api.put(`api/task/${id}`, updates);
export const deleteTaskApi = (id) => api.delete(`/api/task/${id}`);
