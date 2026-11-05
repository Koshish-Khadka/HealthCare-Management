import { useParams } from "react-router-dom";
import DoctorDetail from "../../components/layout/DoctorDetail";

const BookDoctorPage = () => {
  const { doctorId } = useParams();
  return <DoctorDetail doctorId={doctorId} />;
};

export default BookDoctorPage;
