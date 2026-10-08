import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
import api from "../lib/axios";

export const doctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctorData, setDoctorData] = useState(null || []);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const fetchALLDoctors = async () => {
    setLoading(true);
    try {
      const response = await api.get("/doctors/allDoctors");
      setDoctorData(response.data.doctors);
    } catch (error) {
      console.log("Failed to fetch doctor ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user?.role === "ADMIN") {
      fetchALLDoctors();
    }
  }, [user]);
  return (
    <doctorContext.Provider value={{ doctorData, loading }}>
      {children}
    </doctorContext.Provider>
  );
};

export const useDoctor = () => {
  const context = useContext(doctorContext);
  if (!context) {
    throw new Error("useDoctor must be inside DoctorProvider");
  }
  return context;
};
