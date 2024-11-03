// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({ isAuthenticated: false, role: null, token: null });

  const login = (token, role) => {
    setAuthState({ isAuthenticated: true, role, token });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, role: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
