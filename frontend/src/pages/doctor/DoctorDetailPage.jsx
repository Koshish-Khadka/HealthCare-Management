import React from "react";
import { useParams } from "react-router-dom";
import DoctorDetail from "../../components/layout/DoctorDetail";

const DoctorDetailPage = () => {
  const { doctorId } = useParams();
  return <DoctorDetail doctorId={doctorId} />;
};

export default DoctorDetailPage;
