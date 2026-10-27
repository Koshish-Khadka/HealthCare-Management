import React from "react";
import Card from "../../components/common/Card";
import { ClipboardPlus, HeartPulse, User, UsersRound } from "lucide-react";
import TodaySchedule from "../../components/ui/TodaySchedule";
import PatientBarChart from "../../components/layout/PatientBarChart";

const DoctorDashboard = () => {
  const cardItems = [
    {
      id: 1,
      title: "Todays Patient",
      number: 23,
      icon: User,
      subTitle: "Unique patients today",
    },

    {
      id: 2,
      title: "Pending Appointment",
      number: 102,
      icon: HeartPulse,
      subTitle: "Total Pending Appointment",
    },
    {
      id: 3,
      title: "Completed Appointment",
      number: 509,
      icon: ClipboardPlus,
      subTitle: "Total Completed Appointment",
    },
    {
      id: 4,
      title: "Appointment",
      number: 220,
      icon: UsersRound,
      subTitle: "Total Appointment",
    },
  ];
  return (
    <div>
      {" "}
      <h1 className="text-lg md:text-xl font-semibold">
        Welcome back,Dr Koshish Khadka
      </h1>
      <p className="text-xs md:text-sm font-light text-stone-600">
        Manage your patient,appointent and bills in one place
      </p>
      <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cardItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {/* Content */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 items-start">
        <div className="md:col-span-2 min-h-[400px]">
          <PatientBarChart />
        </div>
        <div className="md:col-span-1 min-h-[300px]">
          <TodaySchedule />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
