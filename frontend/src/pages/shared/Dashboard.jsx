import AdminDashboard from "../admin/AdminDashboard";
import DoctorDashboard from "../doctor/DoctorDashboard";
import PatientDashboard from "../patient/PatientDashboard";

const Dashboard = () => {
  const role = "PATIENT";

  switch (role) {
    case "ADMIN":
      return <AdminDashboard />;
    case "DOCTOR":
      return <DoctorDashboard />;
    case "PATIENT":
      return <PatientDashboard />;
    default:
      return <div>Unauthorized</div>;
  }
};

export default Dashboard;
