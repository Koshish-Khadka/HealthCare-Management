import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/axios";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  const getUserSession = async () => {
    try {
      setLoading(true);
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        setUser(null);
        setToken(null);
        setLoading(false);
        return;
      }
      const response = await api.get("/auth/session");
      setUser(response.data.user);
      setToken(storedToken);
    } catch (error) {
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
      console.log("Failed to get user session", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserSession();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <authContext.Provider
      value={{
        user,
        setUser,
        setToken,
        logout,
        loading,
        token,
        getUserSession,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be inside authProvider");
  }
  return context;
};
