import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/context/useAuth";

export function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <Navigate to="/" />;
}