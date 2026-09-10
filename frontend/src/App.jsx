import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import DashboardLayout from "./pages/shared/DashboardLayout";
import Appointment from "./pages/shared/Appointment";
import Patient from "./pages/patient/Patient";
import Doctor from "./pages/doctor/Doctor";
import Dashboard from "./pages/shared/Dashboard";
import Profile from "./pages/patient/Profile";
import MedicalRecords from "./pages/admin/MedicalRecords";
import Billing from "./pages/admin/Billing";
import Users from "./pages/admin/Users";
import OnBoard from "./pages/patient/OnBoard";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="on-board" element={<OnBoard />} />
          <Route path="appointments" element={<Appointment />} />
          <Route path="users" element={<Users />} />
          <Route path="patients" element={<Patient />} />
          <Route path="self" element={<Profile />} />
          <Route path="doctors" element={<Doctor />} />
          <Route path="medical-records" element={<MedicalRecords />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
