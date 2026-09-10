import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to={"/"} replace />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;
