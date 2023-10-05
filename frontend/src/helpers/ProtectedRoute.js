import { useSelector } from "react-redux";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.session.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
