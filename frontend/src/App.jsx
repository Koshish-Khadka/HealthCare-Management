import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import DashboardLayout from "./pages/shared/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import Appointment from "./pages/shared/Appointment";
import Patient from "./pages/patient/Patient";
import Doctor from "./pages/doctor/Doctor";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* default */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="appointments" element={<Appointment />} />
          <Route path="patients" element={<Patient />} />
          <Route path="doctors" element={<Doctor />} />
          {/* <Route path="medical-records" element={<MedicalRecords />} />
    <Route path="billing" element={<Billing />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
