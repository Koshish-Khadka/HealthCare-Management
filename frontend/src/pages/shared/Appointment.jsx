import { useAuth } from "../../context/authContext";
import AdminAppointment from "../admin/AdminAppointment";
import PatientAppointment from "../patient/PatientAppointment";

const Appointment = () => {
  const { user } = useAuth();
  if (user.role === "ADMIN") {
    return <AdminAppointment />;
  } else {
    return <PatientAppointment />;
  }
};

export default Appointment;
