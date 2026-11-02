import { useAuth } from "../../context/authContext";
import AdminAppointment from "../admin/AdminAppointment";
import DoctorAppointment from "../doctor/DoctorAppointment";
import PatientAppointment from "../patient/PatientAppointment";

const Appointment = () => {
  const { user } = useAuth();
  const role = user.role;

  switch (role) {
    case "ADMIN":
      return <AdminAppointment />;

    case "DOCTOR":
      return <DoctorAppointment />;

    case "PATIENT":
      return <PatientAppointment />;

    default:
      return <div>Unauthorized</div>;
  }
};

export default Appointment;
