import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { PatientProvider } from "./context/patientContent.jsx";
import { DoctorProvider } from "./context/doctorContext.jsx";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserProvider>
      <PatientProvider>
        <DoctorProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DoctorProvider>
      </PatientProvider>
    </UserProvider>
  </AuthProvider>,
);
