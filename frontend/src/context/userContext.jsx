import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/axios";
import { useAuth } from "./authContext";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, token, loading: authLoading } = useAuth();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await api.get("/auth/profile");
        setProfileData(response.data.profile);
      } catch (error) {
        console.log("Failed to fetch user profile", error);
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading && user && token) {
      fetchUserProfile();
    }
  }, [user, token, authLoading]);

  return (
    <userContext.Provider value={{ profileData, loading }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUser must be inside userProvider");
  }
  return context;
};
