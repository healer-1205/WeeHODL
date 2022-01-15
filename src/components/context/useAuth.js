import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

function useAuthProvider() {
  const [account, setAccount] = useState("");
  const [isAuthenticated, setAuth] = useState(false);

  function saveAccount(setAccountParam) {
    setAccount(setAccountParam);
    setAuth(true);
  }

  return {
    isAuthenticated,
    account,
    saveAccount,
  }
}