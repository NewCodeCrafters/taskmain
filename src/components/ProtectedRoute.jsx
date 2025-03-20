import React from "react";
import { ACCESS_TOKEN_KEY, routes } from "../utils/constant";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  return accessToken ? <Outlet /> : <Navigate to={routes.login} />;
};

export default ProtectedRoute;
