import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import api from "../lib/axios";
import { useAuth } from "./authContext";

export const patientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patientData, setPatientData] = useState(null || []);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const fetchAllPatient = async () => {
    try {
      setLoading(true);
      const response = await api.get("/patients/allPatients");
      setPatientData(response.data.patients);
    } catch (error) {
      console.log("Failed to fetch all patients", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.role === "ADMIN") {
      fetchAllPatient();
    }
  }, [user]);

  // console.log("Patient data from context", patientData);

  return (
    <patientContext.Provider value={{ patientData, setPatientData, loading }}>
      {children}
    </patientContext.Provider>
  );
};

export const usePatient = () => {
  const context = useContext(patientContext);
  if (!context) {
    throw new Error("usePatient must be inside PatientProvider");
  }
  return context;
};
