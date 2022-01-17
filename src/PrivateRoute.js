import React from "react";
import { Navigate } from "react-router-dom";
import { useMaterialUIController } from "context";

export default function PrivateRoute({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const {isAuthenticated} = controller;
  return isAuthenticated ? children : <Navigate to="/authentication/sign-in" />;
}