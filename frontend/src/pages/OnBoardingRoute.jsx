import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const OnBoardingRoute = () => {
  const isOnBorded = false;
  const role = "PATIENT";
  
  if (role === "PATIENT" && !isOnBorded) {
    <Navigate to={"/dashboard/on-board"} replace />;
  }
  return <Outlet />;
};

export default OnBoardingRoute;
