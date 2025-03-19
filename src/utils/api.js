import axios from "axios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, routes } from "./constant";
import { Toaster, toast } from "react-hot-toast";
import { Navigate } from "react-router";

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

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
      if (!refreshToken) {
        logout();
        return Promise.reject(error);
      }
      try {
        const res = await axios.post("/accounts/refresh/", {
          refresh: refreshToken,
        });
        const newAccessToken = res.data.access_token;
        localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
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
    const res = await api.post("/accounts/signup/", userData);
    const { access_token, refresh_token } = res.data;

    localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);

    return res.data;

    // Navigate(/)
  } catch (error) {
    // console.error("Full Error Object:", error);
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
    const res = await api.post("/accounts/login/", credentials);
    const { refresh_token, access_token } = res.data;
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
    return res.data;
  } catch (error) {
    // console.log(error);
    if (!error.response) {
      toast.error("Network error, please check your internet connection");
      throw new Error("Network error");
    }
    const errorData = error.response.data;
    const firstKey = Object.keys(errorData)[0];
    const errorMessage = Array.isArray(errorData[firstKey])
      ? errorData[firstKey][0]
      : errorData[firstKey];

    toast.error(errorMessage || "Signup failed");
    throw new Error(errorMessage || "Signup failed");
    // throw error.response?.data?.message || "Login failed";
  }
};

export const getUserProfile = async () => {
  try {
    const res = await api.get("/accounts/profile/");
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Unauthorized";
  }
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.location.href = routes.login;
};
