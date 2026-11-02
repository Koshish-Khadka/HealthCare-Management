import Breadcrumbs from "../../components/common/BreadCrumbs";
import DoctorProfile from "../../components/layout/doctorDetail/DoctorProfile";
import DoctorCard from "../../components/common/DoctorCard";
import { Building, Trophy, Users } from "lucide-react";
import DoctorSchedule from "../../components/layout/doctorDetail/DoctorSchedule";
import DoctorAppointment from "../../components/layout/doctorDetail/DoctorAppointment";
import { useAuth } from "../../context/authContext";
import api from "../../lib/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DoctorDetail = () => {
  const { user } = useAuth();
  const { doctorId } = useParams();
  const [doctorScheduleData, setDoctorScheduleData] = useState([]);


  const cardItems = [
    {
      id: 1,
      title: "Department",
      icon: Building,
      subTitle: "Cardiology",
    },
    {
      id: 2,
      title: "Active Patients",
      number: 102,
      icon: Users,
      subTitle: "202 Active Patients",
    },
    {
      id: 3,
      title: "Experience",
      number: 509,
      icon: Trophy,
      subTitle: "509 Years of Experience",
    },
  ];

  const fetchWorkingDays = async () => {
    try {
      const response = await api.get(`/doctors/working-days/${doctorId}`);
      setDoctorScheduleData(response.data);
    } catch (error) {
      console.log("Error fetching schedule data", error);
    }
  };
  useEffect(() => {
    fetchWorkingDays();
  }, [doctorId]);

  return (
    <div>
      {" "}
      <Breadcrumbs />
      <DoctorProfile />
      <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardItems.map((item) => (
          <DoctorCard key={item.id} item={item} />
        ))}
      </div>
      <DoctorSchedule doctorScheduleData={doctorScheduleData}/>
      {user.role === "ADMIN" ? <DoctorAppointment /> : null}
    </div>
  );
};

export default DoctorDetail;
