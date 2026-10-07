import React from "react";
import Breadcrumbs from "../../components/common/BreadCrumbs";
import DoctorProfile from "../../components/layout/doctorDetail/DoctorProfile";
import DoctorCard from "../../components/common/DoctorCard";
import { Building, Trophy, Users } from "lucide-react";
import DoctorSchedule from "../../components/layout/doctorDetail/DoctorSchedule";
import DoctorAppointment from "../../components/layout/doctorDetail/DoctorAppointment";

const DoctorDetail = () => {
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
      <DoctorSchedule />
      <DoctorAppointment />
    </div>
  );
};

export default DoctorDetail;
